import logo from './logo.svg';
import React from 'react'; 
import './App.css';
import Weather from "./WeatherSearch";
import WeatherSearch from './WeatherSearch';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>
         hello world 
        </h1>
        <WeatherSearch />
       </header>
    </div>
  );
}

export default App;
