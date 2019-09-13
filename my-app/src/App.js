import React from 'react';
import { Route } from 'react-router-dom';
import Insults from './components/Insults.js';
import Navigation from './components/Navigation';
import Main from './components/Main.js';
import './App.css';


function App() {
  return (
    <div className="App">
    <Navigation />

    <Route 
    exact path='/'
    component={Main}
    />

    <Route
    exact path='/Insults'
    component={Insults}
    />
    
    </div>
  );
}

export default App;


// api for insult generator
// https://evilinsult.com/generate_insult.php
// has 200 of them....lol