"use client";

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/attribution';

/** Saves where the visitor came from (ad click, search, direct) when they land on the site. */
export default function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
