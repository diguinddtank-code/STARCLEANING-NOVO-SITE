"use client";

import { MapPin, Sparkles, Droplets } from 'lucide-react';
import RegionalDeepCleanPage from '@/components/RegionalDeepCleanPage';

export default function CharlestonClient() {
  return (
    <RegionalDeepCleanPage
      citySlug="charleston"
      cityName="Charleston"
      badgeIcon={MapPin}
      badgeText="Lowcountry Hub: Charleston, SC"
      headlineLead="Military-Precision"
      headlineAccent="Deep Cleaning"
      headlineTail="for Charleston Homes"
      subheadline="From historic Antebellum estates downtown to modern coastal builds in West Ashley. We hunt down humidity-born mold, stubborn pollen, and deep salt-air dust with unmatched discipline."
      heroPrimaryCta="Book Instant Deep Clean"
      heroImage={{ src: 'https://i.imgur.com/gpqI75Lh.jpg', alt: 'Pristine deep cleaning result' }}
      heroCardBadge="Holy City Standard"
      heroCardQuote="Their deep cleaning made my original pine floors downtown look newly restored."
      heroCardAuthor="Sarah G., South of Broad"
      trustLine="5.0 Star Rated (350+ reviews)"
      seoEyebrow="The Science of Local Dirt"
      seoHeadline="Why Standard Dusting Fails in Charleston's Coastal Climate"
      seoParagraphs={[
        "Living in the **Lowcountry** means dealing with a beautiful but challenging environment. High year-round humidity works like glue, turning microscopic salt residue, heavy azalea pollen, and pet dander into sticky grime that clings to baseboards, ceiling fans, and vintage moldings.",
        "Standard maid services simply wipe over the surfaces, pushing dirt into the corners. At **Star Cleaning SC**, we address Charleston's unique environmental factors. We utilize deep HEPA-filtered vacuuming to pull humidity-bound allergens from delicate carpets, scrub coastal mildew from bathroom grout line by line, and remove greasy salt residue from kitchen panels.",
        "Whether your home sits South of Broad, in West Ashley, or near Daniel Island, we tailor our equipment to your building materials—protecting old heart-pine flooring, original brass fixtures, and modern quartz finishes with equal master-precision.",
      ]}
      seoImage={{ src: '/images/deep-cleaning.webp', alt: 'Gloved hands deep cleaning a kitchen countertop and stovetop with cleaning spray' }}
      deepChecklistColumns={[
        {
          title: 'Kitchen & Wet Areas (Deep)',
          icon: Sparkles,
          items: [
            'Thorough hand-wipe of top & bottom cabinet exteriors',
            'Degreasing & polish of oven interior, hood & racks',
            'Full sanitation of dishwasher exterior & seal lines',
            'Acid-scrub of kitchen backsplashes to remove grout oils',
            'Inside microwave detailing and steam reset',
            'Dusting of refrigerator ventilation coils',
          ],
        },
        {
          title: 'Whole House Detailing (Deep)',
          icon: Droplets,
          items: [
            'Wiping and hand-washing of all wooden baseboards',
            'Individual wipe of blinds, shutters, and window frames',
            'Wipe-down of solid wood internal doors and framing panels',
            'Ceiling fan blades hand-washed to capture thick black soot',
            'Scrubbing of heater/AC vents & intake grilles',
            'Lifting & vacuuming of undersides of light furniture and rugs',
          ],
        },
      ]}
      reviews={[
        {
          text: "Scheduling a deep clean for our pre-listing marketing South of Broad was a lifesaver. The baseboards were spotless and they managed to scrub the pollen layer completely off our historic window framings. Our buyer was incredibly pleased!",
          author: 'Christopher M.',
          location: 'Historic District',
        },
        {
          text: "Coming home to our house in West Ashley after Star Cleaning SC did their deep clean was amazing. With two black labs, the hair and dander were out of control, but they used pet-safe chemical formulas and literally zero dust was left behind!",
          author: 'Jessica T.',
          location: 'West Ashley',
        },
        {
          text: "I hire them for turnover deep cleaning of our vacation properties downtown. Excellent attention, clean baseboards, prompt veteran timing, and zero issues with property owners. 10/10 cleaning discipline.",
          author: 'Ronald D.',
          location: 'Short-Term Rental Manager',
        },
      ]}
      faqEyebrow="Charleston SC FAQ"
      faqs={[
        {
          q: 'How do you handle delicate or historic materials (old pine, original glass)?',
          a: 'Charleston is known for historic craftsmanship. We use neutral-pH cleaners of professional quality instead of harsh acidic or basic products. Original heart pine is mopped with highly wrung-out luxury microfibers, and vintage brass fixtures are detailed with non-abrasive soft cloths.',
        },
        {
          q: 'Are the cleaning solvents safe for local family pets?',
          a: 'Absolutely. We love dogs and cats, and Charleston is a major pet city. All chemical solvents used are strictly pet-safe and eco-friendly. No toxic fumes, no dangerous residues.',
        },
        {
          q: 'Do I need to be present at home during the deep clean?',
          a: 'No, you do not need to be present. Most customers provide key boxes or smart lock door codes. All our team members are rigorously vetted, background-checked, and supervised for total reliability.',
        },
        {
          q: 'What is the typical cost for a true Deep House Clean in Charleston?',
          a: 'Pricing is calculated via our dynamic Quote Builder starting from basic configurations. The price reflects the exact size (sq ft), quantity of bathrooms, pet hair burden, and local cleaning density requests. There are absolutely no hidden fees.',
        },
      ]}
      ctaHeadline="Ready to Reclaim Your Weekend in the Holy City?"
      ctaSubtext="Don't waste beautiful Saturdays scrubbing trim and baseboards. Book our background-checked crew in under 2 minutes and let us make your residence shine."
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
