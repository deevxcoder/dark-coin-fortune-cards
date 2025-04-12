
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          {/* Hero Section */}
          <section className="space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Welcome to Stake
            </h1>
            <p className="text-muted-foreground">
              The ultimate gaming destination
            </p>
          </section>

          {/* Games Grid */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {games.map(game => (
              <Card key={game.id} className="group overflow-hidden bg-card hover:bg-card/80 transition-colors">
                <div className="p-4">
                  <div className="aspect-[4/3] rounded-lg mb-4 overflow-hidden bg-black/50">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{game.name}</h3>
                  <p className="text-sm text-muted-foreground">{game.description}</p>
                  <Button className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500">
                    Play Now
                  </Button>
                </div>
              </Card>
            ))}
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Total Bets</h3>
              <p className="text-3xl font-bold text-primary">1,234,567</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Total Won</h3>
              <p className="text-3xl font-bold text-green-500">$987,654</p>
            </Card>
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Active Players</h3>
              <p className="text-3xl font-bold text-purple-500">5,432</p>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
