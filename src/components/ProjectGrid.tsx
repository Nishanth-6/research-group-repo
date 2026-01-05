import { ProjectCard } from './ProjectCard';

interface ProjectGridProps {
  activeFilter: string;
}

const projects = [
  {
    id: 1,
    title: 'Smart Grid Optimization',
    description: 'AI-powered decision support system for real-time power grid management and load balancing.',
    image: 'https://images.unsplash.com/photo-1662023027736-0cab9f911b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdyaWQlMjBlbGVjdHJpY2FsfGVufDF8fHx8MTc2NTMzMDcxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['energy', 'ai', 'infrastructure'],
    team: ['Dr. Sarah Chen', 'Dr. Marcus Williams'],
  },
  {
    id: 2,
    title: 'Resilient Infrastructure Networks',
    description: 'Machine learning models for predicting and mitigating infrastructure failures during extreme weather events.',
    image: 'https://images.unsplash.com/photo-1589898424451-21e24dcb143c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1NDEwMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['infrastructure', 'resilience', 'ai'],
    team: ['Dr. James Park', 'Dr. Emily Rodriguez'],
  },
  {
    id: 3,
    title: 'Solar Deployment Accelerator',
    description: 'Computational tools for optimizing solar panel placement and predicting energy output in urban environments.',
    image: 'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhcnxlbnwxfHx8fDE3NjUzMTg2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['energy', 'sustainability', 'ai'],
    team: ['Dr. Aisha Patel', 'Dr. Carlos Mendez'],
  },
  {
    id: 4,
    title: 'Urban Energy Dashboard',
    description: 'Real-time visualization platform for monitoring and analyzing city-wide energy consumption patterns.',
    image: 'https://images.unsplash.com/photo-1762279388979-6a430989284c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMG5ldHdvcmt8ZW58MXx8fHwxNzY1MzY5NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['energy', 'ai', 'infrastructure'],
    team: ['Dr. Michael Zhang', 'Dr. Lisa Thompson'],
  },
  {
    id: 5,
    title: 'Climate-Adaptive Infrastructure',
    description: 'Decision intelligence framework for designing infrastructure that adapts to changing climate conditions.',
    image: 'https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjUzMzQ3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['infrastructure', 'resilience', 'sustainability'],
    team: ['Dr. Rachel Green', 'Dr. David Kim'],
  },
  {
    id: 6,
    title: 'Sustainable Building Systems',
    description: 'IoT-enabled monitoring and optimization of energy usage in commercial and residential buildings.',
    image: 'https://images.unsplash.com/photo-1521708266372-b3547456cc2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NTQxMDExNHww&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['sustainability', 'energy', 'infrastructure'],
    team: ['Dr. Nina Okonkwo', 'Dr. Thomas Anderson'],
  },
];

export function ProjectGrid({ activeFilter }: ProjectGridProps) {
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

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
