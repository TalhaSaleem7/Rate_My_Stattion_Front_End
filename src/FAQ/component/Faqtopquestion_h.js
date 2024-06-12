import FAQCard from "./Faqmaincard_h";
const FAQTopQuestions = () => {
    const questions = [
      "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?",
      "Pellentesque vel tristique ultrices habitasse feugiat nulla tempor quam?"
    ];
  
    return (
      <div className="faq--main--card--one mx-auto">
       
        <h1 className="faq--detail--related--title">Top 10 questions</h1>
        <div className="row row-cols-1 row-cols-lg-2 g-4 faq--detail--related--container--h faq--main--related--container--h">
          {questions.map((question, index) => (
            <FAQCard key={index} linkText={question} />
          ))}
        </div>
      </div>
    );
  };
  export default FAQTopQuestions