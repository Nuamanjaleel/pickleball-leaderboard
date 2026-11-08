import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { rankings, tournamentWinners } from '../data/mockData';
import { SITE } from '../data/siteConfig';
import Avatar from './Avatar';

const tabBase = 'flex-1 py-3 uppercase tracking-wider transition-colors border-b-[3px]';
const tabOn = 'text-[#0B4F8C] border-[#0B4F8C]';
const tabOff = 'text-slate-600 hover:text-slate-900 border-transparent';

const Leaderboard = () => {
    const [gender, setGender] = useState('women');
    const [type, setType] = useState('singles');

    const displayLimit = type === 'doubles' ? 5 : 10;
    const visibleRankings = rankings
        .filter((p) => p.gender === gender && p.type === type)
        .sort((a, b) => a.rank - b.rank)
        .slice(0, displayLimit);

    return (
        <div id="rankings" className="space-y-6 scroll-mt-24">
            <section aria-labelledby="rank-title" className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-200 text-center">
                    <h2 id="rank-title" className="font-black text-[#0A1A2F] italic tracking-widest uppercase text-lg">
                        CPBL Rankings
                    </h2>
                    {SITE.demoMode && <p className="text-xs text-slate-600 mt-1">Sample data, not official rankings</p>}
                </div>

                <div className="flex text-sm font-bold" role="group" aria-label="Category">
                    <button type="button" aria-pressed={gender === 'women'} onClick={() => setGender('women')} className={`${tabBase} ${gender === 'women' ? tabOn : tabOff}`}>
                        Women's
                    </button>
                    <button type="button" aria-pressed={gender === 'men'} onClick={() => setGender('men')} className={`${tabBase} ${gender === 'men' ? tabOn : tabOff}`}>
                        Men's
                    </button>
                </div>

                <div className="flex border-b border-slate-200 text-xs font-bold bg-slate-50" role="group" aria-label="Format">
                    <button type="button" aria-pressed={type === 'singles'} onClick={() => setType('singles')} className={`flex-1 py-2 uppercase tracking-wider ${type === 'singles' ? 'text-[#0A1A2F] bg-slate-200' : 'text-slate-600'}`}>
                        Singles
                    </button>
                    <button type="button" aria-pressed={type === 'doubles'} onClick={() => setType('doubles')} className={`flex-1 py-2 uppercase tracking-wider ${type === 'doubles' ? 'text-[#0A1A2F] bg-slate-200' : 'text-slate-600'}`}>
                        Doubles
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left table-fixed">
                        <caption className="sr-only">
                            Sample {gender === 'women' ? "women's" : "men's"} {type} rankings
                        </caption>
                        <colgroup>
                            <col className="w-12" />
                            <col />
                            <col className="w-[4.5rem]" />
                        </colgroup>
                        <thead>
                            <tr className="text-slate-600 text-[10px] uppercase font-bold tracking-wider bg-slate-50 border-b border-slate-200">
                                <th scope="col" className="py-2 pl-3 pr-1">Rank</th>
                                <th scope="col" className="py-2 px-1">Player</th>
                                <th scope="col" className="py-2 pr-3 pl-1 text-right">Pts</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {visibleRankings.map((p) => (
                                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                                    <td className="py-3 pl-3 pr-1 font-bold text-slate-800 text-sm">{p.rank}</td>
                                    <td className="py-3 px-1 font-semibold text-slate-900 text-sm">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <Avatar name={p.name} size="w-6 h-6" text="text-[9px]" />
                                            <span className="truncate leading-tight" title={p.name}>{p.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 pr-3 pl-1 font-black text-[#0B4F8C] text-right text-sm tabular-nums whitespace-nowrap">
                                        {Number(p.points).toLocaleString('en-IN')}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section aria-labelledby="prize-title" className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-4 border-b border-slate-200 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#0B4F8C]" aria-hidden="true" />
                    <h2 id="prize-title" className="font-black text-[#0A1A2F] tracking-wide uppercase text-sm">Prize Winners</h2>
                </div>
                {SITE.demoMode && <p className="px-4 pt-3 text-xs text-slate-600">Sample data, not real results</p>}
                <ul className="p-4 space-y-4">
                    {tournamentWinners.map((w) => (
                        <li key={w.id} className="flex items-center gap-3">
                            <Avatar name={w.name} size="w-10 h-10" text="text-xs" />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-slate-900 leading-tight truncate">{w.name}</p>
                                <p className="text-[11px] text-slate-600 font-medium mt-0.5">
                                    {w.rank} <span className="text-[#0B4F8C] font-bold ml-1">{w.prize}</span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Leaderboard;
