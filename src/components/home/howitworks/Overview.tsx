import React, { useRef, useState, useEffect, useCallback, useMemo } from "react";

interface ProgressIconProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  active?: boolean;
}

const ProgressIcon: React.FC<ProgressIconProps> = React.memo(
  ({ icon, title, description, active }) => (
    <div className="flex items-start gap-6">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center relative z-10 ${
          active ? "bg-gray-900" : "bg-gray-800/80"
        } flex-shrink-0`}
      >
        {/* Background or overlay div – kept for structural layering */}
        <div className="absolute inset-0 rounded-xl"></div>
        {icon}
      </div>
      <div className="text-white/90 max-w-[520px]">
        <h3 className="font-semibold text-lg leading-tight">{title}</h3>
        <p className="text-sm text-gray-300 mt-2 leading-relaxed pr-8">{description}</p>
      </div>
    </div>
  )
);

const Overview: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState<number>(0);
  const ticking = useRef(false);

  // Define icon colors corresponding to each segment.
  const iconColors = useMemo(
    () => ['#1a1a1a', '#262626', '#333333', '#404040'],
    []
  );

  // Memoize the SVG icons so they don't get re-created on every render.
  const icons = useMemo(
    () => ({
      lightning: (
        <svg
          className="w-6 h-6 text-white relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      lightbulb: (
        <svg
          className="w-6 h-6 text-white relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      headphones: (
        <svg
          className="w-6 h-6 text-white relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
          />
        </svg>
      ),
      image: (
        <svg
          className="w-6 h-6 text-white relative z-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    }),
    []
  );

  const handleScroll = useCallback(() => {
    if (!ticking.current && componentRef.current) {
      window.requestAnimationFrame(() => {
        if (!componentRef.current) return;
        const rect = componentRef.current.getBoundingClientRect();
        // Use two-thirds of the viewport height as the threshold
        const viewportThreshold = window.innerHeight * (2 / 3);
        const componentHeight = rect.height;
        if (componentHeight > 0) {
          let calculatedProgress = (viewportThreshold - rect.top) / componentHeight;
          calculatedProgress = Math.min(Math.max(calculatedProgress, 0), 1);

          // Snap progress to the nearest icon anchor point.
          const numIcons = 4;
          const step = 1 / (numIcons - 1);
          const snappedProgress = Math.round(calculatedProgress / step) * step;
          setProgress(snappedProgress);
        }
        ticking.current = false;
      });
      ticking.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Calculate initial progress on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Determine which icon should be active based on the snapped progress.
  const activeStatuses = {
    generate: progress >= 0,       // Always active since progress is always ≥ 0
    ideate: progress >= 1 / 3,
    experience: progress >= 2 / 3,
    share: progress >= 1,
  };

  return (
    <div ref={componentRef} className="relative my-8">
      <div className="mt-8 flex gap-32 pl-32 pr-16">
        {/* Vertical progress bar with icons */}
        <div className="flex flex-col h-[600px] justify-between relative">
          {/* Updated Background progress bar */}
          <div
            className="absolute left-5 w-2 bg-gray-800/80 rounded-full"
            style={{ top: '24px', height: 'calc(100% - 48px)' }}
          >
            <div
              className="w-full rounded-full transition-all duration-200 ease-in-out absolute top-0"
              style={{
                height: `${progress * 100}%`,
                background: `linear-gradient(180deg, ${iconColors[0]} 0%, ${iconColors[1]} 33.33%, ${iconColors[2]} 66.67%, ${iconColors[3]} 100%)`,
              }}
            ></div>
          </div>

          {/* Render progress icons */}
          <div className="relative z-20">
            <ProgressIcon
              icon={icons.lightning}
              title="Smart Sourcing Agents"
              description="Built for Daily Creativity Our AI scouts fresh content ideas by fusing your brand's voice with real-time trends—so you never run dry"
              active={activeStatuses.generate}
            />
          </div>
          <div className="relative z-20">
            <ProgressIcon
              icon={icons.lightbulb}
              title="Stories That Speak"
              description="Scripts That Connect Great storytelling never goes out of style—our AI scriptwriters help you craft narratives that resonate and perform"
              active={activeStatuses.ideate}
            />
          </div>
          <div className="relative z-20">
            <ProgressIcon
              icon={icons.headphones}
              title="Creative Direction Meets Scalable Production"
              description="From concept to creation, we blend human instinct with AI tools to deliver seamless, high-quality content at scale"
              active={activeStatuses.experience}
            />
          </div>
          <div className="relative z-20">
            <ProgressIcon
              icon={icons.image}
              title="Make Every View Count"
              description="Track Every Outcome We turn content into measurable impact—whether through paid reach or organic growth, we tie it back to ROI"
              active={activeStatuses.share}
            />
          </div>
        </div>

        {/* Right-side content */}
        <div className="flex-1 pl-8 flex items-center justify-center h-[600px]">
          <div className="w-full flex justify-center items-center">
            <img
              src="/xcqLmgZHjUz0IlUpZsoIysKb4.svg"
              alt="Gen Studio X Process"
              className="h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
