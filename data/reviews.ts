import type { ReviewCardProps } from '@/components/ReviewCard';

// Real 5-star reviews from Star Cleaning SC's Google Business Profile.
// - Tom Craven, Amanda Weatherford and Sonya Haines were read live from the listing on 10/02/2026.
// - The rest were copied by the owner from the same profile on 10/02/2026.
// Text is verbatim, except that line breaks are collapsed, a few long reviews are cut at a sentence
// boundary (marked with an ellipsis), and two obvious typos were fixed ("wth", "100%satisfied").
// Google only exposes relative dates ("3 weeks ago"), so dates here are month/year approximations.
// Do not add a review that is not on the Google profile.
const verifiedGoogleReviews: ReviewCardProps[] = [
  {
    text: "This was my first time using a professional cleaning service, and I couldn't be more grateful for the experience. The cleaning team was so sweet, friendly, respectful, and efficient. They did an incredibly thorough and detailed job, and I truly appreciated the care and effort they put into everything. …",
    author: "Lama Hop",
    date: "Sep 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "The ladies did an amazing job with the cleaning. I was really struggling with keeping up with house work, feeling guilty about asking for help. Both of the ladies just went to work and did more than I anticipated. Thank you so much!! I will continue with your service.",
    author: "Elizabeth Rodriguez",
    date: "Sep 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "Star Cleaning completely transformed my home with a much-needed deep clean. Every room looked spotless and smelled incredible when they were finished—it honestly felt like walking into a brand new space. I was so impressed with their attention to detail and quality of work that I've now signed up for biweekly cleanings.",
    author: "Amanda Weatherford",
    date: "Apr 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "Star cleaning has been taking care of our home for a year now. Not once have we ever been disappointed. In addition, they have been very happy to accommodate our ever changing schedule. Highly recommend. Give them a call. You will be extremely satisfied!",
    author: "Mariah Eddins",
    date: "Sep 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "I came home to the most peaceful house. They cleaned with attention to detail, and I really appreciate it!",
    author: "Laura Larramore",
    date: "Aug 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "I am thoroughly amazed by how clean my apartment is. I've come home to a spotless apartment to the counters, to the shower glass, to the ceiling fans, to the couch fabric being cleaned, to the beds being made “better” than I did. This was my first experience with Star and will happily set up regular service for the rest of my lease at least. …",
    author: "Tom Craven",
    date: "Aug 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "Mariana and her team did an excellent job with our home. We are greatly appreciative of the professional and friendly service. We will continue to request their assistance!",
    author: "Heather Howell",
    date: "Aug 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "Mariana and cleaning crew are very efficient, they always leave my house so clean and organized. They are very easy to work with. I really recommend them to clean your home.",
    author: "Monica Schreiber",
    date: "Sep 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "I love how my house looks every time they visit! They do an excellent job, with special finishing touches. The team is always polite and friendly. Highly recommend Star Cleaning.",
    author: "Sonya Haines",
    date: "Sep 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "My mom is 100% satisfied. She said her home smells so good and it looks even better! Thank you so much!!!",
    author: "Katie Whitehouse",
    date: "Sep 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "House always looks great and smells clean! Our cleaning lady was very thorough!!",
    author: "Luci Carter",
    date: "Sep 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "Cleaning was thorough. Will use again in the future. Do recommend.",
    author: "Tamara Chisolm",
    date: "Sep 2026",
    source: "google",
    rating: 5,
  },
  {
    text: "Great job!",
    author: "Joan Roche",
    date: "Oct 2026",
    source: "google",
    rating: 5,
  },
];

// Reviews shown on the /quote landing page (the strongest six).
export const quoteReviews: ReviewCardProps[] = verifiedGoogleReviews.slice(0, 6);

// Reviews shown in the home page testimonials carousel.
export const homeReviews: ReviewCardProps[] = verifiedGoogleReviews;
