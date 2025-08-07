import React from 'react';
import Navbar from '../Section/Navbar';
import Footer from '../Section/Footer';
import service1 from '../assets/Service/Image 1.jpeg';
import service2 from '../assets/Service/image 2.jpeg';
import service3 from '../assets/Hero section/image 1.jpeg';

import Testimonial from "../Section/Testimonial"
import ContactImage from "../assets/Contact/Image1.jpg"
import AboutSection from "../Section/About"
import FAQSection from '../Section/FaqSection';
import CertificatesSection from '../Section/OurCertificate';
import Hero from '../Section/Hero';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';
import Contactsection from '../Section/Contactsection';
const Home = () => {
  const nav = useNavigate()
  const NavigeToService = () => {
    nav("/services")
  }
  return (
    <>
      <Navbar />



      {/* hero */}
      <Hero isHomepage={true} heading="Where Harmony Meets Housing" paragraph="  Creating well-managed communities and properties through trust, innovation, and expert real estate solutions." />

      {/* About Us */}
      <AboutSection />

      {/* Services Section */}
      <section className="bg-[#F2E9DC] px-6 py-10 md:py-20 text-center" id="services">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-2">Our Services</h2>
          <p className="text-gray-700 mb-12">
            Elevating and Empowering Your Business with Customized, Innovative, and Strategic Solutions Designed for Success
          </p>
        </div>
         
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[{ img: service1, title: 'Post-Sales Management', desc: 'Seamless handover, documentation, buyer coordination, and compliance support post project sales.' },
          { img: service2, title: 'One-Year Project Support', desc: 'Initial facility setup, utilities, staffing, and community-building for newly launched properties.' },
          { img: service3, title: 'NRI Property Management', desc: 'Remote monitoring, rent collection, tenant handling, and full legal-compliance for overseas investors.' }].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl shadow-md">
              <img src={item.img} alt={item.title} className="rounded-xl mb-4 " />
              <h3 className="font-bold text-xl text-green-900 text-md mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
        <button onClick={NavigeToService} className="bg-green-900 mt-10 text-white  p-2.5 px-8 text-base cursor-pointer  transition-all duration-300 font-semibold rounded-full  hover:bg-[#c89d47] ">Load More</button>
      </section>


      {/* Certificates Section */}
      <CertificatesSection />

      {/* Testimonials Section */}
      <Testimonial />
      {/* FAQ Section */}
      <FAQSection />
      {/* Contact Section */}
     <Contactsection shouldMapShow={false}/>
      <Footer />
    </>
  );
};

export default Home;
