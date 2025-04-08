import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Announcement Banner */}
        <Link
          to="/announcement"
          className="inline-flex items-center px-4 py-2 rounded-full text-sm text-gray-300 bg-gray-800/50 hover:bg-gray-700/50 mb-12 transition-colors"
        >
          Latest seed round announcement.
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Automate and simplify your
          <br />
          workflow with ease
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto">
          Streamline processes and unlock valuable insights effortlessly. Join
          businesses levelling up their operations with our innovative AI tools.
        </p>

        {/* CTA Button */}
        <Link
          to="/template"
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
        >
          Get template
        </Link>
      </div>
    </div>
  );
};

export default Hero; 