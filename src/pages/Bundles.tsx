import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { Check } from "lucide-react";

const BundlePlan = ({ 
  title, 
  description, 
  features, 
  isPopular = false, 
  variant = 'default' 
}: { 
  title: string; 
  description: string; 
  features: string[];
  isPopular?: boolean;
  variant?: 'default' | 'premium';
}) => {
  return (
    <div className={`relative rounded-xl overflow-hidden shadow-lg bg-white border ${isPopular ? 'border-brand-600' : 'border-gray-200'}`}>
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-brand-600 text-white text-center py-1 text-xs font-medium">
          MOST POPULAR
        </div>
      )}
      <div className={`p-6 ${isPopular ? 'pt-8' : ''}`}>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-gray-600">Bundle</span>
        </div>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 px-4 rounded-full font-medium transition-colors ${
            variant === 'premium' 
              ? 'bg-brand-600 text-white hover:bg-brand-700' 
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
          }`}
        >
          Choose Bundle
        </button>
      </div>
    </div>
  );
};

const Bundles = () => {
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
                BUNDLE & SAVE
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Save More With Our Value Bundles
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Get more of your favorite PrimeCuro products at a better price. Our carefully curated bundles offer the perfect combination for your specific needs.
              </p>
            </div>
          </div>
        </section>

        {/* Bundles Tabs Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="personal" className="max-w-5xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 w-full max-w-md">
                  <TabsTrigger value="personal">Personal Care</TabsTrigger>
                  <TabsTrigger value="household">Family Bundles</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="personal" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <BundlePlan 
                    title="Buy 2, Get 1 Free" 
                    description="Perfect starter pack for personal hygiene."
                    features={[
                      "Mix and match any three PrimeCuro products",
                      "Get the lowest priced item for free",
                      "Free shipping",
                      "One-time purchase"
                    ]}
                  />
                  
                  <BundlePlan 
                    title="Family Essentials" 
                    description="Our most comprehensive personal care package."
                    features={[
                      "2 packs of Baby Wipes (Scented)",
                      "2 packs of Adult/Baby Wipes (Unscented)",
                      "2 packs of Flushable Adult Wipes",
                      "Free shipping",
                      "20% savings compared to individual purchases"
                    ]}
                    isPopular={true}
                    variant="premium"
                  />
                  
                  <BundlePlan 
                    title="Mix & Match Pack" 
                    description="Create your perfect combination."
                    features={[
                      "Choose any 4 packs of PrimeCuro wipes",
                      "Customize to your specific needs",
                      "Free shipping",
                      "15% discount on total price"
                    ]}
                  />
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 mt-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Subscribe & Save Even More</h3>
                      <p className="text-gray-600 mb-4">
                        Sign up for a subscription and save an additional 10% on any bundle. Get your favorite products delivered right to your door on your schedule.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-brand-600 mr-2" />
                          <span className="text-gray-700">Flexible delivery schedules</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-brand-600 mr-2" />
                          <span className="text-gray-700">Cancel or pause anytime</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-brand-600 mr-2" />
                          <span className="text-gray-700">Exclusive subscriber perks</span>
                        </li>
                      </ul>
                      <button className="px-6 py-3 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 transition-colors">
                        Learn More About Subscriptions
                      </button>
                    </div>
                    <div className="md:w-1/2">
                      <AnimatedImage 
                        src="https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                        alt="Subscription box" 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="household" className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <BundlePlan 
                    title="Home & Baby Combo" 
                    description="Perfect for families with little ones."
                    features={[
                      "3 packs of Baby Wipes (Scented)",
                      "2 packs of Adult/Baby Wipes (Unscented)",
                      "1 pack of Flushable Adult Wipes",
                      "Free shipping",
                      "15% savings compared to individual purchases"
                    ]}
                  />
                  
                  <BundlePlan 
                    title="Complete Home Bundle" 
                    description="Everything you need for a clean, fresh home."
                    features={[
                      "2 packs of Baby Wipes (Scented)",
                      "2 packs of Adult/Baby Wipes (Unscented)",
                      "2 packs of Flushable Adult Wipes",
                      "Free shipping + Gift with purchase",
                      "25% savings compared to individual purchases"
                    ]}
                    isPopular={true}
                    variant="premium"
                  />
                  
                  <BundlePlan 
                    title="Family Variety Pack" 
                    description="A variety of wipes for all your family's needs."
                    features={[
                      "2 packs of Baby Wipes (Scented)",
                      "2 packs of Adult/Baby Wipes (Unscented)",
                      "2 packs of Flushable Adult Wipes",
                      "Free shipping",
                      "20% savings compared to individual purchases"
                    ]}
                  />
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8 mt-12">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom Bundles Available</h3>
                      <p className="text-gray-600 mb-4">
                        Can't find exactly what you need? Create your own custom bundle by selecting your favorite products and save 15% when you order 5 or more items.
                      </p>
                      <ul className="space-y-2 mb-6">
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-brand-600 mr-2" />
                          <span className="text-gray-700">Mix and match any products</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-brand-600 mr-2" />
                          <span className="text-gray-700">Automatic discounts at checkout</span>
                        </li>
                        <li className="flex items-center">
                          <Check className="h-5 w-5 text-brand-600 mr-2" />
                          <span className="text-gray-700">Free shipping on orders over $35</span>
                        </li>
                      </ul>
                      <button className="px-6 py-3 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 transition-colors">
                        Build Your Custom Bundle
                      </button>
                    </div>
                    <div className="md:w-1/2">
                      <AnimatedImage 
                        src="https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                        alt="Custom product bundle" 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    question: "How do bundle subscriptions work?",
                    answer: "When you subscribe to a bundle, you'll receive your selected bundle at regular intervals of your choosing (monthly, bi-monthly, or quarterly). You can modify, pause, or cancel your subscription at any time through your account dashboard."
                  },
                  {
                    question: "Can I customize the contents of my bundle?",
                    answer: "Yes! We offer fully customizable bundles where you can select exactly which products you want. Simply choose the 'Build Your Custom Bundle' option and select your preferred items."
                  },
                  {
                    question: "Are there any subscription fees?",
                    answer: "There are no subscription fees beyond the cost of the products. In fact, subscribers save 10% on every order compared to one-time purchases, plus enjoy free shipping on all subscription orders."
                  },
                  {
                    question: "How can I cancel my bundle subscription?",
                    answer: "You can cancel your subscription at any time by logging into your account, navigating to the 'Subscriptions' section, and selecting 'Cancel Subscription'. There are no cancellation fees or penalties."
                  },
                  {
                    question: "Can I change the delivery frequency of my bundle?",
                    answer: "Absolutely! You have full control over your delivery schedule. You can adjust the frequency, skip a delivery, or pause your subscription through your account dashboard."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 text-center">
                <p className="text-gray-600 mb-4">
                  Need more information about our bundles?
                </p>
                <button className="px-6 py-3 bg-transparent text-brand-600 font-medium rounded-full border border-brand-600 hover:bg-brand-50 transition-colors">
                  Contact Customer Support
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

export default Bundles;
