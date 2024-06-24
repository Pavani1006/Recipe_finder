import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpg from './components/Mainpg.js'
import Home from './components/Home.js';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/mainpg' element = {<Mainpg/>}/>
      </Routes>
    </Router>
  )
}

export default App;
