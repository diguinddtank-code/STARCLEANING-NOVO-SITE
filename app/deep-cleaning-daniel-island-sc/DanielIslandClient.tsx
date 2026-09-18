"use client";

import { Gem, Sparkles } from 'lucide-react';
import RegionalDeepCleanPage from '@/components/RegionalDeepCleanPage';

export default function DanielIslandClient() {
  return (
    <RegionalDeepCleanPage
      citySlug="daniel-island"
      cityName="Daniel Island"
      badgeIcon={Gem}
      badgeText="Master-Planned Community: Daniel Island, SC"
      headlineLead="Deep Cleaning for"
      headlineAccent="Daniel Island's"
      headlineTail="Finest Homes"
      subheadline="Custom cabinetry, natural stone, and wide-plank hardwood need a different touch than a standard maid service brings. We coordinate gate and HOA access and treat every surface the way a high-end home deserves."
      heroPrimaryCta="Book a Deep Clean"
      heroImage={{ src: 'https://i.imgur.com/gpqI75Lh.jpg', alt: 'Pristine deep cleaning result' }}
      heroCardBadge="White-Glove Standard"
      heroCardQuote="They treated our quartzite counters exactly the way our stone installer told us to."
      heroCardAuthor="Margaret W., Smythe Park"
      trustLine="5.0 Star Rated"
      seoEyebrow="Why Standard Products Fall Short"
      seoHeadline="Your Countertops Weren't Built for Bleach and All-Purpose Spray"
      seoParagraphs={[
        "Most general-purpose cleaners are formulated for laminate and ceramic tile, not the honed marble, quartzite, and wide-plank white oak common in Daniel Island's newer builds near Smythe Park and the golf courses. Acidic or abrasive products etch stone finishes and dull hardwood sealant on contact.",
        "We use pH-neutral, stone-safe solutions and hand-detail custom cabinetry instead of running a spray bottle across every surface the same way. Grass clippings and pine straw tracked in from golf-course-adjacent yards get swept and vacuumed before they scratch finished floors.",
        "We also handle the logistics that come with island living: coordinating with your **HOA office** or gate attendant for access, and working discreetly around a schedule if you're often away near **Credit One Stadium** or traveling for work.",
      ]}
      seoImage={{ src: 'https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg?semt=ais_user_personalization&w=740&q=80', alt: 'Deep cleaning in progress' }}
      deepChecklistColumns={[
        {
          title: 'Stone & Custom Surfaces (Deep)',
          icon: Gem,
          items: [
            'Natural stone counters cleaned with pH-neutral, stone-safe solution',
            'Custom cabinetry hand-wiped, hardware polished without stripping finish',
            'Wide-plank hardwood cleaned with manufacturer-safe products',
            'Kitchen island and backsplash grout detailed without abrasive scrubbing',
            'Glass shower enclosures cleaned to a streak-free finish',
            'Light fixtures and chandeliers dusted by hand',
          ],
        },
        {
          title: 'Whole-Home Detailing (Deep)',
          icon: Sparkles,
          items: [
            'Baseboards and trim hand-wiped throughout',
            'Ceiling fans and high fixtures dusted from a ladder, not a pole',
            'Interior windows and sills cleaned inside and out',
            'Entryway swept and vacuumed for tracked-in grass and pine straw',
            'Closets and built-in shelving vacuumed and wiped',
            'AC vents and returns vacuumed',
          ],
        },
      ]}
      reviews={[
        {
          text: "We just had quartzite installed and were nervous about who we let clean it. They treated our counters exactly the way our stone installer told us to and even asked about the sealant before starting.",
          author: 'Margaret W.',
          location: 'Smythe Park',
        },
        {
          text: "Our house backs to the golf course and grass clippings used to get tracked onto the hardwood constantly. They started doing a proper entryway sweep before mopping and the floors have held up so much better.",
          author: 'Robert K.',
          location: 'Island Park Drive',
        },
        {
          text: "We travel constantly for work and needed a crew our HOA would actually let through the gate without us being home. They handled the visitor registration every time without a single issue.",
          author: 'Christine L.',
          location: 'near Credit One Stadium',
        },
      ]}
      faqEyebrow="Daniel Island SC FAQ"
      faqs={[
        {
          q: 'Can you get through our HOA gate or guard station without us being home?',
          a: 'Yes. We regularly coordinate with HOA offices and gate attendants ahead of a scheduled visit. Just provide any required visitor registration form, code, or advance-notice requirement when you book, and we handle the rest.',
        },
        {
          q: 'Are your cleaning products actually safe for natural stone and custom hardwood?',
          a: 'Yes. We use pH-neutral, stone-safe solutions on marble, quartzite, and granite, and manufacturer-appropriate products on sealed hardwood. We avoid vinegar, bleach, and other acidic or abrasive cleaners that can etch stone or strip wood finish over time.',
        },
        {
          q: 'Do you offer discreet or white-glove service for high-end homes?',
          a: "Yes, this is standard for our Daniel Island clients. Our background-checked team works quietly and respectfully around your belongings, and we're comfortable being trusted with a home while the owner is traveling.",
        },
        {
          q: 'How do you handle grass clippings and pine straw tracked in from golf-course-adjacent yards?',
          a: 'We sweep and vacuum entryways and mudrooms before mopping, rather than pushing debris around with a wet mop, which is what scratches finished hardwood over time. Homes backing onto a course get extra attention at the entry points during every visit.',
        },
      ]}
      ctaHeadline="A Standard Worthy of Your Island Home"
      ctaSubtext="Book a deep clean for your Daniel Island home. We coordinate HOA and gate access and treat stone, hardwood, and custom finishes the right way."
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
          { label: 'Deep Cleaning Johns Island SC', href: '/deep-cleaning-johns-island-sc' },
          { label: 'Deep Cleaning Mount Pleasant SC', href: '/deep-cleaning-mount-pleasant-sc' },
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
