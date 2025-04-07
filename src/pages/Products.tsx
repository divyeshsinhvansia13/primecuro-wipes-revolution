import React, { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedImage from "@/components/ui/AnimatedImage";
import { Check, Filter, X, Clock } from "lucide-react";
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
  status: "available" | "coming-soon";
  badges: string[];
}

const ProductCard = ({ product, onQuickView }: { product: Product; onQuickView: (product: Product) => void }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative overflow-hidden">
        <AnimatedImage 
          src={product.image} 
          alt={product.name}
          className={`w-full h-64 object-cover transform transition-transform group-hover:scale-105 duration-500 ${product.status === "coming-soon" ? "blur-[1px] opacity-90" : ""}`}
        />
        {product.status === "coming-soon" && (
          <div className="absolute top-3 right-3 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-sm">
            <Clock className="h-3 w-3 mr-1" />
            Coming Soon
          </div>
        )}
        <button
          onClick={() => onQuickView(product)}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-gray-100"
          disabled={product.status === "coming-soon"}
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
        <div className="flex flex-wrap gap-1 mb-3">
          {product.badges.slice(0, 2).map((badge, index) => (
            <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
              {badge}
            </span>
          ))}
        </div>
        <button 
          className={`w-full py-2 mt-2 rounded-full text-sm font-medium ${
            product.status === "available" 
              ? "border border-brand-600 text-brand-600 hover:bg-brand-50" 
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          } transition-colors`}
          disabled={product.status === "coming-soon"}
        >
          {product.status === "available" ? "Add to Cart" : "Notify Me"}
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
              className={`w-full h-auto rounded-lg ${product.status === "coming-soon" ? "blur-[1px] opacity-90" : ""}`}
            />
            {product.status === "coming-soon" && (
              <div className="mt-3 bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center">
                <Clock className="h-4 w-4 mr-2" />
                This product is coming soon
              </div>
            )}
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
            
            <div className="flex flex-wrap gap-2 mb-6">
              {product.badges.map((badge, index) => (
                <span key={index} className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
            
            {product.status === "available" ? (
              <div className="flex gap-3">
                <button className="flex-1 py-2 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-colors font-medium">
                  Add to Cart
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                  Save
                </button>
              </div>
            ) : (
              <button className="w-full py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium">
                Notify Me When Available
              </button>
            )}
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

  // Updated product data with new images
  const products: Product[] = [
    {
      id: 1,
      name: "PrimeCuro Skin Care Baby Wipes - Scented",
      price: "$12.99",
      category: "personal",
      description: "Gentle, skin-friendly scented wipes with cucumber and green tea fragrance, perfect for baby's delicate skin. Biodegradable and eco-friendly.",
      features: [
        "Cucumber & Green Tea fragrance",
        "Biodegradable & eco-friendly material",
        "Gentle formula for baby's skin",
        "Hypoallergenic and dermatologically tested",
        "Alcohol-free and pH balanced",
        "80 wipes per pack"
      ],
      image: "/lovable-uploads/6333b48f-6279-4d52-aa19-607101ddf4aa.png",
      status: "available",
      badges: ["Biodegradable", "Eco-Friendly", "Hypoallergenic"]
    },
    {
      id: 2,
      name: "PrimeCuro Skin Care Baby Wipes - Unscented",
      price: "$14.99",
      category: "personal",
      description: "Perfect for sensitive skin, these unscented wipes are biodegradable, eco-friendly, and hypoallergenic with added moisturizers to keep skin soft and healthy.",
      features: [
        "Fragrance-free formula",
        "Perfect for sensitive skin",
        "Biodegradable & eco-friendly material",
        "Hypoallergenic and dermatologically tested",
        "Added moisturizers for skin health",
        "80 wipes per pack"
      ],
      image: "/lovable-uploads/57dedc89-87e4-4934-b473-4d1d042d80e6.png",
      status: "available",
      badges: ["Fragrance-Free", "Sensitive Skin", "Biodegradable"]
    },
    {
      id: 3,
      name: "PrimeCuro Flushable Adult Wipes - Scented",
      price: "$13.99",
      category: "personal",
      description: "Eco-friendly flushable wipes with a refreshing green tea and cucumber scent, perfect for adults seeking comfort and cleanliness with reduced environmental impact.",
      features: [
        "Green Tea & Cucumber fragrance",
        "Flushable and septic-safe",
        "Biodegradable & eco-friendly material",
        "Hypoallergenic and dermatologically tested",
        "Perfect for travel and on-the-go",
        "60 wipes per pack"
      ],
      image: "/lovable-uploads/57014f70-7bb0-40c2-8d85-c2b5717a9c40.png",
      status: "available",
      badges: ["Flushable", "Biodegradable", "Septic-Safe"]
    },
    {
      id: 4,
      name: "PrimeCuro Disinfecting Wipes - Fresh Fragrance",
      price: "$15.99",
      category: "household",
      description: "Experience the clean, crisp scent of ocean breeze with our powerful disinfecting wipes that eliminate 99.9% of germs while being gentle on surfaces.",
      features: [
        "Kills 99.9% of germs and bacteria",
        "Ocean breeze fresh scent",
        "Safe for most household surfaces",
        "Biodegradable & eco-friendly material",
        "No harsh chemicals",
        "75 wipes per pack"
      ],
      image: "/lovable-uploads/5a08963b-0634-4989-90a3-a0f89dda752b.png",
      status: "available",
      badges: ["Kills 99.9% Germs", "Multi-Surface", "Eco-Friendly"]
    },
    {
      id: 5,
      name: "PrimeCuro Disinfecting Wipes - Lemon Scented",
      price: "$15.99",
      category: "household",
      description: "Our powerful disinfectant wipes kill 99.9% of germs and bacteria with a refreshing lemon scent, perfect for household surfaces and everyday cleaning needs.",
      features: [
        "Kills 99.9% of germs and bacteria",
        "Fresh lemon scent",
        "Safe for most household surfaces",
        "Biodegradable & eco-friendly material",
        "No harsh chemicals",
        "75 wipes per pack"
      ],
      image: "/lovable-uploads/474043ad-7a36-41e9-b0a0-66a4a625e9b8.png",
      status: "coming-soon",
      badges: ["Kills 99.9% Germs", "Multi-Surface", "Eco-Friendly"]
    },
    {
      id: 6,
      name: "PrimeCuro Hand Wipes - On The Go",
      price: "$8.99",
      category: "household",
      description: "Convenient, pocket-sized biodegradable hand wipes perfect for travel, office, or anywhere you need a quick refresh.",
      features: [
        "Portable and convenient size",
        "Gentle yet effective cleansing",
        "Quick-drying formula",
        "Biodegradable & eco-friendly material",
        "Light, fresh scent",
        "20 individually wrapped wipes"
      ],
      image: "/lovable-uploads/474043ad-7a36-41e9-b0a0-66a4a625e9b8.png",
      status: "coming-soon",
      badges: ["Portable", "Biodegradable", "Quick-Drying"]
    },
    {
      id: 7,
      name: "PrimeCuro Lens Wipes - Crystal Clear",
      price: "$7.99",
      category: "household",
      description: "Specially formulated to clean eyeglasses, sunglasses, and electronic screens without streaks or residue. Lint-free and gentle on coated lenses.",
      features: [
        "Streak-free formula",
        "Safe for all lens coatings",
        "Anti-static properties",
        "Lint-free cleaning",
        "Perfect for glasses and screens",
        "30 individually wrapped wipes"
      ],
      image: "/lovable-uploads/474043ad-7a36-41e9-b0a0-66a4a625e9b8.png",
      status: "coming-soon",
      badges: ["Streak-Free", "Anti-Static", "Lint-Free"]
    }
  ];

  const filters = [
    { id: "biodegradable", label: "Biodegradable" },
    { id: "fragrance-free", label: "Fragrance-Free" },
    { id: "sensitive-skin", label: "Sensitive Skin" },
    { id: "eco-friendly", label: "Eco-Friendly" },
    { id: "hypoallergenic", label: "Hypoallergenic" }
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
    
    // For demo purposes, we're implementing a simple filter logic based on badges
    if (activeFilters.length > 0) {
      return activeFilters.some(filter => 
        product.badges.some(badge => 
          badge.toLowerCase().includes(filter.toLowerCase())
        )
      );
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                OUR PRODUCTS
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Premium Care Solutions
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
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                WHY CHOOSE PRIMECURO
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What Makes Us Different
              </h2>
              <p className="text-lg text-gray-600">
                Our commitment to quality, sustainability, and innovation sets us apart.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Eco-friendly Materials</h3>
                <p className="text-gray-600">
                  All our products use biodegradable materials that reduce environmental impact.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Made in the USA</h3>
                <p className="text-gray-600">
                  Proudly manufactured in American facilities with strict quality control.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dermatologically Tested</h3>
                <p className="text-gray-600">
                  All products undergo rigorous testing to ensure they're gentle on skin.
                </p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cruelty-Free & Vegan</h3>
                <p className="text-gray-600">
                  We never test on animals and use only vegan ingredients in our formulations.
                </p>
              </div>
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
