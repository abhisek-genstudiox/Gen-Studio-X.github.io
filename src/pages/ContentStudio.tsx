import React from 'react';
import { motion } from 'framer-motion';
import { useElementOnScreen } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import AnimatedGradient from '@/components/AnimatedGradient';
import { Helmet } from 'react-helmet';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface WorkflowStep {
  title: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
}

const features: Feature[] = [
  {
    title: "Social Media Analytics",
    description: "Monitor trends and optimize your posting strategies with real-time insights.",
    icon: "📊"
  },
  {
    title: "AI-Powered Text Generation",
    description: "Generate engaging copy, scripts, and blog posts in seconds.",
    icon: "📝"
  },
  {
    title: "AI-Driven Image Generation",
    description: "Create custom visuals that keep your brand on point effortlessly.",
    icon: "🎨"
  },
  {
    title: "Automated Video Production",
    description: "Transform scripts into dynamic videos with intuitive editing tools.",
    icon: "🎥"
  },
  {
    title: "Smart Content Calendar",
    description: "Plan your content strategy with AI-suggested posting schedules and insights.",
    icon: "📆"
  },
  {
    title: "Marketing Optimization",
    description: "Refine your campaigns with in-depth performance analytics for maximum engagement.",
    icon: "📈"
  }
];

const workflowSteps: WorkflowStep[] = [
  {
    title: "Market Analysis",
    description: "Leverage social media analytics to capture trends and consumer behavior.",
    icon: "🔍",
    color: "#FF6B6B",
    gradient: "from-red-500/20 to-transparent"
  },
  {
    title: "Idea Generation",
    description: "Our AI content strategist generates creative ideas tailored to your brand.",
    icon: "💡",
    color: "#4ECDC4",
    gradient: "from-teal-500/20 to-transparent"
  },
  {
    title: "Content Creation",
    description: "Produce high-quality text, images, and videos with AI-powered tools.",
    icon: "⚙️",
    color: "#45B7D1",
    gradient: "from-blue-500/20 to-transparent"
  },
  {
    title: "Editing & Refinement",
    description: "Polish your content using built-in editing tools for a professional finish.",
    icon: "✂️",
    color: "#96CEB4",
    gradient: "from-green-500/20 to-transparent"
  },
  {
    title: "Scheduling & Publishing",
    description: "Automate your publishing process with our smart content calendar.",
    icon: "📅",
    color: "#FFEEAD",
    gradient: "from-yellow-500/20 to-transparent"
  },
  {
    title: "Optimization & Analytics",
    description: "Track performance, refine strategies, and continuously optimize your engagement.",
    icon: "🚀",
    color: "#D4A5A5",
    gradient: "from-pink-500/20 to-transparent"
  }
];

const fadeInUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay }
  })
};

const FeatureCard: React.FC<{ feature: Feature; index: number }> = ({ feature, index }) => (
  <motion.div
    variants={fadeInUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={index * 0.1}
    className="bg-black/50 p-3 sm:p-4 rounded-xl border border-[#E6C88C]/20 hover:border-[#E6C88C]/40 transition-all duration-200 backdrop-blur-md h-full flex flex-col"
  >
    <div className="text-3xl sm:text-4xl md:text-5xl mb-2" aria-hidden="true">
      {feature.icon}
    </div>
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E6C88C] mb-1">
      {feature.title}
    </h3>
    <p className="text-sm sm:text-base text-white/70 flex-grow">
      {feature.description}
    </p>
  </motion.div>
);

const WorkflowCard: React.FC<{ step: WorkflowStep; index: number }> = ({ step, index }) => {
  const isLeft = index % 2 === 0;
  const variant = {
    hidden: { opacity: 0, x: isLeft ? -30 : 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.1 } }
  };

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`w-full md:w-3/4 ${isLeft ? 'text-right' : 'text-left'}`}>
        <div className="bg-black/50 p-3 sm:p-4 rounded-xl border border-[#E6C88C]/20 hover:border-[#E6C88C]/40 transition-all duration-200 backdrop-blur-md inline-block w-full">
          <div className="flex items-center justify-between flex-col sm:flex-row gap-2">
            {isLeft ? (
              <>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E6C88C] sm:mr-3">
                  {step.title}
                </h3>
                <div
                  className="text-2xl sm:text-3xl p-2 rounded-full shadow-md"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  {step.icon}
                </div>
              </>
            ) : (
              <>
                <div
                  className="text-2xl sm:text-3xl p-2 rounded-full shadow-md"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  {step.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#E6C88C] sm:ml-3">
                  {step.title}
                </h3>
              </>
            )}
          </div>
          <p className="text-sm sm:text-base text-white/70 mt-2">
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection: React.FC<{ containerRef: React.RefObject<HTMLDivElement>; isVisible: boolean; }> = ({ containerRef, isVisible }) => (
  <section className="relative overflow-hidden py-10 sm:py-12 md:py-14 lg:py-16" role="banner">
    <div className="absolute inset-0 overflow-hidden">
      <AnimatedGradient className="animate-slowPulse opacity-20" />
      <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-gradient-to-tr from-[#E6C88C]/20 to-transparent rounded-full blur-2xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-gradient-to-br from-[#E6C88C]/20 to-transparent rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>
    </div>
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 sm:mb-3 text-[#E6C88C]">
          AI Creative Suite
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 mb-3 sm:mb-4 md:mb-5 px-4 sm:px-0">
          Accelerate your digital strategy with AI-powered tools for analytics, content creation, and marketing optimization.
        </p>
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <a
            href="/signup"
            className="inline-block bg-[#E6C88C] text-black px-5 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full shadow-md hover:bg-[#E6C88C]/90 transition-colors duration-200 text-sm sm:text-base md:text-lg"
          >
            Join the Beta
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const FeaturesSection: React.FC = () => (
  <section className="py-8 sm:py-10 md:py-12 lg:py-14 relative" aria-label="Features">
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="mb-4 sm:mb-6 md:mb-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#E6C88C] mb-2 sm:mb-3">
          Powerful Features
        </h2>
        <p className="text-sm sm:text-base text-white/70">
          Everything you need to transform your digital presence.
        </p>
      </div>
      <div className="flex gap-4 overflow-x-auto overflow-y-hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-x-visible sm:overflow-y-hidden">
        {features.map((feature, index) => (
          <div key={index} className="flex-shrink-0 w-11/12 sm:w-auto">
            <FeatureCard feature={feature} index={index} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WorkflowSection: React.FC = () => (
  <section
    className="py-12 sm:py-14 md:py-16 lg:py-18 relative lg:h-[75vh]"
    aria-labelledby="workflow-heading"
  >
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="text-center mb-8 sm:mb-10">
        <h2 id="workflow-heading" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#E6C88C] mb-3">
          Our Seamless Workflow
        </h2>
        <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto">
          Experience a streamlined process from insights to execution.
        </p>
      </div>
      <div className="space-y-8">
        {workflowSteps.map((step, index) => (
          <WorkflowCard key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const ContentSuite: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#E6C88C" media="(prefers-color-scheme: light)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <title>AI Creative Suite - Content Suite</title>
        <meta
          name="description"
          content="Accelerate your content creation workflow with AI-powered tools for social media analytics, text, image, and video generation."
        />
      </Helmet>
      <div className="fixed inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90" />
        <AnimatedGradient className="absolute inset-0 opacity-20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#E6C88C]/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-[#E6C88C]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-[#E6C88C]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,...')] opacity-20" />
      </div>
      <motion.div
        className="relative min-h-screen w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main className="relative z-10 pt-20">
          <HeroSection containerRef={containerRef} isVisible={isVisible} />
          <FeaturesSection />
          <WorkflowSection />
        </main>
      </motion.div>
    </>
  );
};

export default ContentSuite;
