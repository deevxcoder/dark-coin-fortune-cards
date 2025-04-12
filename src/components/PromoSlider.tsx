
import React, { useEffect } from 'react';
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
import Autoplay from 'embla-carousel-autoplay';

const promos = [
  {
    id: 1,
    title: "Win Big with Coin Toss",
    description: "Double your money instantly with a 50% chance to win!",
    image: "https://picsum.photos/id/91/1920/600",
    link: "/coin-toss",
    buttonText: "Play Now"
  },
  {
    id: 2,
    title: "Try Satta Matka",
    description: "Select numbers and win up to 90x your bet!",
    image: "https://picsum.photos/id/96/1920/600",
    link: "/satta-matka",
    buttonText: "Play Now"
  },
  {
    id: 3,
    title: "Welcome Bonus",
    description: "Get ₹500 bonus on your first deposit!",
    image: "https://picsum.photos/id/94/1920/600",
    link: "/",
    buttonText: "Claim Now"
  }
];

const PromoSlider: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="mb-12">
      <Carousel 
        opts={{ 
          loop: true,
        }} 
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {promos.map((promo) => (
            <CarouselItem key={promo.id}>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151A25] via-[#151A25]/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-[#00E701] to-[#00A1FF] bg-clip-text text-transparent">{promo.title}</h2>
                  <p className="text-gray-300 mb-4 text-lg md:text-xl max-w-xl">{promo.description}</p>
                  <Button asChild className="bg-[#00E701] hover:bg-[#00E701]/90 text-black font-semibold px-6 py-6 h-auto text-lg rounded-lg">
                    <Link to={promo.link} className="flex items-center">
                      {promo.buttonText} <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {!isMobile && (
          <>
            <CarouselPrevious className="-left-4 bg-[#1A1F2C] border-[#2C3544] hover:bg-[#242B3D] hover:border-[#00E701]" />
            <CarouselNext className="-right-4 bg-[#1A1F2C] border-[#2C3544] hover:bg-[#242B3D] hover:border-[#00E701]" />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default PromoSlider;
