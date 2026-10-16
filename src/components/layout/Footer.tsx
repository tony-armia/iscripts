import React from 'react';
import Link from 'next/link';
import BrandLogo from '../ui/BrandLogo';
import Container from '../ui/Container';
import { COMPANY_CONTACT } from '@/data/homepage';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container size="default">
        {/* Main Footer Grid */}
        <div className={styles.grid}>
          {/* Brand & Mission Column */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink} aria-label="iScripts Home">
              <BrandLogo />
            </Link>
            <p className={styles.brandDesc}>
              Turnkey software platforms and enterprise customization services.
              Giving founders and established businesses a functional starting point
              with unencrypted code and complete architectural independence.
            </p>
            <div className={styles.parentNotice}>
              An <a href="https://www.armia.com" target="_blank" rel="noopener noreferrer" className={styles.parentLink}>Armia Systems Inc.</a> company.
            </div>
            <div className={styles.directPhoneBadge}>
              <span className={styles.phoneLabel}>Direct Line:</span>
              <a href="tel:13124236728" className={styles.phoneNumber}>
                {COMPANY_CONTACT.directPhone}
              </a>
            </div>
          </div>

          {/* Column 1: Core Platforms */}
          <div className={styles.navCol}>
            <div className={styles.colTitle}>Platforms</div>
            <ul className={styles.colList}>
              <li>
                <a href="https://www.iscripts.com/multicart/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  iScripts MultiCart
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/uberforx/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  iScripts UberforX
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/netmenus/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  iScripts NetMenus
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/locologic/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  iScripts Locologic
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/eswap/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  iScripts eSwap
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/printlogic/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  iScripts PrintLogic
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/gostores/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  iScripts GoStores
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/productlisting.php" target="_blank" rel="noopener noreferrer" className={styles.footerLinkHighlight}>
                  View all platforms &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Engineering & Services */}
          <div className={styles.navCol}>
            <div className={styles.colTitle}>Services</div>
            <ul className={styles.colList}>
              <li>
                <a href="https://www.iscripts.com/customization.php" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Software Customization
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/customdevelopment.php" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Custom Programming
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/dedicated-development-services.php" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Dedicated Engineering
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/installation.php" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Free Script Installation
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/graphic-design-service.php" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  UI/UX & Graphic Design
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/partnerprogram.php" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Partner Programs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Support */}
          <div className={styles.navCol}>
            <div className={styles.colTitle}>Company & Support</div>
            <ul className={styles.colList}>
              <li>
                <a href="https://www.iscripts.com/aboutus.php" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  About iScripts
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/listshowcases.php" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Client Showcase
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/support/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Help Desk & Tickets
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/faq.php" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Knowledgebase & FAQ
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/quickstartguides.php" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Quickstart Guides
                </a>
              </li>
              <li>
                <a href="https://www.iscripts.com/blog/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Engineering Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location */}
          <div className={styles.contactCol}>
            <div className={styles.colTitle}>Headquarters</div>
            <address className={styles.address}>
              <div>{COMPANY_CONTACT.addressLine1}</div>
              <div>{COMPANY_CONTACT.addressLine2}</div>
            </address>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Email:</span>
              <a href={`mailto:${COMPANY_CONTACT.salesEmail}`} className={styles.footerLink}>
                {COMPANY_CONTACT.salesEmail}
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Toll Free (US):</span>
              <a href="tel:18005695538" className={styles.footerLink}>
                {COMPANY_CONTACT.tollFreePhone}
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>Operating Hours:</span>
              <span className={styles.hoursText}>{COMPANY_CONTACT.hours}</span>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            &copy; 2026 iScripts.com. All rights reserved. Software platforms are trademarks of Armia Systems, Inc.
          </div>

          <div className={styles.legalLinks}>
            <a href="https://www.iscripts.com/terms.php" target="_blank" rel="noopener noreferrer" className={styles.legalLink}>
              Terms of Service
            </a>
            <span className={styles.dotSeparator}>•</span>
            <a href="https://www.iscripts.com/legalnotice.php" target="_blank" rel="noopener noreferrer" className={styles.legalLink}>
              Legal Notice
            </a>
            <span className={styles.dotSeparator}>•</span>
            <a href="https://www.iscripts.com/sitemap.php" target="_blank" rel="noopener noreferrer" className={styles.legalLink}>
              Sitemap
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
