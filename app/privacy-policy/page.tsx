import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Privacy Policy | Star Cleaning SC",
  description: "How Star Cleaning SC collects, uses, and protects the information you share with us through our website and quote forms.",
  alternates: {
    canonical: 'https://www.starcleaningsc.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />

      <main className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 font-heading mb-4">Privacy Policy</h1>
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-12">Last updated: September 19, 2026</p>

          <div className="space-y-10 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Who we are</h2>
              <p>
                Star Cleaning SC ("Star Cleaning," "we," "us," or "our") is a veteran-owned residential and commercial cleaning company serving Charleston, SC and the surrounding Lowcountry. We are a service-area business and do not maintain a public physical address. This policy explains what information we collect through starcleaningsc.com and how we use it.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Information we collect</h2>
              <p className="mb-3">When you request a quote or contact us through our website, we ask for:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>ZIP code (used to confirm you're in our service area and estimate pricing)</li>
              </ul>
              <p className="mt-3">
                We do not ask for or store payment card details through our website. Payment for services is arranged directly and processed after your cleaning is completed.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Cookies and tracking technologies</h2>
              <p className="mb-3">Our site uses the following tools to understand traffic and measure the performance of our advertising:</p>
              <ul className="list-disc pl-6 space-y-1.5">
                <li><strong className="text-gray-900 font-semibold">Google Tag Manager and Google Analytics (GA4)</strong> — to understand how visitors use our site.</li>
                <li><strong className="text-gray-900 font-semibold">Google Ads conversion tracking</strong> — to measure the results of our ad campaigns.</li>
                <li><strong className="text-gray-900 font-semibold">Meta Pixel (Facebook/Instagram)</strong> — to measure the results of our social media advertising and show relevant ads to past visitors.</li>
              </ul>
              <p className="mt-3">
                These tools may place cookies in your browser and share limited interaction data (such as pages visited or form submissions) with Google and Meta. You can control cookies through your browser settings, and opt out of personalized advertising directly through <a href="https://adssettings.google.com" target="_blank" rel="noreferrer" className="text-star-blue underline">Google's Ad Settings</a> and <a href="https://www.facebook.com/adpreferences/ad_settings" target="_blank" rel="noreferrer" className="text-star-blue underline">Meta's Ad Preferences</a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">How we use your information</h2>
              <ul className="list-disc pl-6 space-y-1.5">
                <li>To prepare and send you a cleaning quote</li>
                <li>To schedule and coordinate your cleaning service</li>
                <li>To contact you by phone call, text message (SMS), or email about your quote, booking, or service</li>
                <li>To measure and improve our website and advertising, as described above</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information. We share information with the advertising and analytics platforms listed above only as needed for the purposes described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Your choices</h2>
              <p>
                You can ask us to stop contacting you for marketing purposes, or to delete the information you've submitted to us, at any time by emailing <a href="mailto:admin@starcleaningsc.com" className="text-star-blue underline">admin@starcleaningsc.com</a> or calling/texting <a href="tel:+18432979935" className="text-star-blue underline">(843) 297-9935</a>. We will honor your request as soon as reasonably possible.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Changes to this policy</h2>
              <p>
                We may update this policy from time to time to reflect changes in our practices or for legal reasons. The "Last updated" date at the top of this page reflects the most recent revision.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Contact us</h2>
              <p>
                Questions about this policy or your information? Reach us at <a href="mailto:admin@starcleaningsc.com" className="text-star-blue underline">admin@starcleaningsc.com</a> or <a href="tel:+18432979935" className="text-star-blue underline">(843) 297-9935</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
