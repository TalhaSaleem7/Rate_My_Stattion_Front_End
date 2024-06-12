const JobOpeningForm = () => {
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
                Job Opening
              </h1>
              <div class="about--close--h">
                <img src={require("../../img/Union_h.png")} alt="" />
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
              />
              <div class="mb-3 mt-1 col-12">
                <label for="inputAddress" class="form-label form-label-alt">
                  Years of experience
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
                  Education level
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

              <div class="row job--opening--qualify--cont--h">
                <div class="col-lg-6 job--opening--qualify--h">
                  <label
                    for="exampleFormControlInput1"
                    class="form-label form-label-alt mt-1"
                  >
                    Start date
                  </label>
                  <input
                    type="text"
                    class="form-control skills--inp--h mb-3"
                    id="exampleFormControlInput1"
                    placeholder="mm/dd/yy"
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
                    type="text"
                    class="form-control skills--inp--h mb-3"
                    id="exampleFormControlInput1"
                    placeholder="mm/dd/yy"
                  />
                </div>
              </div>
            </div>

            <div class="about--button--h job--opening--buuton--a pt-1">
              <button
                type="button"
                class="btn btn-primary about--btn--h about--btn--h--alt"
              >
                Post
              </button>
              <button
                type="button"
                class="btn btn-outline-primary about--btn--h about--btn--h--alt--2"
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
