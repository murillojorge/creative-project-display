
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="min-h-screen bg-gradient-mesh">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <About />
      <Contact />
      <div className="py-8 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Portfolio. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Index;
