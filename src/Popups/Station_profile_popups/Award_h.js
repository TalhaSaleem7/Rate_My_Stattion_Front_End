import { useState } from "react";
import Buttonh from "../../Accountsetting/component/savecnclbtn_h";

const AwardForm = ({ onCancel }) => {

  return (
    <>

      <div class="container">
        <div class="my--container--h mx-auto">
          <div class="row">
            <div class="col">
              <div class="mb-3 d-flex justify-content-between align-items-center">
                <h1
                  for="exampleFormControlInput1"
                  class="form-label form-label-alt mb-1"
                >
                  Award
                </h1>
                <div class="about--close--h">
                  <img src={require("../../img/Union_h.png")} onClick={onCancel} alt="close" />
                </div>
              </div>

              <div class="mb-3">
                <label
                  for="exampleFormControlInput1"
                  class="form-label form-label-alt"
                >
                  Award title
                </label>
                <input
                  type="text"
                  class="form-control skills--inp--h mb-3"
                  id="exampleFormControlInput1"
                  placeholder="Type here..."
                />
                <label
                  for="exampleFormControlTextarea1"
                  class="form-label form-label-alt mt-1"
                >
                  Description
                </label>
                <textarea
                  class="form-control about--input--h"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Type here..."
                ></textarea>
              </div>

              <div class="col-lg-8">
                <div class="award--img--h d-flex align-items-center">
                  <div class="news--director--img--h--cont">
                    <img src={require("../../img/award_img_h.png")} alt="" />
                  </div>
                  <a href="#" class="profile--image--a--h">
                    Upload Image in <span>jpg or png format</span>
                  </a>
                </div>
              </div>
              <div className="experience--button--h pt-1">
                <button
                  type="button"
                  className="btn btn-primary experience--btn--h experience--btn--h--alt">
                  Save
                </button>
                <button
                  type="button"
                  className="btn btn-outline-primary experience--btn--h experience--btn--h--alt--2" onClick={onCancel}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AwardForm;
