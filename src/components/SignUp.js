import React,{useState,useEffect} from 'react';
import { validation } from './validation';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './Notify';
import styles from './signUp.module.css';
import { Link } from 'react-router-dom';


const SignUp = () => {
    const [data,setData]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isActivated:false
    });
    const [errors,setError]= useState({});
    const [touched,setTouched]= useState({});

    useEffect(()=>{
        setError(validation(data,"signUp"))
        console.log(errors)
    },[data]
    
    )

    const changeHandler=event=>{
        if (event.target.name=== "isActivated"){
            setData({...data, [event.target.name]:event.target.checked})
        }else{
            setData({...data, [event.target.name]:event.target.value})
        }
        // console.log(data);
    }

    const focusHandler=event=>{
        setTouched({...touched,[event.target.name]: true})
    }
    const submitHandler=event=>{
        event.preventDefault();
        if (!Object.keys(errors).length){
           notify("You sign in successfully","success");
        }else{
           notify("You inputed invalid data ","error");
           setTouched(
              { name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isActivated:true 
            })
        }
    }

    return ( 
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <h2 className={styles.header}>Sign-Up</h2>
                <div className={styles.formField}>
                    <label >Name : </label>
                    <input 
                        className={(errors.name && touched.name) ? styles.unComplited : styles.formInput}
                        type="text" 
                        name="name" 
                        value={data.name} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                        {errors.name && touched.name && <span>{errors.name}</span>}
                </div>
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
                <div className={styles.formField}>
                    <label >Confirm Password : </label>
                    <input 
                        className={(errors.confirmPassword && touched.confirmPassword) ? styles.unComplited : styles.formInput}
                        type="password" 
                        name="confirmPassword" 
                        value={data.confirmPassword} 
                        onChange={changeHandler} 
                        onFocus={focusHandler}/>
                        {errors.confirmPassword && touched.confirmPassword  && <span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formField}>
                    <div  className={styles.checkBoxContainer}>
                        <label >I accept terms of privacy policy </label>
                        <input 
                            type="checkbox" 
                            name="isActivated" 
                            value={data.isActivated} 
                            onChange={changeHandler} 
                            onFocus={focusHandler}/>     
                    </div>
                        {errors.isActivated && touched.isActivated  && <span>{errors.isActivated}</span>}
                </div>
                <div className={styles.formButtons}>
                    <Link to="/login">Login</Link>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <ToastContainer />      
        </div> 
     );
}
 
export default SignUp;


///^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
