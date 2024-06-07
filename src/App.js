



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux


import '../src/css/App.css';

import Header from './Header/Header';



import About from './About/About';
import Dirctors from './Dirctors/Dirctors';
import Award from './Award/Award';
import Openings from './Openings/Openings';
import Cardah from './Cardah/Cardah';
import KABC from './KABC/KABC';
import KABC2 from './KABC/KABC2';
import About2 from './About/About2';
import Dirctors2 from './Dirctors/Dirctors2';
import Award2 from './Award/Award2';
import Openings2 from './Openings/Openings2';
import Station from './Station/Station';
import Filter from './Filter/Filter';










function App() {
  return (
  
      <Router>
        <Routes>

        <Route path="/" exact element={<KABC />} />
        <Route path="/kabc2" exact element={<KABC2 />} />
        <Route path="/Header" exact element={<Header />} />


        <Route path="/About" exact element={<About />} />
        <Route path="/About2" exact element={<About2 />} />
        <Route path="/Dirctors" exact element={<Dirctors />} />
        <Route path="/Dirctors2" exact element={<Dirctors2 />} />
        <Route path="/Award" exact element={<Award />} />
        <Route path="/Award2" exact element={<Award2 />} />
        <Route path="/Openings" exact element={<Openings />} />
        <Route path="/Openings2" exact element={<Openings2 />} />
        <Route path="/Cardah" exact element={<Cardah />} />
        <Route path="/Station" exact element={<Station />} />
        <Route path="/Filter" exact element={<Filter />} />

 
        </Routes>
      </Router>
   
  );
}

export default App;

