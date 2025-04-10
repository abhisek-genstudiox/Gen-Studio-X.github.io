import React, { useMemo } from 'react';
import Card from './Card';

const ChatIcon: React.FC = React.memo(() => (
  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center ring-1 ring-blue-500/20">
    <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
      />
    </svg>
  </div>
));

const WritingIcon: React.FC = React.memo(() => (
  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center ring-1 ring-emerald-500/20">
    <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      />
    </svg>
  </div>
));

const EditingIcon: React.FC = React.memo(() => (
  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center ring-1 ring-indigo-500/20">
    <svg className="w-7 h-7 text-indigo-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 7.5c0 1.657-1.343 3-3 3S1 9.157 1 7.5 2.343 4.5 4 4.5s3 1.343 3 3zm0 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3zM7 7.5l15 9M7 16.5l15-9"
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
  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center ring-1 ring-orange-500/20">
    <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  </div>
));

const SecurityIcon: React.FC = React.memo(() => (
  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center ring-1 ring-indigo-500/20">
    <svg className="w-6 h-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  </div>
));

const AnalyticsIcon: React.FC = React.memo(() => (
  <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center ring-1 ring-rose-500/20">
    <svg className="w-6 h-6 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    </svg>
  </div>
));

interface Feature {
  icon: React.ReactNode;
  variant: 'chat' | 'citation' | 'time' | 'integration' | 'security' | 'analytics';
  title: string;
  description: string;
  demo: React.ReactNode;
}

// Move the static features array outside the component's render logic.
const FEATURES: Feature[] = [
  {
    icon: <ChatIcon />,
    variant: 'integration',
    title: "Market Insights from Social Signals",
    description: "Tap into social media analytics to uncover emerging trends and understand real customer behaviour",
    demo: (
      <div className="mt-8 space-y-6">
        <div className="text-sm text-blue-400 font-medium flex items-center gap-2">
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
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
  },
  {
    icon: <IntegrationIcon />,
    variant: 'chat',
    title: "Idea Generation",
    description: "See what is trending in your niche",
    demo: (
      <div className="mt-8 space-y-6">
        <div className="bg-black/40 rounded-2xl p-6 space-y-4">
          <div className="flex items-start gap-2">
            <span className="text-xl text-orange-500">✨</span>
            <span className="text-gray-300 text-base">See what is trending in your niche</span>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-base bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
              Generate Report
            </button>
            <button className="px-4 py-2 text-base bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
              Suggest Another Trend
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3 bg-black/40 rounded-xl text-base text-gray-400 hover:bg-black/60 transition-colors cursor-pointer">
          <span>Get Trends For Another Niche</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    )
  },
  {
    icon: <WritingIcon />,
    variant: 'citation',
    title: "Content Creation",
    description: "Effortlessly generate high quality text, images and videos in one place",
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
            <span className="text-sm text-gray-400">Text Generated</span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-300 flex items-center gap-2">
              Struggling with creative block? Not anymore!
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div className="mt-2 space-y-1">
              <div className="text-xs text-gray-500">• Synthesize your vision or idea</div>
              <div className="text-xs text-gray-500">• Generate Tailored narratives</div>
              <div className="text-xs text-gray-500">• Create Stunning Visuals</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
              Implement Hooks
            </button>
            <button className="px-4 py-2 text-xs bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
              Develop the Animations
            </button>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <EditingIcon />,
    variant: 'security',
    title: "Editing & Refinement",
    description: "Polish your content using built-in editing tools for a professional finish.",
    demo: (
      <div className="mt-8 space-y-6">
        <div className="bg-black/40 rounded-2xl p-6 space-y-4">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M9 15L20 4m0 0h-5m5 0v5"
                />
              </svg>
            </div>
            <span className="text-gray-300 text-base">Editing Tools</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-black/40 rounded-xl p-3">
              <div className="text-sm text-gray-300">Grammar Check</div>
              <div className="text-xs text-gray-500">Advanced AI</div>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-xs text-indigo-400">Active</span>
              </div>
            </div>
            <div className="bg-black/40 rounded-xl p-3">
              <div className="text-sm text-gray-300">Style Guide</div>
              <div className="text-xs text-gray-500">Customizable</div>
              <div className="mt-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-xs text-indigo-400">Enabled</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-black/40 rounded-lg text-sm text-indigo-400">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <span>Quick Edit Mode</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <TimeIcon />,
    variant: 'time',
    title: "Scheduling & Publishing",
    description: "Automate and optimize your publishing process with our smart content calendar.",
    demo: (
      <div className="mt-8 space-y-6">
        <div className="bg-black/40 rounded-2xl p-4 space-y-4">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
            <span className="text-sm text-gray-400">Time split</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-sm text-gray-300">Animation</div>
              <div className="text-xs text-gray-500">8 hours</div>
            </div>
            <div>
              <div className="text-sm text-gray-300">Story</div>
              <div className="text-xs text-gray-500">2  hours</div>
            </div>
            <div>
              <div className="text-sm text-gray-300">Video Editing</div>
              <div className="text-xs text-gray-500">12 hour</div>
            </div>
          </div>
          <div className="pt-2 border-t border-gray-800">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-300">Branding All-Hands</span>
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
    icon: <AnalyticsIcon />,
    variant: 'analytics',
    title: "Optimization and Analytics",
    description: "Track performance, refine strategies, and continuously optimize your engagement",
    demo: (
      <div className="mt-8 space-y-6">
        <div className="bg-black/40 rounded-2xl p-6 space-y-4">
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <span className="text-gray-300 text-base">Performance overview</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="group bg-black/40 rounded-xl p-4 hover:bg-black/60 transition-all duration-300 border border-gray-800/50 hover:border-rose-500/20">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-300">Users</div>
                <div className="text-xs font-semibold text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full">+24%</div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-rose-400 font-medium">Growing</span>
              </div>
              <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full"></div>
              </div>
            </div>
            <div className="group bg-black/40 rounded-xl p-4 hover:bg-black/60 transition-all duration-300 border border-gray-800/50 hover:border-rose-500/20">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-300">Engagement</div>
                <div className="text-xs font-semibold text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full">+18%</div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-rose-400 font-medium">Active</span>
              </div>
              <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full"></div>
              </div>
            </div>
            <div className="group bg-black/40 rounded-xl p-4 hover:bg-black/60 transition-all duration-300 border border-gray-800/50 hover:border-rose-500/20">
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-gray-300">Revenue</div>
                <div className="text-xs font-semibold text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full">+32%</div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-rose-400 font-medium">Trending</span>
              </div>
              <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-rose-500 to-rose-600 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-black/40 rounded-lg text-sm text-rose-400">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>View detailed report</span>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-base bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
              Export data
            </button>
            <button className="px-4 py-2 text-base bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
              Customize
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3 bg-black/40 rounded-xl text-base text-gray-400 hover:bg-black/60 transition-colors cursor-pointer">
          <span>Generate new report</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
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
    <div className="bg-black py-16 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-8 lg:px-12">
        {featureCards}
      </div>
    </div>
  );
};

export default React.memo(CardGrid);
