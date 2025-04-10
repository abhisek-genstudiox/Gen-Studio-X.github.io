import React from 'react';

interface StatProps {
  icon: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-end text-right">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-2xl">{icon}</span>
      <span className="text-4xl font-semibold text-white">{title}</span>
    </div>
    <p className="text-sm text-zinc-500 max-w-[200px] leading-relaxed">{description}</p>
  </div>
);

export default StatCard;