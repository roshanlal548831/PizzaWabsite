import React from 'react';
import {Routes,Route, NavLink} from "react-router-dom"
import UserList from '../componets/admin/UserList';
import PizzasList from '../componets/admin/PizzasList';
import AddnewPizza from '../componets/admin/AddnewPizza';
import OrderList from '../componets/admin/OrderList';
import { useNavigate } from 'react-router-dom';



function AdminScreen() {
  const navigate = useNavigate();
  // const hanldeclick = () =>{
  //   navigate("/admin/userlist")
  // }
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className='text-center bg-dark text-white'>Admin panal</h1>
          <div className="col-md-4">
            <div className="btn-group-vertical" style={{ minHeight: "400px" }} role="group" aria-label="Vertical button group">
              <NavLink type="button" to="/admin/userlist" className="btn btn-primary ">All Users</NavLink>
              <NavLink type="button" to="/admin/pizzalist"className="btn btn-primary ">All Pizzas</NavLink>
              <NavLink type="button"to="/admin/addnewpizza" className="btn btn-primary ">Add new Pizza</NavLink>
              <NavLink type="button" to="/admin/orderlist" className="btn btn-primary ">All Orders</NavLink>
            </div>
          </div>
          <div className="col-md-8">
            <Routes>
              <Route path='/admin/userlist' element={<UserList/>} />
              <Route path='/admin/pizzalist' element={<PizzasList />} />
              <Route path='/admin/addnewpizza' element={<AddnewPizza />} />
              <Route path='/admin/orderlist' element={<OrderList />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminScreen
