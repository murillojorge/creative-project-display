import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Contact from './Contact';
import { GalleryModal } from './GalleryModal';
import Outcomes from './Outcomes';
import ReactMarkdown from 'react-markdown';
import { projects } from '@/data/projects';
import { loadAllProjectContent } from '@/utils/contentLoader';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [content, setContent] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  
  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Load project content
  useEffect(() => {
    if (slug) {
      setLoading(true);
      loadAllProjectContent(slug)
        .then(setContent)
        .finally(() => setLoading(false));
    }
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

  const openModal = (imageIndex: number) => {
    setSelectedImageIndex(imageIndex);
    setModalOpen(true);
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
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="aspect-[16/10] relative overflow-hidden rounded-2xl mb-8 animate-scale-in">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            
            <div className="mb-8 animate-fade-in [animation-delay:200ms]">
              <Badge variant="secondary" className="mb-4">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-medium mb-6">{project.title}</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">{project.description}</p>
            </div>

            {/* Key Outcomes */}
            {!loading && content.outcomes && (
              <div className="animate-fade-in [animation-delay:300ms]">
                <Outcomes content={content.outcomes} />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      {project.gallery && project.gallery.length > 1 && (
        <section className="section">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="w-full">
              <h2 className="text-2xl font-medium mb-4 animate-fade-in">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {project.gallery.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => openModal(index)}
                    className={`aspect-[4/3] relative overflow-hidden rounded-xl animate-fade-in [animation-delay:${300 + index * 100}ms] group cursor-pointer`}
                  >
                    <img 
                      src={image} 
                      alt="React"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Details */}
      <section className="section">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {loading ? (
                <div className="space-y-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-6 bg-muted rounded w-24 mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-4 bg-muted rounded"></div>
                        <div className="h-4 bg-muted rounded w-5/6"></div>
                        <div className="h-4 bg-muted rounded w-4/6"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  <div className="animate-fade-in [animation-delay:500ms]">
                    <h2 className="text-2xl font-medium mb-4">Challenge</h2>
                    <div className="leading-relaxed prose prose-neutral dark:prose-invert max-w-none">
                      <ReactMarkdown>{content.challenge || 'Content loading...'}</ReactMarkdown>
                    </div>
                  </div>

                  <div className="animate-fade-in [animation-delay:600ms]">
                    <h2 className="text-2xl font-medium mb-4">Solution</h2>
                    <div className="leading-relaxed prose prose-neutral dark:prose-invert max-w-none">
                      <ReactMarkdown>{content.solution || 'Content loading...'}</ReactMarkdown>
                    </div>
                  </div>

                  <div className="animate-fade-in [animation-delay:700ms]">
                    <h2 className="text-2xl font-medium mb-4">Process</h2>
                    <div className="leading-relaxed prose prose-neutral dark:prose-invert max-w-none">
                      <ReactMarkdown>{content.process || 'Content loading...'}</ReactMarkdown>
                    </div>
                  </div>

                  <div className="animate-fade-in [animation-delay:800ms]">
                    <h2 className="text-2xl font-medium mb-4">Results</h2>
                    <div className="leading-relaxed prose prose-neutral dark:prose-invert max-w-none">
                      <ReactMarkdown>{content.results || 'Content loading...'}</ReactMarkdown>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Sidebar - Hidden */}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <Contact />

      {/* Gallery Modal */}
      {project.gallery && (
        <GalleryModal
          images={project.gallery}
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialIndex={selectedImageIndex}
          projectTitle={project.title}
        />
      )}

      {/* Navigation Footer */}
      <section className="section">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <div className="flex items-center justify-between py-8 border-t">
              {prevProject ? (
                <Button variant="ghost" asChild className="flex-1 justify-start pl-1 h-auto py-3">
                  <Link to={`/project/${prevProject.slug}`} className="flex items-center gap-3">
                    <ChevronLeft className="w-5 h-5" />
                    <div className="text-left hidden sm:block">
                      <p className="text-sm text-muted-foreground">Previous</p>
                      <p className="font-medium">{prevProject.title}</p>
                    </div>
                    <div className="text-left sm:hidden">
                      <p className="text-sm font-medium">Previous</p>
                    </div>
                  </Link>
                </Button>
              ) : <div />}
              
              {nextProject ? (
                <Button variant="ghost" asChild className="flex-1 justify-end pr-1 h-auto py-3">
                  <Link to={`/project/${nextProject.slug}`} className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                      <p className="text-sm text-muted-foreground">Next</p>
                      <p className="font-medium">{nextProject.title}</p>
                    </div>
                    <div className="text-right sm:hidden">
                      <p className="text-sm font-medium">Next</p>
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