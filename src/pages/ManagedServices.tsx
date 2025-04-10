import React from 'react';
import Navbar from '../components/Navbar';
import Enterprise from '../components/home/Enterprise';
import Features from '../components/home/Features';
import Buy from '../components/home/Buy';
import Footer from '../components/Footer';

const ManagedServices: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Enterprise />
        <Features />
        <Buy />
        <Footer />
      </div>
    </div>
  );
};

export default ManagedServices; 