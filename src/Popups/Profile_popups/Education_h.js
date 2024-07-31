import Buttonh from "../../Accountsetting/component/savecnclbtn_h";
import { useState } from "react";
const EducationForm = ({ onCancel }) => {
  const [isStartDateMonth, setIsStartDateMonth] = useState(false);
  const [isStartDateYear, setIsStartDateYear] = useState(false);

  const [isEndDateMonth, setIsEndDateMonth] = useState(false);
  const [isEndDateYear, setIsEndDateYear] = useState(false);

  const toggleStartMonth = () => {
    setIsStartDateMonth(!isStartDateMonth);
  };

  const toggleStartYear = () => {
    setIsStartDateYear(!isStartDateYear);
  };

  const toggleEndMonth = () => {
    setIsEndDateMonth(!isEndDateMonth);
  };

  const toggleEndYear = () => {
    setIsEndDateYear(!isEndDateYear);
  };

  return (
    <div className="container">
      <div className="my--container--h mx-auto">
        <div className="row">
          <div className="col">
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <h1
                for="exampleFormControlInput1"
                className="form-label form-label-alt mb-1"
              >
                Education
              </h1>
              <div className="about--close--h" onClick={() => onCancel(true)}>
                <img src={require("../../img/Union_h.png")} alt="" />
              </div>
            </div>

            <div className="col-12 mb-3 mt-1">
              <label for="inputAddress" className="form-label form-label-alt">
                School
              </label>
              <input
                type="text"
                className="form-control experience--address--inp--h"
                id="inputAddress"
                placeholder="Type here..."
              />
            </div>

            <div className="col-12 mb-3 mt-1">
              <label for="inputAddress" className="form-label form-label-alt">
                Degree
              </label>
              <input
                type="text"
                className="form-control experience--address--inp--h"
                id="inputAddress"
                placeholder="Type here..."
              />
            </div>

            <div className="col-12 mb-3 mt-1">
              <label for="inputAddress" className="form-label form-label-alt">
                Field of Study
              </label>
              <input
                type="text"
                className="form-control experience--address--inp--h"
                id="inputAddress"
                placeholder="Type here..."
              />
            </div>

            <div className="experience--col--h  d-flex align-items-end mb-3 mt-1 justify-content-between">
              <div className="experience--email--h experience--col--child--h drop--position">
                <label
                  htmlFor="inputStartMonth"
                  className="form-label form-label-alt"
                >
                  Start Date
                </label>
                <div
                  onClick={toggleStartMonth}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isStartDateMonth
                      ? `experience--job--inp--h--dropdown--click--rad`
                      : ``
                    }`}
                  id="inputWorkPlace"
                >
                  Month
                </div>
                {isStartDateMonth && (
                  <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                    <li onClick={toggleStartMonth}>Option</li>

                    <li onClick={toggleStartMonth}>Option</li>
                    <li onClick={toggleStartMonth}>Option</li>
                  </ul>
                )}
              </div>
              <div className="experience--email--h experience--col--child--h drop--position">
                <div
                  onClick={toggleStartYear}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isStartDateYear
                      ? `experience--job--inp--h--dropdown--click--rad`
                      : ``
                    }`}
                  id="inputWorkPlace"
                >
                  Year
                </div>
                {isStartDateYear && (
                  <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                    <li onClick={toggleStartYear}>Option</li>

                    <li onClick={toggleStartYear}>Option</li>
                    <li onClick={toggleStartYear}>Option</li>
                  </ul>
                )}
              </div>
            </div>

            <div className="experience--col--h  d-flex align-items-end mb-3 mt-1 justify-content-between">
              <div className="experience--email--h experience--col--child--h drop--position">
                <label
                  htmlFor="inputEndMonth"
                  className="form-label form-label-alt"
                >
                  Start Date
                </label>
                <div
                  onClick={toggleEndMonth}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isEndDateMonth
                      ? `experience--job--inp--h--dropdown--click--rad`
                      : ``
                    }`}
                  id="inputWorkPlace"
                >
                  Month
                </div>
                {isEndDateMonth && (
                  <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                    <li onClick={toggleEndMonth}>Option</li>

                    <li onClick={toggleEndMonth}>Option</li>
                    <li onClick={toggleEndMonth}>Option</li>
                  </ul>
                )}
              </div>
              <div className="experience--email--h experience--col--child--h drop--position">
                <div
                  onClick={toggleEndYear}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isEndDateYear
                      ? `experience--job--inp--h--dropdown--click--rad`
                      : ``
                    }`}
                  id="inputWorkPlace"
                >
                  Year
                </div>
                {isEndDateYear && (
                  <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                    <li onClick={toggleEndYear}>Option</li>

                    <li onClick={toggleEndYear}>Option</li>
                    <li onClick={toggleEndYear}>Option</li>
                  </ul>
                )}
              </div>
            </div>
            <div className="mb-3">
              <label
                for="exampleFormControlTextarea1"
                className="form-label form-label-alt"
              >
                Description
              </label>
              <textarea
                className="form-control about--input--h experience--desc--h"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
              ></textarea>
            </div>
            {/* <Buttonh /> */}
            <div className="experience--button--h pt-1">
              <button
                type="button"
                className="btn btn-primary experience--btn--h experience--btn--h--alt"

              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2"
                onClick={() => onCancel(true)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationForm;
