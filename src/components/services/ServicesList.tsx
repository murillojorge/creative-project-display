import React from 'react';
import { Users, Palette, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'UX Design',
    description: 'User-centered research and design that creates intuitive, accessible experiences.',
    offerings: [
      'User Research & Discovery',
      'Information Architecture',
      'Wireframing & Prototyping',
      'Usability Testing',
      'Journey Mapping',
    ],
  },
  {
    icon: Palette,
    title: 'UI Design',
    description: 'Polished visual design and scalable design systems that elevate your brand.',
    offerings: [
      'Visual Design',
      'Design Systems',
      'Interactive Prototypes',
      'Responsive Design',
      'Design Handoff',
    ],
  },
  {
    icon: Sparkles,
    title: 'AI & Product Strategy',
    description: 'Strategic guidance for integrating AI into products with a human-centered approach.',
    offerings: [
      'AI UX Patterns',
      'Prompt Design',
      'AI Integration Strategy',
      'Ethical AI Guidelines',
      'Product Roadmapping',
    ],
  },
];

const ServicesList = () => {
  return (
    <section id="services-list" className="section py-20">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading mb-4">What I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive design services tailored to your product's unique needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article 
              key={service.title}
              className="group p-8 rounded-lg border border-border/50 bg-card hover:border-border/80 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <service.icon size={24} aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-heading mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.offerings.map((offering) => (
                  <li key={offering} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                    {offering}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
