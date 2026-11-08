import React from 'react';
import { Bell } from 'lucide-react';
import { contributors, headlines, stats } from '../data/mockData';
import { SITE } from '../data/siteConfig';
import Avatar from './Avatar';

const card = 'bg-white rounded-xl p-5 border border-slate-200 shadow-sm';
const h2 = 'font-black text-[#0A1A2F] text-sm uppercase tracking-wide';

const RightRail = () => (
    <div className="space-y-6">
        <section aria-labelledby="headlines-title" className={card}>
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                <Bell className="w-5 h-5 text-[#0B4F8C]" aria-hidden="true" />
                <h2 id="headlines-title" className={h2}>Headlines</h2>
            </div>
            <ul className="space-y-3">
                {headlines.map((item) => (
                    <li key={item.id} className="flex items-start gap-3">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#0B4F8C] shrink-0" />
                        <p className="text-sm font-medium text-slate-700 leading-snug">{item.text}</p>
                    </li>
                ))}
            </ul>
        </section>

        <section aria-labelledby="scale-title" className={card}>
            <h2 id="scale-title" className={`${h2} mb-1`}>League Scale</h2>
            {SITE.demoMode && <p className="text-xs text-slate-600 mb-3">Sample figures</p>}
            <dl className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                {stats.map((item) => (
                    <div key={item.label} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                        <dt className="text-slate-600 text-[10px] uppercase font-bold mb-1">{item.label}</dt>
                        <dd className="text-lg font-black text-[#0A1A2F] tracking-tight">{item.value}</dd>
                    </div>
                ))}
            </dl>
        </section>

        {contributors.length > 0 && (
            <section aria-labelledby="contrib-title" className={card}>
                <h2 id="contrib-title" className={`${h2} mb-1`}>Contributors</h2>
                {SITE.demoMode && <p className="text-xs text-slate-600 mb-3">Fictional sample profiles</p>}
                <ul className="space-y-4 pt-3 border-t border-slate-100">
                    {contributors.map((p) => (
                        <li key={p.id} className="flex items-center gap-3">
                            <Avatar name={p.name} />
                            <div>
                                <p className="text-sm font-bold text-slate-900">{p.name}</p>
                                <p className="text-[11px] text-slate-600 uppercase tracking-wider">{p.role}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        )}
    </div>
);

export default RightRail;
