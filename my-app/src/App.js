import React from 'react';
import './App.css';
import Insults from './components/Insults.js';


function App() {
  return (
    <div className="App">
    <h1>Yo....Be Ready To Get Inuslted!!!</h1>
    <Insults />
    </div>
  );
}

export default App;


// api for insult generator
// https://evilinsult.com/generate_insult.php
// has 200 of them....lol