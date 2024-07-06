import React, { useEffect } from 'react';
import Pizza from '../componets/Pizza';
import {useDispatch,useSelector} from "react-redux"
import {getAllPizza} from "../reducers/PizzaAction"
import Loader from '../componets/Loader';
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// import AllPizza from '../Pizza-data';

const HomeScreen = () => {
  
  const dispatch = useDispatch();

  const pizzasate = useSelector(state => state.getAllPizzaReduce)
  const {loading, pizzas,error} = pizzasate;
  
  
  useEffect(()=>{
    dispatch(getAllPizza())
    
  },[dispatch]);

  return (
    <>
       <div className="container">
        {loading?(
         <Loader/>
        )  : error? (
          toast("Error while fatching pizzas",{error})
          )  :(    <div className="row justify-content-md-center">

            {pizzas.map((pizza,i) => {
              return(
               <div className="col-md-4 my-5 p-3 " key={i}>
               <Pizza  pizza={pizza}/>
             </div>
              )
            })}
       </div>
       )}
       
       </div>
    </>
  )
}

export default HomeScreen
