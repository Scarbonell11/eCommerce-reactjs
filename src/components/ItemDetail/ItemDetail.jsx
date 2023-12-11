import clases from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ img, name, price, description }) => {
  return (
    <article className={clases.contenedorCard}>
      <div className={clases.card} >
        <picture>
          <img className={clases.imagen} src={img} alt={name} />
        </picture>

        <div className={clases.detalles}>
          <h3> {name} </h3>
          <h5> {description} </h5>
          <p> ${price} </p>
        </div>

        <div className={clases.boton}>
          <ItemCount initial={1} modifyBy={1} />
        </div>
      </div>
    </article>
  );
};

export default ItemDetail;
