
import React from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface SectionDividerProps {
  className?: string;
  variant?: "wave" | "curve" | "angle" | "simple";
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  className,
  variant = "simple"
}) => {
  if (variant === "wave") {
    return (
      <div className={cn("w-full overflow-hidden", className)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-full">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    );
  }
  
  if (variant === "curve") {
    return (
      <div className={cn("w-full overflow-hidden", className)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-full">
          <path 
            fill="currentColor" 
            fillOpacity="1" 
            d="M0,32L1440,96L1440,100L0,100Z"
          ></path>
        </svg>
      </div>
    );
  }
  
  if (variant === "angle") {
    return (
      <div className={cn("w-full overflow-hidden", className)}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-full">
          <polygon 
            fill="currentColor" 
            points="0,100 1440,0 1440,100"
          ></polygon>
        </svg>
      </div>
    );
  }
  
  // Simple separator
  return (
    <div className={cn("py-8 flex items-center justify-center", className)}>
      <Separator className="w-1/4 bg-gray-200" />
    </div>
  );
};

export default SectionDivider;
