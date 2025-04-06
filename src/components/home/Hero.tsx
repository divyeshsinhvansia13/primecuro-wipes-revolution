
import React, { useEffect, useRef } from "react";
import { ArrowDown, ShoppingBag } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !taglineRef.current) return;
      
      const scrollPosition = window.scrollY;
      const opacity = 1 - Math.min(scrollPosition / 700, 1);
      
      if (heroRef.current) {
        heroRef.current.style.opacity = `${opacity}`;
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
      
      // Additional parallax effect for tagline
      if (taglineRef.current) {
        taglineRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
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
      {/* Background image with parallax effect - using lifestyle imagery */}
      <div className="absolute inset-0 z-0">
        <AnimatedImage
          src="https://images.unsplash.com/photo-1585435557343-3b092031a831?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80"
          alt="Person using eco-friendly PrimeCuro wipes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>
      
      {/* Hero content */}
      <div 
        ref={heroRef}
        className="container mx-auto px-4 pt-20 relative z-10 text-center transition-all duration-300"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tighter">
            Innovative Hygiene for a Cleaner Tomorrow
          </h1>
          
          <p 
            ref={taglineRef}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light italic transition-all duration-300"
          >
            Clean Ingredients. Confident Care.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/products">
              <CTAButton size="lg" className="group w-full sm:w-auto">
                <span className="flex items-center">
                  <ShoppingBag className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Shop Now
                </span>
              </CTAButton>
            </Link>
            
            <Link to="/about">
              <CTAButton variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 w-full sm:w-auto">
                Learn More
              </CTAButton>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-10"
        onClick={scrollToContent}
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
