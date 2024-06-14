const JobCard = ({
  title,
  company,
  workType,
  salary,
  employmentType,
  details,
  activelyHiring,
  updatedTime,
}) => {
  return (
    <div className="col faq--work--card--pad--h">
      <div className="card faq--work--card--h">
        <div className="card-body faq--work--card--body--h">
          <div className="card-title faq--work--card--title--container align-items-center d-flex">
            <div className="faq--work--card--title--img--h">
              <img src={require("../../img/work_img_h.png")} alt="" />
            </div>
            <div className="faq--work--card--title--h">
              <h5>{title}</h5>
              <a href="">{company}</a>
            </div>
          </div>
          <div className="faq--work--card--info--h d-flex justify-content-between">
            <div className="d-flex faq--work--card--info align-items-center">
              <div className="faq--card--info--img--h">
                <img src={require("../../img/work_remote_h.png")} alt="" />
              </div>
              <p>{workType}</p>
            </div>
            <div className="d-flex faq--work--card--info align-items-center">
              <div className="faq--card--info--img--h">
                <img src={require("../../img/work_pay_h.png")} alt="" />
              </div>
              <p>{salary}</p>
            </div>
            <div className="d-flex faq--work--card--info align-items-center">
              <div className="faq--card--info--img--h">
                <img src={require("../../img/work_time_h.png")} alt="" />
              </div>
              <p>{employmentType}</p>
            </div>
          </div>
          <div className="faq--work--card--list">
            <ul>
              {details.map((detail, index) => (
                <li key={index} className="col-lg-12 work--list--li ">
                  {/* <div className="faq--work--list--img">
                    <img src={require("../../img/work_list_h.png")} alt="" />
                  </div> */}
                  {detail}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-12 d-flex justify-content-between faq--work--card--bottom--container">
            <div className="d-flex faq--work--card--bottom">
              <div className="faq--work--bottom--img--h">
                <img src={require("../../img/tick_h.png")} alt="" />
              </div>
              <p>{activelyHiring}</p>
            </div>
            <div className="d-flex faq--work--card--bottom faq--work--card--bottom--alt">
              <div className="faq--work--bottom--img--h">
                <img src={require("../../img/time_h.png")} alt="" />
              </div>
              <p>{updatedTime}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
