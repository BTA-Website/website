import logo from "../../images/Frame 6.png";
import insta from "../../images/insta-icon.png";
import facebook from "../../images/fb-icon.png";
import email from "../../images/email-icon.png";

import "./footer.css";


const Footer = () => {
    return (
        <div className="footer-container">
             <div className="header-left">
                <img src={logo} className="logo" />
            </div>
            <div className="footer-icons">
            <a href="https://www.instagram.com/berktennis/"><img src={insta}></img></a>
            <a href="https://www.facebook.com/groups/berkeleytennisassociation"><img src={facebook}></img></a>
            <a href="mailto:berkeleytennisassociation@gmail.com"><img src={email}></img></a>
            </div>
        </div>
    )
}

export default Footer;