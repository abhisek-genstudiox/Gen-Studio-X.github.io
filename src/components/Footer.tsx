import React from 'react';
import { cn } from '@/lib/utils';
import { Github, Twitter, Instagram } from 'lucide-react';
import { useElementOnScreen } from '@/utils/animations';
import { Button } from './ui/button';
import { Separator } from './ui/separator';

const Footer: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  return (
    <footer className="section-padding bg-black relative py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div 
          ref={containerRef}
          className={cn(
            "max-w-7xl mx-auto",
            "transition-all duration-700 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Links and Social Icons */}
          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8 items-center">
            {/* Social Icons - Left */}
            <div className="flex gap-4 sm:gap-6">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Github, href: "#", label: "GitHub" }
              ].map(({ icon: Icon, href, label }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300"
                >
                  <a href={href} aria-label={label}>
                    <Icon size={20} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
                  </a>
                </Button>
              ))}
            </div>

            {/* Legal Links - Right */}
            <div className="flex gap-4 sm:gap-8 text-sm sm:text-base">
              {["Privacy", "Terms", "Security"].map((link) => (
                <Button
                  key={link}
                  variant="ghost"
                  size="sm"
                  asChild
                  className="text-white/70 hover:text-[#E6C88C] transition-all duration-300"
                >
                  <a href="#">{link}</a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
