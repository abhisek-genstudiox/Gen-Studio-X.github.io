import React, { useRef, useState, useEffect, useCallback, ReactNode, memo } from "react";

// --------------------
// Static Data
// --------------------
const ICON_COLORS = ["#1a1a1a", "#262626", "#333333", "#404040"];

const SVG_ICONS = {
  sourcing: "/ourProcess/Icon 1 AI.png",
  book: "/ourProcess/Icon 2 Stroies.png",
  clapperboard: "/ourProcess/Icon 3 Films.png",
  chart: "/ourProcess/Icon 4 Ads.png",
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
        className={`w-16 h-16 rounded-xl flex items-center justify-center relative z-10 flex-shrink-0 ${
          active ? "bg-gray-900" : "bg-gray-800/80"
        }`}
      >
        {/* Structural background layer */}
        <div className="absolute inset-0 rounded-xl" />
        <img src={icon as string} alt={title} className="w-12 h-12 object-contain" />
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
        <div className="flex flex-col h-[550px] justify-between relative">
          {/* Background Progress Bar */}
          <div
            className="absolute w-2 bg-gray-800/80 rounded-full"
            style={{
              left: "calc(2rem - 1px)", // Align progress bar center with the icon circle's center (2rem = 32px; adjust by 1px)
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
        <div className="flex-1 pl-8 flex items-center justify-center h-[550px]">
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
