import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { UI } from './redux/selectors';


import Splash from './views/splash';
import Tarot from './views/tarot';

import './App.css';

const vh = window.innerHeight * .01;
document.documentElement.style.setProperty('--vh', `${vh}px`)

function App() {
  const { darkMode } = UI()
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
