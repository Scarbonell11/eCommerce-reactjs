//browserrouter
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
import Notification from './notification/Notification.jsx'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartView from './components/CartView/CartView'
import { CartProvider } from './context/CartContext'
import NotFound from './components/NotFound/NotFound.jsx'
import Checkout from './components/Checkout/Checkout.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {

  return (
    <>
      <Notification />
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenido/a aqui encontraras ¡lo tuyo!'} />} />
            <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenido/a aqui encontraras ¡lo tuyo!'} />} />
            <Route path='/detail/:productoId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartView />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
