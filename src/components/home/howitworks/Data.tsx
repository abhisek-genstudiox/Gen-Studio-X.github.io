import React from 'react';
import { stats } from './content';

interface StatProps {
  icon: string;
  title: string;
  description: string;
}

const Stat: React.FC<StatProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-end text-right">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{icon}</span>
        <span className="text-4xl font-semibold text-white">{title}</span>
      </div>
      <p className="text-sm text-zinc-500 max-w-[200px] leading-relaxed">{description}</p>
    </div>
  );
};

const Data: React.FC = () => {
  return (
    <section className="w-full bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Stat 
              key={index}
              icon={stat.icon}
              title={stat.title}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Data; 