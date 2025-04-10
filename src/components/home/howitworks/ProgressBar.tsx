import React, { useEffect, useRef } from 'react';

const ProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isVisible = entry.isIntersecting;
        if (progressRef.current) {
          progressRef.current.style.height = isVisible ? '100%' : '0%';
          progressRef.current.style.opacity = isVisible ? '1' : '0';
        }
      });
    }, {
      threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
      rootMargin: '-50% 0px -50% 0px'
    });

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      <div ref={barRef} className="absolute left-5 w-0.5" style={{ top: 0, height: '100%' }}>
        <div
          ref={progressRef}
          className="w-full transition-all duration-1000 ease-in-out relative"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(39, 39, 42, 0.3) 100%)',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)',
            height: '0%',
            opacity: 0,
          }}
        >
          <div
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
            style={{
              background: 'rgba(255, 255, 255, 0.9)',
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;