// src/components/Navbar.jsx
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-[#101627]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Brand */}
        <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          My Portfolio
        </span>

        {/* Desktop Nav links */}
        <div className="hidden md:flex items-center gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href.substring(1));
              }}
              className="px-4 md:px-5 py-2 rounded-2xl transition text-gray-300 hover:bg-[#1c243a] hover:text-blue-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-blue-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#101627]/95 backdrop-blur-md border-t border-[#202840]/80">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href.substring(1));
                }}
                className="block px-4 py-3 rounded-xl transition text-gray-300 hover:bg-[#1c243a] hover:text-blue-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Optional bottom border */}
      <div className="border-b border-[#202840]/80 w-full"></div>
    </nav>
  );
}
