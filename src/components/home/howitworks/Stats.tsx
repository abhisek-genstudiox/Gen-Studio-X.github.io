import React from 'react';
import { features } from './content';
import StatCard from './StatCard';

const Stats: React.FC = () => (
  <section className="w-full bg-black border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }) => (
          <StatCard key={title} icon={icon} title={title} description={description} />
        ))}
      </div>
    </div>
  </section>
);

export default Stats;