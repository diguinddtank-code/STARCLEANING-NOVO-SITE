"use client";

import { MapPin, Sparkles, Droplets } from 'lucide-react';
import RegionalDeepCleanPage from '@/components/RegionalDeepCleanPage';

export default function SummervilleClient() {
  return (
    <RegionalDeepCleanPage
      citySlug="summerville"
      cityName="Summerville"
      badgeIcon={MapPin}
      badgeText="Flowertown Core: Summerville, SC"
      headlineLead="Deep Cleaning Specialists In"
      headlineAccent="Summerville, SC"
      headlineTail=""
      subheadline="Tackling heavy pine pollen crusts, clay residue, and deep construction dust across Nexton, Cane Bay Plantation, and historic Azalea Park neighborhoods with dedicated precision."
      heroPrimaryCta="Schedule Your Deep Clean"
      heroImage={{ src: '/images/clean-living-room.jpg', alt: 'Bright, tidy living room after a Star Cleaning SC deep clean' }}
      heroCardBadge="Cane Bay Standards"
      heroCardQuote="The air vents and blinds had thick yellow pine pollen buildup. They meticulously sanitized everything!"
      heroCardAuthor="Robert L., Cane Bay Plantation"
      trustLine="Summerville Star Standard (5/5)"
      seoEyebrow="Summerville Env Factor"
      seoHeadline="Combatting Fine Clay Dust & Pine Pollen in Flowertown"
      seoParagraphs={[
        "Summerville, SC is beloved for its beautiful southern pines and gardens. However, these same pines generate massive amounts of **sticky yellow pollen** which penetrates standard window seals and settles into carpets, furniture upholstery, and air vents.",
        "Additionally, with immense residential growth in neighborhoods like **Nexton, Cane Bay, and Carnes Crossroads**, ongoing construction projects disperse extremely fine silica-rich clay dust that settles continuously inside nearby homes.",
        "Our deep cleaning process is specifically developed to target these local challenges. We don't just dust; we wash the pollen film off your blinds, scrub the clay tracking off door thresholds, and vacuum vents deep enough to purge micro-allergens completely.",
      ]}
      seoImage={{ src: '/images/deep-cleaning.webp', alt: 'Gloved hands deep cleaning a kitchen countertop and stovetop with cleaning spray' }}
      deepChecklistColumns={[
        {
          title: 'Kitchen & Wet Sanitization',
          icon: Sparkles,
          items: [
            'Oven interiors deep scrubbed and glass degreased',
            'Exhaust fan hoods stripped of cooking grease buildup',
            'Exterior of all kitchen drawers/cabinets hand scrubbed',
            'Grout steam-blasted & sealed to prevent moisture mold',
            'Microwaves inside and outside fully sterilized',
            'Sink drains disinfected of Lowcountry pest smells',
          ],
        },
        {
          title: 'Dust & Pollen Detailing',
          icon: Droplets,
          items: [
            'Every wooden baseboard hand washed to erase scuffs & pollen',
            'Window blinds individually wiped of embedded pine dust',
            'Ceiling fans hand wiped from trim to blade tips',
            'Detailed dusting of heavy crown moldings and doors',
            'HEPA vacuuming underneath sofas and low-standing furniture',
            'A/C vents vacuumed and sanitized of clay-dust particles',
          ],
        },
      ]}
      reviews={[
        {
          text: "Our new home in Nexton felt dusty even after the builders finished. We hired Star Cleaning SC for a top-to-bottom deep clean and they completely eliminated the fine drywall and clay residue. They are incredible!",
          author: 'Marcus V.',
          location: 'Nexton Subdivision',
        },
        {
          text: "As an asthma sufferer, springtime in Summerville is brutal. Star Cleans hand washed every speck of yellow pollen off my window sills and thoroughly scrubbed our air vent covers. I am finally breathing easy.",
          author: 'Diana K.',
          location: 'Historic District',
        },
        {
          text: "With three kids and constant sports mud, my tile grout gets black. Their deep cleaning scrubbed the grout lines to their original beige color in just a few hours. Military precision indeed!",
          author: 'Linda P.',
          location: 'Carnes Crossroads',
        },
      ]}
      faqEyebrow="Summerville SC FAQ"
      faqs={[
        {
          q: "What makes your cleaning service 'military-precision'?",
          a: 'Our roots are veteran-owned. We train our teams with strict protocols and high-efficiency checklists. Every corner is inspected including ceiling fans, vents, threshold panels, and plumbing hardware, ensuring zero oversight.',
        },
        {
          q: 'How frequently should a home in Summerville receive a deep clean?',
          a: 'To combat the local pollen and microclimate dust, we recommend an initial Deep Clean, followed by standard maintenance (weekly or bi-weekly), and a detailed Deep Reset at least once or twice a year.',
        },
        {
          q: 'Do you supply your own eco-friendly products?',
          a: "Yes. Our team arrives fully equipped with safe, professional solutions, HEPA-equipped vacuums, steam machines, and fresh microfiber rags. You don't have to provide clean sponges or chemicals.",
        },
        {
          q: 'Can I schedule a deep clean specifically before moving furniture in?',
          a: 'Absolutely. Our empty-home deep clean (often aligned with Move-In/Move-Out Turnkeys) is perfect to sanitize every cabinet interior and floorboard before your personal belongings are unpacked.',
        },
      ]}
      ctaHeadline="Claim Your Free Time & Let Us Do the Heavy Work"
      ctaSubtext="Enjoy walking along Hutchinson Square or dining out in Nexton Town Center while our background-checked crew works meticulously to restore your home."
      ctaButtonText="Get Your Free Estimate"
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
