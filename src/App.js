import './App.css';
import SignUp from "./components/login/SignUp";
import Login from './components/login/Login';
import Store from './components/Store';
import ProductDetail from './components/ProductDetail';
import { Navigate, Route, Routes } from 'react-router-dom';
//context
import CartContextProvider ,{cartContext} from './context/CartContextProvider';
import ProductContextProvider from './context/ProductContextProvider';
import NavBar from './components/Shared/NavBar';
import Carts from './components/Carts';


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
        <Route path="/carts" element={<Carts/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/*" element={<Navigate to="/store" />}/>
      </Routes>   
    </CartContextProvider>
   
    </ProductContextProvider>

    </div>   
  );
}

export default App;
      // <Route path="/" exact element={<Navigate to="/store"/>}/>