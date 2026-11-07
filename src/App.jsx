import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Leaderboard from './components/Leaderboard';
import NewsFeed from './components/NewsFeed';
import RightRail from './components/RightRail';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-[#F4F6F8] font-sans selection:bg-[#C5FF00] selection:text-[#0A1A2F]">
            <Header />

            <main>
                {/* Full-bleed Hero section stays exactly as it is */}
                <Hero />

                {/* 3-Column Dashboard Layout */}
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                        {/* Left Column: Leaderboards (Col span 3) */}
                        <div className="lg:col-span-3 sticky top-24">
                            <Leaderboard />
                        </div>

                        {/* Center Column: News Feed (Col span 6) */}
                        <div className="lg:col-span-6 space-y-8">
                            <NewsFeed />
                        </div>

                        {/* Right Column: Stats & Headlines (Col span 3) */}
                        <aside className="lg:col-span-3 sticky top-24">
                            <RightRail />
                        </aside>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default App;