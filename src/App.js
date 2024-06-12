



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
import EmployerLoginPg from './EmployerLoginPg/EmployerLoginPg';
import EmployerRegisterPage from './EmployerRegisterPage/EmployerRegisterPage';
import SubcriptionPage from './SubcriptionPage/SubcriptionPage';
import SubmitAStationForm from './SubmitAStationForm/SubmitAStationForm';










function App() {
  return (
  
      <Router>
        <Routes>

        <Route path="/kabc" exact element={<KABC />} />
        <Route path="/kabc2" exact element={<KABC2 />} />
        <Route path="/Header" exact element={<Header />} />


        {/* <Route path="/About" exact element={<About />} /> */}
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

 
  l
        <Route path="/reportersd" exact element={<Reportersd/>} />
        <Route path="/" exact element={<Homepage/>} />
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
        <Route path="/employerlogin" exact element={<EmployerLoginPg/>} />
        <Route path="/employerregister" exact element={<EmployerRegisterPage/>} />
        <Route path="/subscription" exact element={<SubcriptionPage/>} />
        <Route path="/submitstaionform" exact element={<SubmitAStationForm/>} />
        </Routes>
      </Router>
   
  );
}

export default App;

