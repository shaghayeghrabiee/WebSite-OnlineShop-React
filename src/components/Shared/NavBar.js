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
                <div>                
                    <Link className={styles.productLink} to="/store">Products</Link>  
                    <Link className={styles.productLink} to="/login">Login</Link>
                    <Link className={styles.productLink} to="/signUp">Register</Link>
                </div>
                <div className={styles.iconContainer}>
                         <div  className={(state.itemCounter===0 ) ? styles.disabled : null}>
                            <Link to="/carts"><img src={cart} alt="cart"/></Link>
                            <span>{state.itemCounter}</span>        
                         </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default NavBar;