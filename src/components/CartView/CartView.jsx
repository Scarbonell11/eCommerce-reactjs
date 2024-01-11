import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import NoProducts from "../NoProducts/NoProducts";
import clases from "./CartView.module.css";

const CartView = () => {
  const { totalQuantity, cart, total, clearCart } = useContext(CartContext);

  if (totalQuantity === 0) {
    return <NoProducts />;
  }

  return (
    <div className={clases.cartlist}>
      <div className={clases.titulo}>
        <h1>Tus compras</h1>
      </div>
      {cart.map((prod) => {
        return <CartItem key={prod.id} {...prod} />;
      })}

      <div className={clases.cartlinks}>
        <h3>Total: {total} $ </h3>
        <button
          onClick={() => {
            clearCart();
          }}
        >
          Limpiar carrito
        </button>
        <Link to="/checkout">Checkout</Link>
      </div>
    </div>
  );
};

export default CartView;
