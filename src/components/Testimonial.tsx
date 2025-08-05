import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role, company }) => {
  return (
    <div className="bg-card border rounded-xl p-6 animate-fade-in [animation-delay:450ms]">
      <Quote className="w-8 h-8 text-primary mb-4" />
      <blockquote className="text-foreground text-lg leading-relaxed mb-4">
        "{quote}"
      </blockquote>
      <div className="border-t pt-4">
        <p className="font-medium text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
    </div>
  );
};

export default Testimonial;