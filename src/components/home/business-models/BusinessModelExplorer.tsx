'use client';

import React, { useState, useEffect } from 'react';
import Container from '../../ui/Container';
import BusinessModelNavigation from './BusinessModelNavigation';
import BusinessModelPreview from './BusinessModelPreview';
import { BUSINESS_MODEL_ITEMS } from '@/data/businessModels';
import styles from './BusinessModelExplorer.module.css';

export default function BusinessModelExplorer() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const currentItem = BUSINESS_MODEL_ITEMS[selectedIndex] || BUSINESS_MODEL_ITEMS[0];

  return (
    <section
      className={styles.section}
      id="business-models"
      aria-label="Business Model Directory & Platform Explorer"
    >
      <Container size="default">
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.labelRow}>
            <span className={styles.labelSquare} aria-hidden="true" />
            <span>Model directory</span>
          </div>
          <h2 className={styles.sectionTitle}>Find the right starting point.</h2>
          <p className={styles.sectionDesc}>
            Navigate directly by the business model or transaction flow you intend to build.
          </p>
        </div>

        {/* Mobile Horizontal Product Selector Bar with Active Red Underline (<= 768px) */}
        <div
          className={styles.mobileTabsWrapper}
          role="tablist"
          aria-label="Select business model"
        >
          {BUSINESS_MODEL_ITEMS.map((item, index) => {
            const isActive = index === selectedIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedIndex(index)}
                className={`${styles.mobileTab} ${
                  isActive ? styles.mobileTabActive : ''
                }`}
              >
                <span>{item.mobileTabLabel}</span>
                {isActive && (
                  <span className={styles.mobileTabUnderline} aria-hidden="true" />
                )}
              </button>
            );
          })}
        </div>

        {/* Main Two-Column Interactive Discovery Grid */}
        <div className={styles.interactiveGrid}>
          {/* Left Column: 6 Business Model Choices (Desktop/Tablet) */}
          <div className={styles.leftColumn}>
            <BusinessModelNavigation
              items={BUSINESS_MODEL_ITEMS}
              selectedIndex={selectedIndex}
              onSelect={(index) => setSelectedIndex(index)}
            />
          </div>

          {/* Right Column: Dynamic Authentic Product Showcase */}
          <div className={styles.rightColumn}>
            <BusinessModelPreview
              item={currentItem}
              prefersReducedMotion={prefersReducedMotion}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
