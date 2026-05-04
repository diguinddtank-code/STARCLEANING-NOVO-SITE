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
            <div className="w-full h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl relative z-10 group bg-gray-100">
                <iframe 
                    src="https://maps.google.com/maps?q=32.94,-80.04&t=&z=10&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                    title="Star Cleaning Service Area Map"
                ></iframe>
                
                {/* Fake Client Pins Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Client 1 Review */}
                    <div className="absolute top-[25%] left-[20%] flex flex-col items-center">
                        <div className="bg-white px-3 py-2 rounded-xl shadow-xl border border-gray-100 text-[10px] text-gray-700 mb-1.5 transition-all duration-300 max-w-[140px] animate-fade-in-up">
                            <div className="flex gap-0.5 text-yellow-400 mb-0.5">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                            <span className="font-bold block">"Impeccable!"</span>
                            <span className="text-[9px] text-gray-500">- Sarah, Summerville</span>
                        </div>
                        <div className="relative flex justify-center items-center">
                            <div className="absolute w-8 h-8 bg-blue-400 rounded-full animate-ping opacity-40"></div>
                            <div className="relative w-5 h-5 bg-blue-600 border-2 border-white rounded-full shadow-md flex items-center justify-center">
                              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Client 2 Area */}
                    <div className="absolute top-[45%] right-[15%] flex flex-col items-center">
                        <div className="bg-white px-3 py-1.5 rounded-lg shadow-xl border border-gray-100 text-[10px] font-bold text-gray-700 mb-1 flex items-center gap-1.5 whitespace-nowrap animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <i className="fas fa-map-pin text-green-500 text-[9px]"></i> Cliente Star Cleaning
                        </div>
                        <div className="relative flex justify-center items-center">
                            <div className="absolute w-6 h-6 bg-green-400 rounded-full animate-ping opacity-40" style={{ animationDelay: '0.5s' }}></div>
                            <div className="relative w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow-md flex items-center justify-center"></div>
                        </div>
                    </div>

                    {/* Client 3 */}
                    <div className="absolute bottom-[35%] left-[35%] flex flex-col items-center">
                        <div className="bg-white px-3 py-1.5 rounded-lg shadow-xl border border-gray-100 text-[10px] font-bold text-gray-700 mb-1 flex items-center gap-2 whitespace-nowrap animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                            <div className="flex -space-x-1">
                                <div className="w-4 h-4 rounded-full bg-blue-100 border border-white flex items-center justify-center"><i className="fas fa-user text-[7px] text-blue-600"></i></div>
                            </div>
                            <span>Área de Cobertura</span>
                        </div>
                        <div className="relative flex justify-center items-center">
                            <div className="relative w-3.5 h-3.5 bg-star-blue border-2 border-white rounded-full shadow-md"></div>
                        </div>
                    </div>
                </div>

                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-gray-100 pointer-events-none flex items-center justify-between sm:justify-start gap-4 transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center gap-3">
                        <div className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-black text-gray-900 leading-none">Live Coverage Area</span>
                          <span className="text-[10px] text-gray-500 font-medium mt-0.5">Charleston & Summerville</span>
                        </div>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center z-20 shadow-sm"><i className="fas fa-truck text-[8px] text-blue-600"></i></div>
                      <div className="w-6 h-6 rounded-full border-2 border-white bg-green-100 flex items-center justify-center z-10 shadow-sm"><i className="fas fa-broom text-[8px] text-green-600"></i></div>
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