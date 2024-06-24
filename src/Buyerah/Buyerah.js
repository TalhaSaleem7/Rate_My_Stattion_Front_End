import React from "react";
import RateThisProd from "../Popups/Rate_popup_h/Ratepopup_h";
import { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";

const Buyerah = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="About-main-card-1-ah">
        <h2>Buyer ratings</h2>
        <div className="satisfied">
          <h2>
            4.8<span>/5.0</span>
          </h2>
          <h3>98% satisfied buyers</h3>
          <p>500 ratings</p>
          <div class="ratings-ah-1-bar  my-ah-class" style={{ width: "100%" }}>
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
          </div>{" "}
          <div className="rate--product--button--container--ah">
            <button onClick={toggle}>Rate this product</button>
          </div>
        </div>
      </div>
      {isOpen && <RateThisProd close={toggle} />}
    </>
  );
};

export default Buyerah;
