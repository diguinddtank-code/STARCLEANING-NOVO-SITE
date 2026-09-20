import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Estimate Approved | Star Cleaning SC',
  description: 'Your Star Cleaning SC estimate has been approved. Next steps for scheduling your cleaning.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function EstimateApprovedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
