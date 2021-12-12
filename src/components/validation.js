import SignUp from "./SignUp";

export const validation= (data,type)=>{
    //      /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/
    const error={};

    if(!data.email){
        error.email="email is required!";
    }else  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)){
        error.email="Email is invalid";
    }else{
        delete error.email;
    }
    if(!data.password){
        error.password="Password is required!";
    }else if(data.password.length <6){
        error.password="Password should be equal or more than 6 characters";
    }else{
        delete error.password;
    }

    if (type=== "signUp"){
        if(!data.name.trim()){
        error.name= "name is required!";
        }else{
            delete error.name;
        }
        if(!data.confirmPassword){
            error.confirmPassword="Password should be confirmed!";
        }else if(data.confirmPassword !== data.password){
            error.confirmPassword="Password does not match";
        }else{
            delete error.confirmPassword;
        }
        if(data.isActivated){ 

        delete error.isActivated;    
        }else{
        error.isActivated="Accept our regulations";
        }
    }


    return error

}