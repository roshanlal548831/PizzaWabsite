import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"

const Navbar = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state => state.cartReducer);
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
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/register">Reguster</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/login">Login</NavLink>
        </li>
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
