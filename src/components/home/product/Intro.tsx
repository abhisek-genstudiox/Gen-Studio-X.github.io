import React from 'react';

const Intro: React.FC = () => (
  <div className="bg-black py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium
          bg-gray-800/40 text-gray-300 ring-1 ring-inset ring-gray-600/60 mb-10
          shadow-[0_0_15px_rgba(156,163,175,0.1)] backdrop-blur-sm
          transition-all duration-300 hover:shadow-[0_0_20px_rgba(156,163,175,0.2)]">
          Product
        </div>
        <h2 className="text-4xl font-medium tracking-tight text-white sm:text-6xl mb-8
          bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent
          leading-[1.1] font-display">
          Discover our range of innovative tools designed for your success
        </h2>
        <p className="text-lg leading-8 text-gray-400/90 max-w-xl mx-auto">
          Explore tailored solutions that meet the unique needs of your business, driving efficiency and productivity in every aspect.
        </p>
      </div>
    </div>
  </div>
);

export default React.memo(Intro);
