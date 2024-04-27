import logo from "../../images/Frame 6.png";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const options = {"About Us": "about", "Calendar": "calendar", "Contact": "", "Join Us": "join"};
  return (
    <div className="header-container">
      <div className="header-left">
        <Link to="/">
        <img src={logo} className="logo" />
        </Link>
      </div>
      <div className="header-right">
        {Object.keys(options).map((option) => {
          if (option == "Join Us") {
            return (
              <Link to="/join">
                <button className="join-button">{option}</button>
              </Link>
            );
          } else {
            return (
            <Link to={`/${options[option]}`}>
                <button className="header-option">{option}</button>
            </Link>
                )
          }
        })}
      </div>
    </div>
  );
};

export default Header;
