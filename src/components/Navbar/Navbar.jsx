
import clases from './Navbar.module.css'
import logoTienda from './assets/logotienda.png'
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () =>{
    return (
        <nav className={clases.navb}>
            <div className={clases.logo}>
                <img src={logoTienda} alt="mi-logo" />
                <h1 className={clases.titulo}>Lo Tuyo! Store</h1>
            </div>

            <section className={clases.categorias}>
            <button>Camisetas</button>
            <button>Pantalones</button>
            <button>Camperas</button>
            <button>Zapatillas</button>
            </section>

            <CartWidget />
        </nav>
    )
}

//exportamos el componente para ser utilizado 

export default Navbar