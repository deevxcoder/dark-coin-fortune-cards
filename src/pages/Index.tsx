
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coins, ListFilter } from 'lucide-react';
import Layout from '@/components/Layout';
import PromoSlider from '@/components/PromoSlider';
import RecentWinners from '@/components/RecentWinners';
import Leaderboard from '@/components/Leaderboard';
import RecentResults from '@/components/RecentResults';
import HowItWorks from '@/components/HowItWorks';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <Layout>
      <PromoSlider />
      
      <section className="py-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            Play & Win Big
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl">
            Experience the thrill of gaming on our secure platform with exciting games like Coin Toss and Satta Matka.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-button-gradient" size="lg" asChild>
              <Link to="/coin-toss">
                Play Coin Toss
              </Link>
            </Button>
            <Button className="border border-accent-purple/50 bg-transparent hover:bg-accent-purple/10" size="lg" asChild>
              <Link to="/satta-matka">
                Play Satta Matka
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="game-card">
            <div className="flex items-center mb-4">
              <Coins className="text-accent-purple h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold">Coin Toss</h2>
            </div>
            <p className="text-gray-300 mb-6">
              A simple game of chance. Bet on heads or tails and double your money instantly!
            </p>
            <Button className="w-full bg-button-gradient" asChild>
              <Link to="/coin-toss" className="flex items-center justify-center">
                Play Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="game-card">
            <div className="flex items-center mb-4">
              <ListFilter className="text-accent-magenta h-8 w-8 mr-3" />
              <h2 className="text-2xl font-bold">Satta Matka</h2>
            </div>
            <p className="text-gray-300 mb-6">
              Classic Indian betting game with multiple markets. Select numbers and win up to 90x your bet!
            </p>
            <Button className="w-full bg-button-gradient" asChild>
              <Link to="/satta-matka" className="flex items-center justify-center">
                Play Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <RecentWinners />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Leaderboard />
          <RecentResults />
        </div>
        <HowItWorks />
      </section>
    </Layout>
  );
};

export default Index;
