import React, { useState, useEffect } from 'react';

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [estimatedPrice, setEstimatedPrice] = useState(0);
  
  // State for city lookup
  const [city, setCity] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    // Step 2
    bedrooms: 1,
    bathrooms: 1,
    hasDog: false,
    hasCat: false,
    // Step 3
    serviceType: 'Standard House Cleaning',
    frequency: 'Bi-Weekly (Most Popular)'
  });

  // --- PRICING ENGINE ---
  useEffect(() => {
    let price = 100; // Base Price

    // Room Add-ons
    price += (formData.bedrooms * 20);
    price += (formData.bathrooms * 15);

    // Service Multipliers
    if (formData.serviceType.includes("Deep")) price *= 1.3; // +30%
    if (formData.serviceType.includes("Move")) price *= 1.5; // +50%
    if (formData.serviceType.includes("Vacation")) price *= 1.2; // +20%

    // Frequency Discounts
    if (formData.frequency.includes("Weekly")) price *= 0.80; // -20%
    if (formData.frequency.includes("Bi-Weekly")) price *= 0.85; // -15%
    if (formData.frequency.includes("Monthly")) price *= 0.90; // -10%
    
    // Round to nearest 5 for cleaner look
    setEstimatedPrice(Math.ceil(price / 5) * 5);
  }, [formData.bedrooms, formData.bathrooms, formData.serviceType, formData.frequency]);


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

  const updateCounter = (field: 'bedrooms' | 'bathrooms', delta: number) => {
    setFormData(prev => ({
        ...prev,
        [field]: Math.max(1, prev[field] + delta) // Minimum 1
    }));
  };

  const togglePet = (pet: 'hasDog' | 'hasCat') => {
      setFormData(prev => ({ ...prev, [pet]: !prev[pet] }));
  };

  const nextStep = () => {
      // Basic Validation Step 1
      if (step === 1) {
          if (!formData.fullName || !formData.email || !formData.phone || !formData.zipCode) {
              alert("Please fill in all fields.");
              return;
          }
      }
      setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    setIsSubmitting(true);

    const payload = {
        ...formData,
        estimatedPrice: `$${estimatedPrice}`,
        cityDetected: city || "Not Detected",
        formSource: "Multi-Step Booking Form",
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
        // Reset form but keep user on success screen
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
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 min-h-[500px]">
          
          {/* Left Side: DRASTICALLY COMPACTED */}
          <div className="lg:w-4/12 bg-gradient-to-br from-star-dark to-star-blue p-5 lg:p-8 text-white relative flex flex-col lg:justify-between shrink-0 transition-all duration-500">
            {/* Overlay Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <div className="relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-block bg-yellow-400 text-blue-900 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-2 shadow-sm">
                ONLINE SPECIAL
              </div>
              <h2 className="text-xl lg:text-3xl font-black mb-1 lg:mb-3 font-heading leading-tight">
                Get Price
              </h2>
              <p className="text-blue-100 text-xs lg:text-sm leading-tight max-w-xs lg:max-w-none mb-4">
                3 simple steps to a sparkling home.
              </p>

              {/* Step Indicators */}
              <div className="flex lg:flex-col gap-2 mt-2 w-full justify-center lg:justify-start">
                  <StepIndicator current={step} num={1} label="Contact" />
                  <StepIndicator current={step} num={2} label="Details" />
                  <StepIndicator current={step} num={3} label="Pricing" />
              </div>
            </div>

             {/* Reviewer */}
             <div className="mt-8 pt-4 border-t border-white/10 relative z-10 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold text-xs">
                    <i className="fas fa-star"></i>
                </div>
                <div>
                  <p className="text-[10px] text-blue-100">"Best quote experience ever."</p>
                  <p className="text-[9px] font-bold text-white">- Jennifer, Summerville</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Multi-Step Form */}
          <div className="lg:w-8/12 p-5 lg:p-8 bg-white flex flex-col relative">
            
            {/* Compact Header */}
            <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-2">
                 <h3 className="text-lg font-black text-gray-900 font-heading flex items-center gap-2">
                    <span className="w-1 h-4 bg-star-blue rounded-full"></span>
                    {step === 1 && "Contact Info"}
                    {step === 2 && "Home Details"}
                    {step === 3 && "Your Estimate"}
                </h3>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    Step {step} of 3
                </span>
            </div>

            <form className="flex-grow flex flex-col justify-between h-full">
              
              {/* STEP 1: CONTACT */}
              {step === 1 && (
                  <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="col-span-2 md:col-span-1">
                        <InputGroup label="Full Name" name="fullName" placeholder="Jane Doe" value={formData.fullName} onChange={handleChange} />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <InputGroup label="Email" name="email" type="email" placeholder="jane@example.com" value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="col-span-1">
                        <InputGroup label="Phone" name="phone" type="tel" placeholder="(843) ..." value={formData.phone} onChange={handleChange} />
                    </div>
                    <div className="col-span-1">
                         <div className="flex flex-col group w-full">
                            <label className="text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Zip Code</label>
                            <input 
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleChange}
                                maxLength={5}
                                placeholder="29401"
                                className="w-full px-3 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white font-semibold"
                            />
                        </div>
                    </div>
                    {city && (
                        <div className="col-span-2 bg-green-50 border border-green-100 rounded-xl p-2 flex items-center gap-2">
                            <i className="fas fa-check-circle text-green-500 ml-1"></i>
                            <p className="text-green-800 text-xs font-bold">Great! We serve <span className="underline">{city}</span>.</p>
                        </div>
                    )}
                  </div>
              )}

              {/* STEP 2: DETAILS */}
              {step === 2 && (
                   <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        {/* Counters */}
                        <div className="grid grid-cols-2 gap-6">
                            <Counter 
                                label="Bedrooms" 
                                value={formData.bedrooms} 
                                onMinus={() => updateCounter('bedrooms', -1)} 
                                onPlus={() => updateCounter('bedrooms', 1)} 
                            />
                            <Counter 
                                label="Bathrooms" 
                                value={formData.bathrooms} 
                                onMinus={() => updateCounter('bathrooms', -1)} 
                                onPlus={() => updateCounter('bathrooms', 1)} 
                            />
                        </div>

                        {/* Pets */}
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase mb-3 block ml-1">Pets in Home?</label>
                            <div className="flex gap-4">
                                <PetToggle 
                                    label="Dog(s)" 
                                    icon="fa-dog" 
                                    active={formData.hasDog} 
                                    onClick={() => togglePet('hasDog')} 
                                />
                                <PetToggle 
                                    label="Cat(s)" 
                                    icon="fa-cat" 
                                    active={formData.hasCat} 
                                    onClick={() => togglePet('hasCat')} 
                                />
                            </div>
                        </div>
                   </div>
              )}

              {/* STEP 3: PRICING */}
              {step === 3 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                       {/* Service Type */}
                       <div className="flex flex-col group">
                            <label className="text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Service Type</label>
                            <div className="relative">
                                <select 
                                name="serviceType"
                                value={formData.serviceType}
                                onChange={handleChange}
                                className="w-full px-3 py-3 bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white font-semibold appearance-none"
                                >
                                <option>Standard House Cleaning</option>
                                <option>Deep Cleaning (Recommended First Time)</option>
                                <option>Move In / Move Out</option>
                                <option>Vacation Rental</option>
                                </select>
                                <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                            </div>
                        </div>

                        {/* Frequency */}
                        <div className="flex flex-col group">
                            <label className="text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Frequency</label>
                            <div className="relative">
                                <select 
                                name="frequency"
                                value={formData.frequency}
                                onChange={handleChange}
                                className="w-full px-3 py-3 bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white font-semibold appearance-none"
                                >
                                <option>Bi-Weekly (Save 15%)</option>
                                <option>Weekly (Save 20%)</option>
                                <option>Monthly (Save 10%)</option>
                                <option>One-Time Clean</option>
                                </select>
                                <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                            </div>
                        </div>

                        {/* PRICE DISPLAY */}
                        <div className="mt-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200 text-center relative overflow-hidden">
                             <div className="relative z-10">
                                <p className="text-blue-900 text-xs font-bold uppercase tracking-wider mb-1">Estimated Price</p>
                                <p className="text-4xl font-black text-star-blue font-heading">${estimatedPrice}</p>
                                <p className="text-xs text-blue-600 font-medium">per clean</p>
                             </div>
                             {/* Decorative Shine */}
                             <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                        </div>
                  </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex gap-3 pt-4 border-t border-gray-50">
                {step > 1 && (
                    <button 
                        type="button"
                        onClick={prevStep}
                        className="w-1/3 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
                    >
                        Back
                    </button>
                )}
                
                {step < 3 ? (
                     <button 
                        type="button"
                        onClick={nextStep}
                        className="w-full py-3 rounded-xl font-black text-white bg-star-blue hover:bg-star-dark shadow-md transition-all flex items-center justify-center gap-2 text-lg active:scale-95"
                    >
                        <span>Next Step</span>
                        <i className="fas fa-arrow-right text-sm"></i>
                    </button>
                ) : (
                    <button 
                        type="button" 
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                        className="w-full py-3 rounded-xl font-black text-blue-900 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 shadow-lg transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg relative overflow-hidden active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                            <>
                                <span>Book Now</span>
                                <i className="fas fa-check-circle"></i>
                            </>
                        )}
                    </button>
                )}
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
                
                <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">Booking Request Sent!</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                    Estimated Price: <span className="font-bold text-star-blue">${estimatedPrice}</span><br/>
                    We will call you shortly to confirm the appointment.
                </p>
                
                <div className="space-y-3">
                    <button 
                        onClick={() => setShowPopup(false)}
                        className="w-full bg-star-blue text-white font-bold py-3.5 rounded-xl transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

// --- HELPER COMPONENTS ---

const StepIndicator: React.FC<{ current: number, num: number, label: string }> = ({ current, num, label }) => {
    const isActive = current === num;
    const isCompleted = current > num;
    
    return (
        <div className={`flex items-center gap-2 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-50 lg:opacity-70'}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border ${isActive || isCompleted ? 'bg-yellow-400 border-yellow-400 text-blue-900' : 'bg-transparent border-white/30 text-white'}`}>
                {isCompleted ? <i className="fas fa-check"></i> : num}
            </div>
            <span className="hidden lg:block text-xs font-bold tracking-wide text-white">{label}</span>
        </div>
    );
};

const InputGroup: React.FC<any> = ({ label, type = "text", ...props }) => (
  <div className="flex flex-col group w-full">
    <label className="text-xs font-bold text-gray-500 uppercase mb-1 ml-1 group-focus-within:text-star-blue transition-colors">{label}</label>
    <input 
      type={type}
      className="w-full px-3 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
      {...props}
    />
  </div>
);

const Counter: React.FC<{ label: string, value: number, onMinus: () => void, onPlus: () => void }> = ({ label, value, onMinus, onPlus }) => (
    <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 flex flex-col items-center justify-center">
        <label className="text-xs font-bold text-gray-500 uppercase mb-2">{label}</label>
        <div className="flex items-center gap-4">
            <button type="button" onClick={onMinus} className="w-8 h-8 rounded-full bg-white border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-100 active:scale-90 transition-transform">
                <i className="fas fa-minus text-xs"></i>
            </button>
            <span className="text-xl font-black text-gray-900 w-6 text-center">{value}</span>
            <button type="button" onClick={onPlus} className="w-8 h-8 rounded-full bg-white border border-star-blue text-star-blue flex items-center justify-center hover:bg-blue-50 active:scale-90 transition-transform shadow-sm">
                <i className="fas fa-plus text-xs"></i>
            </button>
        </div>
    </div>
);

const PetToggle: React.FC<{ label: string, icon: string, active: boolean, onClick: () => void }> = ({ label, icon, active, onClick }) => (
    <div 
        onClick={onClick}
        className={`flex-1 cursor-pointer rounded-xl border-2 p-3 flex flex-col items-center gap-2 transition-all duration-200 ${active ? 'border-star-blue bg-blue-50' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}
    >
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-star-blue text-white' : 'bg-white text-gray-400'}`}>
            <i className={`fas ${icon} text-lg`}></i>
        </div>
        <span className={`text-xs font-bold ${active ? 'text-star-blue' : 'text-gray-500'}`}>{label}</span>
    </div>
);

export default BookingForm;