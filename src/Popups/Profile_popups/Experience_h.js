import Buttonh from "../../Accountsetting/component/savecnclbtn_h";

function ExperienceForm() {
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

            <div className="d-flex align-items-end mb-3 mt-1 experience--title--cont--h">
              <div className="experience--email--h ">
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
              <div className="form-check experience--chkbox--h d-flex align-items-center">
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

            <div className="mb-3 mt-1 col-12">
              <label
                htmlFor="inputJobType"
                className="form-label form-label-alt"
              >
                Job Type
              </label>
              <select
                className="form-select experience--job--inp--h"
                id="inputJobType"
              >
                <option value="" style={{ display: "none" }}>
                  Choose options
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className="d-flex align-items-end mb-3 mt-1 justify-content-between">
              <div className="experience--email--h">
                <label
                  htmlFor="inputStartMonth"
                  className="form-label form-label-alt"
                >
                  Start Date
                </label>
                <select
                  className="form-select experience--job--inp--h"
                  id="inputStartMonth"
                >
                  <option value="" style={{ display: "none" }}>
                    Month
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="experience--email--h">
                <select
                  className="form-select experience--job--inp--h"
                  id="inputStartYear"
                >
                  <option value="" style={{ display: "none" }}>
                    Year
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="d-flex align-items-end mb-3 mt-1 justify-content-between">
              <div className="experience--email--h">
                <label
                  htmlFor="inputEndMonth"
                  className="form-label form-label-alt"
                >
                  End Date
                </label>
                <select
                  className="form-select experience--job--inp--h"
                  id="inputEndMonth"
                >
                  <option value="" style={{ display: "none" }}>
                    Month
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="experience--email--h">
                <select
                  className="form-select experience--job--inp--h"
                  id="inputEndYear"
                >
                  <option value="" style={{ display: "none" }}>
                    Year
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
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
