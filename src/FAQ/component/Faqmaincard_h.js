import chevron from "../../img/chevron_h.png";
import { useNavigate } from "react-router-dom";

const FAQCard = ({ linkText }) => {
  const navigate = useNavigate();

  const searchdetail = () => navigate("/faqdetailh");
  return (
    <div
      onClick={searchdetail}
      className="d-flex align-items-center faq--detail--card--container faq--detail--card--container--top--10"
    >
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
