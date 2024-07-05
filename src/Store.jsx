import {createStore,combineReducers,applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";
import {getAllPizzaReduce} from "./reducers/PizzaReducer";
import {cartReducer} from "./reducers/CartReducer";

const cartItems = localStorage.getItem("cartItems")
                 ? JSON.parse(localStorage.getItem("cartItems"))
                  : []

const rootReducer = combineReducers({
    getAllPizzaReduce:getAllPizzaReduce,
    cartReducer: cartReducer
});



const initioalState = {
    cartReducer:{
        cartItems: cartItems
    }
}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initioalState,
    composeWithDevTools( applyMiddleware(...middleware))
)

export default store

