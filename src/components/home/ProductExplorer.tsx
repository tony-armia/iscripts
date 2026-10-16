'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { FEATURED_PLATFORMS } from '@/data/platforms';
import styles from './ProductExplorer.module.css';

export default function ProductExplorer() {
  const [activeId, setActiveId] = useState<string>(FEATURED_PLATFORMS[0].id);

  const activePlatform =
    FEATURED_PLATFORMS.find((p) => p.id === activeId) || FEATURED_PLATFORMS[0];

  return (
    <section className={styles.section} id="platform-showcase">
      <Container size="default">
        <SectionHeading
          label="Software platforms"
          title="Software for the business you're building."
          description="Explore ready-made platforms for commerce, services, restaurants, and delivery."
        />

        {/* Interactive Plain-Inspired Product Workspace */}
        <div className={styles.explorerWorkspace}>
          {/* Top Horizontal/Segmented Platform Selector */}
          <div className={styles.selectorBar} role="tablist" aria-label="Select an iScripts platform">
            {FEATURED_PLATFORMS.map((platform) => {
              const isActive = platform.id === activeId;
              return (
                <button
                  key={platform.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`platform-stage-${platform.id}`}
                  className={`${styles.selectorTab} ${isActive ? styles.selectorTabActive : ''}`}
                  onClick={() => setActiveId(platform.id)}
                >
                  <span className={styles.tabName}>{platform.name}</span>
                  <span className={styles.tabCategory}>{platform.category}</span>
                  <span className={styles.tabUnderline} />
                </button>
              );
            })}
          </div>

          {/* Large Dominant Software Stage */}
          <div
            id={`platform-stage-${activePlatform.id}`}
            role="tabpanel"
            className={styles.stageWindow}
          >
            {/* Window Chrome Header */}
            <div className={styles.windowHeader}>
              <div className={styles.windowDots} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className={styles.windowUrl}>
                {activePlatform.id}.iscripts.com/admin/live-console
              </div>
              <div className={styles.windowTag}>
                <span>Verified Architecture</span>
              </div>
            </div>

            {/* Dominant Software Viewport (Hero UI Area) */}
            <div className={styles.windowCanvas}>
              <div className={styles.imageStage}>
                <Image
                  key={activePlatform.id}
                  src={activePlatform.image}
                  alt={activePlatform.altText}
                  width={1100}
                  height={620}
                  className={styles.platformScreenshot}
                  quality={92}
                />
              </div>

              {/* Integrated Control Panel Overlay */}
              <div className={styles.platformDrawer}>
                <div className={styles.drawerHeader}>
                  <div className={styles.drawerTitleRow}>
                    <h3 className={styles.drawerTitle}>{activePlatform.name}</h3>
                    <span className={styles.drawerBadge}>{activePlatform.category}</span>
                  </div>
                  <p className={styles.drawerTagline}>{activePlatform.tagline}</p>
                </div>

                <p className={styles.drawerDesc}>{activePlatform.fullDescription}</p>

                <div className={styles.specsList}>
                  {activePlatform.highlights.map((item) => (
                    <div key={item} className={styles.specItem}>
                      <svg className={styles.specIcon} width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.drawerActions}>
                  <Button
                    variant="primary"
                    size="md"
                    withArrow
                    href={activePlatform.productUrl}
                    isExternal
                  >
                    Explore {activePlatform.name.replace('iScripts ', '')}
                  </Button>
                  <Button
                    variant="secondary"
                    size="md"
                    href={activePlatform.demoUrl}
                    isExternal
                  >
                    Live Interactive Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discreet Bottom Directory Link */}
        <div className={styles.bottomLinkWrapper}>
          <span>Looking for online print logic, barter networks, or custom store builders?</span>
          <a
            href="https://www.iscripts.com/productlisting.php"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.allLink}
          >
            View all 25+ platforms in the full catalog &rarr;
          </a>
        </div>
      </Container>
    </section>
  );
}
