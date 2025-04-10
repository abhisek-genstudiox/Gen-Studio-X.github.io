import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm">
    <div className="bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-zinc-800 rounded-full text-sm mb-6">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore features designed to<br />enhance your business operations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed for today's challenges. Learn more about how
            we can best support your needs — from startups to big companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
            title="Consultation & Assessment"
            description="We start by diving deep into your challenges and current workflows."
          />
          <FeatureCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>}
            title="Customized Strategy"
            description="Our experts design a bespoke plan perfectly aligned with your goals."
          />
          <FeatureCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>}
            title="Expert Implementation"
            description="Our tech and creative teams unite to bring your vision to life."
          />
          <FeatureCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}
            title="Predictive analytics"
            description="Anticipate trends with AI models, helping you make informed decisions."
          />
          <FeatureCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>}
            title="Multi-platform Workflow"
            description="Connect with existing tools, ensuring smooth workflows and collaboration."
          />
          <FeatureCard
            icon={<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
            title="Continuous Improvement"
            description="We keep optimizing and fine-tuning to ensure lasting success."
          />
        </div>
      </div>
    </section>
  );
};

export default React.memo(Features); 