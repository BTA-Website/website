import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import Header from "../assets/Header";

const Landing = () => {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>BERKELEY TENNIS ASSOCIATION</h1>
            <button>Get Involved</button>
          </div>
          <div className="hero-image">
            <img src="path/to/hero-image.jpg" alt="Tennis players" />
          </div>
        </section>
        <section className="location">
          <div className="location-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <div className="location-details">
            <h2>WHERE TO FIND US</h2>
            <p>HEARST MINING COURTS</p>
            <p>Wednesdays @ 7 PM</p>
            <p>Thursdays @ 7 PM</p>
          </div>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Berkeley Tennis Association. All rights reserved.</p>
        <div className="social-media">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </footer>
    </div>
  );
};

export default Landing;