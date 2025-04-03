import React, { useEffect, useRef, useState } from 'react';
import { useElementOnScreen } from '@/utils/animations';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [typingText, setTypingText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef<HTMLSpanElement>(null);
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
  
  const texts = [
    'stunning visuals',
    'powerful content',
    'creative designs',
    'amazing videos'
  ];
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentText = texts[currentTextIndex];
    
    // Set typing speed based on whether deleting or typing
    const typingSpeed = isDeleting ? 50 : 100;
    
    const type = () => {
      // If deleting, remove a character
      if (isDeleting) {
        setTypingText(prev => prev.substring(0, prev.length - 1));
        
        // When empty, start typing the next word
        if (typingText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        // If typing, add a character
        setTypingText(currentText.substring(0, typingText.length + 1));
        
        // When completed, start deleting after a pause
        if (typingText === currentText) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, 1500);
          return;
        }
      }
      
      // Schedule the next update
      timeout = setTimeout(type, typingSpeed);
    };
    
    timeout = setTimeout(type, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [typingText, currentTextIndex, isDeleting, texts]);
  
  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);
  
  return (
    <section className="relative h-[100svh] bg-black text-white overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
      >
        <source src="background_hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text remains readable */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />

      <div 
        ref={containerRef}
        className={cn(
          "container mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between relative z-10 py-6 sm:py-8 md:py-10",
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        {/* Top section with Gen Studio X */}
        <div className="pt-8 sm:pt-12 md:pt-16 lg:pt-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight font-display" style={{ color: '#E6C88C' }}>
            Gen Studio X
          </h1>
        </div>

        {/* Middle section with AI text */}
        <div className="flex flex-col items-end text-right my-auto">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-[90%] sm:max-w-[80%] md:max-w-[70%] space-y-1 font-display">
            <span className="block">AI generated content automation</span>
            <span className="block">customized to your needs.</span>
          </p>
        </div>

        {/* Bottom section */}
        <div className="pb-4 sm:pb-6 md:pb-8">
          <p className="text-xs sm:text-sm md:text-base text-[#E6C88C] font-display">contact@genstudiox.ai</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
