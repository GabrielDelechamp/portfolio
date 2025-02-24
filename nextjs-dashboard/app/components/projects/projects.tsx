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
    title: "Eazy Media Website",
    description: `
    Ce site web m'a été demandé dans le cadre d'un stage pour Eazy Media. À l'aide d'une 
    maquette faite sur Figma, j'ai réalisé ce site.Le développement de ce site m'as permis 
    d'approfondir et de repousser mes connaissances en HTML/CSS natif. 
    `,
    image: "/images/eazy-website.png",
    technologies: ["HTML", "CSS"],
    category: "animation"
  },
  {
    id: 2,
    title: "Leave management",
    description: `
    Ce projet fût un projet fil rouge pour l'apprentissage du framework Laravel. Il intéragit
    avec une base de données et permet la gestion de CRUD, de droits et gère une restriction
    d'accès en fonction des droits de l'utilisateur. Il gère ainsi de plus un système de
    création de compte et de connexion.
    `,
    image: "/images/uianimation.jpg",
    technologies: ["Laravel"],
    category: "game"
  },
  {
    id: 3,
    title: "Carspot Analytics",
    description: `
    Ce projet est celui de mon deuxième stage. Il a pour but de traiter et d'analyser de 
    façon graphique les données d'une application mobile associée à l'entreprise. Ainsi, 
    sur Carspot Analytics, on y retrouve tout un tas de graphiques et de données sur les 
    utilisateurs et les autres fonctionnalités de l'application mobile. On y retrouve de plus 
    une gestion de CRUD.
    `,
    image: "/images/carspot_1.png",
    technologies: ["React"],
    category: "blockchain"
  },
  {
    id: 4,
    title: "This Portfolio",
    description: `
    Designé par mes soins, ce portfolio est à mon image : sobre et innovant. Ce projet 
    m'est utile dans mon parcours scolaire mais aussi et surtout pour montrer mon travail 
    et mes compétences !
    `,
    image: "/images/portfolio.png",
    technologies: ["React"],
    category: "animation"
  },
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
      <div className="flex flex-wrap gap-6 justify-center py-[50px]">
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
                  <p className="text-gray-400 mb-4">{project.description.substring(0,50-3)+"..."}</p>
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