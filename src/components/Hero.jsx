import React from "react";
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../assets/WhatsApp Image 2025-07-31 at 6.43.47 PM.jpeg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
         <section
       id="home"
       className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden px-4 pt-16 md:pt-0"
     >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Floating Code Elements - Left to Right Movement */}
      <div
        className="absolute top-1/4 left-4 text-blue-400/20 text-sm font-mono animate-bounce"
        style={{ animationDelay: "0.5s" }}
      >
        &lt;React /&gt;
      </div>
      <div
        className="absolute top-1/3 right-8 text-purple-400/20 text-sm font-mono animate-bounce"
        style={{ animationDelay: "1s" }}
      >
        function() {`{`}
      </div>
      <div
        className="absolute bottom-1/3 left-8 text-cyan-400/20 text-sm font-mono animate-bounce"
        style={{ animationDelay: "1.5s" }}
      >
        const dev = "awesome";
      </div>
      <div
        className="absolute bottom-1/4 right-4 text-green-400/20 text-sm font-mono animate-bounce"
        style={{ animationDelay: "2.5s" }}
      >
        npm install
      </div>

      {/* Moving Code Lines - Sideways Animation */}
      <div
        className="absolute top-1/6 left-0 text-yellow-400/15 text-xs font-mono animate-pulse"
        style={{ animationDelay: "0.3s" }}
      >
        import React from 'react';
      </div>
      <div
        className="absolute top-2/6 right-0 text-pink-400/15 text-xs font-mono animate-pulse"
        style={{ animationDelay: "0.8s" }}
      >
        export default App;
      </div>
      <div
        className="absolute bottom-1/6 left-0 text-orange-400/15 text-xs font-mono animate-pulse"
        style={{ animationDelay: "1.2s" }}
      >
        useState, useEffect
      </div>
      <div
        className="absolute bottom-2/6 right-0 text-indigo-400/15 text-xs font-mono animate-pulse"
        style={{ animationDelay: "1.7s" }}
      >
        async function
      </div>

      {/* Floating Icons - Up and Down Movement */}
      <div
        className="absolute top-1/5 left-1/6 text-blue-400/25 text-lg animate-bounce"
        style={{ animationDelay: "0.4s" }}
      >
        ⚛️
      </div>
      <div
        className="absolute top-3/5 right-1/6 text-purple-400/25 text-lg animate-bounce"
        style={{ animationDelay: "1.1s" }}
      >
        🔥
      </div>
      <div
        className="absolute bottom-1/5 left-1/3 text-cyan-400/25 text-lg animate-bounce"
        style={{ animationDelay: "1.8s" }}
      >
        ⚡
      </div>
      <div
        className="absolute bottom-3/5 right-1/3 text-green-400/25 text-lg animate-bounce"
        style={{ animationDelay: "2.3s" }}
      >
        🚀
      </div>

      {/* Animated Particles - More Dynamic */}
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
      <div
        className="absolute top-1/3 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-400/35 rounded-full animate-ping"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-2/3 right-1/3 w-1 h-1 bg-green-400/40 rounded-full animate-ping"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute top-1/4 left-1/2 w-1 h-1 bg-yellow-400/35 rounded-full animate-ping"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-ping"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Floating Brackets and Symbols */}
      <div className="absolute top-1/4 right-1/4 text-blue-400/15 text-2xl font-mono animate-pulse">
        {`{`}
      </div>
      <div
        className="absolute bottom-1/4 left-1/4 text-purple-400/15 text-2xl font-mono animate-pulse"
        style={{ animationDelay: "1s" }}
      >
        {`}`}
      </div>
      <div
        className="absolute top-1/2 left-1/6 text-cyan-400/20 text-xl font-mono animate-pulse"
        style={{ animationDelay: "0.7s" }}
      >
        &lt;/&gt;
      </div>
      <div
        className="absolute bottom-1/2 right-1/6 text-green-400/20 text-xl font-mono animate-pulse"
        style={{ animationDelay: "1.3s" }}
      >
        =&gt;
      </div>

      {/* Moving Dots - Sideways Animation */}
      <div
        className="absolute top-1/3 left-0 w-1 h-1 bg-blue-400/50 rounded-full animate-pulse"
        style={{ animationDelay: "0.2s" }}
      ></div>
      <div
        className="absolute top-2/3 right-0 w-1 h-1 bg-purple-400/50 rounded-full animate-pulse"
        style={{ animationDelay: "0.9s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-0 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse"
        style={{ animationDelay: "1.6s" }}
      ></div>
      <div
        className="absolute bottom-2/3 right-0 w-1 h-1 bg-green-400/50 rounded-full animate-pulse"
        style={{ animationDelay: "2.1s" }}
      ></div>

      {/* Floating Numbers - Development Related */}
      <div
        className="absolute top-1/6 right-1/4 text-yellow-400/20 text-sm font-mono animate-bounce"
        style={{ animationDelay: "0.6s" }}
      >
        404
      </div>
      <div
        className="absolute bottom-1/6 left-1/4 text-pink-400/20 text-sm font-mono animate-bounce"
        style={{ animationDelay: "1.4s" }}
      >
        200
      </div>
      <div
        className="absolute top-4/6 right-1/3 text-orange-400/20 text-sm font-mono animate-bounce"
        style={{ animationDelay: "2.0s" }}
      >
        git
      </div>
      <div
        className="absolute bottom-4/6 left-1/3 text-indigo-400/20 text-sm font-mono animate-bounce"
        style={{ animationDelay: "2.6s" }}
      >
        dev
      </div>

             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16 lg:gap-20">
           {/* Profile Picture - Left Side */}
           <div className="flex-shrink-0 order-2 lg:order-1">
             <div className="relative group">
               <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-blue-400/40 shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500">
                 <img
                   src={profileImage}
                   alt="Gibson Waheire - Software Developer"
                   className="w-full h-full object-cover object-left group-hover:scale-110 transition-transform duration-700"
                 />
               </div>
               {/* Enhanced animated border glow */}
               <div className="absolute inset-0 rounded-full border-4 border-blue-400/30 animate-pulse"></div>
               <div className="absolute inset-0 rounded-full border-2 border-purple-400/20 animate-ping" style={{ animationDelay: '1s' }}></div>
               {/* Subtle background glow */}
               <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             </div>
           </div>

           {/* Content - Right Side */}
           <div className="flex-1 text-center order-1 lg:order-2">
             {/* Enhanced Greeting */}
             <div className="mb-4 md:mb-6">
               <p className="text-base md:text-lg text-blue-400 mb-2 font-medium tracking-wide">
                 Hi there! I'm
               </p>
                                <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
             </div>

             {/* Enhanced Name */}
             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
               <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                 Gibson Waheire
               </span>
             </h1>

             {/* Enhanced Tagline */}
             <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 md:mb-8 max-w-3xl leading-relaxed font-medium">
               <span className="text-blue-400">Software Developer</span>
               <span className="text-gray-500 mx-2">•</span>
               <span className="text-purple-400">React Enthusiast</span>
               <span className="text-gray-500 mx-2">•</span>
               <span className="text-cyan-400">Problem Solver</span>
             </h2>

             {/* Enhanced Description */}
             <p className="text-base md:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl leading-relaxed">
               I craft beautiful, responsive web applications using modern
               technologies. Passionate about creating user-friendly experiences
               that make a difference.
             </p>

             {/* Enhanced CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-12">
               <button
                 onClick={() => scrollToSection("projects")}
                 className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white rounded-xl font-semibold flex items-center justify-center space-x-2 group hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 relative overflow-hidden"
               >
                 <span className="relative z-10">View My Projects</span>
                 <ArrowRight
                   size={18}
                   className="relative z-10 group-hover:translate-x-1 transition-transform"
                 />
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
               </button>

               <button
                 onClick={() => scrollToSection("contact")}
                 className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300 transform hover:scale-105"
               >
                 Contact Me
               </button>
             </div>

             {/* Enhanced Social Links */}
             <div className="flex justify-center space-x-4 md:space-x-6">
               <a
                 href="https://github.com/GibsonWaheire"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 md:p-3 rounded-full bg-gray-800/50 hover:bg-blue-500/20 text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-blue-500/25"
                 aria-label="GitHub"
               >
                 <Github size={20} className="md:w-6 md:h-6" />
               </a>

               <a
                 href="https://www.linkedin.com/in/gibson-w-giteru/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="p-2 md:p-3 rounded-full bg-gray-800/50 hover:bg-purple-500/20 text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-purple-500/25"
                 aria-label="LinkedIn"
               >
                 <Linkedin size={20} className="md:w-6 md:h-6" />
               </a>

               <a
                 href="mailto:gibsonwaheire@gmail.com"
                 className="p-2 md:p-3 rounded-full bg-gray-800/50 hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-110 hover:rotate-12 hover:shadow-lg hover:shadow-cyan-500/25"
                 aria-label="Email"
               >
                 <Mail size={20} className="md:w-6 md:h-6" />
               </a>
             </div>
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
