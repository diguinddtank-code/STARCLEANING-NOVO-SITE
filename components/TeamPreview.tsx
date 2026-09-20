import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Scoped to this section only, matching the editorial serif already used on /our-team.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-playfair-team',
});

const TrustLine = () => (
  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500">
    <span>Local team</span>
    <span className="text-slate-300">|</span>
    <span>Background-checked</span>
    <span className="text-slate-300">|</span>
    <span>18+ years of experience</span>
  </div>
);

const Eyebrow = () => (
  <div className="flex items-center gap-3 mb-6">
    <span className="w-8 h-px bg-star-blue"></span>
    <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Our Team</span>
  </div>
);

const headlineClass = `${playfair.variable} font-[family-name:var(--font-playfair-team)] font-medium leading-[1.1] text-slate-900`;

const Copy = () => (
  <p className="text-slate-600 leading-relaxed max-w-md mb-5 lg:mb-8">
    Our team is the heart of Star Cleaning SC. We&apos;re a local group of trained, background-checked professionals who take pride in caring for your home like it&apos;s our own.
  </p>
);

const CTA = () => (
  <Link
    href="/our-team"
    className="inline-flex items-center gap-2 bg-star-blue hover:bg-star-dark text-white px-7 py-3.5 rounded-full font-semibold text-sm transition-all transform hover:-translate-y-0.5"
  >
    Meet Our Team <ArrowRight className="w-4 h-4" />
  </Link>
);

// House wall backdrop the team stands "in front of".
const RealBackdrop = () => (
  <div className="absolute inset-0 overflow-hidden bg-[#f6f4f1]">
    <Image
      src="/images/background-team.png"
      alt=""
      fill
      aria-hidden="true"
      className="object-cover object-[0%_35%] scale-[1.85]"
    />
    <div className="absolute inset-0 bg-white/15"></div>
  </div>
);

const EditorialDetail = () => (
  <p className="font-handwriting text-2xl text-star-blue/80 absolute top-10 right-12 text-right leading-snug">
    A Cleaner
    <br />
    Brighter Tomorrow
    <span className="block w-16 h-px bg-star-blue/30 mt-1 ml-auto"></span>
  </p>
);

const TeamPreview = () => {
  return (
    <section className="bg-white">
      {/* Desktop / tablet-landscape: split composition with organic curve */}
      <div className="hidden lg:block relative h-[660px] overflow-hidden">
        <RealBackdrop />

        <EditorialDetail />

        {/* Organic curve: white copy panel bleeding into the photograph */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 660"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 L380,0 C460,85 440,176 400,245 C450,298 460,383 400,436 C440,500 460,575 380,660 L0,660 Z"
            fill="white"
          />
        </svg>

        {/* Photo: large and pulled left so it overlaps the curve for a layered feel */}
        <Image
          src="/images/fullteam.png"
          alt="Mariana and the Star Cleaning SC team standing together in matching uniforms"
          width={1774}
          height={887}
          priority
          className="absolute bottom-0 z-10 h-auto object-contain lg:left-[46%] lg:w-[58%] xl:left-[40%] xl:w-[66%] 2xl:left-[35%] 2xl:w-[68%] max-w-[1080px]"
        />

        {/* Copy */}
        <div className="relative z-10 h-full flex items-center pl-16 xl:pl-24 pr-6">
          <div className="max-w-[360px] xl:max-w-[420px]">
            <Eyebrow />
            <h2 className={`${headlineClass} text-4xl sm:text-5xl lg:text-[3.25rem] mb-6`}>
              Real People.
              <br />
              Real Care.
              <br />
              <span className="text-star-blue">A Cleaner Home.</span>
            </h2>
            <Copy />
            <CTA />
            <div className="mt-10">
              <TrustLine />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile / tablet-portrait: left-aligned copy + a full-bleed portrait photo */}
      <div className="lg:hidden">
        <div className="px-6 sm:px-10 pt-10 pb-3">
          <Eyebrow />
          <h2 className={`${headlineClass} text-4xl mb-4`}>
            Real People.
            <br />
            Real Care.
            <br />
            <span className="text-star-blue">A Cleaner Home.</span>
          </h2>
          <Copy />
          <CTA />
          <div className="mt-4">
            <TrustLine />
          </div>
        </div>

        {/* Portrait team photo. The source frame includes a lot of blank ceiling/wall
            above the group, so it's cropped to an aspect ratio that starts right where
            the team stands instead of rendering that dead space at full height. */}
        <div className="relative w-full aspect-[4/5] overflow-hidden">
          <Image
            src="/images/teammobile.png"
            alt="Mariana and the Star Cleaning SC team standing together in matching uniforms"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamPreview;
