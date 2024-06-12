import Buttonh from "../../Accountsetting/component/savecnclbtn_h";

const StationAboutForm = () => {
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
            <div className="mb-3 mt-1 col-12">
              <label
                htmlFor="inputGroupSelect01"
                className="form-label form-label-alt"
              >
                Industry
              </label>
              <select
                className="form-select experience--job--inp--h"
                id="inputGroupSelect01"
              >
                <option value="" style={{ display: "none" }}>
                  Choose options
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
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
