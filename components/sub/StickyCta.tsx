"use client";

import React, { useEffect, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { FACTS } from '@/lib/site';

/**
 * Phones only: a quote bar slides up once the hero is out of view, and gets out of the way
 * when the quote form itself is on screen.
 */
export default function StickyCta({ label = 'Get my free quote' }: { label?: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const book = document.getElementById('book');
    let pastHero = false;
    let atForm = false;
    const update = () => setShow(pastHero && !atForm);
    const onScroll = () => {
      pastHero = window.scrollY > window.innerHeight * 0.9;
      update();
    };
    const io = book
      ? new IntersectionObserver(([e]) => {
          atForm = e.isIntersecting;
          update();
        }, { rootMargin: '0px 0px -20% 0px' })
      : null;
    if (book && io) io.observe(book);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_-12px_rgba(0,40,85,0.25)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!show}
    >
      <div className="flex gap-2">
        <a href="#book" tabIndex={show ? 0 : -1} className="flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-star-blue py-3.5 text-[15px] font-bold text-white">
          {label} <ArrowRight className="h-4 w-4" />
        </a>
        <a href={`tel:${FACTS.phoneRaw}`} tabIndex={show ? 0 : -1} aria-label={`Call ${FACTS.phone}`} className="flex w-14 items-center justify-center rounded-full border border-slate-200 text-star-blue">
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}
