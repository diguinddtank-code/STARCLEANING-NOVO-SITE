import React, { useState, useEffect } from 'react';

const BookingForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  
  // Pricing State
  const [basePrice, setBasePrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [savings, setSavings] = useState(0);
  
  // Calendar State
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // City Lookup
  const [city, setCity] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    bedrooms: 2,
    bathrooms: 2,
    hasDog: false,
    hasCat: false,
    serviceType: 'Standard Clean',
    frequency: 'Bi-Weekly'
  });

  // --- 1. CALENDAR LOGIC (Tuesdays & Thursdays only) ---
  useEffect(() => {
    const dates: Date[] = [];
    const today = new Date();
    let current = new Date(today);
    
    // Generate next 6 available slots
    while (dates.length < 6) {
        current.setDate(current.getDate() + 1);
        const day = current.getDay();
        // 2 = Tuesday, 4 = Thursday
        if (day === 2 || day === 4) {
            dates.push(new Date(current));
        }
    }
    setAvailableDates(dates);
  }, []);

  // --- 2. PRICING ENGINE ---
  useEffect(() => {
    let price = 110; // Base Starting Price

    // Room Multipliers
    price += ((formData.bedrooms - 1) * 25);
    price += ((formData.bathrooms - 1) * 20);

    // Service Type Multipliers
    let multiplier = 1;
    if (formData.serviceType === "Deep Clean") multiplier = 1.4; // +40%
    if (formData.serviceType === "Move-In/Out") multiplier = 1.6; // +60%
    
    // Frequency Discounts
    let discount = 0;
    if (formData.frequency === "Weekly") discount = 0.20; // 20% off
    if (formData.frequency === "Bi-Weekly") discount = 0.15; // 15% off
    if (formData.frequency === "Monthly") discount = 0.10; // 10% off

    // Calculations
    const grossPrice = price * multiplier;
    const discountAmount = grossPrice * discount;
    const netPrice = grossPrice - discountAmount;

    setBasePrice(Math.ceil(grossPrice));
    setFinalPrice(Math.ceil(netPrice));
    setSavings(Math.ceil(discountAmount));

  }, [formData.bedrooms, formData.bathrooms, formData.serviceType, formData.frequency]);


  const handleChange = async (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'zipCode') {
        const cleanZip = value.replace(/\D/g, '').slice(0, 5);
        setFormData(prev => ({ ...prev, [name]: cleanZip }));
        if (cleanZip.length === 5) {
            try {
                const response = await fetch(`https://api.zippopotam.us/us/${cleanZip}`);
                if (response.ok) {
                    const data = await response.json();
                    setCity(data.places[0]['place name']);
                } else { setCity(null); }
            } catch (error) { setCity(null); }
        } else { setCity(null); }
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleServiceSelect = (serviceName: string) => {
    setFormData(prev => ({ ...prev, serviceType: serviceName }));
  };

  const handleFrequencySelect = (freqName: string) => {
    setFormData(prev => ({ ...prev, frequency: freqName }));
  };

  const updateCounter = (field: 'bedrooms' | 'bathrooms', delta: number) => {
    setFormData(prev => ({
        ...prev,
        [field]: Math.max(1, prev[field] + delta)
    }));
  };

  const togglePet = (pet: 'hasDog' | 'hasCat') => {
      setFormData(prev => ({ ...prev, [pet]: !prev[pet] }));
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !selectedDate) {
        alert("Please fill in your contact info and select a date.");
        return;
    }

    setIsSubmitting(true);

    const payload = {
        ...formData,
        selectedDate: selectedDate,
        estimatedPrice: `$${finalPrice}`,
        savings: `$${savings}`,
        cityDetected: city || "Not Detected",
        submittedAt: new Date().toISOString()
    };

    try {
        await fetch("https://webhook.infra-remakingautomacoes.cloud/webhook/scsite", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        setShowPopup(true);
    } catch (error) {
        alert("Connection error. Please call us at (843) 297-9935.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="quote" className="py-12 lg:py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100/50 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-10">
                <span className="bg-yellow-400 text-blue-900 font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm mb-3 inline-block animate-pulse-slow">
                    Fast & Easy Quote
                </span>
                <h2 className="text-3xl lg:text-5xl font-black text-gray-900 font-heading leading-tight mb-2">
                    Customize Your Clean
                </h2>
                <p className="text-gray-500 font-medium">Build your perfect plan in 60 seconds.</p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row min-h-[600px]">
                
                {/* LEFT SIDE: Steps & Summary */}
                <div className="md:w-1/3 bg-gray-50 border-r border-gray-100 p-6 lg:p-8 flex flex-col justify-between">
                    <div>
                        {/* Progress */}
                        <div className="space-y-6 mb-8">
                            <StepItem num={1} label="Home Details" active={step === 1} done={step > 1} />
                            <StepItem num={2} label="Service & Plan" active={step === 2} done={step > 2} />
                            <StepItem num={3} label="Schedule" active={step === 3} done={step > 3} />
                        </div>
                    </div>

                    {/* Live Pricing Widget */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-star-blue"></div>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Estimated Total</p>
                        
                        <div className="flex items-end gap-2 mb-1">
                            <span className="text-3xl font-black text-gray-900 tracking-tight">${finalPrice}</span>
                            {savings > 0 && (
                                <span className="text-sm text-gray-400 font-bold line-through mb-1.5">${basePrice}</span>
                            )}
                        </div>

                        {savings > 0 ? (
                            <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-2.5 py-1 rounded-lg text-xs font-bold">
                                <i className="fas fa-tag text-[10px]"></i>
                                You save ${savings}
                            </div>
                        ) : (
                            <p className="text-xs text-gray-400">Select a frequency to save.</p>
                        )}
                    </div>
                </div>

                {/* RIGHT SIDE: Dynamic Form Content */}
                <div className="md:w-2/3 p-6 lg:p-10 relative">
                    <form className="h-full flex flex-col">
                        
                        {/* STEP 1: HOME DETAILS */}
                        {step === 1 && (
                            <div className="flex-grow space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl font-black text-gray-900 mb-2">Tell us about your home</h3>
                                    <p className="text-sm text-gray-500">We optimize our team size based on your home size.</p>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <Counter label="Bedrooms" value={formData.bedrooms} onMinus={() => updateCounter('bedrooms', -1)} onPlus={() => updateCounter('bedrooms', 1)} />
                                    <Counter label="Bathrooms" value={formData.bathrooms} onMinus={() => updateCounter('bathrooms', -1)} onPlus={() => updateCounter('bathrooms', 1)} />
                                </div>

                                <div>
                                    <label className="text-xs font-bold text-gray-400 uppercase mb-3 block">Do you have pets?</label>
                                    <div className="flex gap-4">
                                        <PetToggle label="Dogs" icon="fa-dog" active={formData.hasDog} onClick={() => togglePet('hasDog')} />
                                        <PetToggle label="Cats" icon="fa-cat" active={formData.hasCat} onClick={() => togglePet('hasCat')} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: SERVICE & FREQUENCY (Card Style) */}
                        {step === 2 && (
                            <div className="flex-grow space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-4">Select Service</h3>
                                    <div className="space-y-3">
                                        <ServiceCard 
                                            title="Standard Clean" 
                                            subtitle="Maintenance." 
                                            icon="fa-sparkles" 
                                            selected={formData.serviceType === "Standard Clean"}
                                            onClick={() => handleServiceSelect("Standard Clean")}
                                        />
                                        <ServiceCard 
                                            title="Deep Clean" 
                                            subtitle="Thorough scrub. Recommended for first time." 
                                            icon="fa-gem" 
                                            badge="High Demand"
                                            selected={formData.serviceType === "Deep Clean"}
                                            onClick={() => handleServiceSelect("Deep Clean")}
                                        />
                                        <ServiceCard 
                                            title="Move-In/Out" 
                                            subtitle="Empty home. Inside cabinets & appliances." 
                                            icon="fa-box-open" 
                                            selected={formData.serviceType === "Move-In/Out"}
                                            onClick={() => handleServiceSelect("Move-In/Out")}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-4">Frequency</h3>
                                    <div className="grid grid-cols-3 gap-2">
                                        <FrequencyCard label="Weekly" discount="20%" selected={formData.frequency === "Weekly"} onClick={() => handleFrequencySelect("Weekly")} />
                                        <FrequencyCard label="Bi-Weekly" discount="15%" selected={formData.frequency === "Bi-Weekly"} onClick={() => handleFrequencySelect("Bi-Weekly")} badge="Popular" />
                                        <FrequencyCard label="Monthly" discount="10%" selected={formData.frequency === "Monthly"} onClick={() => handleFrequencySelect("Monthly")} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 3: CALENDAR & CONTACT */}
                        {step === 3 && (
                            <div className="flex-grow space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                
                                {/* Calendar Section */}
                                <div>
                                    <h3 className="text-xl font-black text-gray-900 mb-1">Select a Date</h3>
                                    <p className="text-xs text-gray-500 mb-4 font-medium"><i className="fas fa-info-circle text-star-blue mr-1"></i> Available Tuesdays & Thursdays</p>
                                    
                                    <div className="grid grid-cols-3 gap-2">
                                        {availableDates.map((date, idx) => {
                                            const dateStr = date.toDateString();
                                            const isSelected = selectedDate === dateStr;
                                            return (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => setSelectedDate(dateStr)}
                                                    className={`p-3 rounded-xl border text-center transition-all ${
                                                        isSelected 
                                                        ? 'bg-star-blue text-white border-star-blue shadow-md scale-[1.02]' 
                                                        : 'bg-white border-gray-200 text-gray-600 hover:border-star-blue hover:text-star-blue'
                                                    }`}
                                                >
                                                    <span className="block text-[10px] uppercase font-bold opacity-80">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                                    <span className="block text-lg font-black">{date.getDate()}</span>
                                                    <span className="block text-[10px] font-medium">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Contact Section */}
                                <div className="space-y-3">
                                    <h3 className="text-xl font-black text-gray-900">Your Info</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm font-semibold focus:ring-2 focus:ring-star-blue outline-none" />
                                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm font-semibold focus:ring-2 focus:ring-star-blue outline-none" />
                                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm font-semibold focus:ring-2 focus:ring-star-blue outline-none" />
                                        <input type="text" name="zipCode" placeholder="Zip Code" value={formData.zipCode} onChange={handleChange} maxLength={5} className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm font-semibold focus:ring-2 focus:ring-star-blue outline-none" />
                                    </div>
                                    {city && <p className="text-green-600 text-xs font-bold"><i className="fas fa-check-circle mr-1"></i> Serving {city}</p>}
                                </div>

                            </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="pt-6 mt-4 border-t border-gray-100 flex gap-4">
                            {step > 1 && (
                                <button type="button" onClick={prevStep} className="px-6 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition">
                                    Back
                                </button>
                            )}
                            
                            {step < 3 ? (
                                <button type="button" onClick={nextStep} className="flex-grow bg-star-blue text-white font-bold py-3 rounded-xl shadow-lg hover:bg-star-dark transition-all flex items-center justify-center gap-2">
                                    Next Step <i className="fas fa-arrow-right text-sm"></i>
                                </button>
                            ) : (
                                <button type="button" onClick={handleSubmit} disabled={isSubmitting} className="flex-grow bg-gradient-to-r from-yellow-400 to-yellow-500 text-blue-900 font-black py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-70">
                                    {isSubmitting ? <i className="fas fa-spinner fa-spin"></i> : (
                                        <>Claim Offer & Book <i className="fas fa-check-circle"></i></>
                                    )}
                                </button>
                            )}
                        </div>

                    </form>
                </div>
            </div>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center relative border-4 border-white shadow-2xl animate-in zoom-in-95">
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-inner">
                    <i className="fas fa-calendar-check"></i>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2">You're All Set!</h3>
                <p className="text-gray-600 mb-6">We've received your request for <strong>{selectedDate ? new Date(selectedDate).toLocaleDateString() : 'Cleaning'}</strong>. We will confirm shortly!</p>
                <button onClick={() => setShowPopup(false)} className="w-full bg-star-blue text-white font-bold py-3 rounded-xl shadow-md">Awesome</button>
            </div>
        </div>
      )}
    </section>
  );
};

// --- HELPER COMPONENTS ---

const StepItem: React.FC<{ num: number, label: string, active: boolean, done: boolean }> = ({ num, label, active, done }) => (
    <div className={`flex items-center gap-3 ${active ? 'opacity-100' : 'opacity-50'}`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-colors ${
            active ? 'border-star-blue bg-star-blue text-white' : 
            done ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300 text-gray-400'
        }`}>
            {done ? <i className="fas fa-check"></i> : num}
        </div>
        <span className={`font-bold text-sm ${active ? 'text-gray-900' : 'text-gray-400'}`}>{label}</span>
    </div>
);

const Counter: React.FC<{ label: string, value: number, onMinus: () => void, onPlus: () => void }> = ({ label, value, onMinus, onPlus }) => (
    <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm flex flex-col items-center">
        <label className="text-xs font-bold text-gray-400 uppercase mb-2">{label}</label>
        <div className="flex items-center gap-4">
            <button type="button" onClick={onMinus} className="w-8 h-8 rounded-full bg-gray-50 text-gray-600 hover:bg-gray-200 flex items-center justify-center transition"><i className="fas fa-minus text-xs"></i></button>
            <span className="text-xl font-black text-gray-900 w-6 text-center">{value}</span>
            <button type="button" onClick={onPlus} className="w-8 h-8 rounded-full bg-star-blue text-white hover:bg-star-dark flex items-center justify-center transition"><i className="fas fa-plus text-xs"></i></button>
        </div>
    </div>
);

const PetToggle: React.FC<{ label: string, icon: string, active: boolean, onClick: () => void }> = ({ label, icon, active, onClick }) => (
    <button type="button" onClick={onClick} className={`flex-1 p-3 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${active ? 'border-star-blue bg-blue-50/50' : 'border-gray-200 hover:bg-gray-50'}`}>
        <i className={`fas ${icon} text-xl ${active ? 'text-star-blue' : 'text-gray-400'}`}></i>
        <span className={`text-xs font-bold ${active ? 'text-star-blue' : 'text-gray-500'}`}>{label}</span>
    </button>
);

// New Card Style Component for Service
const ServiceCard: React.FC<{ title: string, subtitle: string, icon: string, selected: boolean, onClick: () => void, badge?: string }> = ({ title, subtitle, icon, selected, onClick, badge }) => (
    <button type="button" onClick={onClick} className={`w-full text-left p-4 rounded-xl border-2 relative transition-all duration-200 group ${selected ? 'border-star-blue bg-blue-50/30 shadow-md z-10' : 'border-gray-100 bg-white hover:border-blue-100 hover:shadow-sm'}`}>
        {badge && <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-[9px] font-black uppercase px-2 py-0.5 rounded-bl-lg rounded-tr-lg">{badge}</div>}
        <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors ${selected ? 'bg-star-blue text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-blue-100 group-hover:text-star-blue'}`}>
                <i className={`fas ${icon} text-lg`}></i>
            </div>
            <div className="flex-grow">
                <h4 className={`font-bold text-base ${selected ? 'text-star-blue' : 'text-gray-900'}`}>{title}</h4>
                <p className="text-xs text-gray-500 leading-tight">{subtitle}</p>
            </div>
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected ? 'border-star-blue bg-star-blue' : 'border-gray-200'}`}>
                {selected && <i className="fas fa-check text-white text-[10px]"></i>}
            </div>
        </div>
    </button>
);

const FrequencyCard: React.FC<{ label: string, discount: string, selected: boolean, onClick: () => void, badge?: string }> = ({ label, discount, selected, onClick, badge }) => (
    <button type="button" onClick={onClick} className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all relative ${selected ? 'border-green-500 bg-green-50' : 'border-gray-100 hover:border-green-200'}`}>
        {badge && <span className="absolute -top-2 bg-gray-800 text-white text-[8px] font-bold px-1.5 py-0.5 rounded uppercase">{badge}</span>}
        <span className={`text-xs font-bold mb-1 ${selected ? 'text-gray-900' : 'text-gray-600'}`}>{label}</span>
        <span className={`text-[10px] font-black uppercase px-1.5 py-0.5 rounded ${selected ? 'bg-green-200 text-green-800' : 'bg-gray-100 text-gray-500'}`}>Save {discount}</span>
    </button>
);

export default BookingForm;