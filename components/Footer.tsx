import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Medal } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-star-dark text-gray-300 pt-20 pb-10 border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMN 1 — Brand */}
          <div className="lg:col-span-4">
            <div className="relative h-14 w-32 mb-6 brightness-0 invert opacity-90">
              <Image 
                src="/images/logo-mark.png"
                alt="Star Cleaning SC logo"
                fill
                sizes="128px"
                className="object-contain"
              />
            </div>
            
            <h3 className="text-white font-bold text-lg mb-2">Military Precision. Spotless Results.</h3>
            
            <p className="text-sm leading-relaxed text-gray-400 mb-8 max-w-sm">
              Veteran-owned and operated, providing top-tier residential and commercial cleaning to the Charleston Lowcountry. Fully insured, background-checked, and 100% guaranteed.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon="fab fa-facebook-f" href="https://www.facebook.com/profile.php?id=100068655907779" />
              <SocialIcon icon="fab fa-instagram" href="https://instagram.com/star.cleaningsc" />
              <SocialIcon icon="fab fa-google" href="https://share.google/udkA7cxV0VCC39Ag2" />
            </div>
          </div>

          {/* COLUMN 2 — Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xs font-heading border-b border-white/10 pb-2 inline-block">Services</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><Link href="/services/residential-cleaning/" className="hover:text-white transition-colors">Residential Cleaning</Link></li>
              <li><Link href="/services/deep-cleaning/" className="hover:text-white transition-colors">Deep Cleaning</Link></li>
              <li><Link href="/services/move-in-move-out-cleaning/" className="hover:text-white transition-colors">Move In/Out Cleaning</Link></li>
              <li><Link href="/services/vacation-rental-airbnb-cleaning/" className="hover:text-white transition-colors">Airbnb Cleaning</Link></li>
              <li><Link href="/services/commercial-office-cleaning/" className="hover:text-white transition-colors">Commercial Cleaning</Link></li>
              <li><Link href="/services/post-construction-cleaning/" className="hover:text-white transition-colors">Post-Construction</Link></li>
            </ul>
          </div>

          {/* COLUMN 3 — Service Areas */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xs font-heading border-b border-white/10 pb-2 inline-block">Service Areas</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><Link href="/locations/charleston/" className="hover:text-white transition-colors">Charleston</Link></li>
              <li><Link href="/locations/north-charleston/" className="hover:text-white transition-colors">North Charleston</Link></li>
              <li><Link href="/locations/ladson/" className="hover:text-white transition-colors">Ladson</Link></li>
              <li><Link href="/locations/summerville/" className="hover:text-white transition-colors">Summerville</Link></li>
              <li><Link href="/locations/james-island/" className="hover:text-white transition-colors">James Island</Link></li>
              <li><Link href="/locations/daniel-island/" className="hover:text-white transition-colors">Daniel Island</Link></li>
              <li><Link href="/locations/johns-island/" className="hover:text-white transition-colors">Johns Island</Link></li>
              <li><Link href="/locations/mount-pleasant/" className="hover:text-white transition-colors">Mount Pleasant</Link></li>
            </ul>
            <h4 className="text-white font-bold uppercase tracking-wider mt-6 mb-3 text-[10px] font-heading border-b border-white/10 pb-1 inline-block">Deep Clean SC</h4>
            <ul className="space-y-2 text-xs font-light text-gray-400">
              <li><Link href="/deep-cleaning-charleston-sc" className="hover:text-white transition-colors">✦ Charleston Deep Clean</Link></li>
              <li><Link href="/deep-cleaning-north-charleston-sc" className="hover:text-white transition-colors">✦ North Charleston Deep Clean</Link></li>
              <li><Link href="/deep-cleaning-summerville-sc" className="hover:text-white transition-colors">✦ Summerville Deep Clean</Link></li>
              <li><Link href="/deep-cleaning-ladson-sc" className="hover:text-white transition-colors">✦ Ladson Deep Clean</Link></li>
              <li><Link href="/deep-cleaning-james-island-sc" className="hover:text-white transition-colors">✦ James Island Deep Clean</Link></li>
              <li><Link href="/deep-cleaning-daniel-island-sc" className="hover:text-white transition-colors">✦ Daniel Island Deep Clean</Link></li>
              <li><Link href="/deep-cleaning-johns-island-sc" className="hover:text-white transition-colors">✦ Johns Island Deep Clean</Link></li>
              <li><Link href="/deep-cleaning-mount-pleasant-sc" className="hover:text-white transition-colors">✦ Mount Pleasant Deep Clean</Link></li>
            </ul>
          </div>

          {/* COLUMN 4 — Contact & Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xs font-heading border-b border-white/10 pb-2 inline-block">Contact & Info</h4>
            
            <div className="nap-block flex flex-col space-y-4 text-sm font-medium text-gray-400">
              <span className="business-name hidden">Star Cleaning SC</span>
              <span className="phone flex items-start gap-3">
                <i className="fas fa-phone mt-1 text-yellow-500"></i> 
                <a href="tel:+18432979935" className="hover:text-white transition-colors">(843) 297-9935</a>
              </span>
              <span className="email flex items-center gap-3">
                <i className="fas fa-envelope text-yellow-500"></i>
                <a href="mailto:admin@starcleaningsc.com" className="hover:text-white transition-colors">admin@starcleaningsc.com</a>
              </span>
              <span className="hours flex items-start gap-3">
                <i className="fas fa-clock mt-1 text-yellow-500"></i>
                <span>Mon–Fri: 8:00 AM – 5:00 PM</span>
              </span>
              <span className="location flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-yellow-500"></i> 
                <span>Serving Charleston, North Charleston & Summerville, SC</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* FOOTER BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Star Cleaning SC. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          <p className="mt-4 md:mt-0 text-yellow-500 font-bold tracking-wider flex items-center gap-1.5">Veteran-Owned & Operated <Medal className="w-4 h-4" aria-hidden="true" /></p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon: React.FC<{ icon: string, href?: string }> = ({ icon, href = "#" }) => (
  <a href={href} target={href !== "#" ? "_blank" : "_self"} rel={href !== "#" ? "noopener noreferrer" : ""} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-star-blue text-gray-400 hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg hover:border-transparent">
    <i className={icon}></i>
  </a>
);

export default Footer;