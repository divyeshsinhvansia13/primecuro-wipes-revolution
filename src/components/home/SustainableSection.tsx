
import React from "react";
import { Leaf, Recycle, Shield, Award } from "lucide-react";
import { cn } from "@/lib/utils";
import CTAButton from "@/components/ui/CTAButton";

interface SustainableSectionProps {
  className?: string;
  onLearnMoreClick?: () => void;
}

const SustainableSection: React.FC<SustainableSectionProps> = ({ 
  className,
  onLearnMoreClick
}) => {
  const features = [
    {
      icon: <Leaf className="w-10 h-10 text-green-600" />,
      title: "Biodegradable Materials",
      description: "Our wipes break down naturally, reducing environmental impact without compromising on quality."
    },
    {
      icon: <Recycle className="w-10 h-10 text-green-600" />,
      title: "Eco-Friendly Manufacturing",
      description: "Sustainable production methods that minimize waste and reduce our carbon footprint."
    },
    {
      icon: <Shield className="w-10 h-10 text-green-600" />,
      title: "Safe for All Skin Types",
      description: "Dermatologically tested and pH-balanced for even the most sensitive skin."
    },
    {
      icon: <Award className="w-10 h-10 text-green-600" />,
      title: "Made in USA",
      description: "Proudly manufactured in American facilities with the highest quality standards."
    }
  ];
  
  return (
    <section className={cn("py-20 bg-gradient-to-b from-white to-green-50", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full mb-3 shadow-sm">
            OUR COMMITMENT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Building a Sustainable Future
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At PrimeCuro, sustainability isn't just a buzzword—it's at the core of everything we do. 
            From our biodegradable materials to our eco-friendly manufacturing process.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100 hover:-translate-y-1 duration-300"
            >
              <div className="mb-4 text-center">{feature.icon}</div>
              <h3 className="text-xl font-bold text-center text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <CTAButton 
            className="shadow-lg hover:shadow-xl transition-shadow bg-green-600 hover:bg-green-700"
            onClick={onLearnMoreClick}
          >
            Learn About Our Sustainability
          </CTAButton>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <img src="/lovable-uploads/776ec402-b1da-483b-a4fa-3352b14528d9.png" alt="Biodegradable" className="h-5 w-5 mr-2" />
            <span className="text-sm text-gray-700">Biodegradable</span>
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <img src="/lovable-uploads/474043ad-7a36-41e9-b0a0-66a4a625e9b8.png" alt="pH-Balanced" className="h-5 w-5 mr-2" />
            <span className="text-sm text-gray-700">pH-Balanced</span>
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <img src="/lovable-uploads/1c14f5dd-90f5-4be3-893b-e437e0965fa3.png" alt="Dermatologist-Tested" className="h-5 w-5 mr-2" />
            <span className="text-sm text-gray-700">Dermatologist-Tested</span>
          </div>
          <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-0.5 rounded-full mr-2">New</span>
            <span className="text-sm text-gray-700">Cruelty-Free</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableSection;
