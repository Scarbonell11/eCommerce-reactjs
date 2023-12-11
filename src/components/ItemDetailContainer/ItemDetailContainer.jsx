import { useState, useEffect } from "react"
import { getProductoById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"
//este hook de la libreria nos permite utilizar la porcion dinamica de la url que en este caso
//es el id del producto, dicha id vamos a introducirla en la funcion que obtiene los productos por id



const ItemDetailContainer = () => {

const [producto, setProducto] = useState(null)

const { productoId } = useParams()

useEffect(() => {
    getProductoById(productoId)
    .then((response) =>{
        setProducto(response)
    })
} , [productoId])

return (
    <>
        <ItemDetail {...producto} />
    </>
)

}


export default ItemDetailContainer