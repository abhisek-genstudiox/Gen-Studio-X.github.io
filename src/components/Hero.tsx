import React, { useEffect, useRef, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '@/utils/animations';
import { cn } from '@/lib/utils';

const useTypewriter = (
  texts: string[],
  typingSpeed = 80,
  deletingSpeed = 30,
  pauseTime = 1500
) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        } else {
          setDisplayText(displayText.slice(0, -1));
        }
      } else {
        if (displayText.length === currentText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        } else {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
};

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });
  const texts = useMemo(
    () => ['stunning visuals', 'powerful content', 'creative designs', 'amazing videos'],
    []
  );
  const typingText = useTypewriter(texts);

  useEffect(() => {
    videoRef.current?.play().catch((error) => console.error("Video autoplay failed:", error));
  }, []);

  // Generate particle positions only once
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      })),
    []
  );

  return (
    <section className="relative h-[100svh] bg-black text-white overflow-hidden">
      {/* Video Background */}
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
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#E6C88C] rounded-full"
            initial={{ x: p.x, y: p.y }}
            animate={{
              y: [p.y, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'linear' }}
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
        {/* Top Section */}
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

        {/* Middle Section */}
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

        {/* Bottom Section */}
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
