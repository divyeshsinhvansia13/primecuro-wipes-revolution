
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedImage from "@/components/ui/AnimatedImage";

const TimelineItem = ({ year, title, description, isLeft = true }: { 
  year: string; 
  title: string; 
  description: string;
  isLeft?: boolean;
}) => {
  return (
    <div className={`flex flex-col md:flex-row items-center md:items-start gap-4 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className={`w-full max-w-md p-6 rounded-lg bg-white shadow-sm ${isLeft ? 'text-left' : 'text-right'}`}>
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-2">
            {year}
          </span>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
      <div className="hidden md:block w-px h-24 bg-gray-300"></div>
      <div className="md:w-1/2"></div>
    </div>
  );
};

const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => {
  return (
    <div className="text-center">
      <div className="mb-4 relative group">
        <div className="w-64 h-64 mx-auto overflow-hidden rounded-lg">
          <AnimatedImage 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
          />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

const Value = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-100 text-brand-800 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                ABOUT US
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Mission, Vision, and Story
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                PrimeCuro is dedicated to revolutionizing personal and household hygiene with innovative, sustainable products that elevate everyday cleaning routines.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                  OUR STORY
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  From Idea to Innovation
                </h2>
                <p className="text-gray-600 mb-6">
                  PrimeCuro began with a simple observation: traditional cleaning products often contained harsh chemicals and created unnecessary waste. Our founders, Sarah and Michael, were determined to create a better solution.
                </p>
                <p className="text-gray-600 mb-6">
                  After two years of research and development, testing countless formulations and sustainable materials, PrimeCuro was born – a line of powerful, eco-friendly wipes that clean effectively without compromising on environmental responsibility.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to offer products that make a difference in people's daily lives while reducing environmental impact. Our commitment to quality, sustainability, and innovation drives everything we do.
                </p>
              </div>
              <div className="md:w-1/2">
                <AnimatedImage 
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" 
                  alt="PrimeCuro founders" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                OUR JOURNEY
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                The PrimeCuro Timeline
              </h2>
              <p className="text-lg text-gray-600">
                From humble beginnings to industry innovation, our journey has been guided by a commitment to excellence and sustainability.
              </p>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gray-300 hidden md:block"></div>
              
              <div className="space-y-16">
                <TimelineItem 
                  year="2018" 
                  title="The Beginning" 
                  description="PrimeCuro was founded with a mission to create effective, sustainable cleaning products that reduce environmental impact."
                  isLeft={true}
                />
                
                <TimelineItem 
                  year="2019" 
                  title="First Product Launch" 
                  description="After extensive research and development, we launched our first line of biodegradable cleaning wipes to enthusiastic customer response."
                  isLeft={false}
                />
                
                <TimelineItem 
                  year="2020" 
                  title="Expansion" 
                  description="We expanded our product line to include specialized wipes for personal care, meeting the growing demand for sustainable hygiene solutions."
                  isLeft={true}
                />
                
                <TimelineItem 
                  year="2021" 
                  title="Sustainability Milestone" 
                  description="Achieved carbon-neutral operations and implemented fully recyclable packaging across our entire product range."
                  isLeft={false}
                />
                
                <TimelineItem 
                  year="2022" 
                  title="Innovation Award" 
                  description="Received industry recognition for our proprietary eco-friendly formula that delivers superior cleaning power with minimal environmental impact."
                  isLeft={true}
                />
                
                <TimelineItem 
                  year="2023" 
                  title="Global Reach" 
                  description="Expanded to international markets, bringing our innovative hygiene solutions to customers around the world."
                  isLeft={false}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                OUR VALUES
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                What We Stand For
              </h2>
              <p className="text-lg text-gray-600">
                These core principles guide our decisions, shape our culture, and define who we are as a company.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Value 
                icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"></path></svg>} 
                title="Sustainability" 
                description="We're committed to minimizing our environmental footprint through biodegradable materials, sustainable sourcing, and eco-friendly manufacturing."
              />
              
              <Value 
                icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>} 
                title="Quality" 
                description="We never compromise on the effectiveness of our products, ensuring they meet the highest standards of performance and reliability."
              />
              
              <Value 
                icon={<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path></svg>} 
                title="Innovation" 
                description="We continuously push the boundaries of what's possible, developing new solutions that make cleaning more effective, convenient, and sustainable."
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-100 text-brand-800 rounded-full mb-3">
                OUR TEAM
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet the People Behind PrimeCuro
              </h2>
              <p className="text-lg text-gray-600">
                Our diverse team of experts shares a common passion for creating products that make a difference.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <TeamMember 
                name="Sarah Johnson" 
                role="Co-Founder & CEO" 
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
              />
              
              <TeamMember 
                name="Michael Chen" 
                role="Co-Founder & Chief Product Officer" 
                image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
              />
              
              <TeamMember 
                name="Elena Rodriguez" 
                role="Chief Sustainability Officer" 
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
              />
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
                Join the PrimeCuro Community
              </h2>
              <p className="text-white/90 text-lg mb-8">
                Become part of our journey to revolutionize cleaning and personal care with sustainable solutions.
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
    </div>
  );
};

export default About;
