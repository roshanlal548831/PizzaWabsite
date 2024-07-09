import React, { useEffect, useState } from 'react';
import { getUserOrder } from '../action/OrderAction';
import { useDispatch,useSelector } from 'react-redux';
import { toast} from "react-toastify";
import Loader from "../componets/Loader"
import 'react-toastify/dist/ReactToastify.css';

const OrderScreen = () => {
  const orderState = useSelector(state => state.getUserOrderReducer);
  const {loading,error,orders} = orderState;
  const[data,setData] = useState()
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUserOrder())
  },[dispatch])

  return (
    <>
      <h1>Your orders</h1>
      {loading && (<Loader/>)}
      {error && toast("somthing went wrong")}
      {
        orders && orders.map((order,i)=>{
          return(
            
            <div className="container" key={i}>
              {console.log(order)}
            <div className="row">
                <div className="col-md-4">
                  {order.orderItems.map((item,i) => {
                    return(
                      <div key={i}>
                            <h5>{item.payload.name}[{item.payload.varient}] * {item.payload.quantity} = {item.payload.price}</h5>
                      </div>
                    )
                  } )}
                </div>
                <div className="col-md-4">
                  <h3>Address</h3>
                  <h6>Street: {order.shippingAddress.street}</h6>
                  <h6>Street: {order.shippingAddress.city}</h6>
                  <h6>Street: {order.shippingAddress.pincode}</h6>
                  <h6>Street: {order.shippingAddress.country}</h6>
                </div>
                <div className="col-md-4">
                  <h4>Order info</h4>
                  <h6>Order Amount : {order.orderAmount}</h6>
                  <h6>Transection id : {order.transectionId}</h6>
                  <h6> Order id : {order._id}</h6>
                </div>
            </div>
         </div>
          )
            
        })
      }

    </>
  )
}

export default OrderScreen
