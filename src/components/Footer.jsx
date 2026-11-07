import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { sponsors } from '../data/mockData';

const SponsorLogo = ({ sponsor }) => {
    const [srcIndex, setSrcIndex] = useState(0);

    const sources = [
        sponsor?.logo,
        sponsor?.fallback,
        `https://logo.clearbit.com/${sponsor?.name?.toLowerCase().replace(/\s+/g, '')}.com`
    ].filter(Boolean);

    const isBabolat = sponsor?.name?.toLowerCase().includes('babolat');
    const isOakley = sponsor?.name?.toLowerCase().includes('oakley');

    return (
        <div className="w-full h-full flex items-center justify-center p-2">
            <img
                src={sources[srcIndex] || sponsor?.fallback}
                alt={sponsor?.name || 'Sponsor'}
                className={`object-contain max-h-12 w-auto transition-transform ${isBabolat ? 'scale-150 max-h-14' : isOakley ? 'scale-125 max-h-12' : 'max-h-10 max-w-[85%]'
                    }`}
                onError={() => {
                    if (srcIndex < sources.length - 1) {
                        setSrcIndex(srcIndex + 1);
                    }
                }}
            />
        </div>
    );
};

const Footer = () => {
    const partnerSponsors = (sponsors || []).filter((s) => s?.type === 'partner' || !s?.isMain);
    const mainSponsor = (sponsors || []).find((s) => s?.type === 'main' || s?.isMain) || sponsors?.[0];

    return (
        <footer id="sponsors" className="bg-[#071220] border-t border-white/10 text-white pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Official Sponsors Strip */}
                <div className="mb-16 bg-[#0A1A2F] rounded-2xl p-8 border border-white/10 shadow-2xl">
                    <div className="text-center mb-8">
                        <span className="text-[#C5FF00] text-xs font-extrabold tracking-widest uppercase px-3 py-1 rounded-full bg-[#C5FF00]/10 border border-[#C5FF00]/20">
                            Official League Partners
                        </span>
                        <h3 className="text-2xl font-black text-white mt-3 tracking-wide">
                            Powered By Global Leaders
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-items-center">
                        {partnerSponsors.map((sponsor) => (
                            <div
                                key={sponsor?.id || sponsor?.name}
                                className="w-full h-20 bg-white rounded-xl border border-white/20 flex items-center justify-center overflow-hidden hover:scale-105 transition-all shadow-md"
                            >
                                <SponsorLogo sponsor={sponsor} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img
                                src="/cpbl-logo.png"
                                alt="CPBL Logo"
                                className="h-10 w-10 object-contain"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                            <span className="font-black text-2xl tracking-wider text-white">CPBL</span>
                        </div>
                        <p className="text-slate-400 text-xs leading-relaxed">
                            The premier professional pickleball league setting the gold standard for competition,
                            rankings, and athlete excellence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[#C5FF00] text-xs font-extrabold uppercase tracking-wider mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-xs text-slate-400 font-semibold">
                            <li>
                                <a href="#rankings" className="hover:text-white transition-colors">
                                    Player Rankings
                                </a>
                            </li>
                            <li>
                                <a href="#rankings" className="hover:text-white transition-colors">
                                    Prize Winners
                                </a>
                            </li>
                            <li>
                                <a href="#sponsors" className="hover:text-white transition-colors">
                                    Sponsor Showcase
                                </a>
                            </li>
                            <li>
                                <a href="#download" className="hover:text-white transition-colors">
                                    Download App
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div id="contact">
                        <h4 className="text-[#C5FF00] text-xs font-extrabold uppercase tracking-wider mb-4">
                            Contact League
                        </h4>
                        <ul className="space-y-3 text-xs text-slate-400 font-medium">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-[#1A7AC5]" /> support@cpblpickleball.com
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-[#1A7AC5]" /> +91 (800) 555-CPBL
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-[#1A7AC5]" /> Sports Complex, Stadium Road
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[#C5FF00] text-xs font-extrabold uppercase tracking-wider mb-4">
                            Title Sponsor
                        </h4>
                        <div className="p-4 rounded-xl bg-white border border-white/20 flex flex-col items-center justify-center gap-1 min-h-[88px]">
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                                Presented By
                            </span>
                            <SponsorLogo sponsor={mainSponsor} />
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
                    <p>© {new Date().getFullYear()} CPBL (Pickleball League). All rights reserved.</p>
                    <div className="flex gap-6 font-medium">
                        <a href="#" className="hover:text-slate-300 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-slate-300 transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-slate-300 transition-colors">
                            Rulebook
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;