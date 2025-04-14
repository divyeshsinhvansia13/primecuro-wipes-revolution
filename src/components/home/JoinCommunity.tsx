
import React from "react";
import { Users, Star, MessageSquare, Heart } from "lucide-react";

const JoinCommunity = () => {
  const testimonials = [
    {
      content: "Switching to PrimeCuro was one of the best decisions I've made for my family. Their baby wipes are gentle on my son's sensitive skin and I love knowing we're using an eco-friendly product.",
      author: "Sarah M.",
      role: "Mother of two",
      stars: 5
    },
    {
      content: "As someone with sensitive skin, I've always struggled to find wipes that don't cause irritation. PrimeCuro's adult wipes are perfect - effective and gentle at the same time.",
      author: "James K.",
      role: "Community member",
      stars: 5
    },
    {
      content: "I joined the PrimeCuro community because I believe in their mission. It's amazing to see a company that truly cares about their environmental impact.",
      author: "Maya T.",
      role: "Environmental advocate",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-brand-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3 shadow-sm">
            JOIN US
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Be Part of Our Growing Community
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of individuals and families who've made the switch to sustainable hygiene products and are making a difference every day.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Community Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Users className="h-8 w-8 text-brand-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gray-900 mb-1">50K+</h3>
              <p className="text-gray-600">Community Members</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Star className="h-8 w-8 text-brand-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gray-900 mb-1">4.9/5</h3>
              <p className="text-gray-600">Average Rating</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <MessageSquare className="h-8 w-8 text-brand-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gray-900 mb-1">10K+</h3>
              <p className="text-gray-600">Testimonials</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <Heart className="h-8 w-8 text-brand-600 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gray-900 mb-1">85%</h3>
              <p className="text-gray-600">Repeat Customers</p>
            </div>
          </div>
          
          {/* Community Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Join CTA */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ready to Join Our Community?
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/products"
                className="px-8 py-3 bg-brand-600 text-white font-medium rounded-full hover:bg-brand-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Shop Our Products
              </a>
              <a 
                href="#newsletter"
                className="px-8 py-3 bg-transparent text-brand-600 font-medium rounded-full border border-brand-600 hover:bg-brand-50 transition-colors"
              >
                Subscribe to Updates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCommunity;
