import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'chat' | 'citation' | 'time' | 'integration';
}

const gradientMap: Record<NonNullable<CardProps['variant']>, string> = {
  chat: 'from-orange-950/30 via-transparent to-transparent',
  citation: 'from-emerald-950/30 via-transparent to-transparent',
  time: 'from-purple-950/30 via-transparent to-transparent',
  integration: 'from-blue-950/30 via-transparent to-transparent',
};

const glowMap: Record<NonNullable<CardProps['variant']>, string> = {
  chat: 'after:bg-orange-500/5',
  citation: 'after:bg-emerald-500/5',
  time: 'after:bg-purple-500/5',
  integration: 'after:bg-blue-500/5',
};

const Card: React.FC<CardProps> = ({ children, className = '', variant = 'chat' }) => {
  const baseClasses = [
    "relative",
    "bg-black/80",
    "rounded-3xl",
    "p-8",
    "backdrop-blur-lg",
    "ring-1",
    "ring-gray-800/40",
    "shadow-2xl",
    "hover:shadow-xl",
    "transition-all",
    "duration-300",
    "bg-gradient-to-br",
    "overflow-hidden",
    "after:absolute",
    "after:inset-0",
    "after:opacity-0",
    "hover:after:opacity-100",
    "after:transition-opacity",
    "after:duration-500",
    "before:absolute",
    "before:inset-0",
    "before:rounded-3xl",
    "before:bg-gradient-to-b",
    "before:from-white/20",
    "before:via-white/10",
    "before:to-transparent",
    "before:opacity-0",
    "hover:before:opacity-100",
    "before:transition-opacity",
    "before:duration-500",
    "before:blur-sm",
    "hover:ring-1",
    "hover:ring-gray-400/20",
    "hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]",
  ];

  const variantClasses = `${gradientMap[variant]} ${glowMap[variant]}`;
  const classes = `${baseClasses.join(' ')} ${variantClasses} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default React.memo(Card);
