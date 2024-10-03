import React from 'react';
import './Landing.css';
import Header from "../assets/Header";
import Footer from "../assets/Footer";
import team from "../../images/team.png";
import pin from "../../images/pin.png";
import player1 from "../../images/player1.png";
import player2 from "../../images/player2.png";

const Landing = () => {
  return (
    <div className="landing-page">
      <Header />
      <div className="landing-body">
        <div className="landing-top">
          <p className="landing-banner">BERKELEY TENNIS ASSOCIATION</p>
          <img src={player1} className="player1" />
          <img src={player2} className="player2" />
        </div>
        <div className="landing-bottom">
          <div className="landing-info">
            <div className="landing-left">
              <p>WHERE TO FIND US</p>
              <div className="landing-location">
                <img src={pin} />
                <p>HEARST MINING COURTS</p>
              </div>
              <div className="landing-time"><p>Wednesdays @ 6-8 PM</p></div>
              <div className="landing-time"><p>Saturdays @ 11AM-1PM</p></div>
            </div>
            <div className="landing-right">
              <img src={team} className="team-pic" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;