import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="flex items-start gap-6">
    <div className="flex-shrink-0 w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-lg border border-zinc-800/50">
      {icon}
    </div>
    <div className="space-y-2.5">
      <h3 className="text-base font-medium text-white/90">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-500 max-w-md">{description}</p>
    </div>
  </div>
);

export default FeatureCard;