import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const Services: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const servicesData = [
    {
      title: "Residential Cleaning",
      icon: "fa-spray-can",
      description: "Keep your home consistently fresh with our weekly or bi-weekly plans.",
      image: "https://mistyclean.com/wp-content/uploads/2024/07/Banner-img-Professional-cleaning-Services-in-Maryland-scaled.webp",
      tag: "MOST POPULAR",
      details: ["Dusting all surfaces", "Vacuuming carpets", "Mopping floors", "Sanitizing bathrooms", "Kitchen detailing", "Making beds"]
    },
    {
      title: "Deep Cleaning",
      icon: "fa-sparkles",
      description: "Perfect for spring cleaning or first-time service. We touch every surface.",
      image: "https://img.freepik.com/free-photo/woman-holding-rag-detergent-cleaning-cooker_651396-2881.jpg?semt=ais_user_personalization&w=740&q=80",
      details: ["Baseboards & doors", "Inside windows", "Deep scrub tiles", "Cabinet exteriors", "Light fixtures", "Vents & fans"]
    },
    {
      title: "Move In / Move Out",
      icon: "fa-box-open",
      description: "Secure your deposit or prepare your new home. Empty home specialist.",
      image: "https://jjccservices.com/wp-content/uploads/2025/03/Move-In-Move-Out-Cleaning-Checklist-Latest-2021-Update.jpg",
      details: ["Inside cabinets", "Inside appliances", "Deep bathroom clean", "Spot clean walls", "Window tracks", "Garage sweep"]
    },
    {
      title: "Vacation Rental / Airbnb",
      icon: "fa-suitcase-rolling",
      description: "Fast turnovers for 5-star host ratings. Linen service included.",
      image: "https://prohousekeepers.com/wp-content/uploads/2020/03/airbnb_pixabay-e1584981299557-1.jpg",
      details: ["Same-day turnover", "Linen changing", "Restocking essentials", "Damage reporting", "Key management", "Welcome setups"]
    },
    {
      title: "Commercial Office",
      icon: "fa-building",
      description: "Office spaces, retail stores, and medical facilities. Flexible hours.",
      image: "https://nextdaycleaning.com/wp-content/uploads/2020/12/What-are-the-Benefits-of-Commercial-Office-Cleaning-1024x683.jpg",
      details: ["Reception areas", "Cubicles/Offices", "Breakrooms", "Restrooms", "Trash removal", "Floor maintenance"]
    },
    {
      title: "Post-Construction",
      icon: "fa-hard-hat",
      description: "Removing dust and debris after renovation or new builds.",
      image: "https://imperialcleaning.com/wp-content/uploads/2019/03/Post-Construction-Cleaning-Services.jpg",
      details: ["Drywall dust removal", "Sticker removal", "Fixture polishing", "Vent vacuuming", "Cabinet interiors", "Final detail"]
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-32 bg-gray-50 relative overflow-hidden">
      
      {/* Replaced messy pattern with clean, subtle decorative blobs for a premium look */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100 rounded-full blur-[120px] opacity-40 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" width="full">
            <div className="text-center mb-10 lg:mb-16 max-w-3xl mx-auto">
            <span className="text-star-blue font-bold uppercase tracking-widest text-[10px] lg:text-xs bg-white border border-blue-100 px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">
                Our Services
            </span>
            {/* H2 optimized for High Intent Keywords including Summerville */}
            <h2 className="text-3xl md:text-5xl font-black mb-4 lg:mb-6 text-gray-900 font-heading leading-tight">
                Premium House Cleaning <br/> in Charleston & Summerville
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Whether you need a weekly maid service or a one-time deep clean, our vetted professionals have you covered.
            </p>
            </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
                <ServiceCard 
                {...service}
                isOpen={activeCard === index}
                onClick={() => toggleCard(index)}
                />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  title: string;
  icon: string;
  description: string;
  image: string;
  tag?: string;
  details: string[];
  isOpen: boolean;
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, icon, description, image, tag, details, isOpen, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`h-full group bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out border border-gray-100 overflow-hidden cursor-pointer flex flex-col ${isOpen ? 'ring-2 ring-star-blue ring-offset-2' : ''}`}
    >
      {/* Reduced height on mobile for compactness */}
      <div className={`relative overflow-hidden transition-all duration-500 ${isOpen ? 'h-24 lg:h-32' : 'h-48 lg:h-56'}`}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
        <img src={image} alt={`${title} Service Charleston`} className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-out" />
        {tag && (
          <div className="absolute top-3 right-3 lg:top-4 lg:right-4 bg-yellow-400 text-blue-900 px-2 py-0.5 lg:px-3 lg:py-1 rounded-full text-[9px] lg:text-[10px] font-black uppercase z-20 shadow-md">
            {tag}
          </div>
        )}
      </div>
      
      <div className="p-6 lg:p-8 flex-grow flex flex-col relative">
        <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl -mt-12 lg:-mt-14 relative z-20 flex items-center justify-center shadow-lg transition-colors duration-300 mb-3 lg:mb-4 ${isOpen ? 'bg-star-blue text-white' : 'bg-white text-star-blue'}`}>
             <i className={`fas ${icon} text-xl lg:text-2xl`}></i>
        </div>

        {/* H3 for SEO relevance */}
        <h3 className="text-lg lg:text-2xl font-bold text-gray-900 font-heading leading-tight mb-2 lg:mb-3 group-hover:text-star-blue transition-colors">{title}</h3>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">{description}</p>
        
        {/* Expandable Content */}
        {/* Increased max-h to allow for button visibility without cutting off */}
        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[600px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
          <div className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-100">
             <h4 className="text-xs font-bold uppercase text-star-blue mb-3 tracking-wider flex items-center gap-2">
                <i className="fas fa-list-ul"></i> What's Included:
             </h4>
             <ul className="space-y-2 mb-5">
               {details.map((detail, idx) => (
                 <li key={idx} className="flex items-start text-xs lg:text-sm text-gray-700 font-medium">
                   <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2 text-xs flex-shrink-0"></i>
                   <span>{detail}</span>
                 </li>
               ))}
             </ul>
             
             {/* CTA Button */}
             <a 
                href="#quote" 
                onClick={(e) => e.stopPropagation()} 
                className="w-full bg-star-blue hover:bg-star-dark text-white font-bold py-3 rounded-xl shadow-md flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 active:scale-95 text-sm"
             >
                <span>Book This Service</span>
                <i className="fas fa-arrow-right text-xs"></i>
             </a>
          </div>
        </div>

        <div className="mt-auto pt-5 lg:pt-6 flex items-center justify-between border-t border-gray-50">
          <span className={`text-[10px] lg:text-xs font-bold uppercase tracking-wider transition-colors ${isOpen ? 'text-gray-400' : 'text-star-blue group-hover:underline'}`}>
              {isOpen ? 'Close Details' : 'View Checklist'}
          </span>
          <div className={`w-7 h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-gray-100 border-gray-200 rotate-180' : 'border-blue-100 bg-blue-50 text-star-blue group-hover:bg-star-blue group-hover:text-white group-hover:border-transparent'}`}>
            <i className="fas fa-chevron-down text-[10px] lg:text-xs"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;