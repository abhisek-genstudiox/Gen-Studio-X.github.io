import React from 'react';
import { Feature } from './types';
import { Icons } from './Icons';

export const FEATURES: Feature[] = [
  {
    icon: <Icons.Chat />,
    variant: 'integration',
    title: "Market Insights from Social Signals",
    description: "Tap into social media analytics to uncover emerging trends and understand real customer behaviour",
    demo: (
      <div className="mt-4 space-y-4">
        <div className="flex items-center gap-2 text-sm text-blue-400 font-medium">
          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <span>CONNECTING</span>
        </div>
        <div className="grid grid-cols-5 gap-3">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="relative group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <button className="relative w-12 h-12 rounded-full bg-black/40 ring-1 ring-gray-800 flex items-center justify-center hover:ring-blue-500/50 transition-all">
                <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor">
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
    icon: <Icons.Integration />,
    variant: 'chat',
    title: "Idea Generation",
    description: "Our Al content strategist generates creative ideas tailored to your brand.",
    demo: (
      <div className="mt-4 space-y-4">
        <div className="bg-black/40 rounded-2xl p-4 space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-xl text-orange-500">✨</span>
            <span className="text-gray-300 text-base">Create a script</span>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-base bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
            Modify the script
            </button>
            <button className="px-4 py-2 text-base bg-black/40 rounded-lg hover:bg-black/60 text-gray-300 transition-colors ring-1 ring-gray-800">
            Blend my insight
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between px-4 py-3 bg-black/40 rounded-xl text-base text-gray-400 hover:bg-black/60 transition-colors cursor-pointer">
          <span>Get More Ideas</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    )
  },
  {
    icon: <Icons.Writing />,
    variant: 'citation',
    title: "Content Creation",
    description: "Effortlessly generate high quality text, images and videos in one place",
    demo: (
      <div className="mt-4 space-y-4">
        <div className="relative">
          <div className="bg-black/40 rounded-2xl p-3 text-sm text-gray-300 flex items-center gap-2">
            <span>Experience the <span className="text-emerald-400">enchanting magic</span> of AI</span>
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <span className="block w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
            </div>
          </div>
        </div>
        <div className="bg-black/40 rounded-2xl p-3 space-y-3">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-xs text-gray-400">Text Generated</span>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-gray-300">
              <span>Struggling with creative block? Not anymore!</span>
              <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            <div className="mt-2 space-y-1 text-xs text-gray-500">
              <p>• Synthesize your vision or idea</p>
              <p>• Generate Tailored narratives</p>
              <p>• Create Stunning Visuals</p>
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
    icon: <Icons.Editing />,
    variant: 'security',
    title: "Editing & Refinement",
    description: "Polish your content using built-in editing tools for a professional finish.",
    demo: (
      <div className="mt-4 space-y-4">
        <div className="bg-black/40 rounded-2xl p-4 space-y-4">
          <div className="flex items-center gap-2">
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
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/40 rounded-xl p-3">
              <div className="text-sm text-gray-300">Grammar Check</div>
              <div className="text-xs text-gray-500">Advanced AI</div>
              <div className="mt-2 flex items-center gap-1">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-xs text-indigo-400">Active</span>
              </div>
            </div>
            <div className="bg-black/40 rounded-xl p-3">
              <div className="text-sm text-gray-300">Style Guide</div>
              <div className="text-xs text-gray-500">Customizable</div>
              <div className="mt-2 flex items-center gap-1">
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
    icon: <Icons.Time />,
    variant: 'time',
    title: "Scheduling & Publishing",
    description: "Automate and optimize your publishing process with our smart content calendar.",
    demo: (
      <div className="mt-4 space-y-4">
        <div className="bg-black/40 rounded-2xl p-4 space-y-4">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
            <span className="text-sm text-gray-400">Time split</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="text-sm text-gray-300">Animation</div>
              <div className="text-xs text-gray-500">8 hours</div>
            </div>
            <div>
              <div className="text-sm text-gray-300">Story</div>
              <div className="text-xs text-gray-500">2 hours</div>
            </div>
            <div>
              <div className="text-sm text-gray-300">Video Editing</div>
              <div className="text-xs text-gray-500">12 hours</div>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span>Analysing time</span>
          </div>
        </div>
      </div>
    )
  },
  {
    icon: <Icons.Analytics />,
    variant: 'analytics',
    title: "Optimization and Analytics",
    description: "Track performance, refine strategies, and continuously optimize your engagement",
    demo: (
      <div className="mt-4 space-y-4">
        <div className="bg-black/40 rounded-2xl p-4 space-y-4">
          <div className="flex items-center gap-2">
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
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Users', change: '+24%', level: '3/4', status: 'Growing' },
              { label: 'Engagement', change: '+18%', level: '2/3', status: 'Active' },
              { label: 'Revenue', change: '+32%', level: '4/5', status: 'Trending' },
            ].map(({ label, change, level, status }, index) => (
              <div
                key={index}
                className="group bg-black/40 rounded-xl p-3 transition-all duration-300 border border-gray-800/50 hover:border-rose-500/20"
              >
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-300">{label}</div>
                  <div className="text-xs font-semibold text-rose-400 bg-rose-500/10 px-2 py-1 rounded-full">{change}</div>
                </div>
                <div className="mt-3 flex items-center gap-1">
                  <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-rose-400 font-medium">{status}</span>
                </div>
                <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div className={`h-full w-${level} bg-gradient-to-r from-rose-500 to-rose-600 rounded-full`}></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-black/40 rounded-lg text-sm text-rose-400">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
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
