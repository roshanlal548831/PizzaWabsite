import {createStore,combineReducers,applyMiddleware} from "redux";
import {thunk} from "redux-thunk";
import {composeWithDevTools} from "@redux-devtools/extension";
import {getAllPizzaReduce} from "./reducers/PizzaReducer";
// import { get } from "mongoose";


const rootReducer = combineReducers({
    getAllPizzaReduce:getAllPizzaReduce
})

const initioalState = {}
const middleware = [thunk]

const store = createStore(
    rootReducer,
    initioalState,
    composeWithDevTools( applyMiddleware(...middleware))
)

export default store

