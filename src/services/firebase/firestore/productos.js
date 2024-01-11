//obtener documentos de una coleccion y referencia de la coleccion
//query nos permite hacer una consulta compuesta de varias funciones para poder traer los productos filtrados
//where nos indica el campo que debe comparar como y con que
import {
  getDocs,
  collection,
  where,
  query,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export const getProductos = async (categoryId) => {
  //de la base de datos obtiene la coleccion llamada productos
  const collectionRef = categoryId
    ? query(collection(db, "productos"), where("category", "==", categoryId))
    : collection(db, "productos");

  //los documentos obtenidos vienen como promesa
  return (
    getDocs(collectionRef)
      //donde normalmente usamos response para firebase usaremos querysnapshot
      .then((querySnapshot) => {
        const productsAdapted = querySnapshot.docs.map((doc) => {
          const campos = doc.data();
          //los campos que cargue se obtienen de una funcion  llamada data
          return { id: doc.id, ...campos };
        });
        //este retorno es como el resolve de la promesa
        return productsAdapted;
      })
      .catch((error) => {
        console.log(error);
      })
  );
};

// aqui en el detalle del producto debemos traer un solo documento y no toda la coleccion
//la funcion es la misma pero en singular
//en doc guardaremos la referencia al documento que coincida con la id que estoy buscando
export const getProductosById = async (productoId) => {
  //base de datos, nombre de la coleccion e id del documento
  const documentRef = doc(db, "productos", productoId);

  try {
    const queryDocumentSnapshot = await getDoc(documentRef);
    const campos = queryDocumentSnapshot.data();
    const productAdapted = { id: queryDocumentSnapshot.id, ...campos };
    return productAdapted;
  } catch (error) {
    console.log(error);
  }
};
