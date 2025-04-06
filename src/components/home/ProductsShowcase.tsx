import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft, Clock } from "lucide-react";
import AnimatedImage from "@/components/ui/AnimatedImage";
import CTAButton from "@/components/ui/CTAButton";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "Skin Care Baby Wipes - Scented",
    subtitle: "Cucumber & Green Tea Fragrance",
    description: "Gentle, skin-friendly scented wipes that are biodegradable and eco-friendly, enriched with cucumber and green tea extracts for a soothing clean feeling, perfect for baby's delicate skin.",
    price: "$12.99",
    image: "https://m.media-amazon.com/images/I/71TL2xtJf5L._AC_SL1500_.jpg",
    status: "available",
    color: "bg-blue-50",
    accentColor: "text-blue-700",
    iconColor: "text-blue-600",
    badges: ["Biodegradable", "Eco-Friendly", "Hypoallergenic"]
  },
  {
    id: 2,
    name: "Skin Care Adult/Baby Wipes - Unscented",
    subtitle: "Sensitive Skin Formula",
    description: "Perfect for sensitive skin, these unscented wipes are biodegradable, eco-friendly, and hypoallergenic with added moisturizers to keep skin soft and healthy.",
    price: "$14.99",
    image: "https://m.media-amazon.com/images/I/71WCEPRsYhL._AC_SL1500_.jpg",
    status: "available",
    color: "bg-indigo-50",
    accentColor: "text-indigo-700",
    iconColor: "text-indigo-600",
    badges: ["Biodegradable", "For Sensitive Skin", "Hypoallergenic"]
  },
  {
    id: 3,
    name: "Flushable Adult Wipes - Scented",
    subtitle: "Green Tea & Cucumber Fragrance",
    description: "Eco-friendly flushable wipes with a refreshing green tea and cucumber scent, perfect for adults seeking comfort and cleanliness with reduced environmental impact.",
    price: "$13.99",
    image: "https://m.media-amazon.com/images/I/81rFQtUNDTL._AC_SL1500_.jpg",
    status: "available",
    color: "bg-teal-50",
    accentColor: "text-teal-700",
    iconColor: "text-teal-600",
    badges: ["Flushable", "Biodegradable", "Eco-Friendly"]
  },
  {
    id: 4,
    name: "Disinfecting Wipes - Lemon Scented",
    subtitle: "Powerful Cleaning Formula",
    description: "Coming soon - Our powerful disinfectant wipes kill 99.9% of germs and bacteria with a refreshing lemon scent, perfect for household surfaces.",
    price: "$15.99",
    image: "https://m.media-amazon.com/images/I/71WJJQQs9sL._AC_SL1500_.jpg",
    status: "coming-soon",
    color: "bg-amber-50",
    accentColor: "text-amber-700",
    iconColor: "text-amber-600",
    badges: ["Kills 99.9% Germs", "Multi-Surface", "Eco-Friendly"]
  },
  {
    id: 5,
    name: "Disinfecting Wipes - Fresh Fragrance",
    subtitle: "Ocean Breeze Scent",
    description: "Coming soon - Experience the clean, crisp scent of ocean breeze with our powerful disinfecting wipes that eliminate 99.9% of germs while being gentle on surfaces.",
    price: "$15.99",
    image: "https://m.media-amazon.com/images/I/61aQoFAyQRL._AC_SL1200_.jpg",
    status: "coming-soon",
    color: "bg-cyan-50",
    accentColor: "text-cyan-700",
    iconColor: "text-cyan-600",
    badges: ["Kills 99.9% Germs", "Multi-Surface", "Eco-Friendly"]
  },
  {
    id: 6,
    name: "Hand Wipes - On The Go",
    subtitle: "Portable Clean Anytime",
    description: "Coming soon - Convenient, pocket-sized biodegradable hand wipes perfect for travel, office, or anywhere you need a quick refresh.",
    price: "$8.99",
    image: "https://m.media-amazon.com/images/I/81T9rBLJvOL._AC_SL1500_.jpg",
    status: "coming-soon",
    color: "bg-violet-50",
    accentColor: "text-violet-700",
    iconColor: "text-violet-600",
    badges: ["Portable", "Biodegradable", "Quick-Drying"]
  },
  {
    id: 7,
    name: "Lens Wipes - Crystal Clear",
    subtitle: "For Glasses & Screens",
    description: "Coming soon - Specially formulated to clean eyeglasses, sunglasses, and electronic screens without streaks or residue. Lint-free and gentle on coated lenses.",
    price: "$7.99",
    image: "https://m.media-amazon.com/images/I/71Jcy8sPExL._AC_SL1500_.jpg",
    status: "coming-soon",
    color: "bg-sky-50",
    accentColor: "text-sky-700",
    iconColor: "text-sky-600",
    badges: ["Streak-Free", "Anti-Static", "Lint-Free"]
  }
];

const ProductsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<number | null>(null);
  
  const nextSlide = () => {
    if (isAnimating) return;
    
    setDirection('next');
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    if (isAnimating) return;
    
    setDirection('prev');
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    autoScrollInterval.current = window.setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => {
      if (autoScrollInterval.current !== null) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    setDirection(null);
  };

  const handleManualNavigation = (index: number) => {
    if (isAnimating) return;
    
    if (autoScrollInterval.current !== null) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = window.setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    setActiveIndex(index);
    setIsAnimating(true);
    setDirection(index > activeIndex ? 'next' : 'prev');
  };
  
  return (
    <section className="py-20 bg-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
            FEATURED PRODUCTS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium Care for Every Need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our specially formulated wipes provide gentle yet effective cleaning for all ages and purposes.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center z-10 px-4 md:px-8">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all"
              disabled={isAnimating}
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all"
              disabled={isAnimating}
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div
            ref={slideRef}
            className="relative h-[620px] md:h-[550px] overflow-hidden rounded-xl shadow-lg"
            onTransitionEnd={handleTransitionEnd}
          >
            <div 
              className={cn(
                "flex h-full transition-transform duration-500 ease-out",
                isAnimating && (
                  direction === 'next' 
                    ? 'translate-x-[-100%]' 
                    : 'translate-x-[100%]'
                )
              )}
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div 
                  key={product.id}
                  className={cn(
                    "w-full h-full flex-shrink-0 flex flex-col md:flex-row items-center",
                    product.color
                  )}
                >
                  <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col items-start justify-center">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      {product.badges.map((badge, index) => (
                        <div key={index} className="bg-white px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-sm">
                          {badge}
                        </div>
                      ))}
                      
                      {product.status === "coming-soon" && (
                        <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          Coming Soon
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className={cn("text-lg font-medium mb-3", product.accentColor)}>
                      {product.subtitle}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <p className="text-xl font-semibold text-brand-600 mb-6">
                      {product.price}
                    </p>
                    <div className="flex gap-3">
                      {product.status === "available" ? (
                        <>
                          <CTAButton>
                            Shop Now
                          </CTAButton>
                          <CTAButton variant="outline" icon={false}>
                            Details
                          </CTAButton>
                        </>
                      ) : (
                        <CTAButton variant="secondary">
                          Notify Me
                        </CTAButton>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-full p-4 md:p-8 flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm">
                    <div className="w-full max-w-md transition-all duration-300 hover:scale-105">
                      <AnimatedImage 
                        src={product.image} 
                        alt={product.name}
                        className={cn(
                          "w-full h-auto object-contain shadow-lg rounded-lg",
                          product.status === "coming-soon" && "blur-[1px] opacity-90"
                        )}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all",
                  activeIndex === index 
                    ? "bg-brand-600 w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to product ${index + 1}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
