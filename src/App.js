import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';
import { Route, Routes } from 'react-router-dom';
//context
import CartContextProvider ,{cartContext} from './context/CartContextProvider';
import ProductContextProvider from './context/ProductContextProvider';
import NavBar from './components/Shared/NavBar';
import Cart from './components/Cart';


function App() {
  return (
    <div className="App">

    <ProductContextProvider>
    <CartContextProvider>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path ="/signUp" element={<SignUp/>}/>
        <Route path="/store/:id" element={<ProductDetail/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/store" element={<Store/>}/>
      </Routes>   
    </CartContextProvider>
   
    </ProductContextProvider>

    </div>   
  );
}

export default App;
      // <Route path="/" exact element={<Navigate to="/store"/>}/>