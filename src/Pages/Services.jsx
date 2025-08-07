import React from 'react'
import Navbar from '../Section/Navbar'
import Footer from '../Section/Footer'
import Servicesection from '../Section/Servicesection'
import FAQSection from '../Section/FaqSection';
import Hero from '../Section/Hero';


const Services = () => {
  return (
    <div>
      <Navbar />
      <Hero isHomepage={false} heading="Where Harmony Meets Housing" paragraph="  Creating well-managed communities and properties through trust, innovation, and expert real estate solutions."/>
      
      <Servicesection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default Services
