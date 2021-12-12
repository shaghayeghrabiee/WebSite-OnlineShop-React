import './App.css';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Route, Routes,Navigate } from 'react-router-dom';
import ProductContextProvider from './context/ProductContextProvider';
import Store from './components/Store';

function App() {
  return (
    <div className="App">
    <ProductContextProvider>
      <Store/>
    </ProductContextProvider>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path ="/signUp" element={<SignUp/>}/>
       <Route path="/" element={<Navigate to="/store"/>}/>
      </Routes>
    </div>
  );
}

export default App;
