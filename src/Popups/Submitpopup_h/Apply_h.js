import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ApplyForm = () => {
  const navigate = useNavigate();

  const goto = () => {
    navigate("/skillsh");
  };

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div class="container">
      <div class="my--container--h my--container--h--2 mx-auto">
        <div class="row">
          <div class="col">
            <div class="mb-3 d-flex justify-content-between align-items-center apply--popup--head--cont">
              <div className="apply--popup--title d-flex align-items-center">
                <div className="apply--popup--img">
                  <img src={require("../../img/kabc.png")} alt="" />
                </div>
                <div className="apply--popup--title--text">
                  <div className="apply--popup--title--heading d-flex align-items-center">
                    <h1>KABC </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M14.2764 17.6017C14.0871 17.578 13.8327 17.5603 13.5901 17.5129C13.4718 17.4892 13.4245 17.5188 13.3594 17.6135C12.5667 18.7501 11.4781 19.3125 10.0938 19.2592C8.88096 19.2119 7.92256 18.6613 7.21855 17.6727C7.1239 17.5425 7.0529 17.4951 6.88725 17.5247C4.77522 17.8918 2.82293 16.4888 2.53896 14.3636C2.48571 13.967 2.54487 13.5526 2.57445 13.15C2.58037 13.0317 2.58037 12.9725 2.47388 12.9014C0.261277 11.38 0.267193 8.26625 2.4798 6.72119C2.57445 6.65608 2.5922 6.6028 2.57445 6.49032C2.18991 4.33553 3.52694 2.42937 5.6863 2.08602C6.0945 2.02091 6.52046 2.09194 6.9405 2.11562C7.04699 2.12154 7.10615 2.12746 7.17714 2.02683C8.73898 -0.199002 11.8094 -0.204922 13.3653 2.02091C13.4304 2.11562 13.4896 2.12746 13.602 2.1097C15.7554 1.72492 17.6545 3.06278 17.9976 5.22941C18.0627 5.63196 17.9976 6.05226 17.968 6.46072C17.9562 6.58504 17.968 6.65016 18.0804 6.72711C20.2753 8.22481 20.2694 11.3978 18.0745 12.8955C17.9739 12.9665 17.9503 13.0198 17.9739 13.1441C18.3585 15.293 17.0096 17.1932 14.8503 17.5484C14.6728 17.5839 14.5012 17.5839 14.2764 17.6017ZM9.38383 10.4033C9.35425 10.4092 9.31875 10.4151 9.28917 10.4151C9.24776 10.3441 9.21226 10.2671 9.15902 10.2079C8.80405 9.84682 8.44909 9.4798 8.07638 9.13053C7.69184 8.76943 7.11798 8.78719 6.7571 9.14829C6.39622 9.5094 6.37847 10.0895 6.74527 10.4625C7.3842 11.1196 8.02905 11.7648 8.68573 12.4042C9.05844 12.7653 9.61455 12.7712 9.98726 12.4042C11.2592 11.1492 12.5193 9.88234 13.7735 8.61551C14.0279 8.36096 14.0989 8.03538 13.9983 7.69203C13.7913 6.98758 12.9453 6.78631 12.401 7.31909C11.4367 8.27217 10.4783 9.23709 9.5199 10.202C9.47257 10.2612 9.43115 10.3382 9.38383 10.4033Z"
                        fill="#89C400"
                      />
                    </svg>
                  </div>
                  <p>
                    TV News <span>|</span> Los Angeles, CA <span>|</span> DMA: 2
                  </p>
                </div>
              </div>
              <div class="experience--close--h">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M18.6858 1.00117C17.8377 0.153065 16.4626 0.153067 15.6145 1.00118L9.87822 6.73745L4.14112 1.00034C3.29301 0.152231 1.91795 0.152231 1.06985 1.00034C0.221737 1.84845 0.221739 3.2235 1.06985 4.07161L6.80695 9.80872L1.06968 15.546C0.221566 16.3941 0.221567 17.7692 1.06968 18.6173C1.91778 19.4654 3.29284 19.4654 4.14095 18.6173L9.87823 12.88L15.6147 18.6164C16.4628 19.4645 17.8378 19.4645 18.6859 18.6164C19.534 17.7683 19.534 16.3933 18.6859 15.5452L12.9495 9.80872L18.6858 4.07245C19.5339 3.22434 19.5339 1.84928 18.6858 1.00117Z"
                    fill="#BDBDBD"
                  />
                </svg>
              </div>
            </div>

            <div class="d-flex align-items-end mb-3 pt-3 experience--title--cont--h ">
              <div class="col-lg-12">
                <label for="inputEmail4" class="form-label form-label-alt">
                  Your email address
                </label>
                <input
                  type="email"
                  class="form-control experience--email--inp--h"
                  id="inputEmail4"
                  placeholder="Type here..."
                />
              </div>
            </div>

            <div class="d-flex align-items-end mb-3 mt-1 experience--title--cont--h">
              <div class="experience--email--h">
                <label for="inputEmail4" class="form-label form-label-alt">
                  What is/was your job position?
                </label>

                <select
                  class="form-select experience--job--inp--h"
                  id="inputGroupSelect01"
                >
                  <option selected style={{ display: "none" }}>
                    Choose options
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-check experience--chkbox--h d-flex align-items-center">
                <input
                  class="form-check-input experience--form--check--input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label">
                  I am currently working for this station{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M0.44873 10.5951C0.44873 10.208 0.44873 9.81329 0.44873 9.42619C0.463916 9.28198 0.479103 9.14536 0.494289 9.00114C0.737265 6.84555 1.55731 4.94801 3.00758 3.3389C4.54896 1.63112 6.4624 0.560916 8.73271 0.158639C9.11236 0.0903274 9.49201 0.0523767 9.87166 0.00683594C10.2589 0.00683594 10.6537 0.00683594 11.041 0.00683594C11.3751 0.0523767 11.7092 0.0827373 12.0433 0.135868C14.1313 0.485014 15.9537 1.38065 17.4495 2.8835C19.697 5.13018 20.6841 7.85503 20.3956 11.0201C20.2058 13.1378 19.3705 15.0125 17.9506 16.6065C16.0676 18.7241 13.6985 19.8626 10.8663 19.9992C8.89216 20.0979 7.03947 19.6349 5.34622 18.6027C2.74941 17.0163 1.15488 14.7241 0.592998 11.7336C0.532254 11.3541 0.501882 10.9746 0.44873 10.5951ZM10.4563 1.82847C5.96885 1.81329 2.30143 5.47173 2.27105 9.98786C2.24068 14.4736 5.93089 18.17 10.4487 18.1852C14.9438 18.2004 18.6112 14.5419 18.6416 10.0182C18.6644 5.54004 14.9742 1.83606 10.4563 1.82847ZM9.54516 12.1207C9.54516 13.0239 9.53757 13.9271 9.54516 14.8304C9.55275 15.3844 9.95518 15.7791 10.4791 15.7564C10.9878 15.7412 11.3523 15.3541 11.3523 14.8C11.3599 13.7222 11.3523 12.6368 11.3523 11.559C11.3523 10.8531 11.3523 10.1548 11.3523 9.44896C11.3523 9.16813 11.2688 8.91765 11.0638 8.73549C10.7828 8.48501 10.4487 8.4167 10.0995 8.56092C9.75017 8.70513 9.54516 8.97837 9.54516 9.35788C9.54516 10.2839 9.55275 11.2023 9.54516 12.1207ZM9.24144 5.44896C9.23385 6.1093 9.77295 6.67097 10.4487 6.67856C11.1017 6.68615 11.656 6.13966 11.6636 5.48691C11.6712 4.81898 11.1321 4.2649 10.4563 4.2649C9.79573 4.24972 9.25663 4.78103 9.24144 5.44896Z"
                      fill="#194D79"
                    />
                  </svg>
                </label>
              </div>
            </div>

            <div class="mb-3 mt-1 col-12">
              <label for="inputAddress" class="form-label form-label-alt">
                In the market, where does this station rank in ratings?
              </label>
              <select
                class="form-select experience--job--inp--h"
                id="inputGroupSelect01"
              >
                <option selected style={{ display: "none" }}>
                  Choose options
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class="mb-3 mt-1 col-12">
              <label for="inputAddress" class="form-label form-label-alt">
                (For reportesr only) Paired with a photog?
              </label>
              <select
                class="form-select experience--job--inp--h"
                id="inputGroupSelect01"
              >
                <option selected style={{ display: "none" }}>
                  Choose options
                </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div class=" mb-3 mt-1 experience--title--cont--h experience--title--cont--h--2 row">
              <div class="form-check experience--chkbox--h experience--chkbox--h--2  align-items-center col-lg-6">
                <div className="apply--popup--chkbox">
                  <label htmlFor="">
                    Does this station require you to sign a contract?
                  </label>
                </div>
                <div className="d-flex ">
                  <div className="col-lg-6 d-flex align-items-center apply--popup-chkbox--1">
                    {" "}
                    <input
                      class="form-check-input experience--form--check--input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label">Yes</label>
                  </div>
                  <div className="d-flex align-items-center apply--popup-chkbox--2">
                    <input
                      class="form-check-input experience--form--check--input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label">No</label>
                  </div>
                </div>
              </div>
              <div class="experience--email--h apply--drop--h col-lg-6">
                <label for="inputEmail4" class="form-label form-label-alt">
                  If so, for how long?
                </label>

                <select
                  class="form-select experience--job--inp--h"
                  id="inputGroupSelect01"
                >
                  <option selected style={{ display: "none" }}>
                    Choose options
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="mb-3 mt-1 col-12">
              <label
                htmlFor="inputGroupSelect01"
                className="form-label form-label-alt"
              >
                What is/was your yearly salary?s
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

            <div className="mb-3 mt-1 col-12">
              <label
                htmlFor="inputGroupSelect01"
                className="form-label form-label-alt"
              >
                Who is the current news director?
              </label>
              <div
                className="form-select experience--job--inp--h experience--job--inp--h--direc "
                onClick={toggleVisibility}
              >
                <div className="fgh experience--job--inp--h d-flex align-items-center">
                  <div className="cuurent--news--director--drp--img">
                    <img
                      src={require("../../img/director-drop_h.png")}
                      alt=""
                    />
                  </div>

                  <div className="cuurent--news--director--drp--text d-flex align-items-center">
                    <h1>Brooklyn Simmons</h1>
                    <p>Current</p>
                  </div>
                </div>
                {isVisible && (
                  <div className="haha w-100 experience--job--inp--h">
                    <div className="asd experience--job--inp--h d-flex align-items-center">
                      <div className="cuurent--news--director--drp--img">
                        <img
                          src={require("../../img/director-drop_h.png")}
                          alt=""
                        />
                      </div>

                      <div className="cuurent--news--director--drp--text d-flex align-items-center">
                        <h1>Brooklyn Simmons</h1>
                        <p>Current</p>
                      </div>
                    </div>
                    <div className="asd experience--job--inp--h d-flex align-items-center">
                      <div className="cuurent--news--director--drp--img">
                        <img
                          src={require("../../img/director-drop_h.png")}
                          alt=""
                        />
                      </div>

                      <div className="cuurent--news--director--drp--text d-flex align-items-center">
                        <h1>Brooklyn Simmons</h1>
                        <p>Current</p>
                      </div>
                    </div>
                    <div className="asd experience--job--inp--h d-flex align-items-center">
                      <div className="cuurent--news--director--drp--img">
                        <img
                          src={require("../../img/director-drop_h.png")}
                          alt=""
                        />
                      </div>

                      <div className="cuurent--news--director--drp--text d-flex align-items-center">
                        <h1>Brooklyn Simmons</h1>
                        <p>Current</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-3 mt-1 col-12">
              <label
                for="exampleFormControlTextarea1"
                class="form-label form-label-alt mt-1"
              >
                Breifly describe your overall experience working for him/her?
              </label>
              <textarea
                class="form-control about--input--h mb-3"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
              ></textarea>
            </div>
            <div className="mb-3 mt-1 col-12">
              <label htmlFor="" className="mb-3">
                While working for this station have you experienced...
              </label>
              <div className="d-flex row mb-3 mt-1">
                <div className="col-lg-6 d-flex align-items-center apply--popup-chkbox--1 mb-3">
                  {" "}
                  <input
                    class="form-check-input experience--form--check--input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label">Sexual Harassment</label>
                </div>
                <div className="d-flex align-items-center apply--popup-chkbox--2 col-lg-6 mb-3">
                  <input
                    class="form-check-input experience--form--check--input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label">Racial Discrimination</label>
                </div>
                <div className="col-lg-6 d-flex align-items-center apply--popup-chkbox--1 mt-1">
                  {" "}
                  <input
                    class="form-check-input experience--form--check--input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label">Sexual Discrimination</label>
                </div>
                <div className="d-flex align-items-center apply--popup-chkbox--2 col-lg-6 mt-1">
                  <input
                    class="form-check-input experience--form--check--input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label">
                    An Overall Toxic Work Environment
                  </label>
                </div>
              </div>
            </div>
            {/* ========= */}
            <div className="mb-3 mt-1 col-12">
              <label
                for="exampleFormControlTextarea1"
                class="form-label form-label-alt mt-1"
              >
                If you answered yes to any of the previous, please explain more.
              </label>
              <textarea
                class="form-control about--input--h mb-3"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
              ></textarea>
            </div>

            <div className="mb-3 mt-1 col-12">
              <label htmlFor="" className="mb-3">
                While working for this station have you experienced...
              </label>
              <div className="d-flex row mb-3 mt-1">
                <div className="col-lg-6 d-flex align-items-center apply--popup-chkbox--1 mb-3">
                  {" "}
                  <input
                    class="form-check-input experience--form--check--input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label">Organized</label>
                </div>
                <div className="d-flex align-items-center apply--popup-chkbox--2 col-lg-6 mb-3">
                  <input
                    class="form-check-input experience--form--check--input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label">Unorganized</label>
                </div>
                <div className="col-lg-6 d-flex align-items-center apply--popup-chkbox--1 mt-1 mb-3">
                  {" "}
                  <input
                    class="form-check-input experience--form--check--input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label">Educational</label>
                </div>
                <div className="d-flex align-items-center apply--popup-chkbox--2 col-lg-6 mt-1 mb-3">
                  <input
                    class="form-check-input experience--form--check--input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label">
                    Open to Creative Control
                  </label>
                </div>
                <div className="col-lg-6 d-flex align-items-center apply--popup-chkbox--1 mt-1">
                  {" "}
                  <input
                    class="form-check-input experience--form--check--input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label">Positive, Fun</label>
                </div>
                <div className="d-flex align-items-center apply--popup-chkbox--2 col-lg-6 mt-1">
                  <input
                    class="form-check-input experience--form--check--input"
                    type="checkbox"
                    id="gridCheck"
                  />
                  <label class="form-check-label">Negative, Toxic</label>
                </div>
              </div>
            </div>
            {/* ========= */}
            <div className="mb-3 mt-1 col-12">
              <label
                for="exampleFormControlTextarea1"
                class="form-label form-label-alt mt-1"
              >
                Is there anything else you think we should know about this
                station?
              </label>
              <textarea
                class="form-control about--input--h mb-3"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
              ></textarea>
            </div>

            <div className="mb-3 mt-1 col-lg-12">
              <div className="row justify-content-between">
                <div className=" rating--box--h">
                  <label htmlFor="">Newsroom rating</label>
                  <div className="d-flex rating--boxes--cont--h">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className=" rating--box--h">
                  <label htmlFor="">Coworker rating</label>
                  <div className="d-flex rating--boxes--cont--h">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>

                <div className=" rating--box--h">
                  <label htmlFor="">Would recommend working here?</label>
                  <div className="d-flex rating--boxes--cont--h">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-flex align-items-center  mb-3 mt-1 experience--title--cont--h">
              <div class="col-lg-12">
                <label for="inputEmail4" class="form-label form-label-alt">
                  Please verified your rating
                </label>
                <div className=" upload--document--container d-flex align-items-center col-lg-12 justify-content-between">
                  <div className="upload--document--container d-flex align-items-center">
                    <div className="upload--document--img">
                      <img src={require("../../img/img-upload_h.png")} alt="" />
                    </div>
                    <div>
                      <a href="">Upload work document here</a>
                    </div>
                  </div>
                  <div class="form-check experience--chkbox--h d-flex align-items-center">
                    <input
                      class="form-check-input experience--form--check--input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label">
                      Link my profile experience information{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                      >
                        <path
                          d="M0.44873 10.5951C0.44873 10.208 0.44873 9.81329 0.44873 9.42619C0.463916 9.28198 0.479103 9.14536 0.494289 9.00114C0.737265 6.84555 1.55731 4.94801 3.00758 3.3389C4.54896 1.63112 6.4624 0.560916 8.73271 0.158639C9.11236 0.0903274 9.49201 0.0523767 9.87166 0.00683594C10.2589 0.00683594 10.6537 0.00683594 11.041 0.00683594C11.3751 0.0523767 11.7092 0.0827373 12.0433 0.135868C14.1313 0.485014 15.9537 1.38065 17.4495 2.8835C19.697 5.13018 20.6841 7.85503 20.3956 11.0201C20.2058 13.1378 19.3705 15.0125 17.9506 16.6065C16.0676 18.7241 13.6985 19.8626 10.8663 19.9992C8.89216 20.0979 7.03947 19.6349 5.34622 18.6027C2.74941 17.0163 1.15488 14.7241 0.592998 11.7336C0.532254 11.3541 0.501882 10.9746 0.44873 10.5951ZM10.4563 1.82847C5.96885 1.81329 2.30143 5.47173 2.27105 9.98786C2.24068 14.4736 5.93089 18.17 10.4487 18.1852C14.9438 18.2004 18.6112 14.5419 18.6416 10.0182C18.6644 5.54004 14.9742 1.83606 10.4563 1.82847ZM9.54516 12.1207C9.54516 13.0239 9.53757 13.9271 9.54516 14.8304C9.55275 15.3844 9.95518 15.7791 10.4791 15.7564C10.9878 15.7412 11.3523 15.3541 11.3523 14.8C11.3599 13.7222 11.3523 12.6368 11.3523 11.559C11.3523 10.8531 11.3523 10.1548 11.3523 9.44896C11.3523 9.16813 11.2688 8.91765 11.0638 8.73549C10.7828 8.48501 10.4487 8.4167 10.0995 8.56092C9.75017 8.70513 9.54516 8.97837 9.54516 9.35788C9.54516 10.2839 9.55275 11.2023 9.54516 12.1207ZM9.24144 5.44896C9.23385 6.1093 9.77295 6.67097 10.4487 6.67856C11.1017 6.68615 11.656 6.13966 11.6636 5.48691C11.6712 4.81898 11.1321 4.2649 10.4563 4.2649C9.79573 4.24972 9.25663 4.78103 9.24144 5.44896Z"
                          fill="#194D79"
                        />
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
              {/* <div class="form-check experience--chkbox--h d-flex align-items-center">
                <input
                  class="form-check-input experience--form--check--input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label">
                  Link my profile experience information{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                  >
                    <path
                      d="M0.44873 10.5951C0.44873 10.208 0.44873 9.81329 0.44873 9.42619C0.463916 9.28198 0.479103 9.14536 0.494289 9.00114C0.737265 6.84555 1.55731 4.94801 3.00758 3.3389C4.54896 1.63112 6.4624 0.560916 8.73271 0.158639C9.11236 0.0903274 9.49201 0.0523767 9.87166 0.00683594C10.2589 0.00683594 10.6537 0.00683594 11.041 0.00683594C11.3751 0.0523767 11.7092 0.0827373 12.0433 0.135868C14.1313 0.485014 15.9537 1.38065 17.4495 2.8835C19.697 5.13018 20.6841 7.85503 20.3956 11.0201C20.2058 13.1378 19.3705 15.0125 17.9506 16.6065C16.0676 18.7241 13.6985 19.8626 10.8663 19.9992C8.89216 20.0979 7.03947 19.6349 5.34622 18.6027C2.74941 17.0163 1.15488 14.7241 0.592998 11.7336C0.532254 11.3541 0.501882 10.9746 0.44873 10.5951ZM10.4563 1.82847C5.96885 1.81329 2.30143 5.47173 2.27105 9.98786C2.24068 14.4736 5.93089 18.17 10.4487 18.1852C14.9438 18.2004 18.6112 14.5419 18.6416 10.0182C18.6644 5.54004 14.9742 1.83606 10.4563 1.82847ZM9.54516 12.1207C9.54516 13.0239 9.53757 13.9271 9.54516 14.8304C9.55275 15.3844 9.95518 15.7791 10.4791 15.7564C10.9878 15.7412 11.3523 15.3541 11.3523 14.8C11.3599 13.7222 11.3523 12.6368 11.3523 11.559C11.3523 10.8531 11.3523 10.1548 11.3523 9.44896C11.3523 9.16813 11.2688 8.91765 11.0638 8.73549C10.7828 8.48501 10.4487 8.4167 10.0995 8.56092C9.75017 8.70513 9.54516 8.97837 9.54516 9.35788C9.54516 10.2839 9.55275 11.2023 9.54516 12.1207ZM9.24144 5.44896C9.23385 6.1093 9.77295 6.67097 10.4487 6.67856C11.1017 6.68615 11.656 6.13966 11.6636 5.48691C11.6712 4.81898 11.1321 4.2649 10.4563 4.2649C9.79573 4.24972 9.25663 4.78103 9.24144 5.44896Z"
                      fill="#194D79"
                    />
                  </svg>
                </label>
              </div> */}
            </div>

            <div className="about--button--h pt-1 w-50">
              <button
                type="button"
                className="btn btn-primary about--btn--h about--btn--h--alt"
                onClick={goto}
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
export default ApplyForm;
