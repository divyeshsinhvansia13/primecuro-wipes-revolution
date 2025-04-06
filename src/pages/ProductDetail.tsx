
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NewsletterSignup from '@/components/shared/NewsletterSignup';
import { useToast } from '@/hooks/use-toast';
import { Heart, ShoppingBag, Check, Star, ChevronDown, ChevronUp } from 'lucide-react';

// Dummy product data
const products = [
  {
    id: '1',
    name: 'PrimeCuro Ultra-Gentle Baby Wipes',
    description: 'Our premium baby wipes are specially formulated for sensitive skin, providing gentle yet effective cleansing for babies and toddlers. Made with 99% purified water and plant-based ingredients.',
    price: 12.99,
    oldPrice: 15.99,
    category: 'Baby Wipes',
    image: 'https://images.unsplash.com/photo-1589411454940-67a017535ecf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stock: 15,
    rating: 4.8,
    reviewCount: 124
  },
  {
    id: '2',
    name: 'PrimeCuro Daily Facial Cleansing Wipes',
    description: 'Remove makeup, dirt, and impurities with our gentle yet effective facial cleansing wipes. Perfect for all skin types, these wipes leave your skin feeling fresh and revitalized.',
    price: 9.99,
    oldPrice: 11.99,
    category: 'Personal Care',
    image: 'https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stock: 22,
    rating: 4.7,
    reviewCount: 93
  },
  {
    id: '3',
    name: 'PrimeCuro Antibacterial Surface Wipes',
    description: 'Keep your home clean and germ-free with our antibacterial surface wipes. Effective against 99.9% of bacteria, these wipes are perfect for kitchens, bathrooms, and high-touch surfaces.',
    price: 14.99,
    oldPrice: 17.99,
    category: 'Disinfecting',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d03a6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stock: 8,
    rating: 4.9,
    reviewCount: 76
  }
];

// Dummy reviews
const reviews = [
  {
    id: '1',
    name: 'Jessica M.',
    rating: 5,
    date: '2 months ago',
    content: 'These wipes are amazing! They\'re so gentle on my baby\'s skin and don\'t cause any irritation. Will definitely purchase again.'
  },
  {
    id: '2',
    name: 'Michael T.',
    rating: 4,
    date: '3 weeks ago',
    content: 'Great product. Sturdy wipes that don\'t tear easily. The only reason I\'m giving 4 stars instead of 5 is because I wish they were slightly more moist.'
  },
  {
    id: '3',
    name: 'Samantha L.',
    rating: 5,
    date: '1 month ago',
    content: 'Absolutely love these wipes! They\'re perfect for my sensitive skin and don\'t cause any breakouts or irritation. The eco-friendly packaging is a huge plus too!'
  }
];

// Dummy FAQs
const faqs = [
  {
    question: 'Are your wipes biodegradable?',
    answer: 'Yes, all PrimeCuro wipes are made with biodegradable materials that break down naturally over time, reducing environmental impact without compromising on quality or effectiveness.'
  },
  {
    question: 'Are your products safe for babies?',
    answer: 'Our baby wipes are specially formulated for sensitive skin and are free from harsh chemicals, alcohol, parabens, and fragrance. They are dermatologically tested and pediatrician approved.'
  },
  {
    question: 'How long do the wipes stay moist in the package?',
    answer: 'When properly sealed, our wipes will stay moist for up to 6 months after opening. For best results, always reseal the pack tightly after each use.'
  },
  {
    question: 'Are your products tested on animals?',
    answer: 'No, PrimeCuro is proudly cruelty-free. We never test our products on animals and work only with suppliers who adhere to the same ethical standards.'
  },
  {
    question: 'What ingredients do you use in your wipes?',
    answer: 'Our wipes are made with 99% purified water and plant-based ingredients. We avoid harsh chemicals, alcohol, parabens, and artificial fragrances. Each product has a detailed ingredient list on the packaging and on our website.'
  }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const { toast } = useToast();
  const [product, setProduct] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [openFaqs, setOpenFaqs] = useState<string[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find product from dummy data
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct);
  }, [productId]);
  
  const handleAddToCart = () => {
    toast({
      title: "Added to cart!",
      description: `${quantity} × ${product?.name} added to your cart.`,
    });
  };
  
  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product?.name} has been added to your wishlist.`,
    });
  };
  
  const increaseQuantity = () => {
    if (quantity < (product?.stock || 10)) {
      setQuantity(prev => prev + 1);
    }
  };
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const toggleFaq = (id: string) => {
    if (openFaqs.includes(id)) {
      setOpenFaqs(openFaqs.filter(faqId => faqId !== id));
    } else {
      setOpenFaqs([...openFaqs, id]);
    }
  };
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Product not found</h2>
            <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4">
          {/* Product Info */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Product Image */}
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover aspect-square md:aspect-[4/3]"
                />
              </div>
              
              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-2">
                        {product.category}
                      </span>
                      <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                    </div>
                    
                    <button 
                      onClick={handleAddToWishlist}
                      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                      aria-label="Add to wishlist"
                    >
                      <Heart className="h-6 w-6 text-brand-600" />
                    </button>
                  </div>
                  
                  <div className="flex items-center mt-1 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${
                            i < Math.floor(product.rating) 
                              ? 'text-gold-500 fill-gold-500' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="ml-2 text-lg text-gray-500 line-through">${product.oldPrice.toFixed(2)}</span>
                    )}
                    {product.oldPrice && (
                      <span className="ml-2 text-sm font-medium text-green-600">
                        {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                      </span>
                    )}
                  </div>
                </div>
                
                <p className="text-gray-600">{product.description}</p>
                
                {/* Key Benefits */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Key Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2 text-green-500">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-gray-600">Dermatologist-Tested for safety and gentleness</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2 text-green-500">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-gray-600">Biodegradable materials that break down naturally</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2 text-green-500">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-gray-600">Safe for Babies and sensitive skin</p>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 mr-2 text-green-500">
                        <Check className="h-5 w-5" />
                      </div>
                      <p className="text-gray-600">Alcohol-Free formula prevents drying</p>
                    </li>
                  </ul>
                </div>
                
                {/* Quantity & Add to Cart */}
                <div className="pt-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                      <button 
                        onClick={decreaseQuantity}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                        disabled={quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 py-2 text-gray-800 font-medium border-x border-gray-300">
                        {quantity}
                      </span>
                      <button 
                        onClick={increaseQuantity}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                        disabled={quantity >= (product.stock || 10)}
                      >
                        +
                      </button>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <button 
                      onClick={handleAddToCart}
                      className="flex-grow px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      Add to Cart
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 mt-3">
                    {product.stock < 10 ? (
                      <span className="text-orange-600 font-medium">Only {product.stock} left in stock - order soon!</span>
                    ) : (
                      <span>In Stock ({product.stock} available)</span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Product Tabs */}
          <section className="mb-16">
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                <button 
                  onClick={() => setActiveTab('description')}
                  className={`py-4 px-6 font-medium text-sm whitespace-nowrap ${
                    activeTab === 'description' 
                      ? 'text-brand-600 border-b-2 border-brand-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Description
                </button>
                <button 
                  onClick={() => setActiveTab('reviews')}
                  className={`py-4 px-6 font-medium text-sm whitespace-nowrap ${
                    activeTab === 'reviews' 
                      ? 'text-brand-600 border-b-2 border-brand-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Reviews ({reviews.length})
                </button>
                <button 
                  onClick={() => setActiveTab('faq')}
                  className={`py-4 px-6 font-medium text-sm whitespace-nowrap ${
                    activeTab === 'faq' 
                      ? 'text-brand-600 border-b-2 border-brand-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  FAQ
                </button>
              </div>
            </div>
            
            <div className="py-8">
              {activeTab === 'description' && (
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-4">Product Description</h2>
                  <div className="prose prose-lg">
                    <p className="mb-4">
                      {product.description}
                    </p>
                    <p className="mb-4">
                      Our commitment to quality means each packet of wipes is carefully crafted using premium, eco-friendly materials and advanced manufacturing techniques that ensure consistency and effectiveness.
                    </p>
                    <h3 className="text-xl font-semibold mb-2 mt-6">How to Use</h3>
                    <ol className="list-decimal pl-6 space-y-2 mb-6">
                      <li>Gently peel back the resealable label.</li>
                      <li>Remove one wipe and reseal the package to keep remaining wipes moist.</li>
                      <li>Use as needed for gentle, effective cleaning.</li>
                      <li>Dispose of properly after use – do not flush, even if labeled as flushable.</li>
                    </ol>
                    <h3 className="text-xl font-semibold mb-2">Ingredients</h3>
                    <p>
                      Purified Water (99%), Plant-Based Cleaning Agents, Aloe Vera Extract, Vitamin E, Natural Preservatives, Citric Acid.
                    </p>
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div className="max-w-3xl mx-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">Customer Reviews</h2>
                    <button className="px-4 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors">
                      Write a Review
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {reviews.map(review => (
                      <div key={review.id} className="border-b border-gray-200 pb-6">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <p className="font-semibold">{review.name}</p>
                            <div className="flex items-center">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${
                                      i < review.rating 
                                        ? 'text-gold-500 fill-gold-500' 
                                        : 'text-gray-300'
                                    }`} 
                                  />
                                ))}
                              </div>
                              <span className="ml-2 text-sm text-gray-500">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">{review.content}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {activeTab === 'faq' && (
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div 
                        key={index} 
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        <button
                          onClick={() => toggleFaq(index.toString())}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">{faq.question}</span>
                          {openFaqs.includes(index.toString()) ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </button>
                        
                        {openFaqs.includes(index.toString()) && (
                          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
        
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
