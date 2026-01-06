import { useEffect, useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { loadProjects, type Project } from '../utils/dataLoader';

interface ProjectGridProps {
  activeFilter: string;
}

interface ProjectWithId extends Project {
  id: number;
}

export function ProjectGrid({ activeFilter }: ProjectGridProps) {
  const [projects, setProjects] = useState<ProjectWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects().then((data) => {
      const projectsWithIds = data.map((project, index) => ({
        ...project,
        id: index + 1
      }));
      setProjects(projectsWithIds);
      setLoading(false);
    });
  }, []);

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.categories.includes(activeFilter));

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center">
          <p className="text-gray-500">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
