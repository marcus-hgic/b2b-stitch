export interface NavLink {
  href: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Logo {
  name: string;
  src: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  initials: string;
}

export interface PainPoint {
  icon: string;
  title: string;
  description: string;
}

export interface OnboardingStep {
  number: number;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface EcosystemProduct {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  href: string;
  accentColor: string;
  featured?: boolean;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface SecondaryService {
  title: string;
  description: string;
  icon: string;
}
