import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'About', href: '#quote' }, // Linked to quote for better UX
  ];

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
          <a href="#" className="flex items-center group relative z-50">
            <img 
              src="https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95" 
              alt="Star Cleaning" 
              className={`w-auto object-contain transition-all duration-500 ${scrolled ? 'h-12' : 'h-16 md:h-20'}`} 
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            <nav className="flex space-x-8 text-sm font-bold uppercase tracking-wider text-gray-600">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-star-blue transition-colors duration-300 relative group py-2">
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-star-blue transition-all duration-300 ease-out group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-6 pl-6 border-l border-gray-200">
              <div className="text-right hidden xl:block">
                <p className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-0.5">Call for a free estimate</p>
                <a href="tel:8432979935" className="text-xl font-black text-gray-900 hover:text-star-blue transition-colors leading-none tracking-tight">
                  (843) 297-9935
                </a>
              </div>
              <a href="#quote" className="btn-cta bg-star-blue hover:bg-star-dark text-white px-7 py-3 rounded-full font-bold shadow-lg shadow-blue-200 flex items-center gap-2 transform hover:-translate-y-1 transition-all duration-300">
                <span>Book Now</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </a>
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
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <nav className="flex flex-col items-center gap-6 text-xl font-bold text-gray-800">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-star-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:8432979935" className="text-2xl font-black text-star-blue mt-4">(843) 297-9935</a>
            <a 
              href="#quote" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full shadow-xl font-black mt-4"
            >
              Get Free Quote
            </a>
          </nav>
      </div>
    </header>
  );
};

export default Navbar;