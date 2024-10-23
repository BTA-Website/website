import Header from "../assets/Header";
import "./Calendar.css";
import Footer from "../assets/Footer";

const Calendar = () => {
  return (
    <div className="calendar-wrapper">
      <Header />
      <div className="calendar-body">
        <div className="calendar-header">
          <p className="calendar-banner">Berkeley Tennis Association</p>
        </div>
        <div className="calendar-border">
          <iframe
            title="Google Calendar"
            src="https://calendar.google.com/calendar/embed?src=stephleivas.bta%40gmail.com&ctz=America%2FLos_Angeles"
            style={{ paddingTop: "2%" }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Calendar;
