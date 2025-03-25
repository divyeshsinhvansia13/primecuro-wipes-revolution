
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  children: React.ReactNode;
  asChild?: boolean;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    { 
      className, 
      variant = "primary", 
      size = "md", 
      icon = true, 
      children, 
      ...props 
    }, 
    ref
  ) => {
    const baseStyles = "font-medium inline-flex items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-brand-300 focus:ring-offset-2";
    
    const variants = {
      primary: "bg-brand-600 text-white hover:bg-brand-700 active:bg-brand-800 shadow-sm",
      secondary: "bg-brand-100 text-brand-700 hover:bg-brand-200 active:bg-brand-300",
      outline: "border border-brand-200 hover:bg-brand-50 text-brand-700",
      ghost: "text-brand-600 hover:bg-brand-50 hover:text-brand-700"
    };
    
    const sizes = {
      sm: "text-sm px-4 py-1.5",
      md: "text-base px-5 py-2",
      lg: "text-lg px-6 py-3"
    };
    
    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        <span>{children}</span>
        {icon && (
          <ArrowRight 
            className={cn(
              "ml-2 transition-transform group-hover:translate-x-1",
              size === "sm" ? "h-4 w-4" : size === "md" ? "h-5 w-5" : "h-6 w-6"
            )}
          />
        )}
      </button>
    );
  }
);

CTAButton.displayName = "CTAButton";

export default CTAButton;
