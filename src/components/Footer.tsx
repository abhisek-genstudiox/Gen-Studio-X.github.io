import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram } from 'lucide-react';
import { useElementOnScreen } from '@/utils/animations';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import FooterPopup from './FooterPopup';

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

const Footer: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-padding bg-black relative py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={cn("max-w-7xl mx-auto transition-all duration-700 ease-out", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")}
        >
          <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8 items-center">
            <div className="flex gap-4 sm:gap-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.div key={label} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" size="icon" asChild className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">
                    <a href={href} aria-label={label}>
                      <Icon size={20} strokeWidth={1.5} className="sm:w-6 sm:h-6" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
            <div className="flex gap-4 sm:gap-8 text-sm sm:text-base">
              <FooterPopup type="privacy">Privacy</FooterPopup>
              <FooterPopup type="terms">Terms</FooterPopup>
              <FooterPopup type="security">Security</FooterPopup>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-white/50 text-sm"
          >
            © {currentYear} Gen Studio X. All rights reserved.
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
