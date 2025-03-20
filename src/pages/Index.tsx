
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stage from '@/components/Stage';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import AnimatedGradient from '@/components/AnimatedGradient';

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
    <div className="min-h-screen relative">
      <AnimatedGradient />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stage />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
