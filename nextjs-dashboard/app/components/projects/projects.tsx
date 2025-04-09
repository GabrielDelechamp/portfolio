import React from 'react';
import { Filters } from './sidebar';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { projectsData } from "@/data/projectsData";


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  category: string;
}



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
  const { t } = useTranslation();


  return (
    <div className='max-w-[1190px] py-[50px] mx-auto overflow-y-auto'>
      <p className='ml-10'>
        <dl className="dark:text-white">
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
                <span className="text-[#5565E8]">{t("Project")} {project.id}</span> //{""}
                <span className="italic">
                  _{t(project.title).toLowerCase().replace(/\s+/g, '-')}
                </span>
              </h3>
              <div className="dark:bg-[#011221] rounded-lg border-2 border-[#1E2D3D] overflow-hidden">
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
                        className="dark:bg-gray-800 bg-gray-200 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4">
                  <p className="dark:text-gray-400 mb-4">{t(project.description).substring(0,50-3)+"..."}</p>
                  <Link href={`/projects/${project.id}`}>
                    <button className="bg-gray-200 dark:bg-gray-800 dark:text-gray-300 px-4 py-2 rounded dark:hover:bg-gray-700 hover:bg-gray-300 transition-colors">
                      {t("View Project")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">{t("No projects match the selected filters.")}</p>
        )}
      </div>
      </div>
  );
};

export default Projects;