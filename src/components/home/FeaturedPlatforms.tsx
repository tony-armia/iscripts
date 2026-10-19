'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { FEATURED_PLATFORMS, Platform } from '@/data/platforms';
import styles from './FeaturedPlatforms.module.css';

type CategoryFilter = 'All' | 'Marketplaces' | 'On-Demand' | 'Ecommerce' | 'Logistics' | 'Social';

const CATEGORIES: { label: string; value: CategoryFilter }[] = [
  { label: 'All Platforms (9)', value: 'All' },
  { label: 'Marketplaces (3)', value: 'Marketplaces' },
  { label: 'On-Demand (2)', value: 'On-Demand' },
  { label: 'Ecommerce & Stores (2)', value: 'Ecommerce' },
  { label: 'Logistics (1)', value: 'Logistics' },
  { label: 'Social Networks (1)', value: 'Social' },
];

export default function FeaturedPlatforms() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredPlatforms = activeCategory === 'All'
    ? FEATURED_PLATFORMS
    : FEATURED_PLATFORMS.filter((p) => p.category === activeCategory);

  // Top featured hero platform (default MultiCart or first match)
  const heroPlatform = filteredPlatforms[0] || FEATURED_PLATFORMS[0];
  const gridPlatforms = filteredPlatforms.slice(1);

  return (
    <section id="featured-platforms" className={styles.section} aria-label="Turnkey Software Platforms Directory">
      <Container size="default">
        {/* Section Header matching real iscripts.com */}
        <SectionHeading
          label="Ready-To-Go Technology Platforms"
          title="Turnkey platforms to start and scale your online business."
          description="Deploy battle-tested software foundations with custom UI, admin dashboards, and full unencrypted source code ownership."
          actions={
            <Button
              variant="outline"
              size="md"
              withArrow
              href="https://www.iscripts.com/productlisting.php"
              isExternal
            >
              View All 25+ Products
            </Button>
          }
        />

        {/* Category Filter Pills */}
        <div className={styles.filterBar} role="tablist" aria-label="Filter software platforms by category">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`${styles.filterPill} ${isActive ? styles.filterPillActive : ''}`}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Hero Showcase Card: Leading Platform */}
        {heroPlatform && (
          <div className={styles.heroCard}>
            <div className={styles.heroCardContent}>
              <div className={styles.metaRow}>
                <span className={styles.categoryBadge}>{heroPlatform.categoryLabel}</span>
                <span className={styles.techTag}>Unencrypted PHP &bull; MySQL</span>
              </div>

              <h3 className={styles.cardTitle}>{heroPlatform.name}</h3>
              <p className={styles.cardTagline}>{heroPlatform.tagline}</p>
              <p className={styles.cardDesc}>{heroPlatform.fullDescription}</p>

              <div className={styles.highlightsGrid}>
                {heroPlatform.highlights.map((item) => (
                  <div key={item} className={styles.highlightItem}>
                    <svg className={styles.checkIcon} width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className={styles.cardActions}>
                <Button
                  variant="primary"
                  size="md"
                  withArrow
                  href={heroPlatform.productUrl}
                  isExternal
                >
                  Explore {heroPlatform.name}
                </Button>
                <Button
                  variant="ghost"
                  size="md"
                  href={heroPlatform.demoUrl}
                  isExternal
                >
                  Launch Live Demo &rarr;
                </Button>
              </div>
            </div>

            <div className={styles.heroCardVisual}>
              <div className={styles.visualFrame}>
                <Image
                  src={heroPlatform.image}
                  alt={heroPlatform.altText}
                  width={560}
                  height={380}
                  className={styles.deviceMockup}
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* Catalog Grid for Remaining Filtered Platforms */}
        {gridPlatforms.length > 0 && (
          <div className={styles.catalogGrid}>
            {gridPlatforms.map((platform) => (
              <div key={platform.id} className={styles.catalogCard}>
                <div className={styles.catalogCardHeader}>
                  <div className={styles.cardMeta}>
                    <span className={styles.catalogBadge}>{platform.categoryLabel}</span>
                    <span className={styles.catalogTech}>Full Source Code</span>
                  </div>
                  <h4 className={styles.catalogTitle}>{platform.name}</h4>
                  <p className={styles.catalogTagline}>{platform.tagline}</p>
                </div>

                <p className={styles.catalogShortDesc}>{platform.shortDescription}</p>

                <div className={styles.catalogHighlights}>
                  {platform.highlights.slice(0, 2).map((hl) => (
                    <div key={hl} className={styles.catalogHighlightItem}>
                      <span className={styles.bulletDot} aria-hidden="true" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.catalogActions}>
                  <a
                    href={platform.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.detailsLink}
                  >
                    View Details
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                  <a
                    href={platform.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.demoLink}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom Banner Callout */}
        <div className={styles.bottomBanner}>
          <div className={styles.bannerText}>
            <h4>Need a tailored turnkey architecture or custom integration?</h4>
            <p>Every platform includes 100% readable source code, free installation, and companion mobile apps.</p>
          </div>
          <div className={styles.bannerActions}>
            <Button
              variant="outline"
              size="md"
              withArrow
              href="https://www.iscripts.com/productlisting.php"
              isExternal
            >
              Browse Complete Directory
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
