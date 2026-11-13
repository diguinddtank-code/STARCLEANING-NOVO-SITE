import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, MapPin } from 'lucide-react';

export type CardItem = { href: string; name: string; text: string; image?: string; alt?: string; meta?: string };

/**
 * Photo cards (services) or text tiles (areas). Must sit inside a <Motion> so the grid rises in
 * with a stagger; photos zoom softly on hover.
 */
export default function ServiceCards({ items, cols = 3 }: { items: CardItem[]; cols?: 3 | 4 }) {
  const grid = cols === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3';
  return (
    <ul data-anim="stagger" className={`grid gap-5 ${grid}`}>
      {items.map((it, i) => (
        <li key={it.href}>
          <Link
            prefetch={false}
            href={it.href}
            className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_24px_50px_-34px_rgba(0,40,85,0.45)] ring-1 ring-star-dark/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_70px_-34px_rgba(0,40,85,0.55)]"
          >
            {it.image ? (
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <Image src={it.image} alt={it.alt ?? ''} fill sizes="(min-width: 1024px) 26rem, (min-width: 640px) 45vw, 92vw" className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-star-dark/50 via-transparent to-transparent opacity-80" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 font-serif text-sm text-star-dark">{String(i + 1).padStart(2, '0')}</span>
              </div>
            ) : (
              <div className="flex items-center justify-between px-7 pt-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-star-blue/[0.07] text-star-blue">
                  <MapPin className="h-5 w-5" />
                </span>
                <span className="font-serif text-sm text-slate-400">{String(i + 1).padStart(2, '0')}</span>
              </div>
            )}
            <div className="flex flex-1 flex-col p-7">
              <h3 className="font-serif text-2xl font-medium leading-tight text-star-dark transition-colors group-hover:text-star-blue">{it.name}</h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-slate-600">{it.text}</p>
              {it.meta && <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">{it.meta}</p>}
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-star-blue">
                Learn more
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-star-blue/25 transition-all duration-500 group-hover:rotate-45 group-hover:bg-star-blue group-hover:text-white">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
