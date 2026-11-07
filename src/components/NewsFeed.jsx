import React from 'react';
import { Clock, ArrowUpRight, Newspaper } from 'lucide-react';
import { articles } from '../data/mockData';

const NewsFeed = () => {
    const posts = Array.isArray(articles) ? articles : [];

    return (
        <section className="space-y-8">
            {/* Section heading + subtext */}
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <Newspaper className="w-5 h-5 text-[#1A7AC5]" />
                    <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#1A7AC5]">
                        CPBL Journal
                    </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#0A1A2F] tracking-tight leading-tight">
                    League News &amp; Stories
                </h2>
                <p className="text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed">
                    Match reports, academy drops, and the plays that shape the rankings — straight from the
                    CPBL desk.
                </p>
            </div>

            {/* Article cards */}
            <div className="space-y-6">
                {posts.map((post, idx) => (
                    <article
                        key={post.id || idx}
                        className="group bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-[#1A7AC5]/30 transition-all"
                    >
                        {/* Image */}
                        <div className="relative w-full h-52 sm:h-64 overflow-hidden bg-slate-100">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                onError={(e) => {
                                    e.target.src =
                                        'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=1200';
                                }}
                            />
                            <div className="absolute top-4 left-4">
                                <span className="bg-[#0A1A2F] text-[#C5FF00] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md">
                                    {post.category}
                                </span>
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <span className="bg-white/90 backdrop-blur text-[#0A1A2F] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                                    CPBL Journal / {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 sm:p-8">
                            <h3 className="text-xl sm:text-2xl font-black text-[#0A1A2F] leading-snug group-hover:text-[#1A7AC5] transition-colors">
                                {post.title}
                            </h3>

                            {post.excerpt && (
                                <p className="mt-3 text-slate-600 text-sm sm:text-[15px] leading-relaxed">
                                    {post.excerpt}
                                </p>
                            )}

                            <div className="mt-5 flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
                                <div className="flex items-center gap-3 text-xs text-slate-400 font-semibold">
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {post.date}
                                    </span>
                                    {post.readTime && (
                                        <>
                                            <span className="w-1 h-1 rounded-full bg-slate-300" />
                                            <span>{post.readTime}</span>
                                        </>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1A7AC5] hover:text-[#0A1A2F] transition-colors"
                                >
                                    Read story
                                    <ArrowUpRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default NewsFeed;