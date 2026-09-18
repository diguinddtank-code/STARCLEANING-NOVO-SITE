"use client";

import { MapPin, Sparkles, Droplets } from 'lucide-react';
import RegionalDeepCleanPage from '@/components/RegionalDeepCleanPage';

export default function LadsonClient() {
  return (
    <RegionalDeepCleanPage
      citySlug="ladson"
      cityName="Ladson"
      badgeIcon={MapPin}
      badgeText="Lowcountry Suburban Hub: Ladson, SC"
      headlineLead="Veteran-Precision"
      headlineAccent="Deep Cleaning"
      headlineTail="for Ladson Residences"
      subheadline="The ultimate military-standard deep reset. Tailored for military families at Joint Base Charleston and gorgeous family homes in Hunter's Bend. No dust or grease survives."
      heroPrimaryCta="Book Instant Deep Reset"
      heroImage={{ src: 'https://i.imgur.com/gpqI75Lh.jpg', alt: 'Pristine deep cleaning result' }}
      heroCardBadge="Exchange Park Standard"
      heroCardQuote="Their military inspection level deep clean saved our relocation housing deposit. They scrubbed places others didn't touch."
      heroCardAuthor="SSG Andrew J., Joint Base Charleston"
      trustLine="Proudly Veteran Owned & Vetted"
      seoEyebrow="Military Relocation Vetted"
      seoHeadline="Deep Cleaning Built for PCS Moves & Suburban Ladson Lifestyles"
      seoParagraphs={[
        "Ladson occupies a strategic location in the **Charleston Lowcountry**, serving as a hub for both thriving family suburbs and critical military personnel from nearby **Joint Base Charleston**.",
        "With military PCS reassignment shifts, families face immense pressure to pass rigorous visual deep-cleaning inspections to secure security deposits and maintain housing standing.",
        "At **Star Cleaning SC**, we bring military veteran discipline directly to civilian and military housing. We understand that a basic surface wipe is insufficient. Our deep cleaning targets dried stains, baseboard scuffs, ceiling fan grease, and range-hood build-up with meticulous, professional-grade execution.",
      ]}
      seoImage={{ src: 'https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg?semt=ais_user_personalization&w=740&q=80', alt: 'Deep cleaning in progress' }}
      deepChecklistColumns={[
        {
          title: 'Kitchen & Wet Resets (Deep)',
          icon: Sparkles,
          items: [
            'Thorough hand-scrubbing of oven interiors & grease panels',
            'Cabinet exteriors steam-wiped top to bottom',
            'Sinks acid-washed to lift metal rust and water grease',
            'Tile backsplashes cleared of dense cooking oils',
            'Sanitation of kitchen and washing machine gaskets',
            'Disinfection of trash receptacles inside and out',
          ],
        },
        {
          title: 'Whole House Trim & Detailing (Deep)',
          icon: Droplets,
          items: [
            'Baseboards custom hand washed of black scuffs & dust',
            'Blinds and shutter slots individually detailed',
            'Ceiling fan blades washed of sticky black soil dust',
            'Power switchplates cleaned and sanitized',
            'A/C intake vents deeply vacuumed of construction silica',
            'Deep HEPA extraction across carpets and rug backings',
          ],
        },
      ]}
      reviews={[
        {
          text: "Relocating on military orders is stressful enough. We ordered their deep clean for PCS move-out housing and passed structural inspections first try without a single flag. Veteran standards are real!",
          author: 'Staff Sergeant Mike D.',
          location: 'Joint Base Charleston',
        },
        {
          text: "Our house in Hunter's Bend had clay dust from nearby neighborhoods. They detailed our baseboards, blinds, and cleaned the vents perfectly. Smells amazing without heavy synthetic odors.",
          author: 'Emily T.',
          location: "Hunter's Bend",
        },
        {
          text: "I hire them annually to deep clean my grandmother's home in Ladson. They are always professional, respect her belongings, and work with incredible attention to detail. Excellent team!",
          author: 'Daniel R.',
          location: 'Suburban Ladson',
        },
      ]}
      faqEyebrow="Ladson SC FAQ"
      faqs={[
        {
          q: 'Do you offer military discounts for PCS relocation deep cleans?',
          a: 'Yes, we are highly supportive of service members and veterans. In our Quote Builder or when calling us, mention your military association to receive our tailored appreciation package.',
        },
        {
          q: 'Does deep cleaning include removing scuffs on baseboard wood?',
          a: 'Yes. Our deep clean is comprehensive. We use professional chemical wedges and high-quality melamine pads to carefully lift dark scuffs and mud stains from baseboards and doors.',
        },
        {
          q: 'Do you deep clean carpets or just vacuum?',
          a: 'As part of deep cleaning, we utilize powerful, high-efficiency HEPA-filtered vacuum extraction to lift fine dust and allergens. For commercial-grade liquid carpet extraction or steam washing, toggle those add-on features on our dynamic quote form.',
        },
        {
          q: 'Are the cleaning formulas safe for small kids and pets?',
          a: 'Yes, absolutely. We use eco-friendly, non-toxic, and chemical-balanced solutions. Your kids can safely play on the flooring right after we complete our process.',
        },
      ]}
      ctaHeadline="Ready to Secure Your Inspection Walkthrough?"
      ctaSubtext="Don't get stressed by heavy inspections or months of accumulated clay dust. Book our verified veteran-led crew in under 2 minutes online."
      ctaButtonText="Configure Online Quote"
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
