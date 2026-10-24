/**
 * Canonical Business Profile Data for Star Cleaning SC
 * Sourced directly from verified Google Business Profile (GMB)
 */
export const BUSINESS_CONFIG = {
  name: "Star Cleaning SC",
  legalName: "Star Cleaning LLC",
  phone: "(843) 297-9935",
  phoneRaw: "+18432979935",
  email: "admin@starcleaningsc.com",
  ratingValue: "4.9",
  bestRating: "5",
  reviewCount: 50,
  reviewCountDisplay: "50+",
  googleMapsShareUrl: "https://share.google/udkA7cxV0VCC39Ag2",
  hours: {
    displayWeekday: "Mon–Fri: 9:00 AM – 5:00 PM",
    displaySaturday: "Sat: 9:00 AM – 3:00 PM",
    displaySunday: "Sun: Closed",
    scheduleText: "Mon–Fri 9 AM–5 PM, Sat 9 AM–3 PM",
  },
  schemaOpeningHours: [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday"],
      "opens": "09:00",
      "closes": "15:00"
    }
  ]
};
