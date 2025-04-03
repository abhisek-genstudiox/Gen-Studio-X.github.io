import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stage from '@/components/Stage';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const Index = () => {
  // Smooth scroll implementation for navigation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      // Check if the anchor has a hash and is an internal link
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) return;
      
      e.preventDefault();
      
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);
  
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
              body {
                background-color: #000000;
              }
              .safari-top-bar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: env(safe-area-inset-top);
                background-color: #000000;
                z-index: 9999;
              }
              .safari-bottom-bar {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                height: env(safe-area-inset-bottom);
                background-color: #000000;
                z-index: 9999;
              }
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
