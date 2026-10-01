/**
 * Where a visitor came from (Google Ads, Meta, organic, direct), kept for 90 days so a
 * person who clicks an ad on Monday and fills the form on Thursday still counts for the ad.
 * Sent with the quote form → n8n (scsite / scpromo) → saved on the lead in the CRM.
 */

export type Channel = 'google_ads' | 'meta' | 'organic' | 'direct' | 'other';

export interface Attribution {
  channel: Channel;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
  gclid: string | null;
  fbclid: string | null;
  landing_page: string | null;
  referrer: string | null;
  captured_at: string;
}

const KEY = 'sc_attribution';
const KEEP_DAYS = 90;
const PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'gbraid', 'wbraid', 'fbclid'] as const;

const clean = (v: string | null | undefined) => (v && v.trim() ? v.trim().slice(0, 300) : null);

export function channelOf(a: Pick<Attribution, 'utm_source' | 'utm_medium' | 'gclid' | 'fbclid' | 'referrer'> & { paidGoogle?: boolean }): Channel {
  const src = (a.utm_source || '').toLowerCase();
  const med = (a.utm_medium || '').toLowerCase();
  const ref = (a.referrer || '').toLowerCase();
  if (a.gclid || a.paidGoogle || (['google', 'adwords', 'googleads', 'google_ads'].includes(src) && ['cpc', 'ppc', 'paid', 'paidsearch', 'paid_search', 'ads'].includes(med))) return 'google_ads';
  if (a.fbclid || ['facebook', 'fb', 'instagram', 'ig', 'meta', 'an', 'messenger'].includes(src) || /(facebook\.com|instagram\.com|fb\.com|fb\.me)/.test(ref)) return 'meta';
  if (/(google\.|bing\.com|yahoo\.com|duckduckgo\.com)/.test(ref)) return 'organic';
  if (src || (ref && !ref.includes('starcleaningsc.com'))) return 'other';
  return 'direct';
}

function read(): Attribution | null {
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return null;
    const a = JSON.parse(raw) as Attribution;
    if (Date.now() - new Date(a.captured_at).getTime() > KEEP_DAYS * 864e5) return null;
    return a;
  } catch {
    return null;
  }
}

/**
 * Runs on every page view.
 *  - An ad click / campaign link always wins.
 *  - Arriving from another site (Google search, Facebook post…) is saved, unless an ad click
 *    from the last 90 days is already there (the ad gets the credit).
 *  - Moving between our own pages changes nothing.
 */
export function captureAttribution() {
  if (typeof window === 'undefined') return;
  try {
    const url = new URL(window.location.href);
    const p = Object.fromEntries(PARAMS.map((k) => [k, clean(url.searchParams.get(k))])) as Record<(typeof PARAMS)[number], string | null>;
    const referrer = clean(document.referrer);
    const external = !!referrer && !/starcleaningsc\.com|localhost/i.test(referrer);
    const hasCampaign = PARAMS.some((k) => p[k]);
    const saved = read();
    const savedIsAd = saved?.channel === 'google_ads' || saved?.channel === 'meta';
    if (!hasCampaign && (!external || savedIsAd) && saved) return;

    const a: Attribution = {
      channel: 'direct',
      utm_source: p.utm_source,
      utm_medium: p.utm_medium,
      utm_campaign: p.utm_campaign,
      utm_content: p.utm_content,
      utm_term: p.utm_term,
      gclid: p.gclid || p.gbraid || p.wbraid,
      fbclid: p.fbclid,
      landing_page: clean(url.pathname),
      referrer,
      captured_at: new Date().toISOString(),
    };
    a.channel = channelOf({ ...a, paidGoogle: !!(p.gbraid || p.wbraid) });
    window.localStorage.setItem(KEY, JSON.stringify(a));
  } catch {
    // storage blocked (private mode): the form still works, just without origin
  }
}

/** Flat fields for the form payload (n8n maps them straight into the lead). */
export function attributionFields(): Omit<Attribution, 'captured_at'> & { attribution_at: string | null } {
  const a = typeof window !== 'undefined' ? read() : null;
  return {
    channel: a?.channel || 'direct',
    utm_source: a?.utm_source ?? null,
    utm_medium: a?.utm_medium ?? null,
    utm_campaign: a?.utm_campaign ?? null,
    utm_content: a?.utm_content ?? null,
    utm_term: a?.utm_term ?? null,
    gclid: a?.gclid ?? null,
    fbclid: a?.fbclid ?? null,
    landing_page: a?.landing_page ?? (typeof window !== 'undefined' ? window.location.pathname : null),
    referrer: a?.referrer ?? null,
    attribution_at: a?.captured_at ?? null,
  };
}
