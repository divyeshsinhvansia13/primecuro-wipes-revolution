
import React, { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedImage from "@/components/ui/AnimatedImage";

const Hero = () => {
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
      {/* Background image with gradient overlay for more premium look */}
      <div className="absolute inset-0 z-0">
        <AnimatedImage
          src="https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
          alt="Clean modern background"
          className="w-full h-full object-cover"
        />
        {/* Premium gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-blue-900/70" />
      </div>
      
      {/* Hero content with refined styling */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 pt-20 relative z-10 text-center transition-all duration-300"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Subtle badge for premium feel */}
          <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-2">
            <span className="text-sm font-medium text-white">Premium Eco-Friendly Products</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter drop-shadow-md">
            Innovative Hygiene for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-cyan-200">Cleaner Tomorrow</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto font-light">
            Premium eco-friendly wipes that combine powerful cleaning with sustainable materials.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-8">
            <CTAButton size="lg" className="glass shadow-xl px-8 bg-gradient-to-r from-teal-500 to-cyan-500 border-none text-white hover:from-teal-600 hover:to-cyan-600">
              Shop Products
            </CTAButton>
            
            <CTAButton variant="outline" size="lg" className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20 px-8">
              Learn More
            </CTAButton>
          </div>
        </div>
      </div>
      
      {/* Refined scroll down indicator */}
      <button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all"
        onClick={scrollToContent}
        aria-label="Scroll down"
      >
        <ArrowDown className="h-5 w-5" />
      </button>
    </section>
  );
};

export default Hero;
