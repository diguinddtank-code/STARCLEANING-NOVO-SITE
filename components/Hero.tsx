import React, { useState, useRef } from 'react';

interface HeroProps {
  onStartQuote: (data: any) => void;
}

const Hero: React.FC<HeroProps> = ({ onStartQuote }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  
  // States for Zip Code Logic
  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState<string | null>(null);
  const [isCheckingZip, setIsCheckingZip] = useState(false);

  const handleZipChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipCode(val);

    if (val.length === 5) {
        setIsCheckingZip(true);
        try {
            const response = await fetch(`https://api.zippopotam.us/us/${val}`);
            if (response.ok) {
                const data = await response.json();
                setCity(data.places[0]['place name']);
            } else {
                setCity(null);
            }
        } catch (error) {
            setCity(null);
        } finally {
            setIsCheckingZip(false);
        }
    } else {
        setCity(null);
    }
  };

  const handleSubmit = (e?: React.FormEvent | React.MouseEvent | React.TouchEvent) => {
    if (e) e.preventDefault();
    
    if (!formRef.current) return;
    
    setIsSubmitting(true);
    
    // Slight delay to show loading state for UX
    setTimeout(() => {
        const formData = new FormData(formRef.current!);
        const data = Object.fromEntries(formData.entries());
        
        // Pass data up to App component to pre-fill BookingForm
        onStartQuote({
            ...data,
            zipCode: zipCode // Ensure zip matches state
        });
        
        setIsSubmitting(false);
    }, 600);
  };

  return (
    <section id="home" className="relative py-8 lg:py-28 overflow-hidden min-h-[75vh] lg:min-h-[90vh] flex items-center bg-white">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://img.freepik.com/free-photo/top-view-frame-with-cleaning-products-wooden-background_23-2148357412.jpg"
          className="w-full h-full object-cover object-center"
        >
          <source src="https://i.imgur.com/Q7QVFW7.mp4" type="video/mp4" />
        </video>
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 lg:h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-16 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
            
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left pt-2 lg:pt-0">
            
            {/* Top Badges */}
            <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-3 mb-6">
                <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-md px-4 py-2 rounded-full transform hover:scale-105 transition-transform duration-300 cursor-default">
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <div className="flex items-center gap-1">
                    <span className="text-gray-900 font-bold text-xs lg:text-sm">5.0</span>
                    <div className="flex text-yellow-400 text-[10px] lg:text-xs">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
                </div>

                <div className="inline-flex items-center gap-2 bg-blue-900/90 backdrop-blur-sm border border-blue-800 shadow-md px-4 py-2 rounded-full transform hover:scale-105 transition-transform duration-300 cursor-default">
                     <i className="fas fa-flag-usa text-red-500"></i>
                     <span className="text-[10px] lg:text-xs text-white font-bold uppercase tracking-wide">Veteran Owned Business</span>
                </div>
            </div>
            
            <div className="lg:hidden bg-white/60 backdrop-blur-sm rounded-2xl p-4 mb-6 shadow-sm border border-white/50">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-2 lg:mb-6 font-heading drop-shadow-sm lg:drop-shadow-none">
                Take Back<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-star-blue">Your Weekend.</span>
                </h1>
                
                <h2 className="text-sm sm:text-lg md:text-xl text-gray-700 lg:text-gray-600 lg:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-semibold lg:font-medium">
                Life is too short to scrub floors. Join neighbors in <strong>Charleston & Summerville</strong> who trust Star Cleaning to handle the dirty work.
                </h2>
            </div>
            
            <div className="hidden lg:block">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-4 lg:mb-6 font-heading drop-shadow-sm lg:drop-shadow-none">
                Take Back<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-star-blue">Your Weekend.</span>
                </h1>
                
                <h2 className="text-sm sm:text-lg md:text-xl text-gray-700 lg:text-gray-600 mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-semibold lg:font-medium bg-white/30 lg:bg-transparent rounded-lg backdrop-blur-[1px] lg:backdrop-blur-none p-2 lg:p-0">
                Life is too short to scrub floors. Join neighbors in <strong>Charleston & Summerville</strong> who trust Star Cleaning to handle the dirty work.
                </h2>
            </div>

            {/* BUTTONS SECTION */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center w-full">
              
              <div className="hidden sm:flex flex-col items-center lg:items-start gap-2">
                <button onClick={() => document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'})} className="btn-cta bg-star-blue hover:bg-star-dark text-white px-8 py-3.5 lg:py-4 rounded-full font-extrabold text-base lg:text-lg shadow-lg shadow-blue-200/50 w-auto text-center transform hover:scale-105 transition duration-200 border-b-4 border-blue-900 active:border-b-0 active:translate-y-1">
                    Get Free Estimate
                </button>
                <span className="text-[10px] font-bold text-gray-500 bg-white/80 px-2 py-0.5 rounded-full border border-gray-100 shadow-sm animate-pulse-slow">
                    <i className="fas fa-tag text-yellow-500 mr-1"></i> (20% OFF First Deep Clean)
                </span>
              </div>

              <div className="flex flex-col w-full sm:hidden gap-2">
                  <div className="flex w-full gap-3">
                      <button onClick={() => document.getElementById('quote')?.scrollIntoView({behavior: 'smooth'})} className="flex-1 bg-star-blue hover:bg-star-dark text-white rounded-xl shadow-md text-center flex flex-col items-center justify-center border-b-4 border-blue-900 active:border-b-0 active:translate-y-1 transition-all py-3 relative overflow-hidden group">
                        <span className="font-bold text-sm leading-tight uppercase tracking-wide">Free Estimate</span>
                        <div className="mt-1 bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/10">
                             <span className="text-[10px] font-black text-yellow-300 leading-none block animate-pulse">
                                SAVE 20%
                            </span>
                        </div>
                      </button>
                      
                      <a href="tel:8432979935" className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-blue-900 rounded-xl font-bold text-sm shadow-md text-center flex items-center justify-center gap-2 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 transition-all py-3">
                        <i className="fas fa-phone-alt text-lg"></i>
                        <span>Call Now</span>
                      </a>
                  </div>
              </div>

              <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-gray-600 bg-white/60 px-4 py-2 rounded-lg backdrop-blur-sm border border-gray-100 h-fit self-center">
                <i className="fas fa-shield-alt text-green-600 text-xl"></i>
                <span className="leading-tight text-left">100% Satisfaction<br />Guaranteed</span>
              </div>
            </div>
            
            <div className="sm:hidden flex justify-center gap-4 mt-4 text-[10px] font-bold text-gray-600 uppercase tracking-wide bg-white/80 py-2 rounded-full backdrop-blur-md shadow-sm">
                <div className="flex items-center gap-1"><i className="fas fa-check-circle text-green-600"></i> Insured</div>
                <div className="flex items-center gap-1"><i className="fas fa-check-circle text-green-600"></i> Vetted</div>
                <div className="flex items-center gap-1"><i className="fas fa-check-circle text-green-600"></i> 5-Stars</div>
            </div>
          </div>

          {/* Right Content - THE FORM */}
          <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end mt-0">
            
            <div className="hidden lg:block w-full max-w-md bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white relative z-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  
                  <div className="text-center mb-6 relative">
                      <div className="inline-block p-3 rounded-full bg-blue-50 text-star-blue mb-3 shadow-inner">
                        <i className="fas fa-magic text-xl"></i>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 font-heading">Get Your Price</h3>
                      <p className="text-gray-500 text-sm mt-1 font-medium">Start here to see your personalized quote.</p>
                  </div>

                  <form ref={formRef} className="space-y-4 relative">
                      
                      <div>
                          <input 
                            type="text" 
                            name="fullName" 
                            placeholder="Full Name" 
                            required 
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block p-3 shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
                          />
                      </div>

                      <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        required 
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block p-3 shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
                      />

                      <div className="grid grid-cols-2 gap-3">
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Phone" 
                            required 
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block p-3 shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
                        />
                        <div className="relative">
                            <input 
                                type="text" 
                                name="zipCode" 
                                placeholder="Zip Code" 
                                required 
                                value={zipCode}
                                onChange={handleZipChange}
                                maxLength={5}
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block p-3 shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
                            />
                             {isCheckingZip && (
                                <div className="absolute right-3 top-3">
                                    <i className="fas fa-circle-notch fa-spin text-star-blue text-xs"></i>
                                </div>
                            )}
                        </div>
                      </div>

                      {city && (
                        <div className="bg-green-50 border border-green-100 rounded-xl p-3 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                             <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm text-green-500 shrink-0">
                                <i className="fas fa-magic"></i>
                             </div>
                             <div>
                                <p className="text-green-800 text-sm font-bold leading-none">Available in <span className="text-green-600">{city}</span>!</p>
                                <p className="text-green-600 text-[10px] mt-0.5">High demand: <span className="font-bold">10 neighbors</span> booked this week.</p>
                             </div>
                        </div>
                      )}

                      <div className="relative">
                        <select 
                            name="serviceType" 
                            className="w-full bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block p-3 shadow-sm transition-all focus:bg-white font-semibold appearance-none cursor-pointer"
                        >
                            <option>Standard House Cleaning</option>
                            <option>Deep Cleaning</option>
                            <option>Move In / Move Out</option>
                            <option>Vacation Rental</option>
                        </select>
                        <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs bg-transparent"></i>
                      </div>

                      <button 
                        type="button" 
                        disabled={isSubmitting}
                        onClick={(e) => handleSubmit(e)}
                        className="w-full bg-star-blue hover:bg-star-dark text-white font-black py-4 rounded-xl shadow-lg shadow-blue-200 transform hover:-translate-y-0.5 active:scale-95 transition duration-200 flex justify-center items-center gap-2 mt-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation"
                      >
                        {isSubmitting ? (
                            <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                            <>
                                <span>GET MY PRICE</span>
                                <i className="fas fa-arrow-right"></i>
                            </>
                        )}
                      </button>
                      
                      <button type="submit" className="hidden" onClick={(e) => handleSubmit(e)}></button>
                      
                      <div className="flex items-center justify-center gap-2 mt-4 opacity-70">
                         <i className="fas fa-lock text-green-600 text-xs"></i>
                         <span className="text-[10px] text-gray-500 font-bold uppercase">SSL Secure & Encrypted</span>
                      </div>
                  </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;