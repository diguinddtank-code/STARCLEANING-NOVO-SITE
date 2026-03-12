import React, { useEffect, useState } from 'react';

const ExitIntentPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Check storage dynamically inside the event to ensure we have the latest status
      const alreadyShown = sessionStorage.getItem('starCleaningExitShown');

      // If mouse leaves the top of the viewport (clientY <= 0) and we haven't shown popup yet
      if (e.clientY <= 0 && !alreadyShown) {
        setIsVisible(true);
        sessionStorage.setItem('starCleaningExitShown', 'true');
      }
    };

    // Only attach listener if not already shown in this session
    if (!sessionStorage.getItem('starCleaningExitShown')) {
        document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClaimOffer = () => {
    setIsVisible(false);
    // Smooth scroll to quote section
    const quoteSection = document.getElementById('quote');
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: 'smooth' });
      
      // UX Improvement: Focus the first input field after scrolling
      setTimeout(() => {
        const firstInput = quoteSection.querySelector('input[name="firstName"]') as HTMLInputElement;
        if (firstInput) {
            firstInput.focus();
        }
      }, 800);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 font-sans">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-blue-900/60 backdrop-blur-sm transition-opacity duration-500 animate-in fade-in"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-2xl max-w-lg w-full transform scale-100 animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 overflow-hidden flex flex-col md:flex-row max-h-[90vh] overflow-y-auto md:overflow-visible">
        
        {/* Close Button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition z-50"
        >
          <i className="fas fa-times text-sm"></i>
        </button>

        {/* Left/Top Image Section (Blue) */}
        <div className="w-full md:w-5/12 bg-gradient-to-br from-star-blue to-star-dark relative flex flex-col items-center justify-center text-center p-6 shrink-0">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
            
            {/* Animated Discount Badge */}
            <div className="relative z-10 animate-bounce" style={{ animationDuration: '2.5s' }}>
                <div className="w-24 h-24 md:w-28 md:h-28 bg-yellow-400 text-blue-900 rounded-full flex flex-col items-center justify-center shadow-[0_0_25px_rgba(250,204,21,0.6)] border-4 border-white rotate-3 transform transition-transform hover:scale-105">
                    <span className="text-3xl md:text-4xl font-black leading-none drop-shadow-sm">20%</span>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-wide">OFF</span>
                </div>
            </div>

            {/* Trust Badge Below */}
            <div className="relative z-10 mt-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-1.5 flex items-center gap-2 shadow-sm">
                <div className="flex text-yellow-400 text-xs gap-0.5">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                </div>
                <span className="text-xs text-white font-bold uppercase tracking-wide">Top Rated</span>
            </div>
        </div>

        {/* Right/Bottom Content Section (White) */}
        <div className="w-full md:w-7/12 p-6 md:p-10 text-center md:text-left flex flex-col justify-center bg-white relative">
            
            <div className="mb-2">
                <span className="inline-block px-2.5 py-1 rounded bg-red-50 text-red-500 text-[10px] font-black uppercase tracking-widest border border-red-100">
                    Wait! Don't leave yet
                </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-black text-gray-900 font-heading mb-3 leading-tight">
                Your Weekend <br className="hidden md:block"/> Is Calling...
            </h3>
            
            <p className="text-gray-500 text-sm mb-6 leading-relaxed font-medium px-2 md:px-0">
                Don't spend it scrubbing floors. Join <span className="text-star-blue font-bold">500+ neighbors</span> who trust Star Cleaning.
            </p>

            <button 
                onClick={handleClaimOffer}
                className="w-full bg-star-blue hover:bg-star-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden"
            >
                {/* Shine Effect */}
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-slide-shine"></div>
                <span className="relative z-10 text-base">Get My 20% OFF</span>
                <i className="fas fa-arrow-right relative z-10 group-hover:translate-x-1 transition-transform"></i>
            </button>

            <button 
                onClick={handleClose}
                className="mt-4 text-[10px] md:text-xs font-bold text-gray-400 hover:text-gray-600 uppercase tracking-wide border-b border-transparent hover:border-gray-300 transition-colors self-center md:self-start pb-0.5"
            >
                No thanks, I prefer cleaning myself
            </button>
        </div>

      </div>
    </div>
  );
};

export default ExitIntentPopup;