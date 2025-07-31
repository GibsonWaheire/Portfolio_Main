import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-lg text-blue-400 mb-4 font-medium">
            Hi there! I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Gibson Waheire</span>
          </h1>

          {/* Tagline */}
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Software Developer
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, responsive web applications using modern technologies. 
            Passionate about creating user-friendly experiences that make a difference.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold flex items-center space-x-2 group hover:opacity-90 transition-all duration-300 transform hover:scale-105"
            >
              <span>View My Projects</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 rounded-lg font-semibold border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/GibsonWaheire"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            
            <a
              href="https://linkedin.com/in/gibson-waheire"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            
            <a
              href="mailto:gibsonwaheire@gmail.com"
              className="p-3 rounded-full bg-gray-800/50 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
