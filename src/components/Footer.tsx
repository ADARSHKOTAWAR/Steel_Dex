import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img src="assets/logo.jpg" width={60} height={60} alt="logo" className='transition-transform duration-200 hover:scale-125'/>
                <span className="ml-2 font-bold text-xl">Steel Dex</span>
              </Link>
            </div>
            <p className="text-gray-300">
              Delivering high-quality, precision-driven PEB steel detailing services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-secondary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Mini Storage Building</li>
              <li className="text-gray-300">Warehouse Buildings</li>
              <li className="text-gray-300">Aircraft Hangar</li>
              <li className="text-gray-300">Structural Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              {/* <div className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-2" />
                <span className="text-gray-300">info@steeldex.co.in</span>
              </div> */}
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-2" />
                <span className="text-gray-300">sales@steeldex.co.in</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-2" />
                <span className="text-gray-300">+91 91122 39533</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-secondary mr-2" />
                <span className="text-gray-300">
                SteelDex, 55, Sri Sai Nagar, Madhapur, Hyderabad
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Steel Dex. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;