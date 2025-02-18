import React from 'react';
import { Filters } from './sidebar';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "UI Animations",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    image: "/images/uianimation.jpg",
    technologies: ["React"],
    category: "animation"
  },
  {
    id: 2,
    title: "Tetris Game",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    image: "/images/uianimation.jpg",
    technologies: ["React", "Vue"],
    category: "game"
  },
  {
    id: 3,
    title: "Ethereum App",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    image: "/images/uianimation.jpg",
    technologies: ["Vue"],
    category: "blockchain"
  },
  {
    id: 4,
    title: "UI Animations",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    image: "/images/uianimation.jpg",
    technologies: ["React"],
    category: "animation"
  },
  {
    id: 5,
    title: "Tetris Game",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    image: "/images/uianimation.jpg",
    technologies: ["React", "Vue"],
    category: "game"
  },
  {
    id: 6,
    title: "Ethereum App",
    description: "Duis aute irure dolor in velit esse cillum dolore.",
    image: "/images/uianimation.jpg",
    technologies: ["Vue"],
    category: "blockchain"
  }
];

interface ProjectsProps {
  filters: Filters;
}

const Projects: React.FC<ProjectsProps> = ({ filters }) => {
  const activeFilters = Object.entries(filters)
    .filter(([_, isActive]) => isActive)
    .map(([tech]) => tech.toLowerCase());

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilters.length === 0) return true; // Si aucun filtre actif, afficher tout
    return project.technologies.some((tech) => activeFilters.includes(tech.toLowerCase()));
  });

  return (
    <div className='max-w-[1190px] py-[50px] mx-auto overflow-y-auto'>
      <p>
        <dl className="text-white">
          <dd><span className="text-[#43D9AD]">projects</span>.forEach(<span className="text-[#4D5BCE]">function</span>(<span className="text-[#FEA55F]">project</span>) &#123;</dd>
          <dd className='pl-[30px]'><span className="text-[#4D5BCE]">console</span>.log(<span className="text-[#43D9AD]">project</span>);</dd>
          <dd>&#125;)</dd>
        </dl>
      </p>
      <div className="flex flex-wrap gap-6 py-[50px]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <div key={project.id} className="max-w-[370px] flex flex-col">
              <h3 className="text-lg font-semibold mb-2">
                <span className="text-[#5565E8]">Project {project.id}</span> //{" "}
                <span className="italic">
                  _{project.title.toLowerCase().replace(/\s+/g, '-')}
                </span>
              </h3>
              <div className="bg-[#011221] rounded-lg border-2 border-[#1E2D3D] overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[150px] w-full object-cover border-b-2 border-[#1E2D3D]"
                  />
                  <div className="absolute top-2 right-2 flex gap-1">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <Link href={`/projects/${project.id}`}>
                    <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">No projects match the selected filters.</p>
        )}
      </div>
      </div>
  );
};

export default Projects;