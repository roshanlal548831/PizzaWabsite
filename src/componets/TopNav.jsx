import React from 'react';
import {NavLink} from "react-router-dom";
import {MdLocalOffer} from "react-icons/md"
function TopNav() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary  ">
   <div className="container-fluid">
     <h6>
      <MdLocalOffer className='text-warning'/> &nbsp;
      Free Home Devlivery on order About 500/- Rupeescd 
      </h6>
   
    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/policy">tersm and policy</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">Admin</NavLink>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
    </>
  )
}

export default TopNav
