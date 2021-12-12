import React,{ useState, useEffect, createContext } from 'react';
//get Api
import {getData} from '../services/api';

 export const ProductsContext=createContext();
const ProductContextProvider = (props) => {

    const [products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchApi=async()=>{
            setProducts(await getData())
        }
        fetchApi()

    },[])
    return (
        <ProductsContext.Provider value={products}>
            {props.children}
        </ProductsContext.Provider>

      );
}
 
export default ProductContextProvider;