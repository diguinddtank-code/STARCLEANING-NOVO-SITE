import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  
  // State for city lookup
  const [city, setCity] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zipCode: ''
  });

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Custom logic for Zip Code
    if (name === 'zipCode') {
        const cleanZip = value.replace(/\D/g, '').slice(0, 5);
        setFormData(prev => ({ ...prev, [name]: cleanZip }));

        // Check availability when 5 digits reached
        if (cleanZip.length === 5) {
            try {
                const response = await fetch(`https://api.zippopotam.us/us/${cleanZip}`);
                if (response.ok) {
                    const data = await response.json();
                    setCity(data.places[0]['place name']);
                } else {
                    setCity(null);
                }
            } catch (error) {
                setCity(null);
            }
        } else {
            setCity(null);
        }
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    // 1. Stop all default browser behaviors immediately
    e.preventDefault();
    e.stopPropagation();

    // 2. Manual Validation
    if (!formData.fullName || !formData.email || !formData.phone || !formData.zipCode) {
        alert("Please fill in all required fields (Name, Email, Phone, Zip).");
        return;
    }

    setIsSubmitting(true);

    const payload = {
        ...formData,
        cityDetected: city || "Not Detected",
        formSource: "Main Booking Form (Simplified)",
        submittedAt: new Date().toISOString()
    };

    try {
        // Send ONLY to the webhook provided
        await fetch("https://webhook.infra-remakingautomacoes.cloud/webhook/scsite", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(payload)
        });
        
        setShowPopup(true);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            zipCode: ''
        });
        setCity(null);
    } catch (error) {
        console.error("Submission error:", error);
        alert("There was an error sending your request. Please call us directly at (843) 297-9935.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-8 lg:py-20 bg-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-yellow-200 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-[0%] left-[0%] w-[30%] h-[30%] bg-blue-200 rounded-full blur-[80px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Side: DRASTICALLY COMPACTED */}
          {/* Reduced width from 5/12 to 4/12 and reduced padding significantly */}
          <div className="lg:w-4/12 bg-gradient-to-br from-star-dark to-star-blue p-5 lg:p-8 text-white relative flex flex-col lg:justify-between shrink-0">
            {/* Overlay Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <div className="relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
              
              {/* Ultra Compact Badge */}
              <div className="inline-block bg-yellow-400 text-blue-900 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-2 shadow-sm">
                20% OFF DEAL
              </div>
              
              {/* Compact Heading */}
              <h2 className="text-xl lg:text-3xl font-black mb-1 lg:mb-3 font-heading leading-tight">
                Get Free Quote
              </h2>
              
              {/* Compact Subtitle */}
              <p className="text-blue-100 text-xs lg:text-sm leading-tight max-w-xs lg:max-w-none mb-0 lg:mb-4">
                Fast, secure, and accurate estimate.
              </p>

              {/* Steps - Hidden on mobile, compact on desktop */}
              <div className="space-y-4 hidden lg:block mt-6">
                <Step 
                  number="1" 
                  title="Request" 
                  desc="Enter details." 
                />
                <Step 
                  number="2" 
                  title="Pricing" 
                  desc="Get custom price." 
                />
                <Step 
                  number="3" 
                  title="Book" 
                  desc="Schedule online." 
                  isLast
                />
              </div>
            </div>

            {/* Reviewer - Desktop Only now to save space on mobile */}
            <div className="mt-8 pt-4 border-t border-white/10 relative z-10 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold text-xs">
                    <i className="fas fa-star"></i>
                </div>
                <div>
                  <p className="text-[10px] text-blue-100">"Super easy process!"</p>
                  <p className="text-[9px] font-bold text-white">- Sarah J., Charleston</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form - Expanded width to 8/12 */}
          <div className="lg:w-8/12 p-5 lg:p-8 bg-white flex flex-col justify-center">
            
            {/* Form Internal Header - Kept Compact */}
            <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-2">
                 <h3 className="text-lg font-black text-gray-900 font-heading flex items-center gap-2">
                    <span className="w-1 h-4 bg-star-blue rounded-full"></span>
                    Your Home Details
                </h3>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <i className="fas fa-lock text-green-500"></i> Secure
                </span>
            </div>

            <form className="grid grid-cols-2 gap-3">
              
              {/* Full Name */}
              <div className="col-span-2 md:col-span-1">
                 <InputGroup label="Full Name" name="fullName" placeholder="Jane Doe" value={formData.fullName} onChange={handleChange} required />
              </div>

              {/* Email */}
              <div className="col-span-2 md:col-span-1">
                <InputGroup label="Email Address" name="email" type="email" placeholder="jane@example.com" value={formData.email} onChange={handleChange} required />
              </div>

              {/* Phone */}
              <div className="col-span-1">
                <InputGroup label="Phone" name="phone" type="tel" placeholder="(843) ..." value={formData.phone} onChange={handleChange} required />
              </div>

              {/* Zip */}
              <div className="col-span-1">
                 <div className="flex flex-col group w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1 ml-1 group-focus-within:text-star-blue transition-colors">Zip Code</label>
                    <input 
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        maxLength={5}
                        placeholder="29401"
                        className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
                        required
                    />
                </div>
              </div>

              {/* City Banner */}
               {city && (
                    <div className="col-span-2 bg-green-50 border border-green-100 rounded-xl p-2 flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                        <i className="fas fa-check-circle text-green-500 ml-1"></i>
                        <p className="text-green-800 text-xs font-bold">We serve <span className="text-green-600 underline">{city}</span>!</p>
                    </div>
                )}

              {/* Submit Button */}
              <div className="col-span-2 mt-2">
                <button 
                    type="button" 
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    onMouseDown={(e) => e.preventDefault()}
                    className="w-full btn-cta group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 py-3 rounded-xl font-black text-lg shadow-md transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-3 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation"
                >
                    {isSubmitting ? (
                        <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                        <>
                            <span>GET QUOTE</span>
                            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </>
                    )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* SUCCESS POPUP OVERLAY */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center relative transform scale-100 animate-in zoom-in-95 duration-200 border-4 border-white">
                <button 
                    onClick={() => setShowPopup(false)} 
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <i className="fas fa-times"></i>
                </button>
                
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner">
                    <i className="fas fa-check-circle"></i>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">We Received It!</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Thank you! Our team is reviewing your details and will send your personalized quote shortly.
                </p>
                
                <div className="space-y-3">
                    <a 
                        href="https://instagram.com/star.cleaningsc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-pink-200 flex items-center justify-center gap-2 transition-all hover:-translate-y-1"
                    >
                        <i className="fab fa-instagram text-xl"></i>
                        <span>Follow us on Instagram</span>
                    </a>
                    
                    <button 
                        onClick={() => setShowPopup(false)}
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-3.5 rounded-xl transition-colors"
                    >
                        Close & Continue
                    </button>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

// Helper Components for cleaner code
const InputGroup: React.FC<any> = ({ label, type = "text", ...props }) => (
  <div className="flex flex-col group w-full">
    <label className="text-xs font-bold text-gray-500 uppercase mb-1 ml-1 group-focus-within:text-star-blue transition-colors">{label}</label>
    <input 
      type={type}
      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
      {...props}
    />
  </div>
);

const Step: React.FC<{ number: string, title: string, desc: string, isLast?: boolean }> = ({ number, title, desc, isLast }) => (
  <div className="flex gap-3 relative">
    {!isLast && <div className="absolute left-[12px] top-8 bottom-[-10px] w-px bg-white/20"></div>}
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-yellow-400 shadow-inner text-xs">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-white text-sm">{title}</h4>
      <p className="text-xs text-blue-100 opacity-80">{desc}</p>
    </div>
  </div>
);

export default BookingForm;