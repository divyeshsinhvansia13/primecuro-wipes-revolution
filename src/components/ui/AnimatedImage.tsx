
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  delay?: number;
  blur?: boolean;
  fadeIn?: boolean;
}

const AnimatedImage = ({ 
  src, 
  alt, 
  className, 
  delay = 0, 
  blur = true,
  fadeIn = true,
  ...props 
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
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
  
  const handleLoad = () => {
    setTimeout(() => {
      setIsLoaded(true);
    }, delay);
  };
  
  return (
    <div className="relative overflow-hidden">
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
          fadeIn && isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-md',
          !fadeIn && 'opacity-100',
          className
        )}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

export default AnimatedImage;
