import React from 'react';
import { cn } from '@/lib/utils';
import { Github, Twitter, Instagram, Facebook, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">xw
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-display text-xl font-bold mb-4 text-[#E6C88C]">GenStudioX</h3>
            <p className="text-white/70 mb-6 max-w-xs">
              The next generation AI platform for creative professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">Updates</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">Beta Program</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">Press</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-base mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">Privacy</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">Terms</a></li>
              <li><a href="#" className="text-white/70 hover:text-[#E6C88C] transition-colors duration-300">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            © {year} GenStudioX. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-white/60 hover:text-[#E6C88C] transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-[#E6C88C] transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-white/60 hover:text-[#E6C88C] transition-colors duration-300">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
