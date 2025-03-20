import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useElementOnScreen } from '@/utils/animations';

const steps = [
  {
    number: "Stage #1",
    title: "Get Set Start",
    description: {
      heading: "Intelligent sourcing agents for your daily needs",
      paragraph: "The AI Revolution is here—but most brands struggle to bring it all together. A big hurdle is sourcing amazing content ideas on a regular basis. With the  help of our custom AI sourcing agent, we blend your brand values with trending signals.",
      image: "/stage1.png"
    },
    delay: 100
  },
  {
    number: "Stage #2",
    title: "Heart Felt Messaging",
    description: {
      heading: "There's no replacement of a good story. None.",
      paragraph: "Connect with your audience using engaging stories that resonate with their needs. Storytelling is an art that is deeply woven into our scriptwriting agents. We put this intelligence on a platform where you can ideate and iterate faster.",
      image: "/stage2.png"
    },
    delay: 300
  },
  {
    number: "Stage #3",
    title: "Direction and Production",
    description: {
      heading: "Creative direction and generative production",
      paragraph: "We do the heavy lifting with expert human and AI direction and integrate with the majority of industry leading audio and video production tools, both paid and open-source.",
      image: "/stage3.png"
    },
    delay: 500
  },
  {
    number: "Stage #4",
    title: "Attribute and ROI",
    description: {
      heading: "Helping you with the advertising math",
      paragraph: "Your content is doing good, only if we can measure it. Either you run digital ads on it, or it has incremental organic reach - it should all be measurable. And we help you do that with the ones we produce.",
      image: "/stage4.png"
    },
    delay: 700
  }
];

const Stage: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stage');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        
        // Updated progress calculation to reach center of screen
        let progress = (windowHeight/2 - elementTop) / (rect.height - windowHeight/2);
        progress = Math.min(Math.max(progress, 0), 1);
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="stage" className="section-padding bg-black px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div 
          ref={containerRef}
          className={cn(
            "max-w-2xl mx-auto text-center mb-8 sm:mb-16 transition-all duration-700 ease-out text-white",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          </h2>
          <p className="text-lg text-white/70">
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-[34%] top-0 bottom-[120px] w-1">
            {/* Background line */}
            <div className="absolute inset-0 bg-white/20"></div>
            {/* Glowing line overlay */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-[#E6C88C]/80 to-[#E6C88C]/20 transition-all duration-300"
              style={{
                height: `${scrollProgress * 100}%`,
                boxShadow: '0 0 15px rgba(230, 200, 140, 0.7), 0 0 30px rgba(230, 200, 140, 0.5), 0 0 45px rgba(230, 200, 140, 0.3)',
                transform: 'translateX(-50%)',
                left: '50%'
              }}
            ></div>
          </div>
          
          <div className="space-y-16 sm:space-y-24 md:space-y-36 relative">
            {steps.map((step, index) => {
              const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
              
              return (
                <div 
                  key={index}
                  ref={containerRef}
                  className={cn(
                    "grid grid-cols-1 md:grid-cols-[0.5fr,auto,1fr] items-start md:items-center gap-4 sm:gap-6 transition-all duration-700 ease-out text-white",
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                    `delay-[${step.delay}ms]`
                  )}
                >
                  <div className="text-left md:text-right">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-1 sm:mb-2 block bg-gradient-to-r from-[#E6C88C] to-[#E6C88C] bg-clip-text text-transparent">
                      {step.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                      {step.title}
                    </h3>
                  </div>

                  <div className="justify-self-start md:justify-self-center">
                    <div 
                      className={cn(
                        "w-8 h-8 bg-black rounded-full border-2 border-[#E6C88C] flex items-center justify-center relative z-10 transition-all duration-300",
                        scrollProgress * 100 >= index * 25 ? "bg-[#E6C88C] shadow-[0_0_15px_rgba(230,200,140,0.4)]" : ""
                      )}
                    >
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-3 sm:mb-4 bg-gradient-to-r from-[#E6C88C] to-white bg-clip-text text-transparent">
                      {step.description.heading}
                    </h4>
                    <p className="text-sm sm:text-base text-white/70 mb-4">{step.description.paragraph}</p>
                    <img 
                      src={step.description.image} 
                      alt={step.title} 
                      className="w-full max-w-[600px] mr-auto rounded-lg"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}

            <div className="max-w-full mx-auto mt-16 sm:mt-24">
              <p className="text-xl sm:text-2xl md:text-3xl text-white/70 px-0 text-left">
                Skip the complexity—focus on creating. Let Gen Studio X handle the ideation and AI integrations, so you can focus on the more important things.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stage;