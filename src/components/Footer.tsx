
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F1923] border-t border-[#1F2937]/20 py-6 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-gradient-to-r from-[#00E701] to-[#00A1FF] bg-clip-text text-transparent">
              StakeDark
            </span>
            <p className="text-gray-400 text-sm mt-2">
              © 2025 StakeDark. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-[#00E701] transition-colors">
              Terms
            </Link>
            <Link to="/" className="text-gray-400 hover:text-[#00E701] transition-colors">
              Privacy
            </Link>
            <Link to="/" className="text-gray-400 hover:text-[#00E701] transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
