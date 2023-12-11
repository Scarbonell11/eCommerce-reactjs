import clases from './ItemListContainer.module.css'
import { getProductos, getProductosByCategory } from '../../asyncMock';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader';

const ItemListContainer = ({greeting}) => {

const [productos, setProductos] = useState([])
const [loader , setLoader] = useState(true)


const { categoryId } = useParams()


useEffect(() => {

 setLoader(true)
 const asyncFunc = categoryId ? getProductosByCategory : getProductos

 asyncFunc(categoryId)
 .then((response) => {
  setProductos(response)
 })
 .catch((error => {
  console.log(error)
}))
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