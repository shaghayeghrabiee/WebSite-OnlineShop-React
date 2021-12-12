import React from 'react';
import { Shorten } from '../Helper/function';
//function


const Product = ({productDetail}) => {
    return ( 
        <div>
            <img src={productDetail.image} alt="product" style={{width:"200px"}}/>
            <h3>{Shorten(productDetail.title)}</h3>
            <p>Price : {productDetail.price}</p>
            <div>
                <a>Details</a>
                <div>
                   <button type="button">Add to cart</button>
                </div>
            </div>
        </div>
     );
}
 
export default Product;