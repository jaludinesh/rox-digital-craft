
import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-orange">Rox</span>Dev
            </h3>
            <p className="text-gray-300 mb-6 max-w-sm">
              Transforming ideas into exceptional digital experiences with clean code and creative solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-orange transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-orange transition-colors">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange transition-colors">Services</a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-orange transition-colors">Portfolio</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-orange transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange transition-colors">Website Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange transition-colors">WordPress Plugin Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange transition-colors">Android App Development</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-orange transition-colors">Custom Dashboard Interfaces</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © {year} <span className="text-orange">Rox</span>Dev. All Rights Reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-orange transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
