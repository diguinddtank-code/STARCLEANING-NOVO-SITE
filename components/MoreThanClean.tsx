import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';
import MomentsMarquee from './MomentsMarquee';
import MomentsDeck from './MomentsDeck';

// Quotes are verbatim excerpts of real Google reviews (see data/reviews.ts).
const gains = [
  {
    title: 'Your Saturdays',
    text: 'Beach days, ball games and slow mornings.',
    instead: 'scrubbing the shower',
    quote: '…they have been very happy to accommodate our ever changing schedule.',
    author: 'Mariah Eddins',
  },
  {
    title: 'Time with your family',
    text: 'Dinner, homework help and bedtime stories.',
    instead: 'mopping while the kids wait',
    quote: 'I was really struggling with keeping up with house work, feeling guilty about asking for help.',
    author: 'Elizabeth Rodriguez',
  },
  {
    title: 'Evenings to unwind',
    text: 'Come home to a fresh house, not a second shift.',
    instead: 'cleaning after a long day',
    quote: 'I came home to the most peaceful house.',
    author: 'Laura Larramore',
  },
  {
    title: 'Peace of mind',
    text: 'A background-checked, veteran-owned team in your home.',
    instead: 'wondering who you let in',
    quote: 'The cleaning team was so sweet, friendly, respectful, and efficient.',
    author: 'Lama Hop',
  },
];

const MoreThanClean: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#F7F4EF] py-16 text-slate-800 lg:py-24">
      {/* The pain, then the pivot (desktop: copy on the left, a deck of photos on the right) */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <ScrollReveal direction="up" className="lg:col-span-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-star-blue"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-star-blue">More than a clean home</span>
            </div>

            <h2 className="font-serif text-3xl font-medium leading-[1.12] tracking-tight text-star-dark sm:text-4xl lg:text-5xl">
              You&apos;re not behind on cleaning. <span className="italic text-star-blue">You&apos;re short on time.</span>
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 lg:text-lg">
              <p>
                Between work, school runs, practice and everything in between, free time is the first thing to go. And the weekend you promised yourself ends up in a bucket of suds.
              </p>
              <p>
                <strong className="font-bold text-star-dark">Star Cleaning SC does more than clean.</strong> We take the cleaning off your list so you can spend those hours on the people and the places you love. Charleston, Summerville and the Lowcountry have too much to offer to spend it with a mop.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="/quote"
                className="inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-star-blue px-8 py-4 text-base font-black text-white shadow-[0_12px_28px_-8px_rgba(0,74,173,0.55)] transition-all hover:-translate-y-0.5 hover:bg-star-dark max-sm:w-full"
              >
                Reclaim My Weekend
                <i className="fas fa-arrow-right text-sm"></i>
              </Link>
              <a
                href="tel:+18432979935"
                className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-bold text-star-blue transition-colors hover:text-star-dark max-sm:mx-auto"
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

      {/* What they get back: an editorial list, each line backed by a real customer */}
      <div className="mx-auto mt-14 max-w-6xl px-4 sm:px-6 lg:mt-20 lg:px-8">
        <ScrollReveal direction="up">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">What you get back</p>
        </ScrollReveal>

        <div className="border-b border-star-dark/15">
          {gains.map((g, i) => (
            <ScrollReveal key={g.title} direction="up" delay={i * 140} distance={36} duration={0.8} amount={0.3}>
              <article className="grid gap-3 border-t border-star-dark/15 py-6 sm:py-7 lg:grid-cols-12 lg:gap-8 lg:py-9">
                <div className="lg:col-span-4">
                  <h3 className="font-serif text-2xl font-medium leading-tight text-star-dark lg:text-[1.9rem]">{g.title}</h3>
                  <p className="mt-1.5 inline-block -rotate-1 font-handwriting text-[1.4rem] leading-none text-star-blue">
                    instead of <span className="line-through decoration-star-blue/50 decoration-2">{g.instead}</span>
                  </p>
                </div>

                <p className="text-base leading-relaxed text-slate-700 lg:col-span-3 lg:pt-1.5">{g.text}</p>

                <blockquote className="border-l-2 border-star-blue/30 pl-4 lg:col-span-5 lg:pt-0.5">
                  <p className="font-serif text-lg italic leading-snug text-slate-700">&ldquo;{g.quote}&rdquo;</p>
                  <footer className="mt-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                    {g.author} <span className="mx-1 font-normal text-slate-400">&middot;</span> Google review
                  </footer>
                </blockquote>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreThanClean;
