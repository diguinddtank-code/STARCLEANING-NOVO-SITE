import { NextResponse } from 'next/server';
import { BUSINESS_CONFIG } from '@/lib/businessConfig';

export async function GET() {
  return NextResponse.json({
    rating: BUSINESS_CONFIG.ratingValue,
    reviewCount: BUSINESS_CONFIG.reviewCount,
    displayCount: BUSINESS_CONFIG.reviewCountDisplay,
    url: BUSINESS_CONFIG.googleMapsShareUrl,
    businessName: BUSINESS_CONFIG.name,
    verifiedSource: "Google Business Profile (GMB)",
    lastVerified: "2026-10-22"
  }, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
    }
  });
}
