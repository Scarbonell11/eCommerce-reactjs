import { useState } from "react";

const ItemCount = ({ initial, modifyBy, onAdd, stock }) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    setCount((prev) => {
      if (prev < stock) {
        return prev + modifyBy;
      } else {
        return prev;
      }
    });
  };

  const decrementar = () => {
    setCount((prev) => {
      if (prev > 1) {
        return prev - modifyBy;
      } else {
        return prev;
      }
    });
  };

  return (
    <div>
      <p> {count} </p>
      <button onClick={incrementar}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
};

export default ItemCount;
