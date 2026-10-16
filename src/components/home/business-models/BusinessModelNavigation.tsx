'use client';

import React from 'react';
import { BusinessModelItem } from '@/data/businessModels';
import { ModelIcon } from './BusinessModelIcons';
import styles from './BusinessModelExplorer.module.css';

interface BusinessModelNavigationProps {
  items: BusinessModelItem[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export default function BusinessModelNavigation({
  items,
  selectedIndex,
  onSelect,
}: BusinessModelNavigationProps) {
  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIndex = (index + 1) % items.length;
      onSelect(nextIndex);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIndex = (index - 1 + items.length) % items.length;
      onSelect(prevIndex);
    } else if (e.key === 'Home') {
      e.preventDefault();
      onSelect(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      onSelect(items.length - 1);
    }
  };

  return (
    <div
      className={styles.navList}
      role="tablist"
      aria-label="Business model directories"
      aria-orientation="vertical"
    >
      {items.map((item, index) => {
        const isActive = index === selectedIndex;

        return (
          <button
            key={item.id}
            id={`model-tab-${item.id}`}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={`model-panel-${item.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`${styles.navItem} ${
              isActive ? styles.navItemActive : ''
            }`}
          >
            {/* Number Index */}
            <span
              className={`${styles.itemNumber} ${
                isActive ? styles.itemNumberActive : ''
              }`}
            >
              {item.index}
            </span>

            {/* Icon Container */}
            <div
              className={`${styles.itemIconBox} ${
                isActive ? styles.itemIconBoxActive : ''
              }`}
              aria-hidden="true"
            >
              <ModelIcon type={item.iconType} size={19} />
            </div>

            {/* Content Column */}
            <div className={styles.itemContent}>
              <h3 className={styles.itemHeading}>{item.modelTitle}</h3>
              <p className={styles.itemDescription}>{item.modelShortDesc}</p>
            </div>

            {/* Directional Chevron Arrow */}
            <div
              className={`${styles.itemArrow} ${
                isActive ? styles.itemArrowActive : ''
              }`}
              aria-hidden="true"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M6 3.5L10.5 8L6 12.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        );
      })}
    </div>
  );
}
