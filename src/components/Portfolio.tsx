
import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Design" },
    { id: "app", name: "App Design" },
    { id: "plugin", name: "Plugins" },
    { id: "other", name: "Other Projects" }
  ];

  const projects = [
    {
      id: 1,
      title: "Slash-32 App & Website",
      category: "app",
      image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kcm9pZCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description: "Custom OCR model trained to recognize decorative hoodie text and convert binary to readable text.",
    },
    {
      id: 2,
      title: "JewConnect (ReallyCapture)",
      category: "plugin",
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGx1Z2lufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      description: "Multivendor business platform with custom plugin for sponsored listings tracking, special search box, and registration forms.",
    },
    {
      id: 3,
      title: "Invisalign",
      category: "web",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVudGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      description: "Modern dental site with custom animation and design features.",
    },
    {
      id: 4,
      title: "E-commerce Dashboard",
      category: "web",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFzaGJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      description: "Custom admin interface for managing products, orders, and customer data.",
    },
    {
      id: 5,
      title: "WooCommerce Extension",
      category: "plugin",
      image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d29yZHByZXNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      description: "Advanced plugin for extending WooCommerce functionality with custom fields and pricing options.",
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      category: "app",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmlybmVzc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description: "Android application for tracking workouts, nutrition, and progress with Firebase integration.",
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-navy">Digital Product Showcases</h2>
          <div className="w-24 h-1 bg-orange mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore my latest projects and custom solutions
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-navy text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="portfolio-item group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <a href="#" className="inline-block bg-orange text-white p-3 rounded-full mb-4">
                      <ExternalLink size={18} />
                    </a>
                    <h4 className="text-white text-xl font-bold">{project.title}</h4>
                    <p className="text-gray-200 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a 
                  href="#" 
                  className="text-orange font-medium inline-flex items-center"
                >
                  View Case Study
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="ml-2"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-navy">What People Say's About Us</h3>
            <div className="w-20 h-1 bg-orange mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>

                <p className="text-gray-600 mb-6">
                  "Rox delivered our WordPress plugin ahead of schedule and with even more features than we initially requested. Professional communication throughout the project."
                </p>

                <div className="flex items-center">
                  <img
                    src={`https://randomuser.me/api/portraits/men/${10 + item}.jpg`}
                    alt="Client"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-navy">John Doe</h4>
                    <p className="text-gray-500 text-sm">CEO, Tech Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
