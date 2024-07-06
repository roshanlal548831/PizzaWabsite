import axios from "axios";

export const placeOrder = (token,subTotal) => async(dispatch,getSate)=>{
      dispatch({type:"PLACE_ORDER_REQUEST"})
      const currentUser = getSate().loginUserReducer.currentUser
      const cartItems = getSate().currentUser.cartItems
           try {
            const res = await axios.post("/api/order/placeorder",{token,subTotal,currentUser,cartItems});
             dispatch({type:"PLACE_ORDER_SUCCESS"});
             console.log(res);
           } catch (error) {
            dispatch({type:"PLACE_ORDER_FAIL"});
            console.log(error)

           }
};