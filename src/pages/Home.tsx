import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import HeroPic from '../components/home/HeroPic';
import Logos from '../components/home/Logos';
import Product from '../components/home/Product';
import HowItWorks from '../components/home/HowItWorks';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <HeroPic />
      <Logos />
      <Product />
      <HowItWorks />
    </div>
  );
};

export default Home;
