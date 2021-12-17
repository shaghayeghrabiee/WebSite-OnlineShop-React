import React,{useContext} from 'react';
import {ProductsContext} from '../context/ProductContextProvider';
import {Link, useParams} from "react-router-dom";
// Style
import styles from "./productDetail.module.css";

const ProductDetail = () => {
    const params= useParams(); 
    // console.log(params);
    const id= params.id;
    const products= useContext(ProductsContext);
    const productDetail=products[id-1];
    const {image,title,description,category,price}=productDetail;
    return (  
       
        <div className={styles.container}>
            <img className={styles.image}  src={image} alt=""/>
            <div className={styles.textContainer}>
            <p className={styles.description}>Description: {description}</p>
            <p className={styles.category}><span>category:</span> {category}</p>
            <div className={styles.buttonContainer}>
                <span className={styles.price} >Price : ${price} </span>
                <Link to="/store"> Back to shop</Link>
            </div>
                
            </div>
          

        </div>
    );
}
 
export default ProductDetail;