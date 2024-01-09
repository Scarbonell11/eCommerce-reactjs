import  "./NoProducts.css";
import { Link } from "react-router-dom";


const NoProducts = () => {
  return (
    <div className="carrito-vacio">
      <div className="contenedor-vacio">
        <div className="head">
          <div id="titulo-carrito">Bienvenido al Carrito de Compras</div>
          <div className="head-right">
            <span className="etiq-porfav">
              Por favor REVISA tu carrito de Compras
            </span>
          </div>
        </div>
        <div className="nohay-productos">
          <div className="aviso-vacio">
            <div className="text-vacio">
              ¡Su carrito esta vacío!
              <div className="slide-header">
              </div>
            </div>
          </div>
        </div>
        <div className="botones-bot4">
          <br />
          <Link to='/' >Ir a comprar</Link>
          <Link to='/' > Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
};

export default NoProducts;
