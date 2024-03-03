import { useNavigate } from 'react-router-dom';
import './NoProducts.css'
import Card from 'react-bootstrap/Card'



const NoProducts = () => {
  const navigate = useNavigate()
  return (
    <article className='containerCardi'>
      <Card>
        <Card.Body  >
          <Card.Title>Carrito vacio</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Agrega productos al carrito para continuar</Card.Subtitle>
          <div>
            <Card.Link style={{ cursor: "pointer" }} onClick={() => navigate("/")} >Inicio</Card.Link>
            <Card.Link style={{ cursor: "pointer" }} onClick={() => navigate("/")} >Productos</Card.Link>
          </div>
        </Card.Body>
      </Card>
    </article>

  )
}

export default NoProducts;
