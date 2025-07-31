import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import projectsData from '../data/projects.json';

// Tech color mapping
const getTechColor = (tech) => {
  const colorMap = {
    'React': 'bg-blue-500/20 text-blue-400',
    'JavaScript': 'bg-yellow-500/20 text-yellow-400',
    'Firebase': 'bg-orange-500/20 text-orange-400',
    'Tailwind': 'bg-cyan-500/20 text-cyan-400',
    'Express': 'bg-green-500/20 text-green-400',
    'Postgres': 'bg-indigo-500/20 text-indigo-400',
    'HTML': 'bg-red-500/20 text-red-400',
    'CSS': 'bg-pink-500/20 text-pink-400',
    'Vite': 'bg-purple-500/20 text-purple-400'
  };
  return colorMap[tech] || 'bg-blue-500/20 text-blue-400';
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 min-h-[90vh] bg-gradient-to-b from-[#131927] to-[#141733] border-y border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning opportunity in my development journey.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projectsData.map((project, index) => (
            <div key={index} className="bg-[#19213a] rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 text-xs rounded-full font-medium ${getTechColor(tech)}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-[#19213a] rounded-2xl px-10 py-8 inline-block shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-white">Want to see more?</h3>
            <p className="text-gray-400 mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <a
              href="https://github.com/GibsonWaheire"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-semibold text-white shadow inline-flex items-center gap-2 hover:opacity-90 transition"
            >
              Visit My GitHub <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 