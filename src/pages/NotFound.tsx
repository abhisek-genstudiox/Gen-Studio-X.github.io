import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center bg-black text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center p-8">
        <h1 className="text-6xl font-bold mb-4 text-[#E6C88C]">404</h1>
        <p className="text-2xl mb-8">Oops! Page not found</p>
        <Link 
          to="/" 
          className="inline-block bg-[#E6C88C] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#E6C88C]/90 transition-colors duration-300"
        >
          Return to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFound;
