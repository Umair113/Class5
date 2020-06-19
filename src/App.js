import React, { useState } from 'react';
import './App.css';
import Parent from "./Parent"; 
import CounterContext from "./CounterContext";


function App() {
  let countState=useState(7);
 // let [count,SetCount]=useState(7);
  return (
    <CounterContext.Provider value={countState}>
    <div>
          The name's <Parent name="bond"/>
    </div>
       
    </CounterContext.Provider>
  );
}

export default App;
