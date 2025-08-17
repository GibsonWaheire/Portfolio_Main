import React, { useMemo, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import projectsData from '../data/projects.json';

// Tech color mapping
const getTechColor = (tech) => {
  const colorMap = {
    'React': 'bg-blue-500/20 text-blue-400',
    'TypeScript': 'bg-blue-600/20 text-blue-300',
    'JavaScript': 'bg-yellow-500/20 text-yellow-400',
    'Python': 'bg-green-500/20 text-green-400',
    'Django': 'bg-green-600/20 text-green-300',
    'Flask': 'bg-gray-500/20 text-gray-300',
    'Node.js': 'bg-green-500/20 text-green-400',
    'Node': 'bg-green-500/20 text-green-400',
    'Express': 'bg-green-500/20 text-green-400',
    'Firebase': 'bg-orange-500/20 text-orange-400',
    'Tailwind': 'bg-cyan-500/20 text-cyan-400',
    'Tailwind CSS': 'bg-cyan-500/20 text-cyan-400',
    'PostgreSQL': 'bg-indigo-500/20 text-indigo-400',
    'Postgres': 'bg-indigo-500/20 text-indigo-400',
    'HTML': 'bg-red-500/20 text-red-400',
    'CSS': 'bg-pink-500/20 text-pink-400',
    'Vite': 'bg-purple-500/20 text-purple-400',
    'JWT': 'bg-red-600/20 text-red-300'
  };
  return colorMap[tech] || 'bg-blue-500/20 text-blue-400';
};

const tabs = [
  { key: 'All', label: 'All' },
  { key: 'Full-Stack', label: 'Full‑stack' },
  { key: 'Frontend', label: 'Frontend' }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projectsData;
    return projectsData.filter(p => p.category === activeTab);
  }, [activeTab]);

  return (
    <section id="projects" className="py-16 md:py-20 px-4 md:px-8 min-h-[90vh] bg-gradient-to-b from-[#0f1a2e] to-[#0c1526] border-y border-gray-800/70">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            My <span className="bg-gradient-to-r from-violet-300 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-14 md:w-24 h-1 bg-gradient-to-r from-violet-400 to-blue-400 mx-auto rounded-full mb-3"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning opportunity in my development journey.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-2 md:gap-3 mb-6 md:mb-10">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold border transition-all ${
                activeTab === tab.key
                  ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white border-transparent shadow'
                  : 'border-gray-700 text-gray-300 hover:border-violet-500/60'
              }`}
              aria-pressed={activeTab === tab.key}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#19213a]/95 rounded-[20px] md:rounded-3xl p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-white/5 cursor-pointer group"
              onClick={() => {
                if (project.live) {
                  window.open(project.live, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">{project.title}</h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-violet-400 transition-colors p-1 rounded hover:bg-gray-700/50"
                    onClick={(e) => e.stopPropagation()}
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors p-1 rounded hover:bg-gray-700/50"
                      onClick={(e) => e.stopPropagation()}
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-400 mb-3 md:mb-4 text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 md:gap-2">
                {project.tech.slice(0, 4).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-2.5 md:px-3 py-1 text-[11px] md:text-xs rounded-full font-medium ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="px-2.5 md:px-3 py-1 text-[11px] md:text-xs rounded-full font-medium bg-gray-500/20 text-gray-300">+{project.tech.length - 4} more</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-[#19213a] rounded-2xl px-6 md:px-10 py-6 md:py-8 inline-block shadow-md border border-white/5">
            <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-white">Want to see more?</h3>
            <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <a
              href="https://github.com/GibsonWaheire"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-violet-500 to-blue-500 px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold text-white shadow inline-flex items-center gap-2 hover:opacity-90 transition text-sm md:text-base"
            >
              Visit My GitHub <Github size={16} className="md:w-[18px] md:h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 