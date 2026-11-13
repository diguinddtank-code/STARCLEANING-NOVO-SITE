import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GiveBack from './GiveBack';
import Motion from '@/components/motion/Motion';
import SubHero from './SubHero';
import Ticker from './Ticker';
import StatsBand from './StatsBand';
import WhyBento from './WhyBento';
import ScrubStatement from './ScrubStatement';
import ServiceCards from './ServiceCards';
import TeamPreview from '@/components/TeamPreview';
import ReviewWall from './ReviewWall';
import Faq from './Faq';
import BookSection from './BookSection';
import StickyCta from './StickyCta';
import { Eyebrow, Title } from './ui';
import { locationsData, LOCATION_ORDER, inPlace } from '@/lib/locationsData';
import { homeReviews } from '@/data/reviews';
import { abs, BUSINESS_ID, WEBSITE_ID, breadcrumbSchema, faqSchema, jsonLd } from '@/lib/site';

export const ABOUT_FAQS = [
  { q: 'Who owns Star Cleaning SC?', a: 'Star Cleaning SC (Star Cleaning LLC) is a veteran-owned company run by its owner and founder, Mariana, and based in Summerville, South Carolina.' },
  { q: 'Is Star Cleaning SC a franchise?', a: 'No. We’re an independent, locally run company. We’re not a franchise, an app or a call center: when you call or text, you talk to our team.' },
  { q: 'Are your cleaners employees or contractors?', a: 'Employees. Every cleaner is background-checked, trained and insured before entering a home, and we work hard to keep the same team on your home every visit.' },
  { q: 'Are you insured and bonded?', a: 'Yes. Star Cleaning SC is licensed, bonded and insured, with $2M in general liability coverage.' },
  { q: 'What areas do you serve?', a: 'Charleston, Summerville, North Charleston, Mount Pleasant, James Island, Daniel Island, Johns Island, Ladson and nearby areas such as Goose Creek and Hanahan.' },
  { q: 'What if I’m not happy with a cleaning?', a: 'Tell us within 24 hours and we come back to re-clean the area for free. No runaround.' },
];

export default function AboutPage() {
  const path = '/about-us';
  const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'About us', path },
  ];
  const review = homeReviews.find((r) => r.author === 'Heather Howell');

  const schema = jsonLd([
    {
      '@type': 'AboutPage',
      '@id': `${abs(path)}#aboutpage`,
      url: abs(path),
      name: 'About Star Cleaning SC',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': BUSINESS_ID },
      mainEntity: { '@id': BUSINESS_ID },
      primaryImageOfPage: { '@type': 'ImageObject', url: abs('/images/owner-photo.jpg') },
    },
    {
      '@type': 'Person',
      '@id': `${abs(path)}#owner`,
      name: 'Mariana',
      jobTitle: 'Owner & Founder',
      worksFor: { '@id': BUSINESS_ID },
      image: abs('/images/owner-photo.jpg'),
    },
    faqSchema(ABOUT_FAQS, path),
    breadcrumbSchema(crumbs),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Navbar />
      <main>
        <SubHero
          crumbs={crumbs}
          eyebrow="Our story · Veteran-owned"
          title={['Eighteen years of', 'showing up.']}
          lead="Star Cleaning SC started with a straightforward premise: show up when you say you will, do the work thoroughly every single time, and treat people with respect. Eighteen years later, that’s still the whole job."
          image={{ src: '/images/owner-photo.jpg', alt: 'Mariana, owner and founder of Star Cleaning SC, in Summerville, SC' }}
          watermark="Since day one"
          card="Mariana · Owner & founder"
          review={review}
        />
        <Ticker items={['On time, every time', 'Same team, every visit', 'Background-checked employees', 'Not a franchise', '24-hour re-clean guarantee', 'Veteran-owned']} />

        <TeamPreview />

        <StatsBand />

        <WhyBento
          eyebrow="How we operate"
          title="Not a franchise."
          accent="Not an app."
          items={[
            { title: 'We show up', desc: 'If we’re scheduled for Tuesday morning, we’re there Tuesday morning. Consistency is the whole foundation of the business.' },
            { title: 'Same team, every visit', desc: 'Dedicated cleaners who learn your home and your preferences, so trust builds and nothing gets lost in translation.' },
            { title: 'We make it right', desc: 'If something isn’t right, call us. We come back within 24 hours and fix it at no charge.' },
          ]}
          image={{ src: '/images/hero-family-desktop.webp', alt: 'A family laughing with their dog in a spotless living room' }}
        />

        <ScrubStatement text="Every home we clean is someone’s Saturday, someone’s family dinner, someone’s quiet evening. We take that seriously." note="Get your weekends back." />

        <GiveBack />

        <Motion as="section" className="cv bg-[#F7F4EF] py-20 lg:py-28" aria-labelledby="areas-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Eyebrow>Where we work</Eyebrow>
            <Title id="areas-title" lead="Proudly cleaning" accent="across the Lowcountry." />
            <div className="mt-12">
              <ServiceCards
                cols={4}
                items={LOCATION_ORDER.map((k) => {
                  const l = locationsData[k];
                  return { href: `/locations/${k}`, name: `House cleaning ${inPlace(l)}`, text: l.neighborhoods.slice(0, 4).join(' · '), meta: `ZIP ${l.zips.join(' · ')}` };
                })}
              />
            </div>
          </div>
        </Motion>

        <ReviewWall authors={['Heather Howell', 'Monica Schreiber', 'Mariah Eddins', 'Sonya Haines']} />
        <Faq faqs={ABOUT_FAQS} title="About" accent="Star Cleaning SC." />
        <BookSection />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
