'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import styles from './WhyIScripts.module.css';

interface PillarItem {
  id: string;
  number: string;
  title: string;
  verticalLine1: string;
  verticalLine2: string;
  description: string;
  imageSrc: string;
  ctaText: string;
  ctaHref: string;
}

const PILLARS: PillarItem[] = [
  {
    id: '01',
    number: '01',
    title: 'Ready-made platform foundations',
    verticalLine1: 'Ready-made',
    verticalLine2: 'platform foundations',
    description: 'Start with proven operational architecture instead of building the basics from scratch.',
    imageSrc: '/images/why-iscripts/pillar-01.jpg',
    ctaText: 'Explore customization options',
    ctaHref: 'https://www.iscripts.com/customization.php',
  },
  {
    id: '02',
    number: '02',
    title: 'Customizable business functionality',
    verticalLine1: 'Customizable',
    verticalLine2: 'business functionality',
    description: 'Adapt business logic, workflows, multi-vendor splits, and database schemas to your exact operational model.',
    imageSrc: '/images/why-iscripts/pillar-02.jpg',
    ctaText: 'Explore customization options',
    ctaHref: 'https://www.iscripts.com/customization.php',
  },
  {
    id: '03',
    number: '03',
    title: 'White-label branding',
    verticalLine1: 'White-label',
    verticalLine2: 'branding',
    description: 'Deploy under your organization’s domain, visual branding, and native mobile developer accounts without vendor lock-in.',
    imageSrc: '/images/why-iscripts/pillar-03.jpg',
    ctaText: 'Explore customization options',
    ctaHref: 'https://www.iscripts.com/customization.php',
  },
  {
    id: '04',
    number: '04',
    title: 'Unencrypted source code',
    verticalLine1: 'Unencrypted',
    verticalLine2: 'source code',
    description: 'Receive full readable PHP and MySQL source code with zero proprietary runtimes for perpetual ownership.',
    imageSrc: '/images/why-iscripts/pillar-04.jpg',
    ctaText: 'Explore customization options',
    ctaHref: 'https://www.iscripts.com/customization.php',
  },
];

export default function WhyIScripts() {
  const [activeId, setActiveId] = useState<string>('01');

  return (
    <section className={styles.section} id="made-to-become-yours">
      <Container size="default">
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            <span className={styles.eyebrowText}>Why choose iScripts</span>
          </div>
          <h2 className={styles.title}>A foundation you can make your own.</h2>
          <p className={styles.description}>
            Why founders and organizations build on iScripts instead of commissioning custom software from scratch.
          </p>
        </div>

        {/* Interactive Expandable Cards Row */}
        <div
          className={styles.cardsRow}
          role="tablist"
          aria-label="Why choose iScripts architectural pillars"
        >
          {PILLARS.map((pillar) => {
            const isActive = pillar.id === activeId;
            return (
              <div
                key={pillar.id}
                role="tab"
                tabIndex={0}
                aria-selected={isActive}
                aria-label={pillar.title}
                className={`${styles.card} ${isActive ? styles.cardActive : styles.cardCollapsed}`}
                onClick={() => setActiveId(pillar.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveId(pillar.id);
                  }
                }}
              >
                {/* Background Image Container */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={pillar.imageSrc}
                    alt={pillar.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 60vw"
                    className={styles.bgImage}
                    priority={pillar.id === '01'}
                  />
                  <div
                    className={`${styles.gradientOverlay} ${
                      isActive ? styles.gradientOverlayActive : styles.gradientOverlayCollapsed
                    }`}
                  />
                </div>

                {/* Collapsed Card Presentation */}
                {!isActive && (
                  <div className={styles.collapsedContent}>
                    {/* Vertical rotated title track for desktop */}
                    <div className={styles.verticalTitleTrack} aria-hidden="true">
                      <div className={styles.verticalTitleWrapper}>
                        <span className={styles.verticalLine}>{pillar.verticalLine1}</span>
                        <span className={styles.verticalLine}>{pillar.verticalLine2}</span>
                      </div>
                    </div>

                    {/* Horizontal title bar for mobile */}
                    <div className={styles.mobileCollapsedBar}>
                      <span className={styles.mobileNumber}>{pillar.number}</span>
                      <span className={styles.mobileTitleText}>{pillar.title}</span>
                    </div>

                    {/* Bottom controls bar (desktop) */}
                    <div className={styles.collapsedBottomBar}>
                      <span className={styles.collapsedNumber}>{pillar.number}</span>
                      <div className={styles.plusButton} aria-hidden="true">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 2.5V13.5M2.5 8H13.5"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {/* Active / Expanded Card Presentation */}
                {isActive && (
                  <div className={styles.activeContent}>
                    <span className={styles.activeNumber}>{pillar.number}</span>
                    <h3 className={styles.activeTitle}>{pillar.title}</h3>
                    <p className={styles.activeDescription}>{pillar.description}</p>
                    <a
                      href={pillar.ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.ctaLink}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className={styles.ctaText}>{pillar.ctaText}</span>
                      <span className={styles.ctaArrow}>→</span>
                      <span className={styles.ctaLine} />
                    </a>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
