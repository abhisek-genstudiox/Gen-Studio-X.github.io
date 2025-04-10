// src/pages/ManagedServicesPage.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ManagedServicesPage = () => {
  /*
   * Enterprise Section
   * This section highlights our expertise with three cards.
   */
  const Enterprise = () => {
    // A variant card for the Enterprise section.
    const EnterpriseCard = ({
      title,
      description,
      children,
    }: {
      title: string;
      description: string;
      children?: React.ReactNode;
    }) => (
      <div className="bg-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        {children}
      </div>
    );

    return (
      <section className="bg-black py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl sm:text-6xl mb-8 bg-gradient-to-b from-white to-gray-300
              bg-clip-text text-transparent leading-[1.1] font-display"
            >
              Managed Services
            </h1>
            <p className="text-lg text-gray-400/90 max-w-xl mx-auto whitespace-nowrap">
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
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between bg-zinc-800 rounded-lg p-4 hover:bg-zinc-700">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-zinc-700 rounded">📄</span>
                    <div>
                      <div className="flex items-center gap-2">
                        Try the latest model
                        <span className="text-xs bg-purple-500 px-2 py-0.5 rounded">MODEL-3</span>
                      </div>
                      <div className="text-sm text-gray-400">Use our latest LLM model</div>
                    </div>
                  </div>
                  <span>→</span>
                </button>
                <button className="w-full flex items-center justify-between bg-zinc-800 rounded-lg p-4 hover:bg-zinc-700">
                  <div className="flex items-center gap-3">
                    <span className="p-2 bg-zinc-700 rounded">✨</span>
                    <div>
                      <div className="flex items-center gap-2">
                        Create new asset
                        <span className="text-xs bg-emerald-500 px-2 py-0.5 rounded">NEW</span>
                      </div>
                      <div className="text-sm text-gray-400">Upload or manage creations</div>
                    </div>
                  </div>
                  <span>→</span>
                </button>
              </div>
            </EnterpriseCard>

            {/* Card 2: Creative Vision */}
            <EnterpriseCard
              title="Creative Vision"
              description="Crafting strategies and content that captivate and inspire"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-zinc-800 p-3 rounded-full">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                        />
                      </svg>
                    </div>
                    <div className="bg-zinc-800 p-3 rounded-full">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <div className="bg-zinc-800 p-3 rounded-full">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </EnterpriseCard>

            {/* Card 3: Innovative Solutions */}
            <EnterpriseCard
              title="Innovative Solutions"
              description="Merging technology and creativity to supercharge your processes"
            >
              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700">
                    <span>📝</span> Edit page
                  </button>
                  <button className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700">
                    <span>🎙️</span> Transcribe voiceclips
                  </button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700">
                    <span>💻</span> Simplify code
                  </button>
                  <button className="flex items-center gap-2 bg-zinc-800 px-4 py-2 rounded-lg hover:bg-zinc-700">
                    <span>✨</span> Improve slides
                  </button>
                </div>
              </div>
            </EnterpriseCard>
          </div>
        </div>
      </section>
    );
  };

  /*
   * Features Section
   * This section explains how the service works using a set of cards generated
   * from a data array.
   */
  const Features = () => {
    type FeatureType = {
      icon: React.ReactNode;
      title: string;
      description: string;
    };

    const featuresData: FeatureType[] = [
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
        description: 'Our experts design a bespoke plan perfectly aligned with your goals.',
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
        description: 'Our tech and creative teams unite to bring your vision to life.',
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
        description: 'Anticipate trends with AI models, helping you make informed decisions.',
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
        description: 'Connect with existing tools, ensuring smooth workflows and collaboration.',
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
        description: 'We keep optimizing and fine-tuning to ensure lasting success.',
      },
    ];

    // Reusable FeatureCard for the Features section.
    const FeatureCard = ({
      icon,
      title,
      description,
    }: {
      icon: React.ReactNode;
      title: string;
      description: string;
    }) => (
      <div className="bg-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm">
        <div className="bg-zinc-800 w-10 h-10 rounded-full flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
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
  };

  /*
   * Buy Section (Call-to-Action)
   */
  const Buy = () => {
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
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
