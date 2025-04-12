
import React from 'react';
import Layout from '@/components/Layout';
import MarketCard from '@/components/MarketCard';

// Sample market data
const markets = [
  {
    id: 'dishawar',
    name: 'Dishawar',
    image: 'https://picsum.photos/id/65/400/300', // placeholder image
    openTime: '09:00 AM',
    closeTime: '11:00 AM',
    remainingTime: '2h 35m',
    lastResult: '45'
  },
  {
    id: 'gali',
    name: 'Gali',
    image: 'https://picsum.photos/id/68/400/300', // placeholder image
    openTime: '11:30 AM',
    closeTime: '01:30 PM',
    remainingTime: '5h 05m',
    lastResult: '78'
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    image: 'https://picsum.photos/id/70/400/300', // placeholder image
    openTime: '03:00 PM',
    closeTime: '05:00 PM',
    remainingTime: '8h 40m',
    lastResult: '23'
  },
  {
    id: 'rajdhani',
    name: 'Rajdhani',
    image: 'https://picsum.photos/id/76/400/300', // placeholder image
    openTime: '06:30 PM',
    closeTime: '08:30 PM',
    remainingTime: '12h 15m',
    lastResult: '92'
  }
];

const SattaMatka = () => {
  return (
    <Layout>
      <div>
        <h1 className="text-3xl font-bold mb-6">Satta Matka</h1>
        
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4 gradient-text">Available Markets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {markets.map(market => (
              <MarketCard
                key={market.id}
                id={market.id}
                name={market.name}
                image={market.image}
                openTime={market.openTime}
                closeTime={market.closeTime}
                remainingTime={market.remainingTime}
                lastResult={market.lastResult}
              />
            ))}
          </div>
        </div>
        
        <div className="game-card">
          <h2 className="text-xl font-bold mb-4">How to Play Satta Matka</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Satta Matka is a popular form of lottery that originated in India. Here's how to play:
            </p>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Choose a market from the available options.</li>
              <li>Select your bet type: Jodi, Hurf, Cross, Odd/Even.</li>
              <li>Place your bet on your chosen numbers.</li>
              <li>Wait for results to be declared.</li>
              <li>Win up to 90x your bet amount!</li>
            </ol>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SattaMatka;
