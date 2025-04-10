import React, { useState } from 'react';

interface PricingPlanProps {
  name: string;
  price: number;
  period: 'month' | 'year';
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingPlan: React.FC<PricingPlanProps> = ({
  name,
  price,
  period,
  description,
  features,
  isPopular,
}) => (
  <div className="bg-zinc-900/50 rounded-2xl p-8 backdrop-blur-sm relative">
    {isPopular && (
      <div className="absolute -top-3 right-8">
        <div className="bg-emerald-900/60 text-emerald-400 px-3 py-1 rounded-full text-xs">
          MOST POPULAR
        </div>
      </div>
    )}
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{name}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-5xl font-bold">${price}</span>
        <span className="text-gray-400 ml-2">/{period}</span>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
    <div className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start">
          <svg
            className="w-5 h-5 text-gray-400 mr-3 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-gray-300 text-sm">{feature}</span>
        </div>
      ))}
    </div>
    <button className="w-full py-3 px-4 bg-zinc-800 hover:bg-zinc-700 transition-colors rounded-lg text-sm font-medium">
      Get started
    </button>
    <p className="text-center text-xs text-gray-500 mt-4">One-time payment only.</p>
  </div>
);

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('year');

  const plans = {
    basic: {
      name: 'Basic',
      prices: { month: 0, year: 0 },
      description: 'Ideal for startups looking to streamline processes and gain valuable insights.',
      features: [
        'Access to core AI tools',
        'Basic analytics and reporting',
        'Email support',
        'Community forum access',
      ],
    },
    pro: {
      name: 'Pro',
      prices: { month: 20, year: 199 },
      description: 'Perfect for growing teams that need advanced features and support.',
      features: [
        'All Basic Plan features',
        'Enhanced analytics and insights',
        'Priority email support',
        'Integration with popular apps',
      ],
      isPopular: true,
    },
    enterprise: {
      name: 'Enterprise',
      prices: { month: 49, year: 549 },
      description: 'Custom solutions designed specifically for large organizations with unique needs.',
      features: [
        'All Pro Plan features',
        'Dedicated account manager',
        'Customizable workflows',
        'Comprehensive training and support',
      ],
    },
  };

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-zinc-800 rounded-full text-sm mb-6">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose the plan that fits your<br />business needs. Get your free trial.
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-zinc-900/50 rounded-full p-1 inline-flex">
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'year'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('year')}
            >
              Annual
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === 'month'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('month')}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Object.entries(plans).map(([key, plan]) => (
            <PricingPlan
              key={key}
              name={plan.name}
              price={plan.prices[billingPeriod]}
              period={billingPeriod}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Pricing); 