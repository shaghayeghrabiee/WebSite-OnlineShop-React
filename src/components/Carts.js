import React, {useContext} from 'react';
import { cartContext } from '../context/CartContextProvider';
import Cart from './Cart';
import {Link} from 'react-router-dom';
import styles from "./Carts.module.css";

const Carts = () => {
    const {state,dispatch}=useContext(cartContext);


    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItem.map(item=> <Cart key={item.id} Data={item}/>)}
            </div>
            {
                state.itemCounter > 0 
                    && 
                <div className={styles.payments}>
                    <p><span>Total item: </span>{state.itemCounter}</p>
                    <p><span>Total payment : </span> {state.totalCost}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={()=>{dispatch({type:"CHECKOUT"})}}>CheckOut</button>
                        <button className={styles.clear} onClick={()=>{dispatch({type:"CLEAR"})}}>Clear</button>
                    </div>
                </div>
            }
            {
                state.checkout && <div className={styles.complete}>
                    <h3>Checked Out successfully </h3>
                    <Link to='/store'>More Options</Link>
                </div>
            }
            {
                 !state.checkout &&  state.itemCounter===0 && <div className={styles.complete}>
                    <h3>You cleaned your basket</h3>
                    <Link to='/store'>Back to store</Link>
                </div>
            }
        </div>
      );
}
 
export default Carts;
