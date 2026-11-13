/**
 * Content for the six service pages (/services/*), the services hub and the deep-cleaning city
 * pages. Facts only: what is on the Google profile, in llms.txt, or in the service checklists the
 * owner approved. No invented testimonials, prices, or availability promises.
 */

export type ServiceSlug =
  | 'residential-cleaning'
  | 'deep-cleaning'
  | 'move-in-move-out-cleaning'
  | 'vacation-rental-airbnb-cleaning'
  | 'commercial-office-cleaning'
  | 'post-construction-cleaning';

export type IconKey = 'kitchen' | 'bath' | 'home' | 'sparkle' | 'box' | 'bed' | 'office' | 'coffee' | 'hammer' | 'brush' | 'key' | 'leaf';

export interface ChecklistRoom {
  room: string;
  icon: IconKey;
  items: string[];
}

export interface ServiceData {
  slug: ServiceSlug;
  name: string;
  shortName: string;
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: [string, string];
  lead: string;
  heroImage: { src: string; alt: string };
  sideImage: { src: string; alt: string };
  card: string;
  question: string;
  quickAnswer: string;
  facts: { label: string; value: string }[];
  statement: string;
  checklist: ChecklistRoom[];
  notIncluded: string[];
  personas: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  reviewAuthors: string[];
  related: ServiceSlug[];
  blog: string[];
}

const STEPS_HOME = [
  { title: 'Tell us about your home', text: 'Bedrooms, bathrooms, square footage and how often. It takes about a minute online, or call or text (843) 297-9935.' },
  { title: 'We confirm your price', text: 'Someone from our team reaches out personally, answers your questions and locks in a date that fits your week.' },
  { title: 'Your team gets to work', text: 'Background-checked, uniformed and fully equipped. You don’t need to be home, and you don’t need to buy a thing.' },
  { title: 'You get your time back', text: 'Walk into a clean home. If anything was missed, tell us within 24 hours and we come back to fix it free.' },
];

export const servicesData: Record<ServiceSlug, ServiceData> = {
  'residential-cleaning': {
    slug: 'residential-cleaning',
    name: 'Recurring House Cleaning',
    shortName: 'House Cleaning',
    serviceType: 'House cleaning',
    metaTitle: 'House Cleaning Charleston SC | Weekly & Bi-Weekly Maids',
    metaDescription:
      'Recurring house cleaning in Charleston, Summerville & the Lowcountry. Weekly, bi-weekly or monthly. Veteran-owned, background-checked, 4.9★ on Google.',
    eyebrow: 'Weekly · Bi-weekly · Monthly',
    h1: ['Recurring house cleaning,', 'so your weekends stay yours.'],
    lead:
      'A background-checked team cleans your home on a schedule that fits your life, top to bottom, every visit. Veteran-owned and serving Charleston, Summerville and the Lowcountry for 18 years.',
    heroImage: { src: '/images/residential.png', alt: 'Star Cleaning SC team members dusting shelves and wiping a glass table in a bright living room' },
    sideImage: { src: '/images/clean-living-room.jpg', alt: 'Bright, tidy living room after a recurring cleaning visit' },
    card: 'Most families choose bi-weekly',
    question: 'What’s included in recurring house cleaning?',
    quickAnswer:
      'Star Cleaning SC offers weekly, bi-weekly and monthly house cleaning across the Charleston area. Every visit covers the kitchen, bathrooms, bedrooms and living areas: counters and appliance fronts, sinks, toilets, showers, mirrors, dusting, vacuuming and mopping. We bring all supplies, you don’t need to be home, and anything missed is re-cleaned free within 24 hours.',
    facts: [
      { label: 'Frequency', value: 'Weekly, bi-weekly or monthly' },
      { label: 'Best start', value: 'An Initial Deep Clean first' },
      { label: 'Supplies', value: 'We bring everything' },
      { label: 'Guarantee', value: 'Free re-clean within 24h' },
    ],
    statement: 'You’re not behind on cleaning. You’re short on time. We give you back the hours, the guilt, and the Saturday.',
    checklist: [
      {
        room: 'Kitchen',
        icon: 'kitchen',
        items: [
          'Wipe down and sanitize all countertops and backsplashes',
          'Scrub and polish the kitchen sink and faucet fixtures',
          'Clean the exterior of all major appliances (fridge, oven, dishwasher)',
          'Clean the inside and outside of the microwave',
          'Wipe down cabinet fronts and hardware',
        ],
      },
      {
        room: 'Bathrooms',
        icon: 'bath',
        items: [
          'Scrub and disinfect toilet bowl, tank, base, and behind the toilet',
          'Remove soap scum and sanitize showers, tubs, and glass doors',
          'Clean and polish mirrors and bathroom fixtures',
          'Sanitize vanity countertops and sinks',
        ],
      },
      {
        room: 'Bedrooms & living areas',
        icon: 'bed',
        items: [
          'Dust all accessible surfaces, including side tables, shelves, and decor',
          'Empty all interior trash cans and replace liners',
          'Vacuum all carpets, rugs, and stairs',
          'Sweep and mop all hard surface flooring',
          'Make beds and change linens (if fresh linens are left out)',
        ],
      },
    ],
    notIncluded: [
      'Inside the oven or refrigerator (available with a deep clean)',
      'Carpet shampooing or steam extraction',
      'Exterior windows and anything that needs a ladder',
      'Moving heavy furniture',
    ],
    personas: [
      { title: 'Busy families', text: 'Work, school runs and practice eat the week. We take the cleaning off your list so evenings and weekends go back to the people you love.' },
      { title: 'Pet homes', text: 'Fur on the stairs, paw prints by the door. Pet-safe products, extra vacuuming, and a team that’s comfortable around your dogs and cats.' },
      { title: 'Seniors & limited mobility', text: 'Reaching, kneeling and scrubbing get harder. A friendly, familiar team keeps the home safe and fresh without you lifting a finger.' },
    ],
    steps: STEPS_HOME,
    faqs: [
      { q: 'How often should I have my house cleaned?', a: 'Most families choose bi-weekly: the house never gets far from clean and it’s easier on the budget than weekly. Weekly works best for busy households with kids or pets, and monthly suits smaller homes or people who tidy well between visits.' },
      { q: 'Do I need to be home during the cleaning?', a: 'No. Most clients give us a spare key, garage code, or lockbox access, then go to work or run errands and come back to a clean house. Every team member is background-checked.' },
      { q: 'Do you bring your own cleaning supplies and equipment?', a: 'Yes. We arrive with our own vacuums, microfiber cloths, and eco-friendly, pet-safe cleaning products. You don’t need to provide anything.' },
      { q: 'What if I have dogs or cats?', a: 'We’re very pet-friendly. Let us know if your pets will be loose or crated, and we use non-toxic products that are safe for animals.' },
      { q: 'Should I start with a deep clean?', a: 'Usually yes. Recurring plans start with an Initial Deep Clean that brings the home up to our standard; after that, each recurring visit keeps it there in less time.' },
      { q: 'Can I ask for specific tasks?', a: 'Absolutely. We follow a full checklist, and we’re happy to adjust it. Tell us your priorities when you book and we’ll note them for your team.' },
    ],
    reviewAuthors: ['Mariah Eddins', 'Elizabeth Rodriguez', 'Monica Schreiber', 'Laura Larramore', 'Sonya Haines', 'Luci Carter'],
    related: ['deep-cleaning', 'move-in-move-out-cleaning', 'vacation-rental-airbnb-cleaning'],
    blog: ['how-often-should-you-have-your-house-cleaned-charleston-sc', 'how-much-does-house-cleaning-cost-in-charleston-sc', 'first-recurring-clean-charleston-summerville-sc'],
  },

  'deep-cleaning': {
    slug: 'deep-cleaning',
    name: 'Deep Cleaning',
    shortName: 'Deep Cleaning',
    serviceType: 'Deep cleaning',
    metaTitle: 'Deep Cleaning Charleston SC | Top-to-Bottom Reset | Star Cleaning',
    metaDescription:
      'A top-to-bottom deep clean for Charleston-area homes: baseboards, grout, fans, vents, blinds and the spots a regular clean skips. Veteran-owned, 4.9★ on Google.',
    eyebrow: 'One-time · Seasonal · First visit',
    h1: ['A deep clean that resets', 'the whole house.'],
    lead:
      'Baseboards, grout, ceiling fans, blinds, vents, and the dust behind the furniture. The clean that gets your home back to zero, done by a veteran-owned team that doesn’t cut corners.',
    heroImage: { src: '/images/deep-cleaning.webp', alt: 'Gloved hands deep cleaning a kitchen countertop and stovetop with cleaning spray' },
    sideImage: { src: '/images/clean-bedroom-after.jpg', alt: 'A bedroom after a top-to-bottom deep clean' },
    card: 'Takes 2–3× longer than a regular clean',
    question: 'What is a deep clean, and what does it include?',
    quickAnswer:
      'A deep clean is a one-time, top-to-bottom reset. It includes everything in a regular cleaning plus hand-wiped baseboards, door frames and sills, scrubbed tile grout, hard-water and soap-scum removal, ceiling fans, vents and blinds, and cleaning under light furniture. It usually takes two to three times longer than a standard visit, and it’s how every recurring plan starts.',
    facts: [
      { label: 'Best for', value: 'First visits, seasons, hosting' },
      { label: 'Time', value: '2–3× a regular clean' },
      { label: 'Add-ons', value: 'Inside oven or fridge' },
      { label: 'Guarantee', value: 'Free re-clean within 24h' },
    ],
    statement: 'Some dirt you notice. Most of it you’ve stopped seeing. A deep clean finds both, and gives you a home that finally feels finished.',
    checklist: [
      {
        room: 'Kitchen',
        icon: 'kitchen',
        items: [
          'Degrease and hand-wipe the exterior of all cabinets and drawers',
          'Scrub and sanitize inside the microwave and oven glass',
          'Scrub grout lines on countertops and backsplashes',
          'Clean the refrigerator interior (on request)',
          'Everything in a regular kitchen clean',
        ],
      },
      {
        room: 'Bathrooms',
        icon: 'bath',
        items: [
          'Intensive scrubbing to remove hard water stains and soap scum',
          'Detailed scrubbing of tile grout in showers and tubs',
          'Hand-wipe cabinet exteriors and sanitize hardware',
          'Clean and disinfect trash cans inside and out',
          'Everything in a regular bathroom clean',
        ],
      },
      {
        room: 'Whole house',
        icon: 'home',
        items: [
          'Hand-wipe all accessible baseboards, door frames, and window sills',
          'Dust ceiling fans, light fixtures, and air vents',
          'Vacuum and wipe down window blinds and shutters',
          'Move light furniture to vacuum and mop underneath',
          'Detail-dust woodwork, trim, and heavy decor',
        ],
      },
    ],
    notIncluded: [
      'Carpet shampooing or steam extraction',
      'Exterior windows and high ladder work',
      'Mold remediation or biohazard cleanup',
      'Moving heavy furniture or appliances',
    ],
    personas: [
      { title: 'Before you start recurring service', text: 'Your Initial Deep Clean brings the house up to standard so every visit after it keeps it there.' },
      { title: 'Hosting season', text: 'Thanksgiving, a reunion, the in-laws. Get the guest bath, the kitchen and every baseboard ready before the doorbell rings.' },
      { title: 'Allergies & pollen season', text: 'Lowcountry pollen and humidity settle into vents, blinds and grout. A seasonal deep clean pulls it out of the house.' },
    ],
    steps: STEPS_HOME,
    faqs: [
      { q: 'What is the difference between a regular clean and a deep clean?', a: 'A regular clean maintains the surfaces you use every day: counters, sinks, toilets, floors, dusting. A deep clean adds the detail work: hand-wiped baseboards and door frames, scrubbed grout, hard-water removal, ceiling fans, vents, blinds, and cleaning under light furniture.' },
      { q: 'How long does a deep cleaning take?', a: 'It depends on the size and condition of the home. In general it takes two to three times longer than a standard maintenance clean. We give you an estimated time frame when we confirm your booking.' },
      { q: 'Do you clean inside the oven and refrigerator?', a: 'The microwave interior is always included. The inside of the refrigerator or oven can be added to your deep clean on request.' },
      { q: 'How often should I get a deep clean?', a: 'Once to start, then once or twice a year on top of regular service. Many Lowcountry homes book one after pollen season and one before the holidays.' },
      { q: 'Can I book a deep clean before starting recurring service?', a: 'Yes, and we recommend it. It’s called the Initial Deep Clean, and it makes every recurring visit after it faster and more consistent.' },
    ],
    reviewAuthors: ['Amanda Weatherford', 'Lama Hop', 'Tom Craven', 'Elizabeth Rodriguez', 'Katie Whitehouse', 'Tamara Chisolm'],
    related: ['residential-cleaning', 'move-in-move-out-cleaning', 'post-construction-cleaning'],
    blog: ['deep-cleaning-vs-standard-cleaning-north-charleston', 'how-to-deep-clean-house-step-by-step-charleston-sc', 'how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc'],
  },

  'move-in-move-out-cleaning': {
    slug: 'move-in-move-out-cleaning',
    name: 'Move-In & Move-Out Cleaning',
    shortName: 'Move-In/Out Cleaning',
    serviceType: 'Move-in and move-out cleaning',
    metaTitle: 'Move-Out Cleaning Charleston SC | Move-In Cleaning | Star Cleaning',
    metaDescription:
      'Empty-home cleaning for renters, sellers and buyers in Charleston & Summerville: inside cabinets, fridge and oven, baseboards, baths.',
    eyebrow: 'Renters · Sellers · New owners',
    h1: ['Move-out cleaning that', 'hands over the keys with confidence.'],
    lead:
      'Every cabinet, drawer, appliance and baseboard in an empty home, cleaned the way landlords, buyers and your own family expect. One less thing to worry about on moving week.',
    heroImage: { src: '/images/move-in-out.webp', alt: 'Empty, freshly cleaned home ready for move-in' },
    sideImage: { src: '/images/after.jpg', alt: 'Clean, empty room after a move-out cleaning' },
    card: 'Inside cabinets, fridge and oven included',
    question: 'What’s included in a move-out clean?',
    quickAnswer:
      'Move-in and move-out cleaning is a deep clean for an empty home. It covers the inside and outside of all cabinets and drawers, the inside of the refrigerator, freezer and oven, full bathroom scrubbing, baseboards, door frames, sills, interior windows and glass doors, fans and vents, and vacuuming and mopping every floor. Power and hot water need to be on.',
    facts: [
      { label: 'Best for', value: 'Renters, sellers, buyers' },
      { label: 'Includes', value: 'Inside fridge, oven, cabinets' },
      { label: 'You provide', value: 'Power & hot water on' },
      { label: 'Guarantee', value: 'Free re-clean within 24h' },
    ],
    statement: 'Moving is a hundred decisions in one week. Let the cleaning be the one thing you don’t have to think about.',
    checklist: [
      {
        room: 'Kitchen & appliances',
        icon: 'kitchen',
        items: [
          'Clean inside and outside all cabinets and drawers',
          'Scrub the interior of the refrigerator and freezer',
          'Degrease the interior of the oven and the stovetop',
          'Sanitize countertops, sinks, and fixtures',
        ],
      },
      {
        room: 'Bathrooms',
        icon: 'bath',
        items: [
          'Intensive scrubbing of showers, tubs, and grout',
          'Clean inside and outside vanities and cabinets',
          'Disinfect toilets completely, including base and behind',
          'Clean mirrors and polish chrome fixtures',
        ],
      },
      {
        room: 'Whole house',
        icon: 'home',
        items: [
          'Hand-wipe baseboards, door frames, and window sills',
          'Clean interior windows and glass doors',
          'Dust ceiling fans, fixtures, and air vents',
          'Vacuum carpets thoroughly, edges and corners',
          'Sweep and mop hard floors to a shine',
        ],
      },
    ],
    notIncluded: [
      'Carpet shampooing or hot-water extraction',
      'Wall washing or paint touch-ups',
      'Hauling furniture, junk or trash piles',
      'Exterior windows, garages and patios',
    ],
    personas: [
      { title: 'Renters', text: 'Kitchens, bathrooms and baseboards are where move-out inspections focus. We clean them the way a landlord checks them.' },
      { title: 'Home sellers', text: 'Listing photos, showings and the final walk-through all go better in a home that looks cared for.' },
      { title: 'New homeowners', text: 'Start fresh. Every drawer and shelf is wiped before your family’s things go in.' },
    ],
    steps: STEPS_HOME,
    faqs: [
      { q: 'Do you guarantee I’ll get my security deposit back?', a: 'We can’t control a landlord’s decisions about damage or lease terms, but we do guarantee our cleaning. If your landlord points out a cleaning issue within 24 hours, we come back and fix it at no charge.' },
      { q: 'Do I need to leave the electricity and water on?', a: 'Yes. We need power and running hot water to run our vacuums, clean the appliances and mop the floors.' },
      { q: 'Do you shampoo carpets?', a: 'We vacuum carpets thoroughly, edges and corners included, but we don’t offer hot-water extraction. If your lease requires professional carpet shampooing, you’ll need a carpet specialist.' },
      { q: 'How far ahead should I book?', a: 'One to two weeks ahead is ideal, especially at the end of the month. Moving dates change, so call or text us; we do everything we can to fit short-notice requests.' },
      { q: 'Should the home be empty?', a: 'Yes, an empty home gets the best result, because we can reach inside every cabinet, closet and corner.' },
    ],
    reviewAuthors: ['Tom Craven', 'Heather Howell', 'Lama Hop', 'Tamara Chisolm'],
    related: ['deep-cleaning', 'post-construction-cleaning', 'residential-cleaning'],
    blog: ['move-out-cleaning-checklist-security-deposit-charleston-sc', 'how-to-clean-before-moving-in-checklist-charleston-sc', 'move-out-cleaning-cost-summerville-sc'],
  },

  'vacation-rental-airbnb-cleaning': {
    slug: 'vacation-rental-airbnb-cleaning',
    name: 'Airbnb & Vacation Rental Cleaning',
    shortName: 'Airbnb Cleaning',
    serviceType: 'Vacation rental turnover cleaning',
    metaTitle: 'Airbnb Cleaning Charleston SC | Vacation Rental Turnovers | Star',
    metaDescription:
      'Same-day Airbnb and vacation rental turnovers in Charleston, Folly, Mount Pleasant & James Island: linens, restocking, staging and damage photos for hosts.',
    eyebrow: 'Hosts · Property managers',
    h1: ['Airbnb turnovers that', 'protect your five stars.'],
    lead:
      'Checkout to check-in, handled. Fresh linens, a spotless kitchen and bath, restocked essentials and a photo report if anything’s wrong, so the next guest walks into the listing they booked.',
    heroImage: { src: '/images/airbnb.webp', alt: 'Freshly staged vacation rental bedroom with crisp white linens' },
    sideImage: { src: '/images/clean-living-room.jpg', alt: 'Staged living room ready for the next guest' },
    card: 'Same-day turnovers between guests',
    question: 'What does an Airbnb turnover include?',
    quickAnswer:
      'Star Cleaning SC turns over Airbnb and vacation rentals between guests across Charleston, Folly Beach, James Island and Mount Pleasant. Each turnover includes stripping and remaking beds, laundering linens and towels, sanitizing kitchen and bathrooms, restocking supplies, staging, taking trash out, and a visual inspection with photos sent to you if there is damage.',
    facts: [
      { label: 'Window', value: 'Same-day, checkout to check-in' },
      { label: 'Linens', value: 'Washed on-site, beds made' },
      { label: 'Reporting', value: 'Photos of any damage' },
      { label: 'Guarantee', value: 'Free re-clean within 24h' },
    ],
    statement: 'Your guests never see the turnover. They see a place that feels like the photos, and that’s what they write about.',
    checklist: [
      {
        room: 'Linens & beds',
        icon: 'bed',
        items: [
          'Strip all beds; wash sheets, pillowcases and duvet covers',
          'Wash and fold all bathroom towels and washcloths',
          'Make every bed with fresh linens to hotel-quality standards',
        ],
      },
      {
        room: 'Kitchen & bathrooms',
        icon: 'bath',
        items: [
          'Sanitize all bathroom surfaces, toilets, showers and glass',
          'Wipe down kitchen counters and sink, clean the microwave',
          'Check and wipe out the refrigerator, removing old food',
          'Empty the dishwasher and put away clean dishes',
        ],
      },
      {
        room: 'Staging & restocking',
        icon: 'key',
        items: [
          'Restock toilet paper, paper towels, trash bags and toiletries',
          'Stage decorative pillows, throws and welcome books',
          'Empty all bins and take garbage to the exterior receptacles',
          'Vacuum and mop all floors: no hair, no sand',
          'Visual inspection for damage, with photos sent to you',
        ],
      },
    ],
    notIncluded: [
      'Supplying linens, toiletries or consumables (we restock yours)',
      'Off-site laundry, unless arranged in advance',
      'Repairs or maintenance',
      'Exterior, pool and hot-tub cleaning',
    ],
    personas: [
      { title: 'Out-of-state owners', text: 'You can’t be here between every guest. A local, insured team you can trust with the keys is the next best thing.' },
      { title: 'Busy local hosts', text: 'Stop racing over between checkout and check-in. Get your afternoons back and keep your calendar open.' },
      { title: 'Property managers', text: 'Consistent turnovers across your portfolio, damage photos, and one point of contact.' },
    ],
    steps: [
      { title: 'Share your listing', text: 'Address, bedrooms and bathrooms, laundry setup, and how you handle supplies.' },
      { title: 'We set your turnover routine', text: 'We agree on checkout and check-in times, access, and what to restock.' },
      { title: 'Every guest, same standard', text: 'Linens, kitchen, baths, floors, staging and a visual inspection after each stay.' },
      { title: 'You get the report', text: 'If something is broken, stained or missing, you get photos right away to file a claim.' },
    ],
    faqs: [
      { q: 'Do you do same-day turnovers?', a: 'Yes. We know the window between an 11:00 AM checkout and a 4:00 PM check-in is tight, and our teams are trained for efficient same-day turnovers.' },
      { q: 'Do you wash linens on-site?', a: 'Usually, using the property’s washer and dryer. If the property has no laundry or the turnover is very tight, we can discuss a custom arrangement.' },
      { q: 'Will you tell me if a guest damages the property?', a: 'Yes. Every turnover includes a visual inspection. If we find broken items, stains or missing inventory, we photograph it and notify you right away so you can file a claim.' },
      { q: 'Do you clean rentals in downtown Charleston?', a: 'Yes, including historic homes and condos on the peninsula. We’re used to its parking and access challenges.' },
      { q: 'Do you cover Folly Beach and James Island rentals?', a: 'Yes. James Island and the Folly Beach area are busy short-term rental markets and we’re there regularly.' },
    ],
    reviewAuthors: ['Laura Larramore', 'Tom Craven', 'Sonya Haines', 'Heather Howell'],
    related: ['residential-cleaning', 'deep-cleaning', 'commercial-office-cleaning'],
    blog: ['charleston-airbnb-cleaning-guide', 'what-house-cleaners-will-not-clean-charleston-sc', 'do-house-cleaners-bring-their-own-supplies-charleston-sc'],
  },

  'commercial-office-cleaning': {
    slug: 'commercial-office-cleaning',
    name: 'Commercial & Office Cleaning',
    shortName: 'Office Cleaning',
    serviceType: 'Commercial office cleaning',
    metaTitle: 'Office Cleaning Charleston SC | Commercial Cleaning | Star Cleaning',
    metaDescription:
      'Office and small-business cleaning in Charleston, North Charleston & Summerville. After-hours scheduling, month-to-month, insured and background-checked.',
    eyebrow: 'Offices · Retail · Small business',
    h1: ['Office cleaning your team', 'and clients notice.'],
    lead:
      'Desks, restrooms, breakrooms and the front door clients walk through, cleaned around your hours. Month-to-month, insured, and run with the discipline of a veteran-owned company.',
    heroImage: { src: '/images/commercial.webp', alt: 'Clean, modern office space with desks and natural light' },
    sideImage: { src: '/images/service-4.jpg', alt: 'Professional cleaner sanitizing an office workspace' },
    card: 'Month-to-month, no long contracts',
    question: 'What does office cleaning include?',
    quickAnswer:
      'Star Cleaning SC cleans small and mid-size offices, clinics, studios and retail spaces across the Charleston metro. Service covers workspaces, reception and common areas, restrooms and breakrooms: dusting, trash, high-touch disinfection, glass, vacuuming and mopping, and restocking paper and soap. We schedule after hours, work month-to-month, and every team member is background-checked and insured.',
    facts: [
      { label: 'Schedule', value: 'After hours or weekends' },
      { label: 'Agreement', value: 'Month-to-month' },
      { label: 'Supplies', value: 'Commercial-grade, included' },
      { label: 'Coverage', value: '$2M general liability' },
    ],
    statement: 'Clients judge the business by the lobby and the restroom. Your team feels the difference every Monday morning.',
    checklist: [
      {
        room: 'Workspaces & offices',
        icon: 'office',
        items: [
          'Dust desks, monitors and electronics',
          'Empty individual trash bins',
          'Vacuum carpets and rugs; sweep and mop hard floors',
          'Sanitize high-touch points: doorknobs, light switches',
          'Clean glass doors and interior windows',
        ],
      },
      {
        room: 'Reception & common areas',
        icon: 'sparkle',
        items: [
          'Straighten seating areas and magazines',
          'Dust reception desks and decor',
          'Polish glass entryways',
          'Vacuum high-traffic areas',
          'Sanitize shared equipment: copiers, water coolers',
        ],
      },
      {
        room: 'Breakrooms & restrooms',
        icon: 'coffee',
        items: [
          'Sanitize toilets, sinks and urinals',
          'Restock paper products and soap',
          'Clean microwave interiors and exteriors',
          'Wipe breakroom tables and counters',
          'Mop floors with disinfectant',
        ],
      },
    ],
    notIncluded: [
      'Industrial, warehouse or hazardous-material cleaning',
      'Carpet extraction and floor stripping/waxing',
      'Exterior windows above the ground floor',
      'Medical biohazard waste handling',
    ],
    personas: [
      { title: 'Professional offices', text: 'Law, real estate, insurance, agencies. A clean, quiet office that’s ready before your first meeting.' },
      { title: 'Clinics & studios', text: 'Waiting rooms, restrooms and high-touch surfaces cleaned and disinfected on a reliable schedule.' },
      { title: 'Retail & showrooms', text: 'Glass, floors and fitting areas presented the way your brand deserves, before you open.' },
    ],
    steps: [
      { title: 'Walkthrough', text: 'We visit the space, learn your traffic, security and priorities.' },
      { title: 'Custom proposal', text: 'A scope and schedule built around your hours, month-to-month.' },
      { title: 'Consistent crew', text: 'The same background-checked team, with key and alarm protocols.' },
      { title: 'Check-ins', text: 'We adjust as your business changes. One point of contact, always.' },
    ],
    faqs: [
      { q: 'Do you clean after hours?', a: 'Yes. We offer flexible scheduling, including evenings and weekends, so cleaning never interrupts your staff or clients.' },
      { q: 'Is your staff insured and background-checked?', a: 'Yes. Every team member passes a background check, and the company carries $2M in general liability coverage and is licensed, bonded and insured.' },
      { q: 'Do we need to provide supplies?', a: 'No. We bring commercial-grade equipment and our own eco-friendly products. If your facility requires specific products, we can use them.' },
      { q: 'Do you require a long-term contract?', a: 'No. We work month-to-month and adjust as your business changes. We’d rather earn your business every month.' },
      { q: 'How do you handle keys and alarms?', a: 'With strict key-handling and alarm procedures. Only the background-checked team assigned to your facility has access.' },
    ],
    reviewAuthors: ['Heather Howell', 'Monica Schreiber', 'Sonya Haines', 'Tamara Chisolm'],
    related: ['post-construction-cleaning', 'vacation-rental-airbnb-cleaning', 'deep-cleaning'],
    blog: ['independent-cleaner-vs-cleaning-company-charleston-sc', 'what-house-cleaners-will-not-clean-charleston-sc', 'do-house-cleaners-bring-their-own-supplies-charleston-sc'],
  },

  'post-construction-cleaning': {
    slug: 'post-construction-cleaning',
    name: 'Post-Construction Cleaning',
    shortName: 'Post-Construction',
    serviceType: 'Post-construction cleaning',
    metaTitle: 'Post-Construction Cleaning Charleston SC | Renovation Dust | Star',
    metaDescription:
      'After-renovation and new-build cleaning in Charleston, Summerville & Mount Pleasant: fine dust, stickers, overspray, cabinets and floors.',
    eyebrow: 'Renovations · New builds · Contractors',
    h1: ['After the build,', 'we clear every last bit of dust.'],
    lead:
      'Drywall dust in the cabinets, stickers on the windows, overspray on the fixtures. We clean new and renovated spaces in three phases so you can move in the moment the work is done.',
    heroImage: { src: '/images/post-construction.webp', alt: 'Renovated kitchen being cleaned of construction dust' },
    sideImage: { src: '/images/service-5.jpg', alt: 'Detail cleaning of new fixtures after a remodel' },
    card: 'Three phases: rough, prep, final detail',
    question: 'What is post-construction cleaning?',
    quickAnswer:
      'Post-construction cleaning removes the fine dust and residue a renovation or new build leaves behind. We work in three phases: a rough clean (debris sweep, stickers, heavy dust), a prep clean (HEPA vacuuming, inside cabinets, baseboards, fixtures) and a final detail (floors, fans, outlets, glass). We don’t haul heavy debris, and we start once the trades are finished.',
    facts: [
      { label: 'Phases', value: 'Rough · Prep · Final detail' },
      { label: 'Best time', value: 'After the trades leave' },
      { label: 'Surfaces', value: 'pH-neutral, finish-safe' },
      { label: 'Guarantee', value: 'Free re-clean within 24h' },
    ],
    statement: 'Construction dust is finer than flour, and it lands everywhere. The last step of a beautiful remodel is getting it out.',
    checklist: [
      {
        room: 'Phase 1 · Rough clean',
        icon: 'hammer',
        items: [
          'Clear leftover small debris and packaging',
          'Sweep and vacuum all floors',
          'Remove stickers from new windows and appliances',
          'Wipe large surfaces to lift the heavy dust',
          'First pass on interior windows and tracks',
        ],
      },
      {
        room: 'Phase 2 · Prep clean',
        icon: 'brush',
        items: [
          'Detailed HEPA vacuuming of every room',
          'Clean inside all new cabinets and drawers',
          'Wipe baseboards, trim and door frames',
          'Sanitize new bathroom fixtures and tile',
          'Clean kitchen countertops and appliances',
        ],
      },
      {
        room: 'Phase 3 · Final detail',
        icon: 'sparkle',
        items: [
          'Final mopping and polishing of hard floors',
          'Detail light fixtures and ceiling fans',
          'Wipe electrical outlets and switch plates',
          'Final touch-up of glass and mirrors',
          'Walk-through with you before we leave',
        ],
      },
    ],
    notIncluded: [
      'Hauling lumber, drywall scraps or heavy debris',
      'Hazardous waste disposal',
      'Inside HVAC ductwork (we clean vent covers)',
      'Cleaning while trades are still working',
    ],
    personas: [
      { title: 'Homeowners after a remodel', text: 'The contractor is gone, the dust is not. Get the kitchen or bath you paid for, without the gritty film.' },
      { title: 'General contractors', text: 'Hand over a spotless job. A reliable final clean makes the last walk-through easy.' },
      { title: 'Builders & developers', text: 'Move-in-ready new construction for closings, model homes and listing photos.' },
    ],
    steps: [
      { title: 'Tell us about the project', text: 'Size, scope and the date the trades will be finished.' },
      { title: 'Site assessment', text: 'We confirm the level of dust and debris and plan the phases.' },
      { title: 'Phased cleaning', text: 'Rough, prep and final detail, with finish-safe products.' },
      { title: 'Final walkthrough', text: 'We walk the space with you. Anything missed is fixed within 24 hours.' },
    ],
    faqs: [
      { q: 'Do you remove large construction debris?', a: 'No. We don’t haul heavy materials, large debris or hazardous waste. Our service is the detailed cleaning phase: fine dust, paint specks, stickers and getting the space ready to live in once heavy debris is gone.' },
      { q: 'How long does post-construction cleaning take?', a: 'It depends on the size of the project and the amount of dust. A small kitchen remodel can take a few hours; a new home can take a full day or several phases over a few days. You get a clear timeline with your estimate.' },
      { q: 'Are your products safe for new hardwood and stone?', a: 'Yes. We use pH-neutral, eco-friendly products that won’t scratch, dull or etch new finishes.' },
      { q: 'Do you clean inside HVAC vents?', a: 'We clean vent covers and the areas around them where dust settles. For the ductwork itself, we recommend a dedicated duct-cleaning company.' },
      { q: 'Can you clean while contractors are still working?', a: 'For the best result, schedule the final clean after every trade has finished. Cleaning while work continues means new dust settles right back.' },
    ],
    reviewAuthors: ['Amanda Weatherford', 'Lama Hop', 'Heather Howell', 'Katie Whitehouse'],
    related: ['move-in-move-out-cleaning', 'deep-cleaning', 'commercial-office-cleaning'],
    blog: ['how-to-clean-house-after-construction-checklist-charleston-sc', 'how-to-clean-hardwood-floors-charleston-sc-heart-pine', 'how-long-does-house-cleaning-take-charleston-sc'],
  },
};

export const SERVICE_ORDER: ServiceSlug[] = [
  'residential-cleaning',
  'deep-cleaning',
  'move-in-move-out-cleaning',
  'vacation-rental-airbnb-cleaning',
  'commercial-office-cleaning',
  'post-construction-cleaning',
];

/** Side-by-side of the three home cleans. Used on the services hub and the home-cleaning pages. */
export const COMPARISON = {
  columns: ['Regular clean', 'Deep clean', 'Move-in/out'],
  rows: [
    { task: 'Counters, sinks, appliance fronts', v: [true, true, true] },
    { task: 'Toilets, showers, tubs, mirrors', v: [true, true, true] },
    { task: 'Dusting, vacuuming, mopping', v: [true, true, true] },
    { task: 'Inside the microwave', v: [true, true, true] },
    { task: 'Hand-wiped baseboards, frames, sills', v: [false, true, true] },
    { task: 'Grout, hard water and soap scum', v: [false, true, true] },
    { task: 'Ceiling fans, vents, blinds', v: [false, true, true] },
    { task: 'Under light furniture', v: [false, true, 'Empty home'] },
    { task: 'Inside oven and refrigerator', v: [false, 'On request', true] },
    { task: 'Inside cabinets and drawers', v: [false, false, true] },
  ] as { task: string; v: (boolean | string)[] }[],
};
