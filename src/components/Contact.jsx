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
      value: 'gibsonwaheire@gmail.com',
      href: 'mailto:gibsonwaheire@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/gibson-waheire',
      href: 'https://linkedin.com/in/gibson-waheire'
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
    <section id="contact" className="py-20 px-8 min-h-[90vh] bg-gradient-to-b from-[#131927] to-[#141733] border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-6">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a friendly chat about technology.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-[#19213a] rounded-2xl p-7 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={info.label}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-[#212942] hover:bg-[#26315c] transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-gray-200">{info.label}</div>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? '_blank' : undefined}
                            rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-gray-400">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-[#19213a] rounded-2xl p-7 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Quick Actions</h3>
              <div className="space-y-3">
                <a
                  href="mailto:gibsonwaheire@gmail.com"
                  className="block w-full p-3 text-center rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 transition-all duration-300 transform hover:scale-105"
                >
                  Send Email
                </a>
                <a
                  href="https://linkedin.com/in/gibson-waheire"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full p-3 text-center rounded-lg bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/20 transition-all duration-300 transform hover:scale-105"
                >
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#19213a] rounded-2xl p-7 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Send a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
                <h4 className="text-xl font-semibold mb-2 text-white">Message Sent!</h4>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-4 py-3 rounded-lg bg-[#212942] border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-400"
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
                    className="w-full px-4 py-3 rounded-lg bg-[#212942] border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-400"
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
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#212942] border border-gray-700 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-semibold text-white shadow inline-flex items-center justify-center space-x-2 group hover:opacity-90 transition-all duration-300"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
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
