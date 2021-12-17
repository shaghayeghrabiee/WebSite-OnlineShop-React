import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../context/CartContextProvider';
import cart from '../../assets/icons/shop.svg';
// Style
import styles from "./NavBar.module.css";

const NavBar = () => {
    const {state} = useContext(cartContext)
    return ( 
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link  className={styles.productLink} to="/store">Products</Link>  
                <div className={styles.iconContainer}>
                 <Link to="/carts"><img src={cart} alt="cart"/></Link>
                <span>{state.itemCounter}</span>    
                </div>
                
            </div>
        </div>
     );
}
 
export default NavBar;