
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const games = [
  {
    id: 1,
    name: 'Coin Flip',
    description: 'Double your money with 50% winning chance',
    image: '/games/coin-flip.webp'
  },
  {
    id: 2,
    name: 'Crash',
    description: 'Cash out before the multiplier crashes',
    image: '/games/crash.webp'
  },
  // Add more games as needed
];

const Index = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Popular Games
          </h1>
          <p className="text-gray-400 mb-8">
            Choose from our selection of provably fair games
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {games.map(game => (
              <Link key={game.id} to={`/games/${game.name.toLowerCase()}`}>
                <div className="game-card group">
                  <div className="aspect-[4/3] rounded-lg mb-4 overflow-hidden bg-black/50">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{game.name}</h3>
                  <p className="text-sm text-gray-400">{game.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="gradient-border p-6">
            <h2 className="text-2xl font-bold mb-4">Live Bets</h2>
            <div className="space-y-4">
              {/* Live bets will go here */}
              <p className="text-gray-400">No live bets at the moment</p>
            </div>
          </div>

          <div className="gradient-border p-6">
            <h2 className="text-2xl font-bold mb-4">Top Winners</h2>
            <div className="space-y-4">
              {/* Top winners will go here */}
              <p className="text-gray-400">No recent winners</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
