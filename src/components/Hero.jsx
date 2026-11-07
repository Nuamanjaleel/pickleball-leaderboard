import React from 'react';

const Hero = () => {
    const partnerNames = [
        'Red Bull',
        'Wilson',
        'Babolat',
        'Gatorade',
        'Oakley',
        'New Balance',
        'DHL'
    ];

    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-[#0A1A2F]">
            {/* Full-bleed athlete image */}
            <img
                src="/juan.jpg"
                alt="CPBL Athlete"
                className="absolute inset-0 w-full h-full object-cover object-center"
                onError={(e) => {
                    e.target.style.display = 'none';
                }}
            />

            {/* Dark gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1A2F]/95 via-[#0A1A2F]/70 to-[#0A1A2F]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A2F]/90 via-transparent to-[#0A1A2F]/50" />

            {/* Top bar inside hero (logo + nav) */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 pt-8 flex items-center justify-between">
                {/* CPBL Logo + Wordmark */}
                <div className="flex items-center gap-3">
                    <img
                        src="/cpbl-logo.png"
                        alt="CPBL Logo"
                        className="h-10 sm:h-12 w-auto object-contain drop-shadow-lg"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    <div
                        className="hidden h-12 w-12 rounded-xl bg-[#C5FF00] items-center justify-center text-[#0A1A2F] font-black text-2xl"
                        aria-hidden="true"
                    >
                        P
                    </div>
                    <div className="flex flex-col leading-none">
                        <span className="font-black text-2xl tracking-[0.15em] text-white">CPBL</span>
                        <span className="text-[10px] tracking-[0.25em] text-white/60 uppercase font-semibold mt-1">
                            Pro League
                        </span>
                    </div>
                </div>

                {/* Hero nav links */}
                <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/90">
                    <a href="#rankings" className="hover:text-[#C5FF00] transition-colors">
                        Rankings
                    </a>
                    <a href="#contact" className="hover:text-[#C5FF00] transition-colors">
                        Contact
                    </a>
                    <a href="#sponsors" className="hover:text-[#C5FF00] transition-colors">
                        Sponsors
                    </a>
                    <a href="#download" className="hover:text-[#C5FF00] transition-colors">
                        Download
                    </a>
                </nav>
            </div>

            {/* Main caption - Clean Bold Sans-Serif */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 h-full flex flex-col justify-center pb-28">
                <h1 className="text-white font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none max-w-4xl">
                    Dominate the Court,
                    <br />
                    Command the
                    <br />
                    Game.
                </h1>
            </div>

            {/* Bottom sponsor name strip */}
            <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-gradient-to-t from-black/40 to-transparent">
                <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-5">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/50 font-semibold mb-3">
                        Official Partners &amp; Sponsors
                    </p>
                    <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
                        {partnerNames.map((name) => (
                            <span
                                key={name}
                                className="text-white/70 text-xs md:text-sm font-bold tracking-[0.2em] uppercase hover:text-[#C5FF00] transition-colors cursor-default"
                            >
                                {name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;