import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch,useSelector } from 'react-redux';
import { placeOrder } from '../action/OrderAction';
import Loader from "../componets/Loader";
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Checout = ({subTotal}) => {
    const orderState = useSelector(state => state.placeOrderReducer);
    const {loading,error,success} = orderState
    const dispatch = useDispatch()

    const tokenHandler = (token)=>{
        dispatch(placeOrder(token,subTotal))
        console.log(token)
    }
  return (
    <>
    {loading && (<Loader/>)}
    {error && toast("somthing went wrong")}
    {success && toast.success("order placed success")}
    
    <StripeCheckout
    amount={subTotal * 100}
    shippingAddress
    token={tokenHandler}
    stripeKey='pk_test_51PZZYARvR0lSYhqYKBlCyKH8aDMPrkf7MLmYC9kxgfz9jD0BUpVSleA9QcUTlgVlzrSPAjVuUrGvt3Mk3kKEkUkE00XguA3Zrf'
    currency='INR'>
       <button className='btn btn-primary'>Pey Now</button>
    </StripeCheckout>
    </>
  )
}

export default Checout
