import "./Loader.css";

const Loader = () => {
  
  return (
    <div className="spinnerContainer">
      <div className="spinner"></div>
      <div className="loader">
        <p>Cargando...</p>
        <div className="words">
          <span className="word">Productos</span>
          <span className="word">Servicios</span>
          <span className="word">Entregas</span>
          <span className="word">Clientes</span>
          <span className="word">Carga completa</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
