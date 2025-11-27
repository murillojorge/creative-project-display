import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Timelines vary based on project scope. A focused design sprint might take 2-4 weeks, while a comprehensive product design project typically spans 6-12 weeks. During our initial conversation, I\'ll provide a detailed timeline based on your specific needs.',
  },
  {
    question: 'Do you work with startups or enterprises?',
    answer: 'Both! I\'ve worked with early-stage startups building their first product as well as enterprise teams improving existing platforms. The approach adapts to your organization\'s size, budget, and goals.',
  },
  {
    question: 'What tools do you use?',
    answer: 'I primarily use Figma for design and prototyping, along with tools like FigJam for collaboration, Maze for usability testing, and various AI tools to enhance productivity. I\'m flexible and can adapt to your team\'s existing toolset.',
  },
  {
    question: 'How do you handle revisions?',
    answer: 'Feedback is built into my process. Project-based engagements include defined revision rounds at each milestone. I believe in iterative design, so we\'ll work together to refine solutions until they meet your goals.',
  },
  {
    question: 'Do you offer ongoing support after project completion?',
    answer: 'Yes! After a project wraps up, I offer retainer arrangements for ongoing design support. This ensures continuity and allows for continuous improvement based on user feedback and business evolution.',
  },
  {
    question: 'What makes your approach to AI design unique?',
    answer: 'I focus on human-centered AI design—ensuring AI features enhance rather than overwhelm the user experience. This includes thoughtful prompt design, transparent AI behaviors, and ethical considerations that build user trust.',
  },
];

const ServicesFAQ = () => {
  return (
    <section className="section py-20 bg-secondary/30">
      <div className="container-width">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Common questions about working together.
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-lg px-6 data-[state=open]:border-border"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-heading text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ServicesFAQ;
