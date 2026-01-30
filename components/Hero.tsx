import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Payload preparation
    const payload = {
        ...data,
        formSource: "Hero Section Quote",
        submittedAt: new Date().toISOString()
    };
    
    try {
      await fetch("https://webhook.infra-remakingautomacoes.cloud/webhook/scsite", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });
      setShowPopup(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again or call us.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative py-8 lg:py-28 overflow-hidden min-h-[75vh] lg:min-h-[90vh] flex items-center bg-white">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://img.freepik.com/free-photo/top-view-frame-with-cleaning-products-wooden-background_23-2148357412.jpg" 
          alt="Professional Home Cleaning Service in Charleston SC" 
          className="w-full h-full object-cover object-center"
        />
        
        {/* DESKTOP Gradient: Clean fade from left (white) to transparent */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
        
        {/* MOBILE Gradient: Top white (for nav), Middle transparent (for image visibility) */}
        <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-white/95 via-white/60 to-transparent"></div>
        
        {/* FLUID TRANSITION: Premium Gradient Fade to White at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-32 lg:h-64 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-16 lg:pb-0">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-20">
            
          {/* Left Content - Compact Mobile */}
          <div className="lg:w-1/2 text-center lg:text-left pt-2 lg:pt-0">
            
            {/* NEW: Google 5-Star Review Badge */}
            <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border border-gray-100 shadow-md px-4 py-2 rounded-full mb-6 transform hover:scale-105 transition-transform duration-300 cursor-default">
              <img 
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" 
                alt="Google" 
                className="w-5 h-5"
              />
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
              <div className="h-4 w-px bg-gray-200 mx-1"></div>
              <span className="text-[10px] lg:text-xs text-gray-500 font-medium uppercase tracking-wide">500+ Happy Neighbors</span>
            </div>
            
            {/* H1 with slight shadow for better contrast on mobile */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-4 lg:mb-6 font-heading drop-shadow-sm lg:drop-shadow-none">
              Take Back<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-star-blue">Your Weekend.</span>
            </h1>
            
            {/* H2 with added weight/shadow for readability over image */}
            <h2 className="text-sm sm:text-lg md:text-xl text-gray-700 lg:text-gray-600 mb-6 lg:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-semibold lg:font-medium drop-shadow-sm lg:drop-shadow-none bg-white/30 lg:bg-transparent rounded-lg backdrop-blur-[1px] lg:backdrop-blur-none p-2 lg:p-0">
              Life is too short to scrub floors. Join neighbors in <strong>Charleston & Summerville</strong> who trust Star Cleaning to handle the dirty work.
            </h2>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
              <a href="#quote" className="btn-cta bg-gradient-to-b from-yellow-400 to-yellow-500 text-blue-900 px-8 py-3.5 lg:py-4 rounded-full font-extrabold text-base lg:text-lg shadow-lg shadow-yellow-400/30 w-full sm:w-auto text-center transform hover:scale-105 transition duration-200 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1">
                Book Now & Save 20%
              </a>
              <div className="hidden sm:flex items-center gap-2 text-sm font-bold text-gray-600 bg-white/60 px-4 py-2 rounded-lg backdrop-blur-sm">
                <i className="fas fa-shield-alt text-green-600 text-xl"></i>
                <span className="leading-tight text-left">100% Satisfaction<br />Guaranteed</span>
              </div>
            </div>
            
            {/* Mobile Only Trust Indicators (Compact) */}
            <div className="sm:hidden flex justify-center gap-4 mt-6 text-[10px] font-bold text-gray-600 uppercase tracking-wide bg-white/50 py-2 rounded-full backdrop-blur-sm">
                <div className="flex items-center gap-1"><i className="fas fa-check-circle text-green-600"></i> Insured</div>
                <div className="flex items-center gap-1"><i className="fas fa-check-circle text-green-600"></i> Vetted</div>
                <div className="flex items-center gap-1"><i className="fas fa-check-circle text-green-600"></i> 5-Stars</div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end mt-0">
            
            {/* DESKTOP ONLY: Form */}
            <div className="hidden lg:block w-full max-w-md bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white relative z-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  
                  <div className="text-center mb-6 relative">
                      <div className="inline-block p-3 rounded-full bg-blue-50 text-star-blue mb-3 shadow-inner">
                        <i className="fas fa-magic text-xl"></i>
                      </div>
                      <h3 className="text-2xl font-black text-gray-900 font-heading">Get Your Free Quote</h3>
                      <p className="text-gray-500 text-sm mt-1 font-medium">Fast response. Lowcountry local.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 relative">
                      
                      <div className="grid grid-cols-2 gap-3">
                          <div className="group">
                             <input 
                                type="text" 
                                name="firstName" 
                                placeholder="First Name" 
                                required 
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block p-3 shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
                              />
                          </div>
                          <div>
                            <input 
                                type="text" 
                                name="lastName" 
                                placeholder="Last Name" 
                                required 
                                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block p-3 shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
                            />
                          </div>
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
                        <input 
                            type="text" 
                            name="zip" 
                            placeholder="Zip Code" 
                            required 
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block p-3 shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
                        />
                      </div>

                      <div className="relative">
                        <select 
                            name="service" 
                            className="w-full bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block p-3 shadow-sm transition-all focus:bg-white font-semibold appearance-none cursor-pointer"
                        >
                            <option value="" disabled selected>Select Service Type...</option>
                            <option>Standard House Cleaning</option>
                            <option>Deep Cleaning</option>
                            <option>Move In / Move Out</option>
                            <option>AirBnB / Vacation Rental</option>
                            <option>Commercial Cleaning</option>
                        </select>
                        <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs bg-transparent"></i>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-star-blue hover:bg-star-dark text-white font-black py-4 rounded-xl shadow-lg shadow-blue-200 transform hover:-translate-y-0.5 active:scale-95 transition duration-200 flex justify-center items-center gap-2 mt-2 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
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
                      
                      <div className="flex items-center justify-center gap-2 mt-4 opacity-70">
                         <i className="fas fa-lock text-green-600 text-xs"></i>
                         <span className="text-[10px] text-gray-500 font-bold uppercase">SSL Secure & Encrypted</span>
                      </div>
                  </form>
            </div>

          </div>
        </div>
      </div>
      
      {/* Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center relative transform scale-100 animate-in zoom-in-95 duration-200">
                <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <i className="fas fa-times text-xl"></i>
                </button>
                
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    <i className="fas fa-check"></i>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-6">Thank you! We have received your details and will email your quote shortly.</p>
                
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100 mb-2">
                    <p className="text-xs font-bold text-gray-500 uppercase mb-1">In a hurry?</p>
                    <a href="tel:8432979935" className="text-2xl font-black text-star-blue block hover:underline">
                        (843) 297-9935
                    </a>
                    <p className="text-xs text-gray-400 mt-1">Call us directly to book now.</p>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

export default Hero;