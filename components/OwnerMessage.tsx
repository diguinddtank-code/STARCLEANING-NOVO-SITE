import React from 'react';

const OwnerMessage: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background Decor - Hidden on mobile for performance and cleaner look */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none hidden lg:block">
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl mix-blend-multiply animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-yellow-50 rounded-full blur-3xl mix-blend-multiply animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24">

          {/* Left Side: Image & Decor */}
          <div className="lg:w-5/12 relative flex flex-col items-center group">
            
            {/* Speech Bubble - Only visible on desktop to save space on mobile */}
            <div className="hidden lg:block absolute -top-8 -right-12 z-20 animate-float pointer-events-none">
               <div className="bg-white text-star-blue p-6 rounded-3xl rounded-bl-none shadow-[0_10px_30px_rgba(0,0,0,0.15)] max-w-[240px] relative border border-gray-100 transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                  <p className="font-bold text-sm leading-snug italic font-heading">
                    <i className="fas fa-quote-left text-yellow-400 mr-2 text-lg"></i>
                    I promise cleaning day will be the best day of the week!
                  </p>
                  {/* Bubble Tail */}
                  <div className="absolute -bottom-3 left-0 w-6 h-6 bg-white border-b border-l border-gray-100 transform rotate-45 skew-x-12 translate-x-2"></div>
               </div>
            </div>

            {/* Main Image Container */}
            <div className="relative z-10 w-full max-w-[280px] lg:max-w-[380px]">
              {/* Abstract shapes behind */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 to-yellow-400 rounded-[2rem] lg:rounded-[3rem] transform rotate-3 scale-[1.03] shadow-lg group-hover:rotate-2 transition-transform duration-500"></div>
              
              <img
                src="https://i.imgur.com/Nv15wCN.png"
                alt="Star Cleaning Team Member"
                className="w-full h-auto rounded-[2rem] lg:rounded-[3rem] shadow-2xl border-4 lg:border-[6px] border-white relative z-10 object-cover aspect-[4/5]"
              />
              
              {/* Badge Overlay - Enhanced & Enabled on Mobile */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-left-6 z-30 block animate-pulse-slow">
                 <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-white rounded-full p-1.5 lg:p-2 shadow-2xl">
                    <div className="w-full h-full rounded-full border-2 border-dashed border-yellow-400 flex flex-col items-center justify-center text-center bg-star-blue text-white overflow-hidden relative group-hover:scale-105 transition-transform">
                       <div className="absolute inset-0 bg-blue-600 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                       <span className="relative text-xl sm:text-2xl lg:text-3xl font-black leading-none mb-0.5 lg:mb-1">100%</span>
                       <span className="relative text-[6px] sm:text-[8px] lg:text-[9px] uppercase font-bold tracking-wider leading-tight">Satisfaction<br/>Guaranteed</span>
                    </div>
                 </div>
              </div>
            </div>

          </div>

          {/* Right Side: Blue Box Content */}
          <div className="lg:w-6/12 w-full mt-4 lg:mt-0">
             <div className="bg-gradient-to-br from-[#009FE3] to-star-dark text-white rounded-3xl lg:rounded-[3rem] lg:rounded-tl-none p-6 md:p-14 shadow-2xl relative overflow-hidden isolate">
                
                {/* Texture/Pattern */}
                <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 lg:px-4 lg:py-2 rounded-full mb-4 lg:mb-6 border border-white/10">
                        <i className="fas fa-heart text-yellow-400 animate-pulse"></i>
                        <span className="text-[10px] lg:text-xs font-bold uppercase tracking-widest text-blue-50">Local & Family Owned</span>
                    </div>

                    <h2 className="text-2xl md:text-5xl font-black mb-4 lg:mb-6 font-heading leading-tight">
                      A Clean Home <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">Starts Here!</span>
                    </h2>
                    
                    <div className="space-y-4 lg:space-y-6 text-blue-50 text-sm md:text-lg leading-relaxed font-medium opacity-90">
                        <p>
                            Thank you for visiting! We are dedicated to bringing high-quality, reliable house cleaning services to <strong>Charleston, Summerville</strong>, and the surrounding Lowcountry areas.
                        </p>
                        <p>
                            We know inviting someone into your home is a big deal. That's why at <strong>Star Cleaning</strong>, we treat your home with the same care and respect as our own.
                        </p>
                    </div>

                    <div className="mt-6 lg:mt-8 flex items-center gap-4">
                        <div className="h-px bg-white/20 flex-grow"></div>
                        <span className="font-handwriting text-2xl md:text-4xl text-yellow-300 transform -rotate-3 block text-center sm:text-right font-bold mt-2">
                           Mariana & The Team
                        </span>
                        <div className="h-px bg-white/20 flex-grow"></div>
                    </div>

                    <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row gap-4 lg:gap-5 items-center">
                        <a href="#quote" className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-8 py-3.5 lg:py-4 rounded-xl font-black shadow-[0_10px_20px_rgba(250,204,21,0.3)] transform hover:-translate-y-1 transition-all duration-300 flex justify-center items-center gap-3">
                            <span>Get My Free Quote</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="tel:8432979935" className="group flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-white/10 transition">
                             <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:scale-110 transition">
                                <i className="fas fa-phone text-yellow-300 text-sm lg:text-base"></i>
                             </div>
                             <div className="flex flex-col">
                                 <span className="text-[10px] font-bold opacity-70 uppercase tracking-wider">Call or Text</span>
                                 <span className="text-base lg:text-lg font-black text-white group-hover:text-yellow-300 transition">(843) 297-9935</span>
                             </div>
                        </a>
                    </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OwnerMessage;