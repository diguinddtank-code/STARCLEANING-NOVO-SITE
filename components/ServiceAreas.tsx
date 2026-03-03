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
            <div className="w-full h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 group bg-gray-100 cursor-crosshair">
                <iframe 
                    src="https://maps.google.com/maps?q=Star%20Cleaning%20SC,%20Charleston,%20SC&t=&z=10&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out pointer-events-none w-full h-full"
                    title="Star Cleaning Service Area Map"
                ></iframe>
                
                {/* Fake Client Pins Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Client 1 */}
                    <div className="absolute top-[35%] left-[30%] flex flex-col items-center">
                        <div className="bg-white px-2 py-1 rounded-md shadow-md text-[8px] font-bold text-gray-600 mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                            Cleaning now...
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                            <div className="relative w-4 h-4 bg-blue-500 border-2 border-white rounded-full shadow-md"></div>
                        </div>
                    </div>

                    {/* Client 2 */}
                    <div className="absolute top-[50%] right-[25%] flex flex-col items-center">
                        <div className="bg-white px-2 py-1 rounded-md shadow-md text-[8px] font-bold text-gray-600 mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 translate-y-2 group-hover:translate-y-0">
                            Scheduled
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '0.5s' }}></div>
                            <div className="relative w-3 h-3 bg-green-500 border-2 border-white rounded-full shadow-md"></div>
                        </div>
                    </div>

                    {/* Client 3 */}
                    <div className="absolute bottom-[30%] left-[45%] flex flex-col items-center">
                        <div className="bg-white px-2 py-1 rounded-md shadow-md text-[8px] font-bold text-gray-600 mb-1 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200 translate-y-2 group-hover:translate-y-0">
                            Finished
                        </div>
                        <div className="relative">
                            <div className="relative w-3.5 h-3.5 bg-gray-400 border-2 border-white rounded-full shadow-md"></div>
                        </div>
                    </div>
                    
                    {/* Client 4 */}
                    <div className="absolute top-[20%] right-[40%] flex flex-col items-center">
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75" style={{ animationDelay: '1.2s' }}></div>
                            <div className="relative w-3 h-3 bg-blue-500 border-2 border-white rounded-full shadow-md"></div>
                        </div>
                    </div>
                </div>

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