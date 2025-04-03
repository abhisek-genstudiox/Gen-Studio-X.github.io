import React from 'react';
import { cn } from '@/lib/utils';
import { useElementOnScreen } from '@/utils/animations';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const { containerRef, isVisible } = useElementOnScreen({ threshold: 0.1 });

  const features = [
    {
      title: "AI-Powered Design",
      description: "Create stunning visuals with advanced AI algorithms",
      icon: "🎨"
    },
    {
      title: "Video Generation",
      description: "Produce high-quality videos with AI assistance",
      icon: "🎥"
    },
    {
      title: "Avatar Creation",
      description: "Design unique digital avatars for your brand",
      icon: "👤"
    },
    {
      title: "Content Scaling",
      description: "Scale your content production efficiently",
      icon: "📈"
    }
  ];
  
  return (
    <section id="features" className="section-padding bg-black/50 relative py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={cn(
            "max-w-4xl mx-auto text-center mb-12",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-[#E6C88C]">
            Our Features
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-display">
            Discover the power of AI-driven content creation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-display font-bold text-[#E6C88C] mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70 font-display">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
