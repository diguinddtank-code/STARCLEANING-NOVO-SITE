/**
 * Service-area content for /locations/[city] and the /deep-cleaning-[city]-sc pages.
 *
 * Reviews are intentionally NOT stored here: location pages show verified Google reviews from
 * data/reviews.ts. Neighborhoods and ZIP codes match public/llms.txt. Hours and policies match
 * lib/businessConfig.ts; do not promise availability that isn't offered.
 */

export interface LocationData {
  name: string;
  slug: string;
  county: string;
  wiki: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  intro: string;
  localDetails: string;
  landmarks: string[];
  neighborhoods: string[];
  zips: string[];
  nearby: string[];
  heroImage: { src: string; alt: string };
  why: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  serviceDescriptions: string[];
  checklistExtra: { standard: string; deep: string };
  deep: { headline: string; paragraphs: string[] };
  coordinates: { lat: number; lng: number };
}

export const locationsData: Record<string, LocationData> = {
  charleston: {
    name: 'Charleston',
    slug: 'charleston',
    county: 'Charleston County',
    wiki: 'https://en.wikipedia.org/wiki/Charleston,_South_Carolina',
    metaTitle: 'House Cleaning Charleston SC | Veteran-Owned Maids | Star Cleaning',
    metaDescription:
      'House cleaning in Charleston, SC: downtown, South of Broad, West Ashley. Recurring, deep and move-out cleaning. Veteran-owned, 4.9★ on Google, free quote.',
    tagline: 'From South of Broad to West Ashley',
    intro:
      'Historic Charleston homes ask for a gentler touch than a typical house. Original heart-pine floors, antique plaster and brass fixtures near South of Broad and the historic peninsula don’t hold up to harsh chemicals, and our humid, salty air pushes mildew into bathroom grout and window sills faster than almost anywhere else in the Lowcountry. Our veteran-owned, background-checked team uses pH-neutral products that protect delicate surfaces while still getting a genuinely deep clean, and puts extra time into grout lines, exhaust vents and wood trim. Spend your Saturday at the City Market or walking The Battery. We’ll take care of the rest.',
    localDetails:
      'We clean homes on the historic peninsula, South of Broad, Harleston Village, Wagener Terrace and West Ashley. Charleston’s year-round humidity and salt air speed up mildew in bathrooms and on window sills, so our checklists give grout, exhaust vents and wood trim extra time.',
    landmarks: ['South of Broad', 'The Battery', 'City Market', 'West Ashley'],
    neighborhoods: ['South of Broad', 'French Quarter', 'Harleston Village', 'Radcliffeborough', 'Cannonborough-Elliotborough', 'Wagener Terrace', 'Avondale', 'Carolina Bay'],
    zips: ['29401', '29403', '29407', '29414'],
    nearby: ['north-charleston', 'james-island', 'mount-pleasant', 'daniel-island'],
    heroImage: { src: '/images/residential.png', alt: 'Star Cleaning SC team cleaning a bright Charleston living room' },
    why: [
      { title: 'Gentle on historic homes', desc: 'pH-neutral products and hand-detailing for heart-pine floors, original plaster, brass and trim.' },
      { title: 'Built for Lowcountry humidity', desc: 'Extra time on grout, vents, sills and closets, where salt air and moisture show up first.' },
      { title: 'Peninsula logistics handled', desc: 'Narrow streets, permits, gates and lockboxes: tell us once and your team plans around it.' },
    ],
    faqs: [
      { q: 'Do you clean historic homes downtown without damaging original materials?', a: 'Yes. We use pH-neutral, non-abrasive products on heart-pine floors, original plaster and antique brass, and hand-wipe delicate trim instead of using harsh scrubbing tools that could strip finishes.' },
      { q: 'Do you handle parking and access on the peninsula?', a: 'Yes. Our teams are used to downtown parking and narrow alleys. Tell us about permits, gate codes or lockboxes when you book and we plan around them.' },
      { q: 'Do I need to be home while you clean my Charleston home?', a: 'No. Many clients give us a door code or lockbox while they’re at work or out enjoying the city. Every team member is background-checked, and the company is insured.' },
      { q: 'How much does house cleaning cost in Charleston?', a: 'It depends on square footage, bedrooms and bathrooms, and the type of clean. Request a free quote online and we’ll confirm your exact price personally.' },
      { q: 'Are your products safe for pets?', a: 'Yes. Charleston is a dog-friendly city, and we use eco-friendly, pet-safe products in every home.' },
      { q: 'Do you offer move-out cleaning in Charleston?', a: 'Yes, across the peninsula and West Ashley, including inside appliances, cabinets and closets, so the home is ready for the next resident.' },
    ],
    serviceDescriptions: [
      'Weekly or bi-weekly upkeep for peninsula condos, South of Broad singles and West Ashley family homes.',
      'Baseboard-to-ceiling-fan resets that cut through humidity, salt air and historic dust.',
      'Move-in and move-out cleans for Charleston’s fast-turning rental and resale market.',
      'Same-day turnovers for downtown and peninsula Airbnbs, timed to your guest checkout.',
      'Office and retail cleaning for downtown businesses, scheduled after hours.',
      'Post-renovation dust removal for historic restorations and new builds alike.',
    ],
    checklistExtra: {
      standard: 'Extra attention to humidity-prone bathroom vents common in older Charleston homes',
      deep: 'Hand-detailing of historic trim, moldings and heart-pine floors',
    },
    deep: {
      headline: 'Historic finishes, coastal humidity, and the dust in between',
      paragraphs: [
        'Charleston’s older homes collect dust in places newer homes don’t have: crown molding, plaster medallions, louvered shutters and tall baseboards. A deep clean reaches all of it by hand.',
        'Salt air and humidity leave a film on fixtures and push mildew into grout and window sills. We scrub grout, cut hard-water and soap-scum buildup, and wipe vents and sills where moisture collects.',
        'Heart-pine floors, original plaster and antique brass need pH-neutral products. We use them on every visit, so the reset never comes at the cost of your finishes.',
      ],
    },
    coordinates: { lat: 32.7765, lng: -79.9311 },
  },

  'north-charleston': {
    name: 'North Charleston',
    slug: 'north-charleston',
    county: 'Charleston County',
    wiki: 'https://en.wikipedia.org/wiki/North_Charleston,_South_Carolina',
    metaTitle: 'House Cleaning North Charleston SC | Park Circle & More | Star',
    metaDescription:
      'House cleaning in North Charleston, SC: Park Circle, Oak Terrace, Coosaw Creek. Recurring, deep and move-out cleaning. Veteran-owned, 4.9★ on Google.',
    tagline: 'Park Circle, Oak Terrace & beyond',
    intro:
      'North Charleston moves fast. Between long shifts, commutes and Park Circle’s evening rush, most residents don’t have a spare weekend for scrubbing floors. Our veteran-owned, background-checked team knows the difference between a Park Circle bungalow, a townhome off Rivers Avenue and an apartment near Joint Base Charleston, and cleans each one the way it needs. Pet-safe, eco-friendly products on every visit, whether it’s a weekly clean or a full post-construction cleanup. Focus on your week. The house is on us.',
    localDetails:
      'Our North Charleston clients are concentrated around Park Circle, Oak Terrace Preserve, Coosaw Creek and the neighborhoods near Joint Base Charleston. The area’s mix of apartments, townhomes and older single-family homes means we scope and staff each job to the home, not a template.',
    landmarks: ['Park Circle', 'Riverfront Park', 'Joint Base Charleston', 'Tanger Outlets'],
    neighborhoods: ['Park Circle', 'Oak Terrace Preserve', 'Coosaw Creek', 'Charleston Farms'],
    zips: ['29404', '29405', '29406', '29418'],
    nearby: ['charleston', 'ladson', 'summerville', 'daniel-island'],
    heroImage: { src: '/images/team3.png', alt: 'Star Cleaning SC team members cleaning a dining room in North Charleston' },
    why: [
      { title: 'Made for full weeks', desc: 'Long shifts and commutes leave little time. A standing visit keeps the house handled without you thinking about it.' },
      { title: 'Rentals turned fast', desc: 'Apartments and townhomes between tenants get a move-out clean that’s ready for the walk-through.' },
      { title: 'Military-family friendly', desc: 'Veteran-owned and used to working around PCS moves and base schedules.' },
    ],
    faqs: [
      { q: 'Can you clean apartments and rentals near Park Circle between tenants?', a: 'Yes. North Charleston has one of our highest volumes of apartment and rental turnovers, and our move-out clean covers inside cabinets, appliances and closets.' },
      { q: 'Are your cleaners background-checked?', a: 'Yes. Every team member is background-checked and trained before entering a home, and the company is licensed, bonded and insured.' },
      { q: 'Do I need to provide cleaning supplies?', a: 'No. We bring professional, pet-safe supplies and equipment to every job.' },
      { q: 'How do I get a quote for North Charleston?', a: 'Fill out the one-minute form with your home’s details, or call or text (843) 297-9935. We confirm your exact price personally.' },
      { q: 'What happens if I’m not happy with the cleaning?', a: 'Tell us within 24 hours and we come back to re-clean the area for free.' },
      { q: 'What are your hours?', a: 'Monday to Friday 9 AM–5 PM and Saturday 9 AM–3 PM. Tell us what works for your schedule when you request a quote.' },
    ],
    serviceDescriptions: [
      'Recurring cleaning for Park Circle bungalows, townhomes and family homes.',
      'Deep cleaning that resets baseboards, fans, vents and bathrooms top to bottom.',
      'Move-in and move-out cleaning for North Charleston’s busy rental market.',
      'Turnover cleaning for short-term rentals around Park Circle and the riverfront.',
      'Commercial cleaning for small offices and retail spaces across North Charleston.',
      'Post-construction cleanup for renovations and new builds.',
    ],
    checklistExtra: {
      standard: 'Entryway and stair pass for high-traffic family homes',
      deep: 'Detail clean of vents, blinds and baseboards in older Park Circle homes',
    },
    deep: {
      headline: 'Busy homes, older floors, and dust that piles up fast',
      paragraphs: [
        'Older Park Circle homes have tall baseboards, original floors and window tracks that hold years of dust. A deep clean hand-wipes all of it.',
        'Rental turnovers and new move-ins are where a deep clean pays off most: inside cabinets and appliances, grout and every sill before the next chapter starts.',
        'Once the house is reset, a bi-weekly plan keeps it there in a fraction of the time.',
      ],
    },
    coordinates: { lat: 32.8546, lng: -79.9748 },
  },

  ladson: {
    name: 'Ladson',
    slug: 'ladson',
    county: 'Berkeley, Charleston & Dorchester Counties',
    wiki: 'https://en.wikipedia.org/wiki/Ladson,_South_Carolina',
    metaTitle: 'House Cleaning Ladson SC | Veteran-Owned | Star Cleaning SC',
    metaDescription:
      'House cleaning in Ladson, SC near Exchange Park, Wescott and Joint Base Charleston. Recurring, deep and move-out cleaning. Veteran-owned, 4.9★ on Google.',
    tagline: 'Near Exchange Park, Wescott & the base',
    intro:
      'A lot of our Ladson clients are military families near Joint Base Charleston, and between deployments, PCS moves and fair season at Exchange Park, a spotless house is usually the last thing on the schedule. As a veteran-owned company, we get it. Ladson’s clay soil tracks into entryways and hallways faster than typical suburban dirt, so our checklists give floors and baseboards extra attention. Every visit uses pet-safe products and a background-checked crew, whether you need a one-time deep clean or a standing plan. Spend your weekend at Wescott or the fair. We’ll already be at the house.',
    localDetails:
      'We serve Ladson’s family neighborhoods around Exchange Park, Wescott and the areas near Joint Base Charleston. Red clay tracks easily into entryways and hallways here, so floors and baseboards get extra attention on every route.',
    landmarks: ['Exchange Park', 'Wescott', 'Joint Base Charleston'],
    neighborhoods: ['Wescott Plantation', 'Exchange Park area', 'College Park Road corridor'],
    zips: ['29456'],
    nearby: ['north-charleston', 'summerville', 'charleston'],
    heroImage: { src: '/images/team2.png', alt: 'Star Cleaning SC team member making a bed in a Ladson home' },
    why: [
      { title: 'Veteran-owned, military-family friendly', desc: 'We understand PCS timelines and deployments, and plan cleans around them.' },
      { title: 'Red clay, handled', desc: 'Entryways, hallways and baseboards get an extra pass for the clay that tracks in from yards and driveways.' },
      { title: 'Family & pet safe', desc: 'Eco-friendly, pet-safe products that are tough on dirt and gentle on kids and dogs.' },
    ],
    faqs: [
      { q: 'Does a deep clean remove red clay from floors and entryways?', a: 'In most cases, yes. Our deep clean includes hand-scrubbing entryway tile and hallway floors to lift ground-in clay residue that regular mopping leaves behind.' },
      { q: 'Can you work around a PCS move?', a: 'Yes. We work with many military families near Joint Base Charleston. Book your move-out clean as soon as you have dates and we’ll fit it to your timeline.' },
      { q: 'Are you insured and bonded?', a: 'Yes. Star Cleaning SC is licensed, bonded and insured, with $2M in general liability coverage.' },
      { q: 'What’s included in a standard cleaning?', a: 'Dusting, vacuuming, mopping, full bathroom sanitation, kitchen counters and appliance fronts, the microwave inside and out, and making beds.' },
      { q: 'Do I need to be home?', a: 'No. Most Ladson clients give us a garage code or lockbox so we can clean while they’re at work or running errands.' },
      { q: 'Do you offer move-out cleaning in Ladson?', a: 'Yes, for homes, townhouses and apartments, including inside cabinets, drawers and appliances.' },
    ],
    serviceDescriptions: [
      'Family-friendly recurring cleaning for Ladson’s growing neighborhoods.',
      'Deep cleaning that clears clay dust and yard debris tracked in from newer subdivisions.',
      'Move-in and move-out cleaning for PCS moves, sales and rental turnovers.',
      'Turnover cleaning for short-term rentals near Exchange Park.',
      'Commercial cleaning for small offices and retail spaces.',
      'Post-construction cleanup for new builds and additions.',
    ],
    checklistExtra: {
      standard: 'Extra floor pass for red clay tracked in from yards and driveways',
      deep: 'Hand-scrubbed entryway tile and hallway floors',
    },
    deep: {
      headline: 'Red clay, busy households, and moving season',
      paragraphs: [
        'Ladson’s red clay works into entryway grout and hallway floors where a mop can’t reach. A deep clean hand-scrubs it out.',
        'Military families moving in or out need a home that’s ready on a fixed date. We clean inside every cabinet, drawer and appliance to make the hand-off easy.',
        'For growing families, a seasonal deep clean resets the house, and a recurring plan keeps it from getting away from you again.',
      ],
    },
    coordinates: { lat: 33.0107, lng: -80.1101 },
  },

  summerville: {
    name: 'Summerville',
    slug: 'summerville',
    county: 'Dorchester & Berkeley Counties',
    wiki: 'https://en.wikipedia.org/wiki/Summerville,_South_Carolina',
    metaTitle: 'House Cleaning Summerville SC | Nexton, Cane Bay | Star Cleaning',
    metaDescription:
      'House cleaning in Summerville, SC from our home base: Nexton, Cane Bay, Carnes Crossroads, historic downtown. Veteran-owned, 4.9★ on Google, free quote.',
    tagline: 'Our home base, from Nexton to downtown',
    intro:
      'Summerville is home for us; it’s where Star Cleaning SC is based. And every spring here means one thing: pollen. Heavy pine and azalea pollen coats window sills, blinds and air vents faster than almost anywhere else in the Lowcountry, whether you’re in a historic downtown bungalow or a new build in Nexton or Cane Bay. Our checklists are built around it, with extra dusting and vacuuming during pollen season, and our veteran-owned, background-checked team uses pet-safe products from Carnes Crossroads to the historic district. Go enjoy the Flowertown Festival or a walk through Azalea Park. We’ll handle the pollen.',
    localDetails:
      'We clean homes throughout Nexton, Cane Bay Plantation, Carnes Crossroads, The Ponds and historic downtown Summerville. Pine and azalea pollen coats sills, vents and blinds every spring, so our checklists add extra dusting and vacuuming during pollen season.',
    landmarks: ['Azalea Park', 'Hutchinson Square', 'Nexton', 'Cane Bay'],
    neighborhoods: ['Nexton', 'Cane Bay Plantation', 'Carnes Crossroads', 'The Ponds', 'Historic Downtown', 'Pine Forest'],
    zips: ['29483', '29485', '29486'],
    nearby: ['ladson', 'north-charleston', 'charleston'],
    heroImage: { src: '/images/residential.png', alt: 'Star Cleaning SC team cleaning a bright Summerville living room' },
    why: [
      { title: 'Local, not a franchise', desc: 'We’re based in Summerville. When you call, you talk to us.' },
      { title: 'Pollen season, planned for', desc: 'Sills, vents, blinds and rugs get extra passes when the pines and azaleas bloom.' },
      { title: 'New-build ready', desc: 'Fine construction dust in Nexton and Cane Bay homes, cleared from cabinets, floors and vents.' },
    ],
    faqs: [
      { q: 'How bad is pollen season for Summerville homes, and does cleaning help?', a: 'Pine and azalea pollen coats Summerville homes heavily each spring, settling into vents, blinds and carpets. Regular dusting plus a seasonal deep clean before and after peak pollen keeps surfaces and indoor air noticeably cleaner.' },
      { q: 'Do you clean new builds in Nexton or Cane Bay before move-in?', a: 'Yes. We regularly clean new construction to remove fine drywall dust and residue from cabinets, floors and vents before families move in.' },
      { q: 'Are you really based in Summerville?', a: 'Yes. Star Cleaning SC is a veteran-owned, independent company based in Summerville. We’re not a franchise or a call center.' },
      { q: 'How much does house cleaning cost in Summerville?', a: 'It depends on the size of your home and the type of clean. Get a free quote online and we confirm the exact price with you personally.' },
      { q: 'Are your products safe for kids and pets?', a: 'Yes. We use eco-friendly, pet-safe products in every home.' },
      { q: 'Do I need to provide a vacuum or mop?', a: 'No. Your team arrives with all the tools, vacuums and supplies.' },
    ],
    serviceDescriptions: [
      'Recurring cleaning for historic downtown homes and newer Nexton and Cane Bay builds.',
      'Deep cleaning focused on pollen and dust from Flowertown’s pine and azalea season.',
      'Move-in and move-out cleaning for Summerville’s fast-growing neighborhoods.',
      'Turnover cleaning for short-term rentals near Azalea Park and downtown.',
      'Commercial cleaning for offices and shops along Main Street and around Nexton.',
      'Post-construction cleanup for new builds in Nexton, Cane Bay and Carnes Crossroads.',
    ],
    checklistExtra: {
      standard: 'Window sill and vent wipe-down to clear seasonal pine pollen',
      deep: 'Extra vacuuming pass to pull pollen and dust out of carpets and rugs',
    },
    deep: {
      headline: 'Pine pollen, new-build dust, and Flowertown humidity',
      paragraphs: [
        'Summerville’s pines and azaleas produce a sticky yellow pollen that gets past window seals and settles into blinds, sills, vents and upholstery.',
        'Growth in Nexton, Cane Bay and Carnes Crossroads means fine construction dust settles inside nearby homes for months. We clear it from cabinets, floors and vent covers.',
        'A deep clean washes the film off blinds and sills, scrubs thresholds, and vacuums vents and rugs, so the house feels fresh again after pollen season.',
      ],
    },
    coordinates: { lat: 33.0185, lng: -80.1756 },
  },

  'james-island': {
    name: 'James Island',
    slug: 'james-island',
    county: 'Charleston County',
    wiki: 'https://en.wikipedia.org/wiki/James_Island,_South_Carolina',
    metaTitle: 'House Cleaning James Island SC | Near Folly Beach | Star Cleaning',
    metaDescription:
      'House cleaning on James Island, SC near Folly Beach and Riverland Terrace: sand, salt air and humidity handled. Veteran-owned, pet-safe, 4.9★ on Google.',
    tagline: 'Sand, salt air and marsh humidity, handled',
    intro:
      'Living minutes from Folly Beach means sand and salt air end up in your house whether you track them in on purpose or not. Salt residue builds up on bathroom fixtures and window tracks faster than inland, and fine sand works into grout lines within days. Our veteran-owned, background-checked team cuts mineral film from fixtures and gives entryway floors extra attention near Riverland Drive and James Island County Park, with pet-safe, eco-friendly products on every visit. Take the dog to the county park or head out to Folly. We’ll get the sand out of the grout.',
    localDetails:
      'James Island clients are concentrated near Folly Beach, James Island County Park, Riverland Terrace and Stiles Point. Sand and salt-air residue build up faster here than inland, so entryways, window tracks and bathroom fixtures get extra attention on every visit.',
    landmarks: ['Folly Beach', 'James Island County Park', 'Riverland Drive'],
    neighborhoods: ['Riverland Terrace', 'Stiles Point', 'Lighthouse Point', 'Clearview', 'Folly Road corridor'],
    zips: ['29412'],
    nearby: ['charleston', 'johns-island', 'mount-pleasant'],
    heroImage: { src: '/images/team2.png', alt: 'Star Cleaning SC team member making a bed in a James Island home' },
    why: [
      { title: 'Coastal cleaning', desc: 'Sand in the grout, salt film on fixtures, mildew in the closets: we know what beach living does to a house.' },
      { title: 'Rental-ready turnovers', desc: 'Same-day turnovers for vacation rentals near Folly Beach, with linens, restocking and damage photos.' },
      { title: 'Pet-safe products', desc: 'James Island loves its dogs. Every product we use is safe for them.' },
    ],
    faqs: [
      { q: 'Can you clean up sand and salt residue from beach trips?', a: 'Yes, it’s one of our most common James Island requests. Entryway floors, window tracks and bathroom fixtures get extra attention to clear tracked-in sand and salt-air film.' },
      { q: 'Do you clean Airbnbs near Folly Beach between guests?', a: 'Yes. We offer same-day turnovers for vacation rentals near Folly Beach and James Island County Park, timed around your checkout and check-in.' },
      { q: 'Are your cleaners insured and background-checked?', a: 'Yes. Every team member is background-checked, and the company is licensed, bonded and insured.' },
      { q: 'Do I need to be home?', a: 'No. Many clients leave a key or door code so we can clean while they’re at work or out on the island.' },
      { q: 'How much does house cleaning cost on James Island?', a: 'It depends on square footage, rooms and the type of service. Get a free quote online and we’ll confirm the price with you.' },
      { q: 'What if I’m not happy with the cleaning?', a: 'Call us within 24 hours and we come back to re-clean the area at no cost.' },
    ],
    serviceDescriptions: [
      'Recurring cleaning for James Island homes dealing with sand, salt air and humidity.',
      'Deep cleaning that tackles salt residue and sand buildup near Folly Beach and the marsh.',
      'Move-in and move-out cleaning for rentals, condos and single-family homes.',
      'Turnover cleaning for Folly Beach-area Airbnbs and vacation rentals.',
      'Commercial cleaning for offices and shops along Folly Road and Maybank Highway.',
      'Post-construction cleanup for renovations and new builds near the marsh.',
    ],
    checklistExtra: {
      standard: 'Extra floor and entryway pass to clear tracked-in sand',
      deep: 'Salt-film removal on bathroom fixtures and window tracks',
    },
    deep: {
      headline: 'Sand in the grout and salt on the glass',
      paragraphs: [
        'Fine beach sand settles into tile grout, window tracks and door thresholds within days. A deep clean scrubs it out instead of pushing it around.',
        'Salt air leaves a hazy mineral film on shower glass, faucets and windows. We cut it back so fixtures shine again.',
        'Marsh humidity feeds mildew in closets, grout and sills. Detailed scrubbing and drying keep it from coming right back.',
      ],
    },
    coordinates: { lat: 32.7302, lng: -79.954 },
  },

  'daniel-island': {
    name: 'Daniel Island',
    slug: 'daniel-island',
    county: 'Berkeley County',
    wiki: 'https://en.wikipedia.org/wiki/Daniel_Island',
    metaTitle: 'House Cleaning Daniel Island SC | Stone-Safe, Detail-First | Star',
    metaDescription:
      'House cleaning on Daniel Island, SC: natural stone, custom cabinetry and hardwood cared for with pH-neutral products. Veteran-owned, 4.9★ on Google.',
    tagline: 'Detail-first care for finished homes',
    intro:
      'Many Daniel Island homes are finished with natural stone, custom cabinetry and wide-plank hardwood, materials that don’t respond well to a generic all-purpose spray. We bring 18 years of experience and pH-neutral, stone-safe products, hand-detailing instead of one-size-fits-all methods. Our veteran-owned, background-checked team coordinates gate and community access ahead of time, so you don’t need to be home. Whether it’s weekly upkeep or a full deep clean, we treat your home like the investment it is. Enjoy the island. We’ll handle the details.',
    localDetails:
      'We clean homes throughout Daniel Island’s neighborhoods, near Center Park, Smythe Park, the golf courses and the Wando River trails. Natural stone, custom millwork and hardwood get non-abrasive, pH-neutral products and hand-detailing.',
    landmarks: ['Center Park', 'Smythe Park', 'Wando River Trails', 'Credit One Stadium'],
    neighborhoods: ['Center Park', 'Smythe Park', 'Daniel Island Park', 'Codner’s Ferry Park'],
    zips: ['29492'],
    nearby: ['charleston', 'mount-pleasant', 'north-charleston'],
    heroImage: { src: '/images/team3.png', alt: 'Star Cleaning SC team members detailing a dining room on Daniel Island' },
    why: [
      { title: 'Finish-safe products', desc: 'pH-neutral, non-abrasive cleaners for marble, quartz, granite, hardwood and custom cabinetry.' },
      { title: 'Access coordinated', desc: 'Gate codes, visitor registration and lockboxes arranged once, so you never need to be home.' },
      { title: 'Detail-first', desc: 'Hand-detailing of millwork, fixtures and hardware, the parts a fast clean skips.' },
    ],
    faqs: [
      { q: 'Are your products safe for natural stone and custom hardwood?', a: 'Yes. We use pH-neutral, non-abrasive products on natural stone, quartz and hardwood, and avoid acidic or abrasive cleaners that could dull or etch high-end finishes.' },
      { q: 'Can your team access gated communities on Daniel Island?', a: 'Yes. Share any visitor registration details or codes when you book, and we coordinate access ahead of time.' },
      { q: 'How do I know I can trust your cleaners?', a: 'Every team member is background-checked and trained before entering a home, and the company carries $2M in general liability coverage.' },
      { q: 'What’s included in a deep clean?', a: 'Everything in a regular clean plus hand-wiped baseboards and frames, scrubbed grout, hard-water removal, ceiling fans, vents and blinds, and cleaning under light furniture.' },
      { q: 'How much does house cleaning cost on Daniel Island?', a: 'Pricing depends on square footage, rooms and the service. Request a free quote online and we confirm the exact price with you.' },
      { q: 'Do I need to provide equipment?', a: 'No. Your team arrives with professional vacuums, mops and eco-friendly, pet-safe supplies.' },
    ],
    serviceDescriptions: [
      'Recurring cleaning for Daniel Island’s neighborhoods and golf-course homes.',
      'Deep cleaning tailored to high-end finishes, custom cabinetry and delicate floors.',
      'Move-in and move-out cleaning for home and condo turnovers.',
      'Turnover cleaning for furnished rentals and guest homes.',
      'Commercial cleaning for offices in the Daniel Island town center.',
      'Post-construction cleanup for new builds and remodels on the island.',
    ],
    checklistExtra: {
      standard: 'Non-abrasive polish of stone countertops and cabinet hardware',
      deep: 'Detailed care for custom millwork, hardwood and natural stone',
    },
    deep: {
      headline: 'High-end finishes deserve a careful reset',
      paragraphs: [
        'Marble, quartz and granite etch or dull with the wrong cleaner. Our deep clean uses pH-neutral products and soft tools on every stone surface.',
        'Custom cabinetry, built-ins and crown molding collect fine dust in every profile. We hand-detail them, top to bottom.',
        'Wide-plank hardwood gets dry-dusted and damp-cleaned the right way, so it looks rich, not cloudy.',
      ],
    },
    coordinates: { lat: 32.8605, lng: -79.9016 },
  },

  'johns-island': {
    name: 'Johns Island',
    slug: 'johns-island',
    county: 'Charleston County',
    wiki: 'https://en.wikipedia.org/wiki/Johns_Island',
    metaTitle: 'House Cleaning Johns Island SC | Farmhouses & New Builds | Star',
    metaDescription:
      'House cleaning on Johns Island, SC: farmhouses, new builds and waterfront homes off River Road and Maybank Highway. Veteran-owned, 4.9★ on Google.',
    tagline: 'From River Road farmhouses to new builds',
    intro:
      'Johns Island homes see a different kind of dirt than the rest of Charleston: fine dust and grit from unpaved roads near River Road and Maybank Highway, plus leftover construction dust in the newer neighborhoods going up near the Angel Oak. We scope each visit around the actual square footage, since so many properties here sit on larger lots, and put extra time into entryway floors, window sills and air vents. Veteran-owned, background-checked and pet-safe, whether you’re on a working farm, in a new build or on the water. Enjoy the quieter side of the Lowcountry. We’ll handle the dust.',
    localDetails:
      'We clean homes along River Road, Maybank Highway and the newer neighborhoods near the Angel Oak. Unpaved roads, farmland and active construction mean more dust tracked indoors, so entryways, sills and vents get extra time.',
    landmarks: ['Angel Oak', 'River Road', 'Maybank Highway', 'Stono River'],
    neighborhoods: ['Maybank Highway corridor', 'River Road', 'Fenwick Hall', 'Kiawah River area'],
    zips: ['29455'],
    nearby: ['james-island', 'charleston'],
    heroImage: { src: '/images/team3.png', alt: 'Star Cleaning SC team members cleaning a Johns Island home' },
    why: [
      { title: 'Larger homes, scoped right', desc: 'Pricing and staffing built around your real square footage, not a suburban template.' },
      { title: 'Dust from the road and the build', desc: 'Entryways, sills and vents get extra time for farm-road grit and construction dust.' },
      { title: 'Trusted while you’re away', desc: 'Many waterfront owners are away for long stretches. We coordinate access and lock up properly.' },
    ],
    faqs: [
      { q: 'Do you clean homes on larger rural properties?', a: 'Yes. Many Johns Island clients have larger homes on bigger lots, and we scope the visit and price around the actual square footage.' },
      { q: 'Can you handle post-construction cleaning for new developments?', a: 'Yes. With the growth off River Road and Maybank Highway, post-construction and first move-in cleans are among our most requested services here.' },
      { q: 'Do you clean waterfront homes while owners are away?', a: 'Yes. We regularly work with owners who are away for extended periods, coordinating access and securing the home after each visit.' },
      { q: 'Are your products safe for pets?', a: 'Yes. We use eco-friendly, pet-safe products for household pets like dogs and cats.' },
      { q: 'How much does house cleaning cost on Johns Island?', a: 'It depends on square footage, bedrooms and bathrooms, and the service. Request a free quote and we build the price around your property.' },
      { q: 'Do I need to be home?', a: 'No. Many rural and waterfront clients provide a gate code or lockbox. Every team member is background-checked.' },
    ],
    serviceDescriptions: [
      'Recurring cleaning for farmhouses, new builds and larger properties.',
      'Deep cleaning that clears road and construction dust from vents, sills and floors.',
      'Move-in and move-out cleaning for Johns Island’s new neighborhoods.',
      'Turnover cleaning for guest cottages and short-term rentals.',
      'Commercial cleaning for offices and shops along Maybank Highway.',
      'Post-construction cleanup for new builds near the Angel Oak and River Road.',
    ],
    checklistExtra: {
      standard: 'Extra entryway pass for dust tracked in from unpaved roads',
      deep: 'Vent and window-sill detailing for homes near active construction',
    },
    deep: {
      headline: 'Farm-road grit and new-construction dust',
      paragraphs: [
        'Unpaved roads and farmland send fine grit into entryways, sills and vents. A deep clean pulls it out of the corners regular cleaning can’t reach.',
        'New builds near the Angel Oak and River Road hold construction dust inside cabinets and vent covers long after move-in. We clear it out.',
        'Larger homes get a properly sized team, so the deep clean is thorough without taking all day.',
      ],
    },
    coordinates: { lat: 32.7247, lng: -80.0398 },
  },

  'mount-pleasant': {
    name: 'Mount Pleasant',
    slug: 'mount-pleasant',
    county: 'Charleston County',
    wiki: 'https://en.wikipedia.org/wiki/Mount_Pleasant,_South_Carolina',
    metaTitle: 'House Cleaning Mount Pleasant SC | Old Village to Carolina Park',
    metaDescription:
      'House cleaning in Mount Pleasant, SC: Old Village, Park West, Carolina Park, Dunes West. Recurring, deep and move-out. Veteran-owned, 4.9★ on Google.',
    tagline: 'From the Old Village to Carolina Park',
    intro:
      'Mount Pleasant isn’t one neighborhood, it’s a dozen, and each needs something different. A 1940s cottage in the Old Village has original hardwood that doesn’t like harsh products, while a five-year-old build in Carolina Park or Park West is more likely fighting leftover construction dust. Near Shem Creek, it’s marsh humidity; further inland in Snee Farm or Dunes West, it’s busy family life. Our veteran-owned, background-checked team adjusts to your home’s age and finishes, with pet-safe products every time. Grab dinner on Shem Creek. That’s our job, not yours.',
    localDetails:
      'We regularly clean homes in the Old Village, Snee Farm, Belle Hall, Park West, Carolina Park, Dunes West and RiverTowne. Older homes get gentler products on original finishes; newer subdivisions get extra attention to construction dust and marsh humidity.',
    landmarks: ['Old Village', 'Shem Creek', 'Patriots Point', 'Carolina Park'],
    neighborhoods: ['Old Village', 'Snee Farm', 'Belle Hall', 'Park West', 'Carolina Park', 'Dunes West', 'RiverTowne'],
    zips: ['29464', '29466'],
    nearby: ['daniel-island', 'charleston', 'james-island'],
    heroImage: { src: '/images/residential.png', alt: 'Star Cleaning SC team cleaning a Mount Pleasant living room' },
    why: [
      { title: 'Old Village to new builds', desc: 'Gentle products for original floors and fixtures; detail work for construction dust in newer homes.' },
      { title: 'Marsh humidity, managed', desc: 'Closets, grout and sills near Shem Creek and the marsh get extra attention against mildew.' },
      { title: 'Family & pet friendly', desc: 'Safe for kids and the dogs who love Mount Pleasant’s parks and beaches.' },
    ],
    faqs: [
      { q: 'How do you handle older homes in the Old Village?', a: 'We use gentler, pH-neutral products and hand-cleaning on original hardwood, vintage fixtures and older surfaces instead of harsh chemicals.' },
      { q: 'Can you help with humidity and mildew near Shem Creek?', a: 'Yes. Homes near the marsh and creek see more mildew than homes inland, so we give bathroom grout, closets and window sills extra attention.' },
      { q: 'Do you service Carolina Park and Park West?', a: 'Yes, they’re some of our fastest-growing areas, from post-construction cleans for new builds to recurring service for established households.' },
      { q: 'Do I need to be home?', a: 'No. Many clients provide a door code or lockbox. Our team is background-checked and the company is insured.' },
      { q: 'How much does house cleaning cost in Mount Pleasant?', a: 'It depends on square footage, rooms and the service. Request a free quote online and we confirm the exact price with you.' },
      { q: 'Do you offer move-out cleaning in Mount Pleasant?', a: 'Yes, from the Old Village to Carolina Park, including inside all appliances and cabinets.' },
    ],
    serviceDescriptions: [
      'Recurring cleaning for Old Village homes and family subdivisions alike.',
      'Deep cleaning that addresses marsh humidity and mildew near Shem Creek.',
      'Move-in and move-out cleaning for Mount Pleasant’s resale and new-construction markets.',
      'Turnover cleaning for vacation rentals near Shem Creek and the Isle of Palms connector.',
      'Commercial cleaning for offices and shops along Coleman Boulevard and Johnnie Dodds.',
      'Post-construction cleanup for new builds in Carolina Park, Park West and Dunes West.',
    ],
    checklistExtra: {
      standard: 'Extra dusting pass for homes near the marsh and Shem Creek',
      deep: 'Mildew and moisture detail for closets, sills and bathroom grout',
    },
    deep: {
      headline: 'Marsh humidity, original floors and new-build dust',
      paragraphs: [
        'Near Shem Creek and the marsh, humidity feeds mildew in grout, closets and window sills. A deep clean scrubs it out and leaves surfaces dry.',
        'Old Village homes have original floors and fixtures that need gentle, pH-neutral products and hand-detailing.',
        'Newer homes in Carolina Park, Park West and Dunes West hold construction dust in cabinets, vents and trim for months. We clear every bit of it.',
      ],
    },
    coordinates: { lat: 32.8323, lng: -79.8284 },
  },
};

export const LOCATION_ORDER = ['charleston', 'summerville', 'north-charleston', 'mount-pleasant', 'james-island', 'daniel-island', 'johns-island', 'ladson'];

/** Islands take “on”: “house cleaning on James Island”. */
export const placePrep = (slug: string) => (['james-island', 'daniel-island', 'johns-island'].includes(slug) ? 'on' : 'in');
export const inPlace = (loc: { slug: string; name: string }) => `${placePrep(loc.slug)} ${loc.name}`;
