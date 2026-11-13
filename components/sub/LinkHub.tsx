import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import Motion from '@/components/motion/Motion';
import { Eyebrow, Title } from './ui';
import { blogBySlug } from '@/lib/blogIndex';

/** Internal links: related pages as chips, plus blog guides as cards. */
export default function LinkHub({
  title = 'Keep exploring',
  accent = 'the Lowcountry way.',
  groups,
  blog,
}: {
  title?: string;
  accent?: string;
  groups: { heading: string; links: { label: string; href: string }[] }[];
  blog: string[];
}) {
  const posts = blog.map(blogBySlug).filter(Boolean) as { slug: string; title: string; image: string }[];
  return (
    <Motion as="section" className="cv border-t border-slate-100 bg-white py-20 lg:py-28" aria-labelledby="explore-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Eyebrow>Related</Eyebrow>
        <Title id="explore-title" lead={title} accent={accent} />

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div data-anim="stagger" className="space-y-8 lg:col-span-5">
            {groups.map((g) => (
              <div key={g.heading}>
                <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{g.heading}</h3>
                <ul className="flex flex-wrap gap-2">
                  {g.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        prefetch={false}
                        href={l.href}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-[#FAFAF8] px-4 py-2 text-sm font-semibold text-star-dark transition-all hover:-translate-y-0.5 hover:border-star-blue hover:bg-star-blue hover:text-white"
                      >
                        {g.heading.toLowerCase().includes('area') && <MapPin className="h-3.5 w-3.5" />}
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {posts.length > 0 && (
            <div className="lg:col-span-7">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Guides from our blog</h3>
              <ul data-anim="stagger" className="grid gap-4 sm:grid-cols-3">
                {posts.map((p) => (
                  <li key={p.slug}>
                    <Link prefetch={false} href={`/blog/${p.slug}`} className="group block">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                        <Image src={p.image} alt="" fill sizes="(min-width: 640px) 18rem, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      </div>
                      <p className="mt-3 text-[15px] font-semibold leading-snug text-star-dark group-hover:text-star-blue">{p.title}</p>
                      <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-star-blue">
                        Read the guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Motion>
  );
}
