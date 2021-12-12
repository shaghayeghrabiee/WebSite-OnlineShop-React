import React,{useState,useEffect} from 'react';
import { validation } from './validation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './Notify';
import styles from './signUp.module.css';
import { Link } from 'react-router-dom';


const Login = () => {
    const [data,setData]=useState({
        email:"",
        password:"",
      
    });
    const [errors,setError]= useState({});
    const [touched,setTouched]= useState({});

    useEffect(()=>{
        setError(validation(data,"login"))
        console.log(errors)
    },[data]
    
    )

    const changeHandler=event=>{
      
            setData({...data, [event.target.name]:event.target.value})
        
        // console.log(data);
    }

    const focusHandler=event=>{
        setTouched({...touched,[event.target.name]: true})
    }
    const submitHandler=event=>{
        event.preventDefault();
        if (!Object.keys(errors).length){
           notify("You Login successfully","success");
        }else{
           notify("You inputed invalid data ","error");
           setTouched(
              { 
                email:true,
                password:true
            })
        }
    }

    return ( 
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Login</h2>
                <div className={styles.formField}>
                    <label >Email : </label>
                    <input
                        className={(errors.email && touched.email) ? styles.unComplited : styles.formInput}
                        type="email" 
                        name="email" 
                        value={data.email} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                        {errors.email && touched.email  && <span>{errors.email}</span>}
                </div>
                <div className={styles.formField}>
                    <label >Password : </label>
                    <input 
                        className={(errors.password && touched.password) ? styles.unComplited : styles.formInput}
                        type="password" 
                        name="password" 
                        value={data.password} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                        {errors.password && touched.password  && <span>{errors.password}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/signUp">Sign Up</Link>
                 <button type="submit">Login</button>
                </div>
            </form>
            <ToastContainer />      
        </div> 
     );
}
 
export default Login;


///^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
