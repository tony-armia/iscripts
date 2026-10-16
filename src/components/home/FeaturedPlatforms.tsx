import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { FEATURED_PLATFORMS } from '@/data/platforms';
import styles from './FeaturedPlatforms.module.css';

export default function FeaturedPlatforms() {
  const [multicart, uberforx, netmenus, locologic] = FEATURED_PLATFORMS;

  return (
    <section id="featured-platforms" className={styles.section}>
      <Container size="default">
        <SectionHeading
          label="Ready-made software platforms"
          title="A starting point for your next business."
          description="Explore customizable platforms built for different business models, from multi-vendor commerce to on-demand services."
          actions={
            <Button
              variant="outline"
              size="md"
              withArrow
              href="https://www.iscripts.com/productlisting.php"
              isExternal
            >
              View All 25+ Platforms
            </Button>
          }
        />

        {/* Editorial Layout: Differentiated Compositions */}
        <div className={styles.editorialGrid}>
          {/* Item 1: Prominent Wide Showcase — iScripts MultiCart */}
          <div className={styles.heroCard}>
            <div className={styles.heroCardContent}>
              <div className={styles.metaRow}>
                <span className={styles.categoryBadge}>{multicart.category}</span>
                <span className={styles.techTag}>Unencrypted PHP &bull; MySQL</span>
              </div>

              <h3 className={styles.cardTitle}>{multicart.name}</h3>
              <p className={styles.cardTagline}>{multicart.tagline}</p>
              <p className={styles.cardDesc}>{multicart.fullDescription}</p>

              <div className={styles.highlightsGrid}>
                {multicart.highlights.map((item) => (
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
                  href={multicart.productUrl}
                  isExternal
                >
                  Explore MultiCart
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href={multicart.demoUrl}
                  isExternal
                >
                  Live Interactive Demo
                </Button>
              </div>
            </div>

            <div className={styles.heroCardVisual}>
              <div className={styles.mockupShell}>
                <div className={styles.shellHeader}>
                  <div className={styles.shellDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.shellAddress}>multicart.iscripts.com/store/vendor-portal</div>
                </div>
                <div className={styles.shellScreen}>
                  <Image
                    src={multicart.image}
                    alt={multicart.altText}
                    width={720}
                    height={440}
                    className={styles.productImage}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Balanced Supporting Row: iScripts UberforX and iScripts NetMenus */}
          <div className={styles.dualRow}>
            {/* Item 2: iScripts UberforX */}
            <div className={styles.supportingCard}>
              <div className={styles.cardVisualCompact}>
                <div className={styles.mockupShell}>
                  <div className={styles.shellHeader}>
                    <div className={styles.shellDots}>
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className={styles.shellAddress}>uberforx.iscripts.com/dispatch</div>
                  </div>
                  <div className={styles.shellScreen}>
                    <Image
                      src={uberforx.image}
                      alt={uberforx.altText}
                      width={560}
                      height={340}
                      className={styles.productImage}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.supportingCardBody}>
                <div className={styles.metaRow}>
                  <span className={styles.categoryBadge}>{uberforx.category}</span>
                </div>
                <h3 className={styles.cardTitle}>{uberforx.name}</h3>
                <p className={styles.cardTagline}>{uberforx.tagline}</p>
                <p className={styles.cardDesc}>{uberforx.shortDescription}</p>

                <div className={styles.featureList}>
                  {uberforx.highlights.slice(0, 3).map((item) => (
                    <div key={item} className={styles.featureLine}>
                      <span className={styles.dotBullet} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.compactActions}>
                  <Button
                    variant="primary"
                    size="sm"
                    withArrow
                    href={uberforx.productUrl}
                    isExternal
                  >
                    Explore UberforX
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    href={uberforx.demoUrl}
                    isExternal
                  >
                    View Demo
                  </Button>
                </div>
              </div>
            </div>

            {/* Item 3: iScripts NetMenus */}
            <div className={styles.supportingCard}>
              <div className={styles.cardVisualCompact}>
                <div className={styles.mockupShell}>
                  <div className={styles.shellHeader}>
                    <div className={styles.shellDots}>
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className={styles.shellAddress}>netmenus.iscripts.com/restaurant/admin</div>
                  </div>
                  <div className={styles.shellScreen}>
                    <Image
                      src={netmenus.image}
                      alt={netmenus.altText}
                      width={560}
                      height={340}
                      className={styles.productImage}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.supportingCardBody}>
                <div className={styles.metaRow}>
                  <span className={styles.categoryBadge}>{netmenus.category}</span>
                </div>
                <h3 className={styles.cardTitle}>{netmenus.name}</h3>
                <p className={styles.cardTagline}>{netmenus.tagline}</p>
                <p className={styles.cardDesc}>{netmenus.shortDescription}</p>

                <div className={styles.featureList}>
                  {netmenus.highlights.slice(0, 3).map((item) => (
                    <div key={item} className={styles.featureLine}>
                      <span className={styles.dotBullet} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className={styles.compactActions}>
                  <Button
                    variant="primary"
                    size="sm"
                    withArrow
                    href={netmenus.productUrl}
                    isExternal
                  >
                    Explore NetMenus
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    href={netmenus.demoUrl}
                    isExternal
                  >
                    View Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Item 4: Differentiated Horizontal Split — iScripts Locologic */}
          <div className={styles.splitCard}>
            <div className={styles.splitVisual}>
              <div className={styles.mockupShell}>
                <div className={styles.shellHeader}>
                  <div className={styles.shellDots}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.shellAddress}>locologic.iscripts.com/3pl/dispatch-console</div>
                </div>
                <div className={styles.shellScreen}>
                  <Image
                    src={locologic.image}
                    alt={locologic.altText}
                    width={640}
                    height={380}
                    className={styles.productImage}
                  />
                </div>
              </div>
            </div>

            <div className={styles.splitContent}>
              <div className={styles.metaRow}>
                <span className={styles.categoryBadge}>{locologic.category}</span>
                <span className={styles.techTag}>Fleet & Dispatch</span>
              </div>

              <h3 className={styles.cardTitle}>{locologic.name}</h3>
              <p className={styles.cardTagline}>{locologic.tagline}</p>
              <p className={styles.cardDesc}>{locologic.fullDescription}</p>

              <div className={styles.highlightsGridCompact}>
                {locologic.highlights.map((item) => (
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
                  href={locologic.productUrl}
                  isExternal
                >
                  Explore Locologic
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href={locologic.demoUrl}
                  isExternal
                >
                  Interactive Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
