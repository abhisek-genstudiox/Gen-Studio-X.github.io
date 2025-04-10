import React from 'react';

const Buy: React.FC = () => {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-32 top-0 pointer-events-none" />
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <div className="space-y-8 max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 leading-tight">
            Ready to Transform Your Workflows?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Schedule your consultation today and let us supercharge your operations.
          </p>
          <div className="pt-4">
            <button className="group relative inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:bg-opacity-90 hover:scale-105 hover:shadow-xl hover:shadow-white/20">
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Buy); 