
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ChevronRight, Award, Leaf, LineChart, Users, Globe } from "lucide-react";

const GoalsImpact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-green-50 to-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Goals & Impact</h1>
              <p className="text-xl text-gray-700 mb-8">
                At PrimeCuro, we're committed to creating a healthier, more sustainable future for all through thoughtful innovation and meaningful action.
              </p>
              <div className="flex justify-center">
                <a href="#mission" className="inline-flex items-center px-6 py-3 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-colors">
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Values */}
        <section id="mission" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-xl text-gray-700">
                To create high-quality, eco-friendly hygiene products that promote personal well-being while minimizing environmental impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-green-50 rounded-xl p-8 text-center">
                <Leaf className="mx-auto h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Environmental Stewardship</h3>
                <p className="text-gray-700">
                  We're committed to reducing our environmental footprint through sustainable sourcing, biodegradable materials, and renewable energy.
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-8 text-center">
                <Users className="mx-auto h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Responsibility</h3>
                <p className="text-gray-700">
                  We believe in treating our employees, customers, and communities with respect and dignity, while giving back through charitable initiatives.
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-8 text-center">
                <Award className="mx-auto h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Product Integrity</h3>
                <p className="text-gray-700">
                  We're dedicated to creating effective, safe products with transparent ingredients and sustainable packaging solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-xl text-gray-700">
                We're proud of the positive change we're creating through our sustainable practices and community engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Environmental Impact</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <LineChart className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Reduced plastic usage by 75% through innovative packaging</span>
                    </li>
                    <li className="flex">
                      <LineChart className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Saved 2 million gallons of water through efficient production processes</span>
                    </li>
                    <li className="flex">
                      <LineChart className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Prevented 10,000 lbs of harmful chemicals from entering waterways</span>
                    </li>
                    <li className="flex">
                      <LineChart className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">100% of our facilities powered by renewable energy</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Social Impact</h3>
                  <ul className="space-y-4">
                    <li className="flex">
                      <Globe className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Donated over 500,000 products to communities in need</span>
                    </li>
                    <li className="flex">
                      <Globe className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Created 200+ jobs with fair wages and benefits</span>
                    </li>
                    <li className="flex">
                      <Globe className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Invested $2 million in community development programs</span>
                    </li>
                    <li className="flex">
                      <Globe className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">Partnered with 15 NGOs to support environmental education</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2030 Goals */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our 2030 Goals</h2>
              <p className="text-xl text-gray-700">
                We're committed to reaching these ambitious targets by 2030 to create a healthier planet for future generations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-8 text-center shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">100%</h3>
                <p className="text-gray-700">
                  Plastic-free packaging across our entire product line
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Carbon Neutral</h3>
                <p className="text-gray-700">
                  Operations with net-zero carbon emissions
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">1 Million</h3>
                <p className="text-gray-700">
                  Trees planted through our reforestation initiative
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Zero Waste</h3>
                <p className="text-gray-700">
                  Manufacturing with closed-loop production systems
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">50% Reduction</h3>
                <p className="text-gray-700">
                  In water usage across all production facilities
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-md">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">5 Million</h3>
                <p className="text-gray-700">
                  Products donated to underserved communities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Mission CTA */}
        <section className="py-16 bg-brand-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-xl mb-8">
                Together, we can create a cleaner, healthier world for generations to come.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="/sustainability" className="px-8 py-3 bg-white text-brand-600 font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
                  Learn About Sustainability
                </a>
                <a href="/products" className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white hover:bg-white/10 transition-colors shadow-md hover:shadow-lg">
                  Shop Eco-Friendly Products
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GoalsImpact;
