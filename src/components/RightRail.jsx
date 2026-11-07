import React from 'react';
import { Trophy, Users, Award, Flame, Bell, ChevronRight } from 'lucide-react';
import { contributors, headlines, stats } from '../data/mockData';

const RightRail = () => {
    const safeContributors = Array.isArray(contributors) ? contributors : [];
    const safeHeadlines = Array.isArray(headlines) ? headlines : [];

    const safeStats = Array.isArray(stats)
        ? stats
        : stats && typeof stats === 'object'
            ? [
                { label: 'Total Players', value: stats.totalPlayers || '1,240', icon: Users },
                { label: 'Tournaments', value: stats.activeTournaments || '12', icon: Trophy },
                { label: 'Prize Pool', value: stats.prizePool || '₹25,00,000', icon: Award },
                { label: 'Cities', value: stats.cities || '24', icon: Flame }
            ]
            : [];

    return (
        <div className="space-y-6">

            {/* Headlines Card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
                    <Bell className="w-5 h-5 text-[#1A7AC5]" />
                    <h3 className="font-black text-[#0A1A2F] text-sm uppercase tracking-wide">Headlines</h3>
                </div>
                <div className="space-y-3">
                    {safeHeadlines.map((item, idx) => (
                        <div key={item.id || idx} className="group flex items-start gap-3 cursor-pointer">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1A7AC5] shrink-0" />
                            <p className="text-sm font-medium text-slate-600 group-hover:text-[#1A7AC5] transition-colors leading-snug">
                                {item.text || item.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Stats Grid */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <h3 className="font-black text-[#0A1A2F] text-sm uppercase tracking-wide mb-4 pb-3 border-b border-slate-100">
                    League Scale
                </h3>
                <div className="grid grid-cols-2 gap-3">
                    {safeStats.map((item, idx) => {
                        const Icon = item.icon || Trophy;
                        return (
                            <div key={item.label || idx} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <div className="flex items-center gap-1.5 text-slate-500 text-[10px] uppercase font-bold mb-1">
                                    <Icon className="w-3 h-3 text-[#1A7AC5]" />
                                    <span>{item.label}</span>
                                </div>
                                <div className="text-lg font-black text-[#0A1A2F] tracking-tight">{item.value}</div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Contributors */}
            {safeContributors.length > 0 && (
                <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                    <h3 className="font-black text-[#0A1A2F] text-sm uppercase tracking-wide mb-4 pb-3 border-b border-slate-100">
                        Contact Contributors
                    </h3>
                    <div className="space-y-4">
                        {safeContributors.map((person, idx) => (
                            <div key={person.id || idx} className="flex items-center gap-3">
                                <img src={person.avatar} alt={person.name} className="w-8 h-8 rounded-full object-cover bg-slate-100" />
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900">{person.name}</h4>
                                    <p className="text-[11px] text-slate-500 uppercase tracking-wider">{person.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RightRail;