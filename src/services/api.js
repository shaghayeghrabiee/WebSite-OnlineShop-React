import axios from 'axios';


const BASE_URL="https://fakestoreapi.com/";

const getData=async()=>{
    const response = axios.get(`${BASE_URL}products`);
    return (await response).data;
}
export {getData}