import React from "react";
import "./Footer.css";

import { AiFillHome, AiFillPhone } from "react-icons/ai";
import { GrMail } from "react-icons/gr";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <AiFillHome
              size={20}
              style={{ color: "#fff", marginRight: "1.5rem" }}
            />
            <div>
              <p>123 Housing Society.</p>
              <p>Bangladesh.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <AiFillPhone
                size={20}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
              1-123-443-33
            </h4>
          </div>
          <div className="email">
            <h4>
              <GrMail
                size={20}
                style={{ color: "#fff", marginRight: "1.5rem" }}
              />
              info@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            officiis sed ipsum ipsa quos fugit, a eum. Maxime culpa doloribus,
            nulla quod nihil aut a, corporis, in adipisci consequatur quis?
          </p>
          <div className="social-icons">
            <BsFacebook size={30} style={{ color: "#fff" }} />
            <BsTwitter size={30} style={{ color: "#fff" }} />
            <BsLinkedin size={30} style={{ color: "#fff" }} />
          </div>
        </div>
      </div>
    </footer>
  );
}
