import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
                src="https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95" 
                alt="Star Cleaning SC Logo"
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
              <SocialIcon icon="fab fa-facebook-f" />
              <SocialIcon icon="fab fa-instagram" href="https://instagram.com/star.cleaningsc" />
              <SocialIcon icon="fab fa-google" href="#" />
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
                <span>Tue–Sat 9AM–6PM</span>
              </span>
              <span className="location flex items-start gap-3">
                <i className="fas fa-map-marker-alt mt-1 text-yellow-500"></i> 
                <span>Serving Charleston, SC & Surrounding Areas</span>
              </span>
            </div>
          </div>
        </div>
        
        {/* FOOTER BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Star Cleaning SC. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          <p className="mt-4 md:mt-0 text-yellow-500 font-bold tracking-wider">Veteran-Owned & Operated 🎖️</p>
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