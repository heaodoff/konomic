'use client';

import { useEffect } from 'react';

const SELECTOR = [
  'main section',
  'main .ui-card',
  'main .ui-card-soft',
  'main .ui-card-dark',
].join(', ');

export default function RevealObserver() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = Array.from(new Set(Array.from(document.querySelectorAll<HTMLElement>(SELECTOR))));

    if (!elements.length) return;

    if (prefersReducedMotion) {
      elements.forEach((element) => {
        element.dataset.reveal = 'true';
        element.classList.add('is-visible');
      });
      return;
    }

    elements.forEach((element, index) => {
      element.dataset.reveal = 'true';
      element.style.setProperty('--reveal-delay', `${Math.min((index % 6) * 70, 350)}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
