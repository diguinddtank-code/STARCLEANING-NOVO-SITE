import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Motion from '@/components/motion/Motion';
import SubHero from './SubHero';
import Ticker from './Ticker';
import QuickAnswer from './QuickAnswer';
import ServiceCards from './ServiceCards';
import CompareTable from './CompareTable';
import StatsBand from './StatsBand';
import ScrubStatement from './ScrubStatement';
import ReviewWall from './ReviewWall';
import Faq from './Faq';
import LinkHub from './LinkHub';
import BookSection from './BookSection';
import StickyCta from './StickyCta';
import { Eyebrow, Title } from './ui';
import { servicesData, SERVICE_ORDER } from '@/lib/servicesData';
import { locationsData, LOCATION_ORDER, inPlace } from '@/lib/locationsData';
import { homeReviews } from '@/data/reviews';
import { abs, BUSINESS_ID, WEBSITE_ID, breadcrumbSchema, faqSchema, jsonLd } from '@/lib/site';
import { cityAreaServed } from './LocationPage';

export const SERVICES_FAQS = [
  { q: 'Which cleaning service do I need?', a: 'For ongoing upkeep, choose recurring house cleaning (weekly, bi-weekly or monthly). If the home hasn’t been professionally cleaned in a while, start with a deep clean. Moving? Choose move-in/move-out cleaning for an empty home. Hosts pick Airbnb turnovers, businesses pick office cleaning, and renovations need post-construction cleaning.' },
  { q: 'How do I get a price?', a: 'Fill out the one-minute quote form or call or text (843) 297-9935. Someone from our team confirms your exact price personally, based on your home’s size and the service.' },
  { q: 'Do you bring your own supplies?', a: 'Yes. Every team arrives with professional, eco-friendly and pet-safe products, vacuums and microfiber cloths.' },
  { q: 'Do I need to be home?', a: 'No. Most clients give us a key, code or lockbox. Every team member is background-checked and the company is insured.' },
  { q: 'What’s your guarantee?', a: 'If anything on the checklist was missed, tell us within 24 hours and we come back to re-clean it for free.' },
];

export function ServicesHub() {
  const path = '/services';
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path },
  ];
  const schema = jsonLd([
    {
      '@type': 'CollectionPage',
      '@id': `${abs(path)}#webpage`,
      url: abs(path),
      name: 'Cleaning services in Charleston & Summerville, SC',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': BUSINESS_ID },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: SERVICE_ORDER.map((k, i) => ({ '@type': 'ListItem', position: i + 1, name: servicesData[k].name, url: abs(`/services/${k}`) })),
      },
    },
    faqSchema(SERVICES_FAQS, path),
    breadcrumbSchema(crumbs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Navbar />
      <main>
        <SubHero
          crumbs={crumbs}
          eyebrow="Home · Rental · Office"
          title={['Every kind of clean,', 'one team you trust.']}
          lead="From weekly upkeep to a full move-out reset, one veteran-owned, background-checked team across Charleston, Summerville and the Lowcountry, with a free re-clean if anything is missed."
          image={{ src: '/images/residential.png', alt: 'Star Cleaning SC team cleaning a bright living room' }}
          watermark="Services"
          card="Six services, one standard"
          review={homeReviews.find((r) => r.author === 'Amanda Weatherford')}
        />
        <Ticker items={SERVICE_ORDER.map((k) => servicesData[k].name)} />
        <Motion as="section" className="bg-white py-20 lg:py-28" aria-labelledby="all-services">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>Our services</Eyebrow>
            <Title id="all-services" lead="Pick the clean," accent="we’ll handle the rest." />
            <div className="mt-12">
              <ServiceCards items={SERVICE_ORDER.map((k) => ({ href: `/services/${k}`, name: servicesData[k].name, text: servicesData[k].lead, image: servicesData[k].heroImage.src, alt: servicesData[k].heroImage.alt }))} />
            </div>
          </div>
        </Motion>
        <CompareTable />
        <StatsBand />
        <ScrubStatement text="You’re not behind on cleaning. You’re short on time. Pick a service, and get your Saturdays back." />
        <ReviewWall />
        <Faq faqs={SERVICES_FAQS} title="Choosing a" accent="cleaning service." />
        <LinkHub
          title="Find us"
          accent="near you."
          groups={[{ heading: 'Service areas', links: LOCATION_ORDER.map((k) => ({ label: `House cleaning ${inPlace(locationsData[k])}`, href: `/locations/${k}` })) }]}
          blog={['how-much-does-house-cleaning-cost-in-charleston-sc', 'deep-cleaning-vs-standard-cleaning-north-charleston', 'what-house-cleaners-will-not-clean-charleston-sc']}
        />
        <BookSection />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}

export const AREAS_ANSWER =
  'Star Cleaning SC serves the Charleston, South Carolina Lowcountry: Charleston (downtown and West Ashley), Summerville, North Charleston, Mount Pleasant, James Island, Daniel Island, Johns Island and Ladson, plus nearby Goose Creek and Hanahan. We’re based in Summerville and clean homes, rentals and offices across Charleston, Berkeley and Dorchester counties.';

export function LocationsHub() {
  const path = '/locations';
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Service areas', path },
  ];
  const areas = LOCATION_ORDER.map((k) => locationsData[k]);
  const schema = jsonLd([
    {
      '@type': 'CollectionPage',
      '@id': `${abs(path)}#webpage`,
      url: abs(path),
      name: 'Service areas: house cleaning across the Charleston Lowcountry',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': BUSINESS_ID },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: areas.map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: `House cleaning ${inPlace(a)}, SC`, url: abs(`/locations/${a.slug}`) })),
      },
    },
    { '@type': 'Service', '@id': `${abs(path)}#service`, name: 'House cleaning in the Charleston Lowcountry', serviceType: 'House cleaning', provider: { '@id': BUSINESS_ID }, areaServed: areas.map(cityAreaServed) },
    breadcrumbSchema(crumbs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Navbar />
      <main>
        <SubHero
          crumbs={crumbs}
          eyebrow="Charleston · Berkeley · Dorchester"
          title={['House cleaning across', 'the Lowcountry.']}
          lead="Based in Summerville and cleaning homes from the Charleston peninsula to Johns Island. Find your area to see what our team does there, and what your neighbors care about."
          image={{ src: '/images/team2.png', alt: 'Star Cleaning SC team member making a bed' }}
          watermark="Lowcountry"
          card="8 areas · 1 local team"
          review={homeReviews.find((r) => r.author === 'Mariah Eddins')}
        />
        <Ticker items={areas.flatMap((a) => [a.name, ...a.neighborhoods.slice(0, 2)])} />
        <QuickAnswer
          question="Which areas does Star Cleaning SC serve?"
          answer={AREAS_ANSWER}
          facts={[
            { label: 'Based in', value: 'Summerville, SC' },
            { label: 'Counties', value: 'Charleston, Berkeley, Dorchester' },
            { label: 'Hours', value: 'Mon–Fri 9–5 · Sat 9–3' },
            { label: 'Also serving', value: 'Goose Creek, Hanahan' },
          ]}
        />
        <Motion as="section" className="cv bg-[#F7F4EF] py-20 lg:py-28" aria-labelledby="areas-list">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>Find your area</Eyebrow>
            <Title id="areas-list" lead="Where our team" accent="cleans every week." />
            <div className="mt-12">
              <ServiceCards items={areas.map((a) => ({ href: `/locations/${a.slug}`, name: `House cleaning ${inPlace(a)}`, text: a.neighborhoods.slice(0, 4).join(' · '), meta: `ZIP ${a.zips.join(' · ')}` }))} cols={4} />
            </div>
          </div>
        </Motion>
        <StatsBand />
        <ReviewWall />
        <LinkHub
          title="Deep cleaning"
          accent="by area."
          groups={[
            { heading: 'Deep cleaning by area', links: areas.map((a) => ({ label: `Deep cleaning ${inPlace(a)}`, href: `/deep-cleaning-${a.slug}-sc` })) },
            { heading: 'Services', links: SERVICE_ORDER.map((k) => ({ label: servicesData[k].name, href: `/services/${k}` })) },
          ]}
          blog={['how-much-does-house-cleaning-cost-in-charleston-sc', 'independent-cleaner-vs-cleaning-company-charleston-sc', 'first-recurring-clean-charleston-summerville-sc']}
        />
        <BookSection />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
