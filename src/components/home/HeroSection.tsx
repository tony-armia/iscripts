'use client';

import React from 'react';
import HeroSlider from './HeroSlider';

interface HeroSectionProps {
  onOpenContact: () => void;
}

export default function HeroSection({ onOpenContact }: HeroSectionProps) {
  return <HeroSlider onOpenContact={onOpenContact} />;
}
