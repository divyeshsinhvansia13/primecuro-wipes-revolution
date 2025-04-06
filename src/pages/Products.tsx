
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import NewsletterSignup from "@/components/shared/NewsletterSignup";
import ProductFilter from "@/components/products/ProductFilter";
import { Star, Star, ShoppingBag, Heart } from "lucide-react";

// Dummy product data
const allProducts = [
  {
    id: '1',
    name: 'PrimeCuro Ultra-Gentle Baby Wipes',
    description: 'Our premium baby wipes are specially formulated for sensitive skin.',
    price: 12.99,
    oldPrice: 15.99,
    category: 'Baby Wipes',
    image: 'https://images.unsplash.com/photo-1589411454940-67a017535ecf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stock: 15,
    rating: 4.8,
    reviewCount: 124,
    tags: ['Baby Wipes', 'Eco-Friendly']
  },
  {
    id: '2',
    name: 'PrimeCuro Daily Facial Cleansing Wipes',
    description: 'Remove makeup, dirt, and impurities with our gentle facial cleansing wipes.',
    price: 9.99,
    oldPrice: 11.99,
    category: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stock: 22,
    rating: 4.7,
    reviewCount: 93,
    tags: ['Personal Care', 'Eco-Friendly']
  },
  {
    id: '3',
    name: 'PrimeCuro Antibacterial Surface Wipes',
    description: 'Keep your home clean and germ-free with our antibacterial surface wipes.',
    price: 14.99,
    oldPrice: 17.99,
    category: 'Disinfecting',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d03a6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stock: 8,
    rating: 4.9,
    reviewCount: 76,
    tags: ['Disinfecting']
  },
  {
    id: '4',
    name: 'PrimeCuro Pet Grooming Wipes',
    description: 'Gentle, effective wipes for cleaning your pets between baths.',
    price: 13.99,
    oldPrice: 16.99,
    category: 'Pet Care',
    image: 'https://images.unsplash.com/photo-1596958100631-d8e61878be26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stock: 18,
    rating: 4.6,
    reviewCount: 58,
    tags: ['Pet Care', 'Eco-Friendly']
  },
  {
    id: '5',
    name: 'PrimeCuro Hand Sanitizing Wipes',
    description: 'On-the-go hand sanitizing wipes that kill 99.9% of germs.',
    price: 10.99,
    oldPrice: 12.99,
    category: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1605100804673-ffa2c4135faa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stock: 25,
    rating: 4.7,
    reviewCount: 89,
    tags: ['Personal Care', 'Disinfecting']
  },
  {
    id: '6',
    name: 'PrimeCuro Biodegradable Flushable Wipes',
    description: 'Eco-friendly flushable wipes that break down naturally.',
    price: 11.99,
    oldPrice: 13.99,
    category: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1583335940878-5271c7b7e449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stock: 20,
    rating: 4.5,
    reviewCount: 62,
    tags: ['Personal Care', 'Eco-Friendly']
  }
];

const Products = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (selectedCategories.length === 0) {
      setFilteredProducts(allProducts);
    } else {
      setFilteredProducts(
        allProducts.filter(product => 
          product.tags?.some(tag => selectedCategories.includes(tag))
        )
      );
    }
  }, [selectedCategories]);
  
  const handleFilterChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Products Header */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                OUR PRODUCTS
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Premium Eco-Friendly Wipes
              </h1>
              <p className="text-gray-600 mb-6">
                Discover our full range of innovative, sustainable cleaning solutions for every need.
              </p>
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
              <div className="flex flex-wrap gap-2">
                <ProductFilter onFilterChange={handleFilterChange} />
                
                {selectedCategories.length > 0 && (
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="ml-2">
                      Showing {filteredProducts.length} of {allProducts.length} products
                    </span>
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="border border-gray-200 rounded-lg py-2 px-3 text-sm bg-white">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>
            
            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map(product => (
                <div key={product.id} className="premium-card group relative">
                  {product.oldPrice && (
                    <div className="absolute top-4 left-4 z-10 bg-brand-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden rounded-t-xl">
                    <Link to={`/products/${product.id}`}>
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
                      />
                    </Link>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                          <Heart className="h-5 w-5 text-gray-700" />
                        </button>
                        <button className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors">
                          <ShoppingBag className="h-5 w-5 text-gray-700" />
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-brand-600">{product.category}</span>
                    </div>
                    
                    <Link to={`/products/${product.id}`}>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-brand-600 transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating) 
                                ? 'text-gold-500 fill-gold-500' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-xs text-gray-600">({product.reviewCount})</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                        {product.oldPrice && (
                          <span className="ml-2 text-sm text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                        )}
                      </div>
                      
                      {product.stock < 10 ? (
                        <span className="text-xs text-orange-600 font-medium">Only {product.stock} left</span>
                      ) : (
                        <span className="text-xs text-green-600 font-medium">In Stock</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters or check back later for new products.</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Bundle & Save Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                BUNDLE & SAVE
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Special Offers
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get more value with our specially curated product bundles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="premium-card relative overflow-hidden">
                <div className="absolute -right-12 top-5 rotate-45 bg-brand-600 text-white px-12 py-1 text-sm font-semibold">
                  Save $15.99
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Buy 2, Get 1 Free</h3>
                  <p className="text-gray-600 mb-4">Mix and match any three PrimeCuro products and get the lowest priced item for free.</p>
                  <div className="text-sm text-brand-700 font-semibold mb-1">Limited Time Offer!</div>
                  <div className="text-xs text-gray-500">Only 7 offers remaining</div>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5">
                  Shop This Bundle
                </button>
              </div>
              
              <div className="premium-card relative overflow-hidden">
                <div className="absolute -right-12 top-5 rotate-45 bg-brand-600 text-white px-12 py-1 text-sm font-semibold">
                  25% Off
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Family Pack</h3>
                  <p className="text-gray-600 mb-4">One of each: Baby Wipes, Adult Wipes, and Flushable Wipes at a special bundle price.</p>
                  <div className="text-sm text-orange-600 font-semibold mb-1">Best Seller!</div>
                  <div className="text-xs text-gray-500">Only 5 packs remaining</div>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5">
                  Shop This Bundle
                </button>
              </div>
              
              <div className="premium-card relative overflow-hidden">
                <div className="absolute -right-10 top-5 rotate-45 bg-brand-600 text-white px-10 py-1 text-sm font-semibold">
                  15% Off
                </div>
                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Subscribe & Save</h3>
                  <p className="text-gray-600 mb-4">Get your favorite products delivered monthly and enjoy special subscriber discounts.</p>
                  <div className="text-sm text-brand-700 font-semibold mb-1">Most Popular!</div>
                  <div className="text-xs text-gray-500">Cancel anytime</div>
                </div>
                <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-md transform hover:-translate-y-0.5">
                  Start Subscription
                </button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Signup */}
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
