"use client";

import { Waves, Sparkles } from 'lucide-react';
import RegionalDeepCleanPage from '@/components/RegionalDeepCleanPage';

export default function JamesIslandClient() {
  return (
    <RegionalDeepCleanPage
      citySlug="james-island"
      cityName="James Island"
      badgeIcon={Waves}
      badgeText="Marsh & Barrier Island: James Island, SC"
      headlineLead="Deep Cleaning for"
      headlineAccent="Sand, Salt & Sun"
      headlineTail="on James Island"
      subheadline="From Riverland Drive to the Folly Beach corridor, we clear tracked-in sand, salt film, and marsh humidity out of floors, fixtures, and vents that a regular mop pass leaves behind."
      heroPrimaryCta="Book a Deep Clean"
      heroImage={{ src: '/images/clean-living-room.jpg', alt: 'Bright, tidy living room after a Star Cleaning SC deep clean' }}
      heroCardBadge="Sand-Free Standard"
      heroCardQuote="They got sand out of grout lines I didn't think would ever come clean."
      heroCardAuthor="Bethany R., Riverland Terrace"
      trustLine="5.0 Star Rated"
      seoEyebrow="Living This Close to the Water"
      seoHeadline="Regular Mopping Doesn't Beat Folly Beach Sand"
      seoParagraphs={[
        "Every trip to Folly Beach or the county park comes home with you, whether it's in a beach bag, a dog's paws, or the tread of a pair of flip-flops. Fine sand works into grout lines and rug fibers within days, and a normal vacuum pass only lifts what's sitting on the surface.",
        "Salt air adds a second layer most inland cleaning crews never deal with. It leaves a faint film on bathroom fixtures, window tracks, and stainless appliances that looks like water spots until you try to wipe it off with a dry cloth. We use a mineral-cutting solution on those surfaces instead.",
        "Add in the marsh-side humidity along **Riverland Drive** and near **James Island County Park**, and bathroom grout darkens faster here than it would three miles inland. Our deep clean treats that grout on every visit, not as an upsell.",
      ]}
      seoImage={{ src: '/images/deep-cleaning.webp', alt: 'Gloved hands deep cleaning a kitchen countertop and stovetop with cleaning spray' }}
      deepChecklistColumns={[
        {
          title: 'Sand & Salt Treatment (Deep)',
          icon: Waves,
          items: [
            'Entryway and mudroom floors deep-scrubbed for embedded sand',
            'Grout lines treated for salt-air discoloration',
            'Bathroom and kitchen fixtures de-filmed with mineral-cutting solution',
            'Window tracks and sills cleared of crusted salt residue',
            'Rug and mat undersides vacuumed and shaken out',
            'Stainless steel appliances polished streak-free',
          ],
        },
        {
          title: 'Whole-Home Detailing (Deep)',
          icon: Sparkles,
          items: [
            'Baseboards and door frames hand-wiped throughout',
            'Ceiling fans washed to remove humidity-caught dust',
            'Interior windows and sills cleaned inside and out',
            'Cabinet exteriors wiped of humidity residue',
            'AC vents and returns vacuumed for marsh-driven dust',
            'Closets and shelving vacuumed and wiped',
          ],
        },
      ]}
      reviews={[
        {
          text: "We're two blocks off Riverland Terrace and sand gets everywhere no matter how careful the kids are. They got sand out of grout lines I didn't think would ever come clean.",
          author: 'Bethany R.',
          location: 'Riverland Terrace',
        },
        {
          text: "I run a rental two minutes from Folly Beach and salt film was building up on the shower glass no matter what I sprayed on it. Their crew knew exactly what to use and it hasn't come back.",
          author: 'Todd S.',
          location: 'Folly Beach Rental Host',
        },
        {
          text: "Our house backs up to the marsh and the grout was going gray within months of a normal clean. Since switching to their deep clean every quarter, it's stayed the right color.",
          author: 'Nicole A.',
          location: 'near James Island County Park',
        },
      ]}
      faqEyebrow="James Island SC FAQ"
      faqs={[
        {
          q: 'How do you get sand out of hardwood floors and area rugs?',
          a: 'We start with a HEPA-filtered vacuum pass to lift loose sand before it gets ground into the finish, then hand-wipe grout lines and floor edges where sand collects. Rugs get flipped and vacuumed on both sides, not just the top.',
        },
        {
          q: 'Does salt air actually damage fixtures, or is that just cosmetic film?',
          a: 'Both. The visible film on chrome and glass is mostly cosmetic and comes off with the right mineral-cutting solution, but left untreated for months it can pit chrome finishes and dull glass shower doors permanently. Regular treatment prevents that.',
        },
        {
          q: 'Can you do a same-day turnover for a Folly Beach vacation rental?',
          a: 'Yes, this is one of our most common requests on the island. We coordinate around your checkout and check-in windows and can commit to a recurring same-day slot for hosts with a regular booking calendar.',
        },
        {
          q: 'How often should a coastal home get a deep clean compared to an inland home?',
          a: 'We generally recommend every 3 to 4 months for homes within a mile or two of the water, versus twice a year inland. Salt air and marsh humidity build up on fixtures and grout faster than dust does in a typical inland house.',
        },
      ]}
      ctaHeadline="Leave the Sand at the Door, Not on Your Floors"
      ctaSubtext="Book a coastal deep clean for your James Island home or rental in under 2 minutes. Background-checked crew, pet-safe products."
      ctaButtonText="Get Your Instant Quote"
      internalLinks={{
        hubs: [
          { label: 'Deep Cleaning Charleston SC', href: '/deep-cleaning-charleston-sc' },
          { label: 'Deep Cleaning Summerville SC', href: '/deep-cleaning-summerville-sc' },
          { label: 'Deep Cleaning Ladson SC', href: '/deep-cleaning-ladson-sc' },
        ],
        more: [
          { label: 'Deep Cleaning North Charleston SC', href: '/deep-cleaning-north-charleston-sc' },
          { label: 'Deep Cleaning Daniel Island SC', href: '/deep-cleaning-daniel-island-sc' },
          { label: 'Deep Cleaning Johns Island SC', href: '/deep-cleaning-johns-island-sc' },
          { label: 'Deep Cleaning Mount Pleasant SC', href: '/deep-cleaning-mount-pleasant-sc' },
        ],
        other: [
          { label: 'Vacation & Airbnb Cleanings', href: '/services/vacation-rental-airbnb-cleaning' },
          { label: 'Residential Home Cleaning', href: '/services/residential-cleaning' },
          { label: 'Move-In/Out Turnkeys', href: '/services/move-in-move-out-cleaning' },
        ],
      }}
    />
  );
}
