'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import BrandLogo from '../ui/BrandLogo';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { PLATFORM_CATEGORIES, SOLUTIONS_ITEMS } from '@/data/navigation';
import styles from './Header.module.css';

interface HeaderProps {
  onOpenContact?: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [activeMenu, setActiveMenu] = useState<'platforms' | 'solutions' | 'services' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Close menus on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard accessibility: close on Escape
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActiveMenu(null);
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

  const toggleMenu = (menu: 'platforms' | 'solutions' | 'services') => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

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

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          <ul className={styles.navList}>
            {/* Platforms Dropdown */}
            <li className={styles.navItem}>
              <button
                type="button"
                className={`${styles.navTrigger} ${activeMenu === 'platforms' ? styles.active : ''}`}
                onClick={() => toggleMenu('platforms')}
                aria-expanded={activeMenu === 'platforms'}
                aria-haspopup="true"
              >
                <span>Platforms</span>
                <svg
                  className={`${styles.chevron} ${activeMenu === 'platforms' ? styles.chevronOpen : ''}`}
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {activeMenu === 'platforms' && (
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
                                onClick={() => setActiveMenu(null)}
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
                      Need guidance choosing the right architectural starting point?
                    </div>
                    <a
                      href="https://www.iscripts.com/productlisting.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.viewAllLink}
                      onClick={() => setActiveMenu(null)}
                    >
                      View all platforms catalog &rarr;
                    </a>
                  </div>
                </div>
              )}
            </li>

            {/* Solutions Dropdown */}
            <li className={styles.navItem}>
              <button
                type="button"
                className={`${styles.navTrigger} ${activeMenu === 'solutions' ? styles.active : ''}`}
                onClick={() => toggleMenu('solutions')}
                aria-expanded={activeMenu === 'solutions'}
              >
                <span>Solutions</span>
                <svg
                  className={`${styles.chevron} ${activeMenu === 'solutions' ? styles.chevronOpen : ''}`}
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {activeMenu === 'solutions' && (
                <div className={styles.simpleDropdown} role="region" aria-label="Solutions">
                  <ul className={styles.simpleList}>
                    {SOLUTIONS_ITEMS.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className={styles.simpleItemLink}
                          onClick={() => setActiveMenu(null)}
                        >
                          <div className={styles.simpleItemTitle}>{item.label}</div>
                          {item.description && (
                            <div className={styles.simpleItemDesc}>{item.description}</div>
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>

            {/* Custom Development Link */}
            <li className={styles.navItem}>
              <a href="#custom-development" className={styles.navLink}>
                Custom Development
              </a>
            </li>

            {/* Showcase Link */}
            <li className={styles.navItem}>
              <a href="#customer-stories" className={styles.navLink}>
                Showcase
              </a>
            </li>

            {/* Resources Link */}
            <li className={styles.navItem}>
              <a href="#faqs" className={styles.navLink}>
                Resources
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Actions */}
        <div className={styles.actions}>
          <a
            href="tel:13124236728"
            className={styles.phoneLink}
            title="Call iScripts Solutions Team"
          >
            <span className={styles.phoneLabel}>Direct:</span>
            <span className={styles.phoneNumber}>1-(312)-423-6728</span>
          </a>

          <button
            type="button"
            className={styles.searchTrigger}
            aria-label="Search platforms and solutions"
            onClick={() => {
              const el = document.getElementById('platform-showcase');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>

          <Button
            variant="primary"
            size="sm"
            withArrow
            onClick={() => {
              if (onOpenContact) {
                onOpenContact();
              } else {
                const target = document.getElementById('contact-section');
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
                <span>Platforms</span>
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
                      View all platforms catalog &rarr;
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion 2: Solutions */}
            <div className={styles.mobileSection}>
              <button
                type="button"
                className={styles.mobileAccordionHeader}
                onClick={() => toggleMobileAccordion('solutions')}
              >
                <span>Solutions</span>
                <span className={styles.accordionIcon}>
                  {mobileAccordion === 'solutions' ? '−' : '+'}
                </span>
              </button>

              {mobileAccordion === 'solutions' && (
                <div className={styles.mobileAccordionBody}>
                  {SOLUTIONS_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={styles.mobileItemLink}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className={styles.mobileItemName}>{item.label}</span>
                      <span className={styles.mobileItemDesc}>{item.description}</span>
                    </a>
                  ))}
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
                Custom Development
              </a>
              <a
                href="#customer-stories"
                className={styles.mobileDirectLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                Showcase & Case Studies
              </a>
              <a
                href="#faqs"
                className={styles.mobileDirectLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                Common Questions & FAQs
              </a>
            </div>

            {/* Mobile Footer CTAs */}
            <div className={styles.mobileFooterActions}>
              <a href="tel:13124236728" className={styles.mobilePhone}>
                <span>Call sales directly:</span>
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
                    const target = document.getElementById('contact-section');
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
