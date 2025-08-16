import React, { useMemo, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

// Update this to your WhatsApp number; '+' or spaces are okay, we'll sanitize
const WHATSAPP_NUMBER = '+1 (563) 657-8107';

const quickReplies = [
	"Hi Gibson, I'm interested in your portfolio!",
	"Can we discuss a new project?",
	"Are you available for freelance work?",
	"I have a question about your React stack."
];

export default function WhatsAppChat() {
	const [isOpen, setIsOpen] = useState(false);
	const [message, setMessage] = useState('Hi Gibson, I found your portfolio impressive!');

	const waUrl = useMemo(() => {
		const sanitized = String(WHATSAPP_NUMBER).replace(/[^0-9]/g, '');
		const text = encodeURIComponent(message || 'Hi Gibson!');
		return `https://wa.me/${sanitized}?text=${text}`;
	}, [message]);

	return (
		<>
			{/* Floating Toggle Button (bottom-right with attention glow) */}
			<div className="fixed bottom-8 right-6 z-50">
				<div className="relative">
					<span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]/15 blur-xl animate-[pulseGlow_2.2s_ease-in-out_infinite]"></span>
					<span className="pointer-events-none absolute -inset-1 rounded-full border-2 border-[#25D366]/40 animate-ping"></span>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="relative rounded-full p-5 shadow-xl bg-[#25D366] text-white hover:brightness-95 transition focus:outline-none focus:ring-2 focus:ring-white/40"
						aria-label="Open WhatsApp chat"
					>
						{isOpen ? (
							<X size={28} />
						) : (
							<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
							</svg>
						)}
					</button>
					{/* Small badge to grab attention */}
					<div className="absolute -top-2 -right-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-white text-[#0b1220] shadow animate-bounce">Chat</div>
				</div>
			</div>

			{/* Chat Panel (opens above button on the right) */}
			{isOpen && (
				<div className="fixed bottom-[100px] right-6 z-50 w-[92vw] max-w-[340px] animate-[slideUp_0.25s_ease-out]">
					<div className="rounded-2xl border border-white/10 bg-[#0b1220]/80 backdrop-blur-xl shadow-2xl overflow-hidden">
						{/* Header */}
						<div className="px-4 py-3 flex items-center gap-3 bg-gradient-to-r from-[#0f1a2e]/90 to-[#0c1526]/90 border-b border-white/10">
							<div className="w-8 h-8 rounded-full grid place-items-center bg-white/10">
								{/* Simple WhatsApp glyph */}
								<svg width="18" height="18" viewBox="0 0 32 32" fill="#25D366" aria-hidden="true">
									<path d="M19.11 17.17c-.31-.16-1.82-.9-2.1-1s-.49-.16-.7.16-.8 1-.98 1.21-.36.24-.67.08a8.19 8.19 0 01-2.42-1.5 9.07 9.07 0 01-1.67-2.08c-.18-.31 0-.48.14-.64s.31-.36.46-.55a2.08 2.08 0 00.31-.52.59.59 0 000-.57c-.08-.16-.7-1.69-1-2.32s-.53-.53-.73-.53h-.63a1.21 1.21 0 00-.87.41 3.64 3.64 0 00-1.14 2.71 6.32 6.32 0 001.46 3.32 14.44 14.44 0 005.52 4.8 18.79 18.79 0 001.86.69 4.5 4.5 0 002.06.13 3.37 3.37 0 002.19-1.55 2.87 2.87 0 00.2-1.55c-.06-.13-.27-.2-.58-.36z"/>
								</svg>
							</div>
							<div className="flex-1">
								<div className="text-white font-semibold leading-tight">Chat on WhatsApp</div>
								<div className="text-gray-400 text-xs">Typically replies fast</div>
							</div>
							<button
								onClick={() => setIsOpen(false)}
								className="p-2 text-gray-300 hover:text-white transition"
								aria-label="Close chat"
							>
								<X size={18} />
							</button>
						</div>

						{/* Body */}
						<div className="p-4 space-y-3">
							<div className="space-y-2">
								{quickReplies.map((q) => (
									<button
										key={q}
										onClick={() => setMessage(q)}
										className="text-left w-full px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-sm border border-white/5 transition"
									>
										{q}
									</button>
								))}
							</div>

							<div className="pt-1">
								<textarea
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									rows={3}
									placeholder="Type your message..."
									className="w-full px-3 py-2 rounded-lg bg-[#111a2c] border border-white/10 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition text-white placeholder-gray-400 text-sm"
								/>
							</div>
						</div>

						{/* Footer actions */}
						<div className="p-3 flex items-center justify-between gap-2 bg-[#0f1a2e]/80 border-t border-white/10">
							<a
								href={waUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#25D366] text-[#0b1220] font-semibold hover:brightness-95 transition"
								aria-label="Open WhatsApp"
							>
								<Send size={16} />
								Open WhatsApp
							</a>
							<button
								onClick={() => setIsOpen(false)}
								className="px-3 py-2 rounded-lg bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10 transition"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
