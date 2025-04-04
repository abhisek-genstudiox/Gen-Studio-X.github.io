import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stage from '@/components/Stage';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';

const useSmoothScroll = () => {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!anchor) return;

      const targetId = anchor.getAttribute('href')?.substring(1);
      const targetElement = targetId && document.getElementById(targetId);
      if (!targetElement) return;

      e.preventDefault();
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
};

const Index: React.FC = () => {
  useSmoothScroll();

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#E6C88C" media="(prefers-color-scheme: light)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>
      <motion.div 
        className="min-h-screen relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <style>
          {`
            @supports (-webkit-touch-callout: none) {
              body { background-color: #000000; }
              .safari-top-bar, .safari-bottom-bar {
                position: fixed;
                left: 0;
                right: 0;
                background-color: #000000;
                z-index: 9999;
              }
              .safari-top-bar { top: 0; height: env(safe-area-inset-top); }
              .safari-bottom-bar { bottom: 0; height: env(safe-area-inset-bottom); }
            }
          `}
        </style>
        <div className="safari-top-bar" />
        <div className="safari-bottom-bar" />
        <AnimatedGradient />
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Stage />
          <Testimonials />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
