import React from 'react';

/**
 * Renders text as masked words for the data-anim="words" reveal. Plain text stays in the HTML
 * (crawlable, selectable, read normally by screen readers). Segments let part of a heading use
 * an accent style: <SplitWords parts={['Deep cleaning in ', { text: 'Summerville.', className: 'italic text-star-blue' }]} />
 */
type Part = string | { text: string; className?: string };

export default function SplitWords({ parts }: { parts: Part[] }) {
  const out: React.ReactNode[] = [];
  parts.forEach((part, pi) => {
    const text = typeof part === 'string' ? part : part.text;
    const cls = typeof part === 'string' ? undefined : part.className;
    const tokens = text.split(/(\s+)/);
    tokens.forEach((tok, ti) => {
      if (!tok) return;
      if (/^\s+$/.test(tok)) {
        out.push(' ');
        return;
      }
      out.push(
        <span key={`${pi}-${ti}`} className="sw">
          <span className={cls ? `swi ${cls}` : 'swi'}>{tok}</span>
        </span>
      );
    });
  });
  return <>{out}</>;
}
