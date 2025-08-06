import React from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "He's a natural leader and a strong collaborator who effectively aligned stakeholders and engineering teams on a shared user-centric vision.Jorge's strategic approach and dedication to quality make him a valuable asset to any team.",
    author: "Daniel Delgado",
    role: "Senior Engineering Manager",
    company: "Intel"
  },
  {
    text: "Jorge is a great designer who elevated our product's aesthetic and user experience. His deep knowledge of accessibility ensured our designs were inclusive and user-friendly for all. He was also instrumental in improving our design system, which enhanced our team's productivity.",
    author: "Mauricio Varela",
    role: "Product Manager",
    company: "Intel"
  },
  {
    text: "Jorge is the ultimate team player. Not only is he an impressive UX developer, he is insightful, detail-oriented and challenges others to be the best of themselves.",
    author: "Edgar Fernandez",
    role: "Founder",
    company: "Edenia Labs"
  }
];

const Quotes = () => {
  return (
    <section id="quotes" className="section py-20">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-medium mb-12 text-center animate-fade-in">
            What People Say
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className={`group animate-fade-in [animation-delay:${200 + index * 150}ms]`}
              >
                <div className="relative p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <Quote className="w-5 h-5 text-primary mb-4 opacity-60" />
                  
                  <blockquote className="text-foreground/80 leading-relaxed mb-6 italic">
                    "{quote.text}"
                  </blockquote>
                  
                  <div className="border-t border-border/30 pt-4">
                    <p className="font-medium text-foreground">{quote.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {quote.role} at {quote.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;