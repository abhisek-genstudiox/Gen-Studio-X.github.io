import React from 'react';
import { cn } from '@/lib/utils';

const Features: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-black relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start max-w-7xl mx-auto relative">
          <div className="w-auto mb-4 md:mb-0">
            <div className="bg-[#E6C88C]/90 px-4 py-1 rounded">
              <span className="text-black font-semibold">ABOUT US</span>
            </div>
          </div>
          
          <div className="flex-1">
            <p className="text-xl md:text-2xl lg:text-4xl leading-relaxed text-white">
              At Gen Studio X, we specialize in crafting <span className="text-[#E6C88C]">visually captivating</span>, high-performance content that elevates your brand using AI. We transform content creation with <span className="text-[#E6C88C]">cutting-edge AI</span>. Design, generate, and scale digital ads, avatars, videos, and more with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;