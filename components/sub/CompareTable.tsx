import React from 'react';
import Link from 'next/link';
import { Check as CheckIcon, Minus } from 'lucide-react';
import Motion from '@/components/motion/Motion';
import { Eyebrow, Title } from './ui';
import { COMPARISON } from '@/lib/servicesData';

const LINKS = ['/services/residential-cleaning', '/services/deep-cleaning', '/services/move-in-move-out-cleaning'];

/** Regular vs deep vs move-in/out, as a real table (easy for people and AI answers to read). */
export default function CompareTable({ highlight }: { highlight?: number }) {
  return (
    <Motion as="section" className="cv bg-[#F7F4EF] py-20 lg:py-28" aria-labelledby="compare-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <Eyebrow>Compare the cleans</Eyebrow>
          <Title id="compare-title" lead="Regular, deep or move-out:" accent="which one do you need?" />
        </div>

        <div data-anim="up" className="overflow-x-auto rounded-[1.75rem] bg-white shadow-[0_30px_60px_-40px_rgba(0,40,85,0.4)] ring-1 ring-star-dark/5">
          <table className="w-full min-w-[40rem] text-left">
            <caption className="sr-only">What is included in a regular clean, a deep clean and a move-in or move-out clean</caption>
            <thead>
              <tr className="border-b border-slate-100">
                <th scope="col" className="p-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 sm:p-6">Task</th>
                {COMPARISON.columns.map((c, i) => (
                  <th key={c} scope="col" className={`p-5 text-center sm:p-6 ${highlight === i ? 'bg-star-blue text-white' : 'text-star-dark'} ${i === COMPARISON.columns.length - 1 ? 'rounded-tr-[1.75rem]' : ''}`}>
                    <Link prefetch={false} href={LINKS[i]} className="font-serif text-lg font-medium hover:underline">
                      {c}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON.rows.map((r) => (
                <tr key={r.task} className="border-b border-slate-100 last:border-0">
                  <th scope="row" className="p-5 text-[15px] font-semibold text-slate-700 sm:px-6 sm:py-4">{r.task}</th>
                  {r.v.map((v, i) => (
                    <td key={i} className={`p-5 text-center sm:py-4 ${highlight === i ? 'bg-star-blue/[0.06]' : ''}`}>
                      {v === true ? (
                        <CheckIcon className="mx-auto h-5 w-5 text-emerald-500" aria-label="Included" />
                      ) : v === false ? (
                        <Minus className="mx-auto h-5 w-5 text-slate-300" aria-label="Not included" />
                      ) : (
                        <span className="text-xs font-bold text-star-blue">{v}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Motion>
  );
}
