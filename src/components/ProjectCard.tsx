
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  category,
  imageUrl,
  index
}) => {
  return (
    <div className={cn(
      "project-card animate-fade-in",
      index > 0 && `[animation-delay:${index * 100}ms]`
    )}>
      <div className="aspect-[4/3] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity group-hover:opacity-100"></div>
        <img 
          src={imageUrl} 
          alt={title}
          className="object-cover w-full h-full transition-transform duration-700 ease-in-out hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-medium mt-2 mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
