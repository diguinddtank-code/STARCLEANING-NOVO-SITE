"use client";

import React, { useEffect, useRef } from 'react';

// Re-encoded from public/videos/hero.mp4 (5.3 MB): same footage, no audio track,
// 2.1 MB for desktop and 0.7 MB for phones.
const VIDEO_DESKTOP = '/videos/hero-desktop.mp4';
const VIDEO_MOBILE = '/videos/hero-mobile.mp4';

/**
 * Background video that never competes with the headline and the form for bandwidth:
 * the poster is shown right away, and the video file is only attached once the page has
 * finished loading and the browser is idle. Skipped for data-saver / 2G visitors and for
 * people who prefer reduced motion (the poster stays).
 */
const HeroVideo: React.FC<{ className?: string }> = ({ className }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const conn = (navigator as any).connection;
    if (conn && (conn.saveData || /2g/.test(conn.effectiveType || ''))) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let idleId: number | undefined;
    const start = () => {
      video.src = window.innerWidth < 768 ? VIDEO_MOBILE : VIDEO_DESKTOP;
      video.play().catch(() => {});
    };
    const schedule = () => {
      const w = window as any;
      idleId = w.requestIdleCallback ? w.requestIdleCallback(start, { timeout: 2500 }) : window.setTimeout(start, 1200);
    };
    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => {
      window.removeEventListener('load', schedule);
      const w = window as any;
      if (idleId !== undefined) (w.cancelIdleCallback ? w.cancelIdleCallback(idleId) : clearTimeout(idleId));
    };
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster="/images/hero-background.jpg"
      className={className}
    />
  );
};

export default HeroVideo;
