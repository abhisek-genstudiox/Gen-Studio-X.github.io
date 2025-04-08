import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800/50 hover:border-zinc-700/50 transition-colors">
      <button
        className="w-full py-6 flex justify-between items-center text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium group-hover:text-white/90 transition-colors">{question}</span>
        <svg
          className={`w-6 h-6 transform transition-all duration-300 text-gray-400 group-hover:text-white ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-6 text-gray-400">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is your refund policy for dissatisfied customers?",
      answer: "We offer a 30-day money-back guarantee on all plans to ensure your satisfaction."
    },
    {
      question: "Can I easily upgrade my plan later on?",
      answer: "Absolutely! You can upgrade at any time with no hassle, ensuring flexibility as you grow."
    },
    {
      question: "Is there a free trial available for new users?",
      answer: "Yes, we offer a 14-day free trial with full access to all features and capabilities."
    },
    {
      question: "What kind of support do you offer for users?",
      answer: "Our dedicated team is available 24/7 via chat, email, and phone to assist you with any questions."
    },
    {
      question: "How secure is my data within your platform?",
      answer: "We prioritize your security with advanced encryption and regular audits to protect your information."
    }
  ];

  return (
    <section className="relative">
      <div className="bg-black pt-24 pb-48">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-zinc-800/80 rounded-full text-sm mb-6 backdrop-blur-sm">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              Common questions — answered
            </h2>
          </div>
          <div className="space-y-0 relative">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />
    </section>
  );
};

export default React.memo(FAQ); 