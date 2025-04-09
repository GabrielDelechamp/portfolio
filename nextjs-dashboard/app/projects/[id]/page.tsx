'use client'
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { projectsData } from "@/data/projectsData";
import { useTranslation } from 'react-i18next';


const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const router = useRouter(); // Hook pour la navigation
  const projectId = Number(id);
  const { t } = useTranslation();

  if (isNaN(projectId)) {
    return <p className="text-red-500">{t("Invalid Project ID")}</p>;
  }

  const project = projectsData.find((project) => project.id === projectId);

  if (!project) {
    return <p className="text-red-500">{t("Project not found")}</p>;
  }

  return (
    <div className="max-w-4xl py-10 mx-auto h-[100%] overflow-y-auto">
      <button
        onClick={() => router.push('/projects')}
        className="mb-6 px-4 py-2 dark:bg-gray-800 bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-400 dark:text-white rounded-lg transition duration-200"
      >
        ← {t("Back to project list")}
      </button>

      {project.link && (
        <a 
          className="m-6 px-4 py-2 dark:bg-gray-800 bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 hover:bg-gray-400 dark:text-white rounded-lg transition duration-200" 
          href={project.link} target="_blank" rel="noopener noreferrer"
        >
          {t("Let's have a look to the project")}
        </a>
      )}

      <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg w-full object-cover mb-6"
      />
      <p className="dark:text-gray-400 mb-4">{t(project.description)}</p>
      
      <h3 className="text-lg font-semibold mb-2">Technologies :</h3>
      <ul className="list-disc list-inside dark:text-gray-300">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;
