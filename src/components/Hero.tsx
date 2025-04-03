import React, { useEffect, useRef, useState } from 'react';
import { useElementOnScreen } from '@/utils/animations';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
    const typingSpeed = isDeleting ? 30 : 80;
    
    const type = () => {
      if (isDeleting) {
        setTypingText(prev => prev.substring(0, prev.length - 1));
        if (typingText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }
      } else {
        setTypingText(currentText.substring(0, typingText.length + 1));
        if (typingText === currentText) {
          timeout = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      }
      timeout = setTimeout(type, typingSpeed);
    };
    
    timeout = setTimeout(type, typingSpeed);
    return () => clearTimeout(timeout);
  }, [typingText, currentTextIndex, isDeleting, texts]);
  
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, []);
  
  return (
    <section className="relative h-[100svh] bg-black text-white overflow-hidden">
      {/* Enhanced Video Background with Overlay */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
        >
          <source src="background_hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#E6C88C] rounded-full"
            initial={{ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div 
        ref={containerRef}
        className={cn(
          "container mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between relative z-10 py-6 sm:py-8 md:py-10",
          "transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        {/* Enhanced Top Section */}
        <motion.div 
          className="pt-8 sm:pt-12 md:pt-16 lg:pt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight font-display bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white">
            Gen Studio X
          </h1>
        </motion.div>

        {/* Enhanced Middle Section */}
        <motion.div 
          className="flex flex-col items-end text-right my-auto"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl max-w-[90%] sm:max-w-[80%] md:max-w-[70%] space-y-2 font-display">
            <span className="block text-white/90">AI generated content automation</span>
            <span className="block text-[#E6C88C] font-medium">{typingText}</span>
            <span className="block text-white/90">customized to your needs.</span>
          </p>
        </motion.div>

        {/* Enhanced Bottom Section */}
        <motion.div 
          className="pb-4 sm:pb-6 md:pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="mailto:contact@genstudiox.ai" 
            className="text-sm sm:text-base text-[#E6C88C] font-display hover:text-white transition-colors duration-300"
          >
            contact@genstudiox.ai
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
