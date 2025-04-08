import React from 'react';

const HeroPic = () => {
  return (
    <div className="relative -mt-32 pt-24 overflow-hidden">
      {/* Grid pattern with enhanced transition */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"
        style={{ 
          opacity: 0.2,
          transform: 'perspective(1000px) rotateX(1deg)',
          transformOrigin: 'top'
        }}
      />

      {/* Enhanced ambient light effects */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-green-500/10 rounded-full blur-3xl -translate-x-1/2 animate-pulse" 
           style={{ animationDuration: '8s' }}
      />
      <div className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 animate-pulse"
           style={{ animationDuration: '10s' }}
      />
      
      {/* Top gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none h-48" />
      
      <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-30" />
          <img 
            src="/xcqLmgZHjUz0IlUpZsoIysKb4.svg" 
            alt="Hero illustration"
            className="w-full h-full object-contain relative z-20"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  );
};

export default HeroPic; 