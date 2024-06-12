



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux


import '../src/css/App.css';

import Header from './Header/Header';
import Reportersd from './reportersd/Reportersd';
import { Homepage } from './Home/Homepage';
import About from './About/About';
import Newsletter from './Newsletter/Newsletter';



 
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
import About1 from './About/About1';
import Reportersd2 from './reportersd/Reportersd2';
import Chartah1 from './Chart/Chartah1';
import Chartah2 from './Chart/Chartah2';
import Chartah3 from './Chart/Chartah3';
import Assistantah from './Assistantah/Assistantah';
import Aboutah1 from './About/Aboutah1';
import KABCah from './KABC/KABCah';
import Experianceah from './Experianceah/Experianceah';
import Skillsah from './Skills/Skillsah';
import Educationah from './Educationah/Educationah';
import KABCah1 from './KABC/KABCah1';
import Aboutah2 from './About/Aboutah2';
import Cardah2 from './Cardah/Cardah2';
import Cardah3 from './Cardah/Cardah3';
import Scheduleah from './Scheduleah/Scheduleah';
import Stationsnaw from './Stationsah/Stationsnaw';
import Footerah from './footerah/Footerah';
import Buyerah from './Buyerah/Buyerah';
import Cooperah from './Cooperah/Cooperah';
import Cooperah1 from './Cooperah/Cooperah1';










function App() {
  return (
  
      <Router>
        <Routes>

        <Route path="/" exact element={<KABC />} />
        <Route path="/kabc2" exact element={<KABC2 />} />
        <Route path="/kabcah" exact element={<KABCah />} />
        <Route path="/kabcah1" exact element={<KABCah1 />} />
        <Route path="/Header" exact element={<Header />} />
        <Route path="/Footerah" exact element={<Footerah />} />


        <Route path="/About" exact element={<About />} />
        <Route path="/About1" exact element={<About1 />} />
        <Route path="/About2" exact element={<About2 />} />
        <Route path="/Aboutah1" exact element={<Aboutah1 />} />
        <Route path="/Aboutah2" exact element={<Aboutah2 />} />
        <Route path="/Dirctors" exact element={<Dirctors />} />
        <Route path="/Dirctors2" exact element={<Dirctors2 />} />
        <Route path="/Award" exact element={<Award />} />
        <Route path="/Award2" exact element={<Award2 />} />
        <Route path="/Openings" exact element={<Openings />} />
        <Route path="/Openings2" exact element={<Openings2 />} />
        <Route path="/Cardah" exact element={<Cardah />} />
        <Route path="/Station" exact element={<Station />} />
        <Route path="/Filter" exact element={<Filter />} />
        <Route path="/Chartah1" exact element={<Chartah1/>} />
        <Route path="/Chartah2" exact element={<Chartah2/>} />
        <Route path="/Chartah3" exact element={<Chartah3/>} />
        <Route path="/Assistantah" exact element={<Assistantah/>} />
        <Route path="/Experianceah" exact element={<Experianceah />} />
        <Route path="/Skillsah" exact element={<Skillsah />} />
        <Route path="/Educationah" exact element={<Educationah />} />
        <Route path="/Cardah2" exact element={<Cardah2 />} />
        <Route path="/Cardah3" exact element={<Cardah3 />} />
        <Route path="/Stationsnaw" exact element={<Stationsnaw />} />
        <Route path="/Buyerah" exact element={<Buyerah />} />
        <Route path="/Cooperah" exact element={<Cooperah />} />
        <Route path="/Cooperah1" exact element={<Cooperah1 />} />
 

        <Route path="/reportersd" exact element={<Reportersd/>} />
        <Route path="/reportersd2" exact element={<Reportersd2/>} />
        <Route path="/home" exact element={<Homepage/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/newsletter" exact element={<Newsletter/>} />
        </Routes>
      </Router>
   
  );
}

export default App;

