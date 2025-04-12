
import React from 'react';
import { Trophy } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

const winners = [
  { id: 1, name: 'Rahul S.', game: 'Coin Toss', amount: '₹2,500', time: '5 mins ago' },
  { id: 2, name: 'Priya M.', game: 'Satta Matka', amount: '₹15,000', time: '20 mins ago' },
  { id: 3, name: 'Amit K.', game: 'Coin Toss', amount: '₹5,000', time: '45 mins ago' },
  { id: 4, name: 'Neha T.', game: 'Satta Matka', amount: '₹9,500', time: '1 hour ago' }
];

const RecentWinners: React.FC = () => {
  return (
    <div className="market-card mb-12">
      <div className="flex items-center mb-4">
        <Trophy className="text-accent-purple h-6 w-6 mr-3" />
        <h2 className="text-xl font-bold">Recent Winners</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Player</TableHead>
            <TableHead>Game</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {winners.map((winner) => (
            <TableRow key={winner.id}>
              <TableCell className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback className="bg-accent-purple/10 text-xs">
                    {winner.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                {winner.name}
              </TableCell>
              <TableCell>{winner.game}</TableCell>
              <TableCell className="text-accent-purple">{winner.amount}</TableCell>
              <TableCell className="text-gray-400">{winner.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentWinners;
