// Transcribed from "Star Cleaning Pricing Sheet" > ALL PRICES (residential phone quote).
// Every price is a [low, high] pair, exactly as in the sheet. The public estimator shows the high end.
// Recurring prices depend on square footage only; deep clean / move-in prices also depend on
// the bed/bath combination. The sheet's TTB (top-to-bottom) column is intentionally not used.

export type Pair = readonly [number, number];

export interface HomeOption {
  beds: number;
  baths: string;
  deep: Pair;
  move: Pair;
}

export interface SizeRange {
  label: string;
  options: HomeOption[];
  weekly: Pair;
  biweekly: Pair;
  monthly: Pair;
}

export const SIZE_RANGES: SizeRange[] = [
  {
    label: 'Up to 1,200 sq ft',
    weekly: [105, 135], biweekly: [120, 150], monthly: [163, 179],
    options: [
      { beds: 1, baths: '1', deep: [225, 263], move: [315, 385] },
      { beds: 2, baths: '2', deep: [281, 300], move: [385, 455] },
    ],
  },
  {
    label: '1,201 – 1,499 sq ft',
    weekly: [135, 150], biweekly: [150, 165], monthly: [179, 195],
    options: [
      { beds: 3, baths: '2', deep: [300, 319], move: [420, 490] },
      { beds: 3, baths: '2.5', deep: [338, 356], move: [490, 525] },
    ],
  },
  {
    label: '1,500 – 1,850 sq ft',
    weekly: [150, 165], biweekly: [165, 195], monthly: [211, 228],
    options: [
      { beds: 3, baths: '2.5', deep: [356, 375], move: [508, 525] },
      { beds: 4, baths: '3', deep: [371, 386], move: [543, 560] },
    ],
  },
  {
    label: '1,851 – 2,200 sq ft',
    weekly: [165, 180], biweekly: [180, 210], monthly: [211, 228],
    options: [
      { beds: 3, baths: '2', deep: [413, 431], move: [543, 595] },
      { beds: 4, baths: '2.5', deep: [450, 469], move: [578, 613] },
    ],
  },
  {
    label: '2,201 – 2,600 sq ft',
    weekly: [171, 189], biweekly: [189, 225], monthly: [228, 260],
    options: [
      { beds: 4, baths: '2.5', deep: [469, 488], move: [613, 648] },
      { beds: 4, baths: '3', deep: [506, 525], move: [630, 665] },
    ],
  },
  {
    label: '2,601 – 3,000 sq ft',
    weekly: [195, 225], biweekly: [225, 240], monthly: [276, 293],
    options: [
      { beds: 4, baths: '3', deep: [525, 544], move: [665, 735] },
      { beds: 4, baths: '3.5', deep: [544, 581], move: [700, 770] },
    ],
  },
  {
    label: '3,001 – 3,300 sq ft',
    weekly: [225, 255], biweekly: [240, 270], monthly: [293, 309],
    options: [
      { beds: 4, baths: '3.5', deep: [600, 619], move: [770, 910] },
      { beds: 5, baths: '4', deep: [638, 656], move: [805, 945] },
    ],
  },
  {
    label: '3,301 – 3,900 sq ft',
    weekly: [255, 330], biweekly: [270, 330], monthly: [358, 423],
    options: [
      { beds: 5, baths: '3.5', deep: [656, 694], move: [945, 1085] },
      { beds: 5, baths: '4.5', deep: [713, 731], move: [1050, 1190] },
    ],
  },
  {
    label: '3,901 – 5,000 sq ft',
    weekly: [420, 480], biweekly: [360, 480], monthly: [520, 585],
    options: [
      { beds: 5, baths: '4', deep: [750, 769], move: [1190, 1330] },
      { beds: 6, baths: '5+', deep: [788, 806], move: [1330, 1470] },
    ],
  },
  {
    label: '5,001 – 6,000 sq ft',
    weekly: [480, 480], biweekly: [480, 480], monthly: [650, 650],
    options: [{ beds: 6, baths: '5+', deep: [825, 844], move: [1400, 1820] }],
  },
  {
    label: '6,001 – 7,900 sq ft',
    weekly: [600, 600], biweekly: [600, 600], monthly: [780, 780],
    options: [{ beds: 6, baths: '5+', deep: [863, 881], move: [1820, 2100] }],
  },
  {
    label: '7,901 – 9,000 sq ft',
    weekly: [720, 720], biweekly: [720, 720], monthly: [910, 910],
    options: [{ beds: 6, baths: '5+', deep: [900, 919], move: [2100, 2520] }],
  },
];

export const FREQUENCIES = ['Weekly', 'Bi-Weekly', 'Monthly', 'One-Time'] as const;
export type Frequency = (typeof FREQUENCIES)[number];

const UPPER_BOUNDS = [1200, 1499, 1850, 2200, 2600, 3000, 3300, 3900, 5000, 6000, 7900, 9000];

/** Index of the sheet's square-footage range for a given size (anything above the last range uses the last one). */
export function sizeRangeIndex(sqft: number): number {
  const i = UPPER_BOUNDS.findIndex((max) => sqft <= max);
  return i === -1 ? UPPER_BOUNDS.length - 1 : i;
}

/** The bed/bath option of a range closest to the home described; on a tie the larger (pricier) option wins. */
export function nearestOptionIndex(rangeIndex: number, beds: number, baths: number): number {
  const { options } = SIZE_RANGES[rangeIndex];
  let best = 0;
  let bestDistance = Infinity;
  options.forEach((o, i) => {
    const distance = Math.abs(o.beds - beds) + Math.abs(parseFloat(o.baths) - baths);
    if (distance <= bestDistance) {
      best = i;
      bestDistance = distance;
    }
  });
  return best;
}

export interface PlanEstimate {
  /** Recurring plans start with the sheet's Deep Clean; the one-time plan is the Move In/Out column. */
  initialLabel: 'Initial Deep Clean' | 'Deep Clean Reset';
  initial: Pair;
  /** Weekly / bi-weekly / monthly price per visit. Null for the one-time plan. */
  recurring: Pair | null;
}

export function planEstimate(rangeIndex: number, optionIndex: number, frequency: Frequency): PlanEstimate {
  const range = SIZE_RANGES[rangeIndex];
  const option = range.options[Math.min(optionIndex, range.options.length - 1)];
  switch (frequency) {
    case 'Weekly':
      return { initialLabel: 'Initial Deep Clean', initial: option.deep, recurring: range.weekly };
    case 'Bi-Weekly':
      return { initialLabel: 'Initial Deep Clean', initial: option.deep, recurring: range.biweekly };
    case 'Monthly':
      return { initialLabel: 'Initial Deep Clean', initial: option.deep, recurring: range.monthly };
    case 'One-Time':
      return { initialLabel: 'Deep Clean Reset', initial: option.move, recurring: null };
  }
}

/** The public estimate always shows the higher price of the sheet's pair. */
export const high = (p: Pair) => p[1];

export const money = (n: number) => `$${n.toLocaleString('en-US')}`;
