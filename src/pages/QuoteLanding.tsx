import React from 'react';
import { Link } from 'react-router-dom';
import BookingForm from '../../components/BookingForm';
import TrustBar from '../../components/TrustBar';

const QuoteLanding = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-yellow-200 selection:text-star-blue">
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-20 overflow-hidden">
          {/* Video Background */}
          <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="absolute inset-0 w-full h-full object-cover"
          >
              <source src="https://i.imgur.com/Q7QVFW7.mp4" type="video/mp4" />
          </video>
          
          {/* Lighter Overlay */}
          <div className="absolute inset-0 bg-star-dark/80"></div>
          
          <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
            
            {/* Logo */}
            <div className="text-center mb-10">
                <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
                <img 
                    src="https://img1.wsimg.com/isteam/ip/97a5d835-7b16-4991-b3c6-3d6956b6b82b/ESBOC%CC%A7O-STAR-CLEANING_full.png/:/rs=w:143,h:75,cg:true,m/cr=w:143,h:75/qt=q:95" 
                    alt="Star Cleaning" 
                    className="h-14 md:h-20 w-auto object-contain brightness-0 invert mx-auto" 
                />
                </Link>
            </div>

            {/* Headlines */}
            <div className="text-center mb-12 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 font-heading tracking-tight drop-shadow-lg leading-tight">
                    Reclaim Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-star-blue">Weekends.</span>
                </h1>
                <p className="text-blue-100 text-lg md:text-xl font-medium opacity-90 tracking-wide max-w-2xl mx-auto">
                    5-star hotel standards. 100% guaranteed. Get your instant quote in seconds.
                </p>
            </div>

            {/* Wide Centered Booking Form */}
            <div className="w-full">
                <BookingForm hideSidebar={true} />
            </div>

          </div>
      </section>

      {/* Trust Bar / Social Proof */}
      <div className="bg-white py-16 border-b border-gray-100">
          <div className="container mx-auto px-4">
              <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">Trusted by families across Charleston & Summerville</p>
              <TrustBar />
          </div>
      </div>

      {/* Guarantee Section */}
      <section className="bg-blue-50 py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-yellow-500 text-4xl mx-auto mb-8 shadow-lg animate-bounce-slow">
                  <i className="fas fa-award"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-star-dark mb-6 font-heading">Our 100% Satisfaction Guarantee</h2>
              <p className="text-gray-600 md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
                  We are obsessed with quality. If you are not completely satisfied with your cleaning, let us know within 24 hours and we will return to re-clean the area for free. Your peace of mind is our top priority.
              </p>
              
              <div className="flex justify-center gap-4 flex-wrap">
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-100">
                      <i className="fas fa-check-circle text-green-500"></i>
                      <span className="font-bold text-gray-700">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-100">
                      <i className="fas fa-user-check text-green-500"></i>
                      <span className="font-bold text-gray-700">Background Checked</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-blue-100">
                      <i className="fas fa-flag-usa text-blue-500"></i>
                      <span className="font-bold text-gray-700">Veteran Owned</span>
                  </div>
              </div>
          </div>
      </section>

      {/* Footer Links */}
      <footer className="bg-white border-t border-gray-100 py-10 text-center">
          <div className="container mx-auto px-4">
              <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-star-blue transition-colors font-bold uppercase tracking-widest mb-6">
                  <i className="fas fa-arrow-left"></i> Back to Home
              </Link>
              <p className="text-xs text-gray-400 font-medium">
                  &copy; {new Date().getFullYear()} Star Cleaning LLC. All rights reserved.
              </p>
          </div>
      </footer>

    </div>
  );
};

export default QuoteLanding;
