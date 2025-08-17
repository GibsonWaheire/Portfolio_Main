import { Code, Database, Globe, Zap, Palette, Server, Cpu, Cloud, FileCode, GitBranch } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'React', icon: Code, color: 'text-blue-400' },
    { name: 'JavaScript', icon: Zap, color: 'text-yellow-400' },
    { name: 'TypeScript', icon: Code, color: 'text-blue-500' },
    { name: 'Python', icon: FileCode, color: 'text-green-400' },
    { name: 'Django', icon: Database, color: 'text-green-600' },
    { name: 'Flask', icon: Database, color: 'text-gray-400' },
    { name: 'Node.js', icon: Server, color: 'text-green-500' },
    { name: 'Express', icon: Server, color: 'text-gray-300' },
    { name: 'Firebase', icon: Database, color: 'text-orange-400' },
    { name: 'PostgreSQL', icon: Database, color: 'text-indigo-400' },
    { name: 'Tailwind CSS', icon: Palette, color: 'text-cyan-400' },
    { name: 'Vite', icon: Globe, color: 'text-purple-400' },
    { name: 'Git', icon: GitBranch, color: 'text-orange-500' },
    { name: 'Vercel', icon: Cloud, color: 'text-black' },
  ];

  return (
    <section id="about" className="py-16 md:py-20 px-4 md:px-8 min-h-[90vh] bg-gradient-to-b from-[#101826] to-[#0f1a2e] border-y border-gray-800/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-14 md:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="bg-[#18223a] rounded-3xl p-6 md:p-8 shadow-lg border border-white/5">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">My Journey</h3>
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
              <div className="bg-[#18223a] rounded-2xl p-4 md:p-6 text-center shadow border border-white/5">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">10+</div>
                <div className="text-gray-400 text-sm md:text-base">Projects Completed</div>
              </div>
              <div className="bg-[#18223a] rounded-xl p-4 md:p-6 text-center shadow border border-white/5">
                <div className="text-2xl md:text-3xl font-semibold text-cyan-300 mb-2">2+</div>
                <div className="text-gray-400 text-sm md:text-base">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-6 md:space-y-8">
            <div className="bg-[#18223a] rounded-3xl p-6 md:p-8 shadow-lg border border-white/5">
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Tech Stack</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                {techStack.map((tech, index) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="flex items-center space-x-3 p-2.5 md:p-3 rounded-lg bg-[#1b2946] hover:bg-[#1f3156] transition-all duration-300 transform hover:scale-[1.02] group border border-white/5"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${tech.color} group-hover:animate-bounce`} />
                      <span className="font-medium text-gray-200 text-xs md:text-sm">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-[#18223a] rounded-2xl p-6 md:p-8 shadow-lg border border-white/5">
              <h3 className="text-lg md:text-2xl font-semibold mb-4 md:mb-6 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-200 text-sm md:text-base">Full‑stack Development</h4>
                    <p className="text-gray-400 text-xs md:text-sm">Building responsive, interactive user interfaces with React and modern CSS frameworks.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-medium text-gray-200 text-sm md:text-base">Backend Integration</h4>
                    <p className="text-gray-400 text-xs md:text-sm">Integrating with APIs, databases, and cloud services like Firebase and Supabase.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
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
