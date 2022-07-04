
import { toast } from 'react-toastify';

export const notify = (text,type) =>{
    if (type==="success"){
        toast.success(text,{autoClose: 5000})
        
    }else{
         toast.error(text,{autoClose: 5000});
    }
}