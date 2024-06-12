import searchicon from "../../img/search_icon_h.png"
const FAQSearch = () => (
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
                <button className="btn btn-primary d-flex align-items-center" type="submit">
                  <div className="faq--main--search--icon--h me-2">
                    <img src={searchicon} alt="" />
                  </div>
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  export default FAQSearch