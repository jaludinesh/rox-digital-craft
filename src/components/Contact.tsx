
import React from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form handling logic would go here
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-navy">Got A Project? Let's Talk</h2>
          <div className="w-24 h-1 bg-orange mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you have a question, want to start a project or simply want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-orange/10 flex items-center justify-center text-orange mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Email</h4>
                  <a href="mailto:raghuweb007@gmail.com" className="text-gray-600 hover:text-orange transition-colors">
                    raghuweb007@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-orange/10 flex items-center justify-center text-orange mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-navy">Location</h4>
                  <p className="text-gray-600">
                    Working remotely worldwide
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-full bg-orange/10 flex items-center justify-center text-orange mr-4">
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
                  >
                    <path d="M22 11v1a10 10 0 1 1-9-10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" y1="9" x2="9.01" y2="9" />
                    <line x1="15" y1="9" x2="15.01" y2="9" />
                    <path d="M16 5h6" />
                    <path d="M19 2v6" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy">Fiverr</h4>
                  <a 
                    href="https://www.fiverr.com/users/roxahir" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-orange transition-colors"
                  >
                    fiverr.com/roxahir
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-orange p-6 rounded-xl text-white">
              <h4 className="text-xl font-bold mb-4">Let's build something amazing together</h4>
              <p className="mb-4">
                Have a specific project in mind? Contact me directly or fill out the form to start a conversation.
              </p>
              <div className="flex space-x-4 mt-6">
                <a
                  href="mailto:raghuweb007@gmail.com"
                  className="bg-white text-orange p-3 rounded-full hover:bg-orange-50 transition-colors"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://www.fiverr.com/users/roxahir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange p-3 rounded-full hover:bg-orange-50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M15.342 6.918V5.392h-1.342v1.526H12V8.25h2v4.844c0 1.323.704 2.172 2.026 2.172h1.342v-1.332h-1.023c-.495 0-.787-.319-.787-.814V8.25h1.81V6.918h-2.026zM8.15 13V8.576c0-1.433-.9-2.369-2.264-2.369-1.364 0-2.264.936-2.264 2.369V13h1.496v-4.424c0-.469.319-.756.768-.756.45 0 .768.287.768.756V13H8.15z" />
                    <circle cx="4.5" cy="4.5" r="1.5" />
                    <path d="M3 8.61h3V13H3z" />
                    <circle cx="20" cy="4.5" r="1.5" />
                    <path d="M18.5 8.25h3V13h-3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-navy mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
                  placeholder="Project Discussion"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-navy text-white px-8 py-3 rounded-full font-medium hover:bg-navy/90 transition-colors flex items-center"
              >
                Send Message
                <Send size={18} className="ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 mt-24">
        <div className="bg-gray-50 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Subscribe To Get Latest Update From Us
              </h3>
              <p className="text-gray-600">
                Stay updated with my latest projects, tutorials, and availability.
              </p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange focus:border-orange outline-none transition-colors"
                />
                <button className="bg-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-orange/90 transition-colors whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
