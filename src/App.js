



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux

import '../src/css/App.css';
import Header from './Header/Header';



function App() {
  return (
  
      <Router>
        <Routes>
        <Route path="/" exact element={<Header />} />


        </Routes>
      </Router>
   
  );
}

export default App;

