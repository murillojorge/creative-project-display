import React from 'react';
import { Search, PenTool, Package, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery',
    description: 'Understanding your goals, users, and constraints through research and stakeholder interviews.',
  },
  {
    icon: PenTool,
    number: '02',
    title: 'Design',
    description: 'Ideation, wireframing, and prototyping with continuous feedback and iteration.',
  },
  {
    icon: Package,
    number: '03',
    title: 'Deliver',
    description: 'High-fidelity designs, detailed specifications, and seamless developer handoff.',
  },
  {
    icon: RefreshCw,
    number: '04',
    title: 'Iterate',
    description: 'Testing, feedback integration, and continuous improvement based on real user data.',
  },
];

const ProcessSection = () => {
  return (
    <section className="section py-20 bg-secondary/30">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading mb-4">How I Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A proven process that ensures quality outcomes and keeps you involved at every stage.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" aria-hidden="true" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step number and icon */}
                <div className="relative z-10 mb-6">
                  <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                    <step.icon size={28} aria-hidden="true" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-medium flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-lg font-heading mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-xs">{step.description}</p>
                
                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-border mt-6" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
