
import React from "react";
import { Award, ShieldCheck, Sparkles, Flower } from "lucide-react";
import { cn } from "@/lib/utils";

interface TrustSectionProps {
  className?: string;
}

const TrustSection: React.FC<TrustSectionProps> = ({ className }) => {
  const certifications = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-600" />,
      title: "FDA Compliant",
      description: "Meets all FDA requirements for personal care products"
    },
    {
      icon: <Award className="w-6 h-6 text-brand-600" />,
      title: "Made in USA",
      description: "Proudly manufactured in American facilities"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-brand-600" />,
      title: "Hypoallergenic",
      description: "Gentle on sensitive skin, reducing allergic reactions"
    },
    {
      icon: <Flower className="w-6 h-6 text-brand-600" />,
      title: "Cruelty-Free",
      description: "Never tested on animals at any stage of development"
    }
  ];
  
  return (
    <section className={cn("py-20 bg-gradient-to-b from-brand-50 to-blue-50", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3 shadow-sm">
            TRUST & QUALITY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Families Trust PrimeCuro
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our wipes are designed with your family's health and safety in mind, backed by rigorous testing and quality certifications.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">{cert.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Frequently Asked Questions</h3>
            
            <div className="space-y-6 mt-6">
              <div className="border-b border-gray-100 pb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Are PrimeCuro wipes safe for babies?</h4>
                <p className="text-gray-600">Yes, our baby wipes are specially formulated for sensitive skin and are free from harsh chemicals, making them safe and gentle for babies.</p>
              </div>
              
              <div className="border-b border-gray-100 pb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Are your wipes actually flushable?</h4>
                <p className="text-gray-600">Our flushable wipes are designed to break down quickly in water. They've been tested to ensure they're safe for properly maintained septic and sewer systems.</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">What makes PrimeCuro wipes eco-friendly?</h4>
                <p className="text-gray-600">Our wipes are made from plant-based, biodegradable materials that break down naturally. We also use sustainable manufacturing processes to minimize our environmental impact.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 rounded-full px-4 py-2 text-sm font-medium animate-pulse">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span>15,000+ wipes sold this week</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
