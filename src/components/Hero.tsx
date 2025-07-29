import React from 'react';
const Hero = () => {
  return <section className="min-h-screen flex items-center pt-20 pb-16 md:pt-24 md:pb-24">
      <div className="container-width">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-2 animate-slide-down">
            <h1 className="mt-4 font-medium leading-tight tracking-tighter px-[16px]">Designer / Technologist <br/>/ Doer</h1>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:200ms]">Helping build the Internet since 1998.</p>
          
          <div className="pt-4 animate-fade-in [animation-delay:400ms]">
            <a href="#projects" className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90">
              Check out my projects
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;