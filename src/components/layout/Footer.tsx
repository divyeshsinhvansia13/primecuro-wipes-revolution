
import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12 md:py-16">
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

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-md font-semibold text-gray-900">Stay Connected</h3>
            <p className="text-sm text-gray-600">
              Subscribe to our newsletter for updates, offers, and sustainability tips.
            </p>
            <form className="mt-2 flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-300 flex-1"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm bg-brand-600 text-white rounded-md hover:bg-brand-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
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
