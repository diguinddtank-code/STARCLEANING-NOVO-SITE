import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import MomentsMarquee from './MomentsMarquee';
import MomentsDeck from './MomentsDeck';

const moments = [
  {
    icon: 'fa-sun',
    title: 'Your Saturdays',
    text: 'Beach days, ball games and slow mornings.',
    instead: 'Scrubbing the shower',
  },
  {
    icon: 'fa-heart',
    title: 'Time with your family',
    text: 'Dinner, homework help and bedtime stories.',
    instead: 'Mopping while the kids wait',
  },
  {
    icon: 'fa-couch',
    title: 'Evenings to unwind',
    text: 'Come home to a fresh house, not a second shift.',
    instead: 'Cleaning after a long day',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Peace of mind',
    text: 'A background-checked, veteran-owned team in your home.',
    instead: 'Wondering who you let in',
  },
];

const MoreThanClean: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-star-dark via-[#06356f] to-star-blue py-16 text-white lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-10 -z-10 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-96 w-96 rounded-full bg-blue-300/10 blur-3xl" />

      {/* The pain, then the pivot (desktop: copy on the left, a deck of photos on the right) */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal direction="up" className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-300"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">More than a clean home</span>
            </div>

            <h2 className="font-serif text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl">
              You&apos;re not behind on cleaning. <span className="italic text-blue-300">You&apos;re short on time.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-blue-50/90 lg:text-lg">
              <p>
                Between work, school runs, practice and everything in between, free time is the first thing to go. And the weekend you promised yourself ends up in a bucket of suds.
              </p>
              <p>
                <strong className="font-bold text-white">Star Cleaning SC does more than clean.</strong> We take the cleaning off your list so you can spend those hours on the people and the places you love. Charleston, Summerville and the Lowcountry have too much to offer to spend it with a mop.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/quote"
                className="inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-white px-8 py-4 text-base font-black text-star-blue shadow-[0_12px_30px_rgba(0,0,0,0.25)] transition-all hover:-translate-y-0.5 hover:bg-blue-50 max-sm:w-full"
              >
                Reclaim My Weekend
                <i className="fas fa-arrow-right text-sm"></i>
              </Link>
              <a
                href="tel:+18432979935"
                className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold text-blue-100 transition-colors hover:text-white max-sm:mx-auto"
              >
                <i className="fas fa-phone-alt text-xs"></i>
                Or text or call (843) 297-9935
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={120} className="hidden lg:col-span-6 lg:block">
            <MomentsDeck />
          </ScrollReveal>
        </div>
      </div>

      {/* Phones and tablets: the photos slide past in a loop */}
      <ScrollReveal direction="up" delay={80} className="mt-12 lg:hidden">
        <MomentsMarquee />
      </ScrollReveal>

      {/* What they get back, rising in one by one */}
      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:mt-20 lg:px-8">
        <ScrollReveal direction="up">
          <div className="mb-6 flex items-center gap-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">What you get back</p>
            <span className="h-px flex-1 bg-gradient-to-r from-white/30 to-transparent"></span>
          </div>
        </ScrollReveal>

        <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {moments.map((m, i) => (
            <ScrollReveal key={m.title} direction="up" delay={i * 160} distance={48} duration={0.8} amount={0.25} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.13] to-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)] sm:p-6">
                <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-1 -top-3 select-none font-serif text-[5.5rem] font-medium leading-none text-white/[0.06]"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-300/30 to-white/10 text-blue-100 ring-1 ring-white/20 transition-all duration-300 group-hover:bg-white group-hover:text-star-blue group-hover:ring-white">
                  <i className={`fas ${m.icon} text-lg`}></i>
                </div>

                <h3 className="relative mt-5 font-heading text-lg font-extrabold leading-snug text-white">{m.title}</h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-blue-100/90">{m.text}</p>

                <div className="relative mt-auto pt-5">
                  <div className="flex items-start gap-2 border-t border-white/10 pt-3.5 text-xs leading-snug text-blue-200/70">
                    <i className="fas fa-xmark mt-0.5 shrink-0 text-[10px]"></i>
                    <span>
                      <span className="font-semibold uppercase tracking-wider text-blue-200/50">Instead of </span>
                      <span className="line-through decoration-blue-200/40">{m.instead.toLowerCase()}</span>
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreThanClean;
