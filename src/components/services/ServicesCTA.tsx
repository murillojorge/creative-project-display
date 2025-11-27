import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesCTA = () => {
  return (
    <section id="services-cta" className="section py-24">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
            <Mail size={28} className="text-primary" aria-hidden="true" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-heading mb-4">
            Ready to Elevate Your Product?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how I can help bring your vision to life. Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="min-w-[200px]">
              <Link to="/#contact">
                Get in Touch
                <ArrowRight size={18} className="ml-2" aria-hidden="true" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" asChild className="min-w-[200px]">
              <a href="mailto:hello@jmurillo.com">
                hello@jmurillo.com
              </a>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-8">
            Usually respond within 24-48 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
