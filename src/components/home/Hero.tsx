
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

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
        <img
          src="/lovable-uploads/93bd601c-2f16-4b20-ae1c-0d0c4ff95004.png"
          alt="PrimeCuro Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ objectPosition: "center top", filter: "brightness(0.8)" }}
        />
        <div className="absolute inset-0 bg-blue-900/40" />
      </div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 pt-20 relative z-10 text-center transition-all duration-300"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tighter drop-shadow-md">
            Innovative Hygiene for a <br/> 
            <span className="text-blue-200">Cleaner Tomorrow</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
            <CTAButton 
              size="lg" 
              className="shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto px-8 bg-blue-600 hover:bg-blue-700"
              onClick={onShopProductsClick}
            >
              Shop Now
            </CTAButton>
            
            <CTAButton 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto px-8"
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
        <div className="p-2 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-200/30 group-hover:bg-blue-500/30 transition-all">
          <ArrowDown className="h-6 w-6" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
