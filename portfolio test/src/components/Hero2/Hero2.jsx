import React from "react";
import "./Hero2.css";

export default function Hero2(props) {
  return (
    <div className="hero2">
      <div className="img-container">
        <h1>{props.heading}</h1>
        <p>{props.subheading}</p>
      </div>
    </div>
  );
}
