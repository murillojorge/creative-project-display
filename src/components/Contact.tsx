import React from 'react';
const Contact = () => {
  return <section id="contact" className="section">
      <div className="w-full max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-4">
            Contact
          </span>
          <h2 className="mb-4">Let's work together</h2>
          <p className="text-muted-foreground mb-8">
            I'm open to new opportunities and collaborations. Whether you have a project in mind or just want to chat about design, feel free to reach out.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Phone</h3>
              <a href="tel:+50670137123" className="hover:text-foreground transition-colors">(506) 7013-7123</a>
            </div>
            
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Email</h3>
              <a href="mailto:jorge@jmurillo.me" className="hover:text-foreground transition-colors">jorge@jmurillo.me</a>
            </div>
            
            <div className="p-6 rounded-lg border border-border bg-card hover:shadow-sm transition-shadow">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Social</h3>
              <div className="flex justify-center space-x-4 text-muted-foreground">
                <a href="https://www.linkedin.com/in/jmurilloux/" target="_blank" className="hover:text-foreground transition-colors">LinkedIn</a>
                <a href="https://www.behance.net/murillojorge" target="_blank" className="hover:text-foreground transition-colors">Behance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;