import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux

import "../src/css/App.css";

import Header from "./Header/Header";
import Reportersd from "./reportersd/Reportersd";
import { Homepage } from "./Home/Homepage";
import About from "./About/About";
import Newsletter from "./Newsletter/Newsletter";

import Dirctors from "./Dirctors/Dirctors";
import Award from "./Award/Award";
import Openings from "./Openings/Openings";
import Cardah from "./Cardah/Cardah";
import KABC from "./KABC/KABC";
import KABC2 from "./KABC/KABC2";
import About2 from "./About/About2";
import Dirctors2 from "./Dirctors/Dirctors2";
import Award2 from "./Award/Award2";
import Openings2 from "./Openings/Openings2";
import Station from "./Station/Station";
import Filter from "./Filter/Filter";
import AccountSettings from "./Accountsetting/Accountsetting_h";
import FaqDetail from "./FAQ/Faqdetails_h";
import FAQPage from "./FAQ/Faqmain_h";
import FaqSearchresult from "./FAQ/Faqsearchresult_h";
import TermsAndConditions from "./TermsandCondition/Termandcondh";
import Workforus from "./WorkforUs/Workforus_h";
import Abouth from "./Popups/Profile_popups/About_h";
import ExperienceForm from "./Popups/Profile_popups/Experience_h";
import SkillsForm from "./Popups/Profile_popups/Skills_h";
import EducationForm from "./Popups/Profile_popups/Education_h";
import StationAboutForm from "./Popups/Station_profile_popups/Stationabout_h";
import NewsDirectorForm from "./Popups/Station_profile_popups/Newsdirector_h";
import AwardForm from "./Popups/Station_profile_popups/Award_h";
import JobOpeningForm from "./Popups/Station_profile_popups/Jobopening_h";
import SubmitNewsDirectorForm from "./Popups/Submitpopup_h.js/SubmitDirector_h";
import ApplyForm from "./Popups/Submitpopup_h.js/Apply_h";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<KABC />} />
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
        <Route path="/reportersd" exact element={<Reportersd />} />
        <Route path="/home" exact element={<Homepage />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/newsletter" exact element={<Newsletter />} />
        {/* hamza routes */}
        <Route path="/accountsettingh" exact element={<AccountSettings />} />
        <Route path="/faqmainh" exact element={<FAQPage />} />
        <Route path="/faqdetailh" exact element={<FaqDetail />} />
        <Route path="/faqsearchresulth" exact element={<FaqSearchresult />} />
        <Route
          path="/termandconditionh"
          exact
          element={<TermsAndConditions />}
        />
        <Route path="/workforush" exact element={<Workforus />} />
        <Route path="/abouth" exact element={<Abouth />} />
        <Route path="/experienceh" exact element={<ExperienceForm />} />
        <Route path="/skillsh" exact element={<SkillsForm />} />
        <Route path="/educationh" exact element={<EducationForm />} />
        <Route path="/stationabouth" exact element={<StationAboutForm />} />
        <Route path="/newsdirectorh" exact element={<NewsDirectorForm />} />
        <Route path="/awardh" exact element={<AwardForm />} />
        <Route path="/jobopeningh" exact element={<JobOpeningForm />} />
        <Route
          path="/submitnewsdirectorh"
          exact
          element={<SubmitNewsDirectorForm />}
        />
        <Route path="/applyformh" exact element={<ApplyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
