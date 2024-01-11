import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Bill from "../Bill/Bill";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  getDocs,
  where,
  writeBatch,
  query,
} from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";
import Loader from "../Loader/Loader";

const Checkout = () => {
  const { cart, total, clearCart, printBill } = useContext(CartContext);

  const [loader, setLoader] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [dataClient, setDataClient] = useState("");

  const createOrder = async ({ name, phone, email }) => {
    setLoader(true);

    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total,
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);

      const outOfStock = [];

      const ids = cart.map((prod) => prod.id);

      const productsRef = collection(db, "productos");

      const productsAddedFromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFromFirestore;

      docs.forEach((doc) => {
        //obtengo los campos de cada documento
        const dataDoc = doc.data();
        //me guardo la propiedad del stock de cada uno
        const stockDb = dataDoc.stock;

        const productsAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productsAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();

        const orderRef = collection(db, "orders");

        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        setDataClient(objOrder);
        clearCart();
      } else {
        console.error("hay productos fuera de stock");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  if (loader) {
    return <Loader />;
  }

  if (orderId) {
    return <Bill orderId={orderId} dataClient={dataClient} printBill={printBill} />;
  }

  return (
    <>
      <CheckoutForm onConfirm={createOrder} />
    </>
  );
};

export default Checkout;
