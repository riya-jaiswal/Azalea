import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo/Azalea Logo (4).png'; 

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About US', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md rounded-b-[60px]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left Navigation Links */}
        <div className="flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition text-gray-700 hover:text-green-700 ${
                location.pathname === item.path ? 'font-semibold text-black' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4">
          <img src={logo} alt="Azalea Logo" className="h-12" />
          <p className="text-xs text-center text-gray-700"></p>
        </div>

        {/* Right Button */}
        <div>
          <button className="bg-green-900 text-white px-6 py-2 rounded-xl hover:bg-green-800 transition">
            Button
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
