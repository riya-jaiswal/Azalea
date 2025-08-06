import React from 'react';
import Navbar from '../Section/Navbar';
import Footer from '../Section/Footer';
import heroImage from '../assets/logo/Azalea Logo (4).jpg';
import service1 from '../assets/logo/Azalea Logo (4).jpg';
import service2 from '../assets/logo/Azalea Logo (4).jpg';
import service3 from '../assets/logo/Azalea Logo (4).jpg';

const Home = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center rounded-b-[60px] flex items-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-green-900/80 rounded-b-[60px]"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-[#F2E9DC]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Lorem ipsum dolor sit amet</h1>
          <p className="text-base md:text-lg max-w-xl mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <button className="bg-[#E9DCC9] text-black px-6 py-2 rounded-lg font-medium">Button</button>
        </div>
      </section>

      {/* About Us */}
      <section className="bg-[#F2E9DC] px-6 py-20 text-center" id="about">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-green-900 mb-2">About us</h2>
          <p className="text-gray-700 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 text-left">
            <div>
              <h3 className="text-lg font-bold text-green-900 flex items-center gap-2">
                ✅ Our Company
              </h3>
              <p className="text-sm">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-900 flex items-center gap-2">
                ✅ Our Mission
              </h3>
              <p className="text-sm">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-900 flex items-center gap-2">
                ✅ Our Vision
              </h3>
              <p className="text-sm">Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-green-900 h-64 md:h-full"></div>
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
      <section className="bg-white text-green-900 px-6 py-20" id="contact">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
    {/* Left Info */}
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
      <p className="text-sm text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="mt-4">
        <p className="font-semibold">📍 Address:</p>
        <p className="text-sm text-gray-700">123 Azalea Street, Mumbai, Maharashtra</p>
      </div>
      <div className="mt-2">
        <p className="font-semibold">📞 Phone:</p>
        <p className="text-sm text-gray-700">+91 9876543210</p>
      </div>
      <div className="mt-2">
        <p className="font-semibold">✉️ Email:</p>
        <p className="text-sm text-gray-700">info@azalea.com</p>
      </div>
    </div>

    {/* Right Form */}
    <form className="space-y-4 text-left">
      <input type="text" placeholder="Enter Your Name" className="w-full p-3 border border-gray-300 rounded text-black" />
      <input type="email" placeholder="Enter Your Email" className="w-full p-3 border border-gray-300 rounded text-black" />
      <input type="text" placeholder="Enter Your Number" className="w-full p-3 border border-gray-300 rounded text-black" />
      <textarea placeholder="Enter Your Message" className="w-full p-3 border border-gray-300 rounded text-black"></textarea>
      <button className="bg-green-900 text-white px-6 py-2 rounded font-semibold">Submit</button>
    </form>
  </div>
</section>


      <Footer />
    </>
  );
};

export default Home;
