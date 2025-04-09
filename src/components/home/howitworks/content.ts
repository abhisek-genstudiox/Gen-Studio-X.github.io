interface Feature {
  icon: string;
  title: string;
  description: string;
  type: 'feature' | 'stat';
}

export const content: Feature[] = [
  {
    icon: "🤖",
    title: 'Smart Sourcing Agents',
    description: 'Built for Daily Creativity Our AI scouts fresh content ideas by fusing your brand’s voice with real-time trends—so you never run dry',
    type: 'feature'
  },
  {
    icon: "❤️",
    title: 'Stories That Speak',
    description: 'Scripts That Connect Great storytelling never goes out of style—our AI scriptwriters help you craft narratives that resonate and perform',
    type: 'feature'
  },
  {
    icon: "🎨",
    title: 'Creative Direction Meets Scalable Production',
    description: 'From concept to creation, we blend human instinct with AI tools to deliver seamless, high-quality content at scale',
    type: 'feature'
  },
  {
    icon: "📊",
    title: 'Make Every View Count',
    description: 'Track Every Outcome We turn content into measurable impact—whether through paid reach or organic growth, we tie it back to ROI',
    type: 'feature'
  }
];

export const stats = content.filter(item => item.type === 'feature');
export const features = content.filter(item => item.type === 'feature'); 