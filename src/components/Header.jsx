import React, { useState, useEffect } from 'react';
import { Trophy, Download, Phone, Shield } from 'lucide-react';
import { sponsors } from '../data/mockData';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const mainSponsor = sponsors?.find((s) => s?.type === 'main' || s?.isMain) || sponsors?.[0];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-[#0A1A2F]/95 backdrop-blur-md border-b border-white/10 text-white transition-all duration-500 ease-in-out ${isScrolled ? 'translate-y-0 opacity-100 shadow-xl' : '-translate-y-full opacity-0 pointer-events-none'
                }`}
        >
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                {/* Left: CPBL Brand Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/cpbl-logo.png"
                        alt="CPBL Logo"
                        className="h-10 w-auto object-contain"
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div className="flex flex-col">
                        <span className="font-black text-xl tracking-wider text-white flex items-center gap-1.5">
                            CPBL
                            <span className="text-[#C5FF00] text-xs px-2 py-0.5 rounded bg-[#C5FF00]/10 border border-[#C5FF00]/30 font-semibold">
                                PRO
                            </span>
                        </span>
                    </div>
                </div>

                {/* Center: Navigation Links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
                    <a href="#rankings" className="hover:text-[#C5FF00] transition-colors flex items-center gap-1.5">
                        <Trophy className="w-4 h-4 text-[#C5FF00]" /> Rankings
                    </a>
                    <a href="#sponsors" className="hover:text-[#C5FF00] transition-colors flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-[#1A7AC5]" /> Sponsors
                    </a>
                    <a href="#contact" className="hover:text-[#C5FF00] transition-colors flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-emerald-400" /> Contact
                    </a>
                    <a
                        href="#download"
                        className="bg-[#C5FF00] text-[#0A1A2F] hover:bg-[#b0e600] px-4 py-2 rounded-full font-bold transition-all flex items-center gap-1.5"
                    >
                        <Download className="w-4 h-4" /> Download App
                    </a>
                </nav>

                {/* Right: Main Sponsor (Red Bull) */}
                <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold hidden sm:inline">
                        Main Partner
                    </span>
                    {mainSponsor && (
                        <div className="bg-white/95 px-2 py-1 rounded border border-white/20 flex items-center justify-center">
                            <img
                                src={mainSponsor?.logo}
                                alt="Red Bull"
                                className="h-6 object-contain"
                                onError={(e) => {
                                    if (e.target.src !== mainSponsor?.fallback && mainSponsor?.fallback) {
                                        e.target.src = mainSponsor.fallback;
                                    }
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;