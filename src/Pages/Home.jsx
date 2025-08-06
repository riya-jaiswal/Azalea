import React from 'react';
import Navbar from '../Section/Navbar';
import Footer from '../Section/Footer';
import { Carousel } from 'react-responsive-carousel';
import hero1 from '../assets/Hero section/WhatsApp Image 2025-08-06 at 4.59.14 PM.jpeg';
import hero2 from '../assets/Hero section/WhatsApp Image 2025-08-06 at 4.59.13 PM.jpeg';
import hero3 from '../assets/Hero section/WhatsApp Image 2025-08-06 at 4.59.12 PM.jpeg';
import service1 from '../assets/logo/Azalea Logo (4).jpg';
import service2 from '../assets/logo/Azalea Logo (4).jpg';
import service3 from '../assets/logo/Azalea Logo (4).jpg';

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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
          <div className="bg-white/25 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto border border-white/30">
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
      <section className="bg-[#f2e9df] px-6 py-20 text-center" id="about">
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-[#187530]">About us</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Section with Content */}
          <div className="space-y-6 text-left">
            {/* Company */}
            <div>
              <h3 className="text-lg font-bold text-[#187530] flex items-start gap-2">
                <span className="text-[#187530] text-2xl shadow-lg">✔</span>
                Our Company
              </h3>
              <p className="text-sm text-[#1a1a1a] mt-1">
                Azalea Management Services LLP provides seamless property and community management—from post-sales support to cooperative and NRI care—built on trust, transparency, and tailored service.
              </p>
            </div>
            {/* Mission */}
            <div>
              <h3 className="text-lg font-bold text-[#187530] flex items-start gap-2">
                <span className="text-[#187530] text-2xl shadow-lg">✔</span>
                Our Mission
              </h3>
              <p className="text-sm text-[#1a1a1a] mt-1">
                To deliver reliable, transparent, and efficient real estate and community services that empower clients and enhance property value and harmony.
              </p>
            </div>
            {/* Vision */}
            <div>
              <h3 className="text-lg font-bold text-[#187530] flex items-start gap-2">
                <span className="text-[#187530] text-2xl shadow-lg">✔</span>
                Our Vision
              </h3>
              <p className="text-sm text-[#1a1a1a] mt-1">
                To redefine real estate care by setting new benchmarks in innovation, quality, and client satisfaction—one community at a time.
              </p>
            </div>
          </div>

          {/* Right Box */}
          <div className="rounded-2xl bg-green-900 h-72 md:h-full"></div>
        </div>
      </section>


      {/* Services Section */}
      <section className="bg-[#F2E9DC] px-6 py-20 text-center" id="services">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-2">Our Services</h2>
          <p className="text-gray-700 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          {[{ img: service1, title: 'Single Ownership & Control', desc: 'A sole proprietorship is owned and managed by a single individual, allowing complete control over business ....' },
          { img: service2, title: 'Minimal Compliance & Easy Setup', desc: 'Compared to other business structures, a proprietorship requires minimal paperwork, fewer legal formalities.....' },
          { img: service3, title: 'No Separate Legal Entity', desc: 'A sole Proprietorship and its owner share no separate legal identity. This means the business and the ....' }].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl shadow-md">
              <img src={item.img} alt={item.title} className="rounded-xl mb-4" />
              <h3 className="font-bold text-green-900 text-md mb-2">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
        <button className="mt-10 bg-green-900 text-white px-6 py-2 rounded">Button</button>
      </section>

      {/* Certificates Section */}
      <section className="bg-[#F2E9DC] px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-green-900 mb-4">Our Certificates</h2>
        <p className="text-gray-700 mb-10 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center items-end gap-6">
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <div key={idx} className={`bg-green-900 rounded-2xl w-28 ${idx === 2 ? 'h-52' : 'h-32'}`}></div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-900 px-6 py-20 text-center text-white">
        <h2 className="text-2xl font-bold mb-2">Testimonials</h2>
        <p className="mb-10 text-sm max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {[1, 2].map((_, idx) => (
            <div key={idx} className="bg-[#F2E9DC] text-green-900 p-6 rounded-xl w-full md:w-[320px]">
              <div className="flex gap-2 items-center mb-2">
                <div className="w-6 h-6 bg-green-900 rounded-full"></div>
                <span className="text-xs font-bold">@ABTIKDIGITAL</span>
              </div>
              <p className="text-sm">
                The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.
              </p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {[0, 1, 2].map(i => (
            <span key={i} className={`w-3 h-3 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/50'}`}></span>
          ))}
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-[#F2E9DC] px-6 py-20 text-center" id="faq">
        <h2 className="text-2xl font-bold text-green-900 mb-6">FAQs</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-white p-4 rounded-md shadow">
              <h4 className="font-semibold text-green-900 mb-2">What is your refund policy?</h4>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
          ))}
        </div>
      </section>
      {/* Contact Section */}
      <section className="bg-[#f2e9df] text-green-900 px-6 py-20" id="contact">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold">Contact US</h2>
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
          </form>

          {/* Right Box */}
          <div className="bg-green-900 rounded-md w-full min-h-[260px]"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
