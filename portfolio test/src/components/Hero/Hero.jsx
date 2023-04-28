import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

import HeroImage from "../../assets/intro-bg.jpg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="image-container">
        <img src={HeroImage} alt="hero image" className="hero-img" />
      </div>
      <div className="content-container">
        <p>HI, I'M A FREELANCER.</p>
        <h1>React Developer.</h1>
        <Link to="/projects" className="btn">
          PROJECTS
        </Link>
        <Link to="/projects" className="btn btn-light">
          CONTACT
        </Link>
      </div>
    </div>
  );
}
