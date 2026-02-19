import { ArrowUpRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  categories: string[];
  team: string[];
}

interface ProjectCardProps {
  project: Project;
  onClick?: () => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer" onClick={onClick}>
      <div className="relative overflow-hidden bg-gray-100 aspect-[4/3] mb-4" style={{ borderRadius: '12px' }}>
        <ImageWithFallback
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-white rounded-full p-2">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl mb-2 group-hover:underline">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((category) => (
            <span
              key={category}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {category}
            </span>
          ))}
        </div>
        
        <div className="text-xs text-gray-500">
          {project.team.join(', ')}
        </div>
      </div>
    </div>
  );
}
