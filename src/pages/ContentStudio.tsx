import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useElementOnScreen } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import AnimatedGradient from '@/components/AnimatedGradient';
import { Helmet } from 'react-helmet';

const ContentStudio: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });

  const features = [
    {
      title: "Social Media Trend Analysis",
      description: "Stay ahead with real-time insights and data-driven decisions",
      icon: "📊"
    },
    {
      title: "AI-Powered Idea Generator",
      description: "Discover fresh, unique ideas tailored to your brand",
      icon: "💡"
    },
    {
      title: "Story & Script Development",
      description: "Transform ideas into compelling narratives and scripts",
      icon: "📝"
    },
    {
      title: "Content Expansion Tools",
      description: "Generate text, images, and videos with integrated editing",
      icon: "🎨"
    },
    {
      title: "Marketing Optimization",
      description: "Customize content and track performance metrics",
      icon: "📈"
    }
  ];

  const workflowSteps = [
    {
      title: "Trend Research",
      description: "Analyze current social media trends and audience preferences using AI-powered insights",
      icon: "🔍",
      color: "#FF6B6B",
      gradient: "from-red-500/20 to-transparent"
    },
    {
      title: "Idea Generation",
      description: "Get AI-powered creative suggestions tailored to your brand and target audience",
      icon: "💭",
      color: "#4ECDC4",
      gradient: "from-teal-500/20 to-transparent"
    },
    {
      title: "Story Creation",
      description: "Develop engaging narratives with AI assistance for maximum impact",
      icon: "📖",
      color: "#45B7D1",
      gradient: "from-blue-500/20 to-transparent"
    },
    {
      title: "Script Development",
      description: "Transform stories into structured scripts optimized for different platforms",
      icon: "🎬",
      color: "#96CEB4",
      gradient: "from-green-500/20 to-transparent"
    },
    {
      title: "Content Expansion",
      description: "Enhance with rich media content using our integrated AI tools",
      icon: "✨",
      color: "#FFEEAD",
      gradient: "from-yellow-500/20 to-transparent"
    },
    {
      title: "Publish & Optimize",
      description: "Deploy content and monitor performance with real-time analytics",
      icon: "🚀",
      color: "#D4A5A5",
      gradient: "from-pink-500/20 to-transparent"
    }
  ];

  return (
    <>
      <Helmet>
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#E6C88C" media="(prefers-color-scheme: light)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Helmet>
      <motion.div 
        className="relative bg-black min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <style>
          {`
            @supports (-webkit-touch-callout: none) {
              body {
                background-color: #000000;
              }
              .safari-top-bar {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                height: env(safe-area-inset-top);
                background-color: #000000;
                z-index: 9999;
              }
              .safari-bottom-bar {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                height: env(safe-area-inset-bottom);
                background-color: #000000;
                z-index: 9999;
              }
            }
          `}
        </style>
        <div className="safari-top-bar" />
        <div className="safari-bottom-bar" />
        <AnimatedGradient />
        <Navbar />
        
        <main className="relative z-10 bg-black">
          {/* Hero Section */}
          <section className="section-padding relative overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                ref={containerRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className={cn(
                  "max-w-4xl mx-auto text-center",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-[#E6C88C]">
                  AI Creative Suite
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 font-display max-w-2xl mx-auto">
                  Transform ideas into captivating, trend-driven content with our AI-powered platform
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/signup"
                    className="inline-block bg-[#E6C88C] text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-display font-medium shadow-lg shadow-[#E6C88C]/20 hover:bg-[#E6C88C]/90 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Get Started
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="section-padding relative pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#E6C88C]/10 to-transparent p-4 sm:p-6 rounded-xl border border-[#E6C88C]/20 hover:border-[#E6C88C]/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#E6C88C] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 font-display">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Workflow Section */}
          <section className="section-padding relative py-16 sm:py-20 md:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-[#E6C88C] mb-6">
                  How It Works
                </h2>
                <p className="text-xl text-white/70 font-display max-w-2xl mx-auto">
                  Our streamlined process helps you create engaging content from start to finish
                </p>
              </motion.div>
              
              <div className="relative">
                {/* Background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E6C88C]/5 rounded-full blur-3xl" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {workflowSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className={cn(
                        "h-full bg-gradient-to-br from-[#E6C88C]/5 to-transparent p-6 rounded-2xl border border-[#E6C88C]/10",
                        "hover:border-[#E6C88C]/30 hover:shadow-lg hover:shadow-[#E6C88C]/5",
                        "transition-all duration-300 backdrop-blur-sm",
                        "relative overflow-hidden"
                      )}>
                        {/* Gradient background */}
                        <div className={cn(
                          "absolute inset-0 bg-gradient-to-br",
                          step.gradient,
                          "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        )} />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-start gap-6">
                            <div 
                              className={cn(
                                "text-4xl p-4 rounded-xl",
                                "transition-transform duration-300 group-hover:scale-110",
                                "shadow-lg shadow-black/10"
                              )}
                              style={{ backgroundColor: `${step.color}20` }}
                            >
                              {step.icon}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-sm font-medium text-[#E6C88C]">
                                  Step {index + 1}
                                </span>
                                <div className="h-px flex-1 bg-[#E6C88C]/20" />
                              </div>
                              <h3 className="text-2xl font-display font-bold text-[#E6C88C] mb-3">
                                {step.title}
                              </h3>
                              <p className="text-base text-white/70 font-display leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </motion.div>
    </>
  );
};

export default ContentStudio; 