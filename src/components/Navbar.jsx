// src/components/Navbar.jsx
import React from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-[#101627]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between h-20 px-8">
        {/* Brand */}
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          My Portfolio
        </span>

        {/* Nav links */}
        <div className="flex items-center gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href.substring(1));
              }}
              className="px-5 py-2 rounded-2xl transition text-gray-300 hover:bg-[#1c243a] hover:text-blue-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
      {/* Optional bottom border */}
      <div className="border-b border-[#202840]/80 w-full"></div>
    </nav>
  );
}
