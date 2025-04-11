import React, { useRef, useState, useEffect, useCallback, ReactNode, memo } from "react";

// --------------------
// Static Data
// --------------------
const ICON_COLORS = ["#1a1a1a", "#262626", "#333333", "#404040"];

const SVG_ICONS = {
  sourcing: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white relative z-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <circle 
        cx="11" 
        cy="11" 
        r="8" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <line 
        x1="21" 
        y1="21" 
        x2="16.65" 
        y2="16.65" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  ),
  book: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white relative z-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M4 19.5A2.5 2.5 0 016.5 17H20"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4.5A2.5 2.5 0 016.5 7H20v13H6.5A2.5 2.5 0 014 17.5V4.5z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  clapperboard: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white relative z-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 3h14l-2 4H7L5 3z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 7v10a2 2 0 002 2h10a2 2 0 002-2V7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  chart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 text-white relative z-10"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <rect
        x="4"
        y="10"
        width="4"
        height="10"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="10"
        y="6"
        width="4"
        height="14"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="16"
        y="2"
        width="4"
        height="18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

interface ProgressItem {
  key: string;
  icon: ReactNode;
  title: string;
  description: string;
  threshold: number;
}

const progressItems: ProgressItem[] = [
  {
    key: "generate",
    icon: SVG_ICONS.sourcing,
    title: "Smart Sourcing Agents",
    description:
      "Built for Daily Creativity. Our AI scouts fresh content ideas by fusing your brand's voice with real-time trends—so you never run dry.",
    threshold: 0,
  },
  {
    key: "ideate",
    icon: SVG_ICONS.book,
    title: "Stories That Speak",
    description:
      "Scripts That Connect. Great storytelling never goes out of style—our AI scriptwriters help you craft narratives that resonate and perform.",
    threshold: 1 / 3,
  },
  {
    key: "experience",
    icon: SVG_ICONS.clapperboard,
    title: "Creative Direction Meets Scalable Production",
    description:
      "From concept to creation, we blend human instinct with AI tools to deliver seamless, high-quality content at scale.",
    threshold: 2 / 3,
  },
  {
    key: "share",
    icon: SVG_ICONS.chart,
    title: "Make Every View Count",
    description:
      "Track Every Outcome. We turn content into measurable impact—whether through paid reach or organic growth, we tie it back to ROI.",
    threshold: 1,
  },
];

// --------------------
// Helper Functions
// --------------------
const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

const snapToStep = (value: number, step: number): number =>
  Math.round(value / step) * step;

// --------------------
// Components
// --------------------
interface ProgressIconProps {
  icon: ReactNode;
  title: string;
  description: string;
  active?: boolean;
}

const ProgressIcon: React.FC<ProgressIconProps> = memo(
  ({ icon, title, description, active = false }) => (
    <div className="flex items-start gap-6">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center relative z-10 flex-shrink-0 ${
          active ? "bg-gray-900" : "bg-gray-800/80"
        }`}
      >
        {/* Structural background layer */}
        <div className="absolute inset-0 rounded-xl" />
        {icon}
      </div>
      <div className="max-w-[35vw]">
        <h3 className="font-semibold text-lg leading-tight text-white">{title}</h3>
        <p className="text-sm text-gray-400 mt-2 leading-relaxed pr-8">
          {description}
        </p>
      </div>
    </div>
  )
);
ProgressIcon.displayName = "ProgressIcon";

const Overview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const isTicking = useRef(false);
  const NUM_ICONS = progressItems.length;
  const topOffset = 30; // Further reduced top offset
  const bottomOffset = 30; // Further reduced bottom offset

  // Scroll handler to update progress based on component position
  const handleScroll = useCallback((): void => {
    if (isTicking.current || !containerRef.current) return;

    isTicking.current = true;
    window.requestAnimationFrame(() => {
      const rect = containerRef.current!.getBoundingClientRect();
      const viewportThreshold = window.innerHeight * (2 / 3);
      const componentHeight = rect.height;

      if (componentHeight > 0) {
        const rawProgress = (viewportThreshold - rect.top) / componentHeight;
        const clampedProgress = clamp(rawProgress, 0, 1);
        const step = 1 / (NUM_ICONS - 1);
        const snappedProgress = snapToStep(clampedProgress, step);
        setProgress(snappedProgress);
      }
      isTicking.current = false;
    });
  }, [NUM_ICONS]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Perform initial progress calculation when the component mounts
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div ref={containerRef} className="relative my-8">
      <div className="mt-8 flex gap-32 pl-32 pr-16">
        {/* Left Side: Progress Bar & Icons */}
        <div className="flex flex-col h-[550px] justify-between relative"> {/* Further reduced height */}
          {/* Background Progress Bar */}
          <div
            className="absolute left-5 w-2 bg-gray-800/80 rounded-full"
            style={{
              top: topOffset,
              height: `calc(100% - ${topOffset + bottomOffset}px)`,
            }}
          >
            <div
              className="w-full rounded-full transition-all duration-200 ease-in-out absolute top-0"
              style={{
                height: `${progress * 100}%`,
                background: `linear-gradient(180deg, ${ICON_COLORS[0]} 0%, ${ICON_COLORS[1]} 33.33%, ${ICON_COLORS[2]} 66.67%, ${ICON_COLORS[3]} 100%)`,
                maxHeight: "100%",
              }}
            />
          </div>

          <div className="relative z-20 flex flex-col justify-between h-full">
            {progressItems.map((item, index) => {
              const wrapperClass = `relative z-20 ${index === 0 ? "mt-2" : ""} ${
                index === progressItems.length - 1 ? "mb-2" : ""
              }`;
              return (
                <div key={item.key} className={wrapperClass}>
                  <ProgressIcon
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                    active={progress >= item.threshold}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Image Content */}
        <div className="flex-1 pl-8 flex items-center justify-center h-[550px]"> {/* Further reduced height */}
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
