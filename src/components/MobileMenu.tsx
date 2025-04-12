
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Coins, ListFilter, User } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileMenu: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  if (!isMobile) return null;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-charcoal border-t border-accent-purple/20 z-50 md:hidden">
      <div className="flex justify-around items-center h-16 px-4">
        <Link 
          to="/" 
          className={`flex flex-col items-center ${location.pathname === '/' ? 'text-accent-purple' : 'text-gray-400'}`}
        >
          <Home size={20} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link 
          to="/coin-toss" 
          className={`flex flex-col items-center ${location.pathname === '/coin-toss' ? 'text-accent-purple' : 'text-gray-400'}`}
        >
          <Coins size={20} />
          <span className="text-xs mt-1">Coin Toss</span>
        </Link>
        <Link 
          to="/satta-matka" 
          className={`flex flex-col items-center ${location.pathname === '/satta-matka' ? 'text-accent-purple' : 'text-gray-400'}`}
        >
          <ListFilter size={20} />
          <span className="text-xs mt-1">Satta Matka</span>
        </Link>
        <Link 
          to="/" 
          className="flex flex-col items-center text-gray-400"
        >
          <User size={20} />
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
