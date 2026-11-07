import React, { useState } from 'react';
import { Award } from 'lucide-react';
import { rankings, tournamentWinners } from '../data/mockData';

const Leaderboard = () => {
    const [gender, setGender] = useState('women');
    const [type, setType] = useState('singles');

    const filteredRankings = (rankings || [])
        .filter((p) => p?.gender === gender && p?.type === type)
        .sort((a, b) => a.rank - b.rank);

    // Singles: top 10 · Doubles: top 5
    const displayLimit = type === 'doubles' ? 5 : 10;
    const visibleRankings = filteredRankings.slice(0, displayLimit);

    const safeWinners = Array.isArray(tournamentWinners) ? tournamentWinners : [];

    return (
        <div id="rankings" className="space-y-6">
            {/* Card 1: Official Rankings */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                <div className="p-4 bg-white border-b border-slate-200 flex justify-center">
                    <h3 className="font-black text-[#0A1A2F] italic tracking-widest uppercase text-lg">
                        CPBL Rankings
                    </h3>
                </div>

                {/* Gender Tabs */}
                <div className="flex text-sm font-bold bg-white">
                    <button
                        onClick={() => setGender('women')}
                        className={`flex-1 py-3 uppercase tracking-wider transition-colors ${gender === 'women'
                            ? 'text-[#1A7AC5] border-b-[3px] border-[#1A7AC5]'
                            : 'text-slate-400 hover:text-slate-600 border-b-[3px] border-transparent'
                            }`}
                    >
                        Women's
                    </button>
                    <button
                        onClick={() => setGender('men')}
                        className={`flex-1 py-3 uppercase tracking-wider transition-colors ${gender === 'men'
                            ? 'text-[#1A7AC5] border-b-[3px] border-[#1A7AC5]'
                            : 'text-slate-400 hover:text-slate-600 border-b-[3px] border-transparent'
                            }`}
                    >
                        Men's
                    </button>
                </div>

                {/* Type Tabs */}
                <div className="flex border-b border-slate-200 text-xs font-bold bg-slate-50">
                    <button
                        onClick={() => setType('singles')}
                        className={`flex-1 py-2 uppercase tracking-wider ${type === 'singles' ? 'text-[#0A1A2F] bg-slate-200/60' : 'text-slate-400'
                            }`}
                    >
                        Singles
                    </button>
                    <button
                        onClick={() => setType('doubles')}
                        className={`flex-1 py-2 uppercase tracking-wider ${type === 'doubles' ? 'text-[#0A1A2F] bg-slate-200/60' : 'text-slate-400'
                            }`}
                    >
                        Doubles
                    </button>
                </div>

                {/* Ranking List */}
                <div className="overflow-x-auto">
                    <table className="w-full text-left table-fixed">
                        <colgroup>
                            <col className="w-12" />
                            <col />
                            <col className="w-[4.5rem]" />
                        </colgroup>
                        <thead>
                            <tr className="text-slate-400 text-[10px] uppercase font-bold tracking-wider bg-slate-50 border-b border-slate-200">
                                <th className="py-2 pl-3 pr-1">Rank</th>
                                <th className="py-2 px-1">Player</th>
                                <th className="py-2 pr-3 pl-1 text-right">Pts</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {visibleRankings.map((p, idx) => (
                                <tr key={p.id || idx} className="hover:bg-slate-50 transition-colors">
                                    <td className="py-3 pl-3 pr-1 font-bold text-slate-800 text-sm">{p.rank}</td>
                                    <td className="py-3 px-1 font-semibold text-slate-900 text-sm">
                                        <div className="flex items-center gap-2 min-w-0">
                                            <div className="w-6 h-6 rounded-full bg-slate-200 overflow-hidden shrink-0 flex items-center justify-center text-[9px] font-black text-slate-600">
                                                <img
                                                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=random&color=fff&size=48`}
                                                    alt=""
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span className="truncate leading-tight" title={p.name}>
                                                {p.name}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="py-3 pr-3 pl-1 font-black text-[#1A7AC5] text-right text-sm tabular-nums whitespace-nowrap">
                                        {Number(p.points).toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Card 2: Prize Winners */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
                <div className="p-4 bg-white border-b border-slate-200 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#C5FF00] drop-shadow-sm" />
                    <h3 className="font-black text-[#0A1A2F] tracking-wide uppercase text-sm">
                        Prize Winners
                    </h3>
                </div>
                <div className="p-4 space-y-4">
                    {safeWinners.map((winner, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                            <img
                                src={winner.image}
                                alt={winner.name}
                                className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-slate-900 leading-tight truncate">
                                    {winner.name}
                                </h4>
                                <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                                    {winner.rank}{' '}
                                    <span className="text-[#1A7AC5] font-bold ml-1">{winner.prize}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Leaderboard;