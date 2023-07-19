import "./HeroimgStyles.css";
import PortfolioImage from "../assets/portfolio.jpg";
import React from "react";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-image" src={PortfolioImage} alt="Introimage" />
      </div>
      <div className="content">
        <p>HI, I'M NISCHAL DAHAL</p>
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
