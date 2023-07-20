import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage1 from '../components/Heroimage1'
import PricingCard from '../components/PricingCard'


const Project = () => {
  return (
    <div>
      <Navbar />
      <Heroimage1 heading="PROJECT" text="some of my recent works" />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project
