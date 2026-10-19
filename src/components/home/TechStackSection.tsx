'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import styles from './TechStackSection.module.css';

interface TechItem {
  id: string;
  name: string;
  category: 'Backend' | 'Mobile' | 'Frontend' | 'Cloud';
  categoryLabel: string;
  description: string;
  brandIcon: React.ReactNode;
  watermarkIcon: React.ReactNode;
}

const TECHNOLOGIES: TechItem[] = [
  {
    id: 'php',
    name: 'PHP 8.x & MySQL',
    category: 'Backend',
    categoryLabel: 'Open standards',
    description: 'High-speed relational data architectures, unencrypted MVC patterns, and zero proprietary runtime locks.',
    brandIcon: (
      <div className={styles.iconBoxPhp} aria-label="PHP Logo">
        <svg width="34" height="20" viewBox="0 0 100 50" fill="currentColor">
          <ellipse cx="50" cy="25" rx="46" ry="23" fill="#EEF2F6" stroke="#4F5B93" strokeWidth="3" />
          <text x="50" y="32" fontSize="26" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="#4F5B93" fontStyle="italic">php</text>
        </svg>
      </div>
    ),
    watermarkIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: 'react-native',
    name: 'React Native',
    category: 'Mobile',
    categoryLabel: 'Mobile',
    description: 'Cross-platform native mobile applications for iOS & Android with unified state management and real-time sockets.',
    brandIcon: (
      <div className={styles.iconBoxCyan} aria-label="React Native Logo">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#00D8FF" strokeWidth="1.6">
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.8" fill="#00D8FF" />
        </svg>
      </div>
    ),
    watermarkIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
      </svg>
    ),
  },
  {
    id: 'nodejs',
    name: 'Node.js & Express',
    category: 'Backend',
    categoryLabel: 'Backend',
    description: 'Event-driven microservices for high-concurrency order dispatch, real-time geolocation tracking, and webhook handlers.',
    brandIcon: (
      <div className={styles.iconBoxGreen} aria-label="Node.js Logo">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <polygon points="12 2 21 7 21 17 12 22 3 17 3 7" stroke="#16A34A" strokeWidth="2" fill="#F0FDF4" />
          <text x="12" y="16" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="#16A34A">JS</text>
        </svg>
      </div>
    ),
    watermarkIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12" />
        <circle cx="7" cy="12" r="2" />
        <circle cx="17" cy="12" r="2" />
      </svg>
    ),
  },
  {
    id: 'ios-swift',
    name: 'Native iOS (Swift)',
    category: 'Mobile',
    categoryLabel: 'Mobile',
    description: 'Pure native iOS builds for driver and merchant companion apps utilizing Apple CoreLocation, PushKit, and CallKit.',
    brandIcon: (
      <div className={styles.iconBoxOrange} aria-label="Swift Logo">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="#FFF7ED" />
          <path d="M19 6C17 9 14 11 11 11C13 9 14 7 13 4C10 6 7 9 6 13C5 17 8 20 12 20C17 20 20 16 19 12C18 10 18.5 8 19 6Z" fill="#F97316" />
        </svg>
      </div>
    ),
    watermarkIcon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20.94c1.5 0 2.75-1.06 4-1.06 1.22 0 2.25 1.06 3.75 1.06 1.5 0 2.75-1.06 4-1.06" />
        <path d="M18.5 7.5c-.8.8-1.5 1.5-2.5 1.5s-1.8-.8-2.8-.8c-1.2 0-2.2 1-3.2 2.2-1.5 1.8-1.5 5.2.5 7.5 1 1.2 2 2.5 3.5 2.5 1.2 0 1.8-.8 3-.8 1.2 0 1.8.8 3 .8 1.5 0 2.5-1.2 3.5-2.5 1-1.2 1.5-2.8 1.5-3 0-.2-2.5-1-2.5-3.8 0-2.2 1.8-3.5 2-3.8-1-1.5-2.8-1.8-3.5-1.8-1.5 0-2.5.8-3.5.8z" />
        <path d="M16.5 4.5c.5-.8.8-1.8.8-2.5-1 .1-2 .6-2.5 1.2-.5.6-.8 1.5-.8 2.2 1.1.2 2-.3 2.5-.9z" />
      </svg>
    ),
  },
  {
    id: 'android-kotlin',
    name: 'Native Android (Kotlin)',
    category: 'Mobile',
    categoryLabel: 'Mobile',
    description: 'Google Play verified Android client and delivery companion applications with background GPS dispatching.',
    brandIcon: (
      <div className={styles.iconBoxKotlin} aria-label="Kotlin Logo">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <defs>
            <linearGradient id="kotlinGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7F52FF" />
              <stop offset="50%" stopColor="#C711E1" />
              <stop offset="100%" stopColor="#E4485D" />
            </linearGradient>
          </defs>
          <rect width="24" height="24" rx="5" fill="#FAF5FF" />
          <polygon points="4,4 12,4 4,12" fill="url(#kotlinGrad)" />
          <polygon points="12,4 20,4 4,20 4,12" fill="url(#kotlinGrad)" />
          <polygon points="12,12 20,20 4,20" fill="url(#kotlinGrad)" />
        </svg>
      </div>
    ),
    watermarkIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="7" y1="3" x2="9" y2="7" />
        <line x1="17" y1="3" x2="15" y2="7" />
        <path d="M5 11a7 7 0 0 1 14 0v3H5v-3z" />
        <circle cx="9" cy="11" r="1" fill="currentColor" />
        <circle cx="15" cy="11" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: 'aws',
    name: 'AWS Cloud Infrastructure',
    category: 'Cloud',
    categoryLabel: 'Cloud',
    description: 'Enterprise autoscaling with AWS EC2, S3 asset buckets, RDS Aurora databases, and CloudFront global edge caching.',
    brandIcon: (
      <div className={styles.iconBoxAws} aria-label="AWS Logo">
        <svg width="34" height="22" viewBox="0 0 48 30" fill="none">
          <text x="24" y="16" fontSize="16" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" fill="#232F3E">aws</text>
          <path d="M10 22 C 20 27, 28 27, 38 21" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <polygon points="38,20 35,22 39,24" fill="#FF9900" />
        </svg>
      </div>
    ),
    watermarkIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    id: 'frontend',
    name: 'React & Angular',
    category: 'Frontend',
    categoryLabel: 'Frontend',
    description: 'Dynamic administrative dashboards, real-time merchant control panels, and fluid single-page storefront experiences.',
    brandIcon: (
      <div className={styles.iconBoxDual} aria-label="React and Angular Logos">
        {/* React cyan atom */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D8FF" strokeWidth="1.6">
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="#00D8FF" />
        </svg>
        {/* Angular red shield */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <polygon points="12 2 21 5 19 18 12 22 5 18 3 5" fill="#DD0031" />
          <polygon points="12 4 19 17 16 17 14.5 13.5 9.5 13.5 8 17 5 17" fill="#FFFFFF" />
          <polygon points="12 8 10.5 12 13.5 12" fill="#DD0031" />
        </svg>
      </div>
    ),
    watermarkIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    id: 'dotnet-python',
    name: '.NET Core & Python',
    category: 'Backend',
    categoryLabel: 'Backend',
    description: 'High-performance specialized microservices for custom algorithmic calculations, escrow splits, and automated reporting.',
    brandIcon: (
      <div className={styles.iconBoxDual} aria-label=".NET and Python Logos">
        {/* .NET purple tile */}
        <div className={styles.dotnetTile}>.NET</div>
        {/* Python yellow/blue icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M11.5 2C7.5 2 7 3.5 7 5V7H12V8.5H5C3.5 8.5 2 9.5 2 12.5C2 15.5 3.5 16 5 16H6.5V13.5C6.5 11.5 8 10 10 10H14.5C16 10 17 9 17 7.5V5C17 3.5 15.5 2 11.5 2Z" fill="#387EB8" />
          <circle cx="9" cy="4.5" r="1" fill="#FFFFFF" />
          <path d="M12.5 22C16.5 22 17 20.5 17 19V17H12V15.5H19C20.5 15.5 22 14.5 22 11.5C22 8.5 20.5 8 19 8H17.5V10.5C17.5 12.5 16 14 14 14H9.5C8 14 7 15 7 16.5V19C7 20.5 8.5 22 12.5 22Z" fill="#FFE052" />
          <circle cx="15" cy="19.5" r="1" fill="#FFFFFF" />
        </svg>
      </div>
    ),
    watermarkIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <circle cx="19" cy="19" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="12" cy="4" r="2" />
        <line x1="12" y1="6" x2="12" y2="9" />
        <line x1="7" y1="18" x2="10" y2="14" />
        <line x1="17" y1="18" x2="14" y2="14" />
      </svg>
    ),
  },
];

const CATEGORIES = ['All', 'Backend', 'Mobile', 'Frontend', 'Cloud'] as const;

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredTech = selectedCategory === 'All'
    ? TECHNOLOGIES
    : TECHNOLOGIES.filter((t) => t.category === selectedCategory);

  return (
    <section className={styles.section} id="technologies" aria-label="Enterprise Technologies & Architecture">
      <Container size="default">
        {/* Section Header matching user reference image exactly */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowDash} aria-hidden="true" />
            <span className={styles.eyebrowText}>TECHNOLOGY STACK</span>
          </div>

          <h2 className={styles.title}>No proprietary black-box frameworks.</h2>

          <p className={styles.description}>
            Every iScripts platform is constructed using widely supported, industry-standard stacks that any competent developer can inspect, extend, and deploy.
          </p>

          {/* Category Filter Pills */}
          <div className={styles.filterPills} role="tablist" aria-label="Filter technology stack">
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.filterButton} ${isActive ? styles.filterActive : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* 4-Column x 2-Row Technology Cards Grid */}
        <div className={styles.techGrid}>
          {filteredTech.map((item) => (
            <div key={item.id} className={styles.techCard}>
              <div className={styles.cardTop}>
                <div className={styles.brandIconWrapper}>
                  {item.brandIcon}
                </div>
                <span className={styles.tagBadge}>
                  {item.categoryLabel}
                </span>
              </div>

              <h3 className={styles.techName}>{item.name}</h3>
              <p className={styles.techDesc}>{item.description}</p>

              {/* Faint subtle watermark line icon in bottom-right */}
              <div className={styles.watermarkIcon} aria-hidden="true">
                {item.watermarkIcon}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
