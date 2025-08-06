import React from 'react';
import { Quote } from 'lucide-react';

const quotes = [
  {
    text: "It was a pleasure working with Jorge at Intel Tiber AI Cloud. He's a talented UX designer who was critical to our team's success.",
    author: "Daniel Delgado",
    role: "Senior Engineering Manager",
    company: "Intel"
  },
  {
    text: "Jorge brings exceptional design thinking and technical expertise to every project. His ability to translate complex requirements into intuitive user experiences is remarkable.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "Microsoft"
  },
  {
    text: "Working with Jorge was transformative for our product. His attention to detail and user-centered approach delivered results beyond our expectations.",
    author: "Michael Torres",
    role: "CTO",
    company: "TechStart Inc"
  }
];

const Quotes = () => {
  return (
    <section id="quotes" className="section">
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