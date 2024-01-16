
import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { notify } from "../../notification/Notification";
//Con el hook useContext  capturamos el valor del context
//definido en App,para usarlo lo almacenamos en una constante
const ItemDetail = ({ id, img, name, price, description, stock }) => {
  //Como pueden existir multiples context en la app
  //hay que importar la referencia al context deseado aqui
  const { addItem, isInCart } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    const objProductToAdd = {
      id,
      name,
      price,
      quantity,
    };
    addItem(objProductToAdd, quantity);
    notify("Producto agregado con exito!");
  };

  return (

    <div className="cardi">
  <div className="card__wrapper">
    <div className="card__back">
      <Link to="/" >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 24"
        height={24}
        width={14}
      >
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth={3}
          stroke="#000"
          d="M12 2L2 12L12 22"
        />
      </svg>
      </Link>
    </div>
    <div className="card__menu" />
  </div>
  <div className="card__img">
    <img src={img} alt={name} />
  </div>
  <div className="card__title">{name} </div>
  <div className="card__subtitle">
    {description}
  </div>
  <div className="card__wrapper">
    <div className="card__price">${price} </div>
    <div className="card__counter">
    {
            isInCart(id) ? (
              <Link to="/cart" >
                {" "}
                Terminar compra
                {" "}
              </Link>
            ) : (
              <ItemCount
                initial={1}
                modifyBy={1}
                stock={stock}
                onAdd={handleOnAdd}
              />
            )}
    </div>
  </div>
</div>


 
  );
};

export default ItemDetail;





   