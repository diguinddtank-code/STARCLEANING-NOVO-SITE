import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Script from 'next/script';
import ReviewCard from '@/components/ReviewCard';
import OwnerMessage from '@/components/OwnerMessage';
import CleaningForAReason from '@/components/CleaningForAReason';
import TeamPreview from '@/components/TeamPreview';
import ServiceAreas from '@/components/ServiceAreas';
import { MapPin, Star, ShieldCheck, ThumbsUp, Leaf, ArrowRight, CheckCircle2, Calendar, BedDouble, Sparkles, Phone } from 'lucide-react';

export const metadata = {
  title: 'Airbnb & Vacation Rental Cleaning Charleston SC | Free Quote',
  description: 'Protect your 5-star host rating with our reliable vacation rental cleaning in Charleston SC. Fast turnovers, staging, and military precision.',
  alternates: {
    canonical: 'https://www.starcleaningsc.com/services/vacation-rental-airbnb-cleaning',
  },
};

export default function VacationRentalCleaning() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Script id="vacation-rental-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": "Airbnb & Vacation Rental Cleaning Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "Star Cleaning SC",
                "telephone": "(843) 297-9935",
                "url": "https://www.starcleaningsc.com"
              },
              "areaServed": ["Charleston, SC", "North Charleston, SC", "Summerville, SC", "Ladson, SC", "James Island, SC", "Daniel Island, SC"],
              "description": "Reliable vacation rental and Airbnb turnover cleaning in Charleston SC protecting your 5-star host rating.",
              "serviceType": "Vacation Rental Cleaning"
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Do you accommodate same-day turnovers?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! We know that the window between an 11:00 AM checkout and a 4:00 PM check-in is tight. Our teams are trained to perform efficient, high-quality same-day turnovers to maximize your booking calendar." } },
                { "@type": "Question", "name": "Do you wash linens on-site or take them off-site?", "acceptedAnswer": { "@type": "Answer", "text": "We typically wash linens on-site using your property's washer and dryer. If your property does not have laundry facilities, or if you have a rapid turnover that requires off-site laundering, we can discuss custom arrangements." } },
                { "@type": "Question", "name": "Will you notify me if a guest damages the property?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Part of our military-precision process involves a visual inspection. If we notice broken items, stained carpets, or missing inventory, we will immediately take photos and notify you so you can file a claim." } },
                { "@type": "Question", "name": "Do you provide Airbnb cleaning in downtown Charleston?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we service many historic properties and condos in downtown Charleston. We are familiar with the unique parking and access challenges of the peninsula." } },
                { "@type": "Question", "name": "Can you handle vacation rental cleaning in James Island?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! James Island is a highly popular area for short-term rentals, and our team is frequently in the area providing top-tier turnover services for local hosts." } }
              ]
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.starcleaningsc.com" },
                { "@type": "ListItem", "position": 2, "name": "Vacation Rental & Airbnb Cleaning", "item": "https://www.starcleaningsc.com/services/vacation-rental-airbnb-cleaning" }
              ]
            }
          ]
        })
      }} />
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Image card */}
            <div className="relative h-72 sm:h-96 lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl order-1 lg:order-2">
              <Image
                src="/images/airbnb.webp"
                alt="Hand holding a phone with the Airbnb app open in a rental apartment kitchen"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0" />
              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white">
                <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">5-Star Stays</p>
                <p className="uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">Every Turnover</p>
                <div className="w-8 h-0.5 bg-white/80 mt-2"></div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-600 mb-4 font-bold text-xs uppercase tracking-widest">
                <Star className="w-3.5 h-3.5 text-star-blue fill-star-blue" />
                Top-Rated Vacation Rental Cleaning
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 font-heading leading-tight">
                5-Star Vacation<br />
                <span className="text-star-blue">Rental Cleaning</span>
              </h1>
              <div className="w-12 h-1 bg-star-blue rounded-full my-4"></div>

              <div className="text-gray-600 text-base leading-relaxed space-y-3">
                <p>
                  <strong className="text-gray-900 font-bold">Protect your host rating.</strong>{' '}
                  Fast, reliable, and meticulous Airbnb turnovers from our veteran-owned team, serving Charleston, SC and the surrounding Lowcountry.
                </p>
              </div>

              {/* Trust badges row */}
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-5 gap-y-2.5 mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-star-blue shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-600">Superhost Approved</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-star-blue shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-600">Veteran-Owned</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ThumbsUp className="w-4 h-4 text-star-blue shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-600">Fast Turnovers</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Leaf className="w-4 h-4 text-star-blue shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wide text-gray-600">Eco-Friendly</span>
                </div>
              </div>

              <div className="flex flex-row items-center gap-3 sm:gap-4 mt-6">
                <Link
                  href="/#quote"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-star-blue hover:bg-star-dark text-white px-4 sm:px-6 py-3 rounded-full font-bold text-xs sm:text-sm shadow-md shadow-blue-200 transition-all transform hover:-translate-y-0.5 whitespace-nowrap text-center"
                >
                  <span>Get a Free Estimate</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
                <a
                  href="tel:+18432979935"
                  className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 px-4 sm:px-5 py-3 rounded-full font-bold text-xs sm:text-sm transition-colors shadow-xs hover:border-star-blue/30 whitespace-nowrap text-center shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-star-blue shrink-0" />
                  <span>(843) 297-9935</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service area strip */}
        <div className="bg-slate-50 border-t border-slate-100 py-4">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <MapPin className="w-4 h-4 text-star-blue shrink-0" />
            <span className="text-star-blue font-bold text-xs uppercase tracking-widest shrink-0">Proudly Serving</span>
            <span className="text-gray-500 text-xs sm:text-sm uppercase tracking-wide">
              Charleston • North Charleston • Summerville • Ladson • James Island • Daniel Island • And Surrounding Areas
            </span>
          </div>
        </div>
      </section>

      <OwnerMessage />

      <CleaningForAReason />

      <TeamPreview />

      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* INTRO PARAGRAPH */}
        <div className="prose prose-lg max-w-3xl mx-auto mb-16 text-slate-700">
          <p>
            In the competitive short-term rental market, cleanliness is the single most important factor driving your reviews. A stray hair or a dusty baseboard can instantly turn a 5-star review into a 3-star complaint. That is why property managers and hosts rely on our expert <Link href="/locations/charleston" className="text-star-blue font-semibold hover:underline">vacation rental cleaning in Charleston SC</Link>. At Star Cleaning SC, our veteran-owned team understands the high-stakes, fast-paced nature of Airbnb turnovers. With 18 years of experience, we bring military precision to every property, whether it is a historic downtown Charleston condo or a beachside retreat on James Island. We handle the rapid turnovers, restock essential supplies, and stage the home perfectly for the next guest. Using eco-friendly, pet-safe products, we ensure your property is not just visually spotless, but hygienically safe, keeping your calendar booked and your guests thrilled.
          </p>
        </div>

        {/* WHAT'S INCLUDED */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What's Included in Our Airbnb Turnover Service</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Our short-term rental cleaners do more than just wipe counters; we reset the entire guest experience. Our comprehensive turnover checklist includes:</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <BedDouble className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Linens & Laundry</h3>
              <ul className="space-y-3">
                {['Strip all beds and wash sheets, pillowcases, duvet covers', 'Wash and fold all bathroom towels and washcloths', 'Make all beds with fresh linens to hotel-quality standards'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Kitchen & Bathrooms</h3>
              <ul className="space-y-3">
                {['Sanitize all bathroom surfaces, toilets, showers, and glass', 'Wipe down kitchen counters, sink, and clean microwave', 'Check and wipe out refrigerator, removing old food', 'Empty dishwasher and put away clean dishes'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group bg-white p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Staging & Restocking</h3>
              <ul className="space-y-3">
                {['Restock toilet paper, paper towels, trash bags, toiletries', 'Stage decorative pillows, throw blankets, welcome books', 'Empty all trash bins and take garbage to exterior receptacles', 'Vacuum and mop all floors, ensuring zero hair or debris', 'Perform a visual inspection for damages and report to host'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-slate-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-emerald-50 rounded-2xl border border-emerald-100 text-emerald-800 text-center font-medium flex items-center justify-center gap-3 max-w-2xl mx-auto shadow-sm">
            <Leaf className="w-6 h-6 text-emerald-500" />
            All products used are pet-safe and eco-friendly.
          </div>
        </div>

        {/* WHO IS THIS SERVICE FOR? */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Who Needs Short-Term Rental Cleaners?</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">The Out-of-State Real Estate Investor</h3>
            <p className="text-slate-600 text-sm leading-relaxed">If you own an Airbnb in Charleston but live hundreds of miles away, you need "boots on the ground" that you can trust implicitly. Our veteran-owned team acts as your eyes and ears. Beyond just cleaning, we report damages, track inventory, and ensure the property is perfectly staged. You get total peace of mind knowing your investment is being protected by disciplined professionals.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">The Busy Local Airbnb Host</h3>
            <p className="text-slate-600 text-sm leading-relaxed">You started hosting to make passive income, but the constant laundry, cleaning, and tight turnover windows have turned it into a stressful full-time job. Our turnover service SC gives you your life back. We handle the grueling back-to-back cleanings so you can focus on communicating with guests, optimizing your pricing, and actually enjoying the profits of your rental.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-3">Professional Property Management Companies</h3>
            <p className="text-slate-600 text-sm leading-relaxed">Managing a portfolio of multiple vacation rentals requires a cleaning partner that can scale and deliver consistent quality. We provide reliable, scheduled cleanings with a background-checked team that understands the high standards required for luxury properties. We integrate seamlessly into your operations to ensure every guest checks into a flawless environment.</p>
          </div>
        </div>

        {/* HOW IT WORKS */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Our Simple 3-Step Process</h2>
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <div className="flex-1 relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">1</div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">Book Online or Call</h3>
            <p className="text-slate-600">Contact us to discuss your property size, average turnover frequency, and specific staging requirements. We will set up a customized cleaning plan for your listing.</p>
          </div>
          <div className="flex-1 relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">2</div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">We Show Up & Get to Work</h3>
            <p className="text-slate-600">During the critical window between checkout and check-in, our team arrives promptly. We execute our detailed turnover checklist, handle the laundry, and restock supplies.</p>
          </div>
          <div className="flex-1 relative">
            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg">3</div>
            <h3 className="font-bold text-xl text-slate-900 mb-2">You Enjoy a Spotless Space</h3>
            <p className="text-slate-600">The property is staged and ready for the next guest. We lock up, notify you that the job is complete, and report any maintenance issues we noticed during the clean.</p>
          </div>
        </div>

        {/* PRICING TRANSPARENCY BLOCK */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How Much Does Vacation Rental Cleaning Cost in Charleston, SC?</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            When hosts ask "how much does Airbnb cleaning cost in Charleston SC," the answer is usually structured as a flat rate per turnover. This flat rate is determined by the square footage of the property, the number of beds that require linen changes, and whether laundry is done on-site or off-site. Because short-term rentals require staging and restocking in addition to cleaning, the rates differ from standard residential cleaning. We provide transparent, flat-rate pricing so you can easily pass the cleaning fee onto your guests without eating into your profit margins.
          </p>
          <p className="text-white font-medium text-lg">
            Contact us for a free, no-obligation quote for your specific listing.
          </p>
        </div>

        {/* SERVICE AREA CALLOUT */}
        <div className="my-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mb-12">
            <span className="text-blue-400 font-bold uppercase tracking-wider text-xs mb-3 block flex items-center gap-2">
              <MapPin className="w-4 h-4 shrink-0" /> Service Coverage Map
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 font-heading">
              Serving All of Charleston & The Lowcountry
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed">
              We proudly bring our elite, veteran-owned vacation rental cleaning services directly to your doorstep. Choose your neighborhood below to connect with our local precision teams:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative z-10 mb-6">
            {[
              { name: "Charleston", url: "/locations/charleston", hover: "Historic Peninsula & Downtown", zip: "29401" },
              { name: "North Charleston", url: "/locations/north-charleston", hover: "Boeing, Tanger & Park Circle", zip: "29405" },
              { name: "Summerville", url: "/locations/summerville", hover: "Flowertown & Nexton builds", zip: "29483" },
              { name: "Ladson", url: "/locations/ladson", hover: "Military PCS & Suburban homes", zip: "29456" },
              { name: "James Island", url: "/locations/james-island", hover: "Beachside & Marshland retreats", zip: "29412" },
              { name: "Daniel Island", url: "/locations/daniel-island", hover: "Wando River Waterfront estate care", zip: "29492" }
            ].map((loc, i) => (
              <Link 
                key={i} 
                href={loc.url} 
                className="group p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 block relative overflow-hidden"
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-blue-400 tracking-wider mb-1 block">Zip {loc.zip}</span>
                    <h3 className="font-extrabold text-white text-base md:text-lg group-hover:text-blue-300 transition-colors">{loc.name}</h3>
                  </div>
                  <p className="text-slate-400 text-xs mt-3 leading-snug group-hover:text-slate-300 transition-colors font-light">{loc.hover}</p>
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full blur-xl transform translate-x-4 translate-y-4 group-hover:scale-150 transition-transform duration-500"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ SECTION */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do you accommodate same-day turnovers?</h3>
            <p className="text-slate-600">A: Yes! We know that the window between an 11:00 AM checkout and a 4:00 PM check-in is tight. Our teams are trained to perform efficient, high-quality same-day turnovers to maximize your booking calendar.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do you wash linens on-site or take them off-site?</h3>
            <p className="text-slate-600">A: We typically wash linens on-site using your property's washer and dryer. If your property does not have laundry facilities, or if you have a rapid turnover that requires off-site laundering, we can discuss custom arrangements.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Will you notify me if a guest damages the property?</h3>
            <p className="text-slate-600">A: Absolutely. Part of our military-precision process involves a visual inspection. If we notice broken items, stained carpets, or missing inventory, we will immediately take photos and notify you so you can file a claim.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Do you provide Airbnb cleaning in downtown Charleston?</h3>
            <p className="text-slate-600">A: Yes, we service many historic properties and condos in downtown Charleston. We are familiar with the unique parking and access challenges of the peninsula.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-lg text-slate-900 mb-2">Q: Can you handle vacation rental cleaning in James Island?</h3>
            <p className="text-slate-600">A: Yes! James Island is a highly popular area for short-term rentals, and our team is frequently in the area providing top-tier turnover services for local hosts.</p>
          </div>
        </div>

        {/* SOCIAL PROOF BLOCK */}
        <h2 className="text-3xl font-bold text-slate-900 mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <ReviewCard
            theme="light"
            variant="grid"
            text="Since switching to Star Cleaning SC, my Airbnb reviews have consistently mentioned how sparkling clean the house is. Their vacation rental cleaning in Charleston is unmatched. They even fold the toilet paper into a little triangle!"
            author="Mark D."
            location="Charleston"
          />
          <ReviewCard
            theme="light"
            variant="grid"
            text="I manage a property in James Island from three states away. This veteran-owned team is my absolute lifeline. They handle the turnovers flawlessly, restock the coffee station, and always send me pictures if a guest leaves a mess. 10/10."
            author="Sarah P."
            location="James Island"
          />
          <ReviewCard
            theme="light"
            variant="grid"
            text="Fast, reliable, and thorough. Finding good short-term rental cleaners in North Charleston was a struggle until I found them. They never miss a same-day turnover, and the pet-safe products are a huge selling point for my pet-friendly listing."
            author="Kevin T."
            location="North Charleston"
          />
        </div>

        {/* CLOSING CTA SECTION */}
        <div className="bg-blue-600 text-white rounded-2xl p-10 text-center mb-16 shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Vacation Rental Cleaning in Charleston?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Stop stressing over tight turnover windows and bad cleanliness reviews. Partner with a disciplined, professional team that treats your investment like their own.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/#quote" className="px-8 py-4 bg-white text-blue-600 hover:bg-slate-50 font-bold rounded-lg transition-colors text-lg shadow-md">
              Get Your Free Quote
            </Link>
            <a href="tel:+18432979935" className="px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white font-bold rounded-lg transition-colors text-lg border border-blue-500">
              Call or Text: (843) 297-9935
            </a>
          </div>
        </div>

        {/* INTERNAL LINKING BLOCK */}
        <div className="border-t border-slate-200 pt-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Explore Our Other Cleaning Services</h2>
          <ul className="space-y-3 mb-6">
            <li><Link href="/services/residential-cleaning" className="text-blue-600 hover:underline font-medium">Residential Cleaning</Link>: Keep your personal home consistently spotless with weekly or bi-weekly visits.</li>
            <li><Link href="/services/deep-cleaning" className="text-blue-600 hover:underline font-medium">Deep Cleaning</Link>: A top-to-bottom intensive clean for homes that need a serious reset.</li>
            <li><Link href="/services/move-in-move-out-cleaning" className="text-blue-600 hover:underline font-medium">Move-In/Move-Out Cleaning</Link>: Ensure you get your deposit back or step into a sanitized new home.</li>
            <li><Link href="/services/commercial-office-cleaning" className="text-blue-600 hover:underline font-medium">Commercial Office Cleaning</Link>: Professional janitorial services for a healthier, more productive workspace.</li>
            <li><Link href="/services/post-construction-cleaning" className="text-blue-600 hover:underline font-medium">Post-Construction Cleaning</Link>: We remove the drywall dust and debris after your renovation project.</li>
          </ul>
          <p className="text-slate-600">
            View all our <Link href="/locations" className="text-blue-600 hover:underline">service areas</Link> or check out our <Link href="/#faq" className="text-blue-600 hover:underline">FAQ page</Link> for more details.
          </p>
        </div>
      </div>

      <ServiceAreas />

      <Footer />

      {/* SCHEMA MARKUP */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Vacation Rental & Airbnb Cleaning",
            "serviceType": "Short-Term Rental Cleaning",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Star Cleaning SC",
              "telephone": "(843) 297-9935",
              "url": "https://www.starcleaningsc.com"
            },
            "areaServed": [
              {"@type": "City", "name": "Charleston"},
              {"@type": "City", "name": "North Charleston"},
              {"@type": "City", "name": "Ladson"},
              {"@type": "City", "name": "Summerville"},
              {"@type": "City", "name": "James Island"},
              {"@type": "City", "name": "Daniel Island"}
            ],
            "description": "Reliable vacation rental cleaning in Charleston SC. We provide fast Airbnb turnovers, staging, and restocking to protect your 5-star reviews.",
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD"
              }
            }
          })
        }}
      />
    </main>
  );
}
