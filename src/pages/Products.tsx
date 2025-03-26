
import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { Check, Filter, X } from "lucide-react";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Product type definition
interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  description: string;
  features: string[];
  image: string;
}

const ProductCard = ({ product, onQuickView }: { product: Product; onQuickView: (product: Product) => void }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative overflow-hidden">
        <AnimatedImage 
          src={product.image} 
          alt={product.name}
          className="w-full h-64 object-cover transform transition-transform group-hover:scale-105 duration-500"
        />
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-gray-100"
        >
          Quick View
        </button>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900">{product.name}</h3>
          <span className="text-brand-600 font-semibold">{product.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
        <button className="w-full py-2 mt-2 border border-brand-600 text-brand-600 rounded-full hover:bg-brand-50 transition-colors text-sm font-medium">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const FilterTag = ({ 
  label, 
  active, 
  onClick 
}: { 
  label: string; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 transition-colors ${
        active 
          ? 'bg-brand-600 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
      {active && <X className="h-3 w-3" />}
    </button>
  );
};

const ProductDetailDialog = ({ 
  product, 
  open, 
  onClose 
}: { 
  product: Product | null; 
  open: boolean; 
  onClose: () => void;
}) => {
  if (!product) return null;
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
          <DialogDescription className="text-brand-600 font-medium text-lg">
            {product.price}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          <div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div>
            <p className="text-gray-700 mb-4">{product.description}</p>
            
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-brand-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex gap-3">
              <button className="flex-1 py-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-colors font-medium">
                Add to Cart
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                Save
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Fresh Body Wipes",
      price: "$12.99",
      category: "personal",
      description: "Biodegradable body wipes for a refreshing clean anytime, anywhere. Perfect for after the gym, traveling, or whenever you need a quick refresh.",
      features: [
        "Biodegradable & compostable material",
        "Alcohol-free formula",
        "Suitable for sensitive skin",
        "Light fresh scent",
        "30 wipes per pack"
      ],
      image: "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      name: "Facial Cleansing Wipes",
      price: "$9.99",
      category: "personal",
      description: "Gentle facial wipes that remove makeup, dirt, and oil while nourishing your skin. Formulated with aloe vera and cucumber extract.",
      features: [
        "Removes makeup and impurities",
        "Hydrating formula with aloe vera",
        "Fragrance-free for sensitive skin",
        "Resealable packaging",
        "25 wipes per pack"
      ],
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
    },
    {
      id: 3,
      name: "Intimate Hygiene Wipes",
      price: "$10.99",
      category: "personal",
      description: "pH-balanced intimate wipes specially formulated for gentle cleansing. Free from harsh chemicals and irritants.",
      features: [
        "pH-balanced formula",
        "Gynecologist tested",
        "Hypoallergenic",
        "100% biodegradable",
        "Individually wrapped for convenience",
        "20 wipes per pack"
      ],
      image: "https://images.unsplash.com/photo-1615900119312-2acd3a71f3aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
      id: 4,
      name: "Kitchen Surface Wipes",
      price: "$13.99",
      category: "household",
      description: "Heavy-duty kitchen wipes that cut through grease and grime while being safe for food-contact surfaces.",
      features: [
        "Powerful cleaning formula",
        "Safe for food-contact surfaces",
        "Biodegradable material",
        "Textured for better scrubbing",
        "Fresh lemon scent",
        "40 wipes per pack"
      ],
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 5,
      name: "Bathroom Cleaning Wipes",
      price: "$11.99",
      category: "household",
      description: "Effective bathroom wipes that remove soap scum, hard water stains, and bacteria from all bathroom surfaces.",
      features: [
        "Kills 99.9% of bacteria",
        "Removes soap scum and water spots",
        "Safe for most bathroom surfaces",
        "Fresh clean scent",
        "35 wipes per pack"
      ],
      image: "https://images.unsplash.com/photo-1584813470613-5b1c1cad3a69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    },
    {
      id: 6,
      name: "Glass & Mirror Wipes",
      price: "$8.99",
      category: "household",
      description: "Streak-free glass cleaning wipes that leave windows, mirrors, and glass surfaces crystal clear.",
      features: [
        "Streak-free formula",
        "Ammonia-free",
        "Works on multiple surfaces",
        "Quick-drying",
        "30 wipes per pack"
      ],
      image: "https://images.unsplash.com/photo-1585421514284-efb74320d393?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  const filters = [
    { id: "biodegradable", label: "Biodegradable" },
    { id: "fragrance-free", label: "Fragrance-Free" },
    { id: "sensitive-skin", label: "Sensitive Skin" },
    { id: "eco-friendly", label: "Eco-Friendly" }
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleFilterToggle = (filterId: string) => {
    setActiveFilters(prevFilters =>
      prevFilters.includes(filterId)
        ? prevFilters.filter(id => id !== filterId)
        : [...prevFilters, filterId]
    );
  };

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  // Filter products based on active category and filters
  const filteredProducts = products.filter(product => {
    if (activeCategory !== "all" && product.category !== activeCategory) {
      return false;
    }
    
    // For demo purposes, we're not applying detailed filter logic
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                OUR PRODUCTS
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Innovative Cleaning Solutions
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover our range of premium wipes designed for effectiveness, convenience, and sustainability. From personal care to household cleaning, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="all" className="max-w-6xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-3 w-full max-w-md">
                  <TabsTrigger value="all" onClick={() => handleCategoryChange("all")}>All Products</TabsTrigger>
                  <TabsTrigger value="personal" onClick={() => handleCategoryChange("personal")}>Personal Care</TabsTrigger>
                  <TabsTrigger value="household" onClick={() => handleCategoryChange("household")}>Household</TabsTrigger>
                </TabsList>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-gray-500" />
                    <span className="font-medium text-gray-900">Filters:</span>
                  </div>
                  
                  {activeFilters.length > 0 && (
                    <button
                      onClick={clearAllFilters}
                      className="text-sm text-gray-500 hover:text-gray-700"
                    >
                      Clear all
                    </button>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {filters.map(filter => (
                    <FilterTag 
                      key={filter.id}
                      label={filter.label}
                      active={activeFilters.includes(filter.id)}
                      onClick={() => handleFilterToggle(filter.id)}
                    />
                  ))}
                </div>
              </div>
              
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onQuickView={handleQuickView}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="personal">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.filter(p => p.category === "personal").map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onQuickView={handleQuickView}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="household">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.filter(p => p.category === "household").map(product => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      onQuickView={handleQuickView}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                WHY CHOOSE PRIMECURO
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The PrimeCuro Difference
              </h2>
              <p className="text-lg text-gray-600">
                What sets our products apart from the competition.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15.414 4a1 1 0 01-1.414 1.414l-3-3A1 1 0 0112 2zm0 10a1 1 0 01.707.293l.707.707 1.414-1.414a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l.707.707.707-.707A1 1 0 0112 12z" clipRule="evenodd"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Formulations</h3>
                <p className="text-gray-600">
                  Our proprietary blends deliver superior cleaning power without harsh chemicals, protecting both your surfaces and your health.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-Friendly Materials</h3>
                <p className="text-gray-600">
                  Our biodegradable wipes break down naturally after use, significantly reducing environmental impact compared to traditional products.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-brand-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dermatologist Tested</h3>
                <p className="text-gray-600">
                  All our personal care products are tested and approved by dermatologists, ensuring they're gentle on even the most sensitive skin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                TESTIMONIALS
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it—see what people who use our products every day have to say.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  content: "I've tried countless wipes, but PrimeCuro's body wipes are by far the best. They're gentle yet effective, and I love that they're biodegradable.",
                  author: "Jessica T.",
                  title: "Fitness Instructor"
                },
                {
                  content: "The kitchen surface wipes cut through grease better than anything I've used before, and without that harsh chemical smell. They're now a staple in my cleaning routine.",
                  author: "Michael L.",
                  title: "Home Chef"
                },
                {
                  content: "As someone with sensitive skin, finding facial wipes that don't cause irritation has been a challenge. PrimeCuro's facial cleansing wipes are a game-changer—effective yet gentle.",
                  author: "Sophia R.",
                  title: "Skincare Enthusiast"
                }
              ].map((review, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{review.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                    <div>
                      <p className="font-semibold text-gray-900">{review.author}</p>
                      <p className="text-sm text-gray-600">{review.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-brand-600 relative">
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
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Experience the PrimeCuro Difference?
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of satisfied customers who've made the switch to premium, sustainable wipes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 bg-white text-brand-600 font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                  Shop Now
                </button>
                <button className="px-8 py-3 bg-transparent text-white font-medium rounded-full border border-white/30 hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ProductDetailDialog product={selectedProduct} open={dialogOpen} onClose={handleCloseDialog} />
    </div>
  );
};

export default Products;
