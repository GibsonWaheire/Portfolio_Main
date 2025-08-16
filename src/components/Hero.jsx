import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import profileImage from '../assets/WhatsApp Image 2025-07-31 at 6.43.47 PM.jpeg';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [audioCtx, setAudioCtx] = useState(null);
  const [masterGain, setMasterGain] = useState(null);
  const [clickBuffer, setClickBuffer] = useState(null);
  
  const texts = useMemo(() => [
    "Software Developer",
    "Full‑stack Problem Solver", 
    "React + TypeScript Expert",
    "Product‑minded Engineer",
    "Building scalable solutions"
  ], []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Build a short typist click buffer (noise burst through band-pass)
  const buildClickBuffer = (ctx) => {
    const duration = 0.05;
    const sampleRate = ctx.sampleRate;
    const frameCount = Math.floor(sampleRate * duration);
    const buffer = ctx.createBuffer(1, frameCount, sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < frameCount; i++) {
      const t = i / frameCount;
      const decay = Math.exp(-18 * t);
      data[i] = (Math.random() * 2 - 1) * decay;
    }
    return buffer;
  };

  // Try to initialize audio eagerly and resume when possible
  useEffect(() => {
    try {
      if (!audioCtx) {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        const ctx = new Ctx();
        const gain = ctx.createGain();
        gain.gain.value = 0.40;
        gain.connect(ctx.destination);
        setAudioCtx(ctx);
        setMasterGain(gain);
        setClickBuffer(buildClickBuffer(ctx));
        // attempt a resume (may be blocked by autoplay policy)
        ctx.resume().catch(() => {});
      } else {
        if (audioCtx.state === 'suspended') {
          audioCtx.resume().catch(() => {});
        }
      }
    } catch {
      // initialization failed; will retry on interaction
    }

    const onFirstInteract = () => {
      if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
      }
    };
    const onVisible = () => {
      if (document.visibilityState === 'visible' && audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume().catch(() => {});
      }
    };
    window.addEventListener('pointerdown', onFirstInteract, { once: true });
    window.addEventListener('keydown', onFirstInteract, { once: true });
    document.addEventListener('visibilitychange', onVisible);
    window.addEventListener('focus', onVisible);
    return () => {
      window.removeEventListener('pointerdown', onFirstInteract);
      window.removeEventListener('keydown', onFirstInteract);
      document.removeEventListener('visibilitychange', onVisible);
      window.removeEventListener('focus', onVisible);
    };
  }, [audioCtx]);

  const playTypeSound = useCallback(async (isErase = false) => {
    if (!audioCtx || !masterGain) return;
    if (audioCtx.state === 'suspended') {
      try { await audioCtx.resume(); } catch { return; }
    }
    try {
      if (clickBuffer) {
        const src = audioCtx.createBufferSource();
        src.buffer = clickBuffer;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = (isErase ? 2300 : 3200) + Math.random() * 500;
        filter.Q.value = 9;
        const env = audioCtx.createGain();
        env.gain.setValueAtTime(0.0001, audioCtx.currentTime);
        env.gain.exponentialRampToValueAtTime(0.35, audioCtx.currentTime + 0.01);
        env.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.09);
        src.connect(filter);
        filter.connect(env);
        env.connect(masterGain);
        src.start();
      } else {
        const osc = audioCtx.createOscillator();
        const env = audioCtx.createGain();
        const base = isErase ? 650 : 900;
        const freq = base + Math.random() * 180;
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        env.gain.setValueAtTime(0.0001, audioCtx.currentTime);
        env.gain.exponentialRampToValueAtTime(0.12, audioCtx.currentTime + 0.01);
        env.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.12);
        osc.connect(env);
        env.connect(masterGain);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.14);
      }
    } catch {
      // play failed; ignore
    }
  }, [audioCtx, masterGain, clickBuffer]);

  // Enhanced typing effect with realistic timing
  useEffect(() => {
    if (isWaiting) return;

    const currentWord = texts[currentIndex];
    let delay;

    if (isDeleting) {
      // Faster deletion, slight randomness
      delay = 40 + Math.random() * 30;
      
      setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        playTypeSound(true);
        
        if (currentText.length <= 1) {
          setIsDeleting(false);
          setIsWaiting(true);
          // Brief pause before starting next word
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
            setIsWaiting(false);
          }, 300);
        }
      }, delay);
    } else {
      // Variable typing speed - slower for punctuation, faster for letters
      const nextChar = currentWord[currentText.length];
      const isPunctuation = /[.,!?;:]/.test(nextChar);
      const isSpace = nextChar === ' ';
      
      delay = isPunctuation ? 200 + Math.random() * 100 : 
              isSpace ? 100 : 
              80 + Math.random() * 60;
      
      setTimeout(() => {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        playTypeSound(false);
        
        if (currentText.length + 1 === currentWord.length) {
          setIsWaiting(true);
          // Longer pause when word is complete
          setTimeout(() => {
            setIsDeleting(true);
            setIsWaiting(false);
          }, 2200 + Math.random() * 800);
        }
      }, delay);
    }
  }, [currentText, currentIndex, isDeleting, isWaiting, texts, playTypeSound]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
         <section
       id="home"
       className="min-h-[92vh] flex items-center justify-center relative overflow-hidden px-4 pt-16 md:pt-0"
     >
      {/* Aurora gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -inset-40 bg-[conic-gradient(at_30%_50%,#0ea5e9_10%,#8b5cf6_30%,#06b6d4_50%,#0ea5e9_70%,#1e293b_90%)] opacity-[0.18] blur-3xl animate-[spin_30s_linear_infinite]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/40 to-[#0e1424]/80" />
      </div>
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

      {/* Mouse Trail Effect */}
      <div
        className="fixed w-2 h-2 bg-blue-400/50 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      ></div>
      <div
        className="fixed w-1 h-1 bg-purple-400/30 rounded-full pointer-events-none z-50 transition-transform duration-200 ease-out"
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
        }}
      ></div>

             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="flex flex-col items-center justify-center gap-8 lg:gap-12">
           {/* Main Content Card - Wider with Custom Shape */}
           <div className="w-full max-w-6xl lg:max-w-7xl relative">
             {/* Main card background with cut-out corner */}
             <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 shadow-3xl -z-10 custom-card-shape" />
             <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent -z-10 custom-card-shape" />
             <div className="px-12 md:px-16 lg:px-20 py-16 md:py-20 text-center flex flex-col justify-center">
             {/* Enhanced Greeting */}
             <div className="mb-6 md:mb-8">
               <p className="text-base md:text-lg text-blue-400 mb-3 font-medium tracking-wide">
                 Hi there! I'm
               </p>
               <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto"></div>
             </div>

             {/* Name & Title */}
             <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight">
               <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(59,130,246,0.25)]">
                 Gibson Waheire
               </span>
             </h1>
             <p className="text-sm md:text-base lg:text-lg text-blue-300/80 font-semibold uppercase tracking-[0.2em] mb-6">
              Software Developer
            </p>

            {/* Typing Animation */}
            <div className="mb-8 md:mb-10 h-8 flex items-center justify-center">
              <span className="text-lg sm:text-xl md:text-2xl font-medium text-cyan-400">
                {currentText}
                <span 
                  className={`inline-block w-0.5 h-6 ml-1 bg-cyan-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}
                  style={{ animation: isWaiting ? 'none' : undefined }}
                />
              </span>
            </div>

            {/* Tagline */}
             <h2 className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
               I design and build full‑stack solutions that solve real problems — from scalable backends to performant, accessible UIs. Strong focus on product thinking, reliability, and pragmatic delivery.
             </h2>

             {/* Enhanced Description */}
             <p className="text-gray-400 leading-relaxed mb-8 md:mb-10 max-w-2xl text-sm md:text-base mx-auto text-center animate-[slideUp_0.7s_ease-out]">
               Currently focused on React + TypeScript frontends, Node/Express APIs, and Python (including Django, Flask, and Query). I work with pragmatic databases like Postgres and Firebase. I care about maintainability, DX, and shipping value.
             </p>

             {/* Skills Badges */}
             <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-12">
               {['React', 'TypeScript', 'Node.js', 'Express', 'Postgres', 'Firebase'].map((skill, index) => (
                 <span
                   key={skill}
                   className="px-3 py-1 bg-[#101826]/80 text-gray-200 rounded-full text-xs md:text-sm font-medium border border-white/5 hover:border-blue-400/60 hover:text-blue-300 transition-all duration-300"
                   style={{ animationDelay: `${index * 0.1}s` }}
                 >
                   {skill}
                 </span>
               ))}
             </div>

             {/* Enhanced CTA Buttons */}
             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10 md:mb-12">
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


         </div>

        {/* Profile Picture Card - Top Left */}
        <div className="absolute top-8 left-4 lg:top-12 lg:left-8 z-20">
          <div className="relative">
            {/* Profile card background */}
            <div className="absolute inset-0 bg-white/8 backdrop-blur-md rounded-2xl border border-white/15 shadow-xl -z-10" />
            <div className="px-4 py-4 lg:px-6 lg:py-5 flex flex-col items-center">
              <div className="relative group mb-3">
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-2 border-blue-400/50 shadow-lg group-hover:shadow-blue-500/30 transition-all duration-500">
                  <img
                    src={profileImage}
                    alt="Gibson Waheire - Software Developer"
                    className="w-full h-full object-cover object-left group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                {/* Enhanced animated border glow */}
                <div className="absolute inset-0 rounded-full border border-blue-400/40 animate-pulse"></div>
                <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-ping" style={{ animationDelay: '1s' }}></div>
                {/* Subtle background glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Compact stats */}
              <div className="flex gap-3 text-center">
                <div>
                  <div className="text-sm font-bold text-blue-400">100+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div>
                  <div className="text-sm font-bold text-purple-400">2+</div>
                  <div className="text-xs text-gray-400">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content in Bottom-Right Cut-out Area */}
        <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 z-30">
          <div className="flex flex-col gap-2 lg:gap-3 max-w-[160px] lg:max-w-[180px] items-end">
            {[
              { icon: "⚡", text: "Fast Development", delay: "0s", color: "from-yellow-500/25 to-orange-500/25" },
              { icon: "🎯", text: "Problem Focused", delay: "0.3s", color: "from-blue-500/25 to-cyan-500/25" },
              { icon: "🚀", text: "Scalable Solutions", delay: "0.6s", color: "from-purple-500/25 to-pink-500/25" },
            ].map((card, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${card.color} backdrop-blur-md border border-white/25 rounded-lg px-3 py-2 flex items-center gap-2 shadow-lg animate-[slideUp_0.8s_ease-out] hover:bg-white/20 hover:scale-105 hover:shadow-xl transition-all duration-300`}
                style={{ animationDelay: card.delay }}
              >
                <span className="text-lg lg:text-xl filter drop-shadow-sm">{card.icon}</span>
                <span className="text-white font-medium text-xs lg:text-sm">{card.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Floating Action Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <div className="relative group">
            <button
              onClick={() => scrollToSection("contact")}
              className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center text-white"
              aria-label="Quick Contact"
            >
              <Mail size={24} />
            </button>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
