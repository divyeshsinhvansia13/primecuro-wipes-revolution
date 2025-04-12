
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, CheckCircle } from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally submit to your newsletter service
    setIsSubmitted(true);
    setEmail("");
    
    // Reset the success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Newsletter Signup */}
        <div className="max-w-3xl mx-auto mb-16 bg-brand-50 rounded-2xl p-8 shadow-sm border border-brand-100">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Join Our Newsletter</h3>
            <p className="text-gray-600">Sign up and get 10% off your first order + exclusive offers and updates</p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            {isSubmitted ? (
              <div className="w-full flex items-center justify-center bg-green-50 border border-green-100 text-green-700 rounded-lg p-4">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>Thanks for subscribing!</span>
              </div>
            ) : (
              <>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-300"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-brand-600 text-white rounded-lg font-medium hover:bg-brand-700 transition-colors whitespace-nowrap flex items-center justify-center"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </button>
              </>
            )}
          </form>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">PrimeCuro</h3>
            <p className="text-sm text-gray-600 max-w-xs">
              Innovative Hygiene for a Cleaner Tomorrow. Our premium wipes deliver exceptional cleaning power with sustainable materials.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://instagram.com" className="text-gray-500 hover:text-brand-600 transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-500 hover:text-brand-600 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-brand-600 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-gray-900">Shop</h3>
            <ul className="space-y-3">
              {["All Products", "Bundles", "Subscriptions", "Gift Cards"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-gray-900">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Sustainability", "Careers", "Press", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-sm text-gray-600 hover:text-brand-600 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram Feed */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-gray-900">Instagram</h3>
            <p className="text-sm text-gray-600 mb-3">
              Follow us for product updates and sustainability tips.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <a 
                  key={item}
                  href="https://instagram.com" 
                  className="aspect-square rounded-md overflow-hidden bg-gray-100 hover:opacity-90 transition-opacity"
                >
                  <img 
                    src={`https://source.unsplash.com/random/150x150?wipes,${item}`} 
                    alt="Instagram post" 
                    className="w-full h-full object-cover"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} PrimeCuro. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4 sm:mt-0">
              {["Privacy Policy", "Terms of Service", "Shipping Policy", "Refund Policy"].map((item) => (
                <Link
                  key={item}
                  to="#"
                  className="text-xs text-gray-500 hover:text-brand-600 transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
