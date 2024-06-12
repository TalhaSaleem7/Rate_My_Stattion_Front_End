import Buttonh from "../../Accountsetting/component/savecnclbtn_h";

const SkillsForm = () => {
  return (
    <div className="container">
      <div className="my--container--h mx-auto">
        <div className="row">
          <div className="col">
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <h1 className="form-label form-label-alt mb-1">Skills</h1>
              <div className="about--close--h">
                <img src={require("../../img/Union_h.png")} alt="close" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="skillsInput" className="form-label form-label-alt">Your skills</label>
              <input
                type="text"
                className="form-control skills--inp--h mb-3"
                id="skillsInput"
                placeholder="Type here..."
              />
              <label htmlFor="descriptionTextarea" className="form-label form-label-alt mt-1">Description</label>
              <textarea
                className="form-control about--input--h"
                id="descriptionTextarea"
                rows="3"
                placeholder="Type here..."
              ></textarea>
            </div>
            <Buttonh/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsForm;
