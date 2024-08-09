import React, { useEffect, useState } from "react";

import StationAboutPopup from "../Popups/Station_profile_popups/Stationabout_h";
import DirectorPopup from "../Popups/Station_profile_popups/Newsdirector_h";
import AwardPopup from "../Popups/Station_profile_popups/Award_h";
import JobopeningPopup from "../Popups/Station_profile_popups/Jobopening_h";

import { Modal, Button, ModalBody } from "react-bootstrap";
import kabc from "../img/kabc.png";
import Assistant from "../img/Assistant.png";
import Award from "../Award/Award";
import { FaPlusCircle } from "react-icons/fa";
import Jobopening from "../Popups/Station_profile_popups/Jobopening_h";
import Dirctors from "../Dirctors/Dirctors";
import Openings from "../Openings/Openings";
import Cardah from "../Cardah/Cardah";
import About2 from "../About/About2";
import Dirctors2 from "../Dirctors/Dirctors2";
import Award2 from "../Award/Award2";
import Openings2 from "../Openings/Openings2";
import Station from "../Station/Station";
import Filter from "../Filter/Filter";
import Reportersd from "../reportersd/Reportersd";
import Reportersd2 from "../reportersd/Reportersd2";
import Chartah1 from "../Chart/Chartah1";
import Chartah2 from "../Chart/Chartah2";
import Chartah3 from "../Chart/Chartah3";
import Assistantah from "../Assistantah/Assistantah";
import Jobah from "../Jobah/Jobah";
import Footerah from "../footerah/Footerah";
import { Container } from "react-bootstrap";
import Header1 from "../Header/Header2";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css";
import axios from "axios";
import { baseurl } from "../baseurl";
import EducationForm from "../Popups/Profile_popups/Education_h";
import ApplyForm from "../Popups/Submitpopup_h/Apply_h";
import Dirctors3 from "../Dirctors/Dirctors3";
import Reportersd2New from "../reportersd/Reportersd2new";
import Station2 from "../Station/Station2";
// import { profile } from "console";

const Seeprofile = () => {
  const closePopup = (e) => {
    console.log(e, "TS");
    setShowModal(false);
  };

  const navigate = useNavigate();
  const usersetting = () => navigate("/accountsettingh");
  const [userdata, setUser] = useState({});
  const [aboutsdata, setAboutsUser] = useState({});
  const [directordata, setdirectorsUser] = useState({});
  const [awardsdata, setawardsUser] = useState({});
  const [showrequest, setShowrequest] = useState(false);
  const [jobContent, setjobContent] = useState([]);
  const [jobData, setjobData] = useState({});


  const [showModals, setShowModals] = useState(false);

  const handleSelectChanges = () => {
    setShowModals(true);
  };

  const handleCloses = () => {
    setShowModals(false);
  };

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("stationData");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      console.log('hello',user, userdata);
      // setUser(user)

      fetchUserData(user.id);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`${baseurl}/getuserdata/${userId}`);

      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const ongetabout = () => {
    console.log("here");
    const aboutUser = localStorage.getItem("aboutData");
    const alpha = JSON.parse(aboutUser);
    setAboutsUser(alpha);
    console.log("done", aboutsdata, "alpha", alpha);
  };

  const ongetdirector = () => {
    console.log("director here");

    const directorUser = localStorage.getItem("directorUser");

    const alphadirector = JSON.parse(directorUser);

    setdirectorsUser(alphadirector);

    console.log("done", directordata, "alphadirector", alphadirector);
  };

  const ongetaward = () => {
    console.log("director here");

    const AwardUser = localStorage.getItem("AwardUser");

    const alphaaward = JSON.parse(AwardUser);

    setdirectorsUser(alphaaward);

    console.log("done", awardsdata, "alphaaward", alphaaward);
  };
  
 
  const onFecth = () => {
    
    setShowrequest(true);

    fetchJobsData();
  };

  const fetchJobsData = async () => {
    const id = localStorage.getItem("jobgetId");

    try {
      const response = await axios.get(`${baseurl}/jobbyjobid/${id}`);
      console.log("xxxxx", response.data[0].Job);
      setjobContent(response.data);
      setjobData(response.data[0].Job);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const [selectedOption, setSelectedOption] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSelectChange = (option) => {
    setSelectedOption(option);
    setShowModal(true);
    setIsOpen(false);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedOption(null);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [ContactData, setContactData] = useState([]);
  
  useEffect(() => {
    const fetchContactData = async () => {
        try {
            const response = await axios.get(`${baseurl}/getcontacts`);
            setContactData(response.data);
        } catch (err) {
            console.error("Error fetching Contact data:", err);
        }
    };

    fetchContactData();
}, []);

  return (
    <>
      <Header1 />

      <Modal
    show={showModals}
    onHide={setShowModals}
    size="xl"
    aria-labelledby="contained-modal-title-vcenter"
    centered
>
    <Modal.Body>
        <ApplyForm closePopup={handleCloses} />
    </Modal.Body>
</Modal>
      <Tabs>
        <section class="KABC-ah">
          <Container>
            <div class="main-KABC-ah ah-spas">
              <div class="KABC-box-ah">
                <div class="KABC-part-1-ah">
                  <div class="KABC-logo-ah">
                    <img src={kabc} alt="" />
                   
                  </div>

                  <div class="KABC-tital-ah">
                    <span>
                      <h2>{userdata.username}</h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <path
                          d="M15.4735 20.2877C15.2633 20.261 14.9807 20.2409 14.7113 20.1874C14.5799 20.1607 14.5274 20.1941 14.4551 20.3011C13.5746 21.5843 12.3656 22.2192 10.8281 22.159C9.48114 22.1056 8.4167 21.484 7.6348 20.3679C7.52967 20.2209 7.45082 20.1674 7.26684 20.2008C4.92113 20.6152 2.75283 19.0312 2.43744 16.6319C2.37831 16.1842 2.44401 15.7163 2.47687 15.2619C2.48344 15.1282 2.48344 15.0614 2.36517 14.9812C-0.0922437 13.2636 -0.0856731 9.74814 2.37174 8.0038C2.47687 7.93029 2.49658 7.87014 2.47687 7.74316C2.04978 5.31044 3.53473 3.15842 5.93301 2.77078C6.38638 2.69727 6.85946 2.77747 7.32598 2.8042C7.44425 2.81088 7.50996 2.81757 7.5888 2.70395C9.32344 0.191033 12.7336 0.18435 14.4617 2.69727C14.5339 2.8042 14.5996 2.81757 14.7245 2.79752C17.1162 2.3631 19.2254 3.87353 19.6065 6.31961C19.6787 6.77408 19.6065 7.24859 19.5736 7.70974C19.5605 7.85009 19.5736 7.9236 19.6984 8.01049C22.1361 9.70136 22.1296 13.2836 19.6919 14.9745C19.5802 15.0547 19.5539 15.1148 19.5802 15.2552C20.0073 17.6812 18.5092 19.8266 16.1109 20.2275C15.9138 20.2676 15.7232 20.2676 15.4735 20.2877ZM10.0396 12.1608C10.0068 12.1675 9.96737 12.1742 9.93451 12.1742C9.88852 12.094 9.8491 12.0071 9.78996 11.9403C9.39572 11.5326 9.00149 11.1182 8.58754 10.7239C8.16045 10.3162 7.5231 10.3363 7.12229 10.744C6.72148 11.1516 6.70177 11.8066 7.10915 12.2276C7.81877 12.9695 8.53497 13.698 9.26431 14.4198C9.67826 14.8274 10.2959 14.8341 10.7098 14.4198C12.1225 13.0029 13.5221 11.5727 14.915 10.1425C15.1976 9.85508 15.2764 9.4875 15.1647 9.09986C14.9347 8.30455 13.9952 8.07732 13.3907 8.67882C12.3196 9.75483 11.2552 10.8442 10.1908 11.9336C10.1382 12.0004 10.0922 12.0873 10.0396 12.1608Z"
                          fill="#89C400"
                        />
                      </svg>
                    </span>
                    <p>{userdata.stationtype}</p>

                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="17"
                        viewBox="0 0 14 17"
                        fill="none"
                      >
                        <path
                          d="M0.400391 7.01762C0.400391 3.81044 2.19097 1.30766 4.92627 0.437829C8.86993 -0.821563 12.9784 1.41973 13.7144 5.45939C14.0989 7.55126 13.5771 9.43501 12.1984 11.084C10.7209 12.8503 9.21596 14.6007 7.72747 16.3617C7.32652 16.8366 6.90908 16.8366 6.50263 16.3617C4.96471 14.5473 3.41032 12.7436 1.89437 10.9079C0.878244 9.68582 0.416868 8.25567 0.400391 7.01762ZM7.11231 3.92784C5.65128 3.93318 4.47588 5.08584 4.48137 6.50532C4.48686 7.9088 5.67875 9.04546 7.13428 9.04012C8.57882 9.03478 9.76522 7.87678 9.75423 6.47331C9.74325 5.06449 8.55685 3.9225 7.11231 3.92784Z"
                          fill="#194D79"
                        />
                      </svg>
                      <p>Los Angeles, CA | DMA: 2</p>
                    </span>
                  </div>
                </div>

                <div class="KABC-btn-box-ah">
                  <span class="See">
                    <button  onClick={handleSelectChanges} class="more">
                     
                      Rate This Station
                    </button>
                  </span>
                  <span className="See">
                    <button 
                      className="Contact-ah more"
                      
                    >
                     Job Openings
                    </button>
                 

                  
                  </span>
                </div>
              </div>

              <div class="navtabs">
                
                <div class="underline"></div>
              </div>
            </div>
          </Container>
        </section>

        <div class="main-tabs-ah">
      
            <div id="Profile" class="content   active">
              <section class="About-ah">
                <Container>
                  <div class="About-main-ah">
                    <div class="About-main-box-1-ah">
                    <Station2 />
                     
                      <Dirctors3 directordata={directordata} />
                      
                      {/* <Reportersd2 /> */}
                      <Reportersd2New />

                    </div>

                    <div class="About-main-box-2-ah">
                      <div class="About-main-box-2-tital-ah">
                        <h2>Recommend</h2>
                        <a href="#">See all</a>
                      </div>

                      <div class="Recommend-box-ah">
                        <Cardah />

                        <Cardah />

                        <Cardah />

                        <div class="Recommend-card-ah">
                          <div class="Recommend-card-tital-ah">
                            <h2>
                              Subscribe to our Newsletter, so you'll never miss
                              one
                            </h2>
                            <input type="email" placeholder="Your email" />
                            <button>Subscribe</button>
                          </div>
                        </div>
                      </div>

                      <div class="About-main-box-2-tital-ah padding-ah">
                        <h2>Follow RMS</h2>
                      </div>

                      <div class="Recommend-card-ah">
                        <div class="Recommend-card-tital-ah">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="12"
                              height="24"
                              viewBox="0 0 12 24"
                              fill="none"
                            >
                              <path
                                d="M10.6686 0.688859L8.22131 0.684082C5.47187 0.684082 3.69506 2.90163 3.69506 6.33388V8.93882H1.23442C1.02179 8.93882 0.849609 9.14851 0.849609 9.40717V13.1814C0.849609 13.4401 1.02199 13.6495 1.23442 13.6495H3.69506V23.1732C3.69506 23.4318 3.86724 23.6413 4.07987 23.6413H7.2903C7.50293 23.6413 7.67511 23.4316 7.67511 23.1732V13.6495H10.5522C10.7648 13.6495 10.937 13.4401 10.937 13.1814L10.9382 9.40717C10.9382 9.28298 10.8975 9.16404 10.8255 9.07615C10.7534 8.98826 10.6552 8.93882 10.5532 8.93882H7.67511V6.73058C7.67511 5.66922 7.88303 5.13041 9.0196 5.13041L10.6682 5.12969C10.8806 5.12969 11.0528 4.92 11.0528 4.66158V1.15697C11.0528 0.898792 10.8808 0.689336 10.6686 0.688859Z"
                                fill="black"
                              />
                            </svg>
                            <h2>@RateMyStation </h2>
                          </span>
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="21"
                              viewBox="0 0 22 21"
                              fill="none"
                            >
                              <path
                                d="M21.1006 6.62311C21.0528 5.58402 20.8775 4.86965 20.6262 4.25064C20.3671 3.59357 19.9683 3.0053 19.446 2.51627C18.9356 2.01963 18.3176 1.63372 17.6397 1.38928C16.99 1.14857 16.2483 0.980534 15.1638 0.93472C14.0712 0.885026 13.7244 0.873535 10.9533 0.873535C8.18218 0.873535 7.83533 0.885026 6.7468 0.93084C5.66232 0.976654 4.91675 1.14484 4.27085 1.3854C3.58493 1.63372 2.97097 2.01575 2.46058 2.51627C1.94225 3.0053 1.53964 3.59745 1.28436 4.24691C1.03314 4.86965 0.857766 5.58014 0.809951 6.61923C0.758086 7.66609 0.746094 7.99843 0.746094 10.6535C0.746094 13.3087 0.758086 13.641 0.805901 14.684C0.853716 15.7231 1.02925 16.4375 1.28047 17.0565C1.53964 17.7135 1.94225 18.3018 2.46058 18.7908C2.97097 19.2875 3.58898 19.6734 4.2668 19.9178C4.91675 20.1585 5.65827 20.3266 6.7429 20.3724C7.83128 20.4183 8.17829 20.4297 10.9494 20.4297C13.7205 20.4297 14.0673 20.4183 15.1559 20.3724C16.2403 20.3266 16.9859 20.1585 17.6318 19.9178C19.0035 19.4097 20.088 18.3706 20.6183 17.0565C20.8694 16.4337 21.0449 15.7231 21.0927 14.684C21.1405 13.641 21.1525 13.3087 21.1525 10.6535C21.1525 7.99843 21.1485 7.66609 21.1006 6.62311ZM19.2626 14.6076C19.2187 15.5627 19.0513 16.0784 18.9117 16.4222C18.5688 17.2742 17.8631 17.9504 16.9739 18.279C16.6151 18.4127 16.0729 18.5731 15.08 18.615C14.0035 18.661 13.6806 18.6723 10.9573 18.6723C8.23405 18.6723 7.90713 18.661 6.83449 18.615C5.83769 18.5731 5.29942 18.4127 4.94058 18.279C4.49809 18.1223 4.09532 17.8739 3.76841 17.5492C3.4295 17.2321 3.17033 16.8501 3.00679 16.4261C2.86724 16.0823 2.69981 15.5627 2.65605 14.6115C2.60808 13.58 2.59624 13.2705 2.59624 10.6612C2.59624 8.05185 2.60808 7.73862 2.65605 6.71101C2.69981 5.75593 2.86724 5.24019 3.00679 4.89636C3.17033 4.47224 3.4295 4.08648 3.77246 3.7731C4.10327 3.44837 4.50199 3.20005 4.94462 3.04351C5.30347 2.90979 5.84579 2.74937 6.83853 2.70729C7.91507 2.66147 8.2381 2.64998 10.9612 2.64998C13.6885 2.64998 14.0114 2.66147 15.0841 2.70729C16.0808 2.74937 16.6191 2.90979 16.978 3.04351C17.4204 3.20005 17.8232 3.44837 18.1501 3.7731C18.489 4.09021 18.7482 4.47224 18.9117 4.89636C19.0513 5.24019 19.2187 5.75966 19.2626 6.71101C19.3105 7.7425 19.3225 8.05185 19.3225 10.6612C19.3225 13.2705 19.3105 13.5761 19.2626 14.6076Z"
                                fill="black"
                              />
                              <path
                                d="M10.9535 5.62974C8.05891 5.62974 5.71037 7.87985 5.71037 10.6535C5.71037 13.4271 8.05891 15.6772 10.9535 15.6772C13.8483 15.6772 16.1967 13.4271 16.1967 10.6535C16.1967 7.87985 13.8483 5.62974 10.9535 5.62974ZM10.9535 13.9122C9.07564 13.9122 7.55242 12.4529 7.55242 10.6535C7.55242 8.85403 9.07564 7.3947 10.9535 7.3947C12.8315 7.3947 14.3546 8.85403 14.3546 10.6535C14.3546 12.4529 12.8315 13.9122 10.9535 13.9122Z"
                                fill="black"
                              />
                              <path
                                d="M17.6282 5.43118C17.6282 6.07885 17.0801 6.60399 16.404 6.60399C15.728 6.60399 15.1799 6.07885 15.1799 5.43118C15.1799 4.78337 15.728 4.25837 16.404 4.25837C17.0801 4.25837 17.6282 4.78337 17.6282 5.43118Z"
                                fill="black"
                              />
                            </svg>
                            <h2>@RateMyStation </h2>
                          </span>

                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="23"
                              height="20"
                              viewBox="0 0 23 20"
                              fill="none"
                            >
                              <path
                                d="M23.0034 3.00257C22.1813 3.37813 21.3053 3.62706 20.3921 3.74793C21.3316 3.16373 22.0487 2.24571 22.3858 1.13918C21.5098 1.68309 20.5427 2.06728 19.5119 2.28168C18.6801 1.35934 17.4947 0.788086 16.2014 0.788086C13.6923 0.788086 11.6722 2.90905 11.6722 5.50916C11.6722 5.88328 11.7026 6.24301 11.7772 6.58547C8.0094 6.39409 4.67539 4.51343 2.43568 1.64856C2.04466 2.35506 1.8153 3.16373 1.8153 4.03428C1.8153 5.66888 2.62359 7.11787 3.82842 7.95676C3.10027 7.94237 2.38594 7.72221 1.78076 7.37543C1.78076 7.38982 1.78076 7.40853 1.78076 7.42724C1.78076 9.72086 3.35174 11.626 5.41183 12.0649C5.04292 12.1699 4.64085 12.2203 4.22358 12.2203C3.93343 12.2203 3.64051 12.203 3.36555 12.1397C3.95277 14.0088 5.61908 15.383 7.60042 15.4276C6.05846 16.6838 4.10061 17.4406 1.98111 17.4406C1.60943 17.4406 1.25296 17.4234 0.896484 17.3759C2.90407 18.7241 5.28333 19.494 7.84912 19.494C16.189 19.494 20.7485 12.2994 20.7485 6.06314C20.7485 5.8545 20.7416 5.65305 20.7319 5.45305C21.6314 4.78827 22.3872 3.95801 23.0034 3.00257Z"
                                fill="black"
                              />
                            </svg>
                            <h2>@RateMyStation </h2>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Container>
              </section>
            </div>
        

       
       
        </div>
      </Tabs>
      <Footerah />
    </>
  );
};

export default Seeprofile;
