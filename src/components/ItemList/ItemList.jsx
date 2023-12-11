import Item from '../Item/Item'
import clases from './ItemList.module.css'

const ItemList = ({productos}) => {
   
    return (
        <div className= {clases.contenedor}  > 
        {
            productos.map((producto) =>{
            return(
               <Item key={producto.id} {...producto} />
            )
            })
        }
        </div>
    )
}

export default ItemList