import React from 'react';
import ProjectCard from './ProjectCard';
import smartHomeImage from '@/assets/smart-home-controller.webp';

// Sample project data
const projects = [{
  id: 1,
  title: "Chatbot with Adaptive Cards",
  description: "A POC on how to present data on chatbots with the help of adaptive cards.",
  category: "AI Experiment",
  imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
}, {
  id: 2,
  title: "AI Cloud Research and Redesign",
  description: "User research and redesign aimed to improve the user experience and expand the platform's capabilities.",
  category: "UI/UX Design",
  imageUrl: "assets/aic-card.png"
}, {
  id: 3,
  title: "Intercompany Transactions Made Easy",
  description: "A minimalist e-commerce application designed for an emerging fashion brand.",
  category: "UI/UX Design",
  imageUrl: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop"
}, {
  id: 4,
  title: "Polco.us Accessibility Audit",
  description: "Quick review of the accessibility audit consultation for a US-based research platform.",
  category: "Accessibility",
  imageUrl: smartHomeImage
}, {
  id: 5,
  title: "Digital Goods for Good",
  description: "A comprehensive travel planning platform that simplifies trip organization and discovery.",
  category: "Hackathon",
  imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
}, {
  id: 6,
  title: "Untangling Crypto Integrations",
  description: "Simplifying user flows for a crypto payments project.",
  category: "User Flows",
  imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
}];
const ProjectGrid = () => {
  return <section id="projects" className="section">
      <div className="container-width">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="mb-4">Selected Projects</h2>
          <p className="text-muted-foreground">Explore my recent design work across various industries and platforms.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => <ProjectCard key={project.id} title={project.title} description={project.description} category={project.category} imageUrl={project.imageUrl} index={index} />)}
        </div>
      </div>
    </section>;
};
export default ProjectGrid;