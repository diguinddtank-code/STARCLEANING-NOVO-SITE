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
          <a href="https://google.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md text-gray-600 hover:text-star-blue transition font-bold text-sm border border-gray-100 hover:scale-105 duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="G" className="w-4 h-4" />
              Read all 5-Star reviews on Google
          </a>
      </div>
    </section>
  );
};

const ReviewCard: React.FC<any> = ({ text, author, location, source, rating, image }) => {
    const getSourceIcon = (src: string) => {
        switch(src) {
            case 'google': return { icon: 'fab fa-google', color: 'text-blue-500' };
            case 'facebook': return { icon: 'fab fa-facebook-f', color: 'text-blue-700' };
            case 'nextdoor': return { icon: 'fas fa-home', color: 'text-green-600' };
            case 'yelp': return { icon: 'fab fa-yelp', color: 'text-red-600' };
            default: return { icon: 'fas fa-star', color: 'text-yellow-400' };
        }
    };

    const sourceStyle = getSourceIcon(source);

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
                        <i className={`${sourceStyle.icon} ${sourceStyle.color} text-lg opacity-80`}></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;