import searchicon from "../../img/search_icon_h.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const FAQSearch = () => {
  const navigate = useNavigate();

  const search = () => navigate("/faqsearchresulth");
  return (
    <section className="w-100 faq--main--section--h">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="faq--search--detail--h faq--main--h mx-auto">
              <h1>How can we help?</h1>
              <form className="d-flex justify-content-between">
                <input
                  className="form-control me-3 faq--main--search--h"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  onClick={search}
                  className="btn btn-primary d-flex align-items-center faq--main--search--button--h"
                  type="submit"
                >
                  <div className="faq--main--search--icon--h me-2">
                    <img src={searchicon} alt="" />
                  </div>
                  Search
                </button>
                <div className="faq--main--search--icon--alt--h">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                    width={25}
                    height={35}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSearch;
