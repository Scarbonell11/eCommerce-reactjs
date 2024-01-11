import clases from "./ItemListContainer.module.css";
import { notifyError } from "../../notification/Notification";
import { useParams } from "react-router-dom";
import { getProductos } from "../../services/firebase/firestore/productos";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
import { useAsync } from "../../hooks/useAsync";


const ItemListContainer = ({ greeting }) => {

  const { categoryId } = useParams();
  
//custom hook useAsync
  const {data: productos, loader, error} = useAsync(() => getProductos(categoryId), [categoryId])

  if (loader) {
    return <Loader />;
  }

  if (error) {
    notifyError("Hubo un error")
  }

  return (
    <div className={clases.contenedor}>
      <div className={clases.titulo}>
        <h1> {greeting} </h1>
      </div>

      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
