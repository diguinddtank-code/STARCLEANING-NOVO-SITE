import React from 'react';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-8 lg:py-16 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:justify-center items-center gap-y-6 gap-x-4 md:gap-x-8">
          
          {/* Main Trust Item: Nextdoor - Spans 2 cols on mobile for emphasis */}
          <div className="col-span-2 lg:col-span-1 flex justify-center lg:block mb-2 lg:mb-0">
            <div className="inline-flex items-center gap-3 bg-gray-50 px-5 py-2.5 rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group hover:border-green-200 w-full justify-center lg:w-auto">
                <div className="bg-[#8ED500] text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-inner">
                <i className="fas fa-home text-sm"></i>
                </div>
                <div className="flex flex-col text-left">
                <span className="font-black text-gray-800 leading-none text-sm group-hover:text-[#8ED500] transition-colors">nextdoor</span>
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Neighborhood Fave</span>
                </div>
            </div>
          </div>

          <div className="hidden lg:block h-10 w-px bg-gray-200"></div>

          <TrustItem 
            icon="fa-paw" 
            label="PET FRIENDLY" 
            subLabel="We love animals" 
            color="text-orange-400"
          />
          
          <div className="hidden lg:block h-10 w-px bg-gray-200"></div>

          <TrustItem 
            icon="fa-user-shield" 
            label="BACKGROUND CHECKED" 
            subLabel="100% Vetted Staff" 
            color="text-blue-500"
          />

          <div className="hidden lg:block h-10 w-px bg-gray-200"></div>

          {/* FIX: Centered Last Item on Mobile (col-span-2) and Tablet (col-start-2) */}
          <TrustItem 
            icon="fa-flag-usa" 
            label="VETERAN OWNED" 
            subLabel="18 Years Serving SC" 
            color="text-red-500"
            className="col-span-2 md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
          />

        </div>
      </div>
    </div>
  );
};

interface TrustItemProps {
  icon: string;
  label: string;
  subLabel?: string;
  color: string;
  className?: string;
}

const TrustItem: React.FC<TrustItemProps> = ({ icon, label, subLabel, color, className = "" }) => (
  <div className={`flex flex-col items-center justify-center text-center gap-1.5 opacity-90 hover:opacity-100 transition-all group hover:-translate-y-1 duration-300 ${className}`}>
    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-50 flex items-center justify-center mb-1 group-hover:bg-white group-hover:shadow-md transition-all border border-transparent group-hover:border-gray-100`}>
        <i className={`fas ${icon} text-lg lg:text-2xl ${color} group-hover:scale-110 transition-transform`}></i>
    </div>
    <div className="flex flex-col">
        <span className="text-[10px] lg:text-xs font-black text-gray-700 tracking-wider">{label}</span>
        {subLabel && <span className="text-[9px] lg:text-[10px] text-gray-400 font-medium">{subLabel}</span>}
    </div>
  </div>
);

export default TrustBar;