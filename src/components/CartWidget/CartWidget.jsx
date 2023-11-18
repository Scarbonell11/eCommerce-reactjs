
import carrito from './assets/shopcart.svg'
import clases from  './CartWidget.module.css'

const CartWidget = () =>{
    return (
        <button className={clases.botonCarrito}>
            <img className= {clases.carro} src = {carrito} alt='carrito-compras' />
            0
        </button>
    )
}

export default CartWidget