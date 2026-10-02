import type { ReviewCardProps } from '@/components/ReviewCard';

// Pulled directly from Star Cleaning SC's live Google Business Profile
// (Google Maps listing) on 10/02/2026. Text is verbatim (original English,
// not the auto-translated version) and star ratings were confirmed on the
// listing. Google only exposes relative dates ("2 months ago", etc.), so
// dates here are month/year approximations, not exact days. Google's lite
// (logged-out) review panel only surfaces its 3 "most relevant" reviews at
// a time; loading the rest requires signing into a Google account, which we
// don't do. Add more entries here as they're verified live on Google.
const verifiedGoogleReviews: ReviewCardProps[] = [
  {
    text: "I am thoroughly amazed by how clean my apartment is. I've come home to a spotless apartment to the counters, to the shower glass, to the ceiling fans, to the couch fabric being cleaned, to the beds being made “better” than I did. This was my first experience with Star and will happily set up regular service for the rest of my lease at least.",
    // Full original also includes: "I am a single man so even though I real I'm kinda neat
    // the shower glass was a mess, now spotless. This was called their deep clean service."
    // Trimmed here only for card length; wording above is verbatim, not altered.
    author: "Tom Craven",
    date: "Aug 2026",
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
    text: "I love how my house looks every time they visit! They do an excellent job, with special finishing touches. The team is always polite and friendly. Highly recommend Star Cleaning.",
    author: "Sonya Haines",
    date: "Sep 2026",
    source: "google",
    rating: 5,
  },
];

// Reviews shown on the /quote landing page.
export const quoteReviews: ReviewCardProps[] = verifiedGoogleReviews;

// Reviews shown in the home page testimonials carousel.
export const homeReviews: ReviewCardProps[] = verifiedGoogleReviews;
