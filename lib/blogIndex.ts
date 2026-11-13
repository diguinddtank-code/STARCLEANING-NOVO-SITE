/** Light index of blog posts for internal links (generated from app/blog/page.tsx). */
export interface BlogRef { slug: string; title: string; image: string }

export const blogIndex: BlogRef[] = [
  {
    slug: "how-to-clean-oven-range-hood-before-thanksgiving-charleston-sc",
    title: "How to Deep Clean Your Oven & Range Hood Before Thanksgiving in Charleston SC",
    image: "/images/blog/how-to-clean-oven-range-hood-before-thanksgiving-charleston-sc.jpg"
  },
  {
    slug: "move-out-cleaning-checklist-security-deposit-charleston-sc",
    title: "Move Out Cleaning Checklist: How to Get 100% of Your Security Deposit Back in Charleston SC",
    image: "/images/blog/move-out-cleaning-checklist-security-deposit-charleston-sc.jpg"
  },
  {
    slug: "how-to-clean-hardwood-floors-charleston-sc-heart-pine",
    title: "How to Clean Hardwood Floors in Charleston SC: Historic Heart-Pine & Engineered Wood",
    image: "/images/blog/how-to-clean-hardwood-floors-charleston-sc-heart-pine.jpg"
  },
  {
    slug: "mount-pleasant-sc-thanksgiving-house-cleaning-checklist",
    title: "Mount Pleasant SC Thanksgiving House Cleaning: The Lowcountry Host Checklist",
    image: "/images/blog/mount-pleasant-sc-thanksgiving-house-cleaning-checklist.jpg"
  },
  {
    slug: "how-to-get-rid-of-musty-smell-house-charleston-sc",
    title: "How to Get Rid of Musty Smell in a Charleston SC House: Humidity & Mildew Guide",
    image: "/images/blog/how-to-get-rid-of-musty-smell-house-charleston-sc.jpg"
  },
  {
    slug: "pet-friendly-house-cleaning-guide-charleston-sc",
    title: "Pet-Friendly House Cleaning: Dogs, Cats, Shedding & Marsh Sand in Charleston SC",
    image: "/images/blog/pet-friendly-house-cleaning-guide-charleston-sc.jpg"
  },
  {
    slug: "independent-cleaner-vs-cleaning-company-charleston-sc",
    title: "Independent Cleaner vs. Cleaning Company in Charleston SC: Cost, Risk & Insurance",
    image: "/images/blog/independent-cleaner-vs-cleaning-company-charleston-sc.jpg"
  },
  {
    slug: "what-house-cleaners-will-not-clean-charleston-sc",
    title: "What Do House Cleaners NOT Clean? Service Exclusions, Safety Limits & Add-Ons",
    image: "/images/blog/what-house-cleaners-will-not-clean-charleston-sc.jpg"
  },
  {
    slug: "how-long-does-house-cleaning-take-charleston-sc",
    title: "How Long Does House Cleaning Take? Time Breakdown by Sq Footage & Clean Type",
    image: "/images/blog/how-long-does-house-cleaning-take-charleston-sc.jpg"
  },
  {
    slug: "should-you-stay-home-during-house-cleaning-charleston-sc",
    title: "Should You Stay Home During House Cleaning? The Charleston Homeowner Etiquette Guide",
    image: "/images/blog/should-you-stay-home-during-house-cleaning-charleston-sc.jpg"
  },
  {
    slug: "do-house-cleaners-bring-their-own-supplies-charleston-sc",
    title: "Do House Cleaners Bring Their Own Supplies? What's Included vs. What You Provide",
    image: "/images/blog/do-house-cleaners-bring-their-own-supplies-charleston-sc.jpg"
  },
  {
    slug: "do-you-tip-house-cleaners-charleston-sc",
    title: "Do You Tip House Cleaners? The 2026 Charleston Homeowner Etiquette & Tipping Guide",
    image: "/images/blog/do-you-tip-house-cleaners-charleston-sc.jpg"
  },
  {
    slug: "how-much-does-house-cleaning-cost-in-charleston-sc",
    title: "How Much Does House Cleaning Cost in Charleston, SC? (2026 Pricing Breakdown)",
    image: "/images/blog/how-much-does-house-cleaning-cost-in-charleston-sc.jpg"
  },
  {
    slug: "how-often-should-you-have-your-house-cleaned-charleston-sc",
    title: "How Often Should You Have Your House Cleaned? Weekly vs. Bi-Weekly vs. Monthly",
    image: "/images/blog/how-often-should-you-have-your-house-cleaned.jpg"
  },
  {
    slug: "how-to-prepare-for-house-cleaners-checklist-charleston-sc",
    title: "How to Prepare Your House for Cleaners: The Step-by-Step Lowcountry Checklist",
    image: "/images/blog/how-to-prepare-for-house-cleaners-checklist.jpg"
  },
  {
    slug: "how-to-remove-hard-water-stains-shower-glass-grout-charleston-sc",
    title: "How to Remove Hard Water Stains & Mildew from Shower Glass and Grout",
    image: "/images/blog/how-to-remove-hard-water-stains-shower-glass-grout.jpg"
  },
  {
    slug: "how-to-clean-house-after-construction-checklist-charleston-sc",
    title: "How to Clean a House After Remodeling: The Step-by-Step Post-Construction Checklist",
    image: "/images/blog/how-to-clean-house-after-construction-checklist.jpg"
  },
  {
    slug: "how-to-clean-before-moving-in-checklist-charleston-sc",
    title: "How to Clean a House Before Moving In: The Step-by-Step Move-In Checklist",
    image: "/images/blog/how-to-clean-before-moving-in-checklist.jpg"
  },
  {
    slug: "how-to-deep-clean-house-step-by-step-charleston-sc",
    title: "How to Deep Clean Your House Step-by-Step: The Ultimate Lowcountry Guide",
    image: "/images/blog/how-to-deep-clean-house-step-by-step.jpg"
  },
  {
    slug: "first-recurring-clean-charleston-summerville-sc",
    title: "First Recurring Clean: What to Expect in Charleston & Summerville, SC",
    image: "/images/blog/first-recurring-clean-charleston-summerville.jpg"
  },
  {
    slug: "charleston-airbnb-cleaning-guide",
    title: "The Ultimate Guide to Charleston Airbnb Cleaning for Hosts",
    image: "/images/blog/charleston-airbnb-cleaning-guide.jpg"
  },
  {
    slug: "move-out-cleaning-cost-summerville-sc",
    title: "How Much Does Move-Out Cleaning Cost in Summerville, SC?",
    image: "/images/blog/move-out-cleaning-cost-summerville-sc.jpg"
  },
  {
    slug: "deep-cleaning-vs-standard-cleaning-north-charleston",
    title: "Deep Cleaning vs. Standard Cleaning: Which Does Your Home Need?",
    image: "/images/blog/deep-cleaning-vs-standard-cleaning-north-charleston.jpg"
  }
];

export const blogBySlug = (slug: string) => blogIndex.find((p) => p.slug === slug);
