
import React from 'react';
import { Clock, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MarketCardProps {
  id: string;
  name: string;
  image: string;
  openTime: string;
  closeTime: string;
  remainingTime: string;
  lastResult: string;
}

const MarketCard: React.FC<MarketCardProps> = ({
  id,
  name,
  image,
  openTime,
  closeTime,
  remainingTime,
  lastResult
}) => {
  return (
    <Link to={`/satta-matka/${id}`} className="block">
      <div className="market-card h-full">
        <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-purple/80"></div>
          <div className="absolute bottom-0 left-0 w-full p-3">
            <h3 className="text-xl font-bold text-white">{name}</h3>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-300">
              <Clock className="h-4 w-4 mr-1" />
              <span>Open: {openTime}</span>
            </div>
            <div className="flex items-center text-sm text-gray-300">
              <Clock className="h-4 w-4 mr-1" />
              <span>Close: {closeTime}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-green-400">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{remainingTime}</span>
            </div>
            <div className="px-3 py-1 bg-dark-charcoal rounded-full border border-accent-purple/30">
              <span className="text-sm font-medium">Last: {lastResult}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MarketCard;
