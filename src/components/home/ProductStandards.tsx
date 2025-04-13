
import React from "react";
import { Shield, Check, X } from "lucide-react";

const ProductStandards = () => {
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
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3 shadow-sm">
            OUR COMMITMENT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industry-Leading Product Standards
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At PrimeCuro, we hold ourselves to the highest standards of quality, safety, and sustainability in everything we make.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standards.map((standard, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="flex items-start mb-4">
                  <div className="p-2 rounded-full bg-gray-100 mr-3">
                    {standard.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {standard.title}
                  </h3>
                </div>
                <p className="text-gray-700">
                  {standard.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-brand-50 rounded-xl border border-brand-100 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-10 w-10 text-brand-600 mr-4" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Our Product Promise</h3>
                <p className="text-gray-700">Effective, safe, and sustainable – without compromise.</p>
              </div>
            </div>
            <a
              href="/sustainability"
              className="px-6 py-3 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-colors shadow-md"
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
