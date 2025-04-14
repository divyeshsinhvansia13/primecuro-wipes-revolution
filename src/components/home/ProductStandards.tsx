
import React from "react";
import { Shield, Check, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const ProductStandards = () => {
  const isMobile = useIsMobile();

  const standards = [
    {
      title: "No Harsh Chemicals",
      icon: <X className="h-5 w-5 text-red-500" />,
      description: "We never use harmful chemicals like parabens, phthalates, or synthetic fragrances in our products."
    },
    {
      title: "Biodegradable Materials",
      icon: <Check className="h-5 w-5 text-green-500" />,
      description: "Our wipes are made from plant-based, biodegradable materials that break down naturally."
    },
    {
      title: "Dermatologically Tested",
      icon: <Check className="h-5 w-5 text-green-500" />,
      description: "All products are tested and approved for sensitive skin, even for infants."
    },
    {
      title: "No Animal Testing",
      icon: <Check className="h-5 w-5 text-green-500" />,
      description: "We're proudly cruelty-free and never test our products on animals."
    },
    {
      title: "Sustainable Packaging",
      icon: <Check className="h-5 w-5 text-green-500" />,
      description: "Our packaging is made from recycled materials and is fully recyclable."
    },
    {
      title: "No Microplastics",
      icon: <X className="h-5 w-5 text-red-500" />,
      description: "We never use microplastics that can harm marine life and ecosystems."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-3 shadow-sm">
            OUR COMMITMENT
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Industry-Leading Product Standards
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            At PrimeCuro, we hold ourselves to the highest standards of quality, safety, and sustainability in everything we make.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 rounded-full bg-gray-100 mr-2 sm:mr-3">
                    {standard.icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {standard.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-blue-50 rounded-lg sm:rounded-xl border border-blue-100 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 mr-3 sm:mr-4" />
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Our Product Promise</h3>
                <p className="text-sm sm:text-base text-gray-700">Effective, safe, and sustainable – without compromise.</p>
              </div>
            </div>
            <a
              href="/sustainability"
              className="w-full md:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-center rounded-full hover:bg-blue-700 transition-colors shadow-md"
            >
              Learn More About Our Standards
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductStandards;
