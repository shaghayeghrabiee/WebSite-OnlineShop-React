import React,{useContext} from 'react';
//context
import { cartContext } from '../context/CartContextProvider';
//function
import { Shorten } from '../Helper/function';
//icon
import trashIcon from '../assets/icons/trash.svg';

// Style
import styles from "./Cart.module.css";

const Cart = (props) => {

    const {image,title,price,quantity}=props.Data;
    const { dispatch } =useContext(cartContext);

    return (
        <div >
            <div className={styles.container}>
                <img className={styles.productImage} src={image} alt="product"/>
                <div className={styles.data}>
                    {Shorten(title)}
                    {price}  
                </div>
                <div>
                   <span className={styles.quantity}>{quantity}</span>      
                </div>
                <div className={styles.buttonContainer}>
                    {quantity > 1 ? <button onClick={()=>{dispatch({type:"DECREASE", payload:props.Data})}} >-</button>:
                    <button onClick={()=>{dispatch({type:"REMOVE_ITEM",payload:props.Data})}}><img style={{width:"20px"}} src={trashIcon} alt="trash"/></button>
                    }
                    <button onClick={()=>{dispatch({type:"INCREASE",payload:props.Data})}}>+</button>
                </div>
                
            </div>  
        </div>
    )
}
 
export default Cart;