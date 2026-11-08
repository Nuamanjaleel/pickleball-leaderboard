import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { sponsors } from '../data/mockData';
import { SITE } from '../data/siteConfig';

const Footer = () => {
    const partners = sponsors.filter((s) => !s.isMain);
    const main = sponsors.find((s) => s.isMain) || sponsors[0];
    const link = 'hover:text-white underline-offset-4 hover:underline transition-colors';

    return (
        <footer className="bg-[#071220] border-t border-white/10 text-white pt-16 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section id="sponsors" aria-labelledby="sponsors-title" className="mb-16 bg-[#0A1A2F] rounded-2xl p-8 border border-white/10 shadow-2xl scroll-mt-24">
                    <div className="text-center mb-8">
                        <span className="text-[#C5FF00] text-xs font-extrabold tracking-widest uppercase px-3 py-1 rounded-full bg-[#C5FF00]/10 border border-[#C5FF00]/20">
                            Sponsor placeholders
                        </span>
                        <h2 id="sponsors-title" className="text-2xl font-black text-white mt-3 tracking-wide">Sponsor Showcase</h2>
                        <p className="mt-2 text-sm text-slate-300 max-w-xl mx-auto">
                            Logos are illustrative placeholders for design purposes. They do not indicate any
                            partnership, sponsorship or endorsement.
                        </p>
                    </div>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 items-center justify-items-center">
                        {partners.map((s) => (
                            <li key={s.id} className="w-full h-20 bg-white rounded-xl flex items-center justify-center overflow-hidden p-2">
                                <img src={s.logo} alt={`${s.name} (illustrative placeholder logo)`} className="object-contain max-h-14 max-w-[85%]" />
                            </li>
                        ))}
                    </ul>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <img src="/cpbl-logo.png" alt="" className="h-10 w-10 object-contain" />
                            <span className="font-black text-2xl tracking-wider text-white">CPBL</span>
                        </div>
                        <p className="text-slate-300 text-xs leading-relaxed">
                            Pickleball rankings, tournament news and league updates.
                        </p>
                    </div>

                    <nav aria-label="Quick links">
                        <h2 className="text-[#C5FF00] text-xs font-extrabold uppercase tracking-wider mb-4">Quick Links</h2>
                        <ul className="space-y-2 text-xs text-slate-300 font-semibold">
                            <li><a href="#rankings" className={link}>Player Rankings</a></li>
                            <li><a href="#rankings" className={link}>Prize Winners</a></li>
                            <li><a href="#sponsors" className={link}>Sponsor Showcase</a></li>
                        </ul>
                    </nav>

                    <div id="contact" className="scroll-mt-24">
                        <h2 className="text-[#C5FF00] text-xs font-extrabold uppercase tracking-wider mb-4">Contact</h2>
                        <ul className="space-y-3 text-xs text-slate-300 font-medium">
                            <li className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-[#C5FF00]" aria-hidden="true" />
                                <a href={`mailto:${SITE.contactEmail}`} className={link}>{SITE.contactEmail}</a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="w-4 h-4 text-[#C5FF00] shrink-0 mt-0.5" aria-hidden="true" />
                                <span>{SITE.operatorAddress}</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[#C5FF00] text-xs font-extrabold uppercase tracking-wider mb-4">Sample Main Partner</h2>
                        <div className="p-4 rounded-xl bg-white flex items-center justify-center min-h-[88px]">
                            <img src={main.logo} alt={`${main.name} (illustrative placeholder logo)`} className="object-contain max-h-12 max-w-[85%]" />
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-4">
                    <p>© {new Date().getFullYear()} CPBL. All rights reserved.</p>
                    <nav aria-label="Legal">
                        <ul className="flex gap-6 font-medium">
                            <li><a href="#/privacy" className={link}>Privacy Policy</a></li>
                            <li><a href="#/terms" className={link}>Terms of Use</a></li>
                            <li><a href="#/cookies" className={link}>Cookie Policy</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
