import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceFeature {
  name: string;
  description: string;
  icon: LucideIcon;
  priceEstimate?: string;
  features: string[];
  cta: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
  category: string;
}

export interface ComparisonRow {
  feature: string;
  fresh: boolean | string;
  exSg: boolean | string;
  transfer: boolean | string;
  direct: boolean | string;
  renewal: boolean | string;
}
