import React, { useState, useEffect } from 'react';
import { Trophy, Shield, Phone } from 'lucide-react';
import { sponsors } from '../data/mockData';
import { SITE } from '../data/siteConfig';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const mainSponsor = sponsors.find((s) => s.isMain) || sponsors[0];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 400);
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            // While hidden, the header must not be reachable by keyboard or screen readers.
            inert={!isScrolled ? '' : undefined}
            aria-hidden={!isScrolled}
            className={`fixed top-0 left-0 right-0 z-50 bg-[#0A1A2F]/95 backdrop-blur-md border-b border-white/10 text-white transition-all duration-500 ease-in-out motion-reduce:transition-none ${
                isScrolled ? 'translate-y-0 opacity-100 shadow-xl' : '-translate-y-full opacity-0 pointer-events-none'
            }`}
        >
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <a href="#/" className="flex items-center gap-3" aria-label={`${SITE.name} home`}>
                    <img src="/cpbl-logo.png" alt="" className="h-10 w-auto object-contain" />
                    <span className="font-black text-xl tracking-wider text-white">CPBL</span>
                </a>

                <nav aria-label="Main" className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide">
                    <a href="#rankings" className="hover:text-[#C5FF00] transition-colors flex items-center gap-1.5">
                        <Trophy className="w-4 h-4 text-[#C5FF00]" aria-hidden="true" /> Rankings
                    </a>
                    <a href="#sponsors" className="hover:text-[#C5FF00] transition-colors flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-[#C5FF00]" aria-hidden="true" /> Sponsors
                    </a>
                    <a href="#contact" className="hover:text-[#C5FF00] transition-colors flex items-center gap-1.5">
                        <Phone className="w-4 h-4 text-[#C5FF00]" aria-hidden="true" /> Contact
                    </a>
                </nav>

                {mainSponsor && (
                    <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                        <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold hidden sm:inline">
                            Sample main partner
                        </span>
                        <div className="bg-white px-2 py-1 rounded flex items-center justify-center">
                            <img src={mainSponsor.logo} alt={`${mainSponsor.name} (illustrative placeholder logo)`} className="h-6 object-contain" />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
