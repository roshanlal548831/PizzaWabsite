export const addToCart = (pizza , quantity,varient) => (dispatch,getState) => {
    let cartItems = {
        name:pizza.name,
        _id:pizza._id,
        image:pizza.image,
        varient:varient,
        quantity:quantity,
        prices:pizza.prices,
        price:pizza.prices[0][varient] * quantity
    };
    dispatch({type:"ADD_TO_CRD",payload:cartItems});
    localStorage.setItem("cartItem",
        JSON.stringify(getState().cartReducer.cartItems))
    
};

export const deleteFromCard = (pizza) => (dispatch,getState) => {
       dispatch({type: "DELETE_FROM_CART",payload:pizza});
       const cartItems = getState().cartReducer.cartItems;
       localStorage.setItem("cartItems",JSON.stringify(cartItems))
}
