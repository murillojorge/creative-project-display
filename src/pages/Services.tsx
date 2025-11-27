import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/services/ServicesHero';
import ServicesList from '@/components/services/ServicesList';
import ProcessSection from '@/components/services/ProcessSection';
import EngagementModels from '@/components/services/EngagementModels';
import ServicesFAQ from '@/components/services/ServicesFAQ';
import ServicesCTA from '@/components/services/ServicesCTA';

const Services = () => {
  return (
    <div className="min-h-screen bg-pattern-grid">
      <Navbar />
      <main id="main-content">
        <ServicesHero />
        <ServicesList />
        <ProcessSection />
        <EngagementModels />
        <ServicesFAQ />
        <ServicesCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
