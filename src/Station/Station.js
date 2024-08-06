import React, { useEffect } from "react";

const Station = () => {
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
            <h3>From 45 ratings</h3>
          </div>

          <div class="ratings-ah-1-bar width-hell">
            <div class="scrllo-bar">
              <p>5</p>
              <div class="w3-light-grey w3-tiny">
                <div
                  class="w3-container w3-green"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <p>35</p>
            </div>

            <div class="scrllo-bar">
              <p>4</p>
              <div class="w3-light-grey w3-tiny">
                <div
                  class="w3-container w3-green"
                  style={{ width: "60%" }}
                ></div>
              </div>
              <p>5</p>
            </div>

            <div class="scrllo-bar">
              <p>3</p>
              <div class="w3-light-grey w3-tiny">
                <div
                  class="w3-container w3-green"
                  style={{ width: "40%" }}
                ></div>
              </div>
              <p>2</p>
            </div>

            <div class="scrllo-bar">
              <p>2</p>
              <div class="w3-light-grey w3-tiny">
                <div
                  class="w3-container w3-green"
                  style={{ width: "25%" }}
                ></div>
              </div>
              <p>2</p>
            </div>

            <div class="scrllo-bar">
              <p>1</p>
              <div class="w3-light-grey w3-tiny">
                <div
                  class="w3-container w3-green"
                  style={{ width: "10%" }}
                ></div>
              </div>
              <p>1</p>
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
