export const cartReducer = (state ={cartItems:[]},action) => {
         switch(action.type){
            case "ADD_TO_CRD":
                return{
                    ...state,
                    cartItems : [...state.cartItems,action]
                }
               
                case "DELETE_FROM_CART" :
                    return {
                        ...state,
                        cartItems: state.cartItems.filter(
                            (item) => item._id !== action.payload._id)
                    }
            default: return state
         }
         
}