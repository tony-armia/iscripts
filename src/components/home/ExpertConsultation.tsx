'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import styles from './ExpertConsultation.module.css';

interface ExpertConsultationProps {
  onOpenContact?: () => void;
}

export default function ExpertConsultation({ onOpenContact }: ExpertConsultationProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section className={styles.section} id="expert-consultation" aria-label="Connect With Our Experts">
      {/* Subtle Background Geometric Accent Lines */}
      <div className={styles.bgLineArt} aria-hidden="true">
        <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="none">
          <path d="M-100 200 L400 800" stroke="rgba(255, 255, 255, 0.025)" strokeWidth="1.5" />
          <path d="M1100 0 L1550 700" stroke="rgba(255, 106, 61, 0.04)" strokeWidth="1.5" />
          <path d="M1250 -50 L1600 550" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="1" />
        </svg>
      </div>

      <Container size="default">
        <div className={styles.containerGrid}>
          {/* ====================================================================
              LEFT COLUMN: Chicago HQ & Engineering Credentials
             ==================================================================== */}
          <div className={styles.credentialsCol}>
            {/* Eyebrow */}
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDash} aria-hidden="true" />
              <span className={styles.eyebrowText}>CHICAGO HQ & DEVELOPMENT CENTER</span>
            </div>

            {/* Main Headline */}
            <h2 className={styles.mainTitle}>
              Connect with our <span className={styles.accentText}>software experts</span>.
            </h2>

            {/* Lead Description */}
            <p className={styles.leadText}>
              Let us choose or customize the best technology platform for your next web or mobile venture. Receive a full architectural breakdown and timeline estimate from our Chicago team.
            </p>

            {/* 3 Core Value Proof Items */}
            <div className={styles.proofList}>
              {/* Item 01 */}
              <div className={styles.proofItem}>
                <div className={styles.proofIconBox} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div className={styles.proofContent}>
                  <h3 className={styles.proofTitle}>150+ In-House Engineers</h3>
                  <p className={styles.proofDesc}>Chicago management with dedicated full-stack development pods.</p>
                </div>
              </div>

              {/* Item 02 */}
              <div className={styles.proofItem}>
                <div className={styles.proofIconBox} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                    <polyline points="12 11 12 16" />
                    <polyline points="9 13 12 16 15 13" />
                  </svg>
                </div>
                <div className={styles.proofContent}>
                  <h3 className={styles.proofTitle}>Free Installation Included</h3>
                  <p className={styles.proofDesc}>We deploy your software onto your chosen cloud host at zero cost.</p>
                </div>
              </div>

              {/* Item 03 */}
              <div className={styles.proofItem}>
                <div className={styles.proofIconBox} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <polyline points="9 12 11 14 15 10" />
                  </svg>
                </div>
                <div className={styles.proofContent}>
                  <h3 className={styles.proofTitle}>100% Unencrypted Source Code</h3>
                  <p className={styles.proofDesc}>Perpetual commercial rights with zero royalty fees or vendor lock-in.</p>
                </div>
              </div>
            </div>

            {/* Bottom Chicago HQ Skyline Card */}
            <div className={styles.skylineCard}>
              <div className={styles.skylineImageWrapper}>
                <Image
                  src="/images/chicago-skyline.jpg"
                  alt="Chicago HQ Skyline at Golden Hour"
                  fill
                  sizes="160px"
                  className={styles.skylineImg}
                />
              </div>
              <div className={styles.skylineInfo}>
                <div className={styles.skylineTitleRow}>
                  <svg className={styles.pinIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className={styles.hqName}>Chicago, IL (HQ)</span>
                </div>
                <div className={styles.advisorLineLabel}>Direct Advisor Line</div>
                <div className={styles.phoneNumbers}>
                  <a href="tel:13124236728" className={styles.phoneLink}>1-(312)-423-6728</a>
                  <span className={styles.phoneDot}>•</span>
                  <a href="tel:18005695538" className={styles.phoneLink}>1-(800)-569-5538 (Toll-Free)</a>
                </div>
              </div>
            </div>
          </div>

          {/* ====================================================================
              RIGHT COLUMN: Dark-Themed Consultation Form Card
             ==================================================================== */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              {/* Form Header */}
              <div className={styles.formHeader}>
                <div className={styles.formEyebrow}>REQUEST A PROJECT CONSULTATION</div>
                <h3 className={styles.formTitle}>Share your project details</h3>
                <p className={styles.formSubtitle}>Receive expert guidance and architectural estimates.</p>
              </div>

              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIconBox}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4 className={styles.successTitle}>Thank You, {name || 'Founder'}!</h4>
                  <p className={styles.successDesc}>
                    Your project brief has been routed to our Chicago senior solutions desk. An advisor will reach out to you within 24 business hours.
                  </p>
                  <button
                    type="button"
                    className={styles.resetButton}
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setProjectType('');
                      setComments('');
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  {/* Full Name */}
                  <div className={styles.formGroup}>
                    <label htmlFor="exp-name" className={styles.label}>
                      Your Full Name <span className={styles.requiredMark}>*</span>
                    </label>
                    <input
                      id="exp-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Henderson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={styles.input}
                    />
                  </div>

                  {/* Email & Phone (2-col grid) */}
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="exp-email" className={styles.label}>
                        Work Email Address <span className={styles.requiredMark}>*</span>
                      </label>
                      <input
                        id="exp-email"
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={styles.input}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="exp-phone" className={styles.label}>
                        Phone Number <span className={styles.requiredMark}>*</span>
                      </label>
                      <input
                        id="exp-phone"
                        type="tel"
                        required
                        placeholder="1-(312)-000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={styles.input}
                      />
                    </div>
                  </div>

                  {/* Project Scope / Focus Area */}
                  <div className={styles.formGroup}>
                    <label htmlFor="exp-type" className={styles.label}>
                      Project Scope / Focus Area
                    </label>
                    <div className={styles.selectWrapper}>
                      <select
                        id="exp-type"
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className={styles.select}
                      >
                        <option value="">Select an option</option>
                        <option value="Ready-Made Turnkey Script Deployment">Ready-Made Turnkey Script Deployment</option>
                        <option value="Multi-Vendor Marketplace (MultiCart)">Multi-Vendor Marketplace (MultiCart)</option>
                        <option value="On-Demand Dispatch & Mobile Apps (UberforX)">On-Demand Dispatch & Mobile Apps (UberforX)</option>
                        <option value="Restaurant Portal & Ordering (NetMenus)">Restaurant Portal & Ordering (NetMenus)</option>
                        <option value="Last-Mile 3PL Logistics (Locologic)">Last-Mile 3PL Logistics (Locologic)</option>
                        <option value="Bespoke Custom Software Architecture">Bespoke Custom Software Architecture</option>
                      </select>
                      <svg className={styles.selectArrow} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Project Details Textarea */}
                  <div className={styles.formGroup}>
                    <label htmlFor="exp-comments" className={styles.label}>
                      Tell Us About Your Project <span className={styles.requiredMark}>*</span>
                    </label>
                    <textarea
                      id="exp-comments"
                      required
                      rows={3}
                      placeholder="Describe your business model, timeline, or specific custom integrations..."
                      value={comments}
                      onChange={(e) => setComments(e.target.value)}
                      className={styles.textarea}
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className={styles.submitButton}
                  >
                    <span>{loading ? 'Submitting Scope...' : 'Contact Our Experts'}</span>
                    <span className={styles.btnArrow} aria-hidden="true">&rarr;</span>
                  </button>

                  {/* Trust & Security Footer Strip */}
                  <div className={styles.trustFooter}>
                    <div className={styles.trustItem}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                      <span>NDA Protected</span>
                    </div>

                    <div className={styles.trustDivider} aria-hidden="true" />

                    <div className={styles.trustItem}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      <span>Direct Technical Scoping</span>
                    </div>

                    <div className={styles.trustDivider} aria-hidden="true" />

                    <div className={styles.trustItem}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                      <span>Zero Spam</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
