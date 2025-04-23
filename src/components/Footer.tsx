
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Brand Column */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-4">
              RHYTHM <span className="text-purple-light">&</span> MUSE
            </h2>
            <p className="text-gray-300 mb-6">
              Elevating artists through premium music production and sonic excellence.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-light transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-light transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-light transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-light transition-colors duration-300"
                aria-label="Youtube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-300 hover:text-purple-light transition-colors duration-300">
                Home
              </Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-purple-light transition-colors duration-300">
                Portfolio
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-purple-light transition-colors duration-300">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-purple-light transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <div className="flex flex-col space-y-3">
              <Link to="/#services" className="text-gray-300 hover:text-purple-light transition-colors duration-300">
                Music Production
              </Link>
              <Link to="/#services" className="text-gray-300 hover:text-purple-light transition-colors duration-300">
                Sound Engineering
              </Link>
              <Link to="/#services" className="text-gray-300 hover:text-purple-light transition-colors duration-300">
                Mixing & Mastering
              </Link>
              <Link to="/#services" className="text-gray-300 hover:text-purple-light transition-colors duration-300">
                Artist Development
              </Link>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-purple-light" />
                <a href="mailto:info@rhythmandmuse.com" className="text-gray-300 hover:text-purple-light transition-colors duration-300">
                  info@rhythmandmuse.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-purple-light" />
                <a href="tel:+15551234567" className="text-gray-300 hover:text-purple-light transition-colors duration-300">
                  +1 (555) 123-4567
                </a>
              </div>
              <Link to="/contact#booking" className="bg-purple-light text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:bg-purple inline-flex items-center justify-center w-full sm:w-auto mt-2">
                Book a Session
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Rhythm & Muse. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link to="/privacy" className="text-gray-400 text-sm hover:text-purple-light transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 text-sm hover:text-purple-light transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
