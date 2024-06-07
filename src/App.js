



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux

import '../src/css/App.css';
import Header from './Header/Header';
import Reportersd from './reportersd/Reportersd';
import { Homepage } from './Home/Homepage';
import About from './About/About';
import Newsletter from './Newsletter/Newsletter';



function App() {
  return (
  
      <Router>
        <Routes>
        <Route path="/" exact element={<Header />} />
        <Route path="/reportersd" exact element={<Reportersd/>} />
        <Route path="/home" exact element={<Homepage/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/newsletter" exact element={<Newsletter/>} />
        </Routes>
      </Router>
   
  );
}

export default App;

