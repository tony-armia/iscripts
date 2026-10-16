'use client';

import React, { useState } from 'react';
import Button from '../ui/Button';
import { COMPANY_CONTACT } from '@/data/homepage';
import styles from './ContactModal.module.css';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    platform: 'MultiCart',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close dialog"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className={styles.header}>
          <div className={styles.label}>Direct consultation</div>
          <h3 className={styles.title}>Talk with an iScripts solutions engineer</h3>
          <p className={styles.subtitle}>
            Discuss your platform requirements, request a live architectural walkthrough,
            or get an estimate for turnkey customization.
          </p>
        </div>

        {submitted ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h4>Thank you for reaching out</h4>
            <p>
              Your consultation request has been routed to our Chicago engineering desk.
              A solutions architect will contact you at <strong>{formData.email}</strong> within one business day.
            </p>
            <div className={styles.directContactPrompt}>
              Need an immediate answer? Call us directly:
              <a href="tel:13124236728" className={styles.directPhoneLink}>
                {COMPANY_CONTACT.directPhone}
              </a>
            </div>
            <Button variant="secondary" size="md" onClick={() => { setSubmitted(false); onClose(); }}>
              Close window
            </Button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="modal-name" className={styles.formLabel}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="e.g. Alex Henderson"
                  className={styles.input}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="modal-email" className={styles.formLabel}>
                  Work Email <span className={styles.required}>*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  placeholder="alex@company.com"
                  className={styles.input}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="modal-phone" className={styles.formLabel}>
                  Phone Number
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className={styles.input}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="modal-platform" className={styles.formLabel}>
                  Primary Platform of Interest
                </label>
                <select
                  id="modal-platform"
                  className={styles.select}
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                >
                  <option value="MultiCart">iScripts MultiCart (Multi-Vendor Marketplace)</option>
                  <option value="UberforX">iScripts UberforX (On-Demand Dispatch)</option>
                  <option value="NetMenus">iScripts NetMenus (Restaurant Ordering)</option>
                  <option value="Locologic">iScripts Locologic (3PL Delivery Management)</option>
                  <option value="eSwap">iScripts eSwap (Barter Exchange)</option>
                  <option value="PrintLogic">iScripts PrintLogic (Web-to-Print)</option>
                  <option value="GoStores">iScripts GoStores (Online Store Builder)</option>
                  <option value="Custom">Custom Architecture / Other</option>
                </select>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="modal-message" className={styles.formLabel}>
                Project Overview & Requirements <span className={styles.required}>*</span>
              </label>
              <textarea
                id="modal-message"
                required
                rows={3}
                placeholder="Briefly describe what you are looking to build, expected timelines, or any specific customizations you have in mind..."
                className={styles.textarea}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <div className={styles.formActions}>
              <Button type="submit" variant="primary" size="md" withArrow>
                Submit Consultation Request
              </Button>
              <div className={styles.directCallOption}>
                <span>or call directly:</span>
                <a href="tel:13124236728" className={styles.directPhoneText}>
                  {COMPANY_CONTACT.directPhone}
                </a>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
