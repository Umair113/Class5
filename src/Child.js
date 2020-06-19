import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const Child=(props)=>{
   
    let counterValue = useContext(CounterContext)
    console.log(counterValue)
    return (
        <div>
        <h3>{props.name}, james {props.name} &nbsp; </h3>
         <h4>And Secret id is {counterValue[0]}  </h4>
        <h3>Hey there , I am using CounterContext</h3>
         <button onClick={()=>{counterValue[1](++counterValue[0])}}>
             Increment Context
        </button>
        </div>
    )
}
export default Child;