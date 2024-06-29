import Buttonh from "../../Accountsetting/component/savecnclbtn_h";
import { useState } from "react";
const StationAboutForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container">
      <div className="my--container--h mx-auto">
        <div className="row">
          <div className="col">
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <h1 className="form-label form-label-alt mb-1">About</h1>
              <div className="about--close--h">
                <img src={require("../../img/Union_h.png")} alt="" />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label form-label-alt"
              >
                You can write about your years of experience, industry, or
                skills.
              </label>
              <textarea
                className="form-control about--input--h"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
              ></textarea>
            </div>
            <div className="mb-3 mt-1 col-12 drop--position">
              <label
                htmlFor="inputGroupSelect01"
                className="form-label form-label-alt"
              >
                Industry
              </label>
              <div
                onClick={toggle}
                className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${
                  isOpen ? `experience--job--inp--h--dropdown--click--rad` : ``
                }`}
                id="inputWorkPlace"
              >
                Choose Option...
              </div>
              {isOpen && (
                <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                  <li onClick={toggle}>Option</li>

                  <li onClick={toggle}>Option</li>
                  <li onClick={toggle}>Option</li>
                </ul>
              )}
            </div>
            <div className="col-12 mb-3 mt-1">
              <label
                htmlFor="inputAddress"
                className="form-label form-label-alt"
              >
                Station Address
              </label>
              <input
                type="text"
                className="form-control experience--address--inp--h"
                id="inputAddress"
                placeholder="Type here..."
              />
            </div>
            <Buttonh />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationAboutForm;
