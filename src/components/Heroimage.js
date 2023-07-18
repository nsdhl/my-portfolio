import "./HeroimgStyles.css";
import Introimage from "../assets/intro-bg.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-image" src={Introimage} alt="Introimage" />
      </div>
      <div className="content">
        <p>HI, I'M Nischal Dahal</p>
        <h1>Software Developer</h1>
        <div>
          <Link to="/project" className="btn">
            project
          </Link>
          <Link to="/contact" className="btn-light">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimage;
