import React from 'react';
import { cn } from '@/lib/utils';
import { useElementOnScreen } from '@/utils/animations';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as HoverCard from '@radix-ui/react-hover-card';

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
          <p className="text-base sm:text-lg text-white/70 px-4 font-display">
            Integrating the most advanced AI platforms for creative excellence
          </p>
        </div>
        
        <ScrollArea.Root className="max-w-full mx-auto overflow-hidden">
          <ScrollArea.Viewport className="w-full h-full">
            <div className="flex animate-scroll whitespace-nowrap">
              {[...brands, ...brands].map((brand, index) => (
                <HoverCard.Root key={`${brand.id}-${index}`}>
                  <HoverCard.Trigger asChild>
                    <div className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-2 sm:mx-3 md:mx-4 p-2 sm:p-3 md:p-4 flex items-center justify-center transition-all duration-300 hover:scale-105">
                      <AspectRatio.Root ratio={1}>
                        <img 
                          src={brand.image}
                          alt={`${brand.name} logo`}
                          className="w-full h-full object-contain filter brightness-0 invert hover:brightness-0 hover:invert"
                        />
                      </AspectRatio.Root>
                    </div>
                  </HoverCard.Trigger>
                  <HoverCard.Portal>
                    <HoverCard.Content
                      className="bg-white/10 p-4 rounded-lg shadow-lg backdrop-blur-sm"
                      sideOffset={5}
                    >
                      <div className="text-white text-sm font-medium font-display">
                        {brand.name}
                      </div>
                      <HoverCard.Arrow className="fill-white/10" />
                    </HoverCard.Content>
                  </HoverCard.Portal>
                </HoverCard.Root>
              ))}
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-black/50 transition-colors duration-[160ms] hover:bg-black/60"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="flex-1 bg-white/20 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    </section>
  );
};

export default Testimonials;