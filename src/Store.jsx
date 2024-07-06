import {createStore,combineReducers,applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";
import {getAllPizzaReduce} from "./reducers/PizzaReducer";
import {cartReducer} from "./reducers/CartReducer";
import {registerUserReducer,loginUserReducer} from "./reducers/UserReducer"

const cartItems = localStorage.getItem("cartItems")
                 ? JSON.parse(localStorage.getItem("cartItems"))
                  : []

   const currentUser = localStorage.getItem("currentUser",)? JSON.parse(localStorage.getItem("currentUser")): null               

const rootReducer = combineReducers({
    getAllPizzaReduce:getAllPizzaReduce,
    cartReducer: cartReducer,
    registerUserReducer: registerUserReducer,
    loginUserReducer:loginUserReducer
});



const initioalState = {
    cartReducer:{
        cartItems: cartItems
    },
    loginUserReducer:{
        currentUser: currentUser
    }
}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initioalState,
    composeWithDevTools( applyMiddleware(...middleware))
)

export default store

