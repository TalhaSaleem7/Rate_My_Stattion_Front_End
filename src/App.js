



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux

import '../src/css/App.css';
import Header from './Header/Header';
import Reportersd from './reportersd/Reportersd';
import { Homepage } from './Home/Homepage';
import About from './About/About';
import Newsletter from './Newsletter/Newsletter';
import NewsletterArticle from './NewsletterArticle/NewsletterArticle';
import Viewjob from './Viewjob/Viewjob';
import Shop from './Shop/Shop';
import Viewjobdetail from './Viewjobdetail/Viewjobdetail';
import Contactus from './Contactus/Contactus';
import Jobopening from './Jobopening/Jobopening';
import StationSearchResult from './StationSearchResult/StationSearchResult';
import DirectorSearchResult from './DirectorSearchResult/DirectorSearchResult';
import MyCartSD from './MyCartSD/MyCartSD';
import EmployerLoginPG from './EmployerLoginPG/EmployerLoginPG';



function App() {
  return (
  
      <Router>
        <Routes>
        <Route path="/" exact element={<Header />} />
        <Route path="/reportersd" exact element={<Reportersd/>} />
        <Route path="/home" exact element={<Homepage/>} />
        <Route path="/about" exact element={<About/>} />
        <Route path="/newsletter" exact element={<Newsletter/>} />
        <Route path="/newsletterarticle" exact element={<NewsletterArticle/>} />
        <Route path="/viewjob" exact element={<Viewjob/>} />
        <Route path="/viewjobdetail" exact element={<Viewjobdetail/>} />
        <Route path="/shop" exact element={<Shop/>} />
        <Route path="/contactus" exact element={<Contactus/>} />
        <Route path="/jobopening" exact element={<Jobopening/>} />
        <Route path="/StationSearchResult" exact element={<StationSearchResult/>} />
        <Route path="/DirectorSearchResult" exact element={<DirectorSearchResult/>} />
        <Route path="/mycart" exact element={<MyCartSD/>} />
        <Route path="/employerlogin" exact element={<EmployerLoginPG/>} />
        </Routes>
      </Router>
   
  );
}

export default App;

