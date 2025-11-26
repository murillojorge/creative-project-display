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
    <figure className="animate-fade-in [animation-delay:450ms]">
      <blockquote className="text-foreground text-lg leading-relaxed mb-6 italic">
        "{quote}"
      </blockquote>
      <figcaption className="space-y-1">
        <p className="font-medium text-foreground">{author}</p>
        <p className="text-sm text-muted-foreground">{role}, {company}</p>
      </figcaption>
    </figure>
  );
};

export default Testimonial;