'use client';

import React, { useState } from 'react';
import Header from '../layout/Header';
import HeroSection from './HeroSection';
import CredibilityStrip from './CredibilityStrip';
import FeaturedPlatforms from './FeaturedPlatforms';
import WhyIScripts from './WhyIScripts';
import CustomDevelopment from './CustomDevelopment';
import ExecutionRoadmap from './ExecutionRoadmap';
import TechStackSection from './TechStackSection';
import CustomerStories from './CustomerStories';
import ExpertConsultation from './ExpertConsultation';
import TrustAccreditations from './TrustAccreditations';
import Footer from '../layout/Footer';
import ContactModal from './ContactModal';

export default function HomeClientWrapper() {
  const [contactOpen, setContactOpen] = useState(false);

  const handleOpenContact = () => setContactOpen(true);
  const handleCloseContact = () => setContactOpen(false);

  return (
    <>
      <Header onOpenContact={handleOpenContact} />
      <main id="main-content">
        {/* Section 01: Hero Slider Showcase (MultiCart, NetMenus, UberforX, Locologic) */}
        <HeroSection onOpenContact={handleOpenContact} />

        {/* Section 02: 15-Year Track Record & Continuous Credibility Marquee */}
        <CredibilityStrip />

        {/* Section 03: Turnkey Software Platforms Catalog (9 Flagship Products with Category Filtering) */}
        <FeaturedPlatforms />

        {/* Section 04: What You Get — Core Architecture & Source Code Ownership Pillars */}
        <WhyIScripts />

        {/* Section 05: Custom Engineering & Chicago Startup Advisory (Jon S.) */}
        <CustomDevelopment onOpenContact={handleOpenContact} />

        {/* Section 06: Empowering Your Startup — 6-Step Startup Execution Roadmap */}
        <ExecutionRoadmap />

        {/* Section 07: Open Enterprise Technology Stacks */}
        <TechStackSection />

        {/* Section 08: Verified Client Stories & Outcomes (What iScripts Customers Say) */}
        <CustomerStories />

        {/* Section 09: Connect With Our Experts & Development Center Consultation Form */}
        <ExpertConsultation onOpenContact={handleOpenContact} />

        {/* Section 10: Industry Accreditations & Trust Seals (NASSCOM, AWS, ITA, Clutch, BBB) */}
        <TrustAccreditations />
      </main>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={handleCloseContact} />
    </>
  );
}
