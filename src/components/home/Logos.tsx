import React from 'react';
import Marquee from 'react-fast-marquee';

const logos = ['Cloud', 'Luminous', 'Chain', 'Minty', 'Trace', 'Product'];

const Logos: React.FC = React.memo(() => {
  return (
    <div className="pt-8 bg-black">
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
              {logos.map((logo) => (
                <div
                  key={logo}
                  className="text-xl font-bold text-gray-300 opacity-70 hover:opacity-100 transition-opacity"
                >
                  {logo}
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
});

export default Logos;
