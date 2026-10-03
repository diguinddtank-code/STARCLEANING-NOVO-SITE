"use client";

import React from 'react';
import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

interface TrustBarProps {
  /** Floats the panel over the bottom edge of the section above it. */
  overlap?: boolean;
}

const SCALLOP = Array.from({ length: 48 }, (_, i) => {
  const angle = (i * Math.PI) / 24;
  const radius = i % 2 ? 46 : 49;
  return `${(50 + radius * Math.cos(angle)).toFixed(2)},${(50 + radius * Math.sin(angle)).toFixed(2)}`;
}).join(' ');

interface SealProps {
  top: string;
  bottom: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}

/** Scalloped brand-blue medallion with curved ring text and custom centre artwork. */
const Seal: React.FC<SealProps> = ({ top, bottom, label, className, children }) => {
  const uid = `seal-${label.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  const fit = (text: string, budget: number) => Math.min(7.4, budget / (text.length * 0.78));
  const topSize = fit(top, 98);
  const bottomSize = fit(bottom, 116);

  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={label}>
      <defs>
        <linearGradient id={`${uid}-fill`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a5fd1" />
          <stop offset="1" stopColor="#002855" />
        </linearGradient>
        <path id={`${uid}-top`} d="M 15,50 A 35,35 0 0,1 85,50" />
        <path id={`${uid}-bottom`} d="M 9.5,50 A 40.5,40.5 0 0,0 90.5,50" />
      </defs>
      <polygon points={SCALLOP} fill={`url(#${uid}-fill)`} />
      <circle cx="50" cy="50" r="42" fill="none" stroke="#ffffff" strokeOpacity="0.35" strokeWidth="0.8" />
      <text fill="#fff" fontSize={topSize} fontWeight="800" letterSpacing={topSize * 0.15} textAnchor="middle">
        <textPath href={`#${uid}-top`} startOffset="50%">{top}</textPath>
      </text>
      <text fill="#fff" fontSize={bottomSize} fontWeight="800" letterSpacing={bottomSize * 0.15} textAnchor="middle">
        <textPath href={`#${uid}-bottom`} startOffset="50%">{bottom}</textPath>
      </text>
      <circle cx="50" cy="50" r="26" fill="#ffffff" />
      {children}
    </svg>
  );
};

const SEAL_SIZE = 'h-[3.25rem] w-[3.25rem] lg:h-[5rem] lg:w-[5rem]';

const TrustBar: React.FC<TrustBarProps> = ({ overlap = false }) => {
  const wrapper = overlap
    ? 'relative z-20 flow-root bg-white pb-0 lg:pb-6'
    : 'relative z-20 bg-white border-b border-gray-100 py-10 lg:py-14';

  const frame = overlap
    ? '-mt-7 mx-3 sm:mx-6 lg:-mt-10 lg:mx-auto max-w-5xl'
    : 'mx-3 sm:mx-6 lg:mx-auto max-w-5xl';

  return (
    <div className={wrapper}>
      <div className={`${frame} rounded-3xl border border-slate-200/70 bg-white p-2 shadow-[0_24px_50px_-20px_rgba(0,40,85,0.3)] lg:p-2.5`}>
        <ScrollReveal direction="up" delay={50}>
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-2.5">

            <Tile label="Veteran-Owned" sub="Proudly serving the Lowcountry">
              <Image
                src="/images/veteran-owned-badge.png"
                alt="Veteran Owned Business seal"
                width={205}
                height={168}
                sizes="(max-width: 1024px) 56px, 96px"
                className="h-auto w-[3.25rem] lg:w-[6rem]"
              />
            </Tile>

            <Tile label="18 Years in Business" sub="Locally owned and operated">
              <Seal top="YEARS IN BUSINESS" bottom="SERVING THE LOWCOUNTRY" label="18 years in business" className={SEAL_SIZE}>
                <text x="50" y="60.5" textAnchor="middle" fontSize="30" fontWeight="700" fill="#004aad" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>18</text>
              </Seal>
            </Tile>

            <Tile label="Trusted Team Members" sub="Background-checked and vetted">
              <Seal top="TRUSTED TEAM" bottom="BACKGROUND CHECKED" label="Trusted, background-checked team members" className={SEAL_SIZE}>
                <path d="M50 33 L64 38.5 V51 C64 60 58 66 50 69.5 C42 66 36 60 36 51 V38.5 Z" fill="#004aad" />
                <path d="M43.5 51 L48.5 56 L57.5 45.5" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
              </Seal>
            </Tile>

            <Tile label="100% Guaranteed" sub="Free 24-hour re-clean">
              <Seal top="SATISFACTION" bottom="GUARANTEE" label="100% satisfaction guarantee" className={SEAL_SIZE}>
                <text x="50" y="56" textAnchor="middle" fontSize="17" fontWeight="800" fill="#004aad" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>100%</text>
              </Seal>
            </Tile>

          </div>
          {/* Platform logos */}
          <div className="mt-2 flex items-center justify-center gap-6 border-t border-slate-100 px-2 pb-1 pt-3 sm:gap-10 lg:mt-2.5 lg:gap-14 lg:pt-3.5">
            <PlatformMark name="yelp" color="#d32323"><i className="fab fa-yelp text-lg lg:text-xl"></i></PlatformMark>
            <PlatformMark name="thumbtack" color="#009fd9"><i className="fas fa-thumbtack text-base lg:text-lg"></i></PlatformMark>
            <PlatformMark name="nextdoor" color="#8ED500">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#8ED500] text-white lg:h-6 lg:w-6"><i className="fas fa-home text-[9px] lg:text-[10px]"></i></span>
            </PlatformMark>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

interface PlatformMarkProps {
  name: string;
  color: string;
  children: React.ReactNode;
}

const PlatformMark: React.FC<PlatformMarkProps> = ({ name, color, children }) => (
  <span className="flex items-center gap-1.5 lg:gap-2" style={{ color }}>
    {children}
    <span className="font-heading text-[15px] font-extrabold lowercase leading-none tracking-tight lg:text-xl">{name}</span>
  </span>
);

interface TileProps {
  label: string;
  sub: string;
  children: React.ReactNode;
}

const Tile: React.FC<TileProps> = ({ label, sub, children }) => (
  <div className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white px-3 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-100 hover:shadow-[0_18px_40px_-18px_rgba(0,74,173,0.35)] lg:flex-col lg:gap-0 lg:px-4 lg:py-5 lg:text-center">
    <div className="flex h-[3.25rem] w-[3.25rem] shrink-0 items-center justify-center drop-shadow-md transition-transform duration-300 group-hover:scale-105 lg:h-[5.5rem] lg:w-auto">{children}</div>
    <div className="min-w-0 lg:mt-3">
      <p className="text-[10.5px] font-black uppercase leading-tight tracking-wide text-slate-900 lg:text-xs">{label}</p>
      <p className="mt-1 hidden text-[11px] leading-snug text-slate-500 lg:block">{sub}</p>
    </div>
  </div>
);

export default TrustBar;
