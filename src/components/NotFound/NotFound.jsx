import clases from "./NotFound.module.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className={clases.conteiner}>
      <div className={clases.titulo}>
        <h1>404</h1>
        <h3>Parece que la pagina a la que intentas acceder no existe!</h3>
      </div>

      <div className={clases.links} >
        <Link to='/'>Volver al inicio</Link>
      </div>
    </section>
  );
};

export default NotFound;
