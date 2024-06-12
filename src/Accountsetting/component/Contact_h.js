import Buttonh from "./savecnclbtn_h";
const ContactComponent = () => {
  return (
    <>
      <h1 className="account-setting-right-title">Contact Info</h1>
      <div className="col-12 mb-3">
        <label htmlFor="inputEmail" className="form-label form-label-alt">
          Email
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="inputEmail"
          placeholder="Type here..."
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputProfile" className="form-label form-label-alt">
          Phone
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="inputProfile"
          placeholder="Type here..."
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputWebsite" className="form-label form-label-alt">
          Website
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="inputWebsite"
          placeholder="Type here..."
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputLinkedIn" className="form-label form-label-alt">
          Linkedin
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="inputLinkedIn"
          placeholder="Type here..."
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputTwitter" className="form-label form-label-alt">
          Twitter
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="inputTwitter"
          placeholder="Type here..."
        />
      </div>
      <div className="col-12 mb-3 mt-1">
        <label htmlFor="inputFacebook" className="form-label form-label-alt">
          Facebook
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="inputFacebook"
          placeholder="Type here..."
        />
      </div>
      <Buttonh />
    </>
  );
};

export default ContactComponent;
