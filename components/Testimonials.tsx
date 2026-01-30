import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      text: "I was nervous about letting someone into my home while I was at work, but the team put me completely at ease. They even left a treat for my dog! My house feels brand new.",
      author: "Sarah Jenkins",
      location: "Mount Pleasant",
      initials: "SJ",
      source: "nextdoor",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "It's not just about the cleaning (which is perfect, by the way). It's the little touches. The way they arrange the pillows, the friendly note they leave. Truly wonderful people.",
      author: "Mike Ross",
      location: "Downtown Charleston",
      initials: "MR",
      source: "google",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "I booked them for a move-out clean so I could get my deposit back. My landlord was shocked at how good the place looked. Honest, hardworking, and worth every penny.",
      author: "Emily Davis",
      location: "West Ashley",
      initials: "ED",
      source: "yelp",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      text: "My favorite day of the week is Star Cleaning day. Coming home to a sparkling house after a long shift is the best form of self-care. Thank you Maria & team!",
      author: "Jessica L.",
      location: "James Island",
      initials: "JL",
      source: "facebook",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      text: "We trust them with our AirBnB property keys. They have never missed a scheduled clean and always send me photos when they are done. Total peace of mind.",
      author: "David Chen",
      location: "Folly Beach",
      initials: "DC",
      source: "google",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/85.jpg"
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
              We believe trust is earned, one clean home at a time. Here is what your neighbors in Charleston are saying about the Star Cleaning experience.
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

const ReviewCard: React.FC<any> = ({ text, author, location, source, rating, image }) => {
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
        <div className="w-[85vw] sm:w-[320px] md:w-[380px] bg-white p-6 lg:p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 flex-shrink-0 relative group hover:-translate-y-2 transition-transform duration-300">
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-6xl font-serif text-blue-50 opacity-50 z-0">"</div>

            <div className="relative z-10">
                <div className="flex gap-1 text-yellow-400 text-sm mb-4">
                    {[...Array(rating)].map((_, i) => <i key={i} className="fas fa-star"></i>)}
                </div>

                <p className="text-gray-600 mb-6 font-medium leading-relaxed text-sm lg:text-base">"{text}"</p>
                
                <div className="flex items-center gap-4 mt-auto border-t border-gray-50 pt-4">
                    <img src={image} alt={author} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full object-cover border-2 border-white shadow-sm" />
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