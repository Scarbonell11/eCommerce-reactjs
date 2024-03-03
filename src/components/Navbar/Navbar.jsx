import { Link, useNavigate } from "react-router-dom";
import clases from "./Navbar.module.css";
import logoTienda from "./assets/logotienda.png";
import CartWidget from "../CartWidget/CartWidget";
import NavDropdown from 'react-bootstrap/NavDropdown';
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

      <NavDropdown className={clases.categorias} title="Categorias" id="basic-nav-dropdown">
        <NavDropdown.Item >
          <Link to="/category/remeras">Remeras</Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item>
          <Link to="/category/pantalones">Pantalones</Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >
          <Link to="/category/camperas">Camperas</Link>
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item >
          <Link to="/category/calzado">Calzado</Link>
        </NavDropdown.Item>


      </NavDropdown>

      <CartWidget />
    </nav>
  );
};

//exportamos el componente para ser utilizado

export default Navbar;
