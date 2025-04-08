import React from 'react';
import { features } from './content';
import FeatureCard from './FeatureCard';
import ProgressBar from './ProgressBar';
import Data from './Data';

const Overview: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-black">
      <div className="flex justify-between w-full items-start gap-32 px-8 py-20">
        {/* Features Section */}
        <div className="w-[45%] space-y-32">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
              {index < features.length - 1 && (
                <ProgressBar height="8rem" color="#27272A" />
              )}
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="w-[55%]">
          <img
            src="/xcqLmgZHjUz0IlUpZsoIysKb4.svg"
            alt="AI Dashboard Preview"
            className="w-full rounded-xl border border-zinc-800/50"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full border-t border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="flex justify-between items-start gap-8">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-semibold text-white">73%</span>
              <p className="text-sm text-zinc-500 max-w-[180px]">Our users rave about the efficiency our tools brings to their workflow.</p>
            </div>
            <div className="h-8 w-px bg-zinc-900/50" />
            <div className="flex items-center gap-4">
              <span className="text-4xl font-semibold text-white">37%</span>
              <p className="text-sm text-zinc-500 max-w-[180px]">AI-powered automation has helped businesses reduce time.</p>
            </div>
            <div className="h-8 w-px bg-zinc-900/50" />
            <div className="flex items-center gap-4">
              <span className="text-4xl font-semibold text-white">9x</span>
              <p className="text-sm text-zinc-500 max-w-[180px]">Faster, informed decision-making with our data analysis tools.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview; 