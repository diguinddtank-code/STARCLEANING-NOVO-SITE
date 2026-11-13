import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Motion from '@/components/motion/Motion';
import SubHero from './SubHero';
import Ticker from './Ticker';
import QuickAnswer from './QuickAnswer';
import ScrubStatement from './ScrubStatement';
import RoomChecklist from './RoomChecklist';
import CompareTable from './CompareTable';
import WhyBento from './WhyBento';
import Steps from './Steps';
import ReviewWall from './ReviewWall';
import Faq from './Faq';
import LinkHub from './LinkHub';
import BookSection from './BookSection';
import StickyCta from './StickyCta';
import ServiceCards from './ServiceCards';
import TeamPreview from '@/components/TeamPreview';
import { Eyebrow, Title } from './ui';
import { servicesData, SERVICE_ORDER, type ServiceSlug } from '@/lib/servicesData';
import { locationsData, LOCATION_ORDER, inPlace } from '@/lib/locationsData';
import { homeReviews } from '@/data/reviews';
import { abs, BUSINESS_ID, breadcrumbSchema, faqSchema, webPageSchema, jsonLd, cityEntity } from '@/lib/site';

export function serviceMetadata(slug: ServiceSlug): Metadata {
  const s = servicesData[slug];
  const path = `/services/${slug}`;
  return {
    title: { absolute: s.metaTitle },
    description: s.metaDescription,
    alternates: { canonical: abs(path) },
    openGraph: { title: s.metaTitle, description: s.metaDescription, url: abs(path), type: 'website', images: [{ url: abs(s.heroImage.src), alt: s.heroImage.alt }] },
    twitter: { card: 'summary_large_image', title: s.metaTitle, description: s.metaDescription, images: [abs(s.heroImage.src)] },
  };
}

const COMPARE_INDEX: Partial<Record<ServiceSlug, number>> = { 'residential-cleaning': 0, 'deep-cleaning': 1, 'move-in-move-out-cleaning': 2 };

export default function ServicePage({ slug }: { slug: ServiceSlug }) {
  const s = servicesData[slug];
  const path = `/services/${slug}`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: s.name, path },
  ];
  const heroReview = homeReviews.find((r) => r.author === s.reviewAuthors[0]);
  const areas = LOCATION_ORDER.map((k) => locationsData[k]);

  const schema = jsonLd([
    webPageSchema({ path, name: s.metaTitle, description: s.metaDescription, image: s.heroImage.src }),
    {
      '@type': 'Service',
      '@id': `${abs(path)}#service`,
      name: s.name,
      serviceType: s.serviceType,
      description: s.quickAnswer,
      url: abs(path),
      image: abs(s.heroImage.src),
      provider: { '@id': BUSINESS_ID },
      areaServed: areas.map((a) => cityEntity(a.name)),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${s.name} checklist`,
        itemListElement: s.checklist.map((room) => ({
          '@type': 'OfferCatalog',
          name: room.room,
          itemListElement: room.items.map((it) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: it } })),
        })),
      },
      termsOfService: 'Free re-clean within 24 hours if anything on the checklist is missed.',
    },
    faqSchema(s.faqs, path),
    breadcrumbSchema(crumbs),
  ]);

  const otherServices = SERVICE_ORDER.filter((k) => k !== slug);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Navbar />
      <main>
        <SubHero crumbs={crumbs} eyebrow={s.eyebrow} title={s.h1} lead={s.lead} image={s.heroImage} watermark={s.shortName} card={s.card} review={heroReview} />
        <Ticker items={areas.map((a) => `${s.shortName} ${inPlace(a)}`)} />
        <QuickAnswer question={s.question} answer={s.quickAnswer} facts={s.facts} />
        <RoomChecklist
          title="Every room,"
          accent="every time."
          intro={`The exact checklist your team follows on a ${s.shortName.toLowerCase()} visit. Want something added? Tell us when you book.`}
          rooms={s.checklist}
          notIncluded={s.notIncluded}
        />
        <ScrubStatement text={s.statement} />
        {COMPARE_INDEX[slug] !== undefined && <CompareTable highlight={COMPARE_INDEX[slug]} />}
        <WhyBento
          eyebrow="Who it’s for"
          title="Made for the way"
          accent="you actually live."
          items={s.personas.map((p) => ({ title: p.title, desc: p.text }))}
          image={s.sideImage}
        />
        <TeamPreview />
        <Steps steps={s.steps} />
        <ReviewWall authors={s.reviewAuthors} />
        <Faq faqs={s.faqs} title={`${s.shortName}`} accent="questions, answered." />

        <Motion as="section" className="cv bg-[#F7F4EF] py-20 lg:py-28" aria-labelledby="areas-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>Where we work</Eyebrow>
            <Title id="areas-title" lead={`${s.shortName} across`} accent="the Lowcountry." />
            <div className="mt-12">
              <ServiceCards
                cols={4}
                items={areas.map((a) => ({
                  href: slug === 'deep-cleaning' ? `/deep-cleaning-${a.slug}-sc` : `/locations/${a.slug}`,
                  name: `${s.shortName} ${inPlace(a)}`,
                  text: a.serviceDescriptions[Math.max(0, SERVICE_ORDER.indexOf(slug))] ?? a.tagline,
                  meta: `ZIP ${a.zips.join(' · ')}`,
                }))}
              />
            </div>
          </div>
        </Motion>

        <LinkHub
          groups={[
            { heading: 'Other services', links: otherServices.map((k) => ({ label: servicesData[k].name, href: `/services/${k}` })) },
            { heading: 'Service areas', links: areas.map((a) => ({ label: `${a.name}, SC`, href: `/locations/${a.slug}` })) },
          ]}
          blog={s.blog}
        />
        <BookSection service={s.shortName} />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
