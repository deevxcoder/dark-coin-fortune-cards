
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import PromoSlider from '@/components/PromoSlider';
import RecentWinners from '@/components/RecentWinners';
import Leaderboard from '@/components/Leaderboard';
import RecentResults from '@/components/RecentResults';
import HowItWorks from '@/components/HowItWorks';

const Index = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto space-y-8 px-4">
        <PromoSlider />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/coin-toss" className="group relative overflow-hidden rounded-xl bg-[#1A1F2C] hover:bg-[#1F2937] transition-all duration-300">
            <div className="h-[300px] relative">
              <img 
                src="https://picsum.photos/id/91/800/600" 
                alt="Coin Toss"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-[#0F1923]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold mb-2 text-[#00E701]">Coin Toss</h2>
                <p className="text-gray-300">Quick 50/50 chance to double your money</p>
              </div>
            </div>
          </Link>

          <Link to="/satta-matka" className="group relative overflow-hidden rounded-xl bg-[#1A1F2C] hover:bg-[#1F2937] transition-all duration-300">
            <div className="h-[300px] relative">
              <img 
                src="https://picsum.photos/id/96/800/600" 
                alt="Satta Matka"
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923] via-[#0F1923]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-3xl font-bold mb-2 text-[#00A1FF]">Satta Matka</h2>
                <p className="text-gray-300">Multiple markets with high payouts</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RecentWinners />
          <Leaderboard />
        </div>

        <RecentResults />
        <HowItWorks />
      </div>
    </Layout>
  );
};

export default Index;
