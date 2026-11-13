import React from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SubHero from './SubHero';
import Ticker from './Ticker';
import QuickAnswer from './QuickAnswer';
import LocalStory from './LocalStory';
import RoomChecklist from './RoomChecklist';
import ScrubStatement from './ScrubStatement';
import CompareTable from './CompareTable';
import Steps from './Steps';
import ReviewWall from './ReviewWall';
import Faq from './Faq';
import LinkHub from './LinkHub';
import BookSection from './BookSection';
import StickyCta from './StickyCta';
import TeamPreview from '@/components/TeamPreview';
import { FAMILY_PHOTOS, cityAreaServed } from './LocationPage';
import { locationsData, LOCATION_ORDER, inPlace } from '@/lib/locationsData';
import { servicesData, SERVICE_ORDER } from '@/lib/servicesData';
import { homeReviews } from '@/data/reviews';
import { abs, BUSINESS_ID, breadcrumbSchema, faqSchema, webPageSchema, jsonLd } from '@/lib/site';

const deep = servicesData['deep-cleaning'];

function titles(slug: string) {
  const l = locationsData[slug];
  const where = inPlace(l);
  const prep = where.split(' ')[0];
  return {
    title: `Deep House Cleaning ${prep} ${l.name} SC | Star Cleaning SC`,
    description: `Top-to-bottom deep cleaning ${where}, SC: baseboards, grout, ceiling fans, vents and blinds. Veteran-owned, background-checked, 4.9★ on Google, 24h re-clean guarantee.`,
  };
}

export function deepCityMetadata(slug: string): Metadata {
  const { title, description } = titles(slug);
  const path = `/deep-cleaning-${slug}-sc`;
  return {
    title: { absolute: title },
    description: description.length > 160 ? `${description.slice(0, 157)}…` : description,
    alternates: { canonical: abs(path) },
    openGraph: { title, description, url: abs(path), type: 'website', images: [{ url: abs(deep.heroImage.src), alt: deep.heroImage.alt }] },
    twitter: { card: 'summary_large_image', title, description, images: [abs(deep.heroImage.src)] },
  };
}

export default function DeepCleanCityPage({ slug }: { slug: string }) {
  const l = locationsData[slug];
  const idx = LOCATION_ORDER.indexOf(slug);
  const where = inPlace(l);
  const path = `/deep-cleaning-${slug}-sc`;
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Deep cleaning', path: '/services/deep-cleaning' },
    { name: `${l.name}, SC`, path },
  ];
  const review = homeReviews.find((r) => r.author === 'Amanda Weatherford');
  const answer = `A deep clean ${where} is a one-time, top-to-bottom reset of your home. It includes everything in a regular clean plus hand-wiped baseboards, door frames and sills, scrubbed grout, hard-water and soap-scum removal, ceiling fans, vents and blinds, and cleaning under light furniture. For ${l.name} homes we add: ${l.checklistExtra.deep.toLowerCase()}. It usually takes two to three times longer than a regular visit.`;
  const faqs = [...deep.faqs.slice(0, 4), ...l.faqs.filter((f) => /deep|historic|pollen|sand|salt|clay|stone|mildew|construction|humid/i.test(f.q)).slice(0, 2)];

  const schema = jsonLd([
    webPageSchema({ path, name: titles(slug).title, description: titles(slug).description, image: deep.heroImage.src, about: [cityAreaServed(l)] }),
    {
      '@type': 'Service',
      '@id': `${abs(path)}#service`,
      name: `Deep cleaning ${where}, SC`,
      serviceType: 'Deep cleaning',
      description: answer,
      url: abs(path),
      provider: { '@id': BUSINESS_ID },
      areaServed: cityAreaServed(l),
      isRelatedTo: { '@id': `${abs('/services/deep-cleaning')}#service` },
    },
    faqSchema(faqs, path),
    breadcrumbSchema(crumbs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Navbar />
      <main>
        <SubHero
          crumbs={crumbs}
          eyebrow={`Deep cleaning · ${l.tagline}`}
          title={[`Deep cleaning ${where.split(' ')[0]}`, `${l.name}, SC.`]}
          lead={`A top-to-bottom reset for ${l.name} homes: baseboards, grout, ceiling fans, vents, blinds and the dust behind the furniture, plus the local extras your home needs. Veteran-owned, background-checked, guaranteed.`}
          image={deep.heroImage}
          watermark="Deep Clean"
          card={deep.card}
          review={review}
        />
        <Ticker items={['Baseboards', 'Grout', 'Ceiling fans', 'Blinds', 'Air vents', 'Door frames', 'Under furniture', 'Hard water', ...l.landmarks]} />
        <QuickAnswer question={`What does a deep clean ${where} include?`} answer={answer} facts={deep.facts} />
        <LocalStory
          eyebrow={`${l.name} homes`}
          title={l.deep.headline}
          accent=""
          paragraphs={l.deep.paragraphs}
          image={FAMILY_PHOTOS[(idx + 1) % FAMILY_PHOTOS.length]}
          places={l.neighborhoods.slice(0, 6)}
          reverse
        />
        <TeamPreview />
        <RoomChecklist
          title="The deep clean,"
          accent="room by room."
          intro={`Everything your team does on a ${l.name} deep clean, plus the local extra.`}
          rooms={deep.checklist}
          extra={l.checklistExtra.deep}
          notIncluded={deep.notIncluded}
        />
        <ScrubStatement text={deep.statement} />
        <CompareTable highlight={1} />
        <Steps steps={deep.steps} />
        <ReviewWall authors={deep.reviewAuthors} />
        <Faq faqs={faqs} title="Deep cleaning" accent={`${where}.`} />
        <LinkHub
          title="Deep cleaning"
          accent="across the Lowcountry."
          groups={[
            { heading: 'Deep cleaning in other areas', links: LOCATION_ORDER.filter((k) => k !== slug).map((k) => ({ label: `Deep cleaning ${inPlace(locationsData[k])}`, href: `/deep-cleaning-${k}-sc` })) },
            { heading: `More ${where}`, links: [{ label: `House cleaning ${where}, SC`, href: `/locations/${slug}` }, { label: 'Deep cleaning: the full guide', href: '/services/deep-cleaning' }] },
            { heading: 'Other services', links: SERVICE_ORDER.filter((k) => k !== 'deep-cleaning').map((k) => ({ label: servicesData[k].name, href: `/services/${k}` })) },
          ]}
          blog={deep.blog}
        />
        <BookSection place={l.name} service="Deep cleaning" />
      </main>
      <Footer />
      <StickyCta label="Book my deep clean" />
    </>
  );
}
