import React, { useState } from 'react';
import logo from './logo.svg';
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
/**<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */