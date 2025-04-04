import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useElementOnScreen } from '@/utils/animations';
import Navbar from '@/components/Navbar';
import AnimatedGradient from '@/components/AnimatedGradient';
import { Helmet } from 'react-helmet';

// Animation Variants
const fadeIn = { hidden: { opacity: 0 }, visible: { opacity: 1 } };
const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

interface Service {
  title: string;
  description: string;
  icon: string;
}

interface ExpertiseItem {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface WorkflowStepItem {
  title: string;
  description: string;
  icon: string;
  color: string;
}

interface Benefit {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard: React.FC<{ service: Service; index: number }> = ({ service, index }) => (
  <motion.div
    className="min-w-[300px] snap-center p-6 rounded-3xl bg-black bg-opacity-50 backdrop-blur-xl shadow-2xl transition transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="absolute inset-0 -z-10">
      <motion.div
        className="w-full h-full"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
        style={{ background: 'radial-gradient(circle at top left, rgba(230,200,140,0.2), transparent)' }}
      />
    </div>
    <div className="text-5xl mb-4">{service.icon}</div>
    <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white">
      {service.title}
    </h3>
    <p className="text-md text-gray-300">{service.description}</p>
  </motion.div>
);

const ExpertiseCard: React.FC<{ item: ExpertiseItem; index: number }> = ({ item, index }) => (
  <motion.div
    className="relative max-w-sm w-full p-6 rounded-3xl bg-black bg-opacity-60 backdrop-blur-lg shadow-xl transition transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.6, delay: index * 0.15 }}
    viewport={{ once: true }}
  >
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-black to-transparent" style={{ opacity: 0.5 }} />
    <div className="flex items-center gap-4 mb-4">
      <motion.div
        className="text-5xl p-4 rounded-full shadow-md"
        style={{ backgroundColor: `${item.color}20` }}
        whileHover={{ rotate: 10 }}
      >
        {item.icon}
      </motion.div>
      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white">
        {item.title}
      </h3>
    </div>
    <p className="text-md text-gray-300">{item.description}</p>
  </motion.div>
);

const WorkflowStep: React.FC<{ step: WorkflowStepItem; index: number }> = ({ step, index }) => (
  <motion.div
    className="relative flex flex-col md:flex-row items-center md:items-start"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <div className="z-10 flex-shrink-0 w-12 h-12 rounded-full bg-black bg-opacity-70 flex items-center justify-center border border-[#E6C88C]/40 shadow-xl">
      {step.icon}
    </div>
    <div className="mt-4 md:mt-0 md:ml-8 p-6 rounded-3xl bg-black bg-opacity-50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
          style={{ background: `linear-gradient(135deg, ${step.color}30, transparent)` }}
        />
      </div>
      <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white">
        {step.title}
      </h3>
      <p className="text-md text-gray-300">{step.description}</p>
    </div>
  </motion.div>
);

const BenefitCard: React.FC<{ benefit: Benefit; index: number }> = ({ benefit, index }) => (
  <motion.div
    className="p-6 rounded-3xl bg-black bg-opacity-50 backdrop-blur-xl shadow-2xl transition transform hover:-translate-y-3 hover:scale-105 relative overflow-hidden"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <div className="absolute inset-0 -z-10">
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'mirror' }}
        style={{ background: 'radial-gradient(circle at center, rgba(230,200,140,0.2), transparent)' }}
      />
    </div>
    <div className="text-5xl mb-4">{benefit.icon}</div>
    <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white">
      {benefit.title}
    </h3>
    <p className="text-md text-gray-300">{benefit.description}</p>
  </motion.div>
);

const ManagedServices: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });

  const services: Service[] = [
    {
      title: 'Workflow Analysis & Planning',
      description: 'Evaluate your current processes to pinpoint growth opportunities and drive innovation.',
      icon: '📊',
    },
    {
      title: 'Custom Workflow Design',
      description: 'Craft tailor-made solutions that blend technical efficiency with creative brilliance.',
      icon: '🎨',
    },
    {
      title: 'Seamless Implementation',
      description: 'Deploy and integrate new workflows with lightning-fast precision.',
      icon: '⚡',
    },
    {
      title: 'Ongoing Optimization & Support',
      description: 'Experience continuous enhancements with our dedicated support team.',
      icon: '🛡️',
    },
  ];

  const expertise: ExpertiseItem[] = [
    {
      title: 'Technical Mastery',
      description: 'Leveraging cutting-edge tech to automate and streamline your operations.',
      icon: '💻',
      color: '#FF6B6B',
    },
    {
      title: 'Creative Vision',
      description: 'Crafting strategies and content that captivate and inspire.',
      icon: '🎯',
      color: '#4ECDC4',
    },
    {
      title: 'Innovative Solutions',
      description: 'Merging technology and creativity to supercharge your processes.',
      icon: '✨',
      color: '#45B7D1',
    },
  ];

  const workflowSteps: WorkflowStepItem[] = [
    {
      title: 'Consultation & Assessment',
      description: 'We start by diving deep into your challenges and current workflows.',
      icon: '🤝',
      color: '#FF6B6B',
    },
    {
      title: 'Customized Strategy',
      description: 'Our experts design a bespoke plan perfectly aligned with your goals.',
      icon: '📋',
      color: '#4ECDC4',
    },
    {
      title: 'Expert Implementation',
      description: 'Our tech and creative teams unite to bring your vision to life.',
      icon: '🚀',
      color: '#45B7D1',
    },
    {
      title: 'Continuous Improvement',
      description: 'We keep optimizing and fine-tuning to ensure lasting success.',
      icon: '📈',
      color: '#96CEB4',
    },
  ];

  const benefits: Benefit[] = [
    {
      title: 'Enhanced Efficiency',
      description: 'Streamline operations and eliminate redundant tasks.',
      icon: '⚡',
    },
    {
      title: 'Increased Innovation',
      description: 'Stay ahead with creative insights that elevate your brand.',
      icon: '💡',
    },
    {
      title: 'Scalable Solutions',
      description: 'Expand your capabilities with workflows that grow with you.',
      icon: '📈',
    },
    {
      title: 'Dedicated Support',
      description: 'Access a team of experts devoted to your long-term success.',
      icon: '🤝',
    },
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
        className="relative bg-black min-h-screen overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.5 }}
      >
        <style>{`
          @supports (-webkit-touch-callout: none) {
            body { background-color: #000000; }
            .safari-top-bar, .safari-bottom-bar {
              position: fixed; left: 0; right: 0; background-color: #000000; z-index: 9999;
            }
            .safari-top-bar { top: 0; height: env(safe-area-inset-top); }
            .safari-bottom-bar { bottom: 0; height: env(safe-area-inset-bottom); }
          }
        `}</style>
        <div className="safari-top-bar" />
        <div className="safari-bottom-bar" />
        <AnimatedGradient />
        <Navbar />
        <main className="relative z-10 bg-black">
          {/* Hero Section */}
          <section className="section-padding relative py-16 md:py-24 text-center">
            <div className="container mx-auto px-4 relative z-20">
              <motion.div
                ref={containerRef}
                variants={fadeInUp}
                initial="hidden"
                animate={isVisible ? 'visible' : 'hidden'}
                transition={{ duration: 0.8 }}
                className={cn('max-w-3xl mx-auto', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10')}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white drop-shadow-lg tracking-tight">
                  Managed Services
                </h1>
                <p className="text-lg md:text-2xl text-gray-300 mb-8">
                  Transforming your workflows into masterpieces with technical and creative genius.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-[#E6C88C] to-white text-black px-8 py-4 rounded-full font-medium shadow-2xl transition-all duration-300"
                  >
                    Contact Us Today
                  </a>
                </motion.div>
              </motion.div>
            </div>
            <div className="absolute inset-0 z-10 pointer-events-none">
              <svg className="absolute bottom-0 left-0 w-full h-40 opacity-50" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path d="M0,0 C150,100 350,0 500,100 C650,200 850,100 1000,150 L1000,0 L0,0 Z" fill="url(#gradientWave)" />
                <defs>
                  <linearGradient id="gradientWave" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#E6C88C" />
                    <stop offset="100%" stopColor="white" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </section>
          {/* What We Do */}
          <section className="section-padding relative py-16 md:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white drop-shadow tracking-wide">
                What We Do
              </h2>
              <div className="flex overflow-x-auto pb-8 gap-8 snap-x snap-mandatory scrollbar-hide">
                {services.map((service, i) => (
                  <ServiceCard key={i} service={service} index={i} />
                ))}
              </div>
            </div>
          </section>
          {/* Our Expertise */}
          <section className="section-padding relative py-16 md:py-24 bg-gray-900 bg-opacity-30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white drop-shadow tracking-wide">
                Our Expertise
              </h2>
              <div className="relative flex flex-wrap justify-center gap-8">
                {expertise.map((item, i) => (
                  <ExpertiseCard key={i} item={item} index={i} />
                ))}
              </div>
            </div>
          </section>
          {/* How It Works */}
          <section className="section-padding relative py-16 md:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white drop-shadow tracking-wide">
                How It Works
              </h2>
              <div className="relative space-y-12">
                {workflowSteps.map((step, i) => (
                  <WorkflowStep key={i} step={step} index={i} />
                ))}
              </div>
            </div>
          </section>
          {/* Benefits */}
          <section className="section-padding relative py-16 md:py-24 bg-gray-900 bg-opacity-30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white drop-shadow tracking-wide">
                Benefits
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, i) => (
                  <BenefitCard key={i} benefit={benefit} index={i} />
                ))}
              </div>
            </div>
          </section>
          {/* Call-To-Action */}
          <section className="section-padding relative py-16 md:py-24">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#E6C88C] to-white drop-shadow tracking-wide">
                  Ready to Transform Your Workflows?
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Schedule your consultation today and let us supercharge your operations.
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="/contact"
                    className="inline-block bg-gradient-to-r from-[#E6C88C] to-white text-black px-8 py-4 rounded-full font-medium shadow-2xl transition-all duration-300"
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
