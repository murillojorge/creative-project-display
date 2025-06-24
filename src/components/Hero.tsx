
import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-2 animate-slide-down">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              Product Designer
            </span>
            <h1 className="mt-4 font-medium leading-tight tracking-tighter">
              Creating thoughtful digital experiences through design
            </h1>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">
            I'm a product designer focused on creating intuitive and beautiful digital products that solve real problems for users.
          </p>
          
          <div className="pt-4 animate-fade-in [animation-delay:400ms]">
            <a 
              href="#projects" 
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90"
            >
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
