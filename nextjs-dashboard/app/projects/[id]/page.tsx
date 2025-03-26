'use client'
import React from 'react';
import { useParams, useRouter } from 'next/navigation';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Eazy Media Website",
    description: `
    Ce site web m'a été demandé dans le cadre d'un stage pour Eazy Media. À l'aide d'une 
    maquette faite sur Figma, j'ai réalisé ce site. Le développement de ce site m'a permis 
    d'approfondir et de repousser mes connaissances en HTML/CSS natif. 
    `,
    image: "/images/eazy-website.png",
    link: "https://eazy-media.fr/",
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
    link: "",
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
    link: "",
    technologies: ["React"],
    category: "blockchain"
  },
  {
    id: 4,
    title: "This Portfolio",
    description: `
    Conçu par mes soins, ce portfolio est à mon image : sobre et innovant. Ce projet 
    m'est utile dans mon parcours scolaire mais aussi et surtout pour montrer mon travail 
    et mes compétences !
    `,
    image: "/images/portfolio.png",
    link: "",
    technologies: ["React"],
    category: "animation"
  },
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const router = useRouter(); // Hook pour la navigation
  const projectId = Number(id);

  if (isNaN(projectId)) {
    return <p className="text-red-500">ID de projet invalide</p>;
  }

  const project = projectsData.find((project) => project.id === projectId);

  if (!project) {
    return <p className="text-red-500">Project not found</p>;
  }

  return (
    <div className="max-w-4xl py-10 mx-auto h-[100%] overflow-y-auto">
      <button
        onClick={() => router.push('/projects')}
        className="mb-6 px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 text-white rounded-lg transition duration-200"
      >
        ← Retour à la liste des projets
      </button>

      {project.link && (
        <a 
          className="m-6 px-4 py-2 bg-gray-800 text-gray-300 hover:bg-gray-700 text-white rounded-lg transition duration-200" 
          href={project.link} target="_blank" rel="noopener noreferrer"
        >
          Voir le projet
        </a>
      )}

      <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg w-full object-cover mb-6"
      />
      <p className="text-gray-400 mb-4">{project.description}</p>
      
      <h3 className="text-lg font-semibold mb-2">Technologies :</h3>
      <ul className="list-disc list-inside text-gray-300">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;
