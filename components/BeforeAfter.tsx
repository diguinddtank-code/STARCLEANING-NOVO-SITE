import React, { useState } from 'react';

const BeforeAfter: React.FC = () => {
  const [isCleaned, setIsCleaned] = useState(false);

  return (
    <section className="py-20 bg-blue-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Side */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="inline-block bg-white border border-blue-100 text-star-blue font-bold px-4 py-1.5 rounded-full mb-6 text-xs uppercase tracking-wider shadow-sm">
                <i className="fas fa-magic mr-2"></i>
                The Star Difference
            </div>
            
            <h2 className="text-4xl font-black text-gray-900 mb-6 font-heading leading-tight">
                Relax. We handle the dirty work.
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Imagine coming home to this. Our team is trained to spot details that others miss, using pet-safe products that leave your home smelling fresh, not like chemicals.
            </p>
            
            <div className="space-y-6">
                <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                        <i className="fas fa-leaf text-xl"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Eco-Friendly & Safe</h4>
                        <p className="text-sm text-gray-500">We use products that are tough on dirt but safe for your kids and pets.</p>
                    </div>
                </div>

                <div className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-star-blue shrink-0">
                        <i className="fas fa-user-check text-xl"></i>
                    </div>
                    <div>
                        <h4 className="font-bold text-gray-900 text-lg">Consistent Cleaning Team</h4>
                        <p className="text-sm text-gray-500">We try to send the same friendly face every time so they know exactly how you like things done.</p>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Magic Clean Interaction Side */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2 flex flex-col items-center">
             
             {/* Main Image Container */}
             <div className="relative mx-auto max-w-[500px] w-full aspect-[4/3] rounded-3xl shadow-2xl border-4 border-white overflow-hidden group">
                
                {/* AFTER IMAGE (Bottom Layer) */}
                <div 
                    className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 ease-out"
                    style={{ backgroundImage: "url('https://i.imgur.com/gpqI75Lh.jpg')" }}
                ></div>

                {/* BEFORE IMAGE (Top Layer) - Fades out when cleaned */}
                <div 
                    className={`absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out ${isCleaned ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
                    style={{ backgroundImage: "url('https://i.imgur.com/XhU71Rxh.jpg')" }}
                >
                    {/* Overlay to make text readable on dirty image */}
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>

                {/* Magic Button */}
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-500 ${isCleaned ? 'opacity-0 pointer-events-none scale-150' : 'opacity-100 scale-100'}`}>
                    <button 
                        onClick={() => setIsCleaned(true)}
                        className="relative w-24 h-24 bg-white rounded-full shadow-[0_0_40px_rgba(255,255,255,0.6)] flex flex-col items-center justify-center group/btn animate-pulse-slow hover:animate-none hover:scale-110 transition-transform"
                    >
                        <div className="text-4xl text-star-blue mb-1 transform group-hover/btn:rotate-12 transition-transform">
                             <i className="fas fa-broom"></i>
                        </div>
                        <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Tap to<br/>Clean</span>
                        
                        {/* Ripple Effect Ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-white/50 animate-ping"></div>
                    </button>
                </div>
                
                {/* Sparkles (Show when cleaned) */}
                <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${isCleaned ? 'opacity-100' : 'opacity-0'}`}>
                     <i className="fas fa-sparkles text-yellow-300 text-4xl absolute top-10 right-10 animate-bounce" style={{animationDelay: '0.1s'}}></i>
                     <i className="fas fa-sparkles text-white text-2xl absolute bottom-20 left-10 animate-pulse" style={{animationDelay: '0.3s'}}></i>
                     <i className="fas fa-star text-white text-xl absolute top-1/2 right-1/4 animate-ping" style={{animationDelay: '0.5s'}}></i>
                </div>

                {/* Reset Button (Tiny, bottom corner) */}
                <button 
                    onClick={(e) => { e.stopPropagation(); setIsCleaned(false); }}
                    className={`absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md transition-all ${isCleaned ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                >
                    <i className="fas fa-undo mr-1"></i> Reset
                </button>

             </div>

             <p className="text-center text-xs text-gray-400 mt-6 italic animate-fade-in">
                {isCleaned 
                    ? <span className="text-green-600 font-bold"><i className="fas fa-check-circle mr-1"></i> Spotless! That's the Star Standard.</span>
                    : <span><i className="fas fa-mouse-pointer mr-1"></i> Tap the button to clean the room!</span>
                }
            </p>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;