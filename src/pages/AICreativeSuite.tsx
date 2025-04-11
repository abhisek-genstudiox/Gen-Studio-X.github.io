import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Product from '../components/aiCreativeSuite/Product';

const AICreativeSuite: React.FC = () => (
  <div className="min-h-screen bg-black text-white relative">
    <div className="fixed inset-0 bg-black" />
    <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
    <div className="relative z-10">
      <Navbar />
      <Product />
      <Footer />
    </div>
  </div>
);

export default AICreativeSuite;
