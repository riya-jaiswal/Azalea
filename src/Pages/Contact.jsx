import React from 'react'
import Navbar from '../Section/Navbar'
import Footer from '../Section/Footer'
import Contactsection from '../Section/Contactsection'
import Hero from '../Section/Hero';


function Contact() {
  return (
    <div>
      <Navbar />
      <Hero isHomepage={false} heading="Where Harmony Meets Housing" paragraph="  Creating well-managed communities and properties through trust, innovation, and expert real estate solutions." />
      <Contactsection />
      <Footer />
    </div>
  )
}

export default Contact
