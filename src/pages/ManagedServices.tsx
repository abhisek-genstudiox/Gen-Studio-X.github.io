import React, { memo, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type EnterpriseCardProps = {
  title: string;
  description: string;
  children?: React.ReactNode;
};

const EnterpriseCard: React.FC<EnterpriseCardProps> = memo(({ title, description, children }) => (
  <div className="relative bg-black/80 rounded-3xl p-8 backdrop-blur-lg border border-white/20
                shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
                transition-all duration-300 bg-gradient-to-br from-zinc-900/30 via-transparent to-transparent
                after:absolute after:inset-0 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500 after:bg-zinc-500/5
                before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-white/20 before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:blur-sm
                hover:border-white/30">
    <h3 className="text-2xl font-semibold mb-4 relative z-10">{title}</h3>
    <p className="text-gray-400 mb-6 relative z-10">{description}</p>
    <div className="relative z-10">{children}</div>
  </div>
));

const Enterprise: React.FC = memo(() => {
  return (
    <section className="bg-black py-16 sm:py-24 mt-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-4xl sm:text-6xl mb-8 bg-gradient-to-b from-white to-gray-300
                      bg-clip-text text-transparent leading-[1.2] font-display pb-2"
          >
            Managed Services
          </h1>
          <p className="text-lg text-gray-400/90 max-w-xl mx-auto">
            Transforming your workflows into masterpieces with technical and creative genius
          </p>
        </div>

        {/* Expertise Label */}
        <div className="flex justify-center mb-8">
          <div className="inline-block px-4 py-1.5 bg-zinc-800 rounded-full text-sm">
            Our Expertise
          </div>
        </div>

        {/* Enterprise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Technical Expertise */}
        <EnterpriseCard
          title="Technical Expertise"
          description="Leveraging cutting-edge tech to automate and streamline your operations"
        >
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              <div className="w-full flex items-center justify-between rounded-lg p-4 bg-white/5">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-bold text-lg text-white">AI Powered Automation</p>
                    <p className="text-sm text-gray-400">
                      Streamline your workflow with intelligent bots
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-between rounded-lg p-4 bg-white/5">
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-bold text-lg text-white">Custom Integrations</p>
                    <p className="text-sm text-gray-400">
                      Seamlessly connect your favorite Social Media Platforms
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl p-4 text-center border border-white/10">
              <p className="text-sm text-gray-400">
                We provide advanced creative and analytics AI tools
              </p>
            </div>
          </div>
        </EnterpriseCard>
      
        {/* Card 2: Creative Vision */}
        <EnterpriseCard
          title="Creative Vision"
          description="Crafting strategies and content that captivate and inspire"
        >
          <div className="relative h-72">
            {/* Subtle background shapes */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-0 opacity-10">
                <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="50" fill="#aaa" />
                </svg>
              </div>
              <div className="absolute bottom-0 right-0 opacity-10">
                <svg width="140" height="140" viewBox="0 0 120 120" fill="none">
                  <rect width="120" height="120" rx="20" fill="#888" />
                </svg>
              </div>
            </div>
        
            {/* Foreground content */}
            <div className="relative z-10 flex flex-col items-center justify-between h-full py-8 px-4">
              {/* Icon row */}
              <div className="flex space-x-8">
                <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 20h9" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M17 21v-8H7v8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 3v5h8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M4.5 6.5L6 5l3.5 3.5L7 10l1.5 1.5L5 14l-1.5-1.5m9.5-6L15 5l3.5 3.5L17 10l1.5 1.5L15 14l-1.5-1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
        
              {/* Headline & description */}
              <div className="text-center space-y-3">
                <h4 className="text-2xl font-bold text-white">Inspire. Innovate. Imagine.</h4>
                <p className="max-w-sm text-sm text-gray-400">
                  Our creative team transforms abstract concepts into stunning visual stories — through precision, style, and imagination.
                </p>
              </div>
            </div>
          </div>
        </EnterpriseCard>

      
        {/* Card 3: Innovative Solutions */}
        <EnterpriseCard
         title="Innovative Solutions"
         description="Merging technology and creativity to supercharge your processes"
        >
         <div className="space-y-5">
           <ul className="space-y-3">
             <li className="flex items-center gap-4 p-3 rounded-lg">
               <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M13 10V3L4 14h7v7l9-11h-7z"
                 />
               </svg>
               <div>
                 <h5 className="font-bold text-white">Smart Analytics</h5>
                 <p className="text-sm text-gray-400">Data insights that drive business growth.</p>
               </div>
             </li>
        
             <li className="flex items-center gap-4 p-3 rounded-lg">
               <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M9 12h6m-3 -3v6m-7 7h14a2 2 0 002 -2V5a2 2 0 00-2 -2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
                 />
               </svg>
               <div>
                 <h5 className="font-bold text-white">Adaptive Tools</h5>
                 <p className="text-sm text-gray-400">Custom solutions built to evolve with your needs.</p>
               </div>
             </li>
        
             <li className="flex items-center gap-4 p-3 rounded-lg">
               <svg className="w-6 h-6 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth={2}
                   d="M5 13l4 4L19 7"
                 />
               </svg>
               <div>
                 <h5 className="font-bold text-white">Growth Catalysts</h5>
                 <p className="text-sm text-gray-400">Strategies that propel your business forward.</p>
               </div>
             </li>
           </ul>
         </div>
        </EnterpriseCard>
        </div>
      </div>
    </section>
  );
});

type FeatureType = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureType> = memo(({ icon, title, description }) => (
  <div className="relative bg-black/80 rounded-3xl p-8 backdrop-blur-lg border border-white/20
                shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
                transition-all duration-300 bg-gradient-to-br from-zinc-900/30 via-transparent to-transparent
                after:absolute after:inset-0 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-500 after:bg-zinc-500/5
                before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-white/20 before:via-white/10 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:blur-sm
                hover:border-white/30">
    <div className="bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center mb-6 relative z-10">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3 relative z-10">{title}</h3>
    <p className="text-gray-400 text-sm relative z-10">{description}</p>
  </div>
));

const Features: React.FC = memo(() => {
  const featuresData: FeatureType[] = useMemo(
    () => [
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
        ),
        title: 'Consultation & Assessment',
        description: 'We start by diving deep into your challenges and current workflows.',
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        ),
        title: 'Customized Strategy',
        description: 'We use AI strategists and Agentic systems to create structured plans perfectly aligned with your goals and brand template.',
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        ),
        title: 'Expert Implementation',
        description: 'We build workflows and automations that blend with your process, and automate them to achieve scale',
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        ),
        title: 'Predictive Analytics',
        description: 'We have audience insight tools and analytics through which we can build actual user personas for more targeting content strategy',
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        ),
        title: 'Multi-platform Workflow',
        description: 'We connect and integrate with existing tools, state-of-the-art models, ensuring brilliant generations using AI.',
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        ),
        title: 'Continuous Improvement',
        description: 'We keep optimizing and fine-tuning the content process to optimize for organic reach and provide regular strategy recommendations.',
      },
    ],
    []
  );

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-zinc-800 rounded-full text-sm mb-6">
            How It Works
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Explore features designed to
            <br />
            enhance your business operations
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Powerful tools designed for today's challenges. Learn more about how
            we can best support your needs — from startups to big companies.
          </p>
        </div>

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map(({ icon, title, description }) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

const Buy: React.FC = memo(() => {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent h-32 top-0 pointer-events-none" />
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <div className="space-y-8 max-w-3xl mx-auto">
          <h2
            className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent
                      bg-gradient-to-r from-white to-gray-300 leading-tight"
          >
            Ready to Transform Your Workflows?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Schedule your consultation today and let us supercharge your operations.
          </p>
          <div className="pt-4">
            <button className="group relative inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:bg-opacity-90 hover:scale-105 hover:shadow-xl hover:shadow-white/20">
              <span className="relative z-10">Book Appointment</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

const ManagedServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="fixed inset-0 bg-black" />
      {/* Background grid overlay */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none" />
      <div className="relative z-10">
        <Navbar />
        <Enterprise />
        <Features />
        <Buy />
        <Footer />
      </div>
    </div>
  );
};

export default ManagedServicesPage;
