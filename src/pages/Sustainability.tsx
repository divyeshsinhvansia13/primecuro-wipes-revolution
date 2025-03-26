
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { Leaf, Recycle, Award, BarChart3, Globe, Filter } from "lucide-react";

const SustainabilityFeature = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-brand-100 text-brand-700 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const StatCard = ({ 
  value, 
  label, 
  color = "brand" 
}: { 
  value: string; 
  label: string;
  color?: "brand" | "green" | "blue" | "amber";
}) => {
  const colorClasses = {
    brand: "bg-brand-100 text-brand-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    amber: "bg-amber-100 text-amber-800"
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm text-center">
      <div className={`inline-block px-4 py-2 rounded-full text-2xl font-bold mb-3 ${colorClasses[color]}`}>
        {value}
      </div>
      <p className="text-gray-700">{label}</p>
    </div>
  );
};

const ProgressStep = ({ 
  title, 
  date, 
  status, 
  description 
}: { 
  title: string; 
  date: string; 
  status: "completed" | "in-progress" | "upcoming";
  description: string;
}) => {
  const statusClasses = {
    completed: "bg-green-600",
    "in-progress": "bg-amber-500",
    upcoming: "bg-gray-300"
  };
  
  return (
    <div className="relative pl-8 pb-8 border-l border-gray-200 last:border-0">
      <div className={`absolute left-0 top-0 w-4 h-4 rounded-full -translate-x-2 ${statusClasses[status]}`}></div>
      <div className="mb-1">
        <span className="text-sm text-gray-500">{date}</span>
        {status === "completed" && (
          <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Completed
          </span>
        )}
        {status === "in-progress" && (
          <span className="ml-2 px-2 py-0.5 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
            In Progress
          </span>
        )}
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Sustainability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full mb-3">
                SUSTAINABILITY
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Committed to a Cleaner Future
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                At PrimeCuro, sustainability isn't just a buzzword—it's at the core of everything we do. We're dedicated to creating products that are as gentle on the planet as they are effective for your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                  OUR APPROACH
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Sustainability at Every Step
                </h2>
                <p className="text-gray-600 mb-6">
                  We've reimagined what cleaning products can be, creating solutions that meet the highest standards of effectiveness while minimizing environmental impact. Our sustainable approach extends from product design and ingredient selection to manufacturing, packaging, and end-of-life considerations.
                </p>
                <p className="text-gray-600 mb-6">
                  By prioritizing biodegradable materials, sustainable sourcing, and eco-friendly manufacturing processes, we're proving that you don't have to compromise performance for planet-friendly choices.
                </p>
                <p className="text-gray-600">
                  Every PrimeCuro product represents our commitment to providing you with effective cleaning solutions that align with your values and help protect our shared environment for future generations.
                </p>
              </div>
              <div className="md:w-1/2">
                <AnimatedImage 
                  src="https://images.unsplash.com/photo-1606791405792-1004f1718d0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                  alt="Sustainable materials" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Initiatives Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full mb-3">
                KEY INITIATIVES
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                How We're Making a Difference
              </h2>
              <p className="text-lg text-gray-600">
                Our commitment to sustainability is realized through concrete actions and initiatives across our business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SustainabilityFeature 
                icon={<Leaf className="w-8 h-8" />} 
                title="Biodegradable Materials" 
                description="Our wipes are made from plant-based fibers that break down naturally, minimizing environmental impact."
              />
              
              <SustainabilityFeature 
                icon={<Filter className="w-8 h-8" />} 
                title="Non-Toxic Formulations" 
                description="We use gentle, effective ingredients that are safe for your family and the environment."
              />
              
              <SustainabilityFeature 
                icon={<Recycle className="w-8 h-8" />} 
                title="Recyclable Packaging" 
                description="Our packaging is designed for recyclability, using minimal materials and recycled content."
              />
              
              <SustainabilityFeature 
                icon={<Globe className="w-8 h-8" />} 
                title="Carbon Neutral Operations" 
                description="We offset 100% of our carbon emissions through verified environmental projects."
              />
              
              <SustainabilityFeature 
                icon={<Award className="w-8 h-8" />} 
                title="Certified Sustainable" 
                description="Our products meet rigorous third-party standards for environmental and social responsibility."
              />
              
              <SustainabilityFeature 
                icon={<BarChart3 className="w-8 h-8" />} 
                title="Transparent Reporting" 
                description="We publish annual sustainability reports detailing our progress and areas for improvement."
              />
            </div>
          </div>
        </section>

        {/* Impact By Numbers Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                OUR IMPACT
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sustainability By The Numbers
              </h2>
              <p className="text-lg text-gray-600">
                Measurable results that demonstrate our commitment to environmental stewardship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard 
                value="98%" 
                label="Biodegradable Materials in Our Products" 
                color="green"
              />
              
              <StatCard 
                value="75%" 
                label="Reduction in Plastic Use Since 2020" 
                color="blue"
              />
              
              <StatCard 
                value="100%" 
                label="Carbon-Neutral Operations" 
                color="brand"
              />
              
              <StatCard 
                value="10K+" 
                label="Trees Planted Through Our Reforestation Initiative" 
                color="amber"
              />
            </div>
          </div>
        </section>

        {/* Sustainability Roadmap Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full mb-3">
                  LOOKING AHEAD
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Sustainability Roadmap
                </h2>
                <p className="text-lg text-gray-600">
                  We're continuously working to improve our environmental performance. Here's our plan for the future.
                </p>
              </div>
              
              <div className="mt-10">
                <ProgressStep 
                  title="100% Plastic-Free Packaging" 
                  date="2022" 
                  status="completed" 
                  description="We've eliminated all plastic from our product packaging, using innovative paper-based alternatives."
                />
                
                <ProgressStep 
                  title="Carbon-Neutral Supply Chain" 
                  date="2023-2024" 
                  status="in-progress" 
                  description="Working with our suppliers to measure, reduce, and offset carbon emissions throughout our entire supply chain."
                />
                
                <ProgressStep 
                  title="Zero Waste Manufacturing" 
                  date="2025" 
                  status="upcoming" 
                  description="Implementing closed-loop manufacturing systems that eliminate waste and maximize resource efficiency."
                />
                
                <ProgressStep 
                  title="Net Positive Environmental Impact" 
                  date="2030" 
                  status="upcoming" 
                  description="Our ultimate goal: creating products that give back more to the environment than they take, through regenerative practices and environmental restoration initiatives."
                />
              </div>
            </div>
          </div>
        </section>

        {/* Partnerships Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                PARTNERSHIPS
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Working Together for Change
              </h2>
              <p className="text-lg text-gray-600">
                We collaborate with leading environmental organizations to amplify our positive impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Partner Logo</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Interested in partnering with us on sustainability initiatives?
              </p>
              <button className="px-6 py-3 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 transition-colors">
                Contact Our Sustainability Team
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-green-600 relative">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2874&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Join Us in Creating a Sustainable Future
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Every time you choose PrimeCuro, you're making a choice for a cleaner planet. Together, we can make a difference.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-white text-green-600 font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                  Shop Sustainable Products
                </button>
                <button className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-colors">
                  Learn More About Our Initiatives
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;
