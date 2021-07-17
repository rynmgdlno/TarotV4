import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';

import Splash from './views/splash';
import Tarot from './views/tarot';

import './App.css';

const vh = window.innerHeight * .01;
document.documentElement.style.setProperty('--vh', `${vh}px`)

function App() {
  const darkMode = useSelector((state) => state.setDarkMode.darkMode)
  const bgColor = darkMode ? { backgroundColor: '#212121' } : { backgroundColor: '#FAFAFA' }
  
  return (
    <div
      className="App"
      style={bgColor}
    >
      <BrowserRouter basename='/'>
        <Route exact path='/' component={Splash} />
        <Route exact path='/tarot' component={Tarot} />
      </BrowserRouter>
    </div>
  );
}

export default App;
