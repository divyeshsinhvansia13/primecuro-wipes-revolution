
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductsShowcase from "@/components/home/ProductsShowcase";
import Features from "@/components/home/Features";
import NewsletterSignup from "@/components/shared/NewsletterSignup";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";

// Products for bundle display
const bundleProducts = [
  {
    id: '1',
    name: 'Skin Care Baby Wipes - Scented',
    description: 'Gentle, skin-friendly scented wipes that are biodegradable and eco-friendly.',
    price: 12.99,
    discount: 3.00,
    image: 'https://images.unsplash.com/photo-1594033580867-40487b2db5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    remaining: 7
  },
  {
    id: '2',
    name: 'Family Pack Bundle',
    description: 'One of each: Baby Wipes, Adult Wipes, and Flushable Wipes at a special bundle price.',
    price: 34.99,
    discount: 8.75,
    image: 'https://images.unsplash.com/photo-1605100804673-ffa2c4135faa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    remaining: 5
  },
  {
    id: '3',
    name: 'Subscribe & Save Plan',
    description: 'Get your favorite products delivered monthly and enjoy special subscriber discounts.',
    price: 29.99,
    discount: 4.50,
    image: 'https://images.unsplash.com/photo-1583335940878-5271c7b7e449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    remaining: null // Subscription plan doesn't have limited quantities
  }
];

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
        
        {/* Features Section with updated blue color scheme */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-blue-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                WHY CHOOSE US
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Makes Our Products Different
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our commitment to quality, sustainability, and innovation sets us apart in the industry.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-6xl mx-auto">
              <div className="premium-card hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Eco-Friendly Materials</h3>
                <p className="text-gray-600 text-center">
                  Our biodegradable wipes are made from plant-based materials that break down naturally, reducing environmental impact without compromising quality.
                </p>
              </div>
              
              <div className="premium-card hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Dermatologically Tested</h3>
                <p className="text-gray-600 text-center">
                  All our products undergo rigorous dermatological testing to ensure they're gentle on even the most sensitive skin, providing peace of mind for the whole family.
                </p>
              </div>
              
              <div className="premium-card hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-gray-900 mb-4">Made in the USA</h3>
                <p className="text-gray-600 text-center">
                  Proudly manufactured in American facilities that uphold the highest standards of quality, safety, and ethical production practices.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center mt-10 md:mt-12">
              <Link to="/about">
                <Button className="premium-button group">
                  Learn More About Our Quality
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                WHAT PEOPLE SAY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
                Our Customers Love Us
              </h2>
              
              <div className="premium-card max-w-2xl mx-auto">
                <div className="flex justify-center mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-gold-500 fill-gold-500" size={24} />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-800 italic mb-6">
                  "These wipes have completely changed my daily routine. They're effective, gentle on my skin, and I love knowing I'm making a sustainable choice."
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                      alt="Customer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-600">Loyal Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Bundle & Save Section */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                SPECIAL OFFERS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Bundle & Save
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get more value with our specially curated product bundles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
              {bundleProducts.map((bundle, index) => (
                <div key={index} className="premium-card relative overflow-hidden">
                  <div className="absolute -right-10 top-5 rotate-45 bg-brand-600 text-white px-10 py-1 text-sm font-semibold">
                    Save ${bundle.discount.toFixed(2)}
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{bundle.name}</h3>
                    <p className="text-gray-600 mb-4">{bundle.description}</p>
                    <div className="text-sm text-brand-700 font-semibold mb-1">
                      {index === 0 ? "Limited Time Offer!" : index === 1 ? "Best Seller!" : "Most Popular!"}
                    </div>
                    <div className="text-xs text-gray-500">
                      {bundle.remaining ? `Only ${bundle.remaining} ${index === 0 ? 'offers' : 'packs'} remaining` : 'Cancel anytime'}
                    </div>
                  </div>
                  <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5">
                    {index === 2 ? 'Start Subscription' : 'Shop This Bundle'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <NewsletterSignup />
        
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-brand-600 relative overflow-hidden">
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Experience the Difference?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of satisfied customers who've made the switch to premium, sustainable wipes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/products">
                  <button className="w-full sm:w-auto px-8 py-3 bg-white text-brand-600 font-medium rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Shop Now
                  </button>
                </Link>
                <Link to="/about">
                  <button className="w-full sm:w-auto px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-colors flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>
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
