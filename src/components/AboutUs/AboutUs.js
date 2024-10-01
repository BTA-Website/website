import Header from "../assets/Header";
import "./about.css";
import Footer from "../assets/Footer";
import tempIcon from "../../images/icon2.png";
import player from "../../images/player1.png";
import warren from "../../images/warren.jpg";
import steph from "../../images/steph.png";
import aaron from "../../images/aaron.jpg";
import jaeha from "../../images/jaeha.jpg";
import noran from "../../images/noran.jpg";
import angela from "../../images/Angela.jpg";
import james from "../../images/James.jpg";
import tanmay from "../../images/tanmay.jpg";
import rishit from "../../images/rishit.jpg";
import katie from "../../images/katie.jpg";

const Member = ({ name, role, bio, photo }) => {
  return (
    <div className="teamMember">
      <div className="memberPhoto">
        <img className="profile-pic" src={photo} alt={`${name} photo`}></img>
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
    </div>
  );
};

const AboutUs = () => {
  const memberInfo = [
    {
      name: "Warren Chen",
      role: "Co-President",
      bio: "Senior/Political Econ",
      photo: warren,
    },
    {
      name: "Steph Leivas",
      role: "Co-President",
      bio: "Junior/Economics",
      photo: steph,
    },
    {
      name: "Aaron Lee",
      role: "Tournament Director",
      bio: "Sophomore/MCB",
      photo: aaron,
    },
    {
      name: "Jaeha Jung",
      role: "Tournament Director",
      bio: "Sophomore/Physics",
      photo: jaeha,
    },
    {
      name: "Noran Hassan",
      role: "Social Media Director",
      bio: "Junior/MCB",
      photo: noran,
    },
    {
      name: "Angela Zhang",
      role: "Executive Director",
      bio: "Sophomore/MCB",
      photo: angela,
    },
    {
      name: "James Rungsawang",
      role: "Tournament Director",
      bio: "Senior/Computer Science",
      photo: james,
    },
    {
      name: "Tanmay Vijaywargiya",
      role: "Executive Director",
      photo: tanmay,
      bio: "N/A",
    },
    {
      name: "Rishit Pradhan ",
      role: "Executive Director",
      bio: "Sophomore/Chemical Biology",
      photo: rishit,
    },
    {
      name: "Katie Nguyen",
      role: "Officer",
      photo: katie,
      bio: "Sophomore/Public Health",
    },
  ];
  return (
    <>
      <Header />
      <div className="container">
        <div className="clubSummary">
          <h1>We are Berkeley Tennis Association!</h1>
          <p className="clubBio">
            {" "}
            Since its establishment in 2003, Berkeley Tennis Association
            (formerly Tennis at Cal) has expanded into the largest tennis club
            on campus with over 200 members in 2024 and growing. BTA provides
            its members with experiences, lessons, and memories that will last a
            lifetime! Our purpose is to provide opportunities for the UC
            Berkeley community to compete and socialize with other members of
            the tennis community. BTA is a social and casual club that
            encourages members of all levels to not only elevate their tennis
            game but to connect with others who share the same passion for
            tennis. We hold optional practices, social events, and tournaments
            throughout the semester. It's a great way to meet other tennis
            players, learn, or improve your game. All skill levels are welcome!
            In order to become a member of BTA, you must fill out our membership
            form and pay dues. Check out our social media platforms (Instagram &
            Facebook) to see what BTA is all about! Hope to see you out on the
            courts!! ~BTA Team
          </p>
        </div>
        <div className="image1">
          <img src={player}></img>
        </div>
      </div>
      <div className="memberInfo">
        <h1>Meet the Team</h1>
        <div className="memberDirectory">
          {memberInfo.map((member) => (
            <Member
              name={member.name}
              role={member.role}
              bio={member.bio}
              photo={member.photo}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
