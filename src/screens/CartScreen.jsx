import React from 'react';
import { useSelector,useDispatch} from "react-redux";
import { RiDeleteBin6Line } from "react-icons/ri";
import {deleteFromCard} from "../action/CartAction"
import Checout from '../checkout/Checout';


const CartScreen = () => {
    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;

 const dispatch = useDispatch();
 const subTotal = cartItems.reduce((x,item) =>  x + item.payload.price,0 )
//  const subtotal = cartItems.reduce((x,item) => {
//   return  x+item.payload.price
//  })
//  console.log(subtotal)


  return (
    <>
      <div className="container">
          <div className="row">
                <div className="col-md-6">
                  <h1>Card items</h1>
                    
                        {
                          cartItems.map((items,i) => {
                             return(
                               <div key={i}>
                                <div className='row p-3' >
                                   <div className="col-md-7 " >
                                     <h5>{`${items.payload.name} [${items.payload.varient}]`}</h5>
                                     <h6>{`Price : ${items.payload.quantity}x ${items.payload.prices[0][items.payload.varient]} =  ${items.payload.price}`}</h6>
                                     <h6>{`Quantity :`} 
                                 
                                     {items.payload.quantity}
                                    
                                     </h6>
                                   <h4>Delete : {   <RiDeleteBin6Line  onClick={()=>{
                                        dispatch(deleteFromCard(items))
                                      
                                      }}
                                    style={{
                                      color:"red",cursor:"pointer",
                                      }}
                                     
                                      />}</h4>

                                     </div>
                                    <div className="col-md-5">  
                                    <img src={items.payload.image} alt="" height={"100%"} width={"100%"}/>
                                   </div>

                                </div><hr />
                                  </div>
                              )
                             
                          })
                        }
                      
                </div>
                <div className="col-md-4">
                          <h1>Payment info</h1>
                          <h4>SubTotal</h4>
                          <h4>RS: {subTotal} /-</h4>
                            <Checout subTotal={subTotal} />
                </div>
          </div>
      </div>
    </>
  )
}

export default CartScreen
