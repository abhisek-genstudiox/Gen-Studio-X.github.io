import React from 'react';
import { cn } from '@/lib/utils';
import { useElementOnScreen } from '@/utils/animations';

const brands = [
  { id: 1, name: 'OpenAI', image: '/brands/openAI.svg.png' },
  { id: 2, name: 'Stability AI', image: '/brands/stabilityai.png' },
  { id: 3, name: 'MidJourney', image: '/brands/MidJourney.png' },
  { id: 4, name: 'Eleven Labs', image: '/brands/elevenLabs.png' },
  { id: 5, name: 'Perplexity', image: '/brands/perplexity.png' },
  { id: 6, name: 'Synthesia', image: '/brands/synthesia.png' },
  { id: 7, name: 'Runaway', image: '/brands/runaway.png' },
  { id: 8, name: 'Invideo', image: '/brands/invideo.png' },
  { id: 9, name: 'Hailuo', image: '/brands/Hailuo.png' },
  { id: 10, name: 'Kaling', image: '/brands/Kaling.png' },
];

const Testimonials: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  return (
    <section id="testimonials" className="section-padding bg-black relative overflow-hidden py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div 
          ref={containerRef}
          className={cn(
            "max-w-2xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ease-out text-white",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 sm:mb-4 text-[#E6C88C]">
            Powered By Leading AI Technologies
          </h2>
          <p className="text-base sm:text-lg text-white/70 px-4">
            Integrating the most advanced AI platforms for creative excellence
          </p>
        </div>
        
        <div className="max-w-full mx-auto overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...brands, ...brands].map((brand, index) => (
              <div 
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-2 sm:mx-3 md:mx-4 p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={brand.image}
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert hover:brightness-0 hover:invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 