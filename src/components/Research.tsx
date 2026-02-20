import { useState, useEffect } from 'react';
import { ProjectCard } from './ProjectCard';
import { FilterBar } from './FilterBar';
import { loadProjects, type Project } from '../utils/dataLoader';
import { clean } from '../lib/sanity';

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
      : projects.filter((project) =>
          clean(project.categories).includes(activeFilter)
        );

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
        {/* Base gradient */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(115deg, #040b1f 0%, #0a1a3f 55%, #142852 100%)',
          }}
        />

        {/* Structured project-network pattern (research pathways + nodes) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(147,197,253,0.09) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147,197,253,0.09) 1px, transparent 1px),
              linear-gradient(28deg, rgba(96,165,250,0.18) 0%, transparent 38%),
              linear-gradient(-32deg, rgba(56,189,248,0.14) 0%, transparent 34%)
            `,
            backgroundSize: '56px 56px, 56px 56px, 100% 100%, 100% 100%',
            opacity: 0.45,
          }}
        />

        {/* Subtle node clusters to suggest connected research tracks */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 18% 32%, rgba(125,211,252,0.28) 0%, rgba(125,211,252,0.04) 12%, transparent 22%), radial-gradient(circle at 48% 66%, rgba(96,165,250,0.22) 0%, rgba(96,165,250,0.03) 10%, transparent 20%), radial-gradient(circle at 78% 30%, rgba(52,211,153,0.2) 0%, rgba(52,211,153,0.03) 10%, transparent 22%), radial-gradient(circle at 88% 76%, rgba(59,130,246,0.2) 0%, rgba(59,130,246,0.03) 10%, transparent 20%)',
          }}
        />

        {/* Final readability layer */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(115deg, rgba(4,10,28,0.78) 0%, rgba(6,14,34,0.64) 50%, rgba(6,14,34,0.75) 100%)',
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
