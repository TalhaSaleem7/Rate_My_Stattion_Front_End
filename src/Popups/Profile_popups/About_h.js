import Buttonh from "../../Accountsetting/component/savecnclbtn_h";
const Abouth = () => {
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
            <Buttonh />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouth;
