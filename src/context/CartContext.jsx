//context no es un hook, por lo tanto puedo usarlo fuera de la funcion app
//como un modulo
//una vez creado el objeto context debo acceder al componente
//provider dentro de el y envolver a todos los componentes que pretendan usarlo
//a traves del valor definido en las props
//en los parametros de createcontext definimos el estado inicial
//para que otros componentes fuera del context accedan a el

import { useState, createContext } from "react";
import { notifyInfo } from "../notification/Notification";

export const CartContext = createContext({
  cart: [],
  addItem: () => {},
  isInCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productoToAdd) => {
    if (!isInCart(productoToAdd.id)) {
      setCart((prev) => [...prev, productoToAdd]);
    } else {
      console.error("el producto ya esta agregado");
    }
  };

  const isInCart = (productoId) => {
    return cart.some((prod) => prod.id === productoId);
  };

  const removeItem = (productoId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== productoId);
    setCart(cartUpdated);
    notifyInfo("has eliminado un objeto del carrito")
  };

  const getTotalQuantity = () => {
    let accu = 0;
    cart.forEach((prod) => {
      accu += prod.quantity;
    });
    return accu;
  };

  const printBill = () => {
    notifyInfo("Funcionalidad en construccion")
  }

  const getTotal = () => {
    let accu = 0;
    cart.forEach((prod) => {
      accu += prod.price * prod.quantity;
    });
    return accu;
  };

  const clearCart = () => {
    setCart([]);
    notifyInfo("El carrito se ha vaciado")
  };

  const total = getTotal();

  const totalQuantity = getTotalQuantity();

  return (
    <CartContext.Provider
      value={{
        total,
        removeItem,
        addItem,
        isInCart,
        cart,
        totalQuantity,
        clearCart,
        printBill
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
