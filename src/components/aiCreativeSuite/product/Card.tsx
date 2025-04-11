import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'chat' | 'citation' | 'time' | 'integration' | 'security' | 'analytics';
}

const gradientMap = {
  chat: 'from-orange-950/30 via-transparent to-transparent',
  citation: 'from-emerald-950/30 via-transparent to-transparent',
  time: 'from-purple-950/30 via-transparent to-transparent',
  integration: 'from-blue-950/30 via-transparent to-transparent',
  security: 'from-indigo-950/30 via-transparent to-transparent',
  analytics: 'from-rose-950/30 via-transparent to-transparent',
};

const glowMap = {
  chat: 'after:bg-orange-500/5',
  citation: 'after:bg-emerald-500/5',
  time: 'after:bg-purple-500/5',
  integration: 'after:bg-blue-500/5',
  security: 'after:bg-indigo-500/5',
  analytics: 'after:bg-rose-500/5',
};

const Card: React.FC<CardProps> = ({ children, className = '', variant = 'chat' }) => {
  const classes = [
    "relative bg-black/80 rounded-3xl p-8 backdrop-blur-lg border border-white/20",
    "shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]",
    "transition-all duration-300 bg-gradient-to-br overflow-hidden",
    "after:absolute after:inset-0 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500",
    "before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-white/20 before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:blur-sm",
    "hover:border-white/30",
    gradientMap[variant],
    glowMap[variant],
    className
  ].join(' ');

  return <div className={classes}>{children}</div>;
};

export default React.memo(Card);
