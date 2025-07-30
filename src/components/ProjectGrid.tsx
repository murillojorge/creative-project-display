import React from 'react';
import ProjectCard from './ProjectCard';


// Sample project data
const projects = [{
  id: 1,
  slug: "chatbot-adaptive-cards",
  title: "Chatbot with Adaptive Cards",
  description: "A POC on how to present data on chatbots with the help of adaptive cards.",
  category: "AI Experiment",
  imageUrl: "/images/projects/chatbot-adaptive-cards/hero.jpg"
}, {
  id: 2,
  slug: "ai-cloud-research-redesign",
  title: "AI Cloud Research and Redesign",
  description: "User research and redesign aimed to improve the user experience and expand the platform's capabilities.",
  category: "UI/UX Design",
  imageUrl: "/images/projects/ai-cloud-research-redesign/hero.jpg"
}, {
  id: 3,
  slug: "intercompany-transactions",
  title: "Intercompany Transactions Made Easy",
  description: "A minimalist e-commerce application designed for an emerging fashion brand.",
  category: "UI/UX Design",
  imageUrl: "/images/projects/intercompany-transactions/hero.jpg"
}, {
  id: 4,
  slug: "polco-accessibility-audit",
  title: "Polco.us Accessibility Audit",
  description: "Quick review of the accessibility audit consultation for a US-based research platform.",
  category: "Accessibility",
  imageUrl: "/images/projects/polco-accessibility-audit/hero.jpg"
}, {
  id: 5,
  slug: "digital-goods-for-good",
  title: "Digital Goods for Good",
  description: "A comprehensive travel planning platform that simplifies trip organization and discovery.",
  category: "Hackathon",
  imageUrl: "/images/projects/digital-goods-for-good/hero.jpg"
}, {
  id: 6,
  slug: "crypto-integrations",
  title: "Untangling Crypto Integrations",
  description: "Simplifying user flows for a crypto payments project.",
  category: "User Flows",
  imageUrl: "/images/projects/crypto-integrations/hero.jpg"
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
          {projects.map((project, index) => <ProjectCard key={project.id} title={project.title} description={project.description} category={project.category} imageUrl={project.imageUrl} index={index} slug={project.slug} />)}
        </div>
      </div>
    </section>;
};
export default ProjectGrid;