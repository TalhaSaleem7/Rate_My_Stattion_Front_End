import chevron from "../../img/chevron_h.png";
const FAQCard = ({ linkText }) => {
  return (
    <div className="d-flex align-items-center faq--detail--card--container faq--detail--card--container--top--10">
      <div className="faq--detail--related--link--h">
        <a href="">{linkText}</a>
      </div>
      <div className="faq--detail--related--img--h">
        <img src={chevron} alt="" />
      </div>
    </div>
  );
};

export default FAQCard;
