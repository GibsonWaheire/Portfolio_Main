import { Code, Database, Globe, Zap, Palette, Server } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'React', icon: Code, color: 'text-blue-400' },
    { name: 'JavaScript', icon: Zap, color: 'text-yellow-400' },
    { name: 'Firebase', icon: Database, color: 'text-orange-400' },
    { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-400' },
    { name: 'Vite', icon: Globe, color: 'text-purple-400' },
    { name: 'Node.js', icon: Server, color: 'text-green-400' },
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-8 min-h-[90vh] bg-gradient-to-b from-[#131927] to-[#141733] border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-[#19213a] rounded-2xl p-5 md:p-7 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">My Journey</h3>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                I'm a passionate self-taught developer building solutions for the web using React, 
                JavaScript, Firebase, and Tailwind CSS. I specialize in creating fast, responsive, 
                and user-friendly applications that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
                My development journey started with curiosity and has evolved into a passion for 
                crafting beautiful, functional web experiences. I believe in writing clean, 
                maintainable code and staying up-to-date with the latest web technologies.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#19213a] rounded-xl p-4 md:p-6 text-center shadow">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">10+</div>
                <div className="text-gray-400 text-sm md:text-base">Projects Completed</div>
              </div>
              <div className="bg-[#19213a] rounded-xl p-4 md:p-6 text-center shadow">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">2+</div>
                <div className="text-gray-400 text-sm md:text-base">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#19213a] rounded-2xl p-5 md:p-7 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Tech Stack</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                {techStack.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center space-x-3 p-3 md:p-4 rounded-lg bg-[#212942] hover:bg-[#26315c] transition-all duration-300 transform hover:scale-105 group"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon className={`w-6 h-6 md:w-8 md:h-8 ${tech.color} group-hover:animate-bounce`} />
                      <span className="font-medium text-gray-200 text-sm md:text-base">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-[#19213a] rounded-2xl p-5 md:p-7 shadow-lg">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-200 text-sm md:text-base">Full‑stack Development</h4>
                    <p className="text-gray-400 text-xs md:text-sm">Building responsive, interactive user interfaces with React and modern CSS frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-200 text-sm md:text-base">Backend Integration</h4>
                    <p className="text-gray-400 text-xs md:text-sm">Integrating with APIs, databases, and cloud services like Firebase and Supabase.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-200 text-sm md:text-base">Performance Optimization</h4>
                    <p className="text-gray-400 text-xs md:text-sm">Optimizing applications for speed, accessibility, and user experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
