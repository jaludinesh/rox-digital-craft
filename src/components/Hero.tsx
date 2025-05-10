
import React from "react";
import { ArrowRight, Code, Layout } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen pt-20 flex items-center hero-pattern bg-gradient-to-br from-navy to-navy/90 text-white"
    >
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in-up">
            <div className="mb-2 flex items-center space-x-2">
              <div className="h-1.5 w-12 bg-orange rounded-full"></div>
              <span className="text-orange font-medium">Hello, I'm</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Rox
              <span className="text-orange">.</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-200">
              Website & Android App Developer
              <br />
              WordPress Plugin Expert
            </h2>
            <p className="text-lg mb-8 text-gray-300 max-w-lg">
              I build high‑performance websites, custom WordPress plugins, and
              Android apps that scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#portfolio"
                className="bg-orange text-white px-6 py-3 rounded-full font-medium hover:bg-orange/90 transition-colors flex items-center"
              >
                View My Work
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#contact"
                className="bg-transparent border border-white/30 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center space-x-4">
              <p className="text-sm text-gray-300">Tech Stack:</p>
              <div className="flex space-x-3 text-gray-300">
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Code size={20} />
                </div>
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v6.5a2.5 2.5 0 0 1-2.5 2.5H4" />
                    <path d="M10 14.2c.9-.1 1.7.2 2.2.5" />
                    <path d="M8.5 19a3 3 0 0 0 4.5 1.7" />
                    <path d="M21 15.5c-1-.1-1.9.3-2.2 1.3" />
                    <path d="M19 10V2" />
                    <path d="M3 21c7 0 11-1 11-6 0-3 2-5 5-5" />
                  </svg>
                </div>
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Layout size={20} />
                </div>
                <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 18H6a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4" />
                    <path d="m16 10 2 2 4-4" />
                    <path d="M7 15h2" />
                    <path d="M7 11h4" />
                    <path d="M7 7h4" />
                    <rect width="3" height="5" x="16" y="15" rx="1" />
                    <path d="M22 15a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5h4Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-orange rounded-full blur-2xl opacity-20"></div>
              <div className="bg-gradient-to-br from-navy/50 to-navy/30 backdrop-blur-sm rounded-3xl p-4 border border-white/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                  alt="Rox - Web Developer"
                  className="rounded-2xl w-72 h-80 object-cover object-center"
                />
                <div className="absolute -bottom-5 -right-5 bg-white rounded-full p-3 shadow-lg">
                  <div className="bg-orange h-16 w-16 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    9+
                    <span className="text-xs ml-1">Years</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-10 md:right-40 h-20 w-20 rounded-full bg-orange/10 blur-xl"></div>
        <div className="absolute bottom-10 left-10 md:left-40 h-32 w-32 rounded-full bg-cyan/10 blur-xl"></div>
      </div>
    </section>
  );
};

export default Hero;
