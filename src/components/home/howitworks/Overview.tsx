import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  ReactNode,
  memo,
} from "react";

// -------------------------
// Constants & Interfaces
// -------------------------
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

export interface ProgressItem {
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

// -------------------------
// Helper Function
// -------------------------
const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

// -------------------------
// Progress Icon Component
// -------------------------
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
        <img
          src={icon as string}
          alt={title}
          className="w-12 h-12 object-contain"
        />
      </div>
      <div className="max-w-[35vw]">
        <h3 className="font-semibold text-lg leading-tight text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mt-2 leading-relaxed pr-8">
          {description}
        </p>
      </div>
    </div>
  )
);
ProgressIcon.displayName = "ProgressIcon";

// -------------------------
// Main Overview Component
// -------------------------
const Overview: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const isTicking = useRef(false);
  const scrollTimeout = useRef<number | null>(null);

  // Offsets for proper layout spacing
  const topOffset = 30;
  const bottomOffset = 30;

  /**
   * Update the progress based on the container's bounding rectangle
   * and the viewport threshold.
   */
  const handleScroll = useCallback(() => {
    if (isTicking.current || !containerRef.current) return;

    isTicking.current = true;
    window.requestAnimationFrame(() => {
      const rect = containerRef.current!.getBoundingClientRect();
      const viewportThreshold = window.innerHeight * (2 / 3);
      const newProgress = clamp((viewportThreshold - rect.top) / rect.height, 0, 1);
      setProgress(newProgress);
      isTicking.current = false;
    });
  }, []);

  /**
   * Snap the progress value to the nearest threshold defined
   * in the progressItems for a smoother transition.
   */
  const snapProgress = useCallback(() => {
    const currentProgress = progress;
    const thresholds = progressItems.map((item) => item.threshold);
    const snappedProgress = thresholds.reduce((closest, threshold) =>
      Math.abs(threshold - currentProgress) < Math.abs(closest - currentProgress)
        ? threshold
        : closest,
      thresholds[0]
    );
    if (Math.abs(snappedProgress - currentProgress) > 0.01) {
      setProgress(snappedProgress);
    }
  }, [progress]);

  // Setup scroll listener with debouncing
  useEffect(() => {
    const onScroll = () => {
      handleScroll();
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = window.setTimeout(snapProgress, 200);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial calculation in case the component is already in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [handleScroll, snapProgress]);

  // Calculate the active card index and the remaining progress for the animation
  const step = 1 / (CARD_IMAGES.length - 1);
  const activeIndex = Math.floor(progress / step);
  const remainder = (progress - activeIndex * step) / step;

  const GRADIENT_COLORS = ["#6366F1", "#EC4899", "#F59E0B", "#10B981"];
  const progressPercentage = progress * 100; // for the maskImage percentage

  return (
    <div ref={containerRef} className="relative my-8">
      <div className="mt-8 flex gap-32 pl-32 pr-16">
        {/* Left: Progress Icons + Animated Progress Line */}
        <div className="flex flex-col h-[550px] justify-between relative">
          <div
            className="absolute w-2 rounded-full overflow-hidden"
            style={{
              left: "calc(2rem - 1px)",
              top: topOffset,
              height: `calc(100% - ${topOffset + bottomOffset}px)`,
              background: `linear-gradient(to bottom, ${GRADIENT_COLORS.join(", ")})`,
              maskImage: `linear-gradient(to bottom, black ${progressPercentage}%, transparent ${progressPercentage + 1}%)`,
              WebkitMaskImage: `linear-gradient(to bottom, black ${progressPercentage}%, transparent ${progressPercentage + 1}%)`,
              transition: "mask-image 0.5s, -webkit-mask-image 0.5s",
            }}
          />
          <div className="relative z-20 flex flex-col justify-between h-full">
            {progressItems.map((item, index) => (
              <div
                key={item.key}
                className={`relative z-20 ${index === 0 ? "mt-2" : ""} ${
                  index === progressItems.length - 1 ? "mb-2" : ""
                }`}
              >
                <ProgressIcon
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                  active={progress >= item.threshold}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Card Shuffling Animation */}
        <div className="flex-1 pl-8 flex items-center justify-center h-[550px] relative">
          <div className="w-full h-full flex justify-center items-center relative">
            {CARD_IMAGES.map((image, index) => {
              let style: React.CSSProperties = {};
              const blurStyle = { filter: "blur(4px)" };
              let zIndex = 0;

              if (index < activeIndex) {
                // Previous cards (fading out)
                style = {
                  transform: "translateX(-100px) rotate(-20deg) scale(0.8)",
                  opacity: 0,
                  ...blurStyle,
                  transition:
                    "transform 0.5s ease-in-out, opacity 0.5s ease-in-out, filter 0.5s",
                };
                zIndex = 1;
              } else if (index === activeIndex) {
                // Currently active card with transition applied
                style = {
                  transform: `translateX(${-100 * remainder}px) rotate(${-20 * remainder}deg) scale(${1 -
                    0.2 * remainder})`,
                  opacity: 1 - remainder,
                  transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                };
                zIndex = 9;
              } else if (index === activeIndex + 1) {
                // The next card blending in
                style = {
                  transform: `translateX(${100 * (1 - remainder)}px) rotate(${20 *
                    (1 - remainder)}deg) scale(${0.8 + 0.2 * remainder})`,
                  opacity: remainder,
                  transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out",
                };
                zIndex = 10;
              } else {
                // Remaining cards (hidden and blurred)
                style = {
                  transform: "translateX(100px) rotate(20deg) scale(0.8)",
                  opacity: 0,
                  ...blurStyle,
                  transition:
                    "transform 0.5s ease-in-out, opacity 0.5s ease-in-out, filter 0.5s",
                };
                zIndex = 8;
              }

              return (
                <img
                  key={image}
                  src={image}
                  alt={`Process Step ${index + 1}`}
                  className="absolute"
                  style={{
                    zIndex,
                    width: "300px",
                    height: "auto",
                    objectFit: "contain",
                    ...style,
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
