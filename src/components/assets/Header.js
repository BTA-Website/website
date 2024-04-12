import logo from "../../images/Frame 6.png";
import "./Header.css";

const Header = () => {
    const options = [
        "About Us",
        "Calendar",
        "Contact",
        "Join Us"
    ]
    return (
        <div className="header-container">
            <div className="header-left">
                <img src={logo} className="logo" />
            </div>
            <div className="header-right">
                {options.map((option) => {
                    if (option == "Join Us") {
                        return (
                            <button className="join-button">{option}</button>
                        )
                    } else {
                        return (
                            <button className="header-option">{option}</button>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Header;