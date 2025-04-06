
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  delay?: number;
  blur?: boolean;
  parallax?: boolean;
}

const AnimatedImage = ({ 
  src, 
  alt, 
  className, 
  delay = 0, 
  blur = true,
  parallax = false,
  ...props 
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!parallax || !containerRef.current) return;
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPosition = containerRef.current?.getBoundingClientRect().top || 0;
      const offset = scrollPosition * 0.2;
      
      if (containerRef.current) {
        containerRef.current.style.transform = `translateY(${offset}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallax]);
  
  const handleLoad = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, delay);
  };
  
  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {blur && !isLoaded && isInView && (
        <div 
          className="absolute inset-0 bg-gray-100 animate-pulse"
          style={{ 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <img
        ref={imgRef}
        src={isInView ? src : ''}
        alt={alt}
        className={cn(
          'transition-all duration-700',
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-md',
          className
        )}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

export default AnimatedImage;
