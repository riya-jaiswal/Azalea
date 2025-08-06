import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo/Azalea Logo (4).png';

const Footer = () => {
  return (
    <footer className="bg-[#F2E9DC] text-gray-800 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left Side - Address, Contact, Logo, Social */}
        <div>
          <img src={logo} alt="Azalea Logo" className="h-12 mb-4" />
          <p className="text-sm mb-2">
            Azalea Management Services LLP<br />
            123, Business Street, Mumbai, Maharashtra
          </p>
          <p className="text-sm mb-4">Contact: +91-9876543210</p>
          <div className="flex gap-3">
            <a href="#" className="bg-green-900 p-2 rounded-full text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="bg-green-900 p-2 rounded-full text-white">
              <FaGithub />
            </a>
            <a href="#" className="bg-green-900 p-2 rounded-full text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Right Side - Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom Text */}
      <div className="text-center mt-8 text-sm text-gray-600">
        ©2025 Abtik Digital – All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

