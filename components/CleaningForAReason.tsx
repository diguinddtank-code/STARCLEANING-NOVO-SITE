import React from 'react';
import Image from 'next/image';

const CleaningForAReason: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-pink-50/60 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none hidden lg:block">
          <div className="absolute top-10 right-10 w-72 h-72 bg-pink-100 rounded-full blur-3xl mix-blend-multiply"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">

          {/* Left: Badge */}
          <div className="lg:w-4/12 flex justify-center shrink-0">
            <div className="relative w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-pink-300 rounded-full blur-2xl opacity-60 scale-90"></div>
              <div className="relative w-full h-full bg-white rounded-full shadow-2xl border border-pink-100 p-6">
                <Image
                  src="/images/cleaning-for-a-reason-badge.png"
                  alt="Cleaning for a Reason - Proud Partner - Clean Homes for Cancer Patients, an ISSA Charity"
                  fill
                  sizes="(max-width: 1024px) 208px, 288px"
                  className="object-contain p-6"
                />
              </div>
            </div>
          </div>

          {/* Right: Content Card */}
          <div className="lg:w-7/12 w-full">
             <div className="bg-white rounded-3xl lg:rounded-[3rem] p-8 md:p-14 shadow-2xl relative overflow-hidden border border-pink-100">
                <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-pink-50 rounded-full blur-3xl"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 px-4 py-2 rounded-full mb-6 text-pink-600 font-bold text-xs uppercase tracking-widest">
                    <i className="fas fa-ribbon"></i>
                    Cleaning With a Purpose
                  </div>

                  <h2 className="text-2xl md:text-4xl font-black mb-6 font-heading leading-tight text-gray-900">
                    Proud Partner of <span className="text-pink-500">Cleaning for a Reason</span>
                  </h2>

                  <div className="space-y-4 text-gray-600 text-sm md:text-lg leading-relaxed">
                    <p>
                      Cleaning for a Reason is a national nonprofit that provides <strong className="text-gray-900 font-semibold">free house cleanings to women undergoing treatment for cancer</strong>. Star Cleaning SC is honored to donate our time and services to families across the Lowcountry facing one of the hardest fights of their lives.
                    </p>
                    <p>
                      When you're battling cancer, a clean home shouldn't be one more thing to worry about. We show up free of charge, with the same military precision and care we bring to every job.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://www.cleaningforareason.org"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-pink-200 transition-all transform hover:-translate-y-0.5"
                    >
                      Learn About Cleaning for a Reason <i className="fas fa-arrow-up-right-from-square text-sm"></i>
                    </a>
                    <a
                      href="tel:+18432979935"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-all"
                    >
                      Know Someone Who Needs Us? Call or Text
                    </a>
                  </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CleaningForAReason;
