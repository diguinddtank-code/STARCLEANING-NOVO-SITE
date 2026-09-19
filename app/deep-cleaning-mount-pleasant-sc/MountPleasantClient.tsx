"use client";

import { Waves, Sparkles } from 'lucide-react';
import RegionalDeepCleanPage from '@/components/RegionalDeepCleanPage';

export default function MountPleasantClient() {
  return (
    <RegionalDeepCleanPage
      citySlug="mount-pleasant"
      cityName="Mount Pleasant"
      badgeIcon={Waves}
      badgeText="Old Village to Carolina Park: Mount Pleasant, SC"
      headlineLead="Deep Cleaning for"
      headlineAccent="Every Era of"
      headlineTail="Mount Pleasant Home"
      subheadline="From 1940s cottages in the Old Village to brand-new builds in Carolina Park and Park West, we treat marsh humidity and construction dust as two very different problems with two different fixes."
      heroPrimaryCta="Book a Deep Clean"
      heroImage={{ src: 'https://i.imgur.com/gpqI75Lh.jpg', alt: 'Pristine deep cleaning result' }}
      heroCardBadge="Old Village Standard"
      heroCardQuote="They understood our 1940s home needed a gentler touch than a new build right away."
      heroCardAuthor="Nancy P., Old Village"
      trustLine="5.0 Star Rated"
      seoEyebrow="A Suburb With Two Personalities"
      seoHeadline="One Cleaning Plan Doesn't Fit All of Mount Pleasant"
      seoParagraphs={[
        "Mount Pleasant isn't one neighborhood, it's dozens. A 1940s cottage near **Pitt Street** in the Old Village has original hardwood and plaster that don't respond well to harsh chemicals, while a five-year-old build in **Carolina Park** or **Park West** is more likely fighting leftover construction dust in the vents.",
        "Then there's the water. Homes closer to Shem Creek and the marsh deal with humidity that pushes mildew into bathroom grout and closets faster than homes further inland in Snee Farm or Dunes West. We adjust products and attention area by area instead of running the same generic checklist.",
        "Whether your home is decades old or brand new, we scope the visit around your specific finishes, square footage, and how close you sit to the water.",
      ]}
      seoImage={{ src: '/images/deep-cleaning.webp', alt: 'Gloved hands deep cleaning a kitchen countertop and stovetop with cleaning spray' }}
      deepChecklistColumns={[
        {
          title: 'Humidity & Mildew Treatment (Deep)',
          icon: Waves,
          items: [
            'Bathroom and kitchen grout treated for humidity-driven mildew',
            'Closet interiors wiped and deodorized for trapped moisture',
            'Window sills and tracks cleared of condensation residue',
            'Bathroom exhaust fan covers removed and washed',
            'Under-sink cabinets checked and wiped for dampness',
            'AC vents and returns vacuumed of marsh-driven dust',
          ],
        },
        {
          title: 'Whole-Home Detailing (Deep)',
          icon: Sparkles,
          items: [
            'Baseboards and trim hand-wiped with finish-appropriate products',
            'Ceiling fans and light fixtures dusted throughout',
            'Interior windows cleaned inside and out',
            'Cabinet interiors checked for leftover construction dust',
            'Closets and shelving vacuumed and wiped',
            'Entryway and mudroom floors deep-scrubbed',
          ],
        },
      ]}
      reviews={[
        {
          text: "We live in the Old Village and our 1940s home needs a gentler touch than a new build. They understood that immediately and never used anything too harsh on our original floors.",
          author: 'Nancy P.',
          location: 'Old Village',
        },
        {
          text: "Our house in Carolina Park backs up to a pond and the humidity is no joke. Since switching to biweekly cleanings, the musty smell we used to get in the closets is completely gone.",
          author: 'Brian K.',
          location: 'Carolina Park',
        },
        {
          text: "I run a short-term rental near Shem Creek and their turnover cleaning has been flawless for over a year. My guests always comment on how clean the place smells.",
          author: 'Samantha T.',
          location: 'Shem Creek',
        },
      ]}
      faqEyebrow="Mount Pleasant SC FAQ"
      faqs={[
        {
          q: 'Do you use different products on older, historic homes than on new construction?',
          a: 'Yes. Original hardwood, plaster, and vintage fixtures common in the Old Village get pH-neutral, non-abrasive products and hand-cleaning methods. Newer homes in Carolina Park or Park West can handle a broader range of standard cleaning products.',
        },
        {
          q: 'Can you help with mildew and musty smells in closets near the marsh?',
          a: 'Yes, this is one of our most common Mount Pleasant requests. We treat closet interiors, window sills, and bathroom grout for humidity-driven mildew, and can adjust visit frequency if your home is especially close to the water.',
        },
        {
          q: 'Do you clean new-construction homes in Carolina Park or Park West?',
          a: 'Yes, we regularly handle post-construction and first move-in cleans in these subdivisions, clearing fine drywall dust from vents, cabinets, and floors before families settle in.',
        },
        {
          q: 'Do you offer turnover cleaning for vacation rentals near Shem Creek?',
          a: 'Yes, we provide same-day turnover cleaning for short-term rentals near Shem Creek and the Isle of Palms connector, coordinated around your checkout and check-in windows.',
        },
      ]}
      ctaHeadline="A Clean That Understands Your Neighborhood"
      ctaSubtext="Book a deep clean for your Mount Pleasant home, whatever era it was built in."
      ctaButtonText="Get Your Instant Quote"
      internalLinks={{
        hubs: [
          { label: 'Deep Cleaning Charleston SC', href: '/deep-cleaning-charleston-sc' },
          { label: 'Deep Cleaning Summerville SC', href: '/deep-cleaning-summerville-sc' },
          { label: 'Deep Cleaning Ladson SC', href: '/deep-cleaning-ladson-sc' },
        ],
        more: [
          { label: 'Deep Cleaning North Charleston SC', href: '/deep-cleaning-north-charleston-sc' },
          { label: 'Deep Cleaning James Island SC', href: '/deep-cleaning-james-island-sc' },
          { label: 'Deep Cleaning Daniel Island SC', href: '/deep-cleaning-daniel-island-sc' },
          { label: 'Deep Cleaning Johns Island SC', href: '/deep-cleaning-johns-island-sc' },
        ],
        other: [
          { label: 'Residential Home Cleaning', href: '/services/residential-cleaning' },
          { label: 'Move-In/Out Turnkeys', href: '/services/move-in-move-out-cleaning' },
          { label: 'Vacation & Airbnb Cleanings', href: '/services/vacation-rental-airbnb-cleaning' },
        ],
      }}
    />
  );
}
