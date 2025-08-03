import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const ContactCompact = () => {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">Get in Touch</h3>
      <div className="space-y-3">
        <Button 
          variant="outline" 
          className="w-full justify-start gap-2" 
          asChild
        >
          <a href="mailto:jorge@jmurillo.me">
            <Mail className="w-4 h-4" />
            Email Me
          </a>
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full justify-start gap-2" 
          asChild
        >
          <a href="tel:+50670137123">
            <Phone className="w-4 h-4" />
            Call Me
          </a>
        </Button>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 gap-1" 
            asChild
          >
            <a href="https://www.linkedin.com/in/jmurilloux/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3 h-3" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 gap-1" 
            asChild
          >
            <a href="https://www.behance.net/murillojorge" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-3 h-3" />
              Behance
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactCompact;