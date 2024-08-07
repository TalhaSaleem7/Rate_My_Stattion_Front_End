import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseurl } from "../baseurl";

const Station = () => {
  const [rating, setRating] = useState([]);
  const total = rating[1] + rating[2] + rating[3] + rating[4] + rating[5];

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      fetchUserData(user.id);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await axios.get(`${baseurl}/getratings/${userId}`);
      const count = response.data.counts;
      setRating(count);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  return (
    <>
      <div class="About-main-card-1-ah">
        <span class="edite">
          <h2>Station’s Ratings</h2>
        </span>

        <div class="ratings-ah-1">
          <div class="ratings-ah-1-TITAL width-give">
            <span>
              <h2>4.8</h2>
              <p>/5.0</p>
            </span>
            <h3>From {total} ratings</h3>
          </div>

          <div class="ratings-ah-1-bar width-hell">
            <div class="scrllo-bar">
              <p>5</p>
              <div class="w3-light-grey w3-tiny">
                <div
                  class="w3-container w3-green"
                  style={{ width: `${(rating[5] / total) * 100}%` }}
                ></div>
              </div>
              <p>{rating[5]}</p>
            </div>

            <div class="scrllo-bar">
              <p>4</p>
              <div class="w3-light-grey w3-tiny">
                <div
                  class="w3-container w3-green"
                  style={{ width: `${(rating[4] / total) * 100}%` }}
                ></div>
              </div>
              <p>{rating[4]}</p>
            </div>

            <div class="scrllo-bar">
              <p>3</p>
              <div class="w3-light-grey w3-tiny">
                <div
                  class="w3-container w3-green"
                  style={{ width: `${(rating[3] / total) * 100}%` }}
                ></div>
              </div>
              <p>{rating[3]}</p>
            </div>

            <div class="scrllo-bar">
              <p>2</p>
              <div class="w3-light-grey w3-tiny">
                <div
                  class="w3-container w3-green"
                  style={{ width: `${(rating[2] / total) * 100}%` }}
                ></div>
              </div>
              <p>{rating[2]}</p>
            </div>

            <div class="scrllo-bar">
              <p>1</p>
              <div class="w3-light-grey w3-tiny">
                <div
                  class="w3-container w3-green"
                  style={{ width: `${(rating[1] / total) * 100}%` }}
                ></div>
              </div>
              <p>{rating[1]}</p>
            </div>
          </div>
        </div>

        <br />
        <hr />

        <div class="Popular-ti-ah">
          <h2>Most Popular Tags:</h2>

          <div class="Popular-ti-ah-btn-box">
            <button>Broadcasting</button>
            <button>Organized</button>
            <button>High Pay</button>
            <button>Positive</button>
            <button>Fun</button>
            <button>Broadcasting</button>
            <button>Positive</button>
            <button>High Pay</button>
            <button>Positive</button>
            <button>Fun</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Station;
