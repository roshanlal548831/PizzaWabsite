import React, { useEffect, useState } from 'react';
import {connect, useDispatch,useSelector} from "react-redux";
import {loginUser} from "../action/UserAction"

const Login = () => {
   
  const dispatch = useDispatch()

  const[user,setUser] = useState({
    email:"",
    password:""
  });

  useEffect(()=>{
     if(localStorage.getItem("currentUser")){
      window.location.href = "/"
     }
  },[])

  const handlechange = (e) =>{
     const name = e.target.name;
     const value = e.target.value;

     setUser({
      ...user,[name]:value
     });
    
  

  };

const handleSubmit = (v) =>{
  v.preventDefault()
  dispatch(loginUser(user))

  setUser({
    email:"",
    password:""
  })
}
   
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" onChange={handlechange} value={user.email} name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value={user.password} onChange={handlechange} type="password" name='password' className="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
