import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'g.waheir00@gmail.com',
      href: 'mailto:g.waheir00@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/gibson-w-giteru',
      href: 'https://www.linkedin.com/in/gibson-w-giteru/'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@GibsonWaheire',
      href: 'https://github.com/GibsonWaheire'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 px-4 md:px-8 min-h-[90vh] bg-gradient-to-b from-[#0c1526] to-[#0a1220] border-y border-gray-800/60">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Get In <span className="bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-4 md:mb-6 text-sm md:text-base">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a friendly chat about technology.
          </p>
          <div className="w-14 md:w-24 h-1 bg-gradient-to-r from-sky-400 to-violet-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#18223a] rounded-3xl p-6 md:p-8 shadow-lg border border-white/5">
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">Let's Connect</h3>
              <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl bg-[#1b2946] hover:bg-[#203255] transition-all duration-300 group border border-white/5"
                    >
                      <div className="p-2 md:p-3 rounded-full bg-sky-500/10 text-sky-400 group-hover:bg-sky-500/20 transition-colors flex-shrink-0">
                        <Icon size={18} className="md:w-5 md:h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-200 text-sm md:text-base">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-400 hover:text-sky-400 transition-colors text-sm md:text-base break-all"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-400 text-sm md:text-base">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-[#18223a] rounded-2xl p-6 md:p-8 shadow-lg border border-white/5">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="mailto:g.waheir00@gmail.com"
                  className="block w-full p-3 text-center rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/20 transition-all duration-300 transform hover:scale-[1.02] text-sm md:text-base"
                >
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/gibson-w-giteru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-3 text-center rounded-lg bg-violet-500/10 hover:bg-violet-500/20 text-violet-400 border border-violet-500/20 transition-all duration-300 transform hover:scale-[1.02] text-sm md:text-base"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#18223a] rounded-3xl p-6 md:p-8 shadow-lg border border-white/5">
            <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 bg-gradient-to-r from-sky-300 to-violet-300 bg-clip-text text-transparent">Send a Message</h3>
            {isSubmitted ? (
              <div className="text-center py-8 md:py-12">
                <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-3 md:mb-4 animate-bounce" />
                <h4 className="text-lg md:text-xl font-semibold mb-2 text-white">Message Sent!</h4>
                <p className="text-gray-400 text-sm md:text-base">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-[#1b2946] border border-gray-700 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 text-white placeholder-gray-400 text-sm md:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-[#1b2946] border border-gray-700 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 text-white placeholder-gray-400 text-sm md:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-[#1b2946] border border-gray-700 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20 transition-all duration-300 text-white placeholder-gray-400 resize-none text-sm md:text-base"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-violet-500 px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-white shadow inline-flex items-center justify-center space-x-2 group hover:opacity-90 transition-all duration-300 text-sm md:text-base"
                >
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
