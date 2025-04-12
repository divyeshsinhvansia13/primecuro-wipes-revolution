import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedImage from "@/components/ui/AnimatedImage";

interface HeroProps {
  onShopProductsClick?: () => void;
  onLearnMoreClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ 
  onShopProductsClick, 
  onLearnMoreClick 
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = 1 - Math.min(scrollPosition / 700, 1);
      
      if (heroRef.current) {
        heroRef.current.style.opacity = `${opacity}`;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <AnimatedImage
          src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
          alt="Clean modern background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-brand-800/40 to-brand-700/60" />
      </div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 pt-20 relative z-10 text-center transition-all duration-300"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-2">
            <span className="text-white/90 text-sm font-medium">Premium Eco-Friendly Products</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter drop-shadow-md">
            Innovative Hygiene for a Cleaner Tomorrow
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Premium eco-friendly wipes that combine powerful cleaning with sustainable materials.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <CTAButton 
              size="lg" 
              className="shadow-lg hover:shadow-xl transition-shadow"
              onClick={onShopProductsClick}
            >
              Shop Products
            </CTAButton>
            
            <CTAButton 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all"
              onClick={onLearnMoreClick}
            >
              Learn More
            </CTAButton>
          </div>
        </div>
      </div>
      
      <button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10 group"
        onClick={scrollToContent}
        aria-label="Scroll down"
      >
        <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/20 transition-all">
          <ArrowDown className="h-6 w-6" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
