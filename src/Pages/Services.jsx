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
      <Hero />
      <Servicesection />
      <FAQSection />
      <Footer />
    </div>
  )
}

export default Services
