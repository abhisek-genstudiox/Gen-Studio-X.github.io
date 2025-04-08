import React from 'react';
import Marquee from 'react-fast-marquee';

const Logos = () => {
  return (
    <div className="py-24 sm:py-32 bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <p className="text-center text-sm font-semibold text-gray-400 mb-10">
            Supported by 100+ customers worldwide
          </p>
          
          <Marquee
            gradient={true}
            gradientColor="#000000"
            gradientWidth={200}
            speed={40}
            direction="left"
            className="overflow-hidden"
          >
            <div className="flex items-center space-x-32">
              <div className="text-xl font-bold text-gray-300 opacity-70 hover:opacity-100 transition-opacity">
                Cloud
              </div>
              <div className="text-xl font-bold text-gray-300 opacity-70 hover:opacity-100 transition-opacity">
                Luminous
              </div>
              <div className="text-xl font-bold text-gray-300 opacity-70 hover:opacity-100 transition-opacity">
                Chain
              </div>
              <div className="text-xl font-bold text-gray-300 opacity-70 hover:opacity-100 transition-opacity">
                Minty
              </div>
              <div className="text-xl font-bold text-gray-300 opacity-70 hover:opacity-100 transition-opacity">
                Trace
              </div>
              <div className="text-xl font-bold text-gray-300 opacity-70 hover:opacity-100 transition-opacity">
                Product
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Logos; 