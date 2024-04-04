import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import Weather from "./Weather";



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>
         hello world 
        </h1>
        <Weather />
       </header>
    </div>
  );
}

export default App;
