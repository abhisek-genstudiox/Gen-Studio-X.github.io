import React from 'react';

const Intro: React.FC = () => (
  <div className="bg-black py-12 sm:py-20">
    <div className="mx-auto max-w-7xl px-8 lg:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-medium tracking-tight sm:text-6xl mb-8 
                       bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
                       leading-[1.1] font-display">
          AI Creative Suite
        </h2>
        <p className="text-lg leading-8 text-gray-400/90 max-w-xl mx-auto">
          All the AI you need for content creation, in one intuitive platform
        </p>
      </div>
    </div>
  </div>
);

export default React.memo(Intro);
