import React, { useState } from 'react'

const Register = () => {
    const[user,setUser] = useState({
          name:"",
          email: "",
          password:"",
          cpassword:""
    });

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
            console.log(user)
        }else{
            alert("not match")
        }
    
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
