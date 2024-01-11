import { Link, useNavigate } from "react-router-dom";
import clases from "./Navbar.module.css";
import logoTienda from "./assets/logotienda.png";
import CartWidget from "../CartWidget/CartWidget";
//usenavigate sirve tambien para navegar entre rutas de otra manera
//sin necesidad de añadir un link

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className={clases.navb}>
      <div onClick={() => navigate("/")} className={clases.logo}>
        <img src={logoTienda} alt="mi-logo" />
        <h1 className={clases.titulo}>Lo Tuyo! Store</h1>
      </div>

      <section className={clases.categorias}>
        <Link to="/category/remeras">Remeras</Link>
        <Link to="/category/pantalones">Pantalones</Link>
        <Link to="/category/camperas">Camperas</Link>
        <Link to="/category/calzado">Calzado</Link>
      </section>

      <CartWidget />
    </nav>
  );
};

//exportamos el componente para ser utilizado

export default Navbar;
