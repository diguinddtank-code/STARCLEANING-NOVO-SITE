"use client";

import { Trees, Sparkles } from 'lucide-react';
import RegionalDeepCleanPage from '@/components/RegionalDeepCleanPage';

export default function JohnsIslandClient() {
  return (
    <RegionalDeepCleanPage
      citySlug="johns-island"
      cityName="Johns Island"
      badgeIcon={Trees}
      badgeText="Farmland to Waterfront: Johns Island, SC"
      headlineLead="Deep Cleaning for"
      headlineAccent="Johns Island's"
      headlineTail="Farms, Fields & New Builds"
      subheadline="From farmland dust off Maybank Highway to fresh drywall grit in the new neighborhoods near the Angel Oak, we clear what a regular mop pass leaves behind on Johns Island's larger properties."
      heroPrimaryCta="Book a Deep Clean"
      heroImage={{ src: 'https://i.imgur.com/gpqI75Lh.jpg', alt: 'Pristine deep cleaning result' }}
      heroCardBadge="Acreage-Ready Standard"
      heroCardQuote="They didn't blink at our long gravel driveway or the size of the house — just got to work."
      heroCardAuthor="Caroline B., River Road"
      trustLine="5.0 Star Rated"
      seoEyebrow="A Different Kind of Dirt"
      seoHeadline="Farm Roads and Fresh Construction Don't Mix Well With a Quick Mop"
      seoParagraphs={[
        "Johns Island doesn't clean like a subdivision three miles into town. Long gravel and dirt driveways off **River Road** and **Maybank Highway** track in a fine, gritty dust that settles into entryway floors and HVAC returns faster than pavement dust does.",
        "New construction adds a second problem. With subdivisions still going up near the **Angel Oak** and along the Kiawah/Seabrook corridor, plenty of finished homes still have drywall dust hiding in vents, light fixtures, and cabinet interiors a year after closing.",
        "Because so many properties here sit on multiple acres instead of a quarter-acre lot, we scope your visit around actual square footage and layout — a farmhouse with three times the floor space of a townhome needs more than a townhome-sized crew and timeline.",
      ]}
      seoImage={{ src: 'https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg?semt=ais_user_personalization&w=740&q=80', alt: 'Deep cleaning in progress' }}
      deepChecklistColumns={[
        {
          title: 'Entryway & Farm-Dust Treatment (Deep)',
          icon: Trees,
          items: [
            'Mudroom and entryway floors deep-scrubbed for embedded grit',
            'AC vents and returns vacuumed of fine construction/field dust',
            'Window sills and tracks cleared of dust buildup',
            'Baseboards hand-wiped along main walkways',
            'Rug and mat undersides vacuumed and shaken out',
            'Light fixtures and ceiling fans dusted throughout',
          ],
        },
        {
          title: 'Whole-Property Detailing (Deep)',
          icon: Sparkles,
          items: [
            'Cabinet interiors checked and wiped for leftover drywall dust',
            'Kitchen and bathroom grout scrubbed line by line',
            'Interior windows cleaned inside and out',
            'Closets and pantry shelving vacuumed and wiped',
            'Ceiling fan blades hand-washed of dust buildup',
            'Extra room-to-room time scoped for larger square footage',
          ],
        },
      ]}
      reviews={[
        {
          text: "We live on a few acres off River Road and most cleaners don't want to make the drive or deal with the size of the place. Star Cleaning SC never blinks, and our farmhouse has never looked better.",
          author: 'Caroline B.',
          location: 'River Road',
        },
        {
          text: "Our new build near the Angel Oak still had construction dust in the vents a year after we moved in. They finally got it all out during a deep clean. Wish we'd called sooner.",
          author: 'Patrick M.',
          location: 'near Angel Oak',
        },
        {
          text: "We have a waterfront property on the Stono River and needed a team we could trust with the place while we're away. They're reliable, thorough, and always lock up properly.",
          author: 'Diane R.',
          location: 'Stono River',
        },
      ]}
      faqEyebrow="Johns Island SC FAQ"
      faqs={[
        {
          q: 'Do you charge more for larger properties or homes on multiple acres?',
          a: "Pricing is based on your home's actual square footage and condition rather than a flat per-visit rate, so a larger Johns Island property is quoted accordingly during your free quote request rather than assumed to fit a standard suburban price.",
        },
        {
          q: 'Can you remove leftover construction dust from a home we moved into over a year ago?',
          a: 'Yes, this is one of our most common Johns Island requests. Drywall dust settles into vents, light fixtures, and cabinet interiors and often gets missed by move-in cleaning. Our deep clean specifically targets those spots even long after construction ended.',
        },
        {
          q: 'Do you travel to rural properties off River Road and Maybank Highway?',
          a: 'Yes, we regularly service homes throughout Johns Island, including properties on gravel or dirt driveways well off the main road. Just let us know your access details when booking.',
        },
        {
          q: 'How do you handle homes near working farmland or unpaved roads?',
          a: 'We add extra vacuuming and wiping passes at entryways, window sills, and vents, since farm-adjacent and unpaved-road homes accumulate fine dust faster than homes on paved, in-town streets.',
        },
      ]}
      ctaHeadline="A Clean That Matches Your Acreage, Not a Townhome"
      ctaSubtext="Book a deep clean for your Johns Island farmhouse, new build, or waterfront home in under 2 minutes."
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
          { label: 'Deep Cleaning Mount Pleasant SC', href: '/deep-cleaning-mount-pleasant-sc' },
        ],
        other: [
          { label: 'Move-In/Out Turnkeys', href: '/services/move-in-move-out-cleaning' },
          { label: 'Post-Construction Cleaning', href: '/services/post-construction-cleaning' },
          { label: 'Residential Home Cleaning', href: '/services/residential-cleaning' },
        ],
      }}
    />
  );
}
