import Buttonh from "../../Accountsetting/component/savecnclbtn_h";
import { useState } from "react";
function ExperienceForm() {
  const [isJobType, setIsJobType] = useState(false);
  const [isStartDateMonth, setIsStartDateMonth] = useState(false);
  const [isStartDateYear, setIsStartDateYear] = useState(false);

  const [isEndDateMonth, setIsEndDateMonth] = useState(false);
  const [isEndDateYear, setIsEndDateYear] = useState(false);

  const toggleJobType = () => {
    setIsJobType(!isJobType);
  };

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
              <h1 className="form-label form-label-alt mb-1">Experience</h1>
              <div className="experience--close--h">
                <img src={require("../../img/Union_h.png")} alt="close" />
              </div>
            </div>

            <div className="d-flex align-items-end mb-3 mt-1 experience--title--cont--h experience--col--h">
              <div className="experience--email--h experience--col--child--h">
                <label
                  htmlFor="inputEmail4"
                  className="form-label form-label-alt"
                >
                  Title
                </label>
                <input
                  type="email"
                  className="form-control experience--email--inp--h"
                  id="inputEmail4"
                  placeholder="Type here..."
                />
              </div>
              <div className="form-check experience--chkbox--h d-flex align-items-center experience--col--child--h">
                <input
                  className="form-check-input experience--form--check--input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  I am currently working in this role
                </label>
              </div>
            </div>

            <div className="col-12 mb-3 mt-1">
              <label
                htmlFor="inputAddress"
                className="form-label form-label-alt"
              >
                Company Name
              </label>
              <input
                type="text"
                className="form-control experience--address--inp--h"
                id="inputAddress"
                placeholder="Type here..."
              />
            </div>

            <div className="mb-3 mt-1 col-12 drop--position">
              <label
                htmlFor="inputJobType"
                className="form-label form-label-alt"
              >
                Job Type
              </label>
              <div
                onClick={toggleJobType}
                className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${
                  isJobType
                    ? `experience--job--inp--h--dropdown--click--rad`
                    : ``
                }`}
                id="inputWorkPlace"
              >
                Choose Option...
              </div>
              {isJobType && (
                <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                  <li onClick={toggleJobType}>Option</li>

                  <li onClick={toggleJobType}>Option</li>
                  <li onClick={toggleJobType}>Option</li>
                </ul>
              )}
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
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${
                    isStartDateMonth
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
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${
                    isStartDateYear
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
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${
                    isEndDateMonth
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
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${
                    isEndDateYear
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
                htmlFor="exampleFormControlTextarea1"
                className="form-label form-label-alt"
              >
                Description
              </label>
              <textarea
                className="form-control experience--input--h experience--desc--h"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
              ></textarea>
            </div>
            <Buttonh />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceForm;
