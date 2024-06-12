import Buttonh from "./savecnclbtn_h";

const PasswordComponent = () => {
  return (
    <>
      <h1 class="account-setting-right-title">Security</h1>
      <div className="col-12 mb-3">
        <label for="inputAddress" className="form-label form-label-alt">
          Recovery email
        </label>
        <input
          type="text"
          className="form-control experience--address--inp--h"
          id="inputAddress"
          placeholder="recovery@mail.com"
        />
      </div>
      <h1 className="account-setting-right-title pt-5">Change password</h1>
      <div className="col-12 mb-3 mt-1">
        <label for="inputAddress" className="form-label form-label-alt">
          Current password
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
          New password
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
          Confirm new password
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
export default PasswordComponent;
