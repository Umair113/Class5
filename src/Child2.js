import React, { useReducer } from "react";
import CounterReducer from "./CounterReducer"

const Child2=()=>{
    let [state,dispatch]=useReducer(CounterReducer,7);
    console.log("State:"+state);
    console.log("Dispatch:"+dispatch);
    return(
        <div>
            <h3>Hey there , I am using CounterReducer</h3>
            <h3>Value of Reducer is:{state}</h3>
            <button onClick={()=>{dispatch("INCREMENT")}}>
                Increment Reducer
            </button>
        </div>

    )

}

export default Child2;