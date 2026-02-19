import React, { useState, useEffect, useRef } from 'react';

interface BookingFormProps {
  initialData?: any;
}

// STANDARD OPERATING HOURS
const DAILY_SLOTS = [
    { time: '08:30 AM', label: 'Morning Arrival' },
    { time: '11:30 AM', label: 'Mid-Day Arrival' },
    { time: '02:30 PM', label: 'Afternoon Arrival' }
];

const BookingForm: React.FC<BookingFormProps> = ({ initialData }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [hasBookedTime, setHasBookedTime] = useState(false);
  
  // Pricing State
  const [initialMin, setInitialMin] = useState("0.00");
  const [initialMax, setInitialMax] = useState("0.00");
  const [recurringMin, setRecurringMin] = useState("0.00");
  const [recurringMax, setRecurringMax] = useState("0.00");
  const [recurringSavings, setRecurringSavings] = useState("0.00");
  
  // Calendar State
  const [availableDates, setAvailableDates] = useState<Date[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState<any[]>([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);

  // SIMULATED DATABASE (In a real app, this comes from your API)
  // Format: "YYYY-MM-DD_TIME"
  const [bookedSlots, setBookedSlots] = useState<string[]>([]);

  // City Lookup
  const [city, setCity] = useState<string | null>(null);

  // Refs for scrolling
  const formTopRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    bedrooms: 3, 
    bathrooms: 2, 
    hasDog: false,
    hasCat: false,
    serviceType: 'Standard House Cleaning',
    frequency: 'Weekly' // Default changed to Weekly
  });

  // --- SCROLL TO TOP ON STEP CHANGE (MOBILE FIX) ---
  useEffect(() => {
    // Only scroll if we are not on step 1 (initial load) to avoid jumping on page load
    // And ensure we are scrolling to the form container
    if (step > 1 && formTopRef.current) {
        // Use a small timeout to allow DOM to update height
        setTimeout(() => {
             formTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }
  }, [step]);

  // --- HANDLE INITIAL DATA FROM HERO ---
  useEffect(() => {
    if (initialData) {
        setFormData(prev => ({
            ...prev,
            ...initialData,
            serviceType: initialData.serviceType || prev.serviceType
        }));
        
        if (initialData.fullName && initialData.email) {
            setStep(2);
        }

        if (initialData.serviceType && initialData.serviceType.includes("Move")) {
             setFormData(prev => ({ ...prev, frequency: 'One-Time' }));
        }
    }
  }, [initialData]);

  // --- CALENDAR GENERATOR ---
  useEffect(() => {
    const dates: Date[] = [];
    const today = new Date();
    let current = new Date(today);
    current.setDate(current.getDate() + 1); // Start tomorrow

    // Generate next 14 days, skipping Sundays
    while (dates.length < 10) {
        const day = current.getDay();
        // 0 = Sunday, 6 = Saturday. Let's say we work Mon-Sat.
        if (day !== 0) { 
            dates.push(new Date(current));
        }
        current.setDate(current.getDate() + 1);
    }
    setAvailableDates(dates);
    
    // Simulate some already booked slots for realism
    const fakeBooked = [];
    if (dates[0]) fakeBooked.push(`${dates[0].toDateString()}_08:30 AM`);
    if (dates[1]) fakeBooked.push(`${dates[1].toDateString()}_02:30 PM`);
    setBookedSlots(prev => [...prev, ...fakeBooked]);

  }, []);

  // --- PRICING ENGINE ---
  useEffect(() => {
    let standardBase = 165.50; 
    const bedDiff = formData.bedrooms - 3;
    standardBase += (bedDiff * 28.50); 
    const bathDiff = formData.bathrooms - 2;
    standardBase += (bathDiff * 22.75); 
    if (formData.hasDog) standardBase += 12.50;
    if (formData.hasCat) standardBase += 10.50;
    if (standardBase < 120.00) standardBase = 120.00;

    let initialMultiplier = 1.65; 
    if (formData.serviceType && (formData.serviceType.includes("Move") || formData.serviceType.includes("Vacation"))) {
        initialMultiplier = 2.0;
    }

    const initialPriceRaw = standardBase * initialMultiplier;

    let discountPercent = 0;
    if (formData.frequency === "Weekly") discountPercent = 0.20; 
    if (formData.frequency === "Bi-Weekly") discountPercent = 0.15; 
    if (formData.frequency === "Monthly") discountPercent = 0.05; 
    
    const recurringPriceRaw = standardBase * (1 - discountPercent);
    const savingsRaw = standardBase * discountPercent;

    setInitialMin(initialPriceRaw.toFixed(2));
    setInitialMax((initialPriceRaw * 1.12).toFixed(2));
    setRecurringMin(recurringPriceRaw.toFixed(2));
    setRecurringMax((recurringPriceRaw * 1.12).toFixed(2));
    setRecurringSavings(savingsRaw.toFixed(2));

  }, [formData]);

  // --- WEBHOOK HELPER ---
  const submitWebhook = async (stage: string, extraData = {}) => {
      const payload = {
        ...formData,
        initialCleanPrice: `$${initialMin} - $${initialMax}`,
        recurringPrice: `$${recurringMin} - $${recurringMax}`,
        frequencySavings: `$${recurringSavings}`,
        cityDetected: city || "Not Detected",
        stage,
        ...extraData,
        submittedAt: new Date().toISOString()
      };

      let url = "";

      // Logic: Only send to specific webhooks on specific stages
      if (stage === "Quote Range Generated") {
          url = "https://webhook.infra-remakingautomacoes.cloud/webhook/scsite";
      } else if (stage === "Walkthrough Scheduled") {
          url = "https://webhook.infra-remakingautomacoes.cloud/webhook/scsiteagenda";
      } else {
          // Strict block: Do not send webhook for any other stage
          return false;
      }

      if (!url) return false;

      try {
        await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        return true;
      } catch (error) {
        console.error("Error submitting webhook", error);
        return false;
      }
  };

  // --- AVAILABILITY CHECKER ---
  const fetchTimeSlotsForDate = async (dateStr: string) => {
      setIsLoadingSlots(true);
      setAvailableTimeSlots([]); 
      setSelectedTime(null);

      setTimeout(() => {
        const calculatedSlots = DAILY_SLOTS.map(slot => {
            const slotKey = `${dateStr}_${slot.time}`;
            const isBooked = bookedSlots.includes(slotKey);
            
            return {
                ...slot,
                available: !isBooked,
                isBooked: isBooked
            };
        });

        setAvailableTimeSlots(calculatedSlots);
        setIsLoadingSlots(false);
      }, 600); 
  };

  const handleDateSelect = (dateStr: string) => {
      setSelectedDate(dateStr);
      fetchTimeSlotsForDate(dateStr);
  };

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

  const updateCounter = (field: 'bedrooms' | 'bathrooms', delta: number) => {
    setFormData(prev => ({
        ...prev,
        [field]: Math.max(1, prev[field] + delta)
    }));
  };

  const togglePet = (pet: 'hasDog' | 'hasCat') => {
      setFormData(prev => ({ ...prev, [pet]: !prev[pet] }));
  };

  const nextStep = () => {
      if (step === 1) {
          if (!formData.fullName || !formData.email || !formData.phone || !formData.zipCode) {
              alert("Please fill in all fields so we can save your quote.");
              return;
          }
      }
      
      // UX Fix: Close keyboard on mobile to prevent layout jumping
      if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
      }

      setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleLockPrice = async () => {
    setIsSubmitting(true);
    // Fires SC SITE Webhook (Step 3 -> 4)
    await submitWebhook("Quote Range Generated");
    setIsSubmitting(false);
    setStep(4); 
  };

  const handleSkipScheduling = async () => {
      setHasBookedTime(false);
      setShowPopup(true);
  };

  const handleFinalBooking = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
        alert("Please select a date and time.");
        return;
    }
    
    setIsSubmitting(true);
    
    // Fires AGENDA Webhook (Step 5 confirmed)
    await submitWebhook("Walkthrough Scheduled", { visitDate: selectedDate, visitTime: selectedTime });
    
    // 2. "Reserve" the slot in our local state (Optimistic Update)
    const slotKey = `${selectedDate}_${selectedTime}`;
    setBookedSlots(prev => [...prev, slotKey]);

    setIsSubmitting(false);
    setHasBookedTime(true);
    setShowPopup(true);
  };

  const isOneTime = formData.frequency === 'One-Time' || (formData.serviceType && formData.serviceType.includes('Move'));
  
  return (
    <section id="quote" className="py-8 lg:py-20 bg-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-yellow-200 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-[0%] left-[0%] w-[30%] h-[30%] bg-blue-200 rounded-full blur-[80px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 lg:min-h-[500px]">
          
          {/* Left Side: Summary & Testimonial */}
          <div className="lg:w-4/12 bg-gradient-to-br from-star-dark to-star-blue p-6 lg:p-8 text-white relative flex flex-col justify-between shrink-0 transition-all duration-500">
            {/* Overlay Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start lg:flex-col lg:items-start">
                  <div className="mb-2 lg:mb-4 animate-pulse-slow">
                     <img 
                        src="https://image-cdn.carrot.com/uploads/sites/6069/2012/01/veteran-owned.png" 
                        alt="Veteran Owned Business" 
                        className="h-10 lg:h-14 w-auto object-contain drop-shadow-md"
                     />
                  </div>
                  
                  {/* Mobile Progress Counter */}
                  <div className="lg:hidden text-[10px] font-bold opacity-80 uppercase tracking-widest border border-white/20 rounded-full px-2 py-0.5">
                      Step {step > 4 ? 4 : step}/4
                  </div>
              </div>

              <h2 className="text-2xl lg:text-3xl font-black mb-1 lg:mb-2 font-heading leading-tight">
                Your Custom Quote
              </h2>
              <p className="text-blue-100 text-xs lg:text-sm leading-tight mb-4 lg:mb-8 opacity-90 lg:opacity-100">
                Proudly serving Charleston for 18 years.
              </p>

              {/* Mobile Progress Bar */}
              <div className="lg:hidden w-full h-1.5 bg-blue-900/50 rounded-full overflow-hidden mb-2">
                  <div 
                    className="h-full bg-yellow-400 transition-all duration-500 ease-out"
                    style={{ width: `${Math.min(100, (step / 4) * 100)}%` }}
                  ></div>
              </div>

              {/* Step Indicators - Desktop Only */}
              <div className="hidden lg:flex flex-col gap-4 mt-2">
                  <StepIndicator current={step} num={1} label="Contact Info" />
                  <StepIndicator current={step} num={2} label="Home Details" />
                  <StepIndicator current={step} num={3} label="Your Price" />
                  <StepIndicator current={step >= 4 ? 4 : step} num={4} label="Visit" />
              </div>
            </div>

             {/* Reviewer */}
             <div className="hidden lg:block mt-8 pt-6 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white p-0.5 shadow-lg">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-full h-full rounded-full object-cover" alt="Client" />
                </div>
                <div>
                  <div className="flex text-yellow-400 text-[10px] mb-1">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="text-xs text-blue-100 leading-tight italic">"They gave me my weekends back! Worth every penny."</p>
                  <p className="text-[10px] font-bold text-white mt-1">- Sarah, Mount Pleasant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Multi-Step Form */}
          {/* Added min-height to ensure consistent layout size during mobile transitions */}
          {/* ADDED REF FOR SCROLL */}
          <div ref={formTopRef} className="lg:w-8/12 p-5 lg:p-10 bg-white flex flex-col relative min-h-[500px] lg:min-h-[600px] scroll-mt-20">
            
            {/* Header */}
            <div className="mb-4 lg:mb-6 flex items-center justify-between border-b border-gray-100 pb-4">
                 <h3 className="text-lg lg:text-xl font-black text-gray-900 font-heading flex items-center gap-2">
                    <span className="w-2 h-2 bg-star-blue rounded-full"></span>
                    {step === 1 && "Let's get in touch"}
                    {step === 2 && "Tell us about your home"}
                    {step === 3 && "Review your plan"}
                    {step === 4 && "Price Generated!"}
                    {step === 5 && "Schedule Walkthrough"}
                </h3>
                {/* Step Counter on Desktop */}
                <span className="hidden lg:flex text-xs text-gray-400 font-bold uppercase tracking-wider items-center gap-1">
                    Step {step > 4 ? 4 : step} / 4
                </span>
            </div>

            <form className="flex-grow flex flex-col justify-between h-full">
              
              {/* FLUID ANIMATION CONTAINER */}
              <div key={step} className="animate-slide-in-right flex-grow">
              
                  {/* STEP 1: CONTACT */}
                  {step === 1 && (
                      <div className="grid grid-cols-2 gap-4 lg:gap-6">
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
                                <label className="text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Zip Code</label>
                                <input 
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleChange}
                                    maxLength={5}
                                    placeholder="29401"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white font-semibold hover:border-blue-300"
                                />
                            </div>
                        </div>
                        {city && (
                            <div className="col-span-2 bg-green-50 border border-green-100 rounded-xl p-3 flex items-center gap-2 animate-slide-in-bottom">
                                <i className="fas fa-check-circle text-green-500 ml-1"></i>
                                <p className="text-green-800 text-sm font-bold">Great! We serve <span className="underline">{city}</span>.</p>
                            </div>
                        )}
                      </div>
                  )}

                  {/* STEP 2: DETAILS */}
                  {step === 2 && (
                       <div className="space-y-6 lg:space-y-8">
                            {/* Counters */}
                            <div className="grid grid-cols-2 gap-4 lg:gap-8">
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
                                <label className="text-xs font-bold text-gray-500 uppercase mb-4 block ml-1">Pets in Home?</label>
                                <div className="flex gap-4 lg:gap-6">
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

                            {formData.serviceType.includes("Move") && (
                                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl flex items-center gap-3 animate-pulse-slow">
                                    <i className="fas fa-box-open text-yellow-600 text-xl"></i>
                                    <p className="text-sm text-yellow-800 font-bold">Configured for Move In / Move Out Service</p>
                                </div>
                            )}
                       </div>
                  )}

                  {/* STEP 3: PRICING */}
                  {step === 3 && (
                      <div className="space-y-4">
                           {/* Frequency Selector */}
                           <div className="flex flex-col group">
                                <label className="text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Frequency</label>
                                <div className="grid grid-cols-4 gap-2">
                                    {['Weekly', 'Bi-Weekly', 'Monthly', 'One-Time'].map((freq) => (
                                        <button
                                            key={freq}
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, frequency: freq }))}
                                            className={`py-2 px-1 rounded-lg text-[10px] md:text-xs font-bold border transition-all duration-200 truncate transform active:scale-95 ${
                                                formData.frequency === freq 
                                                ? 'bg-star-blue text-white border-star-blue shadow-md scale-105' 
                                                : 'bg-white text-gray-600 border-gray-100 hover:border-blue-200 hover:bg-gray-50'
                                            }`}
                                        >
                                            {freq}
                                        </button>
                                    ))}
                                </div>
                           </div>

                           {/* Redesigned Cards */}
                           <div className="flex flex-col md:flex-row gap-3 mt-2">
                               
                               {/* 1. THE RESET (Deep Clean) */}
                               <div className="flex-1 bg-white border border-gray-200 rounded-xl p-4 shadow-sm relative group hover:border-blue-200 hover:shadow-md transition-all duration-300 overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-gray-400"></div>

                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h4 className="font-black text-gray-900 text-sm leading-tight flex items-center gap-1">
                                                {formData.serviceType.includes("Move") ? "Move-In Reset" : "The Deep Clean Reset"}
                                            </h4>
                                            <p className="text-[10px] text-gray-500 font-medium mt-0.5">One-time detailed scrub.</p>
                                        </div>
                                        <span className="bg-gray-100 text-gray-600 text-[9px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">
                                            Step 1
                                        </span>
                                    </div>
                                    
                                    <div className="mb-3">
                                        <span className="block text-xl font-black text-gray-800 tracking-tight">${initialMin} - ${initialMax}</span>
                                    </div>

                                    <div className="bg-gray-50 rounded-lg p-2 space-y-1">
                                        <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-medium">
                                            <i className="fas fa-shield-alt text-green-500"></i> 100% Satisfaction Guaranteed
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-medium">
                                            <i className="fas fa-sparkles text-green-500"></i> Top-to-Bottom Deep Scrub
                                        </div>
                                        <div className="flex items-center gap-1.5 text-[10px] text-gray-600 font-medium">
                                            <i className="fas fa-pump-soap text-green-500"></i> Kitchen & Bath Sanitization
                                        </div>
                                    </div>
                               </div>

                               {/* 2. MAINTENANCE (Recurring) */}
                               {!isOneTime && (
                                    <div className="flex-1 bg-blue-50/50 border border-star-blue rounded-xl p-4 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow duration-300 overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-star-blue to-blue-400"></div>

                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h4 className="font-black text-star-blue text-sm leading-tight">Maintenance Clean</h4>
                                                    <p className="text-[10px] text-gray-500 font-medium mt-0.5">Keep it fresh forever.</p>
                                                </div>
                                                <span className="bg-blue-100 text-star-blue text-[9px] font-bold px-2 py-1 rounded-lg uppercase tracking-wider">
                                                    Step 2
                                                </span>
                                            </div>
                                            
                                            <div className="mb-auto">
                                                <span className="block text-2xl font-black text-star-blue tracking-tight">${recurringMin} - ${recurringMax}</span>
                                                <div className="text-[9px] text-green-600 font-bold mt-1 bg-green-50 inline-block px-1.5 py-0.5 rounded">
                                                    Save ${recurringSavings} per visit
                                                </div>
                                            </div>
                                            
                                            <div className="mt-3 pt-3 border-t border-blue-100 text-[10px] text-gray-500 flex items-center gap-2">
                                                <i className="fas fa-sync-alt text-star-blue opacity-50"></i>
                                                <span>Locks in your discounted rate</span>
                                            </div>
                                    </div>
                               )}
                           </div>
                           
                           <div className="text-center mt-2">
                                <p className="text-[10px] text-gray-400 font-medium italic flex items-center justify-center gap-1">
                                    <i className="fas fa-info-circle"></i> "The Reset" brings your home to our professional standard so maintenance is easy.
                                </p>
                           </div>
                      </div>
                  )}

                  {/* STEP 4: DECISION */}
                  {step === 4 && (
                      <div className="py-2">
                          
                          <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center shadow-sm mb-6 animate-zoom-in">
                              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-3xl mx-auto mb-4 animate-bounce">
                                  <i className="fas fa-file-invoice-dollar"></i>
                              </div>
                              <h3 className="text-xl font-black text-gray-900 mb-1">Quote Saved!</h3>
                              <div className="text-sm text-gray-600">
                                 <span className="block font-bold">Range: ${initialMin} - ${initialMax}</span>
                              </div>
                          </div>

                          <div className="text-center">
                              <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
                                  Schedule a quick 15-min walkthrough to lock in your exact price.
                              </p>
                              
                              <div className="flex flex-col gap-3">
                                  <button 
                                    type="button"
                                    onClick={() => setStep(5)}
                                    className="w-full bg-star-blue hover:bg-star-dark text-white font-black py-4 rounded-xl shadow-lg shadow-blue-200 transform hover:-translate-y-1 active:scale-95 transition-all duration-200 flex justify-center items-center gap-3 text-lg group"
                                  >
                                      <span>See Availability</span>
                                      <i className="fas fa-calendar-alt group-hover:rotate-12 transition-transform"></i>
                                  </button>

                                  <button 
                                    type="button"
                                    onClick={handleSkipScheduling}
                                    className="text-gray-400 hover:text-gray-600 font-bold text-xs py-2 underline decoration-gray-300 hover:decoration-gray-500 transition-all"
                                  >
                                      No thanks, just email me the quote
                                  </button>
                              </div>
                          </div>
                      </div>
                  )}

                  {/* STEP 5: CALENDAR */}
                  {step === 5 && (
                      <div className="space-y-4">
                            <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl flex items-center gap-3">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm shrink-0">
                                    <i className="fas fa-clock"></i>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-blue-900 uppercase">15-Min Walkthrough</p>
                                    <p className="text-[10px] text-gray-500 font-medium">No cleaning today, just a quick look.</p>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-black text-gray-900 mb-2 uppercase tracking-wide">1. Select Day</h4>
                                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
                                    {availableDates.map((date, idx) => {
                                        const dateStr = date.toDateString();
                                        const isSelected = selectedDate === dateStr;
                                        return (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => handleDateSelect(dateStr)}
                                                className={`min-w-[80px] p-2 rounded-xl border-2 text-center transition-all duration-200 snap-center transform ${
                                                    isSelected 
                                                    ? 'bg-star-blue text-white border-star-blue shadow-md scale-105' 
                                                    : 'bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:bg-gray-50'
                                                }`}
                                            >
                                                <span className="block text-[9px] uppercase font-bold opacity-80">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                                <span className="block text-xl font-black">{date.getDate()}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {selectedDate && (
                                <div className="animate-slide-in-bottom">
                                    <h4 className="text-xs font-black text-gray-900 mb-2 uppercase tracking-wide">2. Arrival Window</h4>
                                    
                                    {isLoadingSlots ? (
                                        <div className="py-6 text-center text-xs font-bold text-gray-400 animate-pulse">
                                            <i className="fas fa-spinner fa-spin mr-2"></i> Loading slots...
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-2 gap-2">
                                            {availableTimeSlots.length > 0 ? availableTimeSlots.map((slot, idx) => {
                                                const isSelected = selectedTime === slot.time;
                                                const isBooked = slot.isBooked;

                                                return (
                                                    <button
                                                        key={idx}
                                                        type="button"
                                                        disabled={!slot.available}
                                                        onClick={() => setSelectedTime(slot.time)}
                                                        className={`p-3 rounded-xl border-2 text-left transition-all duration-200 group relative overflow-hidden ${
                                                            isBooked 
                                                            ? 'bg-gray-50 border-gray-100 cursor-not-allowed opacity-60' 
                                                            : isSelected
                                                                ? 'bg-green-50 border-green-500 shadow-sm scale-[1.02]'
                                                                : 'bg-white border-gray-100 hover:border-gray-300 hover:bg-gray-50'
                                                        }`}
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <span className={`text-sm font-black ${isBooked ? 'text-gray-400 line-through' : isSelected ? 'text-green-700' : 'text-gray-900'}`}>{slot.time}</span>
                                                            {!isBooked && isSelected && <i className="fas fa-check-circle text-green-500 text-xs animate-zoom-in"></i>}
                                                            {isBooked && <span className="text-[9px] font-bold text-red-400 bg-red-50 px-1.5 rounded uppercase">Full</span>}
                                                        </div>
                                                        <span className={`text-[9px] font-medium block ${isBooked ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-700'}`}>{slot.label}</span>
                                                    </button>
                                                );
                                            }) : (
                                                <div className="col-span-2 text-center py-2 text-xs text-gray-500">No slots available.</div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                      </div>
                  )}
              </div>

              {/* Navigation Buttons */}
              <div className="mt-6 flex gap-3 pt-4 border-t border-gray-50">
                {step > 1 && step < 4 && (
                    <button 
                        type="button"
                        onClick={prevStep}
                        className="w-1/3 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors text-sm active:scale-95"
                    >
                        Back
                    </button>
                )}
                
                {step < 3 && (
                     <button 
                        type="button"
                        onClick={nextStep}
                        className="w-full py-4 rounded-xl font-black text-white bg-star-blue hover:bg-star-dark shadow-md transition-all flex items-center justify-center gap-2 text-lg active:scale-95 group"
                    >
                        <span>Next Step</span>
                        <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                    </button>
                )}
                
                {step === 3 && (
                     <button 
                        type="button"
                        onClick={handleLockPrice}
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-xl font-black text-blue-900 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 shadow-xl shadow-yellow-200/50 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg relative overflow-hidden active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group"
                    >
                        {isSubmitting ? (
                            <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                            <>
                                <span>Save Estimate</span>
                                <i className="fas fa-lock group-hover:scale-110 transition-transform"></i>
                            </>
                        )}
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1s_infinite]"></div>
                    </button>
                )}

                {step === 5 && (
                    <>
                        <button 
                            type="button"
                            onClick={() => setStep(4)}
                            className="w-1/3 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors text-sm active:scale-95"
                        >
                            Back
                        </button>
                        <button 
                            type="button"
                            onClick={handleFinalBooking}
                            disabled={isSubmitting || !selectedDate || !selectedTime}
                            className="w-full py-4 rounded-xl font-black text-white bg-green-500 hover:bg-green-600 shadow-xl shadow-green-200/50 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg relative overflow-hidden active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
                        >
                            {isSubmitting ? (
                                <i className="fas fa-spinner fa-spin"></i>
                            ) : (
                                <>
                                    <span>Confirm</span>
                                    <i className="fas fa-check-circle group-hover:scale-110 transition-transform"></i>
                                </>
                            )}
                        </button>
                    </>
                )}

              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* SUCCESS POPUP OVERLAY */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center relative transform scale-100 animate-zoom-in border-4 border-white">
                <button 
                    onClick={() => setShowPopup(false)} 
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <i className="fas fa-times"></i>
                </button>
                
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner animate-zoom-in">
                    <i className="fas fa-check-circle"></i>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">
                    {hasBookedTime ? "Visit Requested!" : "Quote Saved!"}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {hasBookedTime ? (
                        <>
                            We have received your request for a walkthrough on:<br/>
                            <strong>{selectedDate ? new Date(selectedDate).toLocaleDateString() : 'Date'} @ {selectedTime}</strong>
                        </>
                    ) : (
                        <>
                            Thanks! We have saved your estimate range.<br/>
                            Our team will text you shortly to answer any questions.
                        </>
                    )}
                    <br/><br/>
                    A confirmation has been sent to <span className="font-bold">{formData.phone}</span>.
                </p>
                
                <div className="space-y-3">
                    <button 
                        onClick={() => setShowPopup(false)}
                        className="w-full bg-star-blue text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-200 active:scale-95"
                    >
                        Awesome, Thanks!
                    </button>
                </div>
            </div>
        </div>
      )}
    </section>
  );
};

const StepIndicator: React.FC<{ current: number, num: number, label: string }> = ({ current, num, label }) => {
    const isActive = (current === num) || (current === 5 && num === 4); 
    const isCompleted = current > num && !(current === 5 && num === 4);
    
    return (
        <div className={`flex items-center gap-3 transition-all duration-300 ${isActive ? 'opacity-100 translate-x-1' : 'opacity-60'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-colors ${isActive || isCompleted ? 'bg-yellow-400 border-yellow-400 text-blue-900' : 'bg-transparent border-white/30 text-white'}`}>
                {isCompleted ? <i className="fas fa-check"></i> : num}
            </div>
            <span className="text-sm font-bold tracking-wide text-white">{label}</span>
        </div>
    );
};

const InputGroup: React.FC<any> = ({ label, type = "text", ...props }) => (
  <div className="flex flex-col group w-full">
    <label className="text-xs font-bold text-gray-500 uppercase mb-2 ml-1 group-focus-within:text-star-blue transition-colors">{label}</label>
    <input 
      type={type}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold hover:border-blue-300"
      {...props}
    />
  </div>
);

const Counter: React.FC<{ label: string, value: number, onMinus: () => void, onPlus: () => void }> = ({ label, value, onMinus, onPlus }) => (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col items-center justify-center hover:border-blue-200 transition-colors">
        <label className="text-xs font-bold text-gray-500 uppercase mb-3">{label}</label>
        <div className="flex items-center gap-6">
            <button type="button" onClick={onMinus} className="w-10 h-10 rounded-full bg-white border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-100 active:scale-90 transition-transform">
                <i className="fas fa-minus text-xs"></i>
            </button>
            <span className="text-2xl font-black text-gray-900 w-8 text-center">{value}</span>
            <button type="button" onClick={onPlus} className="w-10 h-10 rounded-full bg-white border border-star-blue text-star-blue flex items-center justify-center hover:bg-blue-50 active:scale-90 transition-transform shadow-sm">
                <i className="fas fa-plus text-xs"></i>
            </button>
        </div>
    </div>
);

const PetToggle: React.FC<{ label: string, icon: string, active: boolean, onClick: () => void }> = ({ label, icon, active, onClick }) => (
    <div 
        onClick={onClick}
        className={`flex-1 cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-3 transition-all duration-200 transform active:scale-95 ${active ? 'border-star-blue bg-blue-50 scale-105 shadow-sm' : 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'}`}
    >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-star-blue text-white' : 'bg-white text-gray-400'}`}>
            <i className={`fas ${icon} text-xl`}></i>
        </div>
        <span className={`text-sm font-bold ${active ? 'text-star-blue' : 'text-gray-500'}`}>{label}</span>
    </div>
);

export default BookingForm;