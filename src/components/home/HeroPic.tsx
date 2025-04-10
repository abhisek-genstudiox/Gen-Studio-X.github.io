import React, { useEffect, useRef, useState } from 'react';

const HeroPic: React.FC = React.memo(() => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Using IntersectionObserver for better performance over scroll event listeners.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: '0px 0px -20% 0px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className="relative -mt-32 pt-24 overflow-hidden">
      <GridPatternOverlay />
      <AmbientLightEffects />
      <TopGradientOverlay />
      <HeroVideoContent videoRef={videoRef} />
    </div>
  );
});

interface HeroVideoContentProps {
  videoRef: React.RefObject<HTMLDivElement>;
}

const HeroVideoContent: React.FC<HeroVideoContentProps> = ({ videoRef }) => {
  // Noise overlay image URL constant for clarity.
  const noiseImageUrl =
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuNCIvPjwvc3ZnPg==";

  return (
    <div className="relative max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-16">
      <div
        ref={videoRef}
        className="relative aspect-[16/9] rounded-2xl overflow-hidden hero-video-container"
        style={{
          width: '100%',
          height: 'auto',
          margin: 'auto',
          borderRadius: '8px'
        }}
      >
        <div className="absolute inset-0" style={{ transform: 'none' }}>
          {/* Boundary Blend Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-30 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 z-30 mix-blend-overlay" />

          {/* Subtle Noise Overlay */}
          <div
            className="absolute inset-0 opacity-20 mix-blend-overlay z-30"
            style={{
              backgroundImage: `url(${noiseImageUrl})`,
              backgroundRepeat: 'repeat'
            }}
          />

          <video
            src="/background_hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover relative z-20"
            style={{ filter: 'brightness(1.1) contrast(1.1)' }}
          />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent mix-blend-multiply"
        aria-hidden="true"
      />
    </div>
  );
};

const GridPatternOverlay: React.FC = () => (
  <div
    className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]"
    style={{ opacity: 0.2 }}
    aria-hidden="true"
  />
);

const AmbientLightEffects: React.FC = () => (
  <>
    <div
      className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-green-500/10 rounded-full blur-3xl -translate-x-1/2"
      style={{ filter: 'blur(40px)', opacity: 0.4 }}
      aria-hidden="true"
    />
    <div
      className="absolute top-0 right-1/4 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl translate-x-1/2"
      style={{ filter: 'blur(40px)', opacity: 0.4 }}
      aria-hidden="true"
    />
  </>
);

const TopGradientOverlay: React.FC = () => (
  <div
    className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 pointer-events-none h-64"
    aria-hidden="true"
  />
);

export default HeroPic;