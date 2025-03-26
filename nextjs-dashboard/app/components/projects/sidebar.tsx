import React, { useState } from 'react';
import { Folder, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { FaReact, FaLaravel, FaPhp, FaGithub, FaNodeJs, FaCss3Alt, FaHtml5, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiGraphql, SiSupabase, SiJavascript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

interface Technology {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface Filters {
  [key: string]: boolean;
}

interface SidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, setFilters }) => {
  const technologies: Technology[] = [
    { id: 'react', label: 'React', icon: <FaReact className="text-blue-400" /> },
    { id: 'laravel', label: 'Laravel', icon: <FaLaravel className="text-red-500" /> },
    { id: 'html', label: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
    { id: 'css', label: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
    { id: 'c#', label: 'C#', icon: <TbBrandCSharp className="text-yellow-400" /> },
    { id: 'javascript', label: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  ];

  const handleFilterChange = (techId: string): void => {
    setFilters((prev: Filters) => ({
      ...prev,
      [techId]: !prev[techId],
    }));
  };

  return (
    <div className="w-[285px] flex-none p-4 border-r-2 border-[#1E2D3D]">
      <CollapsibleSection title="Filtrer par technos" folderColor="text-blue-400">
        {technologies.map((tech) => (
          <div key={tech.id} className="flex items-center pt-3">
            <input
              type="checkbox"
              id={tech.id}
              checked={filters[tech.id]}
              onChange={() => handleFilterChange(tech.id)}
              className="relative mr-3 w-6 h-6 rounded-sm bg-[#011627] border-2 border-[#607B96] checked:bg-[#607B96] focus:outline-none focus:ring-2 focus:ring-[#607B96] focus:ring-offset-2 focus:ring-offset-gray-800 focus:checked:bg-[#607B96] checked:hover:bg-[#607B96] focus:checked:hover:bg-[#607B96]"
            />
            <label htmlFor={tech.id} className="flex items-center cursor-pointer">
              <span className="mr-2">{tech.icon}</span>
              {tech.label}
            </label>
          </div>
        ))}
      </CollapsibleSection>
    </div>
  );
};

const CollapsibleSection: React.FC<{
  title: string;
  folderColor?: string;
  children?: React.ReactNode;
}> = ({ title, folderColor = 'text-gray-400', children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center text-gray-300 hover:text-white p-2 rounded transition-colors"
      >
        {children && (isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />)}
        <Folder size={16} className={`ml-1 mr-2 ${folderColor}`} />
        <span>{title}</span>
      </button>
      {isOpen && children && (
        <div className="ml-6 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
};

export default Sidebar;