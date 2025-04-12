
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-charcoal border-t border-accent-purple/20 py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold gradient-text">StakeDark</span>
            <p className="text-gray-400 text-sm mt-2">
              © 2025 StakeDark. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-accent-purple transition-colors">
              Terms
            </Link>
            <Link to="/" className="text-gray-400 hover:text-accent-purple transition-colors">
              Privacy
            </Link>
            <Link to="/" className="text-gray-400 hover:text-accent-purple transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
