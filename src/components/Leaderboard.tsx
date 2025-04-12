
import React from 'react';
import { Medal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const leaderboardData = [
  { id: 1, name: 'Vikram S.', winnings: '₹125,000', position: 1 },
  { id: 2, name: 'Ananya P.', winnings: '₹75,000', position: 2 },
  { id: 3, name: 'Rajesh K.', winnings: '₹50,000', position: 3 }
];

const Leaderboard: React.FC = () => {
  return (
    <div className="market-card mb-12">
      <div className="flex items-center mb-4">
        <Medal className="text-accent-purple h-6 w-6 mr-3" />
        <h2 className="text-xl font-bold">Top Players</h2>
      </div>
      <div className="flex flex-col space-y-4">
        {leaderboardData.map((player) => (
          <div key={player.id} className="flex items-center justify-between p-3 bg-dark-charcoal rounded-lg">
            <div className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 
                ${player.position === 1 ? 'bg-yellow-500/20 text-yellow-500' : 
                  player.position === 2 ? 'bg-gray-400/20 text-gray-400' : 
                  'bg-amber-700/20 text-amber-700'}`}>
                {player.position}
              </div>
              <Avatar className="h-8 w-8 mr-3">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-accent-purple/10">
                  {player.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <span>{player.name}</span>
            </div>
            <span className="text-accent-purple font-medium">{player.winnings}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
