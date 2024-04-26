import Header from "../assets/Header";
import "./about.css";
import Footer from "../assets/Footer";
import tempIcon from "../../images/icon2.png";
import player from "../../images/player1.png";


const Member = ({name, role, bio, photo}) => {
    return (<div className = "teamMember">
        <div className="memberPhoto">
            <img src={photo} alt={`${name} photo`}></img>
        </div>
        <div className="memberName">
            <h3>{name}</h3>
        </div>
        <div className="role">
            <p>{role}</p>
        </div>
        <div className="bio">
            <p>{bio}</p>
        </div>
    </div>)
}

const AboutUs = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="clubSummary">
                    <h1>We are Berkeley Tennis Association!</h1>
                    <p className="clubBio"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          mauris ligula, vestibulum quis urna at, ornare accumsan turpis.
          Phasellus finibus nulla risus, at vulputate ligula euismod in. Aenean
          vulputate pretium sodales .</p>
                </div>
                <div className="image1">
                    <img src={player}></img>
                </div>
            </div>
            <div className="memberInfo">
                <h1>Meet the Team</h1>
                <div className="memberDirectory">
                <Member photo={tempIcon} name="name" role="role" bio="biodfasdfasdf" />
                <Member photo={tempIcon} name="name" role="role" bio="biodfasdfasdf" />
                <Member photo={tempIcon} name="name" role="role" bio="biodfasdfasdf" />
                <Member photo={tempIcon} name="name" role="role" bio="biodfasdfasdf" />
                <Member photo={tempIcon} name="name" role="role" bio="biodfasdfasdf" />
                <Member photo={tempIcon} name="name" role="role" bio="biodfasdfasdf" />
                <Member photo={tempIcon} name="name" role="role" bio="biodfasdfasdf" />
                <Member photo={tempIcon} name="name" role="role" bio="biodfasdfasdf" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutUs;