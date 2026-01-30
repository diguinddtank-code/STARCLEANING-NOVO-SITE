import React, { useState } from 'react';

const BookingForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: 'Standard House Cleaning',
    frequency: 'Bi-Weekly (Most Popular)',
    zipCode: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
        ...formData,
        formSource: "Main Booking Form",
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
        
        alert(`Thanks ${formData.firstName}! We have received your request and will email your quote to ${formData.email} shortly.`);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            serviceType: 'Standard House Cleaning',
            frequency: 'Bi-Weekly (Most Popular)',
            zipCode: ''
        });
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
          <div className="lg:w-5/12 bg-gradient-to-br from-star-dark to-star-blue p-6 lg:p-14 text-white relative flex flex-col justify-between shrink-0">
            {/* Overlay Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            
            <div className="relative z-10 text-center lg:text-left">
              <div className="inline-block bg-yellow-400 text-blue-900 text-[10px] lg:text-xs font-black uppercase tracking-widest px-3 py-1 rounded mb-4 lg:mb-6 shadow-md">
                Limited Time Offer
              </div>
              <h2 className="text-2xl lg:text-4xl font-black mb-2 lg:mb-4 font-heading leading-tight">
                Get Your Free <br className="hidden lg:block"/>Quote Today
              </h2>
              <p className="text-blue-100 mb-0 lg:mb-10 text-sm lg:text-lg leading-relaxed">
                Save 20% on your first deep clean. No credit card required.
              </p>

              <div className="space-y-8 hidden lg:block">
                <Step 
                  number="1" 
                  title="Request Quote" 
                  desc="Fill out the simple form details." 
                />
                <Step 
                  number="2" 
                  title="Get Custom Pricing" 
                  desc="Receive an email with your personalized estimate." 
                />
                <Step 
                  number="3" 
                  title="Book & Relax" 
                  desc="Schedule online and enjoy your sparkling home." 
                  isLast
                />
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 relative z-10 hidden lg:block">
              <div className="flex items-center gap-4">
                <img 
                  src="https://randomuser.me/api/portraits/women/44.jpg" 
                  alt="Reviewer" 
                  className="w-12 h-12 rounded-full border-2 border-yellow-400"
                />
                <div>
                  <div className="flex text-yellow-400 text-xs mb-1">
                    <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                  </div>
                  <p className="text-sm italic text-blue-100">"The quote process was super easy and the cleaning was phenomenal!"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="lg:w-7/12 p-6 lg:p-14 bg-white">
            <h3 className="text-lg lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 font-heading flex items-center gap-3">
              <span className="w-1.5 h-6 lg:w-2 lg:h-8 bg-star-blue rounded-full"></span>
              Tell us about your home
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
              
              {/* Row 1: Names */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <InputGroup label="First Name" name="firstName" placeholder="Jane" value={formData.firstName} onChange={handleChange} required />
                <InputGroup label="Last Name" name="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} required />
              </div>

              {/* Row 2: Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <InputGroup label="Email Address" name="email" type="email" placeholder="jane@example.com" value={formData.email} onChange={handleChange} required />
                <InputGroup label="Phone Number" name="phone" type="tel" placeholder="(843) 297-9935" value={formData.phone} onChange={handleChange} required />
              </div>

              {/* Row 3: Service Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div className="flex flex-col group">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Service Type</label>
                  <div className="relative">
                    <select 
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white font-semibold appearance-none cursor-pointer"
                    >
                      <option>Standard House Cleaning</option>
                      <option>Deep Cleaning (First Time)</option>
                      <option>Move In / Move Out</option>
                      <option>Vacation Rental / Airbnb</option>
                      <option>Post-Construction</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                  </div>
                </div>

                <div className="flex flex-col group">
                  <label className="text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Frequency</label>
                  <div className="relative">
                    <select 
                      name="frequency"
                      value={formData.frequency}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white font-semibold appearance-none cursor-pointer"
                    >
                      <option>Weekly (Save 20%)</option>
                      <option>Bi-Weekly (Most Popular)</option>
                      <option>Monthly</option>
                      <option>One-Time Clean</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs"></i>
                  </div>
                </div>
              </div>

              {/* Row 4: Zip */}
              <div>
                 <label className="text-xs font-bold text-gray-500 uppercase mb-2 ml-1">Zip Code</label>
                 <input 
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="e.g. 29401"
                    className="w-full md:w-1/3 px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
                    required
                 />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-cta group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-blue-900 py-4 rounded-xl font-black text-lg shadow-[0_10px_20px_-5px_rgba(250,204,21,0.4)] mt-4 transform hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex items-center justify-center gap-3 border-b-4 border-yellow-600 active:border-b-0 active:translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
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
              
              <p className="text-center text-[10px] md:text-xs text-gray-400 mt-4">
                <i className="fas fa-lock mr-1"></i> Your information is safe with us. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper Components for cleaner code
const InputGroup: React.FC<any> = ({ label, type = "text", ...props }) => (
  <div className="flex flex-col group">
    <label className="text-xs font-bold text-gray-500 uppercase mb-2 ml-1 group-focus-within:text-star-blue transition-colors">{label}</label>
    <input 
      type={type}
      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-star-blue focus:border-star-blue block shadow-sm transition-all focus:bg-white placeholder-gray-400 font-semibold"
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