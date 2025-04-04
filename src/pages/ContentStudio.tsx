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
    color: "#FF6B6B"
  },
  {
    title: "Idea Generation",
    description: "Our AI content strategist generates creative ideas tailored to your brand.",
    icon: "💡",
    color: "#4ECDC4"
  },
  {
    title: "Content Creation",
    description: "Produce high-quality text, images, and videos with AI-powered tools.",
    icon: "⚙️",
    color: "#45B7D1"
  },
  {
    title: "Editing & Refinement",
    description: "Polish your content using built-in editing tools for a professional finish.",
    icon: "✂️",
    color: "#96CEB4"
  },
  {
    title: "Scheduling & Publishing",
    description: "Automate your publishing process with our smart content calendar.",
    icon: "📅",
    color: "#FFEEAD"
  },
  {
    title: "Optimization & Analytics",
    description: "Track performance, refine strategies, and continuously optimize your engagement.",
    icon: "🚀",
    color: "#D4A5A5"
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
    className="p-6 rounded-3xl bg-black bg-opacity-50 backdrop-blur-xl shadow-2xl transition transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden h-full"
  >
    <div className="absolute inset-0 -z-10">
      <motion.div
        className="w-full h-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        style={{ background: "radial-gradient(circle at top left, rgba(230,200,140,0.2), transparent)" }}
      />
    </div>
    <div className="text-5xl mb-4">{feature.icon}</div>
    <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white">
      {feature.title}
    </h3>
    <p className="text-md text-gray-300">{feature.description}</p>
  </motion.div>
);

const WorkflowCard: React.FC<{ step: WorkflowStep; index: number }> = ({ step, index }) => {
  const isLeft = index % 2 === 0;
  const variant = {
    hidden: { opacity: 0, x: isLeft ? -30 : 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.1 } }
  };
  const iconBg = `${step.color}20`;

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`w-full md:w-3/4 ${isLeft ? 'text-left' : 'text-right'}`}>
        <div className="p-6 rounded-3xl bg-black bg-opacity-50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
              style={{ background: `linear-gradient(135deg, ${step.color}30, transparent)` }}
            />
          </div>
          <div className={`flex items-center gap-4 ${isLeft ? 'justify-start' : 'justify-end'}`}>
            {isLeft && (
              <div className="text-5xl p-4 rounded-full shadow-md flex-shrink-0" style={{ backgroundColor: iconBg }}>
                {step.icon}
              </div>
            )}
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white">
              {step.title}
            </h3>
            {!isLeft && (
              <div className="text-5xl p-4 rounded-full shadow-md flex-shrink-0" style={{ backgroundColor: iconBg }}>
                {step.icon}
              </div>
            )}
          </div>
          <p className={`text-md text-gray-300 mt-4 ${isLeft ? 'text-left' : 'text-right'}`}>
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const HeroSection: React.FC<{
  containerRef: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
}> = ({ containerRef, isVisible }) => (
  <section className="relative overflow-hidden py-16 md:py-24 text-center" role="banner">
    <div className="absolute inset-0 overflow-hidden">
      <AnimatedGradient className="animate-slowPulse opacity-20" />
      <div className="absolute top-0 right-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-gradient-to-tr from-[#E6C88C]/20 to-transparent rounded-full blur-2xl -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 bg-gradient-to-br from-[#E6C88C]/20 to-transparent rounded-full blur-2xl translate-x-1/3 translate-y-1/3" />
    </div>
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white drop-shadow-lg tracking-tight">
          AI Creative Suite
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8">
          Accelerate your digital strategy with AI-powered tools for analytics, content creation, and marketing optimization.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="/signup"
            className="inline-block bg-gradient-to-r from-[#E6C88C] to-white text-black px-8 py-4 rounded-full font-medium shadow-2xl transition-all duration-300"
          >
            Join the Beta
          </a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const FeaturesSection: React.FC = () => (
  <section className="py-16 md:py-24 relative" aria-label="Features">
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white drop-shadow tracking-wide">
          Powerful Features
        </h2>
        <p className="text-lg text-gray-300">Everything you need to transform your digital presence.</p>
      </div>
      <div className="flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 pb-4">
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
  <section className="py-16 md:py-24" aria-labelledby="workflow-heading">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2
          id="workflow-heading"
          className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white drop-shadow tracking-wide"
        >
          Our Seamless Workflow
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Experience a streamlined process from insights to execution.
        </p>
      </div>
      <div className="space-y-12">
        {workflowSteps.map((step, index) => (
          <WorkflowCard key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const Background: React.FC = () => (
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
      <Background />
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
