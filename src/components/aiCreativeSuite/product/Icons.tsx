import React from 'react';

export const Icons = {
  Chat: React.memo(() => (
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
  )),

  Writing: React.memo(() => (
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
  )),

  Editing: React.memo(() => (
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
  )),

  Citation: React.memo(() => (
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
  )),

  Time: React.memo(() => (
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
  )),

  Integration: React.memo(() => (
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
  )),

  Security: React.memo(() => (
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
  )),

  Analytics: React.memo(() => (
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
  )),
};
