
import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Menu, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <header className="bg-[#0F1923] border-b border-[#1F2937]/20 p-4 sticky top-0 z-40 backdrop-blur-lg backdrop-saturate-150">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {isMobile && (
            <Button variant="ghost" size="icon" className="text-[#00E701]">
              <Menu className="h-6 w-6" />
            </Button>
          )}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-[#00E701] to-[#00A1FF] bg-clip-text text-transparent">StakeDark</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-[#00E701] transition-colors">
            Home
          </Link>
          <Link to="/coin-toss" className="text-gray-300 hover:text-[#00E701] transition-colors">
            Coin Toss
          </Link>
          <Link to="/satta-matka" className="text-gray-300 hover:text-[#00E701] transition-colors">
            Satta Matka
          </Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative text-gray-300 hover:text-[#00E701]">
            <Bell size={20} />
            <span className="absolute top-0 right-0 w-2 h-2 bg-[#00E701] rounded-full"></span>
          </Button>
          
          <Button className="bg-gradient-to-r from-[#00E701] to-[#00A1FF] text-black font-semibold flex items-center gap-2">
            <Wallet size={16} />
            <span>₹1000.00</span>
          </Button>
          
          <Avatar className="h-8 w-8 hidden md:flex border-2 border-[#00E701]">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-[#1F2937] text-white">
              <User size={16} />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
