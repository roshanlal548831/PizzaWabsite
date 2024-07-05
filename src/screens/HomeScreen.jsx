import React, { useEffect } from 'react';
import Pizza from '../componets/Pizza';
import {useDispatch,useSelector} from "react-redux"
import {getAllPizza} from "../reducers/PizzaAction"
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
          <h1>loading ...</h1>
        )  : error? (
        <h1>Error white fatching </h1>
          )  :(    <div className="row justify-content-md-center">

            {pizzas.map((pizza,i) => {
              return(
               <div className="col-md-3 my-3 " key={i}>
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
