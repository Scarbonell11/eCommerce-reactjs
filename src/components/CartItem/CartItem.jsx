import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import clases from "./CartItem.module.css";

const CartItem = ({ name, price, quantity, id }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <>
      <article className={clases.card}>
        <h3 className={clases.name}> {name} </h3>
        <h3> Precio: {price} $ </h3>
        <h3> Cantidad: {quantity} </h3>
        <h3> Subtotal: {quantity * price} $ </h3>

        <div>
          <button
            className={clases.botonEliminar}
            onClick={() => removeItem(id)}
          >
            <picture>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-x"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </picture>
          </button>
        </div>
      </article>
    </>
  );
};

export default CartItem;
