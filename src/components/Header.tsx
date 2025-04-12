
import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-dark-charcoal border-b border-accent-purple/20 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Menu className="text-accent-purple h-6 w-6 md:hidden" />
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold gradient-text">StakeDark</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-accent-purple transition-colors">
            Home
          </Link>
          <Link to="/coin-toss" className="text-white hover:text-accent-purple transition-colors">
            Coin Toss
          </Link>
          <Link to="/satta-matka" className="text-white hover:text-accent-purple transition-colors">
            Satta Matka
          </Link>
        </nav>
        
        <Button className="bg-button-gradient flex items-center gap-2">
          <Wallet size={16} />
          <span>₹1000.00</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
