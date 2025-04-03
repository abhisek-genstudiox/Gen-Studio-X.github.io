import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils';
import { useElementOnScreen } from '@/utils/animations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { throttle } from 'lodash';
import { motion } from 'framer-motion';

interface StepDescription {
  heading: string;
  paragraph: string;
  image: string;
}

interface Step {
  number: string;
  title: string;
  description: StepDescription;
  delay: number;
}

const steps: Step[] = [
  {
    number: "Stage #1",
    title: "Get Set Start",
    description: {
      heading: "Intelligent sourcing agents for your daily needs",
      paragraph: "The AI Revolution is here—but most brands struggle to bring it all together. A big hurdle is sourcing amazing content ideas on a regular basis. With the help of our custom AI sourcing agent, we blend your brand values with trending signals.",
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

const TimelineDot: React.FC<{ isActive: boolean }> = React.memo(({ isActive }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="relative"
  >
    <div className={cn(
      "w-4 h-4 rounded-full transition-all duration-300",
      isActive 
        ? "bg-[#E6C88C] shadow-[0_0_20px_rgba(230,200,140,0.5)]" 
        : "bg-white/20"
    )}>
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full bg-[#E6C88C]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </div>
  </motion.div>
));

const StageCard: React.FC<{ step: Step; index: number; scrollProgress: number }> = React.memo(({ step, index, scrollProgress }) => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card
        ref={containerRef}
        className={cn(
          "grid grid-cols-1 md:grid-cols-[0.5fr,auto,1fr] items-start md:items-center gap-6 transition-all duration-700 ease-out text-white bg-transparent border-none",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          `delay-${step.delay}`
        )}
      >
        <CardHeader className="text-left md:text-right p-0 space-y-1">
          <motion.div 
            className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-[#E6C88C]"
            whileHover={{ scale: 1.05 }}
          >
            {step.number}
          </motion.div>
          <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-display font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
            {step.title}
          </CardTitle>
        </CardHeader>

        <div className="justify-self-start md:justify-self-center">
          <TimelineDot isActive={scrollProgress * 100 >= index * 25} />
        </div>
        
        <CardContent className="p-0 space-y-4">
          <motion.h4 
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold bg-gradient-to-r from-[#E6C88C] to-white bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            {step.description.heading}
          </motion.h4>
          <p className="text-base text-white/70 font-display">{step.description.paragraph}</p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={step.description.image} 
              alt={step.title} 
              className="w-full max-w-[600px] mr-auto rounded-lg shadow-lg shadow-[#E6C88C]/20"
              loading="lazy"
              width={600}
              height={400}
            />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
});

const TimelineLine: React.FC<{ progress: number }> = React.memo(({ progress }) => (
  <div className="hidden md:block absolute left-[34%] top-0 bottom-[120px] w-[2px]">
    {/* Background line */}
    <div className="absolute inset-0 bg-white/10 rounded-full"></div>
    
    {/* Progress bar container with padding */}
    <div className="absolute inset-0 overflow-hidden">
      {/* Progress bar */}
      <motion.div 
        className="absolute inset-0 bg-[#E6C88C] rounded-full"
        style={{
          height: `${Math.min(progress * 100, 100)}%`,
          boxShadow: '0 0 20px rgba(230, 200, 140, 0.3)',
          transform: 'translateX(-50%)',
          left: '50%',
          top: '0',
          bottom: 'auto'
        }}
        role="progressbar"
        aria-valuenow={Math.round(Math.min(progress * 100, 100))}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"
          animate={{
            y: ['0%', '100%', '0%'],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>
    </div>
  </div>
));

const Stage: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(
    throttle(() => {
      const element = document.getElementById('stage');
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        
        let progress = (windowHeight/2 - elementTop) / (rect.height - windowHeight/2);
        progress = Math.min(Math.max(progress, 0), 1);
        
        setScrollProgress(progress);
      }
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const memoizedSteps = useMemo(() => 
    steps.map((step, index) => (
      <StageCard
        key={step.number}
        step={step}
        index={index}
        scrollProgress={scrollProgress}
      />
    )),
    [scrollProgress]
  );

  return (
    <section 
      id="stage" 
      className="section-padding bg-black px-4 sm:px-6 lg:px-8"
      role="region"
      aria-label="Our Process"
    >
      <div className="container mx-auto">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={cn(
            "max-w-2xl mx-auto text-center mb-8 sm:mb-16 transition-all duration-700 ease-out text-white",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Our Process
          </h2>
          <p className="text-lg text-white/70 font-display">
            A seamless journey from ideation to execution
          </p>
        </motion.div>
        
        <div className="relative">
          <TimelineLine progress={scrollProgress} />
          
          <div className="space-y-16 sm:space-y-24 md:space-y-36 relative">
            {memoizedSteps}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="max-w-full mx-auto mt-16 sm:mt-24 bg-transparent border-none">
                <CardContent className="p-0">
                  <p className="text-xl sm:text-2xl md:text-3xl text-white/70 px-0 text-left font-display">
                    Skip the complexity—focus on creating. Let Gen Studio X handle the ideation and AI integrations, so you can focus on the more important things.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Stage);