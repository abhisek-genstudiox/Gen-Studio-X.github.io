import React from 'react';
import Marquee from 'react-fast-marquee';

interface Brand {
  id: number;
  name: string;
  image: string;
}

interface LogosProps {
  className?: string;
}

const brands: Brand[] = [
  { id: 1, name: 'OpenAI', image: '/brands/openAI.png' },
  { id: 2, name: 'Stability AI', image: '/brands/stabilityai.png' },
  { id: 3, name: 'MidJourney', image: '/brands/MidJourney.png' },
  { id: 4, name: 'Eleven Labs', image: '/brands/elevenLabs.png' },
  { id: 5, name: 'Perplexity', image: '/brands/perplexity.png' },
  { id: 6, name: 'Synthesia', image: '/brands/synthesia.png' },
  { id: 7, name: 'Runaway', image: '/brands/runaway.png' },
  { id: 8, name: 'Invideo', image: '/brands/invideo.png' },
  { id: 9, name: 'Hailuo', image: '/brands/Hailuo.png' },
  { id: 10, name: 'Kaling', image: '/brands/Kaling.png' },
];

const Logos: React.FC<LogosProps> = React.memo(({ className }) => {
  return (
    <div className={`relative w-full py-24 px-4 md:px-8 bg-gradient-to-b from-transparent to-black ${className || ''}`}>
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <p className="text-center text-5xl font-semibold text-white mb-10">
              Powered By Leading AI Technologies
            </p>

            <Marquee
              gradient={true}
              gradientColor="#000000"
              gradientWidth={200}
              speed={40}
              direction="left"
              className="overflow-hidden"
            >
              <div className="flex items-center space-x-24 pr-24">
                {brands.map((brand) => (
                  <div
                    key={brand.id}
                    className="flex items-center justify-center"
                  >
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className={`h-6 w-auto opacity-90 hover:opacity-100 transition-opacity ${
                        brand.name === 'MidJourney' ? '' : 'brightness-0 invert'
                      }`}
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Logos;
