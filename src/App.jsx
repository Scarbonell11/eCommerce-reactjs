
//este componente de la libreria nos sirve para envolver todos los componentes de nuestra aplicacion
//que tengan que ver con la navegacion
//y dentro de el otro componente Routes envolveremos todos aquellos componentes que dependan 
//de una ruta
//en Route vamos a definir la url, colocando dicha url en una prop llamada path y el componente
//a mostrar en element
//el componente Link nos servira para movernos con enlaces entre componentes 
//tiene una prop to para indicar la ruta hacia donde se dirige
//para asignar porciones dinamicas en la url podemos definirlas tras un :
//estas podran ser usadas como parametros por el hook useParams

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenido/a aqui encontraras ¡lo tuyo!'}/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenido/a aqui encontraras ¡lo tuyo!'}/>} />
          <Route path='/detail/:productoId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>No hay productos cargados para esta categoria</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
