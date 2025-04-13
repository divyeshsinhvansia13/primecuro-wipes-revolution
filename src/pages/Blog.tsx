
import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Search, ChevronRight, Calendar } from "lucide-react";
import BlogPostDetail from "@/components/blog/BlogPostDetail";
import { BlogPost } from "@/types/blog";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Blog post data
const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Environmental Impact of Baby Wipes: Making Sustainable Choices",
    excerpt: "Learn how eco-friendly baby wipes can reduce your carbon footprint while keeping your little one clean and healthy.",
    category: "Sustainability",
    date: "April 10, 2025",
    image: "https://images.unsplash.com/photo-1623102420661-f0ec1e930ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Why Adults Should Use Specialized Wipes for Personal Hygiene",
    excerpt: "Discover the benefits of using adult-specific wipes for personal hygiene and how they compare to traditional toilet paper.",
    category: "Health",
    date: "April 7, 2025",
    image: "https://images.unsplash.com/photo-1584308878734-70753fba1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    readTime: "4 min read"
  },
  {
    id: 3,
    title: "Disinfected Wipes: Your First Line of Defense Against Germs",
    excerpt: "How our disinfected wipes can help protect your family from harmful bacteria and viruses in everyday environments.",
    category: "Health",
    date: "April 3, 2025",
    image: "https://images.unsplash.com/photo-1605264327238-5c1451711a2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "How PrimeCuro is Revolutionizing the Wipes Industry",
    excerpt: "The story behind our commitment to creating biodegradable, chemical-free wipes that don't compromise on effectiveness.",
    category: "Company",
    date: "March 28, 2025",
    image: "https://images.unsplash.com/photo-1584715688379-d49220c8ac32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "The Science Behind Biodegradable Materials in Our Wipes",
    excerpt: "Explore the innovative materials and technologies that make our wipes both effective and environmentally friendly.",
    category: "Innovation",
    date: "March 22, 2025",
    image: "https://images.unsplash.com/photo-1628361623660-2623a519bf97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read"
  }
];

const BlogPostsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = Array.from(new Set(BLOG_POSTS.map(post => post.category)));

  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">PrimeCuro Blog</h1>
            <p className="text-xl text-gray-700 mb-8">
              Insights, tips, and stories about sustainable living, personal hygiene, and our commitment to a cleaner future.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-3 w-full rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button 
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
            
            {categories.map(category => (
              <button 
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-700">No articles found. Try a different search term.</h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map(post => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "https://images.unsplash.com/photo-1584308878734-70753fba1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium px-3 py-1 bg-brand-100 text-brand-800 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <button 
                        className="inline-flex items-center text-brand-600 font-medium hover:text-brand-700 transition-colors"
                        onClick={() => navigate(`/blog/${post.id}`)}
                      >
                        Read More
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-brand-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-gray-700 mb-8">
              Subscribe to our newsletter to receive the latest articles, tips, and exclusive content directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-300 focus:border-transparent flex-grow max-w-sm"
              />
              <button className="px-6 py-3 bg-brand-600 text-white rounded-full hover:bg-brand-700 transition-colors shadow-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Blog = () => {
  const location = useLocation();
  
  // Check if we're on a blog post detail page
  const isBlogPostDetail = location.pathname.match(/^\/blog\/\d+$/);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<BlogPostsList />} />
          <Route path=":id" element={<BlogPostDetail posts={BLOG_POSTS} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
