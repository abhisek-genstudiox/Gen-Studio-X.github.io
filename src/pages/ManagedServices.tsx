import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useElementOnScreen } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import AnimatedGradient from '@/components/AnimatedGradient';
import { Helmet } from 'react-helmet';

const ManagedServices: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });

  const services = [
    {
      title: "Workflow Analysis & Planning",
      description: "Evaluate your current processes to identify areas for improvement and innovation",
      icon: "📊"
    },
    {
      title: "Custom Workflow Design",
      description: "Develop tailor-made solutions that integrate technical efficiency with creative flair",
      icon: "🎨"
    },
    {
      title: "Seamless Implementation",
      description: "Execute and integrate new workflows with minimal disruption",
      icon: "⚡"
    },
    {
      title: "Ongoing Optimization & Support",
      description: "Provide continuous monitoring and refinement to keep your workflows cutting-edge",
      icon: "🛡️"
    }
  ];

  const expertise = [
    {
      title: "Technical Mastery",
      description: "Harnessing the latest technologies to automate, integrate, and streamline operations",
      icon: "💻",
      color: "#FF6B6B",
      gradient: "from-red-500/20 to-transparent"
    },
    {
      title: "Creative Vision",
      description: "Developing strategies and content that engage and inspire your audience",
      icon: "🎯",
      color: "#4ECDC4",
      gradient: "from-teal-500/20 to-transparent"
    },
    {
      title: "Innovative Solutions",
      description: "Combining technical innovation with creative strategy to supercharge your processes",
      icon: "✨",
      color: "#45B7D1",
      gradient: "from-blue-500/20 to-transparent"
    }
  ];

  const workflowSteps = [
    {
      title: "Consultation & Assessment",
      description: "We start by understanding your unique business challenges and existing workflows",
      icon: "🤝",
      color: "#FF6B6B",
      gradient: "from-red-500/20 to-transparent"
    },
    {
      title: "Customized Strategy",
      description: "Our experts craft a personalized plan that aligns with your business goals",
      icon: "📋",
      color: "#4ECDC4",
      gradient: "from-teal-500/20 to-transparent"
    },
    {
      title: "Expert Implementation",
      description: "Our technical and creative teams work together to bring your vision to life",
      icon: "🚀",
      color: "#45B7D1",
      gradient: "from-blue-500/20 to-transparent"
    },
    {
      title: "Continuous Improvement",
      description: "We monitor performance and fine-tune your workflows for sustained success",
      icon: "📈",
      color: "#96CEB4",
      gradient: "from-green-500/20 to-transparent"
    }
  ];

  const benefits = [
    {
      title: "Enhanced Efficiency",
      description: "Reduce manual tasks and streamline operations for faster turnaround times",
      icon: "⚡"
    },
    {
      title: "Increased Innovation",
      description: "Leverage our creative insights to keep your brand ahead of the curve",
      icon: "💡"
    },
    {
      title: "Scalable Solutions",
      description: "Grow your capabilities with workflows designed to evolve with your business",
      icon: "📈"
    },
    {
      title: "Dedicated Support",
      description: "Enjoy ongoing access to a team of experts committed to your success",
      icon: "🤝"
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
                  Managed Service
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/70 mb-6 sm:mb-8 font-display max-w-2xl mx-auto">
                  Where our in-house technical and creative expertise transforms your workflows into powerful, growth-driving systems
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/contact"
                    className="inline-block bg-[#E6C88C] text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-display font-medium shadow-lg shadow-[#E6C88C]/20 hover:bg-[#E6C88C]/90 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Contact Us Today
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Services Section */}
          <section className="section-padding relative pb-12 sm:pb-16 md:pb-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#E6C88C] mb-8 text-center">
                What We Do
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#E6C88C]/10 to-transparent p-4 sm:p-6 rounded-xl border border-[#E6C88C]/20 hover:border-[#E6C88C]/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{service.icon}</div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#E6C88C] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 font-display">
                      {service.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Expertise Section */}
          <section className="section-padding relative py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#E6C88C] mb-8 text-center">
                Our Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {expertise.map((item, index) => (
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
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br",
                        item.gradient,
                        "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      )} />
                      <div className="relative z-10">
                        <div className="flex items-start gap-6">
                          <div 
                            className={cn(
                              "text-4xl p-4 rounded-xl",
                              "transition-transform duration-300 group-hover:scale-110",
                              "shadow-lg shadow-black/10"
                            )}
                            style={{ backgroundColor: `${item.color}20` }}
                          >
                            {item.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-display font-bold text-[#E6C88C] mb-3">
                              {item.title}
                            </h3>
                            <p className="text-base text-white/70 font-display leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Workflow Section */}
          <section className="section-padding relative py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#E6C88C] mb-8 text-center">
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-br",
                        step.gradient,
                        "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      )} />
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
          </section>

          {/* Benefits Section */}
          <section className="section-padding relative py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#E6C88C] mb-8 text-center">
                Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-[#E6C88C]/10 to-transparent p-4 sm:p-6 rounded-xl border border-[#E6C88C]/20 hover:border-[#E6C88C]/40 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
                    <h3 className="text-lg sm:text-xl font-display font-bold text-[#E6C88C] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/70 font-display">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="section-padding relative py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-[#E6C88C] mb-6">
                  Ready to Transform Your Workflows?
                </h2>
                <p className="text-lg text-white/70 font-display mb-8 max-w-2xl mx-auto">
                  Contact us today to schedule your consultation and discover how we can help you achieve operational excellence.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="/contact"
                    className="inline-block bg-[#E6C88C] text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-display font-medium shadow-lg shadow-[#E6C88C]/20 hover:bg-[#E6C88C]/90 transition-colors duration-300 text-sm sm:text-base"
                  >
                    Get Started
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>
      </motion.div>
    </>
  );
};

export default ManagedServices; 