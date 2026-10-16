'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import styles from './WhyIScripts.module.css';

interface FeaturePillar {
  id: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  badge: string;
  imageSrc: string;
  codeSnippet: string;
}

const PILLARS: FeaturePillar[] = [
  {
    id: 'turnkey',
    number: '01',
    title: 'Ready-made platform foundations',
    summary: 'Eliminate 12 months of boilerplate infrastructure engineering.',
    detail:
      'Rather than building multi-tenant databases, vendor payout engines, role-based permissions, and checkout flows from zero, you begin with proven, operational architecture.',
    badge: 'Operational Architecture',
    imageSrc: '/images/home-screen.png',
    codeSnippet: `// config/platform.php\nreturn [\n  'mode' => 'production',\n  'multitenant' => true,\n  'commission_routing' => 'automated_split',\n  'source_encryption' => false,\n];`,
  },
  {
    id: 'customizable',
    number: '02',
    title: 'Customizable business functionality',
    summary: 'Adapt business logic, workflows, and database schemas to your model.',
    detail:
      'Modify commission tiers, order dispatch algorithms, automated notification webhooks, and regional tax calculation rules. Work internally or engage our Chicago engineering team.',
    badge: 'Custom Workflows',
    imageSrc: '/images/multicart-back.png',
    codeSnippet: `// modules/commission/RulesEngine.php\nclass CommissionEngine {\n  public function calculateSplit($vendorId, $orderTotal) {\n    $rate = $this->getVendorTier($vendorId);\n    return $orderTotal * ($rate / 100.0);\n  }\n}`,
  },
  {
    id: 'whitelabel',
    number: '03',
    title: 'Complete white-label branding',
    summary: 'Your domain, your brand identity, and your native app store accounts.',
    detail:
      'No iScripts branding is displayed to your customers or vendors. Companion iOS and Android applications are published directly under your organization’s developer credentials.',
    badge: 'White-Label Branding',
    imageSrc: '/images/uber-back.jpg',
    codeSnippet: `// branding/theme.json\n{\n  "organization": "Your Brand Name",\n  "custom_domain": "marketplace.yourdomain.com",\n  "app_store_id": "com.yourdomain.app",\n  "watermark_disabled": true\n}`,
  },
  {
    id: 'unencrypted',
    number: '04',
    title: '100% unencrypted source code',
    summary: 'Full codebase control and self-hosted server independence.',
    detail:
      'Commercial licenses include readable PHP and MySQL code with zero proprietary binary runtimes. Deploy on AWS, Google Cloud, DigitalOcean, or private Linux servers without lock-in.',
    badge: 'Open Stack / No Lock-In',
    imageSrc: '/images/locologic-back.png',
    codeSnippet: `// infrastructure/deploy.sh\n# Deploy directly to your own infrastructure\nrsync -avz --exclude '.git' ./src/ deploy@aws-instance:/var/www/html/\nphp artisan migrate --force\nsystemctl restart php-fpm nginx`,
  },
];

export default function WhyIScripts() {
  const [activePillarId, setActivePillarId] = useState<string>(PILLARS[0].id);

  const activePillar =
    PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];

  return (
    <section className={styles.section} id="made-to-become-yours">
      <Container size="default">
        <SectionHeading
          label="Architectural foundation"
          title="A working foundation. Room to make it yours."
          description="Why founders and organizations build on iScripts instead of commissioning custom software from scratch."
        />

        <div className={styles.interactiveGrid}>
          {/* Left Column: Interactive Feature Rail */}
          <div className={styles.featureRail} role="tablist" aria-label="Why build with iScripts">
            {PILLARS.map((pillar) => {
              const isActive = pillar.id === activePillarId;
              return (
                <button
                  key={pillar.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`feature-panel-${pillar.id}`}
                  className={`${styles.railItem} ${isActive ? styles.railItemActive : ''}`}
                  onClick={() => setActivePillarId(pillar.id)}
                >
                  <div className={styles.railTop}>
                    <span className={styles.railNumber}>{pillar.number}</span>
                    <h3 className={styles.railTitle}>{pillar.title}</h3>
                  </div>
                  <p className={styles.railSummary}>{pillar.summary}</p>
                  {isActive && (
                    <p className={styles.railDetail}>{pillar.detail}</p>
                  )}
                  <div className={styles.railIndicator} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Dynamic Supporting Interface & Code Preview */}
          <div
            id={`feature-panel-${activePillar.id}`}
            role="tabpanel"
            className={styles.stageFrame}
          >
            <div className={styles.stageChrome}>
              <div className={styles.chromeDots} aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <div className={styles.chromeAddress}>
                iscripts-core/{activePillar.id}.architecture
              </div>
              <div className={styles.chromeBadge}>{activePillar.badge}</div>
            </div>

            <div className={styles.stageContent}>
              {/* Product UI Visual */}
              <div className={styles.visualContainer}>
                <Image
                  key={activePillar.id}
                  src={activePillar.imageSrc}
                  alt={activePillar.title}
                  width={680}
                  height={380}
                  className={styles.stageImage}
                  quality={90}
                />
              </div>

              {/* Architectural Code / Schema Inspect */}
              <div className={styles.codeBlock}>
                <div className={styles.codeHeader}>
                  <span>Source Verification &bull; Unencrypted PHP / Shell</span>
                  <span className={styles.codeStatus}>Verified</span>
                </div>
                <pre className={styles.codePre}>
                  <code>{activePillar.codeSnippet}</code>
                </pre>
              </div>
            </div>

            <div className={styles.stageFooter}>
              <div className={styles.footerNote}>
                <strong>Standard LAMP Stack:</strong> PHP 8+, MySQL 8/MariaDB, Nginx/Apache. Fully self-hosted with complete database ownership.
              </div>
              <Button
                variant="outline"
                size="sm"
                withArrow
                href="https://www.iscripts.com/customization.php"
                isExternal
              >
                Customization Options
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
