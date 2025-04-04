import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useElementOnScreen } from '@/utils/animations';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Managed Services', href: '/managed-services' },
    { label: 'Content Studio Suite', href: '/content-studio-suite' },
  ];

  return (
    <motion.header
      ref={containerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        scrolled ? 'py-3 bg-black/40 backdrop-blur-lg border-b border-white/10' : 'py-5 bg-transparent',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.a href="/" className="flex items-center group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img src="/logo.png" alt="GenStudioX Logo" className="h-8 w-auto transition-transform duration-300 group-hover:scale-110" />
        </motion.a>

        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              className="text-white/80 text-sm xl:text-base font-medium hover:text-[#E6C88C] transition-colors duration-300 font-display relative group"
              whileHover={{ scale: 1.05 }}
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E6C88C] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="default"
              className="hidden lg:block bg-[#E6C88C] text-black hover:bg-[#E6C88C]/90 font-display shadow-lg shadow-[#E6C88C]/20"
              asChild
            >
              <a href="/signup">Let's talk</a>
            </Button>
          </motion.div>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-[#E6C88C] hover:bg-transparent">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full sm:w-[400px] bg-black/90 backdrop-blur-lg border-none [&>button]:text-[#E6C88C] [&>button]:hover:text-[#E6C88C]/80"
            >
              <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8 p-5">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className="text-lg sm:text-xl font-medium text-white hover:text-[#E6C88C] transition-colors duration-300 font-display"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="default"
                    className="w-full bg-[#E6C88C] text-black hover:bg-[#E6C88C]/90 font-display shadow-lg shadow-[#E6C88C]/20"
                    asChild
                  >
                    <a href="/signup">Let's talk</a>
                  </Button>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
