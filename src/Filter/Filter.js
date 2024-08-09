import React, { useEffect, useState } from "react";

import kabc from "../img/kabc.png";
import axios from "axios";
import { baseurl } from "../baseurl";

const Filter = () => {
  const [stationratings, setStationRatings] = useState([]);


  useEffect(() => {
    // Retrieve user data from local storage
  
      // setUser(user)

      fetchUserData();
    
  }, []);


  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };


  const fetchUserData = async () => {

    const storedUser = getUserFromLocalStorage();
    const  userId = storedUser.id
    
    try {
      const response = await axios.get(`${baseurl}/getratingsbyuser/${userId}`);
      const ratings = response.data.ratings;

      console.log("ahtisahm", response.data.ratings);
      setStationRatings(ratings);

      console.log("hamza", stationratings);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  return (
    <>

      <div class="job-ah-post">
        <h2>
          My Ratings<span> ({stationratings.length})</span>
        </h2>

        <div class="job-ah-Filter">
          <div class="job-ah-Filter-card">
            <p>Filter:</p>
            <select name="cars" id="cars">
              <option value="" disabled="" selected="" hidden="">
                Job type
              </option>

              <option value="option2">option1</option>
              <option value="option3">option2</option>
              <option value="option4">option3</option>
            </select>
          </div>

          <div class="job-ah-Filter-card">
            <p>Sort:</p>
            <select name="cars" id="cars">
              <option value="" disabled="" selected="" hidden="">
                Newest
              </option>

              <option value="option2">option1</option>
              <option value="option3">option2</option>
              <option value="option4">option3</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
