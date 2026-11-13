"use client";

import { useEffect, type RefObject } from 'react';

/**
 * Shared, lazy GSAP loader.
 *
 * GSAP + ScrollTrigger (~45 KB gzip) are never part of a page's first load: they are fetched on
 * the visitor's first interaction (scroll, touch, key, mouse move). Without an interaction nothing
 * below the fold is ever seen, so there is nothing to animate yet. Everything that animates must
 * look finished without GSAP (it is the no-JS / reduced-motion state too); GSAP only hides an
 * element right before revealing it, and only if it is still below the fold.
 */

export type Gsap = typeof import('gsap').gsap;
export type ScrollTriggerT = typeof import('gsap/ScrollTrigger').ScrollTrigger;
export type MotionLib = { gsap: Gsap; ScrollTrigger: ScrollTriggerT };

let libPromise: Promise<MotionLib> | null = null;
let interacted = false;
const waiting = new Set<() => void>();
const EVENTS = ['pointerdown', 'touchstart', 'keydown', 'scroll', 'wheel', 'mousemove'] as const;

export function loadMotion(): Promise<MotionLib> {
  if (!libPromise) {
    libPromise = Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([g, st]) => {
      g.gsap.registerPlugin(st.ScrollTrigger);
      g.gsap.config({ nullTargetWarn: false });
      // Sections render lazily (content-visibility) and images load late: when the page height
      // changes, recompute every trigger position.
      let t: ReturnType<typeof setTimeout> | undefined;
      let lastH = document.documentElement.scrollHeight;
      new ResizeObserver(() => {
        const h = document.documentElement.scrollHeight;
        if (Math.abs(h - lastH) < 2) return;
        lastH = h;
        clearTimeout(t);
        t = setTimeout(() => st.ScrollTrigger.refresh(), 150);
      }).observe(document.body);
      return { gsap: g.gsap, ScrollTrigger: st.ScrollTrigger };
    });
  }
  return libPromise;
}

function onFirstInteraction() {
  if (interacted) return;
  interacted = true;
  EVENTS.forEach((ev) => window.removeEventListener(ev, onFirstInteraction, true));
  waiting.forEach((fn) => fn());
  waiting.clear();
}

/** Calls `fn` once the visitor has interacted with the page (immediately if they already have). */
export function whenInteracted(fn: () => void): () => void {
  if (interacted || libPromise) {
    fn();
    return () => {};
  }
  if (waiting.size === 0) {
    EVENTS.forEach((ev) => window.addEventListener(ev, onFirstInteraction, { capture: true, passive: true }));
  }
  waiting.add(fn);
  return () => waiting.delete(fn);
}

export function prefersReducedMotion(): boolean {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** True when the element is rendered and the visitor has not seen it yet (below the fold). */
export function isBelowFold(el: Element, margin = 0.92): boolean {
  const r = el.getBoundingClientRect();
  return r.width > 0 && r.height > 0 && r.top > window.innerHeight * margin;
}

/**
 * Runs `setup` with GSAP scoped to `ref` once GSAP is available. Everything created inside is
 * reverted on unmount (gsap.context). Skipped entirely for reduced-motion visitors.
 */
export function useMotion(
  ref: RefObject<HTMLElement | null>,
  setup: (lib: MotionLib, root: HTMLElement) => void | (() => void),
  deps: unknown[] = []
) {
  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;
    let cancelled = false;
    let ctx: { revert: () => void } | undefined;
    let extra: void | (() => void);
    let idle: number | undefined;

    const stop = whenInteracted(() => {
      loadMotion().then((lib) => {
        if (cancelled) return;
        const run = () => {
          if (cancelled) return;
          ctx = lib.gsap.context(() => {
            extra = setup(lib, root);
          }, root);
        };
        const w = window as any;
        idle = w.requestIdleCallback ? w.requestIdleCallback(run, { timeout: 400 }) : window.setTimeout(run, 30);
      });
    });

    return () => {
      cancelled = true;
      stop();
      const w = window as any;
      if (idle !== undefined) (w.cancelIdleCallback ? w.cancelIdleCallback(idle) : clearTimeout(idle));
      if (typeof extra === 'function') extra();
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
