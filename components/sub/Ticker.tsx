import React from 'react';

/** Endless strip of short phrases (CSS animation, pauses on hover, static for reduced motion). */
export default function Ticker({ items, dark = false }: { items: string[]; dark?: boolean }) {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <li key={`${it}-${i}`} className="flex items-center whitespace-nowrap">
          <span className={`px-6 font-serif text-xl italic sm:text-2xl ${dark ? 'text-white/90' : 'text-star-dark'}`}>{it}</span>
          <svg viewBox="0 0 20 20" className={`h-3.5 w-3.5 ${dark ? 'text-blue-300' : 'text-star-blue'}`} fill="currentColor" aria-hidden="true">
            <path d="M10 0l2.4 7.6L20 10l-7.6 2.4L10 20l-2.4-7.6L0 10l7.6-2.4z" />
          </svg>
        </li>
      ))}
    </ul>
  );
  return (
    <div data-motion="" className={`ticker overflow-hidden border-y py-5 ${dark ? 'border-white/10 bg-star-dark' : 'border-star-dark/10 bg-white'}`}>
      <div className="ticker-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
