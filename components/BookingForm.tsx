import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';

interface BookingFormProps {
  initialData?: any;
  variant?: 'default' | 'full' | 'glass';
  hideSidebar?: boolean;
}

// STANDARD OPERATING HOURS
const DAILY_SLOTS = [
    { time: '08:30 AM', label: 'Morning Arrival' },
    { time: '11:30 AM', label: 'Mid-Day Arrival' },
    { time: '02:30 PM', label: 'Afternoon Arrival' }
];

const ServiceOption = ({ selected, onClick, icon, title, subtitle, badge, badgeColor }: any) => (
    <div 
        onClick={onClick}
        className={`relative p-3.5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex items-center gap-4 touch-manipulation ${
            selected 
            ? 'border-[#00b4db] bg-blue-50/30 shadow-sm' 
            : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
        }`}
    >
        {badge && (
            <div className={`absolute -top-2.5 right-4 px-2 py-0.5 rounded text-[9px] font-black text-white uppercase tracking-wider shadow-sm ${badgeColor}`}>
                {badge}
            </div>
        )}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 transition-colors ${
            selected ? 'bg-[#00b4db] text-white shadow-md' : 'bg-gray-100 text-gray-400'
        }`}>
            <i className={`fas ${icon}`}></i>
        </div>
        <div className="flex-grow">
            <h4 className={`font-black text-base ${selected ? 'text-[#00b4db]' : 'text-gray-800'}`}>{title}</h4>
            <p className="text-xs text-gray-500 font-medium">{subtitle}</p>
        </div>
        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${
            selected ? 'border-[#00b4db] bg-[#00b4db] text-white' : 'border-gray-200'
        }`}>
            {selected && <i className="fas fa-check text-xs"></i>}
        </div>
    </div>
);

const BookingForm: React.FC<BookingFormProps> = ({ initialData, variant = 'default', hideSidebar = false }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showLockPopup, setShowLockPopup] = useState(false);
  const [hasBookedTime, setHasBookedTime] = useState(false);
  
  const isFull = variant === 'full';
  const isGlass = variant === 'glass';
  
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
  const [demandCount, setDemandCount] = useState(0);

  // Refs for scrolling
  const formTopRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    bedrooms: 3, 
    bathrooms: 2, 
    sqft: 1500,
    hasDog: false,
    hasCat: false,
    serviceType: 'Standard House Cleaning',
    frequency: 'Weekly' // Default changed to Weekly as requested
  });

  const [serviceTab, setServiceTab] = useState<'Recurring' | 'One-Time'>('Recurring');

  useEffect(() => {
      if (formData.frequency === 'One-Time') {
          setServiceTab('One-Time');
      } else {
          setServiceTab('Recurring');
      }
  }, [formData.frequency]);

  // --- SCROLL TO TOP ON STEP CHANGE ---
  useEffect(() => {
    // Only scroll if we are not on step 1 to avoid jumping on initial load
    if (step > 1 && formTopRef.current) {
        // Reduced timeout for snappier feel
        setTimeout(() => {
             formTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 50);
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

    // Generate next available slots (Tuesdays and Thursdays only)
    while (dates.length < 10) {
        const day = current.getDay();
        // 2 = Tuesday, 4 = Thursday
        if (day === 2 || day === 4) { 
            dates.push(new Date(current));
        }
        current.setDate(current.getDate() + 1);
    }
    setAvailableDates(dates);
    
    // REMOVED FAKE BOOKED SLOTS - NOW USING SUPABASE ONLY

  }, []);

  // --- PRICING ENGINE ---
  useEffect(() => {
    let standardBase = 165.50; 
    const bedDiff = formData.bedrooms - 3;
    standardBase += (bedDiff * 28.50); 
    const bathDiff = formData.bathrooms - 2;
    standardBase += (bathDiff * 22.75); 

    let sqftMultiplier = 0;
    if (formData.sqft < 1000) sqftMultiplier = -15;
    else if (formData.sqft < 1500) sqftMultiplier = 0;
    else if (formData.sqft < 2000) sqftMultiplier = 20;
    else if (formData.sqft < 2500) sqftMultiplier = 40;
    else if (formData.sqft < 3000) sqftMultiplier = 60;
    else if (formData.sqft < 3500) sqftMultiplier = 80;
    else if (formData.sqft < 4000) sqftMultiplier = 100;
    else sqftMultiplier = 130;
    standardBase += sqftMultiplier;

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

  // --- VERIFICAÇÃO DE DISPONIBILIDADE EM TEMPO REAL (SUPABASE) ---
  const fetchBookedSlotsFromBackend = async () => {
      console.log("Iniciando busca de horários agendados via Supabase...");
      try {
          const { data, error } = await supabase
              .from('bookings')
              .select('slot_id');

          if (error) {
              console.error("Erro ao buscar do Supabase:", error);
              return;
          }

          if (data) {
              // Extrai apenas os IDs dos slots (ex: ["Fri Feb 27 2026_08:30 AM"])
              const bookedIds = data.map(item => item.slot_id);
              console.log("Horários ocupados recebidos:", bookedIds);
              setBookedSlots(prev => [...prev, ...bookedIds]);
          }
      } catch (error) {
          console.error("Falha inesperada ao buscar horários", error);
      }
  };

  useEffect(() => {
      fetchBookedSlotsFromBackend();
  }, []);

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
            // Local dictionary for Charleston area for instant, reliable lookup
            const LOCAL_ZIPS: Record<string, string> = {
                '29401': 'Charleston', '29403': 'Charleston', '29405': 'North Charleston',
                '29406': 'North Charleston', '29407': 'West Ashley', '29409': 'Charleston',
                '29412': 'James Island', '29414': 'West Ashley', '29418': 'North Charleston',
                '29420': 'North Charleston', '29424': 'Charleston', '29425': 'Charleston',
                '29492': 'Daniel Island', '29464': 'Mount Pleasant', '29466': 'Mount Pleasant',
                '29483': 'Summerville', '29484': 'Summerville', '29485': 'Summerville',
                '29486': 'Summerville', '29445': 'Goose Creek', '29410': 'Hanahan',
                '29455': 'Johns Island', '29451': 'Isle of Palms', '29482': "Sullivan's Island",
                '29439': 'Folly Beach', '29456': 'Ladson', '29461': 'Moncks Corner',
                '29429': 'Awendaw', '29449': 'Hollywood', '29470': 'Ravenel'
            };

            const setCitySuccess = (cityName: string) => {
                setCity(cityName);
                setDemandCount(Math.floor(Math.random() * (42 - 18 + 1)) + 18);
            };

            if (LOCAL_ZIPS[cleanZip]) {
                setCitySuccess(LOCAL_ZIPS[cleanZip]);
            } else {
                try {
                    const response = await fetch(`https://api.zippopotam.us/us/${cleanZip}`);
                    if (response.ok) {
                        const data = await response.json();
                        setCitySuccess(data.places[0]['place name']);
                    } else if (cleanZip.startsWith('294')) {
                        // Fallback for any unknown 294xx zip code
                        setCitySuccess('the Lowcountry');
                    } else {
                        setCity(null);
                    }
                } catch (error) { 
                    if (cleanZip.startsWith('294')) {
                        setCitySuccess('the Lowcountry');
                    } else {
                        setCity(null); 
                    }
                }
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
        [field]: Math.max(1, prev[field] + delta)
    }));
  };

  const togglePet = (pet: 'hasDog' | 'hasCat') => {
      setFormData(prev => ({ ...prev, [pet]: !prev[pet] }));
  };

  const nextStep = (e?: React.MouseEvent) => {
      // IMPORTANT: Prevent form submission or bubbling
      if (e) {
          e.preventDefault();
          e.stopPropagation();
      }

      if (step === 1) {
          if (!formData.fullName || !formData.email || !formData.phone || !formData.zipCode) {
              alert("Please fill in all fields so we can save your quote.");
              return;
          }
      }
      
      // Removed the document.activeElement.blur() here because it causes the screen to "jump" 
      // on mobile before the click registers, forcing a second click.

      setStep(prev => prev + 1);
  };

  const prevStep = (e?: React.MouseEvent) => {
      if(e) e.preventDefault();
      setStep(prev => prev - 1);
  };

  const handleLockPrice = async (e?: React.MouseEvent) => {
    if(e) e.preventDefault();
    
    setIsSubmitting(true);
    
    // Track Lead Event on Facebook Pixel
    if (window.fbq) {
        window.fbq('track', 'Lead', {
            content_name: 'Quote Generated',
            value: recurringMin, // Using the minimum recurring price as value
            currency: 'USD'
        });
    }

    // Fires SC SITE Webhook (Step 3 -> 4)
    await submitWebhook("Quote Range Generated");
    setIsSubmitting(false);
    
    setShowLockPopup(true);
    setTimeout(() => {
        setShowLockPopup(false);
        setStep(4); 
    }, 1500);
  };

  const resetForm = () => {
      setStep(1);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        zipCode: '',
        bedrooms: 3, 
        bathrooms: 2, 
        sqft: 1500,
        hasDog: false,
        hasCat: false,
        serviceType: 'Standard House Cleaning',
        frequency: 'Bi-Weekly'
      });
      setSelectedDate(null);
      setSelectedTime(null);
      setCity(null);
      setShowPopup(false);
      setHasBookedTime(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    
    const slotKey = `${selectedDate}_${selectedTime}`;

    // 1. Save to Supabase (Source of Truth)
    try {
        const { error } = await supabase
            .from('bookings')
            .insert([
                { 
                    slot_id: slotKey,
                    customer_name: formData.fullName,
                    customer_email: formData.email,
                    customer_phone: formData.phone
                }
            ]);

        if (error) {
            console.error("Supabase insert error:", error);
        } else {
            console.log("Supabase insert success");
        }
    } catch (err) {
        console.error("Unexpected Supabase error:", err);
    }

    // 2. Fires AGENDA Webhook (Step 5 confirmed) - Keep for notifications
    await submitWebhook("Walkthrough Scheduled", { visitDate: selectedDate, visitTime: selectedTime });
    
    // 3. "Reserve" the slot in our local state (Optimistic Update)
    setBookedSlots(prev => [...prev, slotKey]);

    setIsSubmitting(false);
    setHasBookedTime(true);
    setShowPopup(true);
  };

  const isOneTime = formData.frequency === 'One-Time' || (formData.serviceType && formData.serviceType.includes('Move'));
  
  const handleFrequencySelect = (freq: string) => {
      setFormData(prev => ({ ...prev, frequency: freq }));
      // Scroll down slightly to make the next button visible
      setTimeout(() => {
          const summaryBox = document.getElementById('quote-summary-box');
          if (summaryBox) {
              summaryBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
      }, 100);
  };

  return (
    <div id="quote" className={`relative w-full ${isFull ? 'min-h-screen' : ''}`}>
      <div className={`${isFull ? 'w-full' : isGlass ? 'container mx-auto px-0 sm:px-2 relative z-10' : 'container mx-auto px-4 relative z-10'}`}>
        <div ref={formTopRef} className={`${
            isFull 
            ? 'w-full min-h-screen bg-white flex flex-col' 
            : isGlass
            ? 'w-full max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-xl sm:rounded-3xl shadow-2xl overflow-hidden border border-white/50 scroll-mt-20'
            : 'w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/10 scroll-mt-20'
        }`}>
          
          {/* CLASSIC BLUE HEADER */}
          <div className={`bg-gradient-to-br from-blue-900 to-blue-800 ${isGlass ? 'p-4 sm:p-6' : 'p-6'} text-white relative overflow-hidden`}>
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/20 rounded-full blur-xl translate-y-1/2 -translate-x-1/4"></div>

              <div className="relative z-10">
                  <div className={`flex justify-between items-start ${isGlass ? 'mb-3 sm:mb-4' : 'mb-4'}`}>
                      {/* Veteran Badge */}
                      <div className="px-2 py-1 rounded border border-white/30 flex items-center gap-1.5">
                          <i className="fas fa-flag-usa text-red-400 text-[10px] opacity-90"></i>
                          <span className="text-[9px] font-bold uppercase tracking-wider text-white">Veteran Owned</span>
                      </div>
                      
                      {/* Step Indicator */}
                      <div className="bg-blue-950/40 px-2 py-1 rounded text-[9px] font-bold uppercase tracking-widest text-white">
                          Step {step}/4
                      </div>
                  </div>

                  <h2 className={`${isGlass ? 'text-xl sm:text-2xl' : 'text-2xl'} font-black mb-1 font-heading tracking-tight`}>Your Custom Quote</h2>
                  <p className={`text-blue-200 text-xs font-medium opacity-90 ${isGlass ? 'mb-3 sm:mb-4' : 'mb-4'}`}>Proudly serving Charleston for 18 years.</p>

                  {/* Progress Bar */}
                  <div className="h-1.5 w-full bg-blue-950/50 rounded-full overflow-hidden">
                      <motion.div 
                          className="h-full bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.5)]"
                          initial={{ width: 0 }}
                          animate={{ width: `${(step / 4) * 100}%` }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                      />
                  </div>
              </div>
          </div>

          {/* Form Body */}
          <div className="bg-white p-5 md:p-6 relative">
            
            {/* Section Title */}
            <div className="mb-6 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <h3 className="text-lg font-black text-gray-900">
                    {step === 1 && "Let's get in touch"}
                    {step === 2 && "Tell us about your home"}
                    {step === 3 && "Choose your service"}
                    {step === 4 && "Your estimated price"}
                    {step === 5 && "Schedule your walkthrough"}
                </h3>
            </div>

            <form className="flex-grow flex flex-col justify-between h-full relative" onSubmit={(e) => e.preventDefault()}>
              
              {/* SUCCESS OVERLAY POPUP */}
              <AnimatePresence>
                  {showLockPopup && (
                      <motion.div 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl"
                      >
                          <motion.div 
                              initial={{ scale: 0.5, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ type: "spring", stiffness: 300, damping: 20 }}
                              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl shadow-xl shadow-green-500/30 mb-4"
                          >
                              <i className="fas fa-check"></i>
                          </motion.div>
                          <motion.h3 
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="text-2xl font-black text-gray-900"
                          >
                              Quote Locked!
                          </motion.h3>
                          <motion.p 
                              initial={{ y: 10, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.2 }}
                              className="text-gray-500 font-medium mt-2"
                          >
                              Preparing your next steps...
                          </motion.p>
                      </motion.div>
                  )}
              </AnimatePresence>

              {/* FLUID ANIMATION CONTAINER */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={step} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex-grow"
                >
              
                  {/* STEP 1: CONTACT */}
                  {step === 1 && (
                      <div className="space-y-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <InputGroup label="Full Name" name="fullName" icon="fa-user" placeholder="e.g., John Doe" value={formData.fullName} onChange={handleChange} />
                            <InputGroup label="Email Address" name="email" type="email" icon="fa-envelope" placeholder="john@example.com" value={formData.email} onChange={handleChange} />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <InputGroup label="Phone Number" name="phone" type="tel" icon="fa-phone" placeholder="(555) 123-4567" value={formData.phone} onChange={handleChange} />
                            <InputGroup label="Zip Code" name="zipCode" type="text" icon="fa-map-marker-alt" placeholder="29401" value={formData.zipCode} onChange={handleChange} maxLength={5} />
                        </div>
                        <div className="flex justify-center gap-6 mt-2 pt-2 text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                            <div className="flex items-center gap-1.5"><i className="fas fa-lock"></i> SSL Encrypted</div>
                            <div className="flex items-center gap-1.5"><i className="fas fa-shield-alt"></i> No Spam Promise</div>
                        </div>
                        {city && (
                            <div className="mt-2 bg-gray-50 border border-gray-100 rounded-xl p-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 animate-slide-in-bottom">
                                <div className="flex items-center gap-2">
                                    <i className="fas fa-check-circle text-green-500 ml-1"></i>
                                    <p className="text-gray-700 text-xs font-bold">Available in <span className="text-star-blue">{city}</span></p>
                                </div>
                                <div className="flex items-center gap-1.5 text-gray-500 text-[10px] font-medium">
                                    <span className="relative flex h-2 w-2">
                                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                    </span>
                                    {demandCount} neighbors booked this week
                                </div>
                            </div>
                        )}
                      </div>
                  )}

                  {/* STEP 2: DETAILS */}
                  {step === 2 && (
                       <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    {/* Counters */}
                                    <div className="grid grid-cols-2 gap-3">
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

                                    {/* SqFt Slider */}
                                    <div className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                                        <div className="flex justify-between items-end mb-2">
                                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Approx. Size</label>
                                            <span className="text-sm font-black text-star-blue bg-blue-50 px-2 py-0.5 rounded-md">{formData.sqft.toLocaleString()} sq ft</span>
                                        </div>
                                        <div className="relative px-1">
                                            <input 
                                                type="range" 
                                                min="500" 
                                                max="5000" 
                                                step="100" 
                                                value={formData.sqft}
                                                onChange={(e) => setFormData(prev => ({ ...prev, sqft: parseInt(e.target.value) }))}
                                                className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-star-blue"
                                            />
                                            <div className="flex justify-between text-[8px] font-bold text-gray-400 mt-1.5 uppercase tracking-wider">
                                                <span>Small Apt</span>
                                                <span>Large Home</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {/* Pets */}
                                    <div>
                                        <label className="text-[10px] font-bold text-gray-500 uppercase mb-1.5 block ml-1 tracking-wider">Pets in Home</label>
                                        <div className="flex flex-col sm:flex-row gap-1.5">
                                            <button
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, hasDog: !prev.hasDog }))}
                                                className={`flex-1 py-2.5 rounded-lg border-2 text-xs font-bold transition-all flex items-center justify-center gap-1.5 touch-manipulation ${formData.hasDog ? 'border-star-blue bg-blue-50 text-star-blue shadow-sm' : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'}`}
                                            >
                                                <i className="fas fa-dog"></i> Dogs
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, hasCat: !prev.hasCat }))}
                                                className={`flex-1 py-2.5 rounded-lg border-2 text-xs font-bold transition-all flex items-center justify-center gap-1.5 touch-manipulation ${formData.hasCat ? 'border-star-blue bg-blue-50 text-star-blue shadow-sm' : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'}`}
                                            >
                                                <i className="fas fa-cat"></i> Cats
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => setFormData(prev => ({ ...prev, hasDog: false, hasCat: false }))}
                                                className={`flex-1 py-2.5 rounded-lg border-2 text-xs font-bold transition-all flex items-center justify-center gap-1.5 touch-manipulation ${!formData.hasDog && !formData.hasCat ? 'border-gray-800 bg-gray-800 text-white shadow-sm' : 'border-gray-100 bg-white text-gray-500 hover:border-gray-200'}`}
                                            >
                                                None
                                            </button>
                                        </div>
                                    </div>

                                    {formData.serviceType.includes("Move") && (
                                        <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-xl flex items-center gap-3 animate-pulse-slow">
                                            <i className="fas fa-box-open text-yellow-600 text-lg"></i>
                                            <p className="text-xs text-yellow-800 font-bold">Configured for Move In / Move Out Service</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                       </div>
                  )}

                  {/* STEP 3: FREQUENCY & SERVICE */}
                  {step === 3 && (
                      <div className="space-y-4 animate-fade-in">
                          {/* Frequency Selector */}
                          <div>
                              <div className="flex justify-between items-end mb-2">
                                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Select Frequency</label>
                                  <span className="text-[9px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded uppercase tracking-wider border border-green-100">Most Popular: Bi-Weekly</span>
                              </div>
                              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                  {['Weekly', 'Bi-Weekly', 'Monthly', 'One-Time'].map((freq) => (
                                      <button
                                          key={freq}
                                          type="button"
                                          onClick={() => handleFrequencySelect(freq)}
                                          className={`relative py-3 px-1 rounded-xl text-xs font-bold transition-all border-2 touch-manipulation flex flex-col items-center justify-center gap-1 ${
                                              formData.frequency === freq 
                                              ? 'bg-blue-50 border-blue-500 text-blue-900 shadow-sm' 
                                              : 'bg-white border-gray-100 text-gray-500 hover:border-gray-300 hover:bg-gray-50'
                                          }`}
                                      >
                                          {formData.frequency === freq && (
                                              <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-[10px] shadow-sm animate-zoom-in">
                                                  <i className="fas fa-check"></i>
                                              </div>
                                          )}
                                          <span>{freq}</span>
                                          {freq === 'One-Time' && <span className={`text-[8px] font-medium leading-none ${formData.frequency === freq ? 'text-blue-700' : 'text-gray-400'}`}>Move In/Out</span>}
                                          {freq !== 'One-Time' && <span className={`text-[8px] font-medium leading-none ${formData.frequency === freq ? 'text-blue-700' : 'text-gray-400'}`}>Save up to 20%</span>}
                                      </button>
                                  ))}
                              </div>
                          </div>

                          {/* Pricing Presentation */}
                          <div id="quote-summary-box" className="bg-white rounded-2xl border-2 border-blue-100 shadow-sm overflow-hidden">
                              <div className="bg-gradient-to-r from-blue-50 to-white px-4 py-3 border-b border-blue-100 flex justify-between items-center">
                                  <h4 className="font-black text-sm text-blue-900">Your Custom Estimate</h4>
                                  <div className="flex gap-1 text-yellow-400 text-xs">
                                      <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                                  </div>
                              </div>
                              
                              <div className="p-4 space-y-4">
                                  {/* First Visit / One Time */}
                                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                                      <div>
                                          <div className="flex items-center gap-2">
                                              <h5 className="font-bold text-gray-900 text-sm">
                                                  {isOneTime ? 'Deep Clean Reset' : 'Initial Deep Clean'}
                                              </h5>
                                              {!isOneTime && <span className="bg-blue-100 text-blue-800 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0">Required</span>}
                                          </div>
                                          <p className="text-[10px] text-gray-500 mt-0.5">Thorough top-to-bottom detail.</p>
                                      </div>
                                      <div className="text-left sm:text-right mt-1 sm:mt-0">
                                          <div className="text-lg sm:text-xl font-black text-gray-900 whitespace-nowrap">${initialMin} - ${initialMax}</div>
                                      </div>
                                  </div>

                                  {/* Ongoing Visits (If Recurring) */}
                                  {!isOneTime && (
                                      <>
                                          <div className="h-px w-full bg-gray-100"></div>
                                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4">
                                              <div>
                                                  <div className="flex items-center gap-2">
                                                      <h5 className="font-bold text-blue-900 text-sm">Ongoing {formData.frequency}</h5>
                                                      <span className="bg-green-100 text-green-800 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase shrink-0">Discounted</span>
                                                  </div>
                                                  <p className="text-[10px] text-gray-500 mt-0.5">Keep your home fresh & clean.</p>
                                              </div>
                                              <div className="text-left sm:text-right mt-1 sm:mt-0">
                                                  <div className="text-lg sm:text-xl font-black text-blue-900 whitespace-nowrap">${recurringMin} - ${recurringMax}</div>
                                                  <div className="text-[9px] font-bold text-green-600">Save ${recurringSavings}/visit</div>
                                              </div>
                                          </div>
                                      </>
                                  )}
                              </div>
                              
                              <div className="bg-gray-50 px-4 py-2.5 border-t border-gray-100 flex justify-between items-center text-[10px] font-bold text-gray-500">
                                  <span className="flex items-center gap-1.5"><i className="fas fa-shield-alt text-green-500"></i> 100% Guaranteed</span>
                                  <span className="flex items-center gap-1.5"><i className="fas fa-calendar-check text-blue-500"></i> No Contracts</span>
                              </div>
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
                                    className="w-full bg-gradient-to-r from-[#00b4db] to-[#0083b0] text-white font-black py-4 rounded-xl shadow-lg shadow-blue-200 transform hover:-translate-y-0.5 active:scale-95 transition-all duration-200 flex justify-center items-center gap-3 text-lg group touch-manipulation"
                                  >
                                      <span>See Availability</span>
                                      <i className="fas fa-calendar-alt group-hover:rotate-12 transition-transform"></i>
                                  </button>

                                  <button 
                                    type="button"
                                    onClick={handleSkipScheduling}
                                    className="text-gray-400 hover:text-gray-600 font-bold text-xs py-2 underline decoration-gray-300 hover:decoration-gray-500 transition-all touch-manipulation"
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
                                                } touch-manipulation`}
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
                                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
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
                                                        } touch-manipulation`}
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
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="mt-3 flex items-center gap-3">
                {step > 1 && step < 4 && (
                    <button 
                        type="button"
                        onClick={prevStep}
                        className="w-12 h-12 rounded-xl font-bold text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all text-sm active:scale-95 touch-manipulation flex items-center justify-center shrink-0"
                        aria-label="Go Back"
                    >
                        <i className="fas fa-arrow-left"></i>
                    </button>
                )}
                
                {step < 3 && (
                     <button 
                        type="button"
                        onClick={nextStep}
                        className="flex-grow py-3.5 rounded-xl font-black text-white bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg shadow-blue-900/20 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-base active:scale-95 group touch-manipulation"
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
                        className="flex-grow py-3.5 rounded-xl font-black text-white bg-gradient-to-r from-blue-900 to-blue-800 shadow-lg shadow-blue-900/20 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 text-base active:scale-95 group disabled:opacity-70 disabled:cursor-not-allowed touch-manipulation animate-pulse-slow relative overflow-hidden"
                    >
                        {/* Shine effect */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        
                        {isSubmitting ? (
                            <i className="fas fa-spinner fa-spin relative z-10"></i>
                        ) : (
                            <div className="relative z-10 flex items-center gap-2">
                                <span>Lock In This Quote</span>
                                <i className="fas fa-lock group-hover:scale-110 transition-transform"></i>
                            </div>
                        )}
                    </button>
                )}

                {step === 5 && (
                    <div className="flex gap-3 w-full">
                        <button 
                            type="button"
                            onClick={() => setStep(4)}
                            className="w-12 h-12 rounded-xl font-bold text-gray-400 hover:text-gray-600 bg-gray-50 hover:bg-gray-100 transition-all text-sm active:scale-95 touch-manipulation flex items-center justify-center shrink-0"
                        >
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <button 
                            type="button"
                            onClick={handleFinalBooking}
                            disabled={isSubmitting || !selectedDate || !selectedTime}
                            className="flex-grow py-3.5 rounded-xl font-black text-white bg-green-500 hover:bg-green-600 shadow-xl shadow-green-200/50 transform lg:hover:-translate-y-1 transition-all flex items-center justify-center gap-2 text-base relative overflow-hidden active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed group touch-manipulation"
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
                    </div>
                )}

              </div>
            </form>
          </div>
        </div>

        {/* Trust Badges Below Form */}
        {!isFull && (
            <div className="flex justify-center gap-4 mt-6">
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                    <i className="fas fa-check-circle text-green-400 text-xs"></i>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">Guaranteed</span>
                </div>
                <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                    <i className="fas fa-star text-yellow-400 text-xs"></i>
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider">4.9/5 Rated</span>
                </div>
            </div>
        )}
      </div>
      
      {/* SUCCESS POPUP OVERLAY */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full text-center relative border-4 border-white"
              >
                  <button 
                      onClick={resetForm} 
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
                        onClick={resetForm}
                        className="w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-95 hover:-translate-y-0.5"
                    >
                        Awesome, Thanks!
                    </button>
                </div>
              </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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

const InputGroup: React.FC<any> = ({ label, type = "text", icon, ...props }) => (
  <div className="flex flex-col group w-full mb-3">
    <label className="text-[10px] font-bold text-gray-500 uppercase mb-1.5 ml-1 tracking-wider group-focus-within:text-[#00b4db] transition-colors">{label}</label>
    <div className="relative">
        {icon && (
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <i className={`fas ${icon}`}></i>
            </div>
        )}
        <input 
          type={type}
          className={`w-full ${icon ? 'pl-11' : 'pl-4'} pr-4 py-3.5 bg-gray-50 border-transparent text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-[#00b4db]/20 focus:border-[#00b4db] block shadow-sm transition-all focus:bg-white placeholder-gray-300 font-semibold touch-manipulation`}
          {...props}
        />
    </div>
  </div>
);

const Counter: React.FC<{ label: string, value: number, onMinus: () => void, onPlus: () => void }> = ({ label, value, onMinus, onPlus }) => (
    <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 flex flex-col items-center justify-center hover:border-blue-200 transition-colors">
        <label className="text-[10px] font-bold text-gray-500 uppercase mb-2">{label}</label>
        <div className="flex items-center gap-4">
            <button type="button" onClick={onMinus} className="w-8 h-8 rounded-full bg-white border border-gray-300 text-gray-600 flex items-center justify-center hover:bg-gray-100 active:scale-90 transition-transform touch-manipulation">
                <i className="fas fa-minus text-[10px]"></i>
            </button>
            <span className="text-xl font-black text-gray-900 w-6 text-center">{value}</span>
            <button type="button" onClick={onPlus} className="w-8 h-8 rounded-full bg-white border border-star-blue text-star-blue flex items-center justify-center hover:bg-blue-50 active:scale-90 transition-transform shadow-sm touch-manipulation">
                <i className="fas fa-plus text-[10px]"></i>
            </button>
        </div>
    </div>
);

const PetToggle: React.FC<{ label: string, icon: string, active: boolean, onClick: () => void }> = ({ label, icon, active, onClick }) => (
    <div 
        onClick={onClick}
        className={`flex-1 cursor-pointer rounded-xl border-2 p-4 flex flex-col items-center gap-3 transition-all duration-200 transform active:scale-95 ${active ? 'border-star-blue bg-blue-50 scale-105 shadow-sm' : 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'} touch-manipulation`}
    >
        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-star-blue text-white' : 'bg-white text-gray-400'}`}>
            <i className={`fas ${icon} text-xl`}></i>
        </div>
        <span className={`text-sm font-bold ${active ? 'text-star-blue' : 'text-gray-500'}`}>{label}</span>
    </div>
);

export default BookingForm;