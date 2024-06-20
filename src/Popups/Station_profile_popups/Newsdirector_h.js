import Buttonh from "../../Accountsetting/component/savecnclbtn_h";

const NewsDirectorForm = () => {
  return (
    <div class="container">
      <div class="my--container--h mx-auto">
        <div class="row">
          <div class="col">
            <div class="mb-3 d-flex justify-content-between align-items-center">
              <h1
                for="exampleFormControlInput1"
                class="form-label form-label-alt mb-1"
              >
                News Director
              </h1>
              <div class="experience--close--h">
                <img src={require("../../img/Union_h.png")} alt="" />
              </div>
            </div>

            <div class="col-lg-8">
              <div class="news--director--img--h d-flex align-items-center">
                <div class="news--director--img--h--cont">
                  <img src={require("../../img/account_h.png")} alt="" />
                </div>
                <a href="#" class="profile--image--a--h">
                  Upload Image in <span>jpg or png format</span>
                </a>
              </div>
            </div>
            <div class="d-flex align-items-end mb-3 mt-1 experience--title--cont--h experience--col--h">
              <div class="experience--email--h experience--col--child--h">
                <label for="inputEmail4" class="form-label form-label-alt">
                  Director’s name
                </label>
                <input
                  type="email"
                  class="form-control experience--email--inp--h"
                  id="inputEmail4"
                  placeholder="Type here..."
                />
              </div>
              <div class="form-check experience--chkbox--h d-flex align-items-center experience--col--child--h">
                <input
                  class="form-check-input experience--form--check--input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Current News Director
                </label>
              </div>
            </div>

            <div class="col-12 mb-3 mt-1">
              <label for="inputAddress" class="form-label form-label-alt">
                Director’s email
              </label>
              <input
                type="text"
                class="form-control experience--address--inp--h"
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
export default NewsDirectorForm;
