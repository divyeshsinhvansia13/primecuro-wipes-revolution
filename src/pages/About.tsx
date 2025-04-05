
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { Leaf, Shield, Award, Globe } from "lucide-react";

const TimelineItem = ({ year, title, description, isLeft = true }: { 
  year: string; 
  title: string; 
  description: string;
  isLeft?: boolean;
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center md:items-start gap-4 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className={`w-full max-w-md p-6 rounded-lg bg-white shadow-sm ${isLeft ? 'text-left' : 'text-right'}`}>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-2">
            {year}
          </span>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="hidden md:block w-px h-24 bg-gray-300"></div>
      <div className="md:w-1/2"></div>
    </div>
  );
};

const Value = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 text-brand-800 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const DifferentiatorCard = ({ icon, title, description }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md">
      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const About = () => {
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
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                ABOUT US
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Mission, Vision, and Story
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                PrimeCuro is dedicated to revolutionizing personal and household hygiene with innovative, sustainable products that elevate everyday cleaning routines.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                  OUR STORY
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  From Idea to Innovation
                </h2>
                <p className="text-gray-600 mb-6">
                  PrimeCuro began with a simple observation: traditional cleaning products often contained harsh chemicals and created unnecessary waste. Our founders were determined to create a better solution.
                </p>
                <p className="text-gray-600 mb-6">
                  After extensive research and development, testing countless formulations and sustainable materials, PrimeCuro was born – a line of powerful, eco-friendly wipes that clean effectively without compromising on environmental responsibility.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to offer products that make a difference in people's daily lives while reducing environmental impact. Our commitment to quality, sustainability, and innovation drives everything we do.
                </p>
              </div>
              <div className="md:w-1/2">
                <AnimatedImage 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                  alt="PrimeCuro founders" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                OUR JOURNEY
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The PrimeCuro Timeline
              </h2>
              <p className="text-lg text-gray-600">
                From concept to reality, our journey has been guided by a commitment to excellence and sustainability.
              </p>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300 hidden md:block"></div>
              
              <div className="space-y-16">
                <TimelineItem 
                  year="2022" 
                  title="The Concept" 
                  description="Conceptualized PrimeCuro based on the need for effective, sustainable cleaning products offering premium hygiene care with reduced environmental impact."
                  isLeft={true}
                />
                
                <TimelineItem 
                  year="2023" 
                  title="Research & Strategy" 
                  description="Conducted comprehensive market research, strategized brand design, and developed a deep understanding of customer needs and pain points in the personal care market."
                  isLeft={false}
                />
                
                <TimelineItem 
                  year="2024" 
                  title="Official Foundation" 
                  description="Officially founded PrimeCuro LLC with a dedicated team of experts in sustainable materials, formulation chemistry, and eco-friendly manufacturing processes."
                  isLeft={true}
                />
                
                <TimelineItem 
                  year="2025" 
                  title="First Product Launch" 
                  description="After extensive R&D, launched our first line of biodegradable cleaning wipes to enthusiastic customer feedback, setting new standards for effectiveness and sustainability."
                  isLeft={false}
                />
                
                <TimelineItem 
                  year="2026 (Upcoming)" 
                  title="Global Expansion" 
                  description="Preparing to expand to international markets, bringing our innovative hygiene solutions to customers worldwide while maintaining our commitment to sustainability."
                  isLeft={true}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                OUR VALUES
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Stand For
              </h2>
              <p className="text-lg text-gray-600">
                These core principles guide our decisions, shape our culture, and define who we are as a company.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Value 
                icon={<Globe className="w-8 h-8" />} 
                title="Sustainability" 
                description="We're committed to minimizing our environmental footprint through biodegradable materials, sustainable sourcing, and eco-friendly manufacturing."
              />
              
              <Value 
                icon={<Award className="w-8 h-8" />} 
                title="Quality" 
                description="We never compromise on the effectiveness of our products, ensuring they meet the highest standards of performance and reliability."
              />
              
              <Value 
                icon={<Shield className="w-8 h-8" />} 
                title="Innovation" 
                description="We continuously push the boundaries of what's possible, developing new solutions that make cleaning more effective, convenient, and sustainable."
              />
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                OUR DIFFERENTIATORS
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Makes Us Different
              </h2>
              <p className="text-lg text-gray-600">
                At PrimeCuro, we stand apart from conventional products through our commitment to excellence and responsibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <DifferentiatorCard 
                icon={<Leaf className="w-8 h-8 text-blue-600" />}
                title="Eco-Friendly Materials"
                description="Our biodegradable wipes are made from plant-based materials that break down naturally, reducing environmental impact without compromising quality."
              />
              
              <DifferentiatorCard 
                icon={<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>}
                title="Made in the USA"
                description="Proudly manufactured in American facilities that uphold the highest standards of quality, safety, and ethical production practices."
              />
              
              <DifferentiatorCard 
                icon={<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>}
                title="Dermatologically Tested"
                description="All our products undergo rigorous dermatological testing to ensure they're gentle on even the most sensitive skin, providing peace of mind for the whole family."
              />
              
              <DifferentiatorCard 
                icon={<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}
                title="Cruelty-Free & Vegan"
                description="We're committed to ethical practices with 100% cruelty-free testing and vegan formulations that contain no animal-derived ingredients."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-600 relative">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1616321589084-c648ef89e6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Join the PrimeCuro Community
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Become part of our journey to revolutionize cleaning and personal care with sustainable solutions.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-white text-brand-600 font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                  Shop Now
                </button>
                <button className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-colors">
                  Learn More
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

export default About;
