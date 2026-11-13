import React from 'react';
import {
  CookingPot,
  Bath,
  Home,
  Sparkles,
  Package,
  BedDouble,
  Briefcase,
  Coffee,
  Hammer,
  Paintbrush,
  KeyRound,
  Leaf,
  type LucideIcon,
} from 'lucide-react';
import SplitWords from '@/components/motion/SplitWords';
import type { IconKey } from '@/lib/servicesData';

export const ICONS: Record<IconKey, LucideIcon> = {
  kitchen: CookingPot,
  bath: Bath,
  home: Home,
  sparkle: Sparkles,
  box: Package,
  bed: BedDouble,
  office: Briefcase,
  coffee: Coffee,
  hammer: Hammer,
  brush: Paintbrush,
  key: KeyRound,
  leaf: Leaf,
};

export function Eyebrow({ children, light = false, center = false }: { children: React.ReactNode; light?: boolean; center?: boolean }) {
  return (
    <div className={`mb-4 flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
      <span data-anim="line" className={`h-px w-8 ${light ? 'bg-blue-300' : 'bg-star-blue'}`} />
      <span className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? 'text-blue-200' : 'text-star-blue'}`}>{children}</span>
      {center && <span data-anim="line" className={`h-px w-8 ${light ? 'bg-blue-300' : 'bg-star-blue'}`} />}
    </div>
  );
}

/** Section title: plain words, the last part in the italic brand accent, revealed word by word. */
export function Title({
  lead,
  accent,
  as: Tag = 'h2',
  light = false,
  className = '',
  id,
}: {
  lead: string;
  accent?: string;
  as?: 'h2' | 'h3';
  light?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      data-anim="words"
      className={`font-serif text-[2rem] font-medium leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.4rem] ${light ? 'text-white' : 'text-star-dark'} ${className}`}
    >
      <SplitWords
        parts={[
          accent ? `${lead} ` : lead,
          ...(accent ? [{ text: accent, className: `italic ${light ? 'text-blue-300' : 'text-star-blue'}` }] : []),
        ]}
      />
    </Tag>
  );
}

export function Stars({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <span className="inline-flex gap-0.5 text-amber-400" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className={className} fill="currentColor">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </span>
  );
}

export function GoogleG({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" />
    </svg>
  );
}

export function Check({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10.5" className="stroke-emerald-500/25" strokeWidth="1.5" />
      <path className="tick-path stroke-emerald-500" pathLength={1} d="M7.5 12.5l3 3 6-6.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
