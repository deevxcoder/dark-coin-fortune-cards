
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coin Toss Card */}
          <Link to="/coin-toss" className="group">
            <div className="game-card h-[300px] relative overflow-hidden">
              <img 
                src="https://picsum.photos/id/91/800/600" 
                alt="Coin Toss"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold mb-2">Coin Toss</h2>
                <p className="text-gray-300">Quick 50/50 chance to double your money</p>
              </div>
            </div>
          </Link>

          {/* Satta Matka Card */}
          <Link to="/satta-matka" className="group">
            <div className="game-card h-[300px] relative overflow-hidden">
              <img 
                src="https://picsum.photos/id/96/800/600" 
                alt="Satta Matka"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold mb-2">Satta Matka</h2>
                <p className="text-gray-300">Multiple markets with high payouts</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
