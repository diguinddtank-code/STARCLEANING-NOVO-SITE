import React, { useState, useEffect } from 'react';

interface BookingFormProps {
  initialData?: any;
}

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

  // City Lookup
  const [city, setCity] = useState<string | null>(null);
  
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
    frequency: 'Bi-Weekly'
  });

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
    current.setDate(current.getDate() + 1);

    while (dates.length < 6) {
        const day = current.getDay();
        if (day === 2 || day === 4) {
            dates.push(new Date(current));
        }
        current.setDate(current.getDate() + 1);
    }
    setAvailableDates(dates);
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

      try {
        await fetch("https://webhook.infra-remakingautomacoes.cloud/webhook/scsite", {
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

  const fetchTimeSlotsForDate = async (dateStr: string) => {
      setIsLoadingSlots(true);
      setAvailableTimeSlots([]); 
      setSelectedTime(null);

      setTimeout(() => {
        const isFirstDate = dateStr === availableDates[0]?.toDateString();
        const mockSlotsFromApi = [
            { time: '08:30 AM', label: 'Morning Arrival', spots: 1, available: !isFirstDate }, 
            { time: '11:00 AM', label: 'Mid-Day Arrival', spots: 3, available: true },
            { time: '02:00 PM', label: 'Afternoon Arrival', spots: 2, available: true },
        ];
        setAvailableTimeSlots(mockSlotsFromApi.filter(s => s.available));
        setIsLoadingSlots(false);
      }, 800); 
  };

  const handleDateSelect = (dateStr: string) => {
      setSelectedDate(dateStr);
      fetchTimeSlotsForDate(dateStr);
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
      setStep(prev => prev + 1);
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleLockPrice = async () => {
    setIsSubmitting(true);
    await submitWebhook("Quote Range Generated");
    setIsSubmitting(false);
    setStep(4); 
  };

  const handleSkipScheduling = () => {
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
    await submitWebhook("Walkthrough Scheduled", { visitDate: selectedDate, visitTime: selectedTime });
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
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 min-h-[500px]">
          
          {/* Left Side: Summary & Testimonial (Restored Sidebar Layout) */}
          <div className="lg:w-4/12 bg-gradient-to-br from-star-dark to-star-blue p-8 text-white relative flex flex-col justify-between shrink-0 transition-all duration-500">
            {/* Overlay Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-yellow-400 text-blue-900 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-4 shadow-sm">
                Veteran Owned
              </div>
              <h2 className="text-3xl font-black mb-2 font-heading leading-tight">
                Your Custom Quote
              </h2>
              <p className="text-blue-100 text-sm leading-tight mb-8">
                Proudly serving Charleston for 18 years.
              </p>

              {/* Step Indicators */}
              <div className="flex flex-col gap-4 mt-2">
                  <StepIndicator current={step} num={1} label="Contact Info" />
                  <StepIndicator current={step} num={2} label="Home Details" />
                  <StepIndicator current={step} num={3} label="Your Price" />
                  <StepIndicator current={step >= 4 ? 4 : step} num={4} label="Visit" />
              </div>
            </div>

             {/* Reviewer */}
             <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white p-0.5">
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

          {/* Right Side: The Multi-Step Form (Restored Spacious Layout) */}
          <div className="lg:w-8/12 p-6 lg:p-10 bg-white flex flex-col relative">
            
            {/* Header */}
            <div className="mb-8 flex items-center justify-between border-b border-gray-100 pb-4">
                 <h3 className="text-xl font-black text-gray-900 font-heading flex items-center gap-2">
                    <span className="w-2 h-2 bg-star-blue rounded-full"></span>
                    {step === 1 && "Let's get in touch"}
                    {step === 2 && "Tell us about your home"}
                    {step === 3 && "Review your plan"}
                    {step === 4 && "Price Generated!"}
                    {step === 5 && "Schedule Walkthrough"}
                </h3>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    Step {step > 4 ? 4 : step} / 4
                </span>
            </div>

            <form className="flex-grow flex flex-col justify-between h-full">
              
              {/* STEP 1: CONTACT */}
              {step === 1 && (
                  <div className="grid grid-cols-2 gap-6 animate-in fade-in slide-in-from-right-4 duration-300">
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
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white font-semibold"
                            />
                        </div>
                    </div>
                    {city && (
                        <div className="col-span-2 bg-green-50 border border-green-100 rounded-xl p-3 flex items-center gap-2 animate-in fade-in">
                            <i className="fas fa-check-circle text-green-500 ml-1"></i>
                            <p className="text-green-800 text-sm font-bold">Great! We serve <span className="underline">{city}</span>.</p>
                        </div>
                    )}
                  </div>
              )}

              {/* STEP 2: DETAILS */}
              {step === 2 && (
                   <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                        {/* Counters */}
                        <div className="grid grid-cols-2 gap-8">
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
                            <label className="text-xs font-bold text-gray-500 uppercase mb-4 block ml-1">Pets in Home? ($10-12/pet)</label>
                            <div className="flex gap-6">
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

                        {/* Visual feedback if "Move In" selected in Hero */}
                        {formData.serviceType.includes("Move") && (
                            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl flex items-center gap-3">
                                <i className="fas fa-box-open text-yellow-600 text-xl"></i>
                                <p className="text-sm text-yellow-800 font-bold">Configured for Move In / Move Out Service</p>
                            </div>
                        )}
                   </div>
              )}

              {/* STEP 3: PRICING (SPLIT VIEW) */}
              {step === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                       
                       <div className="grid grid-cols-1 gap-4">
                            {/* Frequency Selector */}
                            <div className="flex flex-col group">
                                <label className="text-xs font-bold text-gray-500 uppercase mb-3 ml-1">How often would you like service?</label>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                    {['Weekly', 'Bi-Weekly', 'Monthly', 'One-Time'].map((freq) => (
                                        <button
                                            key={freq}
                                            type="button"
                                            onClick={() => setFormData(prev => ({ ...prev, frequency: freq }))}
                                            className={`py-3 px-2 rounded-xl text-sm font-bold border-2 transition-all ${
                                                formData.frequency === freq 
                                                ? 'bg-star-blue text-white border-star-blue shadow-md' 
                                                : 'bg-white text-gray-600 border-gray-100 hover:border-blue-200'
                                            }`}
                                        >
                                            {freq}
                                        </button>
                                    ))}
                                </div>
                            </div>
                       </div>

                       {/* THE SPLIT PRICE DISPLAY */}
                       <div className="relative mt-4 space-y-4">
                           
                           {/* 1. INITIAL CLEAN CARD */}
                           <div className="relative bg-white border border-gray-200 rounded-xl p-5 shadow-sm flex items-center justify-between group hover:border-blue-200 transition-colors">
                                <div className="absolute -top-3 left-4 bg-gray-800 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-wider">
                                    1st Visit Only
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">
                                        {formData.serviceType.includes("Move") ? "Move In/Out Clean" : "Initial Deep Clean"}
                                    </h4>
                                    <p className="text-xs text-gray-500">
                                        {formData.serviceType.includes("Move") ? "Empty home specialist clean." : "Thorough top-to-bottom reset."}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-2xl font-black text-gray-800">${initialMin} - ${initialMax}</span>
                                </div>
                           </div>

                           {/* Connector Arrow (If Recurring) */}
                           {!isOneTime && (
                               <div className="flex justify-center -my-2 relative z-10">
                                   <div className="bg-gray-50 p-1.5 rounded-full border border-gray-100">
                                       <i className="fas fa-arrow-down text-gray-400 text-sm"></i>
                                   </div>
                               </div>
                           )}

                           {/* 2. RECURRING PRICE CARD (Only if not One-Time) */}
                           {!isOneTime && (
                                <div className="relative bg-gradient-to-r from-blue-50 to-white border-2 border-star-blue rounded-xl p-5 shadow-md flex items-center justify-between">
                                        <div className="absolute -top-3 right-4 bg-yellow-400 text-blue-900 text-[10px] font-black px-3 py-1 rounded shadow-sm animate-pulse-slow">
                                            BEST VALUE
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-star-blue text-base">Recurring {formData.frequency}</h4>
                                            <p className="text-xs text-gray-500">Standard maintenance clean.</p>
                                            <div className="text-[10px] text-green-600 font-bold mt-1">
                                                <i className="fas fa-check-circle mr-1"></i>
                                                You save ${recurringSavings} per visit
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-3xl font-black text-star-blue tracking-tight">${recurringMin} - ${recurringMax}</span>
                                        </div>
                                </div>
                           )}
                           
                           <div className="text-center mt-3">
                                <p className="text-xs text-gray-400 font-medium">
                                    *Final price confirmed upon walkthrough visit.
                                </p>
                           </div>

                       </div>
                  </div>
              )}

              {/* STEP 4: DECISION (Quote Locked, Ask to Schedule) */}
              {step === 4 && (
                  <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 py-6">
                      
                      <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center shadow-sm">
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 text-4xl mx-auto mb-6 animate-bounce">
                              <i className="fas fa-file-invoice-dollar"></i>
                          </div>
                          <h3 className="text-2xl font-black text-gray-900 mb-2">Estimate Generated!</h3>
                          <div className="text-base text-gray-600 space-y-1">
                             <p><strong>Initial Visit:</strong> ${initialMin} - ${initialMax}</p>
                             {!isOneTime && (
                                <p><strong>Then {formData.frequency}:</strong> ${recurringMin} - ${recurringMax}</p>
                             )}
                          </div>
                      </div>

                      <div className="text-center">
                          <h4 className="text-xl font-bold text-gray-800 mb-4">Let's finalize this price!</h4>
                          <p className="text-sm text-gray-500 mb-8 max-w-sm mx-auto">
                              Schedule a quick visit with our team to lock in your exact rate and confirm your cleaning day.
                          </p>
                          
                          <div className="flex flex-col gap-4">
                              <button 
                                type="button"
                                onClick={() => setStep(5)} // Go to Calendar
                                className="w-full bg-star-blue hover:bg-star-dark text-white font-black py-4 rounded-xl shadow-lg shadow-blue-200 transform hover:-translate-y-0.5 transition duration-200 flex justify-center items-center gap-3 text-lg"
                              >
                                  <span>Check Availability for Visit</span>
                                  <i className="fas fa-calendar-alt"></i>
                              </button>

                              <button 
                                type="button"
                                onClick={handleSkipScheduling} // Just finish
                                className="text-gray-400 hover:text-gray-600 font-bold text-sm py-2 underline decoration-gray-300"
                              >
                                  Just email me the estimate for now
                              </button>
                          </div>
                      </div>
                  </div>
              )}

              {/* STEP 5: CALENDAR & TIME (If they chose to schedule) */}
              {step === 5 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        {/* Header Banner */}
                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm">
                                    <i className="fas fa-user-clock text-lg"></i>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-blue-900 uppercase tracking-wide">Schedule Walkthrough</p>
                                    <p className="text-sm font-bold text-gray-600">To finalize your price</p>
                                </div>
                            </div>
                        </div>

                        {/* Date Selection */}
                        <div>
                            <h4 className="text-sm font-black text-gray-900 mb-4 flex items-center gap-2">
                                <span className="bg-gray-200 text-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">1</span>
                                Choose a Day
                            </h4>
                            <div className="grid grid-cols-3 gap-3">
                                {availableDates.map((date, idx) => {
                                    const dateStr = date.toDateString();
                                    const isSelected = selectedDate === dateStr;
                                    return (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => handleDateSelect(dateStr)}
                                            className={`p-3 rounded-xl border-2 text-center transition-all ${
                                                isSelected 
                                                ? 'bg-star-blue text-white border-star-blue shadow-md' 
                                                : 'bg-white border-gray-100 text-gray-600 hover:border-blue-200'
                                            }`}
                                        >
                                            <span className="block text-[10px] uppercase font-bold opacity-80">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                            <span className="block text-2xl font-black">{date.getDate()}</span>
                                            <span className="block text-[10px] font-bold">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Time Selection (Async Loaded) */}
                        {selectedDate && (
                            <div className="animate-in slide-in-from-bottom-2 fade-in">
                                <h4 className="text-sm font-black text-gray-900 mb-4 flex items-center gap-2">
                                    <span className="bg-gray-200 text-gray-700 w-6 h-6 rounded-full flex items-center justify-center text-xs">2</span>
                                    Visit Time Window
                                </h4>
                                
                                {isLoadingSlots ? (
                                    <div className="flex justify-center items-center py-10">
                                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-star-blue"></div>
                                        <span className="ml-3 text-sm font-bold text-gray-500">Checking availability...</span>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 gap-4">
                                        {availableTimeSlots.length > 0 ? availableTimeSlots.map((slot, idx) => {
                                            const isSelected = selectedTime === slot.time;
                                            return (
                                                <button
                                                    key={idx}
                                                    type="button"
                                                    onClick={() => setSelectedTime(slot.time)}
                                                    className={`relative p-4 rounded-xl border-2 text-left transition-all group ${
                                                        isSelected
                                                        ? 'bg-green-50 border-green-500 shadow-sm'
                                                        : 'bg-white border-gray-100 hover:border-gray-300'
                                                    }`}
                                                >
                                                    <div className="flex justify-between items-start mb-1">
                                                        <span className={`text-base font-black ${isSelected ? 'text-green-700' : 'text-gray-900'}`}>{slot.time}</span>
                                                        {isSelected && <i className="fas fa-check-circle text-green-500"></i>}
                                                    </div>
                                                    <span className="text-xs text-gray-500 font-medium block">{slot.label}</span>
                                                    
                                                    {slot.spots <= 2 && (
                                                        <div className="mt-2 inline-block bg-red-100 text-red-600 text-[9px] font-bold px-2 py-0.5 rounded border border-red-200">
                                                            Only {slot.spots} spot{slot.spots > 1 ? 's' : ''} left!
                                                        </div>
                                                    )}
                                                </button>
                                            );
                                        }) : (
                                            <div className="col-span-2 text-center py-4 text-sm text-gray-500">
                                                No slots available for this date. Please try another.
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                  </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-8 flex gap-4 pt-6 border-t border-gray-50">
                {step > 1 && step < 4 && (
                    <button 
                        type="button"
                        onClick={prevStep}
                        className="w-1/3 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
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

                {/* Step 4 Buttons are inline in the form body (Decision Step) */}

                {step === 5 && (
                    <>
                        <button 
                            type="button"
                            onClick={() => setStep(4)} // Back to Decision
                            className="w-1/3 py-3 rounded-xl font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
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
                                    <span>Confirm Visit</span>
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
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-300">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center relative transform scale-100 animate-in zoom-in-95 duration-200 border-4 border-white">
                <button 
                    onClick={() => setShowPopup(false)} 
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <i className="fas fa-times"></i>
                </button>
                
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner animate-in zoom-in spin-in-12 duration-500">
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
                        className="w-full bg-star-blue text-white font-bold py-3.5 rounded-xl transition-colors shadow-lg shadow-blue-200"
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

// --- HELPER COMPONENTS (RESTORED TO ORIGINAL STYLES) ---

const StepIndicator: React.FC<{ current: number, num: number, label: string }> = ({ current, num, label }) => {
    const isActive = (current === num) || (current === 5 && num === 4); 
    const isCompleted = current > num && !(current === 5 && num === 4);
    
    return (
        <div className={`flex items-center gap-3 transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${isActive || isCompleted ? 'bg-yellow-400 border-yellow-400 text-blue-900' : 'bg-transparent border-white/30 text-white'}`}>
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
      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
      {...props}
    />
  </div>
);

const Counter: React.FC<{ label: string, value: number, onMinus: () => void, onPlus: () => void }> = ({ label, value, onMinus, onPlus }) => (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 flex flex-col items-center justify-center">
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
        className={`flex-1 cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-3 transition-all duration-200 ${active ? 'border-star-blue bg-blue-50' : 'border-gray-200 bg-gray-50 hover:bg-gray-100'}`}
    >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-star-blue text-white' : 'bg-white text-gray-400'}`}>
            <i className={`fas ${icon} text-xl`}></i>
        </div>
        <span className={`text-sm font-bold ${active ? 'text-star-blue' : 'text-gray-500'}`}>{label}</span>
    </div>
);

export default BookingForm;