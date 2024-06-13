import Questioncard from "./component/Questioncard_h";
import FAQSearch from "./component/Faqsearch_h";
import FAQTopQuestions from "./component/Faqtopquestion_h";
import FAQTopics from "./component/Faqtopics_h";

const FAQPage = () => {
  return (
    <div>
      <FAQSearch />
      <div className="container">
        <div className="col">
          <div className="row">
            <FAQTopQuestions />
            <FAQTopics />
            <Questioncard className="col-lg-12 faq--search--detail--container faq--main--detail--container" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
