'use client';
import React, { useState } from 'react';
import Sidebar from '../components/projects/sidebar';
import Projects from '../components/projects/projects';
import { Filters } from '../components/projects/sidebar';

const ProjectsPage: React.FC = () => {
  const [filters, setFilters] = useState<Filters>({
    react: false,
    vue: false,
    html: false,
    css: false,
    angular: false,
    gatsby: false,
    flutter: false
  });

  return (
    <div className="flex h-[100%]">
      <Sidebar filters={filters} setFilters={setFilters} />
      <Projects filters={filters} />
    </div>
  );
};

export default ProjectsPage;