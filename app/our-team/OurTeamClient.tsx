import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import TeamPreview from '@/components/TeamPreview';
import { ShieldCheck, Users, Heart, HeartHandshake, ArrowRight } from 'lucide-react';

// Scoped to this page only. The rest of the site keeps its own heading font.
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-playfair',
});

const trustPoints = [
  { icon: ShieldCheck, title: 'Background-Checked', desc: 'Every hire, no exceptions.' },
  { icon: Users, title: 'Experienced Team', desc: 'Trained and steady.' },
  { icon: Heart, title: 'People Who Care', desc: 'Your home, treated like ours.' },
  { icon: HeartHandshake, title: 'Cleaning for a Reason', desc: 'Free cleanings for women fighting cancer.' },
];

export default function OurTeamClient() {
  return (
    <div className={`${playfair.variable} min-h-screen bg-white font-sans selection:bg-yellow-200 selection:text-slate-900 flex flex-col`}>
      <Navbar />

      <main className="flex-grow w-full">

        {/* Hero: reuse the Home page's "Our Team" section as-is */}
        <TeamPreview />

        {/* Trusted. Trained. Committed. */}
        <section id="team-photo" className="py-20 lg:py-28 bg-white scroll-mt-20">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              <ScrollReveal direction="left" className="lg:col-span-3">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/team2.png"
                    alt="Star Cleaning SC team members making a bed with fresh linens in a Charleston-area home"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={100} className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">The People Behind Every Clean</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 mb-6 leading-[1.15] tracking-tight">
                  Trusted. Trained. Committed.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-7">
                  Every person on our team is background checked and trained the same way before they ever step into a client&apos;s home. You get the same crew, the same care, and the same attention to detail every single visit.
                </p>
                <p className="font-handwriting text-3xl text-star-blue">
                  Same Team. A Higher Standard.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="py-14 lg:py-16 bg-white border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-y-0 lg:divide-x lg:divide-slate-200">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div key={point.title} className="text-center px-3 lg:px-6">
                    <Icon className="w-5 h-5 text-star-blue mx-auto mb-3" strokeWidth={1.5} />
                    <h3 className="text-slate-900 text-sm font-semibold tracking-wide mb-1">{point.title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{point.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* A Team That Gives You Time Back */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal direction="left" className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-star-blue"></span>
                  <span className="text-star-blue font-bold uppercase tracking-[0.2em] text-xs">More Than Cleaning</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium text-slate-900 mb-6 leading-[1.15] tracking-tight">
                  A Team That Gives You Time Back
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  A clean house means something after a long day. It means walking in and not thinking about the mess. More time with your family, more time to rest, more time to actually enjoy the home you worked hard for. That is what our team shows up for.
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                  <Link href="/about-us" className="inline-flex items-center gap-2 text-slate-900 font-semibold text-sm border-b border-slate-900 pb-1 hover:text-star-blue hover:border-star-blue transition-colors">
                    Read Our Story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/quote" className="inline-flex items-center gap-2 bg-star-blue hover:bg-star-dark text-white px-6 py-3 rounded-full font-bold text-sm transition-colors">
                    Get a Free Quote
                  </Link>
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={100} className="order-1 lg:order-2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/team3.png"
                    alt="Star Cleaning SC team members wiping down a dining table and vacuuming a rug"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                  <p className="font-handwriting text-2xl sm:text-3xl text-white absolute bottom-5 right-6 text-right drop-shadow-lg">
                    More Time For What Matters.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
