import React from 'react';
import Navbar from '../components/Navbar';
import Product from '../components/home/Product';
import Footer from '../components/Footer';

const AICreativeSuite: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Product />
        <Footer />
      </div>
    </div>
  );
};

export default AICreativeSuite; 