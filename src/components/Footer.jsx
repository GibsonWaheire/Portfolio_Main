// src/components/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#101627] py-4 md:py-6 mt-8 md:mt-12 border-t border-[#202840]/70">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center px-4">
        <div className="text-gray-400 text-xs md:text-sm mb-2 text-center">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            Gibson Waheire
          </span>
          . Made with <span className="text-pink-400 mx-1">♥</span> using{" "}
          <span className="font-medium">React</span> &amp;{" "}
          <span className="font-medium">Tailwind</span>
        </div>
        <div className="flex gap-4 md:gap-6 mt-1">
          <a
            href="https://github.com/GibsonWaheire"
            className="text-gray-400 hover:text-blue-400 transition p-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={20} className="md:w-[22px] md:h-[22px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/gibson-w-giteru/"
            className="text-gray-400 hover:text-blue-400 transition p-1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} className="md:w-[22px] md:h-[22px]" />
          </a>
          <a
            href="mailto:gibsonwaheire@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition p-1"
            aria-label="Email"
          >
            <Mail size={20} className="md:w-[22px] md:h-[22px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
