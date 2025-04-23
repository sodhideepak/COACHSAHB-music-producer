
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-dark">
            COACHSAHB
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'text-purple after:w-full' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact#booking"
            className="btn-primary"
          >
            Book Session
          </Link>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-dark" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-dark">
              COACHSAHB 
            </span>
            <button 
              className="text-dark" 
              onClick={closeMenu}
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-8 bg-gray-900 mt-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xl font-medium ${
                  isActive(link.path) ? 'text-purple' : 'text-dark'
                }`}
                onClick={closeMenu}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact#booking"
              className="btn-primary mt-4"
              onClick={closeMenu}
            >
              Book Session
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
