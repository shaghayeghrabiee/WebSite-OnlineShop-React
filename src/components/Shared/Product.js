import React,{useContext} from 'react';
import { Shorten,isInCart,quantityCount } from '../../Helper/function';
import {Link} from 'react-router-dom';
import { cartContext } from '../../context/CartContextProvider';
import trashIcon from '../../assets/icons/trash.svg';
// Style
import styles from "./product.module.css";
//function


const Product = ({productDetail}) => {
     const {state,dispatch} = useContext(cartContext);
    return ( 
        <div className={styles.container}>
            <img  className={styles.cardImage}  src={productDetail.image} alt="product" style={{width:"200px"}}/>
            <h3>{Shorten(productDetail.title)}</h3>
            <p>Price : {productDetail.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/store/${productDetail.id}`}>Details</Link>
                <div className={styles.buttonContainer}>
                    {quantityCount(state,productDetail.id)=== 1 && <button className={styles.smallButton}  onClick={()=> dispatch({type:"REMOVE_ITEM", payload:productDetail})}> <img src={trashIcon} alt="Remove" style={{width: "20px"}}/></button>}    
                    {quantityCount(state,productDetail.id)> 1 && <button className={styles.smallButton}  onClick={()=> dispatch({type:"DECREASE", payload:productDetail})}> - </button>} 
                    {quantityCount(state, productDetail.id) > 0 && <span className={styles.counter}>{quantityCount(state, productDetail.id)}</span>}
                    {

                        (isInCart(state,productDetail.id)) ? 
                        <button className={styles.smallButton} onClick={()=> dispatch({type:"INCREASE" , payload:productDetail })}>+</button>
                        :
                        <button onClick={()=> dispatch ({type:"ADD_ITEM",payload:productDetail })}>Add to Cart</button>                    
                    }
                   
                

                </div>
            </div>
        </div>
     );
}

 
export default Product;