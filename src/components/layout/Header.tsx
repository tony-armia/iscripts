'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import BrandLogo from '../ui/BrandLogo';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { PLATFORM_CATEGORIES } from '@/data/navigation';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenContact?: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setPlatformsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility: close on Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setPlatformsOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordion((prev) => (prev === key ? null : key));
  };

  return (
    <header className={styles.header} ref={headerRef}>
      <Container size="default" className={styles.container}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoLink} aria-label="iScripts Home">
          <BrandLogo />
        </Link>

        {/* Clean, Decongested Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <ul className={styles.navList}>
            {/* Platforms Dropdown */}
            <li className={styles.navItem}>
              <button
                type="button"
                className={`${styles.navTrigger} ${platformsOpen ? styles.active : ''}`}
                onClick={() => setPlatformsOpen(!platformsOpen)}
                aria-expanded={platformsOpen}
                aria-haspopup="true"
              >
                <span>Platforms</span>
                <svg
                  className={`${styles.chevron} ${platformsOpen ? styles.chevronOpen : ''}`}
                  width="11"
                  height="11"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {platformsOpen && (
                <div className={styles.megaMenu} role="region" aria-label="Platforms directory">
                  <div className={styles.megaGrid}>
                    {PLATFORM_CATEGORIES.map((category) => (
                      <div key={category.title} className={styles.megaCategory}>
                        <div className={styles.categoryTitle}>{category.title}</div>
                        <ul className={styles.categoryList}>
                          {category.items.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.megaItemLink}
                                onClick={() => setPlatformsOpen(false)}
                              >
                                <div className={styles.megaItemContent}>
                                  <div className={styles.megaItemHeader}>
                                    <span className={styles.megaItemTitle}>{item.label}</span>
                                    <svg className={styles.externalIcon} width="11" height="11" viewBox="0 0 16 16" fill="none">
                                      <path d="M5 11L11 5M11 5H6M11 5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  </div>
                                  {item.description && (
                                    <span className={styles.megaItemDesc}>{item.description}</span>
                                  )}
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className={styles.megaFooter}>
                    <div className={styles.megaFooterText}>
                      Over 25+ production-tested software platforms with unencrypted source code.
                    </div>
                    <a
                      href="https://www.iscripts.com/productlisting.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewAllLink}
                      onClick={() => setPlatformsOpen(false)}
                    >
                      View All 25+ Platforms &rarr;
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* Customization Link */}
            <li className={styles.navItem}>
              <a href="#custom-development" className={styles.navLink}>
                Customization
              </a>
            </li>

            {/* Process Link */}
            <li className={styles.navItem}>
              <a href="#execution-roadmap" className={styles.navLink}>
                Process
              </a>
            </li>

            {/* Technologies Link */}
            <li className={styles.navItem}>
              <a href="#technologies" className={styles.navLink}>
                Tech Stack
              </a>
            </li>

            {/* Showcase Link */}
            <li className={styles.navItem}>
              <a href="#customer-stories" className={styles.navLink}>
                Showcase
              </a>
            </li>
          </ul>
        </nav>

        {/* Streamlined Right Actions */}
        <div className={styles.actions}>
          <a
            href="tel:13124236728"
            className={styles.phoneCallout}
            title="Call iScripts Chicago Sales Team"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className={styles.phoneIcon}
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>1-(312)-423-6728</span>
          </a>

          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                const target = document.getElementById('expert-consultation');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }}
          >
            Talk to an Expert
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.lineTopOpen : ''}`} />
            <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.lineBottomOpen : ''}`} />
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer} role="dialog" aria-modal="true">
          <div className={styles.mobileDrawerContent}>
            {/* Accordion 1: Platforms */}
            <div className={styles.mobileSection}>
              <button
                type="button"
                className={styles.mobileAccordionHeader}
                onClick={() => toggleMobileAccordion('platforms')}
              >
                <span>Turnkey Platforms</span>
                <span className={styles.accordionIcon}>
                  {mobileAccordion === 'platforms' ? '−' : '+'}
                </span>
              </button>

              {mobileAccordion === 'platforms' && (
                <div className={styles.mobileAccordionBody}>
                  {PLATFORM_CATEGORIES.map((cat) => (
                    <div key={cat.title} className={styles.mobileSubGroup}>
                      <div className={styles.mobileSubTitle}>{cat.title}</div>
                      {cat.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.mobileItemLink}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className={styles.mobileItemName}>{item.label}</span>
                          <span className={styles.mobileItemDesc}>{item.description}</span>
                        </a>
                      ))}
                    </div>
                  ))}
                  <div className={styles.mobileCatalogLinkWrapper}>
                    <a
                      href="https://www.iscripts.com/productlisting.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.mobileCatalogLink}
                    >
                      View All 25+ Platforms &rarr;
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <div className={styles.mobileDirectLinks}>
              <a
                href="#custom-development"
                className={styles.mobileDirectLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                Custom Engineering
              </a>
              <a
                href="#execution-roadmap"
                className={styles.mobileDirectLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                Startup Roadmap
              </a>
              <a
                href="#technologies"
                className={styles.mobileDirectLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                Open Tech Stack
              </a>
              <a
                href="#customer-stories"
                className={styles.mobileDirectLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                Client Case Studies
              </a>
            </div>

            {/* Mobile Footer CTAs */}
            <div className={styles.mobileFooterActions}>
              <a href="tel:13124236728" className={styles.mobilePhone}>
                <span>Chicago Solutions Desk:</span>
                <strong>1-(312)-423-6728</strong>
              </a>
              <Button
                variant="primary"
                size="md"
                withArrow
                className={styles.mobileFullBtn}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenContact) {
                    onOpenContact();
                  } else {
                    const target = document.getElementById('expert-consultation');
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
