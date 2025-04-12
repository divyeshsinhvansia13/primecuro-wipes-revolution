
import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// Review data
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Busy Mom of Three",
    rating: 5,
    text: "PrimeCuro wipes have completely changed my daily routine. They're effective, gentle on my skin, and I love knowing I'm making a sustainable choice.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Fitness Enthusiast",
    rating: 5,
    text: "As someone who's always on the go, I need products that keep up. PrimeCuro's travel packs are perfect for my gym bag, and the wipes themselves are sturdy but soft.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Environmental Advocate",
    rating: 4,
    text: "Finding biodegradable wipes that actually work well has been a challenge until PrimeCuro. I appreciate their commitment to sustainability while still delivering a premium product.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Healthcare Professional",
    rating: 5,
    text: "In my profession, cleanliness is critical. PrimeCuro's disinfecting wipes are effective against germs while being gentle enough for frequent use on hands and surfaces.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    name: "Olivia Taylor",
    role: "New Parent",
    rating: 5,
    text: "When it comes to my baby, I don't compromise. PrimeCuro's baby wipes are the only ones I trust for my little one's delicate skin. No irritation, and they're so soft!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
  }
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-4 h-4",
            i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
          )}
        />
      ))}
    </div>
  );
};

const CustomerReviews = () => {
  const [api, setApi] = useState<{ scrollNext: () => void } | null>(null);
  
  // Auto-rotation effect
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3 shadow-sm">
            WHAT PEOPLE SAY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Customers Love Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - see what our customers have to say about PrimeCuro products.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="h-full bg-gradient-to-br from-blue-50 to-brand-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                    <StarRating rating={review.rating} />
                    
                    <blockquote className="text-gray-800 mb-6 italic">
                      "{review.text}"
                    </blockquote>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-white shadow-md">
                        <img 
                          src={review.image} 
                          alt={review.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{review.name}</p>
                        <p className="text-sm text-gray-600">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
