
import React from 'react';
import ProjectCard from './ProjectCard';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Financial App Redesign",
    description: "A complete redesign of a financial management platform focusing on usability and visual hierarchy.",
    category: "UX/UI Design",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Health Tracking Dashboard",
    description: "A wellness application dashboard designed to help users visualize and track their health goals.",
    category: "Product Design",
    imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "E-commerce Mobile App",
    description: "A minimalist e-commerce application designed for an emerging fashion brand.",
    category: "Mobile Design",
    imageUrl: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Smart Home Controller",
    description: "An intuitive interface for controlling connected home devices with voice and touch interactions.",
    category: "IoT Design",
    imageUrl: "https://images.unsplash.com/photo-1558002038-10058c1a0a8e?q=80&w=2069&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Travel Planning Platform",
    description: "A comprehensive travel planning platform that simplifies trip organization and discovery.",
    category: "Web Design",
    imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Productivity Tool",
    description: "A minimal task management application focused on distraction-free productivity.",
    category: "UX/UI Design",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
  }
];

const ProjectGrid = () => {
  return (
    <section id="projects" className="section">
      <div className="container-width">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="mb-4">Selected Projects</h2>
          <p className="text-muted-foreground">
            Explore a collection of my recent design work across various industries and platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              category={project.category}
              imageUrl={project.imageUrl}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
