import React, { useRef, useState, useEffect, useCallback, ReactNode, memo } from "react";

// --------------------
// Static Data & Interfaces
// --------------------
const SVG_ICONS = {
  sourcing: "/ourProcess/Icon 1 AI.png",
  book: "/ourProcess/Icon 2 Stroies.png",
  clapperboard: "/ourProcess/Icon 3 Films.png",
  chart: "/ourProcess/Icon 4 Ads.png",
};

const CARD_IMAGES = [
  "/ourProcess/Card 1 AI agents.png",
  "/ourProcess/Card 2 Scriptwriter.png",
  "/ourProcess/Card 3 Gen AI models.png",
  "/ourProcess/Card 4 Ads.png",
];

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
  const topOffset = 30; // Reduced top offset
  const bottomOffset = 30; // Reduced bottom offset

  // Modified scroll handler using continuous progress (without snapping)
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
        setProgress(clampedProgress);
      }
      isTicking.current = false;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial progress calculation
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Calculate step based on number of cards
  const step = 1 / (CARD_IMAGES.length - 1);
  const activeIndex = Math.floor(progress / step);
  const remainder = (progress - activeIndex * step) / step;

  return (
    <div ref={containerRef} className="relative my-8">
      <div className="mt-8 flex gap-32 pl-32 pr-16">
        {/* Left Side: Progress Bar & Icons */}
        <div className="flex flex-col h-[550px] justify-between relative">
          <div
            className="absolute w-2 bg-gray-800/80 rounded-full"
            style={{
              left: "calc(2rem - 1px)", // Align with icon center
              top: topOffset,
              height: `calc(100% - ${topOffset + bottomOffset}px)`,
            }}
          >
            {/* You can keep your gradient progress bar here if needed */}
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
        <div className="flex-1 pl-8 flex items-center justify-center h-[550px] relative">
          <div className="w-full h-full flex justify-center items-center relative">
            {CARD_IMAGES.map((image, index) => {
              // Only two images will have non-zero opacity:
              // - The current image (activeIndex) fades out
              // - The next image (activeIndex + 1) fades in
              let opacity = 0;
              let translateY = 0;
              // Current active image
              if (index === activeIndex) {
                opacity = 1 - remainder;
                translateY = 4 * remainder; // Adjust vertical translation if desired
              }
              // Next image
              else if (index === activeIndex + 1) {
                opacity = remainder;
                translateY = 4 * (1 - remainder);
              }
              // All other images remain hidden
              return (
                <img
                  key={image}
                  src={image}
                  alt={`Process Step ${index + 1}`}
                  className="absolute transition-all duration-500 ease-in-out"
                  style={{
                    zIndex: index === activeIndex + 1 ? 10 : 0,
                    width: '300px',
                    height: 'auto',
                    objectFit: 'contain',
                    opacity,
                    transform: `translateY(${translateY}px)`,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
