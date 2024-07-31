import React, { useState, useEffect } from 'react';
import kabc from '../img/kabc.png'
import axios from "axios";
import { baseurl } from '../baseurl';



const About2 = ({aboutsdata})=>{
    const [aboutData, setAboutData] = useState({});
    const [aboutsDatas, setAboutDatas] = useState({});

    const [error, setError] = useState(null);


    console.log('aboutsdatassss', aboutsdata)

   


    const getUserFromLocalStorage = () => {
      const user = localStorage.getItem('userData');
      return user ? JSON.parse(user) : null;
    };

    const fetchAboutData = async () => {
        try {

          console.log('Fetching')
          const storedUser = getUserFromLocalStorage();
        console.log('Retrieved user from local storage:', storedUser);
        const userId = storedUser.id;






          const response = await axios.get(`${baseurl}/getabout/${userId}`);

          
          console.log('aboutss' , response.data)
          
          // const data = await response.json();
          setAboutData(response.data);


          console.log('heh' , aboutData)
        } catch (err) {
          setError(err.message);
        }
      };
    
      useEffect(() => {
        fetchAboutData();

        setAboutDatas(aboutsdata)

        console.log('ssss' , aboutsDatas)
      }, []);


     
  
      return (
        <div className="About-main-card-1-ah">
          <span className="edite">
            <h2>About</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
              <path d="M0.560534 26.0052C0.716529 25.4358 0.872524 24.8664 1.01292 24.297C1.39511 22.7917 1.76169 21.2863 2.14388 19.7888C2.18288 19.6406 2.26868 19.4846 2.37007 19.3754C7.08892 14.6487 11.8078 9.92988 16.5266 5.21104C16.5656 5.17204 16.6046 5.14084 16.6202 5.12524C18.4765 6.98158 20.3251 8.83012 22.197 10.7021C22.1658 10.7411 22.1034 10.8035 22.041 10.8737C17.369 15.5457 12.6969 20.2177 8.01709 24.882C7.87669 25.0224 7.6739 25.1394 7.4789 25.1862C5.45877 25.701 3.43864 26.2001 1.41851 26.7071C0.958321 26.8241 0.802326 26.7539 0.552734 26.3561C0.560534 26.2391 0.560534 26.1221 0.560534 26.0052Z" fill="#828282"/>
              <path d="M23.8662 9.05631C21.9942 7.18438 20.1457 5.33584 18.3127 3.5029C18.9991 2.80092 19.6621 2.04435 20.4031 1.38137C21.3858 0.492197 23.0394 0.515597 24.03 1.40477C24.7007 2.01315 25.3481 2.65273 25.9487 3.3313C26.8613 4.35307 26.8301 5.94422 25.9331 6.96598C25.8473 7.06738 25.7459 7.16098 25.6523 7.26237C25.0517 7.86295 24.4589 8.46353 23.8662 9.05631Z" fill="#828282"/>
            </svg>
          </span>
          
          
              <div >
                <p>{aboutsdata.About ? aboutsdata.About : aboutData.About}</p>
                
                <hr/>
                <div className="Industry-ah">
                  <span>
                    <h2>Industry</h2>
                    <p>{aboutsdata.Industry ? aboutsdata.Industry : aboutData.Industry}</p> 
                  </span>
                  <span>
                    <h2>Station Address</h2>
                    <p>{aboutsdata.Address ? aboutsdata.Address : aboutData.Address}</p> 
                  </span>
                </div>
              </div>
          
         
        </div>
      );
    };    
export default About2