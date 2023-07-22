import "./WorkCardStyles.css"

import React from 'react'
import Pro from "../assets/project1.jpeg"
import { NavLink } from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={Pro} alt="project" className="project-img" />
                <h2 className="project-title">Project Title</h2>
                <div className="project-details">
                <p>This is a text</p>
                <div className="pro-btns">
                    <NavLink to="/project" className="pro-btn">View</NavLink>
                    <NavLink to="/project" className="pro-btn">Source</NavLink>

                </div>

                   
                </div>

                </div>
        </div>
      
    </div>
  )
}

export default WorkCard
