import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage1 from '../components/Heroimage1'

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimage1 heading="ABOUT" text="I'am a Software Developer"/>
      <Footer />
    </div>
  )
}

export default About
