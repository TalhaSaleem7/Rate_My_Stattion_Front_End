import Buttonh from "../../Accountsetting/component/savecnclbtn_h";

const EducationForm = () => {
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
              <div className="about--close--h">
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

            <div className="d-flex align-items-end mb-3 mt-1 justify-content-between  experience--col--h">
              <div className="experience--email--h experience--col--child--h">
                <label for="inputEmail4" className="form-label form-label-alt">
                  Start Date
                </label>
                <select
                  className="form-select experience--job--inp--h"
                  id="inputGroupSelect01"
                >
                  <option selected style={{ display: "none" }}>
                    Month
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="experience--email--h experience--col--child--h">
                <select
                  className="form-select experience--job--inp--h"
                  id="inputGroupSelect01"
                >
                  <option selected style={{ display: "none" }}>
                    Year
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="d-flex align-items-end mb-3 mt-1 justify-content-between  experience--col--h">
              <div className="experience--email--h experience--col--child--h">
                <label for="inputEmail4" className="form-label form-label-alt">
                  End Date
                </label>
                <select
                  className="form-select experience--job--inp--h"
                  id="inputGroupSelect01"
                >
                  <option selected style={{ display: "none" }}>
                    Month
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="experience--email--h experience--col--child--h">
                <select
                  className="form-select experience--job--inp--h"
                  id="inputGroupSelect01"
                >
                  <option selected style={{ display: "none" }}>
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
            <Buttonh />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationForm;
