import axios from "axios";

export const placeOrder = (token,subTotal) => async(dispatch,getState)=>{
      dispatch({type:"PLACE_ORDER_REQUEST"})
      const currentUser = getState().loginUserReducer.currentUser
      const cartItems = getState().cartReducer.cartItems
           try {
            const res = await axios.post("/api/orders/placeorder",{token,subTotal,currentUser,cartItems});
             dispatch({type:"PLACE_ORDER_SUCCESS"});
           } catch (error) {
            dispatch({type:"PLACE_ORDER_FAIL"});
            console.log(error)

           }
};


export const getUserOrder = () => async(dispatch,getState) =>  {
     const currentUser = getState().loginUserReducer.currentUser
     dispatch({
      type: "USER_ORDER_REQUEST"
     });
     try {
      const responce = await axios.post("/api/orders/getuserorder",{userid:currentUser._id})
      console.log("the responce => ",responce.data)
      dispatch({type:"USER_ORDER_SUCCESS",payload:responce.data})
     } catch (error) {
          console.log(error)
      dispatch({type:"USER_ORDER_FAIL",payload:error})
     }
}