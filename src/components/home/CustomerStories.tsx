'use client';

import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { COMPANY_STATS } from '@/data/homepage';
import styles from './CustomerStories.module.css';

function StarRating() {
  return (
    <div className={styles.starRow} aria-label="5 out of 5 stars">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={styles.starIcon}
          width="13"
          height="13"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function CustomerStories() {
  return (
    <section className={styles.section} id="customer-stories" aria-label="Verified Customer Outcomes">
      <Container size="default">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerContent}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDash} aria-hidden="true" />
              <span className={styles.eyebrowText}>Customer outcomes</span>
            </div>
            <h2 className={styles.title}>Real businesses. Real starting points.</h2>
            <p className={styles.description}>
              Verified stories from founders and operational leaders who launched and scaled their software on iScripts platforms.
            </p>
          </div>

          <div className={styles.headerActions}>
            <Button
              variant="outline"
              size="md"
              withArrow
              href="https://www.iscripts.com/listshowcases.php"
              isExternal
            >
              Browse Client Showcase
            </Button>
          </div>
        </div>

        {/* Editorial Asymmetric Grid: Large Featured Anchor Story on Left + Supporting Stories & Track Record on Right */}
        <div className={styles.editorialGrid}>
          {/* Main Anchor Story: Midnight Sapphire Fill */}
          <article className={`${styles.anchorStory} ${styles.cardSapphire}`}>
            <div className={styles.decorQuote} aria-hidden="true">
              &ldquo;
            </div>

            {/* Top Bar: Stars + Case Study Metric */}
            <div className={styles.cardTop}>
              <div className={styles.ratingWrapper}>
                <StarRating />
                <span className={styles.verifiedText}>Verified Case Study</span>
              </div>
              <div className={styles.outcomeKicker}>
                <span className={styles.kickerDot} aria-hidden="true" />
                <span className={styles.kickerText}>40,000+ Active Members</span>
              </div>
            </div>

            {/* Large Hero Quote */}
            <blockquote className={styles.anchorQuote}>
              &ldquo;I really appreciate you from the initial point of contact all the way through the thorough detail you and your team at iScripts have given me on my project. I couldn’t be a happier client!&rdquo;
            </blockquote>

            {/* Bottom: Founder Profile & Platform Reference */}
            <div className={styles.cardBottom}>
              <div className={styles.authorRow}>
                <div className={styles.avatarWrapperLg}>
                  <Image
                    src="/images/avatar-garrett.jpg"
                    alt="Garrett Richardson"
                    width={56}
                    height={56}
                    className={styles.avatarImg}
                  />
                </div>
                <div className={styles.authorDetails}>
                  <div className={styles.authorNameLg}>Garrett Richardson</div>
                  <div className={styles.authorRoleLg}>
                    Founder, <span className={styles.companyName}>HoopCliq.com</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.iscripts.com/socialware/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.platformLink}
              >
                <span className={styles.platformPrefix}>Platform:</span>
                <span className={styles.platformName}>Customized Social & Community Platform</span>
                <svg
                  className={styles.linkArrow}
                  width="13"
                  height="13"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </article>

          {/* Right Column: 2 Supporting Color-Filled Cards + Seamlessly Integrated Track Record */}
          <div className={styles.supportingCol}>
            {/* Supporting Story 1: Terracotta Ember Fill */}
            <article className={`${styles.supportingCard} ${styles.cardTerracotta}`}>
              <div className={styles.decorQuoteSm} aria-hidden="true">
                &ldquo;
              </div>

              <div className={styles.cardTopSm}>
                <div className={styles.ratingWrapper}>
                  <StarRating />
                  <span className={styles.verifiedText}>Verified Client</span>
                </div>
                <div className={styles.outcomeKicker}>
                  <span className={styles.kickerDot} aria-hidden="true" />
                  <span className={styles.kickerText}>Smooth Go-Live</span>
                </div>
              </div>

              <blockquote className={styles.supportingQuote}>
                &ldquo;I engaged iScripts to design a customized version of PrintLogic for my company and the follow up from contract initiation to go live was a very smooth process. The team at iScripts were very accommodating.&rdquo;
              </blockquote>

              <div className={styles.supportingFooter}>
                <div className={styles.authorRowSm}>
                  <div className={styles.avatarWrapperSm}>
                    <Image
                      src="/images/avatar-kailo.jpg"
                      alt="Kai Lo"
                      width={40}
                      height={40}
                      className={styles.avatarImg}
                    />
                  </div>
                  <div className={styles.authorDetails}>
                    <div className={styles.authorNameSm}>Kai Lo</div>
                    <div className={styles.authorRoleSm}>
                      Managing Director, <span className={styles.companyName}>Scubadge.com</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.iscripts.com/printlogic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.platformLinkSm}
                >
                  <span className={styles.platformName}>iScripts PrintLogic</span>
                  <svg className={styles.linkArrow} width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Supporting Story 2: Deep Forest Emerald Fill */}
            <article className={`${styles.supportingCard} ${styles.cardEmerald}`}>
              <div className={styles.decorQuoteSm} aria-hidden="true">
                &ldquo;
              </div>

              <div className={styles.cardTopSm}>
                <div className={styles.ratingWrapper}>
                  <StarRating />
                  <span className={styles.verifiedText}>Verified Founder</span>
                </div>
                <div className={styles.outcomeKicker}>
                  <span className={styles.kickerDot} aria-hidden="true" />
                  <span className={styles.kickerText}>Cost-Effective Scale</span>
                </div>
              </div>

              <blockquote className={styles.supportingQuote}>
                &ldquo;iScripts was a game changer for me. I knew what I wanted to do and how I wanted to do it. The challenge for me was to cost-effectively build the application. I looked at a number of different options before finalizing iScripts platform.&rdquo;
              </blockquote>

              <div className={styles.supportingFooter}>
                <div className={styles.authorRowSm}>
                  <div className={styles.avatarWrapperSm}>
                    <Image
                      src="/images/avatar-mike.jpg"
                      alt="Mike Serrano"
                      width={40}
                      height={40}
                      className={styles.avatarImg}
                    />
                  </div>
                  <div className={styles.authorDetails}>
                    <div className={styles.authorNameSm}>Mike Serrano</div>
                    <div className={styles.authorRoleSm}>
                      Chief Executive, <span className={styles.companyName}>Classroom2Classroom</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.iscripts.com/multicart/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.platformLinkSm}
                >
                  <span className={styles.platformName}>iScripts MultiCart</span>
                  <svg className={styles.linkArrow} width="11" height="11" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Seamlessly Integrated Corporate Track Record Stats */}
            <div className={styles.trackRecordCard}>
              <div className={styles.trackGrid}>
                {COMPANY_STATS.map((stat) => (
                  <div key={stat.label} className={styles.trackItem}>
                    <div className={styles.trackValue}>{stat.value}</div>
                    <div className={styles.trackLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
