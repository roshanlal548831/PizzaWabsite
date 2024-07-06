import React, { useState } from 'react'
import {useDispatch,useSelector} from "react-redux";
import {registerUser} from "../action/UserAction";
import Loader from "../componets/Loader"
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const[user,setUser] = useState({
          name:"",
          email: "",
          password:"",
          cpassword:""
    });

    const dispatch = useDispatch();
    const registerhandler = useSelector(state => state.registerUserReducer);
// console.log(registerUser)
const{error,success,loading} = registerhandler
    // console.log(error)

    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
       
             setUser(
                {
                    ...user,[name]:value
                }
            )}

    const handelSubmit = (e)=>{

       e.preventDefault();
        if(user.password === user.cpassword){
           dispatch(registerUser(user))
        }else{
            alert("not match")
        }
    console.log(user)
        setUser({
            name:"",
            email: "",
            password:"",
            cpassword:""
      })

    }        

  return (
    <>
             <div className="container">
              {loading && <Loader/>}
              {error && toast("Sumthing went wrong")}
               <form onSubmit={handelSubmit}>
               <div className="mb-3">
                       <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                       <input type="text" name='name' onChange={handleInput} value={user.name} className="form-control" id="exampleInputPassword1"/>
                     </div>

                     <div className="mb-3">
                       <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                       <input type="email" name='email' onChange={handleInput} value={user.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                       <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                     </div>

                     <div className="mb-3">
                       <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                       <input type="password" name='password' onChange={handleInput} value={user.password} className="form-control" id="exampleInputPassword1"/>
                     </div>
                     <div className="mb-3">
                       <label htmlFor="exampleInputPassword1" className="form-label">ConformPassword</label>
                       <input type="password" name='cpassword' onChange={handleInput} value={user.cpassword} className="form-control" id="exampleInputPassword1"/>
                     </div>

                     <button type="submit" className="btn btn-primary">Register</button>
                   </form>
           </div>
    </>
  )
}

export default Register
