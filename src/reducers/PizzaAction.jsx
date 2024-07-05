import axios from 'axios'
// import { Types } from 'mongoose'

export const getAllPizza = () => async(dispatch) => {
     dispatch({type: "GET_PIZZAS_REQUEST"});
     try {
        const res = await axios.get("/api/pizza/getAllPizzas")
        dispatch({type: "GET_PIZZAS_SUCCESS", payload:res.data});

     } catch (err) {
        dispatch({type: "GET_PIZZAS_Fail", payload:err});

     }
}