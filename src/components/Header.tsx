
import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Menu, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-dark-charcoal border-b border-accent-purple/20 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {isMobile && <Menu className="text-accent-purple h-6 w-6" />}
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
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative text-white hover:text-accent-purple">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-accent-magenta rounded-full"></span>
          </Button>
          
          <Button className="bg-button-gradient flex items-center gap-2">
            <Wallet size={16} />
            <span>₹1000.00</span>
          </Button>
          
          <Avatar className="h-8 w-8 hidden md:flex">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-accent-purple/20 text-white">
              <User size={16} />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
