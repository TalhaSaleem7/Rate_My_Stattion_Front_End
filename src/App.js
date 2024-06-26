import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"; // Import Provider from react-redux

import "../src/css/App.css";

import About from "./About/About";
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
import SubmitNewsDirectorForm from "./Popups/Submitpopup_h/SubmitDirector_h";
import ApplyForm from "./Popups/Submitpopup_h/Apply_h";
import Header from "./Header/Header";
import Reportersd from "./reportersd/Reportersd";
import { Homepage } from "./Home/Homepage";
import Newsletter from "./Newsletter/Newsletter";
import NewsletterArticle from "./NewsletterArticle/NewsletterArticle";
import Viewjob from "./Viewjob/Viewjob";
import Shop from "./Shop/Shop";
import Viewjobdetail from "./Viewjobdetail/Viewjobdetail";
import Contactus from "./Contactus/Contactus";
import Jobopening from "./Jobopening/Jobopening";
import StationSearchResult from "./StationSearchResult/StationSearchResult";
import DirectorSearchResult from "./DirectorSearchResult/DirectorSearchResult";
import MyCartSD from "./MyCartSD/MyCartSD";
import EmployerLoginPg from "./EmployerLoginPg/EmployerLoginPg";
import EmployerRegisterPage from "./EmployerRegisterPage/EmployerRegisterPage";
import SubcriptionPage from "./SubcriptionPage/SubcriptionPage";
import SubmitAStationForm from "./SubmitAStationForm/SubmitAStationForm";
import About1 from "./About/About1";
import Reportersd2 from "./reportersd/Reportersd2";
import Chartah1 from "./Chart/Chartah1";
import Chartah2 from "./Chart/Chartah2";
import Chartah3 from "./Chart/Chartah3";
import Assistantah from "./Assistantah/Assistantah";
import Aboutah1 from "./About/Aboutah1";
import KABCah from "./KABC/KABCah";
import Experianceah from "./Experianceah/Experianceah";
import Skillsah from "./Skills/Skillsah";
import Educationah from "./Educationah/Educationah";
import KABCah1 from "./KABC/KABCah1";
import Aboutah2 from "./About/Aboutah2";
import Cardah2 from "./Cardah/Cardah2";
import Cardah3 from "./Cardah/Cardah3";
import Scheduleah from "./Scheduleah/Scheduleah";
import Stationsnaw from "./Stationsah/Stationsnaw";
import Footerah from "./footerah/Footerah";
import Buyerah from "./Buyerah/Buyerah";
import Cooperah from "./Cooperah/Cooperah";
import Cooperah1 from "./Cooperah/Cooperah1";
import RateThisProd from "./Popups/Rate_popup_h/Ratepopup_h";
import StationInfoForm from "./Popups/Info_popup_h/Stationinfo_h";
import UserInfoForm from "./Popups/Info_popup_h/Userinfo_h";
import DirectorInfoForm from "./Popups/Info_popup_h/Directorinfo_h";
import Sweatshirtah from "./Sweatshirtah/Sweatshirtah";
import Header1 from "./Header/Header2";
import Saveshare from "./Popouts/Save_pop_h";
import Editdel from "./Popouts/Edit_pop_h";
import Previewh from "./Popouts/Preview_pop_h";
import RmsHeader from "./Rmsheader/RmsHeader";
import RmsHeaderAlt from "./Rmsheader/RmsHeaderalt";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/saveshareh" exact element={<Saveshare />} />
        <Route path="/Editdelh" exact element={<Editdel />} />
        <Route path="/Previewh" exact element={<Previewh />} />
        <Route path="/rmsheader" exact element={<RmsHeader />} />
        <Route path="/rmsheaderalt" exact element={<RmsHeaderAlt />} />

        <Route path="/" exact element={<Homepage />} />
        <Route path="/kabc" exact element={<KABC />} />
        <Route path="/kabc2" exact element={<KABC2 />} />
        <Route path="/kabcah" exact element={<KABCah />} />
        <Route path="/kabcah1" exact element={<KABCah1 />} />
        <Route path="/Header" exact element={<Header />} />
        <Route path="/Header1" exact element={<Header1 />} />
        <Route path="/Footerah" exact element={<Footerah />} />
        <Route path="/about" exact element={<About />} />
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
        <Route path="/" exact element={<Homepage />} />
        <Route path="/newsletter" exact element={<Newsletter />} />
        <Route
          path="/newsletterarticle"
          exact
          element={<NewsletterArticle />}
        />
        <Route path="/viewjob" exact element={<Viewjob />} />
        <Route path="/viewjobdetail" exact element={<Viewjobdetail />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/contactus" exact element={<Contactus />} />
        <Route path="/jobopening" exact element={<Jobopening />} />
        <Route
          path="/StationSearchResult"
          exact
          element={<StationSearchResult />}
        />
        <Route
          path="/DirectorSearchResult"
          exact
          element={<DirectorSearchResult />}
        />
        <Route path="/mycart" exact element={<MyCartSD />} />
        <Route path="/employerlogin" exact element={<EmployerLoginPg />} />
        <Route
          path="/employerregister"
          exact
          element={<EmployerRegisterPage />}
        />
        <Route path="/subscription" exact element={<SubcriptionPage />} />
        <Route
          path="/submitstaionform"
          exact
          element={<SubmitAStationForm />}
        />
        <Route path="/about" exact element={<About />} />
        <Route path="/newsletter" exact element={<Newsletter />} />
        <Route
          path="/newsletterarticle"
          exact
          element={<NewsletterArticle />}
        />
        <Route path="/viewjob" exact element={<Viewjob />} />
        <Route path="/viewjobdetail" exact element={<Viewjobdetail />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/contactus" exact element={<Contactus />} />
        <Route path="/jobopening" exact element={<Jobopening />} />
        <Route
          path="/StationSearchResult"
          exact
          element={<StationSearchResult />}
        />
        <Route
          path="/DirectorSearchResult"
          exact
          element={<DirectorSearchResult />}
        />
        <Route path="/mycart" exact element={<MyCartSD />} />
        <Route path="/employerlogin" exact element={<EmployerLoginPg />} />
        <Route
          path="/employerregister"
          exact
          element={<EmployerRegisterPage />}
        />
        <Route path="/subscription" exact element={<SubcriptionPage />} />
        <Route
          path="/submitstaionform"
          exact
          element={<SubmitAStationForm />}
        />
        <Route path="/reportersd" exact element={<Reportersd />} />
        <Route path="/home" exact element={<Homepage />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/newsletter" exact element={<Newsletter />} />
        <Route path="/accountsettingh" exact element={<AccountSettings />} />
        <Route path="/faqmainh" exact element={<FAQPage />} />
        <Route path="/faqdetailh" exact element={<FaqDetail />} />
        <Route path="/faqsearchresulth" exact element={<FaqSearchresult />} />
        <Route
          path="/termandconditionh"
          exact
          element={<TermsAndConditions />}
        />
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
        <Route path="/stationinfoh" exact element={<StationInfoForm />} />
        <Route path="/userinfoh" exact element={<UserInfoForm />} />
        <Route path="/directorinfoh" exact element={<DirectorInfoForm />} />
        <Route path="/Chartah1" exact element={<Chartah1 />} />
        <Route path="/Chartah2" exact element={<Chartah2 />} />
        <Route path="/Chartah3" exact element={<Chartah3 />} />
        <Route path="/Assistantah" exact element={<Assistantah />} />
        <Route path="/Experianceah" exact element={<Experianceah />} />
        <Route path="/Skillsah" exact element={<Skillsah />} />
        <Route path="/Educationah" exact element={<Educationah />} />
        <Route path="/Cardah2" exact element={<Cardah2 />} />
        <Route path="/Cardah3" exact element={<Cardah3 />} />
        <Route path="/Stationsnaw" exact element={<Stationsnaw />} />
        <Route path="/Buyerah" exact element={<Buyerah />} />
        <Route path="/Cooperah" exact element={<Cooperah />} />
        <Route path="/Cooperah1" exact element={<Cooperah1 />} />
        <Route path="/reportersd2" exact element={<Reportersd2 />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/newsletter" exact element={<Newsletter />} />
        <Route
          path="/newsletterarticle"
          exact
          element={<NewsletterArticle />}
        />
        <Route path="/viewjob" exact element={<Viewjob />} />
        <Route path="/viewjobdetail" exact element={<Viewjobdetail />} />
        <Route path="/shop" exact element={<Shop />} />
        <Route path="/contactus" exact element={<Contactus />} />
        <Route path="/jobopening" exact element={<Jobopening />} />
        <Route
          path="/stationsearchresult"
          exact
          element={<StationSearchResult />}
        />
        <Route
          path="/directorsearchresult"
          exact
          element={<DirectorSearchResult />}
        />
        <Route path="/FAQ" exact element={<FAQPage />} />
        <Route
          path="/StationSearchResult"
          exact
          element={<StationSearchResult />}
        />
        <Route
          path="/DirectorSearchResult"
          exact
          element={<DirectorSearchResult />}
        />
        <Route path="/productdetail" exact element={<Sweatshirtah />} />
        <Route
          path="/stationsearchresult"
          exact
          element={<StationSearchResult />}
        />
        <Route
          path="/directorsearchresult"
          exact
          element={<DirectorSearchResult />}
        />
        <Route path="/FAQ" exact element={<FAQPage />} />
        <Route
          path="/StationSearchResult"
          exact
          element={<StationSearchResult />}
        />
        <Route
          path="/DirectorSearchResult"
          exact
          element={<DirectorSearchResult />}
        />
        <Route path="/rateh" exact element={<RateThisProd />} />
        <Route path="/Sweatshirtah" exact element={<Sweatshirtah />} />
      </Routes>
    </Router>
  );
}

export default App;
