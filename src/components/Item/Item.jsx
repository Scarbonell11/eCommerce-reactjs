import clases from "./Item.module.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, price, img }) => {
  return (
    <article className={clases.card}>
      <picture className={clases.contenedorImagen}>
        <img className={clases.imagen} src={img} alt={name} />
      </picture>

      <div className={clases.detalles}>
        <h4> {name} </h4>
        <p> ${price} </p>
      </div>

      <div className={clases.boton}>
        <Link to={`/detail/${id}`}>Ver Detalle</Link>
      </div>
    </article>
  );
};

export default Item;
