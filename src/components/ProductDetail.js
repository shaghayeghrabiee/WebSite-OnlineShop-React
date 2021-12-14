import React,{useContext} from 'react';
import {ProductsContext} from '../context/ProductContextProvider';
import {Link, useParams} from "react-router-dom";


const ProductDetail = () => {
    const params= useParams(); 
    // console.log(params);
    const id= params.id;
    const products= useContext(ProductsContext);
    const productDetail=products[id-1];
    const {image,title,description,category,price}=productDetail;
    return (  
       
        <div>
            <img src={image} alt=""/>
            <p>Description: {description}</p>
            <p><span>category:</span> {category}</p>
            <div>
                <p>Price : ${price} </p>
                <Link to="/store"> Back to shop</Link>
            </div>
          

        </div>
    );
}
 
export default ProductDetail;