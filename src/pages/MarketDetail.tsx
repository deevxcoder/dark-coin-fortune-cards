
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

// Sample market data
const markets = {
  'dishawar': {
    name: 'Dishawar',
    image: 'https://picsum.photos/id/65/800/400',
    openTime: '09:00 AM',
    closeTime: '11:00 AM',
    remainingTime: '2h 35m',
    lastResult: '45'
  },
  'gali': {
    name: 'Gali',
    image: 'https://picsum.photos/id/68/800/400',
    openTime: '11:30 AM',
    closeTime: '01:30 PM',
    remainingTime: '5h 05m',
    lastResult: '78'
  },
  'mumbai': {
    name: 'Mumbai',
    image: 'https://picsum.photos/id/70/800/400',
    openTime: '03:00 PM',
    closeTime: '05:00 PM',
    remainingTime: '8h 40m',
    lastResult: '23'
  },
  'rajdhani': {
    name: 'Rajdhani',
    image: 'https://picsum.photos/id/76/800/400',
    openTime: '06:30 PM',
    closeTime: '08:30 PM',
    remainingTime: '12h 15m',
    lastResult: '92'
  }
};

const MarketDetail = () => {
  const { marketId } = useParams<{ marketId: string }>();
  const market = marketId && markets[marketId as keyof typeof markets];
  
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [betAmount, setBetAmount] = useState<number>(10);
  
  if (!market) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold mb-4">Market not found</h2>
          <Link to="/satta-matka" className="text-accent-purple underline">
            Back to Satta Matka
          </Link>
        </div>
      </Layout>
    );
  }
  
  const toggleNumberSelection = (num: number) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== num));
    } else {
      setSelectedNumbers([...selectedNumbers, num]);
    }
  };
  
  const handleAmountChange = (amount: number) => {
    if (amount >= 10 && amount <= 1000) {
      setBetAmount(amount);
    }
  };
  
  const placeBet = () => {
    if (selectedNumbers.length === 0) return;
    // Placeholder for bet submission logic
    console.log({
      market: marketId,
      numbers: selectedNumbers,
      amount: betAmount
    });
    // Reset after bet
    setSelectedNumbers([]);
  };
  
  return (
    <Layout>
      <div className="mb-4">
        <Link to="/satta-matka" className="flex items-center text-accent-purple hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Markets
        </Link>
      </div>
      
      <div className="game-card mb-8">
        <div className="relative h-48 md:h-64 -mx-4 -mt-4 mb-4 rounded-t-xl overflow-hidden">
          <img 
            src={market.image}
            alt={market.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-purple/90"></div>
          <div className="absolute bottom-0 left-0 w-full p-4">
            <h1 className="text-3xl font-bold text-white">{market.name}</h1>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-dark-charcoal p-3 rounded-lg border border-accent-purple/20">
            <p className="text-sm text-gray-400">Open Time</p>
            <div className="flex items-center mt-1">
              <Clock className="h-4 w-4 mr-1 text-accent-purple" />
              <span className="font-medium">{market.openTime}</span>
            </div>
          </div>
          
          <div className="bg-dark-charcoal p-3 rounded-lg border border-accent-purple/20">
            <p className="text-sm text-gray-400">Close Time</p>
            <div className="flex items-center mt-1">
              <Clock className="h-4 w-4 mr-1 text-accent-purple" />
              <span className="font-medium">{market.closeTime}</span>
            </div>
          </div>
          
          <div className="bg-dark-charcoal p-3 rounded-lg border border-accent-purple/20">
            <p className="text-sm text-gray-400">Remaining Time</p>
            <div className="flex items-center mt-1">
              <Calendar className="h-4 w-4 mr-1 text-green-400" />
              <span className="font-medium text-green-400">{market.remainingTime}</span>
            </div>
          </div>
          
          <div className="bg-dark-charcoal p-3 rounded-lg border border-accent-purple/20">
            <p className="text-sm text-gray-400">Last Result</p>
            <p className="font-medium text-xl mt-1">{market.lastResult}</p>
          </div>
        </div>
        
        <Tabs defaultValue="jodi">
          <TabsList className="grid grid-cols-4 mb-6">
            <TabsTrigger value="jodi">Jodi</TabsTrigger>
            <TabsTrigger value="hurf">Hurf</TabsTrigger>
            <TabsTrigger value="cross">Cross</TabsTrigger>
            <TabsTrigger value="oddeven">Odd/Even</TabsTrigger>
          </TabsList>
          
          <TabsContent value="jodi">
            <div>
              <h3 className="text-lg font-medium mb-4">Select Jodi (00-99)</h3>
              
              <ScrollArea className="h-64 mb-6">
                <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 gap-2 p-1">
                  {Array.from({ length: 100 }, (_, i) => {
                    const num = i.toString().padStart(2, '0');
                    const isSelected = selectedNumbers.includes(i);
                    
                    return (
                      <button
                        key={i}
                        className={`number-box ${isSelected ? 'active-number' : ''}`}
                        onClick={() => toggleNumberSelection(i)}
                      >
                        {num}
                      </button>
                    );
                  })}
                </div>
              </ScrollArea>
              
              <div className="mb-6">
                <p className="text-gray-300 mb-2">Bet Amount</p>
                <div className="flex items-center">
                  <Button 
                    className="bg-dark-charcoal h-12 w-12" 
                    onClick={() => handleAmountChange(betAmount - 10)}
                    disabled={betAmount <= 10}
                  >
                    -
                  </Button>
                  <div className="mx-4 flex-1 bg-dark-charcoal rounded-md h-12 flex items-center justify-center border border-accent-purple/20">
                    <span className="text-xl font-bold">₹{betAmount}</span>
                  </div>
                  <Button 
                    className="bg-dark-charcoal h-12 w-12" 
                    onClick={() => handleAmountChange(betAmount + 10)}
                    disabled={betAmount >= 1000}
                  >
                    +
                  </Button>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-2">
                  {[10, 50, 100, 500].map(amount => (
                    <Button 
                      key={amount} 
                      className="bg-dark-charcoal border border-accent-purple/20"
                      onClick={() => handleAmountChange(amount)}
                    >
                      ₹{amount}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-400">Selected: {selectedNumbers.length} numbers</p>
                  <p className="text-sm text-gray-400">Total Amount: ₹{betAmount * selectedNumbers.length}</p>
                </div>
                <Button 
                  className="bg-button-gradient"
                  disabled={selectedNumbers.length === 0}
                  onClick={placeBet}
                >
                  Place Bet
                </Button>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="hurf">
            <div className="text-center py-6">
              <h3 className="text-lg font-medium mb-2">Hurf Betting</h3>
              <p className="text-gray-400">Select single digits (0-9) for Haruf play.</p>
              
              <div className="grid grid-cols-5 gap-4 max-w-md mx-auto mt-6">
                {Array.from({ length: 10 }, (_, i) => {
                  const isSelected = selectedNumbers.includes(i);
                  
                  return (
                    <button
                      key={i}
                      className={`number-box w-16 h-16 text-2xl ${isSelected ? 'active-number' : ''}`}
                      onClick={() => toggleNumberSelection(i)}
                    >
                      {i}
                    </button>
                  );
                })}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="cross">
            <div className="text-center py-6">
              <h3 className="text-lg font-medium mb-2">Cross Betting</h3>
              <p className="text-gray-400">Coming soon. Check back later!</p>
            </div>
          </TabsContent>
          
          <TabsContent value="oddeven">
            <div className="text-center py-6">
              <h3 className="text-lg font-medium mb-2">Odd/Even Betting</h3>
              
              <div className="flex justify-center gap-6 mt-6">
                <button
                  className={`w-40 h-24 rounded-lg border-2 flex items-center justify-center text-2xl font-bold transition-all duration-300 ${selectedNumbers.includes(0) ? 'border-accent-purple bg-accent-purple/10' : 'border-accent-purple/30 bg-dark-charcoal'}`}
                  onClick={() => setSelectedNumbers([0])}
                >
                  Even
                </button>
                <button
                  className={`w-40 h-24 rounded-lg border-2 flex items-center justify-center text-2xl font-bold transition-all duration-300 ${selectedNumbers.includes(1) ? 'border-accent-magenta bg-accent-magenta/10' : 'border-accent-magenta/30 bg-dark-charcoal'}`}
                  onClick={() => setSelectedNumbers([1])}
                >
                  Odd
                </button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="game-card">
        <h2 className="text-xl font-bold mb-4">Betting Rules</h2>
        <div className="space-y-2 text-gray-300">
          <p><strong>Jodi:</strong> Select any number from 00-99. Win 90x your bet amount.</p>
          <p><strong>Hurf:</strong> Select any digit from 0-9. Win 9x your bet amount.</p>
          <p><strong>Cross:</strong> Select crossing numbers. Win varies by selection.</p>
          <p><strong>Odd/Even:</strong> Select odd or even. Win 2x your bet amount.</p>
        </div>
      </div>
    </Layout>
  );
};

export default MarketDetail;
