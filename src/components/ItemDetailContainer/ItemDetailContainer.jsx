import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader';
// aqui en el detalle del producto debemos traer un solo documento y no toda la coleccion
//la funcion es la misma pero en singular
//en doc guardaremos la referencia al documento que coincida con la id que estoy buscando
import { getDoc, doc } from "firebase/firestore";
import { useParams } from "react-router-dom"
import { db } from "../../services/firebaseConfig";
//este hook de la libreria nos permite utilizar la porcion dinamica de la url que en este caso
//es el id del producto, dicha id vamos a introducirla en la funcion que obtiene los productos por id



const ItemDetailContainer = () => {

const [producto, setProducto] = useState(null)
const [loader , setLoader] = useState(true)

const { productoId } = useParams()

useEffect(() => {

    setLoader(true)

    //base de datos, nombre de la coleccion e id del documento
    const documentRef = doc(db, 'productos', productoId)

    getDoc(documentRef)
    .then(queryDocumentSnapshot =>{
        const campos = queryDocumentSnapshot.data()
        const productAdapted = {id: queryDocumentSnapshot.id , ...campos}
        setProducto(productAdapted)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        setLoader(false)
    })

  
} , [productoId])

if (loader) {
    return <Loader />
  }

return (
    <>
        <ItemDetail {...producto} />
    </>
)

}


export default ItemDetailContainer