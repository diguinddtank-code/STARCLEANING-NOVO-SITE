import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import CleaningForAReason from '@/components/CleaningForAReason';
import ReviewCard from '@/components/ReviewCard';
import { homeReviews } from '@/data/reviews';
import { Key, Users, Leaf, ShieldCheck, BadgeCheck, RotateCcw, ArrowRight, Flag, MapPin } from 'lucide-react';

const serviceAreas = [
  { name: 'Summerville', href: '/locations/summerville' },
  { name: 'Charleston', href: '/locations/charleston' },
  { name: 'North Charleston', href: '/locations/north-charleston' },
  { name: 'Ladson', href: '/locations/ladson' },
  { name: 'James Island', href: '/locations/james-island' },
  { name: 'Daniel Island', href: '/locations/daniel-island' },
  { name: 'Johns Island', href: '/locations/johns-island' },
  { name: 'Mount Pleasant', href: '/locations/mount-pleasant' },
];

// Real reviews from data/reviews.ts, prioritized for Summerville/Charleston relevance.
const featuredReviews = homeReviews.filter((r) =>
  ['Mariah E.', 'Janice O.', 'Sarah R.'].includes(r.author)
);

export default function AboutUsClient() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-yellow-200 selection:text-slate-900 flex flex-col">
      <Navbar />

      <main className="flex-grow w-full pb-20 lg:pb-0">

        {/* Hero */}
        <section className="bg-white py-10 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Our Story</span>
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.15] mb-5">
                  Meet Mariana. Her Team Cleans Homes All Over <span className="text-star-blue">Summerville &amp; Charleston.</span>
                </h1>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  Star Cleaning SC is veteran owned. Eighteen years in, we still show up on time, do the work right, and treat your house like it is ours.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-star-blue hover:bg-star-dark text-white px-8 py-4 rounded-full font-bold text-base shadow-lg shadow-blue-200 transition-all">
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a href="tel:+18432979935" className="text-slate-700 font-bold text-sm border-b-2 border-star-blue hover:text-star-blue transition-colors">
                    Or call or text (843) 297-9935
                  </a>
                </div>
              </div>
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl order-1 lg:order-2">
                <Image
                  src="/images/owner-photo.jpg"
                  alt="Mariana, owner of Star Cleaning SC, holding a Cleaning for a Reason card"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Real Story */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-star-blue"></span>
              <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Origin</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-slate-900 tracking-tight leading-[1.15] mb-6">
              Why Mariana Started <span className="text-star-blue">Star Cleaning.</span>
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Mariana runs Star Cleaning SC right here in the Lowcountry. She started the company because she was tired of seeing cleaning services treat clients like a number and treat their own crews even worse. She wanted to build something better: a company people actually trust, with a team that sticks around because they are treated right.
              </p>
              <p>
                Star Cleaning SC is veteran owned, and that background shows in how we work. Show up on time. Do the job right. Do not cut corners. Eighteen years later, that is still how we run things, and it is how we train every new person who joins the crew.
              </p>
              <p>
                We are not part of a chain and we do not answer to a corporate office. It is Mariana, a small crew, and a lot of houses in Summerville and Charleston that we have come to know pretty well.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 text-xs font-bold text-slate-700">
                <Flag className="w-3.5 h-3.5 text-star-blue" /> Veteran Owned
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 text-xs font-bold text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-star-blue" /> Locally Operated
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3.5 py-1.5 text-xs font-bold text-slate-700">
                <Users className="w-3.5 h-3.5 text-star-blue" /> Small, Steady Crew
              </span>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="relative py-20 lg:py-28 bg-star-dark text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px] pointer-events-none"></div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <ScrollReveal direction="up">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-yellow-400"></span>
                <span className="text-yellow-300 font-bold uppercase tracking-[0.2em] text-xs">Our Mission</span>
                <span className="w-8 h-px bg-yellow-400"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium mt-3 mb-8 text-white tracking-tight leading-[1.15]">
                Why We Really <span className="text-yellow-300">Do This.</span>
              </h2>
              <p className="text-lg sm:text-xl text-blue-100 leading-relaxed">
                A clean house means something after a long day. It means not thinking about the mess when you walk in the door. It means more time with your kids, more time to rest, more time for whatever you actually want to do with your evening. That is what we show up for, every single time.
              </p>
            </ScrollReveal>

            <div className="grid sm:grid-cols-3 gap-6 mt-16">
              {[
                {
                  title: 'We Show Up',
                  desc: 'You can plan your day around us. If we say we are coming, we are coming.',
                },
                {
                  title: 'We Treat Your Home Like Ours',
                  desc: 'Same care and same respect, whether it is a studio apartment or a five bedroom house.',
                },
                {
                  title: 'We Treat Our Team Right',
                  desc: 'A crew that is treated well does better work for you. It is that simple.',
                },
              ].map((pillar, i) => (
                <ScrollReveal key={pillar.title} direction="up" delay={i * 120}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-6 h-full">
                    <h3 className="font-bold text-white mb-2">{pillar.title}</h3>
                    <p className="text-blue-200 text-sm leading-relaxed">{pillar.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/team-complete.png"
                    alt="Mariana and the Star Cleaning SC team standing together in matching uniforms"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={100}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Our Team</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight leading-[1.15] mb-5">
                  The People Who Actually <span className="text-star-blue">Clean Your House.</span>
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  This is not a random contractor sent by an app. This is Mariana and a small crew of women who show up, do the work, and go home knowing they did it right. Every person on the team is background checked, and most clients see the same face every visit.
                </p>
                <p className="text-xl font-heading text-slate-800 leading-relaxed mb-2">
                  &ldquo;I do not send anyone to a house I would not trust in my own.&rdquo;
                </p>
                <p className="text-star-blue font-bold text-sm mb-6">Mariana, Owner</p>
                <Link href="/our-team" className="inline-flex items-center gap-2 text-star-blue font-bold border-b-2 border-star-blue hover:text-star-dark hover:border-star-dark transition-colors">
                  Meet the Full Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* How We Take Care of Your Home */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Standards of Care</span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight leading-[1.15]">
                How We Take Care of <span className="text-star-blue">Your Home.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-star-blue flex items-center justify-center mb-4">
                  <Key className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Key or Garage Code</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Most folks give us a key or a garage code so we can get in and get to work, even if nobody is home.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-star-blue flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">The Same Person Every Time</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  We try to send the same cleaner to your house every visit. They learn how you like things done, so you are not opening the door for a stranger each time.
                </p>
              </div>
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-star-blue flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Pet-Safe Products</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  We bring our own supplies, and they are safe for kids and pets. If your dog likes to supervise the cleaning, that is fine by us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="w-8 h-px bg-star-blue"></span>
                <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Total Peace of Mind</span>
                <span className="w-8 h-px bg-star-blue"></span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight leading-[1.15]">
                You Are Letting Us Into Your House. <span className="text-star-blue">Here Is Why That Is Safe.</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <ShieldCheck className="w-7 h-7 text-star-blue mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Background-Checked Team</h3>
                <p className="text-slate-600 leading-relaxed text-sm">Everyone on our team passes a background check before they ever clean a house. No exceptions.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <BadgeCheck className="w-7 h-7 text-star-blue mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">Bonded and Insured</h3>
                <p className="text-slate-600 leading-relaxed text-sm">We are bonded and insured, so if something ever goes wrong, you are covered.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <RotateCcw className="w-7 h-7 text-star-blue mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">100% Satisfaction Guarantee</h3>
                <p className="text-slate-600 leading-relaxed text-sm">If we miss something, call us within 24 hours and we will come back and fix it for free.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Cleaning for a Reason */}
        <CleaningForAReason />

        {/* Real Reviews */}
        {featuredReviews.length > 0 && (
          <section className="py-16 lg:py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Verified Reviews</span>
                  <span className="w-8 h-px bg-star-blue"></span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight leading-[1.15]">
                  What Neighbors <span className="text-star-blue">Are Saying.</span>
                </h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredReviews.map((review, i) => (
                  <ReviewCard key={i} theme="light" variant="grid" {...review} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Areas We Serve */}
        <section className="py-16 lg:py-20 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-px bg-star-blue"></span>
              <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">Local Reach</span>
              <span className="w-8 h-px bg-star-blue"></span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 tracking-tight leading-[1.15] mb-4">
              Summerville, Charleston, and <span className="text-star-blue">Everywhere In Between.</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              We clean houses all over the Lowcountry. If your town is on this list, chances are we already clean a few houses on your street.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((city) => (
                <Link
                  key={city.href}
                  href={city.href}
                  className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-semibold text-slate-700 hover:border-star-blue hover:text-star-blue transition-colors"
                >
                  {city.name}
                </Link>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-6">
              Also serving Goose Creek and nearby areas. <Link href="/locations" className="text-star-blue font-semibold hover:underline">See all service areas</Link>.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-star-dark text-white text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black font-heading mb-4">Ready to Get Your House on the Schedule?</h2>
            <p className="text-blue-100 mb-8">Come on, let&apos;s get your house on the schedule, y&apos;all.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/quote" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-4 rounded-full font-black transition-all">
                Get a Free Quote
              </Link>
              <a href="tel:+18432979935" className="text-blue-100 font-bold text-sm hover:text-white transition-colors">
                Or call or text (843) 297-9935
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
