'use client'
import React from 'react';
import { useParams } from 'next/navigation';

// Importez les données et définissez les types
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

const ProjectDetail: React.FC = () => {
  const { id } = useParams(); // Récupère l'ID dans l'URL
  const projectId = Number(id); // Convertit en nombre
  const project = projectsData.find((project) => project.id === projectId); // Recherche du projet

  if (!project) {
    return <p className="text-red-500">Project not found</p>;
  }

  return (
    <div className="max-w-4xl py-10 mx-auto h-[100%] overflow-y-scroll">
      <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg w-full object-cover mb-6"
        />
      <p className="text-gray-400 mb-4">{project.description}</p>
      <h3 className="text-lg font-semibold mb-2">Technologies:</h3>
      <ul className="list-disc list-inside text-gray-300">
        {project.technologies.map((tech: string, index: number) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;
