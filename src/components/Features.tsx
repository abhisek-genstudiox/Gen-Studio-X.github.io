import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useElementOnScreen } from '@/utils/animations';

const Features: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  return (
    <section id="features" className="section-padding bg-black relative">
      <div className="container mx-auto px-4">
        <Card className="bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <div 
              ref={containerRef}
              className={cn(
                "flex flex-col md:flex-row gap-4 md:gap-8 items-start max-w-7xl mx-auto relative",
                "transition-all duration-700 ease-out",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
            >
              <div className="w-auto mb-4 md:mb-0">
                <Badge variant="secondary" className="bg-[#E6C88C]/90 text-black font-semibold">
                  ABOUT US
                </Badge>
              </div>
              
              <div className="flex-1">
                <p className="text-xl md:text-2xl lg:text-4xl leading-relaxed text-white font-display">
                  At Gen Studio X, we specialize in crafting <span className="text-[#E6C88C]">visually captivating</span>, high-performance content that elevates your brand using AI. We transform content creation with <span className="text-[#E6C88C]">cutting-edge AI</span>. Design, generate, and scale digital ads, avatars, videos, and more with ease.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Features;
