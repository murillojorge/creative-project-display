import React from 'react';
import { Target, Calendar, MessageSquare, Check } from 'lucide-react';

const models = [
  {
    icon: Target,
    title: 'Project-Based',
    subtitle: 'Best for defined scope',
    description: 'Fixed-price engagement for specific deliverables with clear milestones and timelines.',
    includes: [
      'Defined scope & deliverables',
      'Milestone-based payments',
      'Project timeline',
      'Revision rounds included',
      'Final handoff package',
    ],
  },
  {
    icon: Calendar,
    title: 'Retainer',
    subtitle: 'Best for ongoing partnership',
    description: 'Monthly hours dedicated to your product for continuous design support and iteration.',
    includes: [
      'Dedicated monthly hours',
      'Priority scheduling',
      'Flexible task allocation',
      'Regular sync meetings',
      'Rollover unused hours',
    ],
    highlighted: true,
  },
  {
    icon: MessageSquare,
    title: 'Consulting',
    subtitle: 'Best for strategy & guidance',
    description: 'Expert advice, workshops, and audits to level up your team and product.',
    includes: [
      'Design audits & reviews',
      'Team workshops',
      'Strategic recommendations',
      'Process optimization',
      'Mentorship sessions',
    ],
  },
];

const EngagementModels = () => {
  return (
    <section className="section py-20">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-heading mb-4">Engagement Models</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Flexible options to match your project needs and working style.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <article 
              key={model.title}
              className={`relative p-8 rounded-lg border transition-all duration-300 hover:-translate-y-1 ${
                model.highlighted 
                  ? 'border-primary bg-card shadow-md' 
                  : 'border-border/50 bg-card hover:border-border/80 hover:shadow-md'
              }`}
            >
              {model.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Popular
                </span>
              )}
              
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-6">
                <model.icon size={24} aria-hidden="true" />
              </div>
              
              <h3 className="text-xl font-heading mb-1">{model.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{model.subtitle}</p>
              <p className="text-muted-foreground mb-6">{model.description}</p>
              
              <div className="pt-6 border-t border-border">
                <p className="text-sm font-medium mb-4">What's included:</p>
                <ul className="space-y-3">
                  {model.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
