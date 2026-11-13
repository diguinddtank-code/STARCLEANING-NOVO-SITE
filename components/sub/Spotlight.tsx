"use client";

import React from 'react';

/** Tracks the pointer over any .spotlight child and feeds --mx/--my to its glow (CSS only). */
export default function Spotlight({ children, className }: { children: React.ReactNode; className?: string }) {
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = (e.target as HTMLElement).closest<HTMLElement>('.spotlight');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  return (
    <div className={className} onPointerMove={onMove} data-anim="stagger">
      {children}
    </div>
  );
}
