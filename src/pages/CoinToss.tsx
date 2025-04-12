
import React, { useState } from 'react';
import { ArrowLeftRight, CircleDollarSign } from 'lucide-react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const CoinToss = () => {
  const [bet, setBet] = useState<'heads' | 'tails' | null>(null);
  const [betAmount, setBetAmount] = useState<number>(10);
  const [isFlipping, setIsFlipping] = useState(false);
  const [result, setResult] = useState<'heads' | 'tails' | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [history, setHistory] = useState<Array<{bet: string, amount: number, result: string, won: boolean}>>([]);

  const handleBet = (choice: 'heads' | 'tails') => {
    setBet(choice);
  };

  const handleAmountChange = (amount: number) => {
    if (amount >= 10 && amount <= 1000) {
      setBetAmount(amount);
    }
  };

  const flipCoin = () => {
    if (!bet || isFlipping) return;
    
    setIsFlipping(true);
    setShowResult(false);
    
    setTimeout(() => {
      // 50% chance for heads or tails
      const outcome = Math.random() > 0.5 ? 'heads' : 'tails';
      setResult(outcome);
      setShowResult(true);
      
      // Add to history
      setHistory(prev => [
        {
          bet: bet,
          amount: betAmount,
          result: outcome,
          won: outcome === bet
        },
        ...prev.slice(0, 9)
      ]);
      
      setIsFlipping(false);
    }, 2000);
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Coin Toss</h1>
          
          <div className="game-card mb-8">
            <div className="flex flex-col items-center py-12">
              {/* Coin */}
              <div className={`w-48 h-48 rounded-full mb-8 relative ${isFlipping ? 'animate-spin-slow' : ''}`}>
                {showResult ? (
                  <div className={`w-full h-full rounded-full flex items-center justify-center bg-accent-purple/20 border-4 ${result === 'heads' ? 'border-accent-purple' : 'border-accent-magenta'}`}>
                    <span className="text-3xl font-bold">{result === 'heads' ? 'H' : 'T'}</span>
                  </div>
                ) : (
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-accent-purple/30 to-accent-magenta/30 flex items-center justify-center border-4 border-accent-purple/50">
                    <ArrowLeftRight className="h-16 w-16 text-accent-purple" />
                  </div>
                )}
              </div>
              
              {/* Betting Options */}
              <div className="flex gap-4 mb-8">
                <Button 
                  className={`w-32 h-16 text-lg font-bold ${bet === 'heads' ? 'bg-accent-purple' : 'bg-dark-charcoal border border-accent-purple/50'}`} 
                  onClick={() => handleBet('heads')}
                >
                  Heads
                </Button>
                <Button 
                  className={`w-32 h-16 text-lg font-bold ${bet === 'tails' ? 'bg-accent-magenta' : 'bg-dark-charcoal border border-accent-purple/50'}`}
                  onClick={() => handleBet('tails')}
                >
                  Tails
                </Button>
              </div>
              
              {/* Bet Amount */}
              <div className="w-full max-w-md mb-8">
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
                    <span className="text-xl font-bold flex items-center">
                      <CircleDollarSign className="h-5 w-5 mr-1 text-accent-purple" />
                      {betAmount}
                    </span>
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
                  {[10, 25, 50, 100].map(amount => (
                    <Button 
                      key={amount} 
                      className="bg-dark-charcoal border border-accent-purple/20"
                      onClick={() => handleAmountChange(amount)}
                    >
                      {amount}
                    </Button>
                  ))}
                </div>
              </div>
              
              {/* Flip Button */}
              <Button 
                className="bg-button-gradient w-full max-w-md h-14 text-lg font-bold"
                disabled={!bet || isFlipping}
                onClick={flipCoin}
              >
                {isFlipping ? "Flipping..." : "Flip Coin"}
              </Button>
              
              {/* Result */}
              {showResult && (
                <div className={`mt-6 p-4 rounded-lg ${result === bet ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'}`}>
                  <p className="text-lg font-bold">
                    {result === bet 
                      ? `You won ₹${betAmount * 2}!` 
                      : `You lost ₹${betAmount}.`
                    }
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* History Panel */}
        <div>
          <h2 className="text-xl font-bold mb-4">Bet History</h2>
          <div className="game-card">
            {history.length === 0 ? (
              <div className="text-gray-400 py-4 text-center">
                No history yet. Place your first bet!
              </div>
            ) : (
              <div className="space-y-4">
                {history.map((item, index) => (
                  <div key={index} className="flex justify-between p-3 bg-dark-charcoal rounded-lg border border-accent-purple/10">
                    <div>
                      <p className="text-sm text-gray-300">Bet on {item.bet}</p>
                      <p className="font-medium">₹{item.amount}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-300">Result: {item.result}</p>
                      <p className={item.won ? "text-green-400 font-medium" : "text-red-400 font-medium"}>
                        {item.won ? `+₹${item.amount * 2}` : `-₹${item.amount}`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoinToss;
