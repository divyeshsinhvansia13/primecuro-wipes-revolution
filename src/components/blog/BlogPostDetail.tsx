
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Calendar, Tag } from "lucide-react";
import { BlogPost } from "@/types/blog";

interface BlogPostDetailProps {
  posts: BlogPost[];
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({ posts }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = posts.find(p => p.id === Number(id));
  
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    // If post not found, redirect
    if (!post && posts.length > 0) {
      navigate('/blog');
    }
  }, [post, posts, navigate]);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Loading...</h2>
        </div>
      </div>
    );
  }
  
  // Generate a longer content based on the excerpt
  const generateFullContent = (excerpt: string) => {
    const paragraphs = [
      excerpt,
      "Sustainable products are increasingly important in today's environmentally conscious world. At PrimeCuro, we believe in creating products that not only serve their purpose effectively but also minimize harm to our planet.",
      "Our research and development team works tirelessly to find innovative solutions that balance performance with environmental responsibility. This commitment extends throughout our supply chain, from raw materials to manufacturing processes.",
      "Consumer education is also a key part of our mission. We believe that informed consumers make better choices for themselves and for the planet. That's why we're transparent about our ingredients and manufacturing practices.",
      "Looking ahead, we're excited about the future of sustainable personal care products. With advancements in technology and growing consumer demand, we believe that eco-friendly options will become increasingly accessible and effective."
    ];
    
    return paragraphs.map((paragraph, index) => (
      <p key={index} className="mb-6 text-gray-700 leading-relaxed">
        {paragraph}
      </p>
    ));
  };
  
  // Generate related images based on category
  const getRelatedImages = (category: string) => {
    const categoryImages: Record<string, string[]> = {
      "Sustainability": [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1584715688379-d49220c8ac32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      "Health": [
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      "Company": [
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      "Innovation": [
        "https://images.unsplash.com/photo-1628361623660-2623a519bf97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    };
    
    return categoryImages[category] || [
      "https://images.unsplash.com/photo-1584308878734-70753fba1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1605264327238-5c1451711a2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ];
  };
  
  const relatedImages = getRelatedImages(post.category);
  
  return (
    <article className="py-8 pt-28 pb-16">
      <div className="container mx-auto px-4">
        <button 
          onClick={() => navigate('/blog')} 
          className="flex items-center text-brand-600 mb-8 hover:text-brand-700 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to all articles
        </button>
        
        {/* Featured Image */}
        <div className="rounded-xl overflow-hidden mb-8 max-h-[500px]">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-brand-100 text-brand-800 rounded-full text-sm font-medium">
              <Tag className="h-4 w-4 mr-1" />
              {post.category}
            </span>
            <span className="inline-flex items-center text-gray-500 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {post.date}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
        </div>
        
        {/* Article Content */}
        <div className="max-w-4xl mx-auto prose prose-lg">
          {generateFullContent(post.excerpt)}
          
          {/* Embedded Images */}
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedImages.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src={image} 
                  alt={`Supporting image ${index + 1} for ${post.title}`} 
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            In conclusion, we at PrimeCuro are committed to providing products that are both effective and environmentally responsible. We believe that small changes in everyday products can lead to significant positive impacts on our planet.
          </p>
          
          <p className="text-gray-700 leading-relaxed">
            We invite you to join us on this journey towards a more sustainable future. Together, we can make a difference.
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogPostDetail;
