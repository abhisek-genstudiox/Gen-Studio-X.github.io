import React, { memo } from 'react';
import Marquee from 'react-fast-marquee';

interface Brand {
  id: number;
  name: string;
  image: string;
}

interface LogosProps {
  className?: string;
}

// Constant brand data (renamed to emphasize immutability)
const BRANDS: Brand[] = [
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

// Helper function for generating image class names
const getBrandImageClasses = (brandName: string): string =>
  `h-6 w-auto opacity-90 hover:opacity-100 transition-opacity ${
    brandName === 'MidJourney' ? '' : 'brightness-0 invert'
  }`;

const Logos: React.FC<LogosProps> = memo(({ className = '' }) => (
  <div className={`pt-8 pb-16 bg-black ${className}`}>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        <p className="text-center text-5xl font-semibold text-white mb-10">
          Powered By Leading AI Technologies
        </p>
        <Marquee
          gradient
          gradientColor="#000000"
          gradientWidth={200}
          speed={40}
          direction="left"
          className="overflow-hidden"
        >
          <div className="flex items-center space-x-24 pr-24">
            {BRANDS.map((brand) => (
              <div key={brand.id} className="flex items-center justify-center">
                <img
                  src={brand.image}
                  alt={brand.name}
                  className={getBrandImageClasses(brand.name)}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  </div>
));

export default Logos;
