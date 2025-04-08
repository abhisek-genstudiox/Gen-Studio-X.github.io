import React, { useEffect, useRef } from 'react';

interface ProgressBarProps {
  color?: string;
  height?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  color = '#27272A',
  height = '8rem'
}) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('progress-active');
          }
        });
      },
      {
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={barRef}
      className="absolute left-5 top-full w-0.5 transition-all duration-1000"
      style={{ 
        height,
      }}
    >
      <div 
        className="h-full w-full opacity-0 progress-line"
        style={{
          background: `linear-gradient(180deg, ${color} 0%, rgba(39, 39, 42, 0.3) 100%)`,
          boxShadow: '0 0 10px rgba(39, 39, 42, 0.5)',
          transition: 'opacity 1s ease-out, box-shadow 1s ease-out'
        }}
      />
    </div>
  );
};

export default ProgressBar;

// Add this to your global CSS file:
/*
.progress-active .progress-line {
  opacity: 1 !important;
  box-shadow: 0 0 20px rgba(39, 39, 42, 0.8) !important;
}
*/ 