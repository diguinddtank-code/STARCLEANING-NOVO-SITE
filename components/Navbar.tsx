"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Mobile accordion states
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-500 ease-in-out border-b border-transparent
        ${scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-lg py-2 border-gray-100' 
          : 'bg-white py-4 shadow-sm'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative z-50">
            <div className={`relative transition-all duration-500 ${scrolled ? 'h-12 w-[91px]' : 'h-16 md:h-20 w-[122px] md:w-[152px]'}`}>
              <Image 
                src="https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95" 
                alt="Star Cleaning" 
                fill
                sizes="(max-width: 768px) 122px, 152px"
                className="object-contain"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex space-x-6 text-sm font-bold uppercase tracking-wider text-gray-600">
              
              {/* Services Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-star-blue transition-colors duration-300">
                  Services <i className="fas fa-chevron-down text-[10px]"></i>
                </button>
                <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                  <div className="py-2">
                    <Link href="/services/residential-cleaning/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">Residential Cleaning</Link>
                    <Link href="/services/deep-cleaning/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">Deep Cleaning</Link>
                    <Link href="/services/move-in-move-out-cleaning/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">Move In/Out Cleaning</Link>
                    <Link href="/services/vacation-rental-airbnb-cleaning/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">Airbnb Cleaning</Link>
                    <Link href="/services/commercial-office-cleaning/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">Commercial Cleaning</Link>
                    <Link href="/services/post-construction-cleaning/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">Post-Construction</Link>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link href="/services/" className="block px-4 py-2 text-xs font-black text-star-blue hover:bg-blue-50">SEE ALL SERVICES &rarr;</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Locations Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 hover:text-star-blue transition-colors duration-300">
                  Locations <i className="fas fa-chevron-down text-[10px]"></i>
                </button>
                <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                  <div className="py-2">
                    <Link href="/locations/charleston/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">Charleston</Link>
                    <Link href="/locations/north-charleston/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">North Charleston</Link>
                    <Link href="/locations/ladson/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">Ladson</Link>
                    <Link href="/locations/summerville/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">Summerville</Link>
                    <Link href="/locations/james-island/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">James Island</Link>
                    <Link href="/locations/daniel-island/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-star-blue">Daniel Island</Link>
                    <div className="border-t border-gray-100 mt-2 pt-2">
                      <Link href="/locations/" className="block px-4 py-2 text-xs font-black text-star-blue hover:bg-blue-50">ALL SERVICE AREAS &rarr;</Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/blog/" className="hover:text-star-blue transition-colors duration-300 relative group py-2">
                Blog
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-star-blue transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link href="/about/" className="hover:text-star-blue transition-colors duration-300 relative group py-2">
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-star-blue transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link href="/faq/" className="hover:text-star-blue transition-colors duration-300 relative group py-2">
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-star-blue transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </nav>

            <div className="flex items-center gap-6 pl-6 border-l border-gray-200">
              <div className="text-right hidden xl:block">
                <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-0.5">Call Us Today</p>
                <a href="tel:8432979935" className="text-xl font-black text-gray-900 hover:text-star-blue transition-colors leading-none tracking-tight">
                  (843) 297-9935
                </a>
              </div>
              <Link href="/contact/" className="btn-cta bg-star-blue hover:bg-star-dark text-white px-7 py-3 rounded-full font-bold shadow-lg shadow-blue-200 flex items-center gap-2 transform hover:-translate-y-1 transition-all duration-300">
                <span>Get Free Quote</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden text-2xl text-gray-800 p-2 focus:outline-none z-50 relative"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-all duration-500 lg:hidden overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          
          <Link 
            href="/contact/" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-star-blue text-white text-center py-4 rounded-xl shadow-lg font-black text-lg mb-8"
          >
            Get Free Quote
          </Link>

          <nav className="flex flex-col gap-4 text-lg font-bold text-gray-800 w-full pb-20">
            
            {/* Services Accordion */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full py-2 hover:text-star-blue transition-colors"
              >
                Services
                <i className={`fas fa-chevron-down text-sm transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${servicesOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                <Link href="/services/residential-cleaning/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">Residential Cleaning</Link>
                <Link href="/services/deep-cleaning/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">Deep Cleaning</Link>
                <Link href="/services/move-in-move-out-cleaning/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">Move In/Out Cleaning</Link>
                <Link href="/services/vacation-rental-airbnb-cleaning/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">Airbnb Cleaning</Link>
                <Link href="/services/commercial-office-cleaning/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">Commercial Cleaning</Link>
                <Link href="/services/post-construction-cleaning/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">Post-Construction</Link>
                <Link href="/services/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black text-star-blue mt-2">SEE ALL SERVICES &rarr;</Link>
              </div>
            </div>

            {/* Locations Accordion */}
            <div className="border-b border-gray-100 pb-2">
              <button 
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="flex items-center justify-between w-full py-2 hover:text-star-blue transition-colors"
              >
                Locations
                <i className={`fas fa-chevron-down text-sm transition-transform duration-300 ${locationsOpen ? 'rotate-180' : ''}`}></i>
              </button>
              <div className={`flex flex-col gap-3 pl-4 overflow-hidden transition-all duration-300 ${locationsOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}>
                <Link href="/locations/charleston/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">Charleston</Link>
                <Link href="/locations/north-charleston/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">North Charleston</Link>
                <Link href="/locations/ladson/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">Ladson</Link>
                <Link href="/locations/summerville/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">Summerville</Link>
                <Link href="/locations/james-island/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">James Island</Link>
                <Link href="/locations/daniel-island/" onClick={() => setIsMobileMenuOpen(false)} className="text-base text-gray-600 font-medium">Daniel Island</Link>
                <Link href="/locations/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-black text-star-blue mt-2">ALL SERVICE AREAS &rarr;</Link>
              </div>
            </div>

            <Link href="/blog/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-100 hover:text-star-blue transition-colors">Blog</Link>
            <Link href="/about/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-100 hover:text-star-blue transition-colors">About</Link>
            <Link href="/faq/" onClick={() => setIsMobileMenuOpen(false)} className="py-2 border-b border-gray-100 hover:text-star-blue transition-colors">FAQ</Link>
            
            <div className="mt-6">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Call Now:</p>
              <a href="tel:8432979935" className="text-3xl font-black text-star-blue flex items-center gap-3">
                <i className="fas fa-phone-alt text-xl"></i> (843) 297-9935
              </a>
            </div>
          </nav>
      </div>
    </header>
  );
};

export default Navbar;