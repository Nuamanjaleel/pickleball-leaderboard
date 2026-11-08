import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Leaderboard from './components/Leaderboard';
import NewsFeed from './components/NewsFeed';
import RightRail from './components/RightRail';
import Footer from './components/Footer';
import DemoNotice from './components/DemoNotice';
import { Privacy, Terms, Cookies } from './pages/LegalPages';

const pages = { '#/privacy': Privacy, '#/terms': Terms, '#/cookies': Cookies };

// Minimal hash router: "#/privacy" etc. show legal pages; "#rankings" style anchors stay on the home page.
function useHash() {
    const [hash, setHash] = useState(window.location.hash);
    useEffect(() => {
        const on = () => setHash(window.location.hash);
        window.addEventListener('hashchange', on);
        return () => window.removeEventListener('hashchange', on);
    }, []);
    return hash;
}

function App() {
    const hash = useHash();
    const Page = pages[hash];

    useEffect(() => {
        if (Page || hash === '#/' || hash === '') {
            window.scrollTo(0, 0);
            document.title = Page
                ? `${hash.slice(2).replace(/^./, (c) => c.toUpperCase())} | CPBL`
                : 'CPBL — Pickleball, in play';
        } else {
            document.getElementById(hash.slice(1))?.scrollIntoView();
        }
    }, [hash, Page]);

    return (
        <div className="min-h-screen bg-[#F4F6F8] font-sans selection:bg-[#C5FF00] selection:text-[#0A1A2F]">
            <a href="#main" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); document.getElementById('main')?.scrollIntoView(); }}
                className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-[#0A1A2F] focus:px-4 focus:py-2 focus:rounded focus:font-bold">
                Skip to main content
            </a>
            <DemoNotice />
            {!Page && <Header />}

            <main id="main" tabIndex={-1} className="outline-none">
                {Page ? (
                    <Page />
                ) : (
                    <>
                        <Hero />
                        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                                <div className="lg:col-span-3"><Leaderboard /></div>
                                <div className="lg:col-span-6 space-y-8"><NewsFeed /></div>
                                <aside aria-label="Headlines, stats and contributors" className="lg:col-span-3 lg:sticky lg:top-24">
                                    <RightRail />
                                </aside>
                            </div>
                        </div>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default App;
