import React from 'react';
import Card from './Card';
import { FEATURES } from './FEATURES';

const CardGrid: React.FC = () => (
  <div className="bg-black py-16 sm:py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-8 lg:px-12">
      {FEATURES.map((feature, index) => (
        <Card key={index} variant={feature.variant}>
          <div className="space-y-4">
            <div className="space-y-4">
              {feature.icon}
              <div>
                <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
            {feature.demo}
          </div>
        </Card>
      ))}
    </div>
  </div>
);

export default React.memo(CardGrid);
