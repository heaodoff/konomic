'use client';

import { useEffect } from 'react';

const SELECTOR = [
  'main section',
  'main .ui-card',
  'main .ui-card-soft',
  'main .ui-card-dark',
].join(', ');

function getRevealKind(element: HTMLElement) {
  if (element.tagName.toLowerCase() === 'section') return 'section';
  if (element.classList.contains('ui-card-dark')) return 'card-dark';
  if (element.classList.contains('ui-card-soft')) return 'card-soft';
  return 'card';
}

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

    const siblingCounters = new WeakMap<HTMLElement, number>();

    elements.forEach((element, index) => {
      element.dataset.reveal = 'true';
      element.dataset.revealKind = getRevealKind(element);

      const parent = element.parentElement ?? document.body;
      const siblingIndex = siblingCounters.get(parent) ?? 0;
      siblingCounters.set(parent, siblingIndex + 1);

      const baseDelay = element.tagName.toLowerCase() === 'section' ? 0 : Math.min(siblingIndex * 85, 340);
      const waveOffset = (index % 3) * 20;
      element.style.setProperty('--reveal-delay', `${baseDelay + waveOffset}ms`);
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
        threshold: 0.12,
        rootMargin: '0px 0px -12% 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
