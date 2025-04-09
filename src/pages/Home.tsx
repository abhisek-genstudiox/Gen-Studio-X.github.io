import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import HeroPic from '../components/home/HeroPic';
import Logos from '../components/home/Logos';
import Product from '../components/home/Product';
import HowItWorks from '../components/home/HowItWorks';
import Enterprise from '../components/home/Enterprise';
import Features from '../components/home/Features';
import Pricing from '../components/home/Pricing';
import FAQ from '../components/home/FAQ';
import Buy from '../components/home/Buy';
import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HeroPic />
        <Logos />
        <Product />
        <HowItWorks />
        <Enterprise />
        <Features />
        <Pricing />
        <FAQ />
        <Buy />
      </div>
    </div>
  );
};

export default Home; 