
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import Features from "@/components/home/Features";
import { Award, Shield, Leaf, Star } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProductsShowcase />
        
        {/* Features Section with updated teal color scheme */}
        <section className="py-20 bg-gradient-to-b from-brand-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes <span className="text-brand-600">PrimeCuro</span> Different
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our commitment to quality, sustainability, and innovation sets us apart in the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              <div className="premium-card p-8 hover:shadow-premium-hover">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Eco-Friendly Materials</h3>
                <p className="text-gray-600 text-center">
                  Our biodegradable wipes are made from plant-based materials that break down naturally, reducing environmental impact without compromising quality.
                </p>
              </div>
              
              <div className="premium-card p-8 hover:shadow-premium-hover">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Dermatologically Tested</h3>
                <p className="text-gray-600 text-center">
                  All our products undergo rigorous dermatological testing to ensure they're gentle on even the most sensitive skin, providing peace of mind for the whole family.
                </p>
              </div>
              
              <div className="premium-card p-8 hover:shadow-premium-hover">
                <div className="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Star className="w-8 h-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Made in the USA</h3>
                <p className="text-gray-600 text-center">
                  Proudly manufactured in American facilities that uphold the highest standards of quality, safety, and ethical production practices.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-12">
              <button className="px-8 py-3 bg-gradient-to-r from-brand-500 to-brand-700 text-white font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Learn More About Our Quality
              </button>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-50/50 to-transparent z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                WHAT PEOPLE SAY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
                Our Customers <span className="text-brand-600">Love Us</span>
              </h2>
              
              <div className="premium-card p-10 backdrop-blur-sm bg-white/70">
                <blockquote className="text-xl md:text-2xl text-gray-800 italic mb-6 font-display">
                  "PrimeCuro wipes have completely changed my daily routine. They're effective, gentle on my skin, and I love knowing I'm making a sustainable choice."
                </blockquote>
                
                <div className="flex items-center">
                  <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-brand-200">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-brand-600">Loyal Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bundle & Save Section */}
        <section className="py-20 bg-gradient-to-b from-white to-brand-50/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                SPECIAL OFFERS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bundle & <span className="text-brand-600">Save</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get more value with our specially curated product bundles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="premium-card hover:shadow-premium-hover backdrop-blur-sm bg-white/50 p-6">
                <div className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Buy 2, Get 1 Free</h3>
                  <p className="text-gray-600 mb-4">Mix and match any three PrimeCuro products and get the lowest priced item for free.</p>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Shop This Bundle
                </button>
              </div>
              
              <div className="premium-card hover:shadow-premium-hover backdrop-blur-sm bg-white/50 p-6">
                <div className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Family Pack</h3>
                  <p className="text-gray-600 mb-4">One of each: Baby Wipes, Adult Wipes, and Flushable Wipes at a special bundle price.</p>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Shop This Bundle
                </button>
              </div>
              
              <div className="premium-card hover:shadow-premium-hover backdrop-blur-sm bg-white/50 p-6">
                <div className="bg-gradient-to-r from-brand-50 to-brand-100 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Subscribe & Save</h3>
                  <p className="text-gray-600 mb-4">Get your favorite products delivered monthly and enjoy special subscriber discounts.</p>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-brand-500 to-brand-600 text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Start Subscription
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section with premium effect */}
        <section className="py-20 bg-gradient-to-r from-brand-700 to-brand-900 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0 opacity-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1616321589084-c648ef89e6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/4 backdrop-blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/4 backdrop-blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the <span className="text-brand-200">PrimeCuro Difference?</span>
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of satisfied customers who've made the switch to premium, sustainable wipes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-white text-brand-700 font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  Shop Now
                </button>
                <button className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
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

export default Index;
