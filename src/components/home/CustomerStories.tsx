import React from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { TESTIMONIALS, COMPANY_STATS } from '@/data/homepage';
import styles from './CustomerStories.module.css';

export default function CustomerStories() {
  const [featured, story2, story3] = TESTIMONIALS;

  return (
    <section className={styles.section} id="customer-stories">
      <Container size="default">
        <SectionHeading
          label="Customer outcomes"
          title="Real businesses. Real starting points."
          description="Verified stories from founders and operational leaders who launched their software on iScripts platforms."
          actions={
            <Button
              variant="outline"
              size="md"
              withArrow
              href="https://www.iscripts.com/listshowcases.php"
              isExternal
            >
              Browse Client Showcase
            </Button>
          }
        />

        {/* Editorial Layout: Large Featured Story with Integrated Metrics */}
        <div className={styles.editorialGrid}>
          {/* Main Anchor Story */}
          <div className={styles.anchorStory}>
            <div className={styles.anchorBadge}>Featured Founder Experience</div>
            <blockquote className={styles.anchorQuote}>
              &ldquo;{featured.quote}&rdquo;
            </blockquote>

            <div className={styles.anchorMeta}>
              <div className={styles.authorBadge}>
                <div className={styles.authorInitial}>{featured.author.charAt(0)}</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{featured.author}</div>
                  <div className={styles.authorRole}>
                    {featured.role}, <span className={styles.authorCompany}>{featured.company}</span>
                  </div>
                </div>
              </div>

              <div className={styles.productTag}>
                <span className={styles.tagLabel}>Platform:</span>
                <span className={styles.tagValue}>{featured.productUsed}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Supporting Story + Integrated Verified Stats */}
          <div className={styles.supportingCol}>
            {/* Supporting Story: Kai Lo */}
            <div className={styles.supportingCard}>
              <blockquote className={styles.supportingQuote}>
                &ldquo;{story2.quote}&rdquo;
              </blockquote>

              <div className={styles.supportingMeta}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{story2.author}</div>
                  <div className={styles.authorRole}>
                    {story2.role}, <span className={styles.authorCompany}>{story2.company}</span>
                  </div>
                </div>
                <div className={styles.productBadgeSm}>{story2.productUsed}</div>
              </div>
            </div>

            {/* Supporting Story: Mike Serrano */}
            <div className={styles.supportingCard}>
              <blockquote className={styles.supportingQuote}>
                &ldquo;{story3.quote}&rdquo;
              </blockquote>

              <div className={styles.supportingMeta}>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{story3.author}</div>
                  <div className={styles.authorRole}>
                    {story3.role}, <span className={styles.authorCompany}>{story3.company}</span>
                  </div>
                </div>
                <div className={styles.productBadgeSm}>{story3.productUsed}</div>
              </div>
            </div>

            {/* Seamlessly Integrated Corporate Track Record */}
            <div className={styles.trackRecordStrip}>
              {COMPANY_STATS.map((stat) => (
                <div key={stat.label} className={styles.trackItem}>
                  <div className={styles.trackValue}>{stat.value}</div>
                  <div className={styles.trackLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
