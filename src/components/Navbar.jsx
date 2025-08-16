// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Projects", href: "#projects" },
	{ name: "Contact", href: "#contact" },
];

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeId, setActiveId] = useState('home');

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setIsMenuOpen(false); // Close mobile menu after navigation
	};

	useEffect(() => {
		const sections = ['home', 'about', 'projects', 'contact'];
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{ root: null, rootMargin: '0px', threshold: 0.5 }
		);

		sections.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<nav className="fixed top-0 left-0 w-full z-30 bg-[#0b1220]/60 backdrop-blur-xl supports-[backdrop-filter]:bg-[#0b1220]/50 border-b border-white/10">
			<div className="mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
				{/* Brand */}
				<span className="text-xl md:text-2xl font-extrabold bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent tracking-tight">
					My Portfolio
				</span>

				{/* Desktop Nav links */}
				<div className="hidden md:flex items-center gap-2">
					{navLinks.map((link) => {
						const isActive = activeId === link.href.substring(1);
						return (
							<a
								key={link.name}
								href={link.href}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(link.href.substring(1));
								}}
								className={`group relative px-4 md:px-5 py-2 rounded-2xl transition text-gray-300/90 focus:outline-none focus:ring-2 focus:ring-sky-400/30 ${isActive ? 'text-sky-300 bg-white/5' : 'hover:text-white hover:bg-white/5'}`}
							>
								{link.name}
								<span className={`pointer-events-none absolute left-4 right-4 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-sky-400 to-violet-400 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></span>
							</a>
						);
					})}
				</div>

				{/* Mobile menu button */}
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="md:hidden p-2 text-gray-300 hover:text-sky-300 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400/30 rounded-lg"
					aria-label="Toggle menu"
				>
					{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile menu */}
			{isMenuOpen && (
				<div className="md:hidden bg-[#0b1220]/90 backdrop-blur-xl border-t border-white/10">
					<div className="px-4 py-4 space-y-2">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(link.href.substring(1));
								}}
								className={`block px-4 py-3 rounded-xl transition text-gray-300 border border-white/5 ${activeId === link.href.substring(1) ? 'bg-white/5 text-sky-300' : 'hover:bg-white/5 hover:text-white'}`}
							>
								{link.name}
							</a>
						))}
					</div>
				</div>
			)}

			{/* Optional bottom border gradient */}
			<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
		</nav>
	);
}
