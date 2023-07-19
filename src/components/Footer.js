import "./FooterStyles.css";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Chabahil, Sarswatinagar</p>
              <p>Kathmandu</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +977-9805940865
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              pompousnischal@gmail.com
            </h4>
          </div>
        </div>
        <div className="footer-right"></div>
      </div>

      <div className="right">
        <h4>About Me</h4>
        <p>
          This is me Nischal Dahal, Software Developer. I enjoy coding and
          believe that coding is an artform.
        </p>
        <div className="social-media">
            <FaFacebook size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaGithub size={20} style={{ color: "#fff", marginRight: "1rem" }} />
            <FaLinkedin size={20} style={{ color: "#fff", marginRight: "1rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
