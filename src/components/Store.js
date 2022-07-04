import React ,{useContext} from 'react';
//component
import Product from './Shared/Product';

//context
import {ProductsContext} from '../context/ProductContextProvider';
// Style
import styles from "./style/Store.module.css";

const Store = () => {
     const products = useContext(ProductsContext);
    return (  
     <div className={styles.container} >
         {
             products.map(product=> <Product 
                                        key={product.id}
                                        productDetail={product}
                                    />)
         }
     </div>
    );
}
 
export default Store;