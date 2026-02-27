import React from 'react';

const ServiceAreas: React.FC = () => {
  const locations = [
    "Charleston",
    "Summerville",
    "Mount Pleasant",
    "West Ashley",
    "James Island",
    "North Charleston",
    "Goose Creek",
    "Daniel Island",
    "Hanahan",
    "Ladson",
    "Moncks Corner",
    "Johns Island"
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
            <span className="text-star-blue font-bold uppercase tracking-widest text-[10px] lg:text-xs mb-2 block">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Service Areas
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 font-heading">
                Proudly Serving Charleston, Summerville & The Lowcountry
            </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Map Column */}
            <div className="w-full h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 group">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d107387.83606995648!2d-80.14167664883445!3d32.79878298711681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88fe7a42d398d9b5%3A0x6295777c57af9893!2sCharleston%2C%20SC!5e0!3m2!1sen!2sus!4v1716300000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                    title="Star Cleaning Service Area Map"
                ></iframe>
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-gray-100 pointer-events-none">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-xs font-bold text-gray-800">Live Coverage Area</span>
                    </div>
                </div>
            </div>

            {/* Content/List Column */}
            <div className="flex flex-col">
                <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <i className="fas fa-truck text-star-blue"></i>
                        We come to you
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        Star Cleaning is locally owned and operated. We are not a franchise. We live in these neighborhoods and take pride in serving our community with reliable, high-quality cleaning services.
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {locations.map((city, idx) => (
                            <a 
                                key={idx} 
                                href="#quote"
                                className="px-3 py-1.5 bg-white text-gray-600 rounded-lg text-xs font-bold border border-gray-200 shadow-sm hover:border-star-blue hover:text-star-blue hover:shadow-md transition-all duration-200"
                            >
                                <i className="fas fa-map-pin text-[10px] mr-1 opacity-50"></i>
                                {city}
                            </a>
                        ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-blue-100 flex items-center justify-between">
                         <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Don't see your area?</span>
                         <a href="tel:8432979935" className="text-sm font-bold text-star-blue hover:underline">
                            Call us to ask: (843) 297-9935
                         </a>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;