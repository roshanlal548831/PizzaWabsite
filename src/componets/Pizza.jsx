import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {addToCart} from "../action/CartAction"

const Pizza = ({pizza}) => {
    const[varient,setVarient] = useState("small");
    const[quantity,setQuantity  ] = useState(1);
    
    const dispatch = useDispatch();
    const addToCartHandler = () =>{
      dispatch(addToCart(pizza,quantity,varient))
    }

  return (
    <>
      <div className="card" style={{width: "18rem"}}>
            <img  src={pizza.image} className="card-img-top" alt="pizza-img" 
             style={{height:"219px"}}/>
               <div className="card-body">
               <h5 className="card-title">{pizza.name}</h5>
               <hr />
            <div className="card-text">
                <div className="row">
                    <div className="col md-6">
                        <h6>Verients</h6>
                        <select value={varient} onChange={(e)=> setVarient(e.target.value)}>
                            {pizza.variants.map((varients,i) =>{
                                return(
                                    <option key={i} >{varients}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className="col-6">
                         <h6>Quantity</h6>
                         <select value={quantity} onChange={(e)=> setQuantity( e.target.value)}>

                        {[...Array(10).keys()].map((v,i)=>{
                            return(
                                <option value={i +1 } key={i}>{i +1 }</option>
                            )
                        })}
                        </select>
                    </div>
                </div>
            </div>
           <div className="row">
              <div className="col md-6">
                Price : {pizza.prices[0][varient] * quantity}
              </div>
              <div className="col md-6">
                <button onClick={addToCartHandler} className="btn bg-warning text-white">
                   Add to card
                </button>
                
              </div>
            
           </div>
       </div>
    </div>
    

    </>
  )
}

export default Pizza
