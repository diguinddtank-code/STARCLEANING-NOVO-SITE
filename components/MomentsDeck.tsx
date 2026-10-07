"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const moments = [
  {
    src: '/images/more-than-clean-mom.webp',
    alt: 'A mother and her young daughter laughing while they cook together in a bright, spotless kitchen',
    caption: 'Cooking together. Not cleaning up.',
  },
  {
    src: '/images/more-than-clean-homework.webp',
    alt: 'A mother smiling as her daughter does her homework at the kitchen table of a bright, tidy home',
    caption: 'Homework help. Not mopping floors.',
  },
  {
    src: '/images/more-than-clean-story-time.webp',
    alt: 'A mother and daughter reading a storybook under a cozy blanket on the sofa with their golden retriever',
    caption: 'Story time. Not scrubbing grout.',
  },
];

const INTERVAL_MS = 4800;
const EASE = [0.4, 0, 0.2, 1] as const;

// Where each card rests in the pile: 0 = on top, 2 = at the back.
const RESTING = [
  { x: 0, y: 0, scale: 1, rotate: 0, opacity: 1 },
  { x: 0, y: 18, scale: 0.95, rotate: -2.5, opacity: 1 },
  { x: 0, y: 36, scale: 0.9, rotate: 2.5, opacity: 1 },
];

// The top card is flicked off the pile before it goes to the back.
const THROWN = { x: '112%', y: -36, scale: 1, rotate: 13, opacity: 0 };

const MomentsDeck: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const [order, setOrder] = useState<number[]>(moments.map((_, i) => i));
  const [throwing, setThrowing] = useState(false);
  const [sentToBack, setSentToBack] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const advance = () => {
    if (throwing) return;
    setSentToBack(null);
    if (reduceMotion) {
      setOrder((current) => [...current.slice(1), current[0]]);
      return;
    }
    setThrowing(true);
  };

  const finishThrow = () => {
    setSentToBack(order[0]);
    setOrder([...order.slice(1), order[0]]);
    setThrowing(false);
  };

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(advance, INTERVAL_MS);
    return () => window.clearInterval(timer);
  });

  const top = order[0];

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div
        className="relative mx-auto w-full max-w-[34rem] cursor-pointer pb-12"
        onClick={advance}
        role="group"
        aria-roledescription="carousel"
        aria-label="Moments you get back. Click to see the next one."
      >
        {/* Sizing box: the same 3:2 ratio as the photos, so nothing is ever cropped */}
        <div className="relative aspect-[3/2] w-full">
          {moments.map((moment, slide) => {
            const place = order.indexOf(slide);
            const isTop = place === 0;
            const target = throwing ? (isTop ? THROWN : RESTING[place - 1]) : RESTING[place];
            const justSentBack = sentToBack === slide;
            return (
              <motion.div
                key={moment.src}
                className="absolute inset-0 overflow-hidden rounded-[1.75rem] bg-star-dark shadow-[0_28px_60px_-22px_rgba(0,40,85,0.5)] ring-1 ring-black/5"
                style={{ zIndex: throwing && isTop ? 4 : 3 - place, transformOrigin: '50% 100%' }}
                initial={false}
                animate={target}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : justSentBack
                      ? { duration: 0, opacity: { duration: 0.4, delay: 0.1 } }
                      : { duration: isTop && throwing ? 0.6 : 0.65, ease: EASE }
                }
                onAnimationComplete={() => {
                  if (throwing && isTop) finishThrow();
                }}
                aria-hidden={!isTop}
              >
                <Image
                  src={moment.src}
                  alt={moment.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 1280px) 50vw, 544px"
                  className="object-cover"
                  draggable={false}
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-star-dark/45 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="mt-1 flex flex-col items-center gap-3">
        <div className="h-9">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={top}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
              className="flex items-center gap-3 whitespace-nowrap text-base font-bold text-star-dark"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-star-blue text-white">
                <i className="fas fa-heart text-xs"></i>
              </span>
              {moments[top].caption}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-2" aria-hidden="true">
          {moments.map((moment, i) => (
            <span
              key={moment.src}
              className={`h-2 rounded-full transition-all duration-300 ${i === top ? 'w-8 bg-star-blue' : 'w-2 bg-star-blue/25'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MomentsDeck;
