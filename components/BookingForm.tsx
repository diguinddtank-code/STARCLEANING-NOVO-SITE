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
    <section id="quote" className="py-12 lg:py-24 bg-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-yellow-200 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-[0%] left-[0%] w-[30%] h-[30%] bg-blue-200 rounded-full blur-[80px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100">
          
          {/* Left Side: Value Proposition & Steps */}
          <div className="lg:w-5/12 bg-gradient-to-br from-star-dark to-star-blue p-6 lg:p-10 text-white relative flex flex-col justify-between shrink-0">
            {/* Overlay Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-block bg-yellow-400 text-blue-900 text-[10px] lg:text-xs font-black uppercase tracking-widest px-3 py-1 rounded mb-4 shadow-md">
                Limited Time Offer
              </div>
              <h2 className="text-2xl lg:text-4xl font-black mb-2 lg:mb-4 font-heading leading-tight">
                Get Your Free <br className="hidden lg:block"/>Quote Today
              </h2>
              <p className="text-blue-100 mb-0 lg:mb-8 text-sm lg:text-lg leading-relaxed">
                Save 20% on your first deep clean. No credit card required.
              </p>

              <div className="space-y-6 hidden lg:block">
                <Step 
                  number="1" 
                  title="Request Quote" 
                  desc="Enter your contact info below." 
                />
                <Step 
                  number="2" 
                  title="Get Custom Pricing" 
                  desc="We'll text or email you an estimate." 
                />
                <Step 
                  number="3" 
                  title="Book & Relax" 
                  desc="Schedule online and enjoy your home." 
                  isLast
                />
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 relative z-10 hidden lg:block">
              <div className="flex items-center gap-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Reviewer" 
                  className="w-10 h-10 rounded-full border-2 border-yellow-400"
                />
                <div>
                  <div className="flex text-yellow-400 text-xs mb-1">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="text-xs italic text-blue-100">"The quote process was super easy!"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:w-7/12 p-5 lg:p-10 bg-white flex flex-col justify-center">
            <div className="mb-5 lg:mb-6">
                 <h3 className="text-xl lg:text-2xl font-bold text-gray-900 font-heading flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-star-blue rounded-full"></span>
                    Tell us about your home
                </h3>
                <p className="text-gray-500 text-xs lg:text-sm mt-1 ml-3.5">Get a custom quote in seconds.</p>
            </div>

            <form className="grid grid-cols-2 gap-3 lg:gap-4">
              
              {/* Full Name - Spans 2 cols on mobile, 1 on desktop */}
              <div className="col-span-2 md:col-span-1">
                 <InputGroup label="Full Name" name="fullName" placeholder="Jane Doe" value={formData.fullName} onChange={handleChange} required />
              </div>

              {/* Email - Spans 2 cols on mobile, 1 on desktop */}
              <div className="col-span-2 md:col-span-1">
                <InputGroup label="Email Address" name="email" type="email" placeholder="jane@example.com" value={formData.email} onChange={handleChange} required />
              </div>

              {/* Phone - Col 1 */}
              <div className="col-span-1">
                <InputGroup label="Phone" name="phone" type="tel" placeholder="(843) ..." value={formData.phone} onChange={handleChange} required />
              </div>

              {/* Zip - Col 2 */}
              <div className="col-span-1">
                 <div className="flex flex-col group w-full">
                    <label className="text-xs font-bold text-gray-500 uppercase mb-1.5 ml-1 group-focus-within:text-star-blue transition-colors">Zip Code</label>
                    <input 
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        maxLength={5}
                        placeholder="29401"
                        className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
                        required
                    />
                </div>
              </div>

              {/* City Banner - Spans 2 cols */}
               {city && (
                    <div className="col-span-2 bg-green-50 border border-green-100 rounded-xl p-2.5 flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm text-green-500 shrink-0 text-xs">
                            <i className="fas fa-check"></i>
                        </div>
                        <div>
                            <p className="text-green-800 text-xs font-bold leading-none">Available in <span className="text-green-600">{city}</span>!</p>
                        </div>
                    </div>
                )}

              {/* Submit Button - Spans 2 cols */}
              <div className="col-span-2 mt-2">
                <button 
                    type="button" 
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    onMouseDown={(e) => e.preventDefault()}
                    className="w-full btn-cta group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 py-3.5 rounded-xl font-black text-lg shadow-[0_10px_20px_-5px_rgba(250,204,21,0.4)] transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-3 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation"
                >
                    {isSubmitting ? (
                        <i className="fas fa-spinner fa-spin"></i>
                    ) : (
                        <>
                            <span>GET MY FREE QUOTE</span>
                            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </>
                    )}
                </button>
                <p className="text-center text-[10px] text-gray-400 mt-2">
                    <i className="fas fa-lock mr-1"></i> No spam. Your data is secure.
                </p>
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
    <label className="text-xs font-bold text-gray-500 uppercase mb-1.5 ml-1 group-focus-within:text-star-blue transition-colors">{label}</label>
    <input 
      type={type}
      className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
      {...props}
    />
  </div>
);

const Step: React.FC<{ number: string, title: string, desc: string, isLast?: boolean }> = ({ number, title, desc, isLast }) => (
  <div className="flex gap-4 relative">
    {!isLast && <div className="absolute left-[15px] top-10 bottom-[-20px] w-0.5 bg-white/20"></div>}
    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center font-bold text-yellow-400 shadow-inner">
      {number}
    </div>
    <div>
      <h4 className="font-bold text-white text-lg">{title}</h4>
      <p className="text-sm text-blue-100 opacity-80">{desc}</p>
    </div>
  </div>
);

export default BookingForm;