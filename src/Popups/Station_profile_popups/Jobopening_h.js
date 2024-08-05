import axios from "axios";
import { useState } from "react";
import { baseurl } from "../../baseurl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const JobOpeningForm = ({ onCancel }) => {
  const [isExp, setIsExp] = useState(false);

  const [isEdu, setIsEdu] = useState(false);
  const [jobTitle, setjobTitle] = useState('');
  const [jobDescription, setjobDescription] = useState('');
  const [yearlySalary, setyearlySalary] = useState('');
  const [jobType, setjobType] = useState('');
  const [qualification, setQualification] = useState('');
  const [careerlevel, setCareerlevel] = useState('');
  const [yearofexperience, setYearofexperience] = useState('');
  const [educationlevel, setEducationlevel] = useState('');
  const [startDate, setstartDate] = useState('');
  const [endDate, setendDate] = useState('');



  const getUserFromLocalStorage = () => {
    const user = localStorage.getItem('userData');
    return user ? JSON.parse(user) : null;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    const storedUser = getUserFromLocalStorage();
    console.log('Retrieved user from local storage:', storedUser);
    const userId = storedUser.id;


    const formData = {
      jobTitle,
      jobDescription,

      yearlySalary,
      jobType,
      qualification,
      careerlevel,
      yearofexperience,
      educationlevel,
      startDate,
      endDate,
      userId
    };

    try {

      const response = await axios.post(`${baseurl}/createjob`, {
        formData
      });

      toast.success(response.data.message);
    } catch (error) {
      console.error('Error:', error);
      toast.error('All Fields are required', error);

    }
  };




  const yearToggle = () => {
    setIsExp(!isExp);
  };

  const educationToggle = () => {
    setIsEdu(!isEdu);
  };

  return (
    <div class="container">
      <div class="my--container--h mx-auto">
      <ToastContainer />

        <div class="row">
          <div class="col">
            <div class="mb-3 d-flex justify-content-between align-items-center">
              <h1
                for="exampleFormControlInput1"
                class="form-label form-label-alt mb-1"
              >
                Job Opening
              </h1>
              <div class="about--close--h">
                <img src={require("../../img/Union_h.png")} onClick={onCancel} alt="" />
              </div>
            </div>

            <div class="mb-3">
              <label
                for="exampleFormControlInput1"
                class="form-label form-label-alt"
              >
                Job title
              </label>
              <input
                type="text"
                class="form-control skills--inp--h mb-3"
                id="exampleFormControlInput1"
                placeholder="Type here..."
                value={jobTitle}
                onChange={(e) => setjobTitle(e.target.value)}
              />
              <label
                for="exampleFormControlTextarea1"
                class="form-label form-label-alt mt-1"
              >
                Job description
              </label>
              <textarea
                class="form-control about--input--h mb-3"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Type here..."
                value={jobDescription}
                onChange={(e) => setjobDescription(e.target.value)}
              ></textarea>
              <label
                for="exampleFormControlInput1"
                class="form-label form-label-alt mt-1"
              >
                Yearly Salary
              </label>
              <input
                type="text"
                class="form-control skills--inp--h mb-3"
                id="exampleFormControlInput1"
                placeholder="Type here..."
                value={yearlySalary}
                onChange={(e) => setyearlySalary(e.target.value)}
              />
              <label
                for="exampleFormControlInput1"
                class="form-label form-label-alt mt-1"
              >
                Job Type
              </label>
              <input
                type="text"
                class="form-control skills--inp--h mb-3"
                id="exampleFormControlInput1"
                placeholder="Type here..."
                value={jobType}
                onChange={(e) => setjobType(e.target.value)}
              />
              <div class="row job--opening--qualify--cont--h">
                <label
                  for="exampleFormControlInput1"
                  class="form-label form-label-alt mt-1 px-0"
                >
                  Qualification
                </label>
                <div class="col-lg-6 job--opening--qualify--h">
                  <input
                    type="text"
                    class="form-control skills--inp--h mb-3"
                    id="exampleFormControlInput1"
                    placeholder="Type here..."
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                  />
                </div>
                <div class="col-lg-6 job--opening--qualify--h">
                  <input
                    type="text"
                    class="form-control skills--inp--h mb-3"
                    id="exampleFormControlInput1"
                    placeholder="Type here..."

                  />
                </div>
                <div class="col-lg-6 job--opening--qualify--h">
                  <input
                    type="text"
                    class="form-control skills--inp--h mb-3"
                    id="exampleFormControlInput1"
                    placeholder="Type here..."
                  />
                </div>
                <div class="col-lg-6 job--opening--qualify--h job--opening--qualify--h--alt d-flex align-items-center mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                    width="27px"
                    height="27px"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <a href="" class="">
                    Add more qualification
                  </a>
                </div>
              </div>
              <label
                for="exampleFormControlInput1"
                class="form-label form-label-alt mt-1"
              >
                Career level
              </label>
              <input
                type="text"
                class="form-control skills--inp--h mb-3"
                id="exampleFormControlInput1"
                placeholder="Type here..."
                value={careerlevel}
                onChange={(e) => setCareerlevel(e.target.value)}
              />
              <div class="mb-3 mt-1 col-12 drop--position">
                <label for="inputAddress" class="form-label form-label-alt ">
                  Years of experience
                </label>
                <div
                  onClick={yearToggle}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isExp ? `experience--job--inp--h--dropdown--click--rad` : ``
                    }`}
                  id="inputWorkPlace"
                >
                  Choose Option...
                </div>
                {isExp && (
                  <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                    <li onClick={() => { setYearofexperience('Option 1'); yearToggle(); }}>Option</li>

                    <li onClick={() => { setYearofexperience('Option 2'); yearToggle(); }}>Option</li>
                    <li onClick={() => { setYearofexperience('Option 3'); yearToggle(); }}>Option</li>
                  </ul>
                )}
              </div>
              <div class="mb-3 mt-1 col-12 drop--position">
                <label for="inputAddress" class="form-label form-label-alt">
                  Education level
                </label>
                <div
                  onClick={educationToggle}
                  className={`form-select experience--job--inp--h experience--job--inp--h--dropdown--click ${isEdu ? `experience--job--inp--h--dropdown--click--rad` : ``
                    }`}
                  id="inputWorkPlace"
                >
                  Choose Option...
                </div>
                {isEdu && (
                  <ul className=" experience--job--inp--h experience--job--inp--h--dropdown">
                    <li onClick={() => { setEducationlevel('Option 1'); educationToggle(); }}>Option</li>

                    <li onClick={() => { setEducationlevel('Option 2'); educationToggle(); }}>Option</li>
                    <li onClick={() => { setEducationlevel('Option 3'); educationToggle(); }}>Option</li>
                  </ul>
                )}
              </div>

              <div class="row job--opening--qualify--cont--h">
                <div class="col-lg-6 job--opening--qualify--h">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label form-label-alt mt-1"
                  >
                    Start date
                  </label>
                  <input
                    type="date"
                    class="form-control skills--inp--h mb-3"
                    id="exampleFormControlInput1"
                    placeholder="mm/dd/yy"
                    value={startDate}
                    onChange={(e) => setstartDate(e.target.value)}
                  />
                </div>
                <div class="col-lg-6 job--opening--qualify--h">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label form-label-alt mt-1"
                  >
                    End date
                  </label>
                  <input
                    type="date"
                    class="form-control skills--inp--h mb-3"
                    id="exampleFormControlInput1"
                    placeholder="mm/dd/yy"
                    value={endDate}
                    onChange={(e) => setendDate(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div class="about--button--h job--opening--buuton--a pt-1">
              <button
                type="button"
                class="btn btn-primary about--btn--h about--btn--h--alt"
                onClick={handleSubmit}
              >
                Post
              </button>
              <button
                type="button"
                class="btn btn-outline-primary about--btn--h about--btn--h--alt--2" onClick={onCancel}
              >
                Cancel
              </button>
              <a href="">Save as a draft</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JobOpeningForm;
