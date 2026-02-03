import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-star-dark text-gray-300 pt-20 pb-10 border-t border-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <img 
              src="https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95" 
              alt="Star Cleaning"
              className="h-14 mb-6 brightness-0 invert opacity-90" 
            />
            <p className="text-sm leading-relaxed text-gray-400 mb-8 max-w-sm">
              #1 rated residential cleaning service in Charleston, Summerville & Surrounding Areas. Veteran Owned & Operated for 18 years.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon="fab fa-facebook-f" />
              <SocialIcon icon="fab fa-instagram" href="https://instagram.com/star.cleaningsc" />
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white text-gray-400 transition cursor-pointer border border-white/10 hover:border-transparent">
                  <i className="fas fa-home"></i>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xs font-heading border-b border-white/10 pb-2 inline-block">Company</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-400">
                <li><a href="#home" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-[8px] opacity-50"></i> Home</a></li>
                <li><a href="#services" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-[8px] opacity-50"></i> Services</a></li>
                <li><a href="#reviews" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-[8px] opacity-50"></i> Reviews</a></li>
                <li><a href="#quote" className="hover:text-yellow-400 transition-colors flex items-center gap-2"><i className="fas fa-chevron-right text-[8px] opacity-50"></i> Get Quote</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xs font-heading border-b border-white/10 pb-2 inline-block">Services</h4>
              <ul className="space-y-3 text-sm font-medium text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Standard Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Deep Cleaning</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Move In / Move Out</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vacation Rentals</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold uppercase tracking-wider mb-6 text-xs font-heading border-b border-white/10 pb-2 inline-block">Get in Touch</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-400">
                <li className="flex items-start gap-3">
                    <i className="fas fa-phone mt-1 text-yellow-500"></i> 
                    <span>(843) 297-9935<br/><span className="text-xs opacity-50">Mon-Fri 8am-6pm</span></span>
                </li>
                <li className="flex items-center gap-3"><i className="fas fa-envelope text-yellow-500"></i> admin@starcleaningsc.com</li>
                <li className="flex items-center gap-3"><i className="fas fa-map-marker-alt text-yellow-500"></i> Charleston & Summerville, SC</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium">
          <p>&copy; {new Date().getFullYear()} Star Cleaning LLC. Veteran Owned.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
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