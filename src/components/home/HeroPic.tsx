import React from 'react';

const HeroPic = () => {
  return (
    <div className="relative -mt-32 pt-32 overflow-hidden">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,#000_70%,transparent_110%)]"
        style={{ opacity: 0.2 }}
      />

      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-transparent z-10 pointer-events-none h-64" />
      
      <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
          <img 
            src="/xcqLmgZHjUz0IlUpZsoIysKb4.svg" 
            alt="Hero illustration"
            className="w-full h-full object-contain relative z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPic; 