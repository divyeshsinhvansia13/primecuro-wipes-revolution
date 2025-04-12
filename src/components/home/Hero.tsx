
import React, { useEffect, useRef } from "react";
import { ArrowDown, ShoppingBag } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { Separator } from "@/components/ui/separator";

interface HeroProps {
  onShopProductsClick?: () => void;
  onLearnMoreClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ 
  onShopProductsClick, 
  onLearnMoreClick 
}) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  
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
  
  useEffect(() => {
    // Auto-play video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Auto-play was prevented:", error);
      });
    }
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
        {/* Video background with fallback image */}
        <div className="w-full h-full object-cover">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
          >
            <source src="https://static.videezy.com/system/resources/previews/000/038/893/original/alb_hygiene03_1080p.mp4" type="video/mp4" />
            <AnimatedImage
              src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
              alt="Clean modern background"
              className="w-full h-full object-cover"
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-brand-800/60 to-brand-700/70" />
      </div>
      
      <div 
        ref={heroRef}
        className="container mx-auto px-4 pt-20 relative z-10 text-center transition-all duration-300"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-2">
            <span className="text-white/90 text-sm font-medium">Premium Eco-Friendly Products</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter drop-shadow-md">
            Feel Clean. Stay Confident. <span className="text-brand-200">Wipe Smarter</span> with PrimeCuro.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Premium eco-friendly wipes that combine powerful cleaning with sustainable materials.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <CTAButton 
              size="lg" 
              className="shadow-lg hover:shadow-xl transition-shadow group flex gap-2 items-center"
              onClick={onShopProductsClick}
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Shop Now</span>
            </CTAButton>
            
            <CTAButton 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 shadow-lg hover:shadow-xl transition-all"
              onClick={onLearnMoreClick}
              icon={true}
            >
              Learn More
            </CTAButton>
          </div>
          
          <div className="flex justify-center gap-8 pt-12 pb-4 flex-wrap">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 hover:scale-110 transition-transform">
                <img src="/lovable-uploads/776ec402-b1da-483b-a4fa-3352b14528d9.png" alt="Eco-Friendly" className="h-8 w-8" />
              </div>
              <span className="text-white/80 text-sm">Eco-Friendly</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 hover:scale-110 transition-transform">
                <img src="/lovable-uploads/474043ad-7a36-41e9-b0a0-66a4a625e9b8.png" alt="pH-Balanced" className="h-8 w-8" />
              </div>
              <span className="text-white/80 text-sm">pH-Balanced</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-2 hover:scale-110 transition-transform">
                <img src="/lovable-uploads/1c14f5dd-90f5-4be3-893b-e437e0965fa3.png" alt="Dermatologist-Tested" className="h-8 w-8" />
              </div>
              <span className="text-white/80 text-sm">Dermatologist-Tested</span>
            </div>
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
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-50 to-transparent z-[1]"></div>
    </section>
  );
};

export default Hero;
