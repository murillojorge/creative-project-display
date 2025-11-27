import React from 'react';
import { ArrowDown, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  const scrollToContact = () => {
    document.getElementById('services-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center pt-24 pb-16">
      <div className="container-width">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-sm text-muted-foreground mb-8 animate-fade-in">
            <Briefcase size={16} aria-hidden="true" />
            <span>Available for freelance projects</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading tracking-tight mb-6 animate-slide-down">
            Design Services for{' '}
            <span className="text-muted-foreground">Digital Products</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Crafting intuitive user experiences, polished interfaces, and AI-powered product strategies that help businesses grow and delight their users.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="min-w-[180px]"
            >
              Start a Project
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild
              className="min-w-[180px]"
            >
              <Link to="/#projects">View Portfolio</Link>
            </Button>
          </div>
          
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => document.getElementById('services-list')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Scroll to services"
            >
              <ArrowDown size={24} className="animate-bounce" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
