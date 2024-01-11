import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
//este hook de la libreria nos permite utilizar la porcion dinamica de la url que en este caso
//es el id del producto, dicha id vamos a introducirla en la funcion que obtiene los productos por id
import { useParams } from "react-router-dom";
import { getProductosById } from "../../services/firebase/firestore/productos";
import { useAsync } from "../../hooks/useAsync";
import { notifyError } from "../../notification/Notification";


const ItemDetailContainer = () => {


  const { productoId } = useParams();
  const {data: producto , loader, error} = useAsync(() => getProductosById(productoId), [productoId])
  
  if (loader) {
    return <Loader />;
  }

  if (error) {
    notifyError("Hubo un error")
  }

  return (
    <>
      <ItemDetail {...producto} />
    </>
  );
};

export default ItemDetailContainer;
