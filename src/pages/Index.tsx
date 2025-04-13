
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import Features from "@/components/home/Features";
import CustomerReviews from "@/components/home/CustomerReviews";
import ProductStandards from "@/components/home/ProductStandards";
import JoinCommunity from "@/components/home/JoinCommunity";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero 
          onShopProductsClick={() => navigate('/products')}
          onLearnMoreClick={() => navigate('/sustainability')}
        />
        
        <ProductsShowcase />
        
        {/* Product Standards Section - NEW */}
        <ProductStandards />
        
        {/* Features Section with updated color scheme */}
        <Features />
        
        {/* Community Section - NEW */}
        <JoinCommunity />
        
        {/* Customer Reviews Carousel */}
        <CustomerReviews />
        
        {/* Bundle & Save Section with premium styling */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3 shadow-sm">
                SPECIAL OFFERS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bundle & Save
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get more value with our specially curated product bundles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100">
                <div className="bg-gradient-to-r from-blue-50 to-brand-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Buy 2, Get 1 Free</h3>
                  <p className="text-gray-600 mb-4">Mix and match any three PrimeCuro products and get the lowest priced item for free.</p>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                  Shop This Bundle
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100">
                <div className="bg-gradient-to-r from-blue-50 to-brand-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Family Pack</h3>
                  <p className="text-gray-600 mb-4">One of each: Baby Wipes, Adult Wipes, and Flushable Wipes at a special bundle price.</p>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                  Shop This Bundle
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100">
                <div className="bg-gradient-to-r from-blue-50 to-brand-50 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Subscribe & Save</h3>
                  <p className="text-gray-600 mb-4">Get your favorite products delivered monthly and enjoy special subscriber discounts.</p>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                  Start Subscription
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section with enhanced premium gradient background */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-blue-700" />
          <div 
            className="absolute inset-0 z-0 opacity-15 mix-blend-overlay"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1616321589084-c648ef89e6cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-sm">
                Ready to Experience the PrimeCuro Difference?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of satisfied customers who've made the switch to premium, sustainable wipes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-white text-brand-600 font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
                  onClick={() => navigate('/products')}>
                  Shop Now
                </button>
                <button className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-colors shadow-md hover:shadow-lg"
                  onClick={() => navigate('/goals-impact')}>
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
