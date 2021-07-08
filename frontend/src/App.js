import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import Splash from './views/splash';
import Tarot from './views/tarot';

import './App.css';

const vh = window.innerHeight * .01;
document.documentElement.style.setProperty('--vh', `${vh}px`)

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
        <Route exact path='/' component={Splash} />
        <Route exact path='/tarot' component={Tarot} />
      </BrowserRouter>
    </div>
  );
}

export default App;
