import React from 'react';
import FeatureCard from './FeatureCard';
import ProgressBar from './ProgressBar';
import { features } from './content';

const Overview: React.FC = () => (
  <div className="flex flex-col w-full bg-black">
    <div className="flex flex-col lg:flex-row justify-between w-full items-start gap-8 lg:gap-32 px-4 lg:px-8 py-12 lg:py-20">
      <div className="w-full lg:w-[45%] relative">
        <ProgressBar />
        {features.map(({ icon, title, description }) => (
          <div key={title} className="flex items-center relative py-16">
            <div className="relative z-10">
              <FeatureCard icon={icon} title={title} description={description} />
            </div>
          </div>
        ))}
      </div>
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

export default Overview;