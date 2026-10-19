'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import styles from './ExpertConsultation.module.css';

interface ExpertConsultationProps {
  onOpenContact?: () => void;
}

export default function ExpertConsultation({ onOpenContact }: ExpertConsultationProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('Turnkey Platform');
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
      <Container size="default">
        <div className={styles.containerGrid}>
          {/* Left Column: Development Center & Chicago Advisory Credentials */}
          <div className={styles.credentialsCol}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDot} aria-hidden="true" />
              <span>Chicago HQ & Development Center</span>
            </div>

            <h2 className={styles.mainTitle}>
              Connect with our <span className={styles.accentText}>software experts</span>.
            </h2>

            <p className={styles.leadText}>
              Let us choose or customize the best technology platform for your next web or mobile venture. Receive a full architectural breakdown and timeline estimate from our Chicago team.
            </p>

            <div className={styles.proofGrid}>
              <div className={styles.proofItem}>
                <div className={styles.proofIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.proofTitle}>150+ In-House Engineers</h4>
                  <p className={styles.proofDesc}>Chicago management with dedicated full-stack development pods.</p>
                </div>
              </div>

              <div className={styles.proofItem}>
                <div className={styles.proofIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.proofTitle}>Free Installation Included</h4>
                  <p className={styles.proofDesc}>We deploy your software onto your chosen cloud host at zero cost.</p>
                </div>
              </div>

              <div className={styles.proofItem}>
                <div className={styles.proofIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.proofTitle}>100% Unencrypted Source Code</h4>
                  <p className={styles.proofDesc}>Perpetual commercial rights with zero royalty fees or vendor lock-in.</p>
                </div>
              </div>
            </div>

            {/* Direct Advisor Callout */}
            <div className={styles.directContactBanner}>
              <div className={styles.contactAvatar}>
                <span>JS</span>
              </div>
              <div className={styles.contactInfo}>
                <div className={styles.contactName}>Direct Advisor Line &bull; Jon S.</div>
                <div className={styles.contactNumbers}>
                  <a href="tel:13124236728" className={styles.phoneLink}>1-(312)-423-6728</a>
                  <span className={styles.dividerDot}>&bull;</span>
                  <a href="tel:18005695538" className={styles.phoneLink}>1-(800)-569-5538 (Toll-Free)</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation & Project Scope Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Request a Project Consultation</h3>
                <p className={styles.formSubtitle}>Receive expert platform guidance and architectural estimates.</p>
              </div>

              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h4>Thank You, {name || 'Founder'}!</h4>
                  <p>Your project brief has been routed to our Chicago senior solutions desk. An advisor will reach out to you within 24 business hours.</p>
                  <button
                    type="button"
                    className={styles.resetButton}
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setEmail('');
                      setPhone('');
                      setComments('');
                    }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGroup}>
                    <label htmlFor="exp-name" className={styles.label}>Your Full Name *</label>
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

                  <div className={styles.inputRow}>
                    <div className={styles.inputGroup}>
                      <label htmlFor="exp-email" className={styles.label}>Work Email Address *</label>
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

                    <div className={styles.inputGroup}>
                      <label htmlFor="exp-phone" className={styles.label}>Phone Number *</label>
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

                  <div className={styles.inputGroup}>
                    <label htmlFor="exp-type" className={styles.label}>Project Scope / Focus Area</label>
                    <select
                      id="exp-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className={styles.select}
                    >
                      <option value="Turnkey Platform">Ready-Made Turnkey Script Deployment</option>
                      <option value="Custom Marketplace">Multi-Vendor Marketplace (MultiCart)</option>
                      <option value="On-Demand App">On-Demand Dispatch & Mobile Apps (UberforX)</option>
                      <option value="Food Delivery">Restaurant Portal & Ordering (NetMenus)</option>
                      <option value="Logistics 3PL">Last-Mile 3PL Logistics (Locologic)</option>
                      <option value="Full Custom Engineering">Bespoke Custom Software Architecture</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="exp-comments" className={styles.label}>Tell Us About Your Project *</label>
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

                  <button
                    type="submit"
                    disabled={loading}
                    className={styles.submitBtn}
                  >
                    {loading ? 'Submitting Scope...' : 'Contact Our Experts →'}
                  </button>

                  <div className={styles.guaranteeText}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span>NDA Protected &bull; Direct Technical Scoping &bull; Zero Spam</span>
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
