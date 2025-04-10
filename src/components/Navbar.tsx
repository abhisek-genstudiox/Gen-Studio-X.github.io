import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/ai-creative-suite', label: 'AI Creative Suite' },
  { to: '/managed-services', label: 'Managed Services' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-1 sm:px-2 lg:px-3">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 ml-0">
            <Link to="/" className="flex items-center" aria-label="Home">
              <img 
                src="/Black Logo GSX.png" 
                alt="Gen Studio X Logo" 
                className="h-8 w-auto filter invert brightness-0"
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Get Template Button for Desktop */}
          <div className="hidden md:block">
            <Link
              to="/template"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-sm">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              {label}
            </Link>
          ))}
          <Link
            to="/template"
            className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-800 hover:bg-gray-700"
          >
            Get template
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
