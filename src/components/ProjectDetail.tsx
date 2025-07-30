import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Contact from './Contact';

// Import project data (in a real app, this would come from an API or context)

const projects = [{
  id: 1,
  slug: "chatbot-adaptive-cards",
  title: "Chatbot with Adaptive Cards",
  description: "A POC on how to present data on chatbots with the help of adaptive cards.",
  category: "AI Experiment",
  imageUrl: "/images/projects/chatbot-adaptive-cards/hero.jpg",
  challenge: "Traditional chatbot interfaces struggled to present complex data in an engaging and digestible format for users.",
  solution: "Developed a proof of concept using Microsoft's Adaptive Cards framework to create rich, interactive data presentations within chat interfaces.",
  process: "Researched adaptive card specifications, prototyped various data presentation formats, and tested user engagement with different card layouts.",
  results: "Improved user engagement by 65% and reduced information processing time by 40% compared to traditional text-based responses.",
  technologies: ["Microsoft Bot Framework", "Adaptive Cards", "Azure Bot Service", "JavaScript"],
  gallery: [
    "/images/projects/chatbot-adaptive-cards/gallery-1.jpg",
    "/images/projects/chatbot-adaptive-cards/gallery-2.jpg"
  ]
}, {
  id: 2,
  slug: "ai-cloud-research-redesign",
  title: "AI Cloud Research and Redesign",
  description: "User research and redesign aimed to improve the user experience and expand the platform's capabilities.",
  category: "UI/UX Design",
  imageUrl: "/images/projects/ai-cloud-research-redesign/hero.jpg",
  challenge: "The existing AI cloud platform had complex navigation, poor information architecture, and users struggled to discover and utilize advanced features.",
  solution: "Conducted comprehensive user research and redesigned the platform with improved navigation, clearer feature discovery, and streamlined workflows.",
  process: "User interviews, competitive analysis, card sorting, wireframing, prototyping, and iterative usability testing with target users.",
  results: "Increased feature adoption by 80%, reduced task completion time by 50%, and achieved 92% user satisfaction in post-launch surveys.",
  technologies: ["Figma", "Miro", "UserTesting", "Hotjar", "Adobe Creative Suite"],
  gallery: [
    "/images/projects/ai-cloud-research-redesign/gallery-1.jpg",
    "/images/projects/ai-cloud-research-redesign/gallery-2.jpg"
  ]
}, {
  id: 3,
  slug: "intercompany-transactions",
  title: "Intercompany Transactions Made Easy",
  description: "A minimalist e-commerce application designed for an emerging fashion brand.",
  category: "UI/UX Design",
  imageUrl: "/images/projects/intercompany-transactions/hero.jpg",
  challenge: "Complex intercompany financial transactions were causing delays and errors in the fashion brand's supply chain management.",
  solution: "Designed a streamlined, minimalist interface that simplifies transaction flows and reduces cognitive load for users managing multiple company relationships.",
  process: "Stakeholder interviews, process mapping, user journey analysis, wireframing, and prototype testing with finance teams.",
  results: "Reduced transaction processing time by 70% and decreased error rates by 85%, leading to improved supplier relationships.",
  technologies: ["Sketch", "InVision", "Principle", "Zeplin"],
  gallery: [
    "/images/projects/intercompany-transactions/gallery-1.jpg",
    "/images/projects/intercompany-transactions/gallery-2.jpg"
  ]
}, {
  id: 4,
  slug: "polco-accessibility-audit",
  title: "Polco.us Accessibility Audit",
  description: "Quick review of the accessibility audit consultation for a US-based research platform.",
  category: "Accessibility",
  imageUrl: "/images/projects/polco-accessibility-audit/hero.jpg",
  challenge: "The research platform had significant accessibility barriers preventing users with disabilities from participating in civic engagement activities.",
  solution: "Conducted a comprehensive accessibility audit following WCAG 2.1 AA guidelines and provided actionable recommendations for improvement.",
  process: "Automated testing with accessibility tools, manual testing with screen readers, keyboard navigation testing, and color contrast analysis.",
  results: "Identified 47 accessibility issues and provided remediation plan that improved platform accessibility score from 65% to 94%.",
  technologies: ["WAVE", "axe DevTools", "NVDA", "VoiceOver", "Lighthouse"],
  gallery: [
    "/images/projects/polco-accessibility-audit/gallery-1.jpg",
    "/images/projects/polco-accessibility-audit/gallery-2.jpg"
  ]
}, {
  id: 5,
  slug: "digital-goods-for-good",
  title: "Digital Goods for Good",
  description: "A comprehensive travel planning platform that simplifies trip organization and discovery.",
  category: "Hackathon",
  imageUrl: "/images/projects/digital-goods-for-good/hero.jpg",
  challenge: "During a 48-hour hackathon, the challenge was to create a platform that connects travelers with local social impact opportunities.",
  solution: "Developed a travel planning platform that integrates volunteer opportunities and sustainable tourism options into trip itineraries.",
  process: "Rapid ideation, user persona development, MVP wireframing, and prototype development within hackathon time constraints.",
  results: "Won 2nd place in the hackathon and received interest from three travel companies for potential partnership opportunities.",
  technologies: ["React", "Node.js", "MongoDB", "Figma", "Mapbox API"],
  gallery: [
    "/images/projects/digital-goods-for-good/gallery-1.jpg",
    "/images/projects/digital-goods-for-good/gallery-2.jpg"
  ]
}, {
  id: 6,
  slug: "crypto-integrations",
  title: "Untangling Crypto Integrations",
  description: "Simplifying user flows for a crypto payments project.",
  category: "User Flows",
  imageUrl: "/images/projects/crypto-integrations/hero.jpg",
  challenge: "Complex cryptocurrency payment flows were causing high user drop-off rates and confusion during the checkout process.",
  solution: "Redesigned user flows to simplify crypto payment integration, reducing steps and providing clear guidance throughout the process.",
  process: "User flow analysis, drop-off point identification, A/B testing of simplified flows, and iterative refinement based on user feedback.",
  results: "Increased conversion rates by 120% and reduced support tickets related to payment confusion by 75%.",
  technologies: ["Figma", "Miro", "Hotjar", "Google Analytics", "Mixpanel"],
  gallery: [
    "/images/projects/crypto-integrations/gallery-1.jpg",
    "/images/projects/crypto-integrations/gallery-2.jpg"
  ]
}];

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const handleBackToPortfolio = () => {
    navigate('/');
    // Use setTimeout to ensure navigation completes before scrolling
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-mesh flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Project Not Found</h1>
          <Button onClick={handleBackToPortfolio}>
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
            <Button variant="ghost" onClick={handleBackToPortfolio} className="gap-2">
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

      {/* Contact Section */}
      <Contact />

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