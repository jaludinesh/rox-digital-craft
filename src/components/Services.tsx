
import React from "react";
import { 
  Code, Layout, Smartphone, FileCode, 
  PenTool, Database, ActivitySquare 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Layout />,
      title: "Custom Website Development",
      description: "Creating responsive, user-friendly websites tailored to your business needs using modern web technologies.",
      color: "bg-cyan/10 text-cyan",
    },
    {
      icon: <FileCode />,
      title: "WordPress Plugin Development",
      description: "Building custom WordPress plugins to extend functionality and solve specific business challenges.",
      color: "bg-orange/10 text-orange",
    },
    {
      icon: <Smartphone />,
      title: "Android App Development",
      description: "Developing feature-rich Android applications with intuitive interfaces and robust functionality.",
      color: "bg-lime/10 text-lime-600",
    },
    {
      icon: <Code />,
      title: "UI/UX Design",
      description: "Creating visually appealing and user-friendly interfaces for websites and mobile applications.",
      color: "bg-purple-400/10 text-purple-500",
    },
    {
      icon: <Database />,
      title: "Custom Dashboard Interfaces",
      description: "Building intuitive admin dashboards and interfaces for plugins and web applications.",
      color: "bg-blue-400/10 text-blue-500",
    },
    {
      icon: <PenTool />,
      title: "Logo Design",
      description: "Creating unique, memorable logos that represent your brand identity effectively.",
      color: "bg-pink-400/10 text-pink-500",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-navy">My Expertise Services</h2>
          <div className="w-24 h-1 bg-orange mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Let's check it out
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card group"
            >
              <div className={`${service.color} h-14 w-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Advanced features section */}
        <div className="mt-20 bg-gradient-to-br from-navy to-navy/90 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange/20 rounded-full -mt-10 -mr-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan/20 rounded-full -mb-10 -ml-10 blur-3xl"></div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Specialized Technical Expertise</h3>
              <p className="text-gray-300 mb-6">
                Beyond standard development services, I offer specialized technical solutions for complex business challenges.
              </p>
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-orange">
                    <ActivitySquare size={20} />
                  </div>
                  <span>Firebase Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-orange">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path d="M2 15V9c0-4.418 3.582-8 8-8h4c4.418 0 8 3.582 8 8v6c0 4.418-3.582 8-8 8h-4c-4.418 0-8-3.582-8-8z" />
                      <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                      <path d="M17 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      <path d="M7 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                    </svg>
                  </div>
                  <span>Tesseract OCR Implementation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-orange">
                    <Code size={20} />
                  </div>
                  <span>Advanced WordPress Hooks & ACF</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Advanced Technical Solutions"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
