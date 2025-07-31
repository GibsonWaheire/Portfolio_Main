import { Github } from 'lucide-react';

const techColor = {
  React: 'bg-blue-900 text-blue-300',
  Firebase: 'bg-yellow-900 text-yellow-400',
  Tailwind: 'bg-cyan-900 text-cyan-400',
  Express: 'bg-gray-800 text-gray-300',
  Postgres: 'bg-indigo-900 text-indigo-400',
  HTML: 'bg-blue-800 text-blue-300',
  CSS: 'bg-sky-900 text-sky-300',
  JavaScript: 'bg-yellow-900 text-yellow-400',
  // add more as needed
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#19213a]/80 rounded-2xl p-6 shadow-md flex flex-col min-h-[220px] transition-all hover:scale-[1.025] hover:shadow-lg duration-200">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition"
          aria-label="GitHub"
        >
          <Github size={18} />
        </a>
      </div>
      <p className="text-gray-400 mb-4 text-[15px]">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className={`text-xs px-3 py-1 rounded-lg font-medium ${techColor[tech] || "bg-[#212942] text-gray-300"}`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
