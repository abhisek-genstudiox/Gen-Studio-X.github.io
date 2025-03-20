import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'py-3 bg-black/80 backdrop-blur-lg' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - Left Section */}
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="GenStudioX Logo" className="h-8 w-auto" />
        </a>
        
        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="/work" className="text-white text-sm xl:text-base font-medium hover:text-[#E6C88C] transition-colors duration-300">
            Work
          </a>
          <a href="/contact" className="text-white text-sm xl:text-base font-medium hover:text-[#E6C88C] transition-colors duration-300">
            Contact
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center">
          <a 
            href="/signup" 
            className="hidden lg:block px-4 xl:px-5 py-2 rounded-full bg-[#E6C88C] text-black text-sm xl:text-base font-medium hover:shadow-md hover:bg-[#E6C88C]/90 transition-all duration-300"
          >
            Let's talk
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            aria-label="Toggle menu"
          >
            <span className={cn(
              "w-6 h-0.5 bg-[#E6C88C] transition-all duration-300 ease-out",
              menuOpen && "transform rotate-45 translate-y-2"
            )}></span>
            <span className={cn(
              "w-6 h-0.5 bg-[#E6C88C] transition-all duration-300 ease-out",
              menuOpen && "opacity-0"
            )}></span>
            <span className={cn(
              "w-6 h-0.5 bg-[#E6C88C] transition-all duration-300 ease-out",
              menuOpen && "transform -rotate-45 -translate-y-2"
            )}></span>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 bg-black z-40 lg:hidden transition-all duration-300 ease-in-out",
        menuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        {/* Add close button */}
        <button 
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center"
          aria-label="Close menu"
        >
          <span className="w-6 h-0.5 bg-[#E6C88C] absolute transform rotate-45"></span>
          <span className="w-6 h-0.5 bg-[#E6C88C] absolute transform -rotate-45"></span>
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 p-5">
          <a 
            href="/work"
            onClick={() => setMenuOpen(false)}
            className="text-lg sm:text-xl font-medium text-white hover:text-[#E6C88C] transition-colors duration-300"
          >
            Work
          </a>
          <a 
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="text-lg sm:text-xl font-medium text-white hover:text-[#E6C88C] transition-colors duration-300"
          >
            Contact
          </a>
          <a 
            href="/signup" 
            onClick={() => setMenuOpen(false)}
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#E6C88C] text-black text-base sm:text-lg font-medium hover:bg-[#E6C88C]/90 transition-colors duration-300"
          >
            Let's talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
