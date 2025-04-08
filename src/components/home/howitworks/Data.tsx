import React from 'react';

interface StatProps {
  value: string;
  description: string;
}

const Stat: React.FC<StatProps> = ({ value, description }) => {
  return (
    <div className="flex flex-col items-end text-right">
      <span className="text-4xl font-semibold text-white mb-2">{value}</span>
      <p className="text-sm text-zinc-500 max-w-[200px] leading-relaxed">{description}</p>
    </div>
  );
};

const Data: React.FC = () => {
  return (
    <section className="w-full bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex justify-between items-start">
          <Stat 
            value="73%" 
            description="Our users rave about the efficiency our tools brings to their workflow."
          />
          <Stat 
            value="37%" 
            description="AI-powered automation has helped businesses reduce time."
          />
          <Stat 
            value="9x" 
            description="Faster, informed decision-making with our data analysis tools."
          />
        </div>
      </div>
    </section>
  );
};

export default Data; 