import "./JoinUs.css";
import Header from "../assets/Header";
import Footer from "../assets/Footer";
import racket from "../../images/icon21.png";

const JoinUs = () => {
  const questions = [
    {
      title: "What Equipment do I Need to Bring?",
      description:
        "You should bring your tennis racket, comfortable sports clothing, tennis shoes, and plenty of water.",
    },
    {
      title: "Are Beginners Welcome?",
      description:
        "Absolutely! We have programs and courts specifically for beginners.",
    },
    {
      title: "How do I join the UC Berkeley Tennis Association?",
      description:
        "You can join by filling out the application form on our website or by visiting us in person at the tennis courts.",
    },
    {
      title: "What are the membership fees?",
      description:
        "Membership fees vary depending on the type of membership. Please contact us for more detailed information.",
    },
  ];

  const buttonText = {
    "Fill out the Membership Form!": "https://forms.gle/WjQXd1Zd174oemB97",
    "Pay the Semester Fees": "https://forms.gle/WjQXd1Zd174oemB97",
    "Sign up for Matches!": "https://docs.google.com/forms/d/e/1FAIpQLSfUKzvf5ilkPdyM9lZVrBeQjP_vRw9OW2W-fcKOwkUtYJ6VBg/viewform?usp=sf_link",
  };

  return (
    <div>
      <Header />
      <div className="joinus-wrapper">
        <div className="joinus-header">
          <div className="header-text-wrapper">
            <p className="header-text">JOIN BERKELEY TENNIS ASSOCIATION!</p>
          </div>
          <img src={racket} className="racket" />
        </div>
        <div className="joinus-body">
          <div className="buttons">
            {Object.keys(buttonText).map((text) => {
              return (
                <button className="joinus-button">
                  <a href={buttonText[text]}>
                    <p className="button-text">{text}</p>
                  </a>
                </button>
              );
            })}
          </div>
          <div className="faq">
            <p className="faq-header">Frequently Asked Questions (FAQ)</p>
            <div className="question-boxes">
              {questions.map((question) => {
                return (
                  <div className="question-box">
                    <p className="question-title">{question.title}</p>
                    <p className="question-description">
                      {question.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
