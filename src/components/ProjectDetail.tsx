import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Import project data (in a real app, this would come from an API or context)
import smartHomeImage from '@/assets/smart-home-controller.webp';

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

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-mesh flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-mesh">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
        <div className="container-width py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" onClick={() => navigate('/')} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
            <div className="flex items-center gap-4">
              {prevProject && (
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/project/${prevProject.slug}`}>
                    <ChevronLeft className="w-4 h-4" />
                  </Link>
                </Button>
              )}
              {nextProject && (
                <Button variant="ghost" size="sm" asChild>
                  <Link to={`/project/${nextProject.slug}`}>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 animate-fade-in">
              <Badge variant="secondary" className="mb-4">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-medium mb-6">{project.title}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">{project.description}</p>
            </div>
            
            <div className="aspect-[16/10] relative overflow-hidden rounded-2xl mb-12 animate-scale-in [animation-delay:200ms]">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section">
        <div className="container-width">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              <div className="animate-fade-in [animation-delay:300ms]">
                <h2 className="text-2xl font-medium mb-4">Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </div>

              <div className="animate-fade-in [animation-delay:400ms]">
                <h2 className="text-2xl font-medium mb-4">Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>

              <div className="animate-fade-in [animation-delay:500ms]">
                <h2 className="text-2xl font-medium mb-4">Process</h2>
                <p className="text-muted-foreground leading-relaxed">{project.process}</p>
              </div>

              <div className="animate-fade-in [animation-delay:600ms]">
                <h2 className="text-2xl font-medium mb-4">Results</h2>
                <p className="text-muted-foreground leading-relaxed">{project.results}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8 animate-fade-in [animation-delay:700ms]">
              <div>
                <h3 className="font-medium mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="section">
          <div className="container-width">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-medium mb-8 animate-fade-in">Gallery</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((image, index) => (
                  <div 
                    key={index} 
                    className={`aspect-[4/3] relative overflow-hidden rounded-xl animate-fade-in [animation-delay:${800 + index * 100}ms]`}
                  >
                    <img 
                      src={image} 
                      alt={`${project.title} - Image ${index + 1}`}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation Footer */}
      <section className="section">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between py-8 border-t">
              {prevProject ? (
                <Button variant="ghost" asChild className="flex-1 justify-start">
                  <Link to={`/project/${prevProject.slug}`} className="flex items-center gap-3">
                    <ChevronLeft className="w-5 h-5" />
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Previous</p>
                      <p className="font-medium">{prevProject.title}</p>
                    </div>
                  </Link>
                </Button>
              ) : <div />}
              
              {nextProject ? (
                <Button variant="ghost" asChild className="flex-1 justify-end">
                  <Link to={`/project/${nextProject.slug}`} className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Next</p>
                      <p className="font-medium">{nextProject.title}</p>
                    </div>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </Button>
              ) : <div />}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;