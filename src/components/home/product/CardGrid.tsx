import React, { useMemo } from 'react';
import Card from './Card';

const ChatIcon: React.FC = React.memo(() => (
  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center ring-1 ring-orange-500/20">
    <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      />
    </svg>
  </div>
));

const CitationIcon: React.FC = React.memo(() => (
  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center ring-1 ring-emerald-500/20">
    <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
      />
    </svg>
  </div>
));

const TimeIcon: React.FC = React.memo(() => (
  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center ring-1 ring-purple-500/20">
    <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  </div>
));

const IntegrationIcon: React.FC = React.memo(() => (
  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center ring-1 ring-blue-500/20">
    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  </div>
));

interface Feature {
  icon: React.ReactNode;
  variant: 'chat' | 'citation' | 'time' | 'integration';
  title: string;
  description: string;
  demo: React.ReactNode;
}

// Move the static features array outside the component's render logic.
const FEATURES: Feature[] = [
  {
    icon: <ChatIcon />,
    variant: 'chat',
    title: "Chat that grows with you",
    description: "Our AI chatbot adapts to every interaction, with smarter responses with every conversation — when you need it.",
    demo: (
      <div className="mt-8 space-y-6">
        <div className="bg-black/40 rounded-2xl p-6 space-y-4">
          <div className="flex items-start gap-2">
            <span className="text-xl text-orange-500">✨</span>
            <span className="text-gray-300 text-base">Tell me about the latest pipelines.</span>
          </div>
          <p className="text-gray-400 text-base">
            AI pipelines are essential for building robust, scalable, and efficient AI systems. By automating each step from data
          </p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-base bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
              Add details
            </button>
            <button className="px-4 py-2 text-base bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
              Suggest something else
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3 bg-black/40 rounded-xl text-base text-gray-400 hover:bg-black/60 transition-colors cursor-pointer">
          <span>Ask another question</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    )
  },
  {
    icon: <CitationIcon />,
    variant: 'citation',
    title: "Built-in smart citations",
    description: "Effortlessly generate accurate, real-time references to back up your data, insights, and research with minimal effort.",
    demo: (
      <div className="mt-8 space-y-6">
        <div className="relative">
          <div className="bg-black/40 rounded-2xl p-4 text-sm text-gray-300 flex items-center gap-2">
            Experience the <span className="text-emerald-400">enchanting magic</span> of AI
            <div className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center">
              <span className="block w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>
        <div className="bg-black/40 rounded-2xl p-4 space-y-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm text-gray-400">Suggested citation</span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-300 flex items-center gap-2">
              LLM transformer models
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div className="mt-2 space-y-1">
              <div className="text-xs text-gray-500">• MIT, PhD</div>
              <div className="text-xs text-gray-500">• John Umbridge</div>
              <div className="text-xs text-gray-500">• c. 2022</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
              Most cited
            </button>
            <button className="px-4 py-2 text-xs bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
              Latest
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <TimeIcon />,
    variant: 'time',
    title: "Intelligent time management",
    description: "Optimize your schedule with AI-powered suggestions, ensuring you prioritize tasks and make the most of every minute.",
    demo: (
      <div className="mt-8 space-y-6">
        <div className="bg-black/40 rounded-2xl p-4 space-y-4">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
            <span className="text-sm text-gray-400">Time spent</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-gray-300">Meetings</div>
              <div className="text-xs text-gray-500">4 hours</div>
            </div>
            <div>
              <div className="text-sm text-gray-300">Personal</div>
              <div className="text-xs text-gray-500">2 hours</div>
            </div>
            <div>
              <div className="text-sm text-gray-300">Blocked</div>
              <div className="text-xs text-gray-500">1 hour</div>
            </div>
          </div>
          <div className="pt-2 border-t border-gray-800">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-300">Engineering All-Hands</span>
              <span className="text-gray-500">Today 1:00pm</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-black/40 rounded-lg text-sm text-purple-400">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>Analysing time</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <IntegrationIcon />,
    variant: 'integration',
    title: "Seamless integrations",
    description: "Enhancing workflows with other powerful automation tools and insights.",
    demo: (
      <div className="mt-8 space-y-6">
        <div className="text-sm text-blue-400 font-medium flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          CONNECTING
        </div>
        <div className="grid grid-cols-5 gap-3">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <button className="relative w-12 h-12 rounded-full bg-black/40 ring-1 ring-gray-800 flex items-center justify-center hover:ring-blue-500/50 transition-all">
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    )
  }
];

const CardGrid: React.FC = () => {
  const featureCards = useMemo(
    () =>
      FEATURES.map((feature, index) => (
        <Card key={index} variant={feature.variant}>
          <div className="space-y-4">
            <div className="space-y-4">
              {feature.icon}
              <div>
                <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                <p className="mt-2 text-base text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            </div>
            {feature.demo}
          </div>
        </Card>
      )),
    []
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 lg:px-8">
      {featureCards}
    </div>
  );
};

export default React.memo(CardGrid);
