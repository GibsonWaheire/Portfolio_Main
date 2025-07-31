// src/components/Footer.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#101627] py-6 mt-12 border-t border-[#202840]/70">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center">
        <div className="text-gray-400 text-sm mb-2">
          © {new Date().getFullYear()}{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            Gibson Waheire
          </span>
          . Made with <span className="text-pink-400 mx-1">♥</span> using{" "}
          <span className="font-medium">React</span> &amp;{" "}
          <span className="font-medium">Tailwind</span>
        </div>
        <div className="flex gap-6 mt-1">
          <a
            href="https://github.com/GibsonWaheire"
            className="text-gray-400 hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/gibson-waheire"
            className="text-gray-400 hover:text-blue-400 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="mailto:gibsonwaheire@gmail.com"
            className="text-gray-400 hover:text-blue-400 transition"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}
