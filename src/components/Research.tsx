import { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { FilterBar } from './FilterBar';
import { loadProjects, type Project } from '../utils/dataLoader';

interface ProjectWithId extends Project {
  id: number;
}

interface ProjectForDetail {
  title: string;
  description: string;
  image: string;
  categories: string[];
  team: string[];
}

interface ResearchProps {
  onProjectClick?: (project: ProjectForDetail) => void;
}

export function Research({ onProjectClick }: ResearchProps) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [projects, setProjects] = useState<ProjectWithId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects().then((data) => {
      const projectsWithIds = data.map((project, index) => ({
        ...project,
        id: index + 1,
      }));
      setProjects(projectsWithIds);
      setLoading(false);
    });
  }, []);

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((project) => project.categories.includes(activeFilter));

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Page Header */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          padding: '72px 48px 60px',
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url(/images/projects/resilient-infra.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 35%',
            opacity: 0.25,
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(115deg, #050a18 0%, rgba(8,18,44,0.95) 50%, rgba(11,26,58,0.9) 100%)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1100px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#ffffff',
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Research Projects
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.65)',
              marginTop: '16px',
              maxWidth: '600px',
              lineHeight: 1.7,
            }}
          >
            Explore our active research initiatives spanning infrastructure
            resilience, energy systems, and decision intelligence.
          </p>
        </div>
      </div>

      {/* Filter + Grid */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 48px 80px' }}>
        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div style={{ paddingTop: '40px' }}>
          {loading ? (
            <p style={{ color: '#9ca3af', textAlign: 'center', padding: '64px 0' }}>
              Loading projects…
            </p>
          ) : filteredProjects.length === 0 ? (
            <p style={{ color: '#9ca3af', textAlign: 'center', padding: '64px 0' }}>
              No projects found in this category.
            </p>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '40px',
              }}
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => onProjectClick?.(project)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
