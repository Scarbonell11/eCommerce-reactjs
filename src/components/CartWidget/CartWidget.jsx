import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import carrito from './assets/shopcart.svg'
import clases from  './CartWidget.module.css'

const CartWidget = () =>{

    const {totalQuantity} = useContext(CartContext)
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/cart')} className={clases.botonCarrito}>
            <img className= {clases.carro} src = {carrito} alt='carrito-compras' />
            {totalQuantity}
        </button>
    )
}

export default CartWidget