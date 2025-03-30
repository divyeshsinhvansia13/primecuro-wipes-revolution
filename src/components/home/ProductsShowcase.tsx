
import React, { useState, useEffect, useRef } from "react";
import { ChevronRight, ChevronLeft, Clock } from "lucide-react";
import AnimatedImage from "@/components/ui/AnimatedImage";
import CTAButton from "@/components/ui/CTAButton";
import { cn } from "@/lib/utils";

const products = [
  {
    id: 1,
    name: "PrimeCuro Skin Care Adult/Baby Wipes - Scented",
    description: "Gentle, skin-friendly scented wipes that are flushable and biodegradable.",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    status: "available"
  },
  {
    id: 2,
    name: "PrimeCuro Skin Care Adult/Baby Wipes - Unscented",
    description: "Perfect for sensitive skin, these unscented flushable wipes are gentle and effective.",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1629732097571-b042b35add24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
    status: "available"
  },
  {
    id: 3,
    name: "PrimeCuro Disinfected Wipes",
    description: "Coming soon - Our powerful disinfectant wipes kill 99.9% of germs and bacteria.",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1605615923013-f26c14fe7155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    status: "coming-soon"
  }
];

const ProductsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);
  
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

  const handleTransitionEnd = () => {
    setIsAnimating(false);
    setDirection(null);
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
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center z-10 px-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all"
              disabled={isAnimating}
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-700 hover:bg-white transition-all"
              disabled={isAnimating}
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
          
          <div
            ref={slideRef}
            className="relative h-[600px] overflow-hidden"
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
                  className="w-full h-full flex-shrink-0 flex flex-col md:flex-row items-center"
                >
                  <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col items-start justify-center">
                    <div className="mb-3 flex items-center">
                      {product.status === "coming-soon" && (
                        <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          Coming Soon
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
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
                  <div className="w-full md:w-1/2 h-full">
                    <AnimatedImage 
                      src={product.image} 
                      alt={product.name}
                      className={cn(
                        "w-full h-full object-cover",
                        product.status === "coming-soon" && "blur-[2px] opacity-75"
                      )}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  activeIndex === index 
                    ? "bg-brand-600 w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
