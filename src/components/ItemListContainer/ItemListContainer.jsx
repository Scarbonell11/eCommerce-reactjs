import clases from './ItemListContainer.module.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//obtener documentos de una coleccion y referencia de la coleccion
//query nos permite hacer una consulta compuesta de varias funciones para poder traer los productos filtrados
//where nos indica el campo que debe comparar como y con que
import { getDocs, collection, where, query } from 'firebase/firestore';
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader';
import { db } from '../../services/firebaseConfig';

const ItemListContainer = ({greeting}) => {

const [productos, setProductos] = useState([])
const [loader , setLoader] = useState(true)


const { categoryId } = useParams()


useEffect(() => {

 setLoader(true)

 //de la base de datos obtiene la coleccion llamada productos
const collectionRef = categoryId ? query(collection(db, 'productos'), where('category', '==', categoryId)) 
                                 : collection(db, 'productos')

//los documentos obtenidos vienen como promesa
getDocs(collectionRef)
//donde normalmente usamos response para firebase usaremos querysnapshot
  .then(querySnapshot => {
    const productsAdapted = querySnapshot.docs.map ((doc) => {

      const campos = doc.data()
      //los campos que cargue se obtienen de una funcion  llamada data
      return { id: doc.id, ...campos } 

    })

    setProductos(productsAdapted)
  })
  .catch((error) => {
    console.log(error)
  })
  .finally(() => {
    setLoader(false)
  })

}, [categoryId])
  
if (loader) {
  return <Loader />
}


    return (
      
    <div className= {clases.contenedor} >
       <div className= {clases.titulo} >
         <h1> {greeting} </h1>
       </div>

       <ItemList productos={productos} />
    </div>

    )
}

export default ItemListContainer