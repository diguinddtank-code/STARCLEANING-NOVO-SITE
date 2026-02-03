import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "This cleaning company exceeded my expectations! They were professional, on time, and incredibly thorough. Every room looked better than I imagined from the floors to the bathrooms to all the little details that usually get missed. It feels so good to come home to a truly clean house. I’m beyond happy with their work and will absolutely be a repeat customer.",
      author: "Sarah Rounds",
      location: "Ridgeville, SC",
      date: "01/15/2026",
      source: "google",
      rating: 5
    },
    {
      text: "Star Cleaning always does an amazing job! We love coming home after our cleaning to a fresh home. There’s nothing better. Marianna is always responsive to any questions we have and has been very flexible when we’ve needed to move our cleaning day. Highly recommend!",
      author: "Mariah Eddins",
      location: "Summerville, SC",
      date: "01/09/2026",
      source: "facebook",
      rating: 5
    },
    {
      text: "The cleaning that was done today was very good. Everything looks clean and perfectly arranged. Thank you.",
      author: "Janice Oppenhheimer",
      location: "Summerville, SC",
      date: "01/16/2026",
      source: "google",
      rating: 5
    },
    {
      text: "Everything looks fresh and clean! Thank you for a thorough cleaning today and working with my schedule. We appreciate our cleaners hard work.",
      author: "Ginny Ballard",
      location: "Summerville, SC",
      date: "01/15/2026",
      source: "nextdoor",
      rating: 5
    },
    {
      text: "Excellent job every time they are here. And they are so polite, just nice hardworking girls.",
      author: "Janet Richardson",
      location: "Summerville, SC",
      date: "01/15/2026",
      source: "google",
      rating: 5
    },
    {
      text: "Star Cleaning does an amazing job each month in my home, the ladies make my home sparkle each time! I highly recommend.",
      author: "Julie Bresonis",
      location: "Summerville, SC",
      date: "01/14/2026",
      source: "facebook",
      rating: 5
    },
    {
      text: "Great job and thanks for all the extra attention to detail the ladies do for us. Can never do less than.",
      author: "Kelley Crews",
      location: "Isle of Palms, SC",
      date: "01/15/2026",
      source: "google",
      rating: 5
    },
    {
      text: "Excellent !!",
      author: "Laura Paterson",
      location: "Summerville, SC",
      date: "01/07/2026",
      source: "google",
      rating: 5
    }
  ];

  // Duplicate for infinite scroll
  const allReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-gradient-to-b from-white to-orange-50 overflow-hidden relative">
      {/* Background Decoration - Warmer */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none overflow-hidden">
          <div className="absolute top-10 right-0 w-[500px] h-[500px] bg-yellow-100 rounded-full blur-[100px] mix-blend-multiply"></div>
          <div className="absolute bottom-10 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[80px] mix-blend-multiply"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 lg:mb-16 relative z-20">
        <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-2 bg-white border border-yellow-200 px-4 py-1.5 rounded-full shadow-sm mb-6">
                 <i className="fas fa-heart text-red-500 animate-pulse"></i>
                 <span className="text-xs font-bold uppercase tracking-widest text-gray-600">Loved by 500+ Neighbors</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black font-heading text-gray-900 mb-6">
              Don't just take our word for it.
            </h2>
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              We believe trust is earned, one clean home at a time. Here is what your neighbors in Charleston & Summerville are saying.
            </p>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="w-full relative py-8">
        {/* Gradient Masks for Scroll Fade */}
        <div className="absolute top-0 left-0 w-8 md:w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 md:w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

        <div className="flex gap-4 lg:gap-6 w-max animate-scroll hover:[animation-play-state:paused] px-4">
          {allReviews.map((review, idx) => (
            <ReviewCard key={idx} {...review} />
          ))}
        </div>
      </div>
      
      <div className="text-center mt-8 lg:mt-12 relative z-20">
          <a href="https://google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md text-gray-600 hover:text-star-blue transition font-bold text-sm border border-gray-100 hover:scale-105 duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Read all 5-Star reviews on Google
          </a>
      </div>
    </section>
  );
};

const ReviewCard: React.FC<any> = ({ text, author, location, source, rating, date }) => {
    // Helper to render the source icon/image
    const renderSourceIcon = (src: string) => {
        if (src === 'google') {
            return (
                <svg className="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
            );
        }
        
        // Font Awesome Fallbacks for others
        let iconClass = '';
        let colorClass = '';
        
        switch(src) {
            case 'facebook': 
                iconClass = 'fab fa-facebook-f'; 
                colorClass = 'text-blue-700'; 
                break;
            case 'nextdoor': 
                iconClass = 'fas fa-home'; 
                colorClass = 'text-green-600'; 
                break;
            case 'yelp': 
                iconClass = 'fab fa-yelp'; 
                colorClass = 'text-red-600'; 
                break;
            default: 
                iconClass = 'fas fa-star'; 
                colorClass = 'text-yellow-400';
        }
        return <i className={`${iconClass} ${colorClass} text-lg opacity-80`}></i>;
    };

    return (
        <div className="w-[85vw] sm:w-[320px] md:w-[380px] bg-white p-6 lg:p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex-shrink-0 relative group hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-6xl font-serif text-blue-50 opacity-50 z-0">"</div>

            <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-1 text-yellow-400 text-sm">
                        {[...Array(rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                    </div>
                    {date && (
                        <span className="text-[10px] text-gray-400 font-bold bg-gray-50 px-2 py-0.5 rounded-full">{date}</span>
                    )}
                </div>

                <p className="text-gray-600 mb-6 font-medium leading-relaxed text-sm lg:text-base flex-grow">"{text}"</p>
                
                <div className="flex items-center gap-3 mt-auto border-t border-gray-50 pt-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-500 font-bold text-lg shadow-inner">
                        {author.charAt(0)}
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 leading-tight text-sm lg:text-base">{author}</p>
                        <p className="text-xs text-gray-400 font-medium">{location}</p>
                    </div>
                    <div className="ml-auto">
                        {renderSourceIcon(source)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;