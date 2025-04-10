import React from 'react';

export interface Feature {
  icon: React.ReactNode;
  variant: 'chat' | 'citation' | 'time' | 'integration' | 'security' | 'analytics';
  title: string;
  description: string;
  demo: React.ReactNode;
}
