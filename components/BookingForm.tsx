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
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  // State for city lookup
  const [city, setCity] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    // Step 1
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    // Step 2
    bedrooms: 2,
    bathrooms: 2,
    hasDog: false,
    hasCat: false,
    // Step 3
    serviceType: 'Standard House Cleaning',
    frequency: 'Bi-Weekly'
  });

  // Simulated Time Slots
  const timeSlots = [
    { time: '08:00 AM', label: 'Morning Arrival', spots: 1 }, // High urgency
    { time: '10:00 AM', label: 'Late Morning', spots: 3 },
    { time: '01:00 PM', label: 'Afternoon Arrival', spots: 2 },
    { time: '03:00 PM', label: 'Late Afternoon', spots: 2 },
  ];

  // --- 1. CALENDAR GENERATOR (Tuesdays & Thursdays) ---
  useEffect(() => {
    const dates: Date[] = [];
    const today = new Date();
    let current = new Date(today);
    
    // Generate next 6 available slots (Tu/Th)
    // Start looking from tomorrow
    current.setDate(current.getDate() + 1);

    while (dates.length < 6) {
        const day = current.getDay();
        // 2 = Tuesday, 4 = Thursday
        if (day === 2 || day === 4) {
            dates.push(new Date(current));
        }
        current.setDate(current.getDate() + 1);
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
    if (formData.serviceType.includes("Deep")) multiplier = 1.4; // +40%
    if (formData.serviceType.includes("Move")) multiplier = 1.6; // +60%
    if (formData.serviceType.includes("Vacation")) multiplier = 1.2; // +20%
    
    // Calculate Gross Price (Before Discount)
    const grossPrice = price * multiplier;

    // Frequency Discounts
    let discount = 0;
    if (formData.frequency.includes("Weekly")) discount = 0.20; // 20% off
    if (formData.frequency.includes("Bi-Weekly")) discount = 0.15; // 15% off
    if (formData.frequency.includes("Monthly")) discount = 0.10; // 10% off
    
    const discountAmount = grossPrice * discount;
    const netPrice = grossPrice - discountAmount;

    // Rounding for cleaner numbers
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

  const handleDateSelect = (dateStr: string) => {
      setSelectedDate(dateStr);
      setSelectedTime(null); // Reset time when date changes
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

  // --- ACTION: LOCK PRICE (Step 3 -> 4) ---
  const handleLockPrice = async () => {
    setIsSubmitting(true);
    
    const payload = {
        ...formData,
        estimatedPrice: `$${finalPrice}`,
        savings: `$${savings}`,
        cityDetected: city || "Not Detected",
        stage: "Price Locked (Step 3)", // Mark as lead captured
        submittedAt: new Date().toISOString()
    };

    try {
        // Send Webhook NOW to capture lead
        await fetch("https://webhook.infra-remakingautomacoes.cloud/webhook/scsite", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });
        
        // Move to calendar
        setStep(4);
    } catch (error) {
        console.error("Error locking price", error);
        // Move to step 4 anyway so user experience isn't broken
        setStep(4); 
    } finally {
        setIsSubmitting(false);
    }
  };

  // --- ACTION: FINALIZE APPOINTMENT (Step 4 -> Success) ---
  const handleFinalBooking = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!selectedDate) {
        alert("Please select a date.");
        return;
    }
    if (!selectedTime) {
        alert("Please select an arrival time.");
        return;
    }

    setIsSubmitting(true);

    const payload = {
        ...formData,
        estimatedPrice: `$${finalPrice}`,
        savings: `$${savings}`,
        selectedDate: selectedDate,
        selectedTime: selectedTime,
        cityDetected: city || "Not Detected",
        stage: "Appointment Requested (Step 4)", // Final status
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
    <section id="quote" className="py-8 lg:py-20 bg-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-yellow-200 rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-[0%] left-[0%] w-[30%] h-[30%] bg-blue-200 rounded-full blur-[80px] opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row border border-gray-100 min-h-[500px]">
          
          {/* Left Side: Summary & Testimonial */}
          <div className="lg:w-4/12 bg-gradient-to-br from-star-dark to-star-blue p-5 lg:p-8 text-white relative flex flex-col lg:justify-between shrink-0 transition-all duration-500">
            {/* Overlay Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <div className="relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-block bg-yellow-400 text-blue-900 text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded mb-2 shadow-sm animate-pulse-slow">
                Fast & Easy
              </div>
              <h2 className="text-xl lg:text-3xl font-black mb-1 lg:mb-3 font-heading leading-tight">
                Your Quote
              </h2>
              <p className="text-blue-100 text-xs lg:text-sm leading-tight max-w-xs lg:max-w-none mb-4">
                Customize your clean in 4 simple steps.
              </p>

              {/* Step Indicators */}
              <div className="flex lg:flex-col gap-2 mt-2 w-full justify-center lg:justify-start">
                  <StepIndicator current={step} num={1} label="Contact Info" />
                  <StepIndicator current={step} num={2} label="Home Details" />
                  <StepIndicator current={step} num={3} label="Your Price" />
                  <StepIndicator current={step} num={4} label="Schedule" />
              </div>
            </div>

             {/* Reviewer */}
             <div className="mt-8 pt-4 border-t border-white/10 relative z-10 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white p-0.5">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-full h-full rounded-full object-cover" alt="Client" />
                </div>
                <div>
                  <div className="flex text-yellow-400 text-[9px] mb-0.5">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="text-[10px] text-blue-100 leading-tight">"They gave me my weekends back! Worth every penny."</p>
                  <p className="text-[9px] font-bold text-white mt-1">- Sarah, Mount Pleasant</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Multi-Step Form */}
          <div className="lg:w-8/12 p-5 lg:p-8 bg-white flex flex-col relative">
            
            {/* Compact Header */}
            <div className="mb-6 flex items-center justify-between border-b border-gray-100 pb-2">
                 <h3 className="text-lg font-black text-gray-900 font-heading flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-star-blue rounded-full"></span>
                    {step === 1 && "Let's get in touch"}
                    {step === 2 && "Tell us about your home"}
                    {step === 3 && "Customize your plan"}
                    {step === 4 && "Final Step: Schedule"}
                </h3>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    Step {step} of 4
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
                        <div className="col-span-2 bg-green-50 border border-green-100 rounded-xl p-2 flex items-center gap-2 animate-in fade-in">
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

              {/* STEP 3: PRICING (Lead Capture on Click) */}
              {step === 3 && (
                  <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                       
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Service Type Selector */}
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
                                    <option>Deep Cleaning</option>
                                    <option>Move In / Move Out</option>
                                    <option>Vacation Rental</option>
                                    </select>
                                    <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                                </div>
                            </div>

                            {/* Frequency Selector */}
                            <div className="flex flex-col group">
                                <label className="text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Frequency</label>
                                <div className="relative">
                                    <select 
                                    name="frequency"
                                    value={formData.frequency}
                                    onChange={handleChange}
                                    className="w-full px-3 py-3 bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white font-semibold appearance-none"
                                    >
                                    <option value="Bi-Weekly">Bi-Weekly (Most Popular)</option>
                                    <option value="Weekly">Weekly (Best Value)</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="One-Time">One-Time Only</option>
                                    </select>
                                    <i className="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                                </div>
                            </div>
                       </div>

                       {/* THE PRICE CARD */}
                       <div className="relative mt-2 bg-gradient-to-b from-white to-blue-50 border-2 border-blue-100 rounded-2xl p-5 shadow-lg overflow-hidden group hover:border-star-blue transition-colors duration-300">
                            {savings > 0 && (
                                <div className="absolute top-0 right-0 bg-yellow-400 text-blue-900 text-[10px] font-black px-3 py-1 rounded-bl-xl shadow-sm z-10">
                                    SAVE ${savings}
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                                <div className="text-center md:text-left">
                                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Your Estimated Total</p>
                                    
                                    <div className="flex items-end justify-center md:justify-start gap-2.5">
                                        {savings > 0 && (
                                            <span className="text-lg font-bold text-gray-400 line-through mb-1">${basePrice}</span>
                                        )}
                                        <span className="text-5xl font-black text-star-blue tracking-tighter leading-none">${finalPrice}</span>
                                    </div>
                                    
                                    {savings > 0 ? (
                                        <p className="text-xs font-bold text-green-600 mt-1 bg-green-50 inline-block px-2 py-0.5 rounded-md border border-green-100">
                                            <i className="fas fa-check-circle mr-1"></i>
                                            Frequency Discount Applied
                                        </p>
                                    ) : (
                                        <p className="text-[10px] text-gray-400 mt-1">Select a recurring plan to save up to 20%</p>
                                    )}
                                </div>

                                <div className="w-full md:w-auto bg-white/60 p-3 rounded-xl border border-blue-50/50 backdrop-blur-sm">
                                    <ul className="space-y-2">
                                        <li className="flex items-center gap-2 text-xs font-bold text-gray-600">
                                            <i className="fas fa-check text-green-500"></i> All Supplies Included
                                        </li>
                                        <li className="flex items-center gap-2 text-xs font-bold text-gray-600">
                                            <i className="fas fa-shield-alt text-green-500"></i> Vetted & Insured
                                        </li>
                                        <li className="flex items-center gap-2 text-xs font-bold text-gray-600">
                                            <i className="fas fa-undo text-green-500"></i> Satisfaction Guarantee
                                        </li>
                                    </ul>
                                </div>
                            </div>
                       </div>
                  </div>
              )}

              {/* STEP 4: CALENDAR & TIME */}
              {step === 4 && (
                  <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-300">
                        {/* Header Banner */}
                        <div className="bg-blue-50 border border-blue-100 p-3 rounded-xl flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-green-500 shadow-sm">
                                    <i className="fas fa-lock text-sm"></i>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-blue-900 uppercase tracking-wide">Price Locked</p>
                                    <p className="text-lg font-black text-star-blue leading-none">${finalPrice}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-gray-500">Est. Duration</p>
                                <p className="text-xs font-bold text-gray-800">2 - 3 Hours</p>
                            </div>
                        </div>

                        {/* Date Selection */}
                        <div>
                            <h4 className="text-sm font-black text-gray-900 mb-3 flex items-center gap-2">
                                <span className="bg-gray-200 text-gray-700 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">1</span>
                                Choose a Date
                            </h4>
                            <div className="grid grid-cols-3 gap-2">
                                {availableDates.map((date, idx) => {
                                    const dateStr = date.toDateString();
                                    const isSelected = selectedDate === dateStr;
                                    return (
                                        <button
                                            key={idx}
                                            type="button"
                                            onClick={() => handleDateSelect(dateStr)}
                                            className={`p-2 rounded-xl border-2 text-center transition-all ${
                                                isSelected 
                                                ? 'bg-star-blue text-white border-star-blue shadow-md' 
                                                : 'bg-white border-gray-100 text-gray-600 hover:border-blue-200'
                                            }`}
                                        >
                                            <span className="block text-[9px] uppercase font-bold opacity-80">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                                            <span className="block text-xl font-black">{date.getDate()}</span>
                                            <span className="block text-[9px] font-bold">{date.toLocaleDateString('en-US', { month: 'short' })}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Time Selection (Only shows if Date is selected) */}
                        {selectedDate && (
                            <div className="animate-in slide-in-from-bottom-2 fade-in">
                                <h4 className="text-sm font-black text-gray-900 mb-3 flex items-center gap-2">
                                    <span className="bg-gray-200 text-gray-700 w-5 h-5 rounded-full flex items-center justify-center text-[10px]">2</span>
                                    Arrival Window
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {timeSlots.map((slot, idx) => {
                                        const isSelected = selectedTime === slot.time;
                                        return (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => setSelectedTime(slot.time)}
                                                className={`relative p-3 rounded-xl border-2 text-left transition-all group ${
                                                    isSelected
                                                    ? 'bg-green-50 border-green-500 shadow-sm'
                                                    : 'bg-white border-gray-100 hover:border-gray-300'
                                                }`}
                                            >
                                                <div className="flex justify-between items-start mb-1">
                                                    <span className={`text-sm font-black ${isSelected ? 'text-green-700' : 'text-gray-900'}`}>{slot.time}</span>
                                                    {isSelected && <i className="fas fa-check-circle text-green-500"></i>}
                                                </div>
                                                <span className="text-[10px] text-gray-500 font-medium block">{slot.label}</span>
                                                
                                                {/* Scarcity Trigger */}
                                                {slot.spots <= 2 && (
                                                    <div className="mt-2 inline-block bg-red-100 text-red-600 text-[9px] font-bold px-1.5 py-0.5 rounded border border-red-200">
                                                        Only {slot.spots} spot{slot.spots > 1 ? 's' : ''} left!
                                                    </div>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                  </div>
              )}

              {/* Navigation Buttons */}
              <div className="mt-6 flex gap-3 pt-4 border-t border-gray-50">
                {step > 1 && (
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
                        className="w-full py-3 rounded-xl font-black text-white bg-star-blue hover:bg-star-dark shadow-md transition-all flex items-center justify-center gap-2 text-lg active:scale-95 group"
                    >
                        <span>Next Step</span>
                        <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                    </button>
                )}
                
                {/* STEP 3 BUTTON: Lock Price & Send Lead */}
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
                                <span>Book This Price</span>
                                <i className="fas fa-calendar-check group-hover:scale-110 transition-transform"></i>
                            </>
                        )}
                        <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1s_infinite]"></div>
                    </button>
                )}

                {/* STEP 4 BUTTON: Final Confirm */}
                {step === 4 && (
                     <button 
                        type="button"
                        onClick={handleFinalBooking}
                        disabled={isSubmitting || !selectedDate || !selectedTime} // Disable if time not picked
                        className="w-full py-4 rounded-xl font-black text-white bg-green-500 hover:bg-green-600 shadow-xl shadow-green-200/50 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-lg relative overflow-hidden active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                         {isSubmitting ? (
                            <i className="fas fa-spinner fa-spin"></i>
                        ) : (
                            <>
                                <span>Confirm Booking</span>
                                <i className="fas fa-check-circle group-hover:scale-110 transition-transform"></i>
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
                
                <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 shadow-inner animate-in zoom-in spin-in-12 duration-500">
                    <i className="fas fa-check-circle"></i>
                </div>
                
                <h3 className="text-2xl font-black text-gray-900 mb-2 font-heading">You're All Set!</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    Booking Request for:<br/>
                    <strong>{selectedDate ? new Date(selectedDate).toLocaleDateString() : 'Date'} @ {selectedTime}</strong>
                    <br/><br/>
                    A confirmation text has been sent to <span className="font-bold">{formData.phone}</span>.
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