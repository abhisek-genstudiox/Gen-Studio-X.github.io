import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { useElementOnScreen } from '@/utils/animations';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      ref={containerRef}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'py-3 bg-black/80 backdrop-blur-lg' : 'py-5 bg-transparent',
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo - Left Section */}
        <a href="/" className="flex items-center">
          <img src="/logo.png" alt="GenStudioX Logo" className="h-8 w-auto" />
        </a>
        
        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="/work" className="text-white text-sm xl:text-base font-medium hover:text-[#E6C88C] transition-colors duration-300 font-display">
            Work
          </a>
          <a href="/contact" className="text-white text-sm xl:text-base font-medium hover:text-[#E6C88C] transition-colors duration-300 font-display">
            Contact
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center">
          <Button 
            variant="default"
            className="hidden lg:block bg-[#E6C88C] text-black hover:bg-[#E6C88C]/90 font-display"
            asChild
          >
            <a href="/signup">Let's talk</a>
          </Button>
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="lg:hidden text-[#E6C88C] hover:bg-transparent"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-full sm:w-[400px] bg-black border-none [&>button]:text-[#E6C88C] [&>button]:hover:text-[#E6C88C]/80"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 p-5">
                <a 
                  href="/work"
                  className="text-lg sm:text-xl font-medium text-white hover:text-[#E6C88C] transition-colors duration-300 font-display"
                >
                  Work
                </a>
                <a 
                  href="/contact"
                  className="text-lg sm:text-xl font-medium text-white hover:text-[#E6C88C] transition-colors duration-300 font-display"
                >
                  Contact
                </a>
                <Button 
                  variant="default"
                  className="w-full bg-[#E6C88C] text-black hover:bg-[#E6C88C]/90 font-display"
                  asChild
                >
                  <a href="/signup">Let's talk</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
