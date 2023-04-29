import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

  const handleClick = () => {
    setClick((prevClick) => !prevClick);
  };

  const changeColor = () => {
    if (window.scrollY >= 1) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={`navbar ${color ? "navbar-bg" : ""}`}>
      <h1>Portfolio.</h1>
      <ul className={`menu-links ${click ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={handleClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/project" onClick={handleClick}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </nav>
  );
}
