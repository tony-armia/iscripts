'use client';

import React, { useState } from 'react';
import Header from '../layout/Header';
import HeroSection from './HeroSection';
import PlatformExplorer from './PlatformExplorer';
import WhyIScripts from './WhyIScripts';
import CustomDevelopment from './CustomDevelopment';
import CustomerStories from './CustomerStories';
import FAQSection from './FAQSection';
import FinalCTA from './FinalCTA';
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
        {/* Section 02: New Hero - A Major Visual Statement */}
        <HeroSection onOpenContact={handleOpenContact} />

        {/* Section 03: Explore What You Can Build - Interactive Business Model Directory */}
        <PlatformExplorer />

        {/* Section 05: Made to Become Yours - Architecture & Feature Storytelling */}
        <WhyIScripts />

        {/* Section 06: Custom Development - Dark Editorial Section */}
        <CustomDevelopment onOpenContact={handleOpenContact} />

        {/* Section 07: Customer Stories & Proof */}
        <CustomerStories />

        {/* Section 08: Common Questions & Closing Conversion */}
        <FAQSection />
        <FinalCTA onOpenContact={handleOpenContact} />
      </main>
      <Footer />
      <ContactModal isOpen={contactOpen} onClose={handleCloseContact} />
    </>
  );
}
