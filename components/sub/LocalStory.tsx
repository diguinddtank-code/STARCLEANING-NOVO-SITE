import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import Motion from '@/components/motion/Motion';
import { Eyebrow, Title } from './ui';

/** Turns **phrase** into a link (primary keyword → service page) and keeps the rest plain. */
function linkify(text: string, href?: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const label = part.slice(2, -2);
      return href ? (
        <Link key={i} prefetch={false} href={href} className="font-semibold text-star-blue underline decoration-star-blue/30 underline-offset-4 hover:decoration-star-blue">
          {label}
        </Link>
      ) : (
        <strong key={i}>{label}</strong>
      );
    }
    return part;
  });
}

/** Editorial local section: masked photo on one side, local copy + places on the other. */
export default function LocalStory({
  eyebrow,
  title,
  accent,
  paragraphs,
  linkHref,
  image,
  places,
  note,
  reverse = false,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  paragraphs: string[];
  linkHref?: string;
  image: { src: string; alt: string };
  places?: string[];
  note?: string;
  reverse?: boolean;
}) {
  return (
    <Motion as="section" className="cv bg-white py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        <div className={`relative lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
          <div data-anim="mask" className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-slate-100">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 38vw, 92vw" className="object-cover" />
          </div>
          {note && (
            <p data-anim="pop" data-delay="0.6" className="absolute -bottom-6 right-4 max-w-[15rem] -rotate-2 rounded-2xl bg-star-dark px-5 py-4 font-handwriting text-2xl leading-tight text-white shadow-xl sm:-right-6">
              {note}
            </p>
          )}
        </div>
        <div className="lg:col-span-7">
          <Eyebrow>{eyebrow}</Eyebrow>
          <Title lead={title} accent={accent} />
          <div data-anim="stagger" className="mt-8 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            {paragraphs.map((p, i) => (
              <p key={i}>{linkify(p, i === 0 ? linkHref : undefined)}</p>
            ))}
          </div>
          {places && places.length > 0 && (
            <ul data-anim="stagger" className="mt-8 flex flex-wrap gap-2">
              {places.map((p) => (
                <li key={p} className="inline-flex items-center gap-1.5 rounded-full bg-[#F7F4EF] px-4 py-2 text-sm font-semibold text-star-dark">
                  <MapPin className="h-3.5 w-3.5 text-star-blue" /> {p}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Motion>
  );
}
