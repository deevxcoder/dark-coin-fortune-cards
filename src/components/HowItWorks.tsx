
import React from 'react';
import { Info } from 'lucide-react';

const steps = [
  { 
    id: 1, 
    title: "Choose a Game",
    description: "Select from Coin Toss for quick wins or Satta Matka for higher payouts."
  },
  { 
    id: 2, 
    title: "Place Your Bet",
    description: "Select your prediction and enter the amount you want to bet."
  },
  { 
    id: 3, 
    title: "Wait for Results",
    description: "Results are declared instantly for Coin Toss and at scheduled times for Satta Matka."
  },
  { 
    id: 4, 
    title: "Collect Winnings",
    description: "Winnings are automatically added to your wallet balance."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <div className="market-card mb-12">
      <div className="flex items-center mb-4">
        <Info className="text-accent-purple h-6 w-6 mr-3" />
        <h2 className="text-xl font-bold">How It Works</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {steps.map((step) => (
          <div key={step.id} className="bg-dark-charcoal p-4 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center mr-3 text-accent-purple font-bold">
                {step.id}
              </div>
              <h3 className="font-semibold">{step.title}</h3>
            </div>
            <p className="text-gray-400 text-sm ml-11">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
