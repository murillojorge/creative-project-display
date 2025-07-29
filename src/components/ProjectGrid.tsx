import React from 'react';
import ProjectCard from './ProjectCard';
import smartHomeImage from '@/assets/smart-home-controller.webp';

// Sample project data
const projects = [{
  id: 1,
  slug: "financial-app-redesign",
  title: "Financial App Redesign",
  description: "A complete redesign of a financial management platform focusing on usability and visual hierarchy.",
  category: "UX/UI Design",
  imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  challenge: "The existing financial platform had poor user experience with complex navigation and overwhelming data presentation.",
  solution: "Redesigned the entire interface with clear visual hierarchy, simplified navigation, and intuitive data visualization.",
  process: "Conducted user research, created personas, wireframed solutions, and iteratively tested prototypes.",
  results: "40% increase in user engagement and 60% reduction in task completion time.",
  technologies: ["Figma", "Adobe Creative Suite", "Principle"],
  gallery: [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  ]
}, {
  id: 2,
  slug: "health-tracking-dashboard",
  title: "Health Tracking Dashboard",
  description: "A wellness application dashboard designed to help users visualize and track their health goals.",
  category: "Product Design",
  imageUrl: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop",
  challenge: "Users struggled to understand their health data and maintain consistent tracking habits.",
  solution: "Created an intuitive dashboard with clear data visualization and gamification elements to encourage engagement.",
  process: "User interviews, competitive analysis, iterative design, and usability testing with health professionals.",
  results: "75% improvement in daily tracking consistency and 90% user satisfaction rate.",
  technologies: ["React", "D3.js", "Tailwind CSS", "Figma"],
  gallery: [
    "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop"
  ]
}, {
  id: 3,
  slug: "ecommerce-mobile-app",
  title: "E-commerce Mobile App",
  description: "A minimalist e-commerce application designed for an emerging fashion brand.",
  category: "Mobile Design",
  imageUrl: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop",
  challenge: "Creating a seamless mobile shopping experience that reflects the brand's minimalist aesthetic.",
  solution: "Designed a clean, gesture-driven interface with focus on product photography and streamlined checkout.",
  process: "Brand analysis, mobile-first design approach, prototype development, and A/B testing.",
  results: "50% increase in mobile conversion rate and 95% positive user feedback on design.",
  technologies: ["React Native", "Sketch", "InVision", "Zeplin"],
  gallery: [
    "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
  ]
}, {
  id: 4,
  slug: "smart-home-controller",
  title: "Smart Home Controller",
  description: "An intuitive interface for controlling connected home devices with voice and touch interactions.",
  category: "IoT Design",
  imageUrl: smartHomeImage,
  challenge: "Designing a unified interface for diverse IoT devices while maintaining simplicity and accessibility.",
  solution: "Created a modular dashboard with customizable widgets and multi-modal interaction support.",
  process: "IoT ecosystem research, accessibility testing, voice UI design, and prototype validation.",
  results: "85% reduction in setup time and universal accessibility compliance.",
  technologies: ["Vue.js", "WebRTC", "Node.js", "Figma"],
  gallery: [
    smartHomeImage,
    "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=2070&auto=format&fit=crop"
  ]
}, {
  id: 5,
  slug: "travel-planning-platform",
  title: "Travel Planning Platform",
  description: "A comprehensive travel planning platform that simplifies trip organization and discovery.",
  category: "Web Design",
  imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
  challenge: "Simplifying the complex process of multi-destination trip planning while providing comprehensive information.",
  solution: "Built an intelligent planning tool with AI-powered recommendations and collaborative features.",
  process: "Travel behavior research, information architecture design, and extensive user testing.",
  results: "60% faster trip planning process and 80% user retention rate.",
  technologies: ["Next.js", "TypeScript", "Mapbox", "PostgreSQL"],
  gallery: [
    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop"
  ]
}, {
  id: 6,
  slug: "productivity-tool",
  title: "Productivity Tool",
  description: "A minimal task management application focused on distraction-free productivity.",
  category: "UX/UI Design",
  imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  challenge: "Creating a productivity tool that enhances focus rather than creating additional distractions.",
  solution: "Designed a minimalist interface with intelligent task prioritization and distraction-blocking features.",
  process: "Productivity workflow analysis, minimalist design principles, and focus group testing.",
  results: "70% improvement in task completion rate and 65% reduction in context switching.",
  technologies: ["React", "Electron", "SQLite", "Framer Motion"],
  gallery: [
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop"
  ]
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
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              category={project.category} 
              imageUrl={project.imageUrl} 
              index={index}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </section>;
};
export default ProjectGrid;