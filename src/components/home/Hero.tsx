
import React, { useEffect, useRef } from "react";
import { ArrowDown, ShoppingBag } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
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
    
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.error("Video playback failed:", err);
      });
    }
    
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
      {/* Video background with overlay for better text contrast */}
      <div className="absolute inset-0 z-0 bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source 
            src="https://player.vimeo.com/progressive_redirect/playback/688183774/rendition/720p/file.mp4?loc=external&oauth2_token_id=57447761&signature=f3ec528b6cc1abee3dab1ef09bb8185a6c61b1fbc85c5ccdd6eeb4cb25fe6efd" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />
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
