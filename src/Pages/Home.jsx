import React from 'react';
import Navbar from '../Section/Navbar';
import Footer from '../Section/Footer';
import { Carousel } from 'react-responsive-carousel';
import hero1 from '../assets/Hero section/image 1.jpeg';
import hero2 from '../assets/Hero section/image 5.jpeg';
import hero3 from '../assets/Hero section/image 6.jpeg';
import service1 from '../assets/Service/Image 1.jpeg';
import service2 from '../assets/Service/image 2.jpeg';
import service3 from '../assets/Hero section/image 1.jpeg';
import Testimonial from "../Section/Testimonial"
import ContactImage from "../assets/Contact/Image1.jpg"
import AboutSection from "../Section/About"
import FAQSection from '../Section/FaqSection';
import CertificatesSection from '../Section/OurCertificate';
const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section with Auto Carousel and Green Text */}
      <section className="relative">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={4000}
          showArrows={false}
          stopOnHover={false}
          swipeable={true}
          emulateTouch={true}
        >
          {[hero1, hero2, hero3].map((img, idx) => (
            <div key={idx} className="relative h-[90vh] w-full">
              <img
                src={img}
                alt={`Hero Slide ${idx + 1}`}
                className="object-cover w-full h-[90vh]"
              />

              {/* Subtle dark overlay */}
              <div className="absolute inset-0 bg-black/10"></div>

              {/* Compact Text Card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-2 sm:px-4">
                <div className="bg-white/25 backdrop-blur-sm rounded-xl shadow-lg p-4 sm:p-6 md:p-8 w-[95vw] sm:w-[90vw] md:w-auto lg:max-w-3xl lg:mx-auto border border-white/30">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#187530] mb-4 leading-tight">
                    Where Harmony Meets Housing
                  </h1>
                  <p className="text-gray-800 text-sm md:text-base lg:text-lg max-w-xl mx-auto mb-6 leading-relaxed">
                    Creating well-managed communities and properties through trust, innovation, and expert real estate solutions.
                  </p>
                  <button className="bg-[#187530] text-white px-6 py-2 md:px-8 md:py-3 rounded-lg font-medium hover:bg-[#145a26] transition-all duration-300 shadow-md hover:shadow-lg">
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>




      {/* About Us */}
      <AboutSection />

      {/* Services Section */}
      <section className="bg-[#F2E9DC] px-6 py-20 text-center" id="services">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-900 mb-2">Our Services</h2>
          <p className="text-gray-700 mb-12">
           Elevating and Empowering Your Business with Customized, Innovative, and Strategic Solutions Designed for Success
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[{ img: service1, title: 'Single Ownership & Control', desc: 'A sole proprietorship is owned and managed by a single individual, allowing complete control over business ....' },
          { img: service2, title: 'Minimal Compliance & Easy Setup', desc: 'Compared to other business structures, a proprietorship requires minimal paperwork, fewer legal formalities.....' },
          { img: service3, title: 'No Separate Legal Entity', desc: 'A sole Proprietorship and its owner share no separate legal identity. This means the business and the ....' }].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl shadow-md">
              <img src={item.img} alt={item.title} className="rounded-xl mb-4 " />
              <h3 className="font-bold text-xl text-green-900 text-md mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="bg-green-900 mt-10 text-white  p-2.5 px-8 text-base cursor-pointer hover:bg-green-800 font-semibold rounded-full">Load More</button>
      </section>

      {/* Certificates Section */}
      <CertificatesSection/>

      {/* Testimonials Section */}
      <Testimonial />
      {/* FAQ Section */}
      <FAQSection />
      {/* Contact Section */}
      <section className="bg-[#f2e9df] text-green-900 px-6 py-20" id="contact">
        <div className="max-w-4xl mx-auto text-center pb-10 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Contact US</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Form */}
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Enter Your Name"
              className="bg-green-900 text-white placeholder-white px-4 py-3 rounded-md focus:outline-none"
            />
            <input
              type="text"
              placeholder="Enter Your Number"
              className="bg-green-900 text-white placeholder-white px-4 py-3 rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Enter Your e-mail"
              className="bg-green-900 text-white placeholder-white px-4 py-3 rounded-md focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Enter Your Message"
              className="bg-green-900 text-white placeholder-white px-4 py-3 rounded-md resize-none focus:outline-none"
            />
            <div><button className='bg-green-900 text-white  p-2.5 px-8 text-base cursor-pointer hover:bg-green-800 font-semibold rounded-full'>Submit</button></div>
          </form>

          {/* Right Box */}
          <div className=" rounded-md "><img src={ContactImage} className='h-90 w-full rounded-lg' /></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
