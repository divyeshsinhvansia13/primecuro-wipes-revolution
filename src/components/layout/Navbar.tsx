
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Determine if the current page has a white background that needs dark text
  const hasDarkBackground = location.pathname === "/" || location.pathname.includes("/sustainability");
  
  const navItems = [
    { name: "Products", href: "/products" },
    { name: "Bundle & Save", href: "/bundles" },
    { name: "About Us", href: "/about" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Goals & Impact", href: "/goals-impact" },
    { name: "Blog", href: "/blog" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location.pathname]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
        scrolled ? "py-2 sm:py-3 bg-white/90 backdrop-blur-md shadow-sm" : "py-3 sm:py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="z-10">
            <h1 className={cn(
              "text-xl font-bold tracking-tight transition-colors",
              scrolled || isOpen || !hasDarkBackground ? "text-brand-700" : "text-white"
            )}>PrimeCuro</h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.href} 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    scrolled || !hasDarkBackground 
                      ? "text-gray-800 hover:text-brand-600" 
                      : "text-white/90 hover:text-white"
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Right Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={cn(
              "transition-colors",
              scrolled || !hasDarkBackground ? "text-gray-800 hover:text-brand-600" : "text-white/90 hover:text-white"
            )}>
              <Search className="h-5 w-5" />
            </button>
            <button className={cn(
              "transition-colors",
              scrolled || !hasDarkBackground ? "text-gray-800 hover:text-brand-600" : "text-white/90 hover:text-white"
            )}>
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className={cn(
              "lg:hidden z-20 transition-colors p-1",
              scrolled || isOpen || !hasDarkBackground ? "text-gray-800 hover:text-gray-900" : "text-white hover:text-white/80"
            )}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Mobile menu */}
          <div 
            className={cn(
              "fixed inset-0 bg-white z-10 flex flex-col p-6 pt-20 lg:hidden transition-transform duration-300 ease-in-out",
              isOpen ? "translate-x-0" : "translate-x-full"
            )}
          >
            <ul className="space-y-6 flex flex-col items-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-lg font-medium text-gray-800 hover:text-brand-600 transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center justify-center space-x-6 mt-10">
              <button className="text-gray-800 hover:text-brand-600 transition-colors">
                <Search className="h-6 w-6" />
                <span className="sr-only">Search</span>
              </button>
              <button className="text-gray-800 hover:text-brand-600 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                <span className="sr-only">Cart</span>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
