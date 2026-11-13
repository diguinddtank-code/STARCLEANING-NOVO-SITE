import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Motion from '@/components/motion/Motion';
import SubHero from './SubHero';
import Ticker from './Ticker';
import QuickAnswer from './QuickAnswer';
import LocalStory from './LocalStory';
import ServiceCards from './ServiceCards';
import TeamPreview from '@/components/TeamPreview';
import ScrubStatement from './ScrubStatement';
import WhyBento from './WhyBento';
import RoomChecklist from './RoomChecklist';
import Steps from './Steps';
import ReviewWall from './ReviewWall';
import Faq from './Faq';
import LinkHub from './LinkHub';
import BookSection from './BookSection';
import StickyCta from './StickyCta';
import { Eyebrow, Title } from './ui';
import { locationsData, LOCATION_ORDER, inPlace, type LocationData } from '@/lib/locationsData';
import { servicesData, SERVICE_ORDER } from '@/lib/servicesData';
import { homeReviews } from '@/data/reviews';
import { abs, BUSINESS_ID, FACTS, breadcrumbSchema, faqSchema, webPageSchema, jsonLd } from '@/lib/site';

export const FAMILY_PHOTOS = [
  { src: '/images/more-than-clean-mom.webp', alt: 'A mom cooking with her daughter in a bright, clean kitchen' },
  { src: '/images/more-than-clean-story-time.webp', alt: 'A parent reading a story to a child in a tidy living room' },
  { src: '/images/more-than-clean-homework.webp', alt: 'A parent helping a child with homework at a clean table' },
  { src: '/images/hero-family-desktop.webp', alt: 'A family laughing with their dog in a spotless living room' },
];

export const cityAreaServed = (l: LocationData) => ({
  '@type': 'City',
  name: `${l.name}, SC`,
  sameAs: l.wiki,
  containedInPlace: { '@type': 'AdministrativeArea', name: `${l.county}, South Carolina` },
});

export function locationMetadata(slug: string): Metadata {
  const l = locationsData[slug];
  if (!l) return { title: 'Location not found' };
  const path = `/locations/${slug}`;
  return {
    title: { absolute: l.metaTitle },
    description: l.metaDescription,
    alternates: { canonical: abs(path) },
    openGraph: { title: l.metaTitle, description: l.metaDescription, url: abs(path), type: 'website', images: [{ url: abs(l.heroImage.src), alt: l.heroImage.alt }] },
    twitter: { card: 'summary_large_image', title: l.metaTitle, description: l.metaDescription, images: [abs(l.heroImage.src)] },
  };
}

export default function LocationPage({ slug }: { slug: string }) {
  const l = locationsData[slug];
  const idx = LOCATION_ORDER.indexOf(slug);
  const where = inPlace(l);
  const path = `/locations/${slug}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Service areas', path: '/locations' },
    { name: `${l.name}, SC`, path },
  ];
  const review = homeReviews.filter((r) => r.text.length > 90)[idx % 6];
  const neighborhoods = l.neighborhoods.slice(0, 5).join(', ');
  const answer = `Yes. Star Cleaning SC cleans homes across ${l.name}, including ${neighborhoods} (ZIP ${l.zips.join(', ')}). We offer weekly, bi-weekly and monthly house cleaning, deep cleaning, move-in and move-out cleaning, Airbnb turnovers, office cleaning and post-construction cleaning. We’re veteran-owned with ${FACTS.years} years of experience, every cleaner is background-checked, we’re rated ${FACTS.rating} stars on Google, and anything missed is re-cleaned free within 24 hours.`;
  const residential = servicesData['residential-cleaning'];

  const schema = jsonLd([
    webPageSchema({ path, name: l.metaTitle, description: l.metaDescription, image: l.heroImage.src, about: [cityAreaServed(l)] }),
    {
      '@type': 'Service',
      '@id': `${abs(path)}#service`,
      name: `House cleaning ${where}, SC`,
      serviceType: 'House cleaning',
      description: answer,
      url: abs(path),
      provider: { '@id': BUSINESS_ID },
      areaServed: cityAreaServed(l),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `Cleaning services ${where}`,
        itemListElement: SERVICE_ORDER.map((k) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: servicesData[k].name, url: abs(`/services/${k}`) } })),
      },
    },
    faqSchema(l.faqs, path),
    breadcrumbSchema(crumbs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Navbar />
      <main>
        <SubHero
          crumbs={crumbs}
          eyebrow={l.tagline}
          title={[`House cleaning ${where.split(' ')[0]}`, `${l.name}, SC.`]}
          lead={`Veteran-owned, background-checked house cleaning for ${l.name} homes. Recurring, deep, move-out and rental cleaning by a team that knows the area, with a free re-clean if anything is missed.`}
          image={l.heroImage}
          watermark={l.name}
          card={`Serving ${l.zips.length > 1 ? 'ZIPs' : 'ZIP'} ${l.zips.join(' · ')}`}
          review={review}
        />
        <Ticker items={[...l.neighborhoods, ...l.landmarks.filter((x) => !l.neighborhoods.includes(x))]} />
        <QuickAnswer
          question={`Do you clean homes ${where}, SC?`}
          answer={answer}
          facts={[
            { label: 'ZIP codes', value: l.zips.join(', ') },
            { label: 'County', value: l.county },
            { label: 'Hours', value: 'Mon–Fri 9–5 · Sat 9–3' },
            { label: 'Google rating', value: `${FACTS.rating} ★ (${FACTS.reviewCountDisplay})` },
          ]}
        />
        <LocalStory
          eyebrow="Local know-how"
          title={`Cleaning for the way`}
          accent={`${l.name} lives.`}
          paragraphs={[l.intro, l.localDetails]}
          linkHref="/services/residential-cleaning"
          image={FAMILY_PHOTOS[idx % FAMILY_PHOTOS.length]}
          places={l.landmarks}
          note="More Saturdays, less scrubbing."
        />

        <Motion as="section" className="cv bg-[#F7F4EF] py-20 lg:py-28" aria-labelledby="services-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                <Eyebrow>Services</Eyebrow>
                <Title id="services-title" lead={`Our cleaning services`} accent={`${where}.`} />
              </div>
              <p data-anim="up" className="text-base leading-relaxed text-slate-600 lg:col-span-5">
                Every service comes with the same background-checked team, our own supplies, and the 24-hour re-clean guarantee.
              </p>
            </div>
            <ServiceCards
              items={SERVICE_ORDER.map((k, i) => ({
                href: k === 'deep-cleaning' ? `/deep-cleaning-${slug}-sc` : `/services/${k}`,
                name: `${servicesData[k].name}`,
                text: l.serviceDescriptions[i],
                image: servicesData[k].heroImage.src,
                alt: servicesData[k].heroImage.alt,
              }))}
            />
          </div>
        </Motion>

        <ScrubStatement text={`Spend your Saturday at ${l.landmarks[0]}, not scrubbing the shower. We take the cleaning off your list and give you back the hours that matter.`} note="Same trusted team, every visit." />

        <WhyBento eyebrow={`Why ${l.name} chooses us`} title="Local, careful," accent="and always on time." items={l.why} image={FAMILY_PHOTOS[(idx + 2) % FAMILY_PHOTOS.length]} />
        <TeamPreview />

        <RoomChecklist
          title={`What every ${l.name} clean`}
          accent="includes."
          intro="The checklist our team follows on every recurring visit, plus the local extra we add for homes here."
          rooms={residential.checklist}
          extra={l.checklistExtra.standard}
          notIncluded={residential.notIncluded}
        />
        <Steps steps={residential.steps} />
        <ReviewWall />
        <Faq faqs={l.faqs} title={`${l.name} cleaning`} accent="questions." />
        <LinkHub
          title="More near"
          accent={`${l.name}.`}
          groups={[
            { heading: 'Nearby service areas', links: l.nearby.map((n) => ({ label: `House cleaning ${inPlace(locationsData[n])}`, href: `/locations/${n}` })) },
            { heading: `Deep cleaning ${where}`, links: [{ label: `Deep cleaning ${where}, SC`, href: `/deep-cleaning-${slug}-sc` }] },
            { heading: 'All services', links: SERVICE_ORDER.map((k) => ({ label: servicesData[k].name, href: `/services/${k}` })) },
          ]}
          blog={['how-much-does-house-cleaning-cost-in-charleston-sc', 'how-often-should-you-have-your-house-cleaned-charleston-sc', 'how-to-prepare-for-house-cleaners-checklist-charleston-sc']}
        />
        <BookSection place={l.name} />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
