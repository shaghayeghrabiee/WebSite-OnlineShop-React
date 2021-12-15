import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContextProvider';
import cart from '../../assets/icons/shop.svg';

const NavBar = () => {
    const {state} = useContext(cartContext)
    return ( 
        <div>
            <div>
                <Link to="/store">Products</Link>  
                <img src={cart} alt="cart"/>
                <span><Link to="/cart" style={{textDecoration:"none"}}>{state.itemCounter}</Link></span>

            </div>
        </div>
     );
}
 
export default NavBar;