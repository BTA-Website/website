import logo from "../../images/Frame 6.png";
import "./Footer.css";
import email from "../../images/email.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";


const Footer = () => {
    const socials = [
        instagram,
        facebook,
        email
    ]

    return (
        <div className="footer-container">
            <div className="footer-left">
                <img src={logo} className="logo" />
            </div>
            <div className="footer-right">
                {socials.map((social) => {
                    return (
                        <img className="social-image" src={social} />
                    )
                })}
            </div>
        </div>
    )
}

export default Footer;