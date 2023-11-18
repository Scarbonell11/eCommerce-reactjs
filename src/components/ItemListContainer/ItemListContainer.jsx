import clases from './ItemListContainer.module.css'

const ItemListContainer = ({greeting}) => {
    return (
      
    <div className={clases.contenedor}>
       <div className= {clases.titulo} >
         <h1> {greeting} </h1>
       </div>
    </div>

    )
}

export default ItemListContainer