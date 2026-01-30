import React, { useEffect, useState } from 'react';

const MobileAppNav: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'reviews', 'quote'];
      const scrollPosition = window.scrollY + 300; // Offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-200 z-[45] pb-[env(safe-area-inset-bottom)] shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16 px-2">
        
        <NavItem 
          icon="fa-home" 
          label="Home" 
          isActive={activeTab === 'home'} 
          onClick={() => scrollToSection('home')} 
        />

        <NavItem 
          icon="fa-spray-can" 
          label="Services" 
          isActive={activeTab === 'services'} 
          onClick={() => scrollToSection('services')} 
        />

        {/* Center CTA Button - "Floating" effect */}
        <div className="relative -top-5">
            <button 
                onClick={() => scrollToSection('quote')}
                className="w-14 h-14 bg-star-blue rounded-full shadow-lg shadow-blue-200 flex items-center justify-center text-white border-4 border-white transform active:scale-95 transition-transform"
            >
                <i className="fas fa-calendar-check text-lg"></i>
            </button>
        </div>

        <NavItem 
          icon="fa-star" 
          label="Reviews" 
          isActive={activeTab === 'reviews'} 
          onClick={() => scrollToSection('reviews')} 
        />

        <a 
          href="tel:8432979935"
          className="flex flex-col items-center justify-center w-16 gap-1 text-gray-400 hover:text-green-600 transition-colors"
        >
          <i className={`fas fa-phone text-xl mb-0.5`}></i>
          <span className="text-[10px] font-medium leading-none">Call</span>
        </a>

      </div>
    </div>
  );
};

interface NavItemProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-16 gap-1 transition-all duration-300 ${isActive ? 'text-star-blue translate-y-[-2px]' : 'text-gray-400'}`}
  >
    <i className={`fas ${icon} text-xl mb-0.5 ${isActive ? 'scale-110' : ''}`}></i>
    <span className={`text-[10px] font-medium leading-none ${isActive ? 'font-bold' : ''}`}>{label}</span>
  </button>
);

export default MobileAppNav;