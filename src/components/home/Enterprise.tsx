import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, children }) => (
  <div className="bg-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm">
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-400 mb-6">{description}</p>
    {children}
  </div>
);

const Enterprise: React.FC = () => {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-4xl font-medium tracking-tight sm:text-6xl mb-8
            bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent
            leading-[1.1] font-display">
            Managed Services
          </div>
          <p className="text-lg leading-8 text-gray-400/90 max-w-xl mx-auto whitespace-nowrap text-center">
            Transforming your workflows into masterpieces with technical and creative genius
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-block px-4 py-1.5 bg-zinc-800 rounded-full text-sm">
            Our Expertise
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
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
          </FeatureCard>

          <FeatureCard
            title="Creative Vision"
            description="Crafting strategies and content that captivate and inspire"
          >
            <div className="relative h-48">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-zinc-800 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <div className="bg-zinc-800 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div className="bg-zinc-800 p-3 rounded-full">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          <FeatureCard
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
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

export default React.memo(Enterprise); 