import React from 'react';
import AllPizza from "../Pizza-data";
import Pizza from '../componets/Pizza';

const HomeScreen = () => {
  return (
    <>
       <div className="container">
        <div className="row">
             {AllPizza.map(pizza => {
               return(
                <div className="col md-6">
                <Pizza  pizza={pizza}/>
              </div>
               )
             })}
        </div>
       </div>
    </>
  )
}

export default HomeScreen
