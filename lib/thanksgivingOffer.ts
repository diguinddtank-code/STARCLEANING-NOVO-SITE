// Thanksgiving campaign settings for /promo-quote (BookingForm theme="thanksgiving").
// Update SPOTS_LEFT as spots get booked so the counter stays honest.
export const THANKSGIVING_OFFER = {
  discount: '20%',
  totalSpots: 20,
  spotsLeft: 12,
  // Offer closes at the end of Thanksgiving Day, Eastern Time
  endsAt: '2026-11-26T23:59:00-05:00',
  // Step 3 choices; the label is sent to the webhook as `preferredTiming`
  timings: [
    { label: 'Before Thanksgiving', dates: 'Nov 16 - 22', note: 'Guest-ready' },
    { label: 'Thanksgiving Week', dates: 'Nov 23 - 27', note: 'Most popular' },
    { label: 'After Thanksgiving', dates: 'From Nov 30', note: 'Post-feast reset' },
  ],
};
