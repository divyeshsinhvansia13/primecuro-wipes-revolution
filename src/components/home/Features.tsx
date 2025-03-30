import React, { useRef, useEffect } from "react";
import { ShieldCheck, Leaf, Droplets, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    id: 1,
    title: "Premium Quality",
    description: "Made with the highest quality materials for a superior clean every time.",
    icon: ShieldCheck,
  },
  {
    id: 2,
    title: "Eco-Friendly", 
    description: "Biodegradable materials that break down naturally, minimizing environmental impact.",
    icon: Leaf,
  },
  {
    id: 3,
    title: "Dermatologist Tested",
    description: "Gentle formula that's safe for all skin types, even the most sensitive.",
    icon: Droplets,
  },
  {
    id: 4,
    title: "Sustainable Packaging",
    description: "Recyclable packaging made from renewable resources.",
    icon: RefreshCw,
  },
];

const Features = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up", "opacity-100");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
            WHY CHOOSE US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The PrimeCuro Difference
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our wipes are designed with both performance and sustainability in mind. Here's what sets us apart.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              ref={(el) => (featureRefs.current[index] = el)}
              className={cn(
                "bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all duration-500 opacity-0 transform translate-y-8 hover:shadow-md hover:-translate-y-1",
                index % 2 === 0 ? "lg:translate-y-4" : ""
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
