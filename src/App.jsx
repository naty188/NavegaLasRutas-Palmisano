import './App.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Cart from './componentes/Cart/Cart';
import Error from './componentes/Error/Error';
import Checkout from './componentes/Checkout/Checkout';
import { ToastContainer} from 'react-toastify';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>

    <BrowserRouter>
    <CarritoProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
      </CarritoProvider>
      <ToastContainer/>
    </BrowserRouter>
    </>
  );
}

export default App;


