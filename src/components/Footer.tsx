import React from 'react';
import { Building2, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
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
                <img
                  src="assets/logo.jpg"
                  width={60}
                  height={60}
                  alt="logo"
                  className="transition-transform duration-200 hover:scale-125"
                />
                <span className="ml-2 font-bold text-xl">Steel Dex Engineering Solutions</span>
              </Link>
            </div>
            <p className="text-gray-300">Your detailing partner from start to end.</p>
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
              <li className="text-gray-300">Hybrid Structure Detailing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-2" />
                <span className="text-gray-300">sales@steeldex.co.in</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-2" />
                <span className="text-gray-300">info@steeldex.co.in</span>
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

        {/* Social Media Links */}
        <div className="mt-8 flex justify-center space-x-6">
          <a
            href="https://www.facebook.com/share/16Tm23evkR/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-300 hover:text-blue-500 transition-transform transform hover:scale-110"
          >
            <Facebook className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/steeldexengineering?igsh=ZDA0cnJta3B1djFw"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-300 hover:text-pink-500 transition-transform transform hover:scale-110"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="http://www.linkedin.com/in/steel-dex-engineering"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-300 hover:text-blue-300 transition-transform transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>

        {/* Footer Bottom */}
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
