import clases from "./ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import {  useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
//Con el hook useContext  capturamos el valor del context 
//definido en App,para usarlo lo almacenamos en una constante
const ItemDetail = ({ id, img, name, price, description, stock }) => {

  
  //Como pueden existir multiples context en la app
  //hay que importar la referencia al context deseado aqui
  const { addItem, isInCart } = useContext(CartContext)


  const handleOnAdd = (quantity) => {
    
    const objProductToAdd = {
      id,
      name,
      price,
      quantity,
    };
    addItem(objProductToAdd, quantity)
    
  };

  return (
    <article className={clases.contenedorCard}>
      <div className={clases.card}>
        <picture>
          <img className={clases.imagen} src={img} alt={name} />
        </picture>
        <section className={clases.info}>
          <div className={clases.detalles}>
            <h1> {name} </h1>
            <h4> {description} </h4>
            <p> ${price} </p>
          </div>

          <div className={clases.boton}>
            {
            isInCart(id) ? (
              <Link to="/cart" className={clases.boton}>
                {" "}
                Terminar compra{" "}
              </Link>
            ) : (
              <ItemCount
                initial={1}
                modifyBy={1}
                stock={stock}
                onAdd={handleOnAdd}
              />
            )
            }
          </div>
        </section>
      </div>
    </article>
  );
};

export default ItemDetail;
