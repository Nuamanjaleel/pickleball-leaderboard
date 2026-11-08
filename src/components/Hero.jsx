import React from 'react';
import { sponsors } from '../data/mockData';

const Hero = () => (
    <section aria-labelledby="hero-title" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A1A2F]">
        {/* Full-bleed athlete image (decorative; licence to be confirmed by the client) */}
        <img src="/juan.jpg" alt="" className="absolute inset-0 w-full h-full object-cover object-center" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F]/95 via-[#0A1A2F]/70 to-[#0A1A2F]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/90 via-transparent to-[#0A1A2F]/50" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-8 flex items-center justify-between">
            <a href="#/" className="flex items-center gap-3" aria-label="CPBL home">
                <img src="/cpbl-logo.png" alt="" className="h-10 sm:h-12 w-auto object-contain drop-shadow-lg" />
                <span className="flex flex-col leading-none">
                    <span className="font-black text-2xl tracking-[0.15em] text-white">CPBL</span>
                    <span className="text-[10px] tracking-[0.25em] text-white/80 uppercase font-semibold mt-1">Pro League</span>
                </span>
            </a>

            <nav aria-label="Main" className="hidden md:flex items-center gap-8 text-sm font-semibold text-white">
                <a href="#rankings" className="hover:text-[#C5FF00] transition-colors">Rankings</a>
                <a href="#sponsors" className="hover:text-[#C5FF00] transition-colors">Sponsors</a>
                <a href="#contact" className="hover:text-[#C5FF00] transition-colors">Contact</a>
            </nav>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex flex-col justify-center pb-28">
            <h1 id="hero-title" className="text-white font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none max-w-4xl">
                Dominate the Court,
                <br />
                Command the
                <br />
                Game.
            </h1>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-gradient-to-t from-black/60 to-transparent">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5">
                <p className="text-[11px] uppercase tracking-[0.25em] text-white/80 font-semibold mb-3">
                    Sponsor placeholders (illustrative, no partnership implied)
                </p>
                <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
                    {sponsors.map((s) => (
                        <li key={s.id} className="text-white/85 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                            {s.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
);

export default Hero;
