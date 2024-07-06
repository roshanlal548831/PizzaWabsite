import React from 'react'
import StripeCheckout from 'react-stripe-checkout';


const Checout = ({subTotal}) => {
    const tokenHandler = (token)=>{
        console.log(token)

    }
  return (
    <>
    <StripeCheckout
    amount={subTotal * 100}
    shippingAddress
    token={tokenHandler}
    stripeKey='pk_test_51PZZYARvR0lSYhqYKBlCyKH8aDMPrkf7MLmYC9kxgfz9jD0BUpVSleA9QcUTlgVlzrSPAjVuUrGvt3Mk3kKEkUkE00XguA3Zrf'
    currency='INR'

    >
       <button className='btn btn-primary'>Pey Now</button>
    </StripeCheckout>
    </>
  )
}

export default Checout
