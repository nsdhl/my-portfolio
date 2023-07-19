import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Heroimage1 from '../components/Heroimage1'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimage1 heading="CONTACT" text="Get in touch with me" />
      <Form/>
      <Footer />
    </div>
  )
}

export default Contact
