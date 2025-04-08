import React from 'react';

const HeroPic = () => {
  return (
    <div className="relative -mt-32 pt-24 overflow-hidden min-h-screen">
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
      
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-transparent z-10 pointer-events-none h-96" 
           style={{ maskImage: 'linear-gradient(to bottom, black 0%, transparent 100%)' }}
      />
      
      <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
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