"use client";

import { PlaneTakeoff, Sparkles, Droplets } from 'lucide-react';
import RegionalDeepCleanPage from '@/components/RegionalDeepCleanPage';

export default function NorthCharlestonClient() {
  return (
    <RegionalDeepCleanPage
      citySlug="north-charleston"
      cityName="North Charleston"
      badgeIcon={PlaneTakeoff}
      badgeText="Rivers Ave Corridor: North Charleston, SC"
      headlineLead="Deep Cleaning Built"
      headlineAccent="Around Your Shift"
      headlineTail="in North Charleston"
      subheadline="From Park Circle bungalows to the apartment corridors off Rivers Ave and Ashley Phosphate, we book around Boeing and Joint Base rotations and leave rental units ready for the next tenant to walk in."
      heroPrimaryCta="Book a Deep Clean"
      heroImage={{ src: '/images/clean-living-room.jpg', alt: 'Bright, tidy living room after a Star Cleaning SC deep clean' }}
      heroCardBadge="Turnover Ready"
      heroCardQuote="They cleaned our unit same-day so we didn't lose a single day of rent between tenants."
      heroCardAuthor="Angela F., Property Manager, Park Circle"
      trustLine="5.0 Star Rated"
      seoEyebrow="Why We Get Called Back Here"
      seoHeadline="North Charleston Runs on Turnover and Shift Work"
      seoParagraphs={[
        "This isn't a slow-turnover suburb. Between the apartment complexes lining Ashley Phosphate and Rivers Ave, and the steady flow of tenants tied to Boeing and Joint Base Charleston assignments, units here get handed back and re-rented faster than almost anywhere else in the Lowcountry.",
        "That pace punishes standard cleaning. Carpet in a two-year rental holds more ground-in grit than a homeowner's floor holds in five, and a quick wipe-down before a new tenant's walkthrough leaves exactly the marks a leasing agent is trained to spot. We run the full deep-clean pass so the unit passes inspection the first time.",
        "For homeowners in **Park Circle** and the neighborhoods off **Dorchester Road**, the issue is usually timing: rotating shifts mean the house is empty at odd hours and full during ours. We schedule early-morning and evening slots because a 9-to-5 cleaning window doesn't fit a Boeing swing shift.",
      ]}
      seoImage={{ src: '/images/deep-cleaning.webp', alt: 'Gloved hands deep cleaning a kitchen countertop and stovetop with cleaning spray' }}
      deepChecklistColumns={[
        {
          title: 'Kitchen & Appliances (Deep)',
          icon: Sparkles,
          items: [
            'Cabinet interiors and shelf liners wiped and inspected for stains',
            'Oven interior, racks, and stovetop degreased and polished',
            'Refrigerator interior cleaned and deodorized (if left behind)',
            'Dishwasher gasket and filter sanitized',
            'Range hood and vent filter degreased',
            'Counter and backsplash grout scrubbed to original color',
          ],
        },
        {
          title: 'Move-Out Detail Pass (Deep)',
          icon: Droplets,
          items: [
            'Baseboards and door frames hand-wiped of scuff marks',
            'Closet interiors and shelving vacuumed and wiped',
            'Window tracks and sills cleared of built-up dust',
            'Light switch plates and outlet covers sanitized',
            'Air vent covers removed, washed, and reset',
            'Carpet edges and corners deep-vacuumed where furniture sat',
          ],
        },
      ]}
      reviews={[
        {
          text: "I manage six units off Ashley Phosphate and used to lose two or three days between tenants waiting on cleaning. Star Cleaning turns a unit around same-day now, including the oven and cabinet interiors.",
          author: 'Angela F.',
          location: 'Property Manager',
        },
        {
          text: "I work rotating 12-hour shifts near the base and could never get anyone to clean before 7am. They started showing up at 6:30 and I come home off a night shift to a spotless house. Small thing, huge difference.",
          author: 'Derek W.',
          location: 'Park Circle',
        },
        {
          text: "Our old townhome near the Tanger Outlets had years of grime built into the vents from being a rental. They pulled the covers off, washed them separately, and the airflow noticeably improved.",
          author: 'Priya N.',
          location: 'North Rhett',
        },
      ]}
      faqEyebrow="North Charleston SC FAQ"
      faqs={[
        {
          q: 'Do you clean apartment complexes and multi-unit buildings, or just single-family homes?',
          a: 'Both. A large share of our North Charleston work is apartment and townhome turnovers for property managers along Rivers Ave and Ashley Phosphate. We can quote a single unit or a standing arrangement for multiple units on a rolling schedule.',
        },
        {
          q: 'Can you schedule a cleaning before 8am or after 6pm for night-shift workers?',
          a: 'Yes. We keep early-morning and evening slots open specifically for clients working rotating shifts at Boeing or Joint Base Charleston. Ask for a shift-friendly slot when you request your quote.',
        },
        {
          q: "Will the deep clean pass a landlord's move-out inspection?",
          a: 'Our move-out deep clean covers the items leasing agents check first: cabinet and appliance interiors, baseboards, vent covers, and closet shelving. Most clients use it specifically to avoid deposit deductions, and we will re-clean any flagged area within 24 hours at no charge.',
        },
        {
          q: 'Do you have experience with construction or industrial dust from the I-26 corridor?',
          a: 'Yes, several of our recurring clients are near the industrial and warehouse zones along I-26 and Rivers Ave, where fine dust settles faster on window sills and vents. We adjust our vacuuming and dusting passes accordingly on those routes.',
        },
      ]}
      ctaHeadline="Between Tenants or Between Shifts, We Fit Your Clock"
      ctaSubtext="Book a turnover clean for your rental or a deep clean around your work schedule. Background-checked crew, in and out in one visit."
      ctaButtonText="Get Your Instant Quote"
      internalLinks={{
        hubs: [
          { label: 'Deep Cleaning Charleston SC', href: '/deep-cleaning-charleston-sc' },
          { label: 'Deep Cleaning North Charleston SC', href: '/deep-cleaning-north-charleston-sc' },
          { label: 'Deep Cleaning Summerville SC', href: '/deep-cleaning-summerville-sc' },
        ],
        more: [
          { label: 'Deep Cleaning Ladson SC', href: '/deep-cleaning-ladson-sc' },
          { label: 'Deep Cleaning James Island SC', href: '/deep-cleaning-james-island-sc' },
          { label: 'Deep Cleaning Daniel Island SC', href: '/deep-cleaning-daniel-island-sc' },
          { label: 'Deep Cleaning Johns Island SC', href: '/deep-cleaning-johns-island-sc' },
          { label: 'Deep Cleaning Mount Pleasant SC', href: '/deep-cleaning-mount-pleasant-sc' },
        ],
        other: [
          { label: 'Move-In/Out Turnkeys', href: '/services/move-in-move-out-cleaning' },
          { label: 'Vacation & Airbnb Cleanings', href: '/services/vacation-rental-airbnb-cleaning' },
          { label: 'Commercial Cleaning', href: '/services/commercial-office-cleaning' },
        ],
      }}
    />
  );
}
