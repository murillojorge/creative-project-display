
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectGrid from '@/components/ProjectGrid';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-mesh">
      <Navbar />
      <Hero />
      <ProjectGrid />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
