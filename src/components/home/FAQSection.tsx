'use client';

import React, { useState } from 'react';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { FAQS } from '@/data/homepage';
import styles from './FAQSection.module.css';

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className={styles.section} id="faqs">
      <Container size="narrow">
        <SectionHeading
          label="Common questions"
          title="Everything you need to know about iScripts platforms."
          description="Clear answers regarding source code access, customization options, and hosting environments."
          align="center"
        />

        <div className={styles.accordion}>
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <button
                  type="button"
                  className={styles.questionButton}
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className={styles.questionText}>{faq.question}</span>
                  <span className={styles.toggleIcon} aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div id={`faq-answer-${faq.id}`} className={styles.answerWrapper} role="region">
                    <p className={styles.answerText}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Link */}
        <div className={styles.footerNote}>
          <span>Have an architectural or licensing inquiry not covered here?</span>
          <a
            href="https://www.iscripts.com/support/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.supportLink}
          >
            Visit the iScripts Help Desk &rarr;
          </a>
        </div>
      </Container>
    </section>
  );
}
