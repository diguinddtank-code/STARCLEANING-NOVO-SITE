"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Gift, Users, Clock, Leaf } from 'lucide-react';
import { THANKSGIVING_OFFER } from '../lib/thanksgivingOffer';

interface ThanksgivingHeaderProps {
  firstName?: string;
  promoCode: string;
}

// Returns "27d 13h" / "4h 12m" until the offer ends, or null before mount (avoids hydration mismatch)
const useCountdown = (endsAt: string) => {
  const [label, setLabel] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => {
      const ms = Math.max(0, new Date(endsAt).getTime() - Date.now());
      const d = Math.floor(ms / 86400000);
      const h = Math.floor((ms % 86400000) / 3600000);
      const m = Math.floor((ms % 3600000) / 60000);
      setLabel(ms === 0 ? 'Ended' : d > 0 ? `${d}d ${h}h` : `${h}h ${m}m`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, [endsAt]);
  return label;
};

const ThanksgivingHeader: React.FC<ThanksgivingHeaderProps> = ({ firstName, promoCode }) => {
  const { discount, totalSpots, spotsLeft, endsAt } = THANKSGIVING_OFFER;
  const countdown = useCountdown(endsAt);
  const claimedPct = ((totalSpots - spotsLeft) / totalSpots) * 100;

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(120%_140%_at_0%_0%,#0b3a78_0%,#002855_55%,#001a3a_100%)] px-4 pt-4 pb-3.5 sm:px-6 sm:pt-5 text-white">
      {/* Warm glow behind the offer */}
      <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#d98a3d]/25 blur-3xl"></div>

      <div className="relative z-10">
        {/* Offer card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex items-center gap-3.5 overflow-hidden rounded-2xl bg-gradient-to-r from-[#a9541f] via-[#c47331] to-[#e0a44f] px-4 py-3 shadow-[0_12px_30px_-12px_rgba(224,164,79,0.55)] ring-1 ring-white/15 sm:px-5 sm:py-3.5"
        >
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_3.5s_ease-in-out_infinite]"
            style={{ transform: 'translateX(-100%)' }}
          ></div>
          <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
            <Gift className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div className="relative min-w-0">
            <p className="truncate text-[11px] font-semibold text-white/90 sm:text-xs">
              {firstName ? `Congratulations, ${firstName}!` : 'Your holiday offer is reserved'}
            </p>
            <p className="font-heading text-3xl font-black leading-none tracking-tight sm:text-4xl">{discount} OFF</p>
            <p className="mt-0.5 text-[11px] font-semibold text-white/90 sm:text-xs">Your Thanksgiving clean</p>
          </div>
          <div className="relative ml-auto hidden shrink-0 flex-col items-end gap-1 min-[400px]:flex">
            <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-[0.16em] text-white/80">
              <Leaf className="h-3 w-3" strokeWidth={2.25} />
              Code
            </span>
            <span className="rounded-md border border-dashed border-white/50 bg-white/10 px-2 py-0.5 text-xs font-black tracking-[0.2em]">{promoCode}</span>
          </div>
        </motion.div>

        {/* Scarcity */}
        <div className="mt-3 flex items-center gap-3 text-[11px] font-semibold sm:text-xs">
          <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap">
            <Users className="h-3.5 w-3.5 text-[#f0b46a]" strokeWidth={2} />
            Only {spotsLeft} of {totalSpots} spots left
          </span>
          <div className="h-1 flex-grow overflow-hidden rounded-full bg-white/15">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#e0a44f] to-[#f0c27a]"
              initial={{ width: 0 }}
              animate={{ width: `${claimedPct}%` }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            />
          </div>
          <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap tabular-nums">
            <Clock className="h-3.5 w-3.5 text-[#f0b46a]" strokeWidth={2} />
            <span className="max-[379px]:hidden">Ends in </span>{countdown ?? '--'}
          </span>
        </div>
      </div>
    </div>
  );
};

// Segmented step progress used by the Thanksgiving theme
export const SegmentedProgress: React.FC<{ step: number; total: number }> = ({ step, total }) => (
  <div className="mb-3.5 flex gap-1.5">
    {Array.from({ length: total }).map((_, i) => (
      <div key={i} className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
        <motion.div
          className="h-full rounded-full bg-star-blue"
          initial={false}
          animate={{ width: step > i ? '100%' : '0%' }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        />
      </div>
    ))}
  </div>
);

export default ThanksgivingHeader;
