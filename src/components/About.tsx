
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="w-full max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="aspect-square max-w-md mx-auto md:mx-0 rounded-full overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop" 
                alt="Designer portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
              About Me
            </span>
            <h2 className="mb-6">Designing with purpose and precision</h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 8 years of experience in product design, I specialize in creating intuitive digital experiences that blend aesthetics with functionality.
              </p>
              <p>
                My design philosophy is built on understanding user needs, business goals, and technological possibilities to create solutions that make a difference.
              </p>
              <p>
                I've worked with startups and established companies across fintech, healthcare, e-commerce, and more, helping them build products that users love.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-foreground">Design Tools</h4>
                <p className="text-sm text-muted-foreground">Figma, Sketch, Adobe XD</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-foreground">Prototyping</h4>
                <p className="text-sm text-muted-foreground">Principle, ProtoPie, Framer</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-foreground">Research</h4>
                <p className="text-sm text-muted-foreground">User Interviews, Usability Testing</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-medium text-foreground">Collaboration</h4>
                <p className="text-sm text-muted-foreground">Design Systems, Documentation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
