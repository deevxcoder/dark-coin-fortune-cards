
import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const promos = [
  {
    id: 1,
    title: "Win Big with Coin Toss",
    description: "Double your money instantly with a 50% chance to win!",
    image: "/placeholder.svg",
    link: "/coin-toss",
    buttonText: "Play Now"
  },
  {
    id: 2,
    title: "Try Satta Matka",
    description: "Select numbers and win up to 90x your bet!",
    image: "/placeholder.svg",
    link: "/satta-matka",
    buttonText: "Play Now"
  },
  {
    id: 3,
    title: "Welcome Bonus",
    description: "Get ₹500 bonus on your first deposit!",
    image: "/placeholder.svg",
    link: "/",
    buttonText: "Claim Now"
  }
];

const PromoSlider: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-12">
      <Carousel 
        opts={{ loop: true }} 
        className="w-full"
      >
        <CarouselContent>
          {promos.map((promo) => (
            <CarouselItem key={promo.id}>
              <div className="w-full h-[200px] md:h-[300px] rounded-xl bg-card-gradient overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-dark-charcoal to-transparent z-10"></div>
                <div className="w-full h-full absolute top-0 left-0 flex items-center">
                  <div className="w-full md:w-1/2 p-6 z-20">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{promo.title}</h2>
                    <p className="text-gray-300 mb-4">{promo.description}</p>
                    <Button asChild className="bg-button-gradient">
                      <Link to={promo.link} className="flex items-center">
                        {promo.buttonText} <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="w-full h-full object-cover opacity-40"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {!isMobile && (
          <>
            <CarouselPrevious className="-left-4 bg-dark-purple border-accent-purple/30" />
            <CarouselNext className="-right-4 bg-dark-purple border-accent-purple/30" />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default PromoSlider;
