
import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  delay?: number;
  blur?: boolean;
  fadeIn?: boolean;
  placeholderColor?: string;
}

const AnimatedImage = ({ 
  src, 
  alt, 
  className, 
  delay = 0, 
  blur = true,
  fadeIn = true,
  placeholderColor = "bg-gray-100",
  ...props 
}: AnimatedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "200px" }
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
  
  const handleError = () => {
    setHasError(true);
    console.error(`Failed to load image: ${src}`);
  };
  
  return (
    <div className="relative overflow-hidden">
      {blur && !isLoaded && isInView && !hasError && (
        <div 
          className={cn(
            "absolute inset-0 animate-pulse",
            placeholderColor
          )}
          style={{ 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      {hasError ? (
        <div className={cn(
          "flex items-center justify-center bg-gray-200 text-gray-500 text-sm",
          className
        )}>
          Image not available
        </div>
      ) : (
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
          onError={handleError}
          {...props}
        />
      )}
    </div>
  );
};

export default AnimatedImage;
