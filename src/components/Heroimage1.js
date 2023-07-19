import "./Heroimage1Styles.css";
import { Component } from 'react'

import React from 'react'

class Heroimage1 extends Component {
    render() {
  return (
    <div className="hero-image">
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
        </div>
      
    </div>
  )
    }
}

export default Heroimage1
