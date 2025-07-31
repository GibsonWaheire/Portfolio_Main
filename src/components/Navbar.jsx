// src/components/Navbar.jsx
import React from "react";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-[#101627]/95 backdrop-blur-md">
      <div className="mx-auto max-w-7xl flex items-center justify-between h-20 px-8">
        {/* Brand */}
        <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Gibson Waheire
        </span>

        {/* Nav links */}
        <div className="flex items-center gap-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`
                px-5 py-2 rounded-2xl transition 
                ${link.active
                  ? "bg-[#182037] text-blue-400 font-medium"
                  : "text-gray-300 hover:bg-[#1c243a] hover:text-blue-300"}
              `}
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
