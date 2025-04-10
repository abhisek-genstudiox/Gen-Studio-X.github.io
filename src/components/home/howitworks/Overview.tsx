import React from 'react';
import { features } from './content';
import FeatureCard from './FeatureCard';
import ProgressBar from './ProgressBar';

const Overview: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-black">
      <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-8 lg:gap-32 px-4 lg:px-8 py-12 lg:py-20">
        {/* Features Section */}
        <div className="w-full lg:w-[45%] relative">
          <ProgressBar />
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center relative py-16"
            >
              <div className="relative z-10">
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="w-full lg:w-[55%] sticky top-0 h-screen flex items-center">
          <img
            src="/xcqLmgZHjUz0IlUpZsoIysKb4.svg"
            alt="AI Dashboard Preview"
            className="w-full rounded-xl border border-zinc-800/50"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview; 