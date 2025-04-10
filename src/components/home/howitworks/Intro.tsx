import React from 'react';

const Intro: React.FC = () => (
  <section className="relative w-full py-24 px-4 md:px-8 bg-black/95">
    <div className="max-w-7xl mx-auto text-center">
      <button className="px-4 py-1.5 mb-12 rounded-full bg-gray-800/80 text-gray-300 text-sm hover:bg-gray-700/80 transition-colors">
        Our Process
      </button>
      <h2 className="text-4xl md:text-5xl font-semibold text-white/90 leading-tight">
        A Seamless Journey From Ideation to Execution
      </h2>
    </div>
  </section>
);

export default React.memo(Intro);