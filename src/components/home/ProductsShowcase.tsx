
import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft, Clock } from "lucide-react";
import AnimatedImage from "@/components/ui/AnimatedImage";
import CTAButton from "@/components/ui/CTAButton";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const products = [
  {
    id: 1,
    name: "PrimeCuro Skin Care Baby Wipes - Scented",
    subtitle: "Cucumber & Green Tea Fragrance",
    description: "Gentle, skin-friendly scented wipes that are biodegradable and eco-friendly, enriched with cucumber and green tea extracts for a soothing clean feeling, perfect for baby's delicate skin.",
    image: "/lovable-uploads/6333b48f-6279-4d52-aa19-607101ddf4aa.png",
    status: "available",
    color: "bg-gradient-to-br from-teal-50 to-blue-50",
    accentColor: "text-teal-700",
    iconColor: "text-teal-600",
    badges: ["Biodegradable", "Eco-Friendly", "Hypoallergenic"]
  },
  {
    id: 2,
    name: "PrimeCuro Skin Care Baby Wipes - Unscented",
    subtitle: "Sensitive Skin Formula",
    description: "Perfect for sensitive skin, these unscented wipes are biodegradable, eco-friendly, and hypoallergenic with added moisturizers to keep skin soft and healthy.",
    image: "/lovable-uploads/57dedc89-87e4-4934-b473-4d1d042d80e6.png",
    status: "available",
    color: "bg-gradient-to-br from-blue-50 to-indigo-50",
    accentColor: "text-blue-700",
    iconColor: "text-blue-600",
    badges: ["Biodegradable", "For Sensitive Skin", "Hypoallergenic"]
  },
  {
    id: 3,
    name: "PrimeCuro Flushable Adult Wipes - Scented",
    subtitle: "Green Tea & Cucumber Fragrance",
    description: "Eco-friendly flushable wipes with a refreshing green tea and cucumber scent, perfect for adults seeking comfort and cleanliness with reduced environmental impact.",
    image: "/lovable-uploads/57014f70-7bb0-40c2-8d85-c2b5717a9c40.png",
    status: "available",
    color: "bg-gradient-to-br from-emerald-50 to-teal-50",
    accentColor: "text-emerald-700",
    iconColor: "text-emerald-600",
    badges: ["Flushable", "Biodegradable", "Eco-Friendly"]
  },
  {
    id: 4,
    name: "PrimeCuro Disinfecting Wipes - Fresh Fragrance",
    subtitle: "Ocean Breeze Scent",
    description: "Experience the clean, crisp scent of ocean breeze with our powerful disinfecting wipes that eliminate 99.9% of germs while being gentle on surfaces.",
    image: "/lovable-uploads/5a08963b-0634-4989-90a3-a0f89dda752b.png",
    status: "available",
    color: "bg-gradient-to-br from-cyan-50 to-blue-50",
    accentColor: "text-cyan-700",
    iconColor: "text-cyan-600",
    badges: ["Kills 99.9% Germs", "Multi-Surface", "Eco-Friendly"]
  }
];

const ProductsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  
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
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  const handleManualControl = (callback: () => void) => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    
    callback();
    
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    setDirection(null);
  };
  
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-brand-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3 shadow-sm">
            FEATURED PRODUCTS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Premium Care for Every Need
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            Our specially formulated wipes provide gentle yet effective cleaning for all ages and purposes.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center z-10 px-2 md:px-8">
            <button
              onClick={() => handleManualControl(prevSlide)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all border border-gray-100"
              disabled={isAnimating}
              aria-label="Previous product"
            >
              <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
            <button
              onClick={() => handleManualControl(nextSlide)}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all border border-gray-100"
              disabled={isAnimating}
              aria-label="Next product"
            >
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>
          
          <div
            ref={slideRef}
            className="relative h-[650px] sm:h-[600px] md:h-[550px] overflow-hidden rounded-xl sm:rounded-2xl shadow-xl"
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
                  <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-12 flex flex-col items-start justify-center">
                    <div className="mb-2 sm:mb-3 flex flex-wrap items-center gap-1 sm:gap-2">
                      {product.badges.map((badge, index) => (
                        <div key={index} className="bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-sm border border-gray-100">
                          {badge}
                        </div>
                      ))}
                      
                      {product.status === "coming-soon" && (
                        <div className="bg-amber-100 text-amber-800 px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-sm">
                          <Clock className="h-3 w-3 mr-1" />
                          Coming Soon
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                      {isMobile ? product.name.split(' - ')[0] : product.name}
                    </h3>
                    <p className={cn("text-base sm:text-lg font-medium mb-2 sm:mb-3", product.accentColor)}>
                      {product.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">
                      {isMobile ? product.description.substring(0, 120) + '...' : product.description}
                    </p>
                    <div className="flex gap-2 sm:gap-3">
                      {product.status === "available" ? (
                        <>
                          <CTAButton className="shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base px-4 sm:px-6 py-2">
                            Shop Now
                          </CTAButton>
                          <CTAButton variant="outline" icon={false} className="shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base px-4 sm:px-6 py-2">
                            Details
                          </CTAButton>
                        </>
                      ) : (
                        <CTAButton variant="secondary" className="shadow-md hover:shadow-lg transition-shadow">
                          Notify Me
                        </CTAButton>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 h-1/2 md:h-full p-4 md:p-8 flex items-center justify-center bg-white/50 backdrop-blur-sm">
                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md transition-all duration-300 hover:scale-105">
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
          
          <div className="flex justify-center mt-4 sm:mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  
                  handleManualControl(() => {
                    setActiveIndex(index);
                    setIsAnimating(true);
                    setDirection(index > activeIndex ? 'next' : 'prev');
                  });
                }}
                className={cn(
                  "w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all",
                  activeIndex === index 
                    ? "bg-brand-600 w-6 sm:w-8" 
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
