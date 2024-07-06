import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import {logoutUser} from "../action/UserAction"

const Navbar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cartReducer);
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;
  return (
    <>
    <nav className="navbar container navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
   <img src="images/logo.png" alt="logiimg" />
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {
           currentUser ? (  <li className="nav-item">
            {/* <NavLink className="nav-link active" aria-current="page" >{currentUser.name}</NavLink> */}
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          {currentUser.name}
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">order</a></li>
          <li><a className="dropdown-item" onClick={()=>{dispatch(logoutUser())}}>Logout</a></li>
         
          </ul>
        </li>
            </li>
              
            ):( 
            <> 
            <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/register">Reguster</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
        </li></>)
        }
       
        <li className="nav-item">
          <NavLink className="nav-link" to="/cart">Cart{cartState.cartItems.length}</NavLink>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
