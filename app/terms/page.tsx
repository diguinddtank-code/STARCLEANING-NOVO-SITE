import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Terms of Service | Star Cleaning SC",
  description: "The terms that apply when you book a cleaning with Star Cleaning SC, including our satisfaction guarantee and payment terms.",
  alternates: {
    canonical: 'https://www.starcleaningsc.com/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      <Navbar />

      <main className="pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 font-heading mb-4">Terms of Service</h1>
          <p className="text-sm text-gray-400 font-semibold uppercase tracking-wide mb-12">Last updated: September 19, 2026</p>

          <div className="space-y-10 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Agreement to terms</h2>
              <p>
                By requesting a quote, booking a service, or otherwise using starcleaningsc.com, you agree to these terms. Star Cleaning SC is a veteran-owned residential and commercial cleaning company serving Charleston, SC and the surrounding Lowcountry, including North Charleston, Summerville, Ladson, James Island, Daniel Island, Johns Island, Mount Pleasant, and Goose Creek.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Our 100% satisfaction guarantee</h2>
              <p>
                We stand behind every cleaning we perform. If you aren't happy with any area we cleaned, call us within 24 hours of your service and we will come back and re-clean it at no additional charge.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Payment</h2>
              <p>
                Payment is processed after your cleaning has been completed to your satisfaction. We accept all major credit cards, Venmo, and checks.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Website content</h2>
              <p>
                The content on this website — including text, images, and pricing estimates from our quote tool — is provided for general informational purposes and is not a binding offer until confirmed by our team. All content on this site is the property of Star Cleaning SC and may not be reproduced without permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Changes to these terms</h2>
              <p>
                We may update these terms from time to time. The "Last updated" date at the top of this page reflects the most recent revision. Continuing to use our services after an update means you accept the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 font-heading mb-3">Contact us</h2>
              <p>
                Questions about these terms? Reach us at <a href="mailto:admin@starcleaningsc.com" className="text-star-blue underline">admin@starcleaningsc.com</a> or <a href="tel:+18432979935" className="text-star-blue underline">(843) 297-9935</a>.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
