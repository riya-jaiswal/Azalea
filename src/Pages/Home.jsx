import React from 'react'
import Navbar from '../Section/Navbar'
import Footer from '../Section/Footer'
import heroImage from '../assets/logo/Azalea Logo (4).png';

const Home = () => {
  return (
    <>

      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center rounded-b-[60px] flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-green-900/80 rounded-b-[60px]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-base md:text-lg max-w-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <button className="bg-[#E9DCC9] text-black px-6 py-2 rounded-lg font-medium">
            Button
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-700 text-sm">
              Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Company</h3>
            <p className="text-gray-700 text-sm">
              Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-700 text-sm">
              Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#F2E9DC] px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Our Services</h2>
          <ul className="grid md:grid-cols-3 gap-10 text-sm text-gray-800">
            <li>
              <h4 className="font-semibold mb-1">Single Ownership & Control</h4>
              <p>A sole proprietorship is owned and managed by a single individual...</p>
            </li>
            <li>
              <h4 className="font-semibold mb-1">Minimal Compliance & Easy Setup</h4>
              <p>Compared to other business structures, a proprietorship requires minimal paperwork...</p>
            </li>
            <li>
              <h4 className="font-semibold mb-1">No Separate Legal Entity</h4>
              <p>A sole Proprietorship and its owner share no separate legal identity...</p>
            </li>
          </ul>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Certificates</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-green-900 text-white px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {[1, 2].map((_, idx) => (
            <div key={idx} className="bg-white text-green-900 p-6 rounded-md">
              <p className="mb-2">
                \"The night is dark and full of terrors. What is dead may never die. And now his watch is ended. All men must die.\"
              </p>
              <span className="text-sm font-medium\">@ Abtik Digital</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">FAQs</h2>
          {[1, 2, 3, 4, 5].map((_, idx) => (
            <div key={idx} className="mb-4">
              <h4 className="font-medium text-gray-800">What do you want?</h4>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#F2E9DC] px-6 py-20">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-sm mb-6 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <form className="space-y-4">
            <input type="text" placeholder="Enter Your Name" className="w-full p-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Enter Your Number" className="w-full p-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Enter Your Email" className="w-full p-2 border border-gray-300 rounded" />
            <textarea placeholder="Enter Your Message" className="w-full p-2 border border-gray-300 rounded"></textarea>
            <button className="bg-green-900 text-white px-6 py-2 rounded">Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;

