import Buttonh from "../../Accountsetting/component/savecnclbtn_h";
const RateThisProd = () => {
  return (
    <div className="container">
      <div className="my--container--h mx-auto">
        <div className="row">
          <div className="col">
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <h1 className="form-label form-label-alt mb-1">
                Rate this product
              </h1>
              <div className="about--close--h">
                <img src={require("../../img/Union_h.png")} alt="" />
              </div>
            </div>
            <div className="mb-4 mt-1">
              <div className="rate--product--h row d-flex justify-content-between align-items-center">
                <div className="rate--product--main--h col-lg-6 d-flex align-items-center">
                  <div className="rate--produch--img--h  ">
                    <img
                      className="img-fluid"
                      src={require("../../img/rate_popup.png")}
                      alt=""
                    />
                  </div>
                  <div className="px-3">
                    <h1>America Needs Local News Sweatshirt - Blue</h1>
                  </div>
                </div>
                <div className="rate--product--rating--h col-lg-5">
                  <div className=" ">
                    <label htmlFor="">
                      How is the overall product quality?
                    </label>
                    <div className="d-flex rating--boxes--cont--h rating--popup--cont--h">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3 mt-1">
              <label
                for="exampleFormControlTextarea1"
                className="form-label form-label-alt"
              >
                Leave a review for this product
              </label>
              <textarea
                className="form-control about--input--h experience--desc--h"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
              ></textarea>
            </div>
            <div className="about--button--h pt-1 w-50">
              <button
                type="button"
                className="btn btn-primary about--btn--h about--btn--h--alt"
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-outline-primary about--btn--h about--btn--h--alt--2"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateThisProd;
