import Buttonh from "./savecnclbtn_h";
const ProfileComponent = () => {
  return (
    <>
      <h1 className="account-setting-right-title">Profile</h1>
      <div className="account--profile--img--h d-flex align-items-center">
        <div className="account--profile--img--h--cont">
          <img src={require("../../img/account_h.png")} alt="" />
        </div>
        <a href="#" className="profile--image--a--h">
          Upload Image in <span>jpg or png format</span>
        </a>
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputFirstName" className="form-label form-label-alt">
          First name
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="inputFirstName"
          placeholder="Type here..."
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputLastName" className="form-label form-label-alt">
          Last name
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="inputLastName"
          placeholder="Type here..."
        />
      </div>
      <div className="mb-3 mt-1 col-12">
        <label htmlFor="inputWorkPlace" className="form-label form-label-alt">
          Work Place
        </label>
        <select
          className="form-select experience--job--inp--h"
          id="inputWorkPlace"
        >
          <option value="" selected disabled style={{display:"none"}}>
            Choose Station
          </option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputJobTitle" className="form-label form-label-alt">
          Job title
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="inputJobTitle"
          placeholder="Type here..."
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputAddress" className="form-label form-label-alt">
          Your address
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="inputAddress"
          placeholder="Type here..."
        />
      </div>
     <Buttonh />
    </>
  );
};

export default ProfileComponent;
