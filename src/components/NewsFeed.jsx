import React from 'react';
import { Newspaper } from 'lucide-react';
import { articles } from '../data/mockData';
import { SITE } from '../data/siteConfig';
import NewsImage from './NewsImage';

const NewsFeed = () => (
    <section aria-labelledby="news-title" className="space-y-8">
        <div className="space-y-2">
            <div className="flex items-center gap-2">
                <Newspaper className="w-5 h-5 text-[#0B4F8C]" aria-hidden="true" />
                <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0B4F8C]">CPBL Journal</span>
            </div>
            <h2 id="news-title" className="text-3xl sm:text-4xl font-black text-[#0A1A2F] tracking-tight leading-tight">
                League News &amp; Stories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl leading-relaxed">
                {SITE.demoMode
                    ? 'Sample layout for match reports, academy news and coaching features. The stories below are placeholders.'
                    : 'Match reports, academy news and the plays that shape the rankings.'}
            </p>
        </div>

        <div className="space-y-6">
            {articles.map((post, idx) => (
                <article key={post.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    <div className="relative w-full h-52 sm:h-64 overflow-hidden bg-slate-100">
                        <NewsImage tone={post.tone} />
                        <div className="absolute top-4 left-4">
                            <span className="bg-[#0A1A2F] text-[#C5FF00] text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-md">
                                {post.category}
                            </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                            <span className="bg-white text-[#0A1A2F] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded">
                                CPBL Journal / {String(idx + 1).padStart(2, '0')}
                            </span>
                        </div>
                    </div>
                    <div className="p-6 sm:p-8">
                        <h3 className="text-xl sm:text-2xl font-black text-[#0A1A2F] leading-snug">{post.title}</h3>
                        {post.excerpt && <p className="mt-3 text-slate-700 text-sm sm:text-[15px] leading-relaxed">{post.excerpt}</p>}
                        {SITE.demoMode && (
                            <p className="mt-5 border-t border-slate-100 pt-4 text-xs font-semibold text-slate-600">
                                Sample content. Full story pages are not part of this preview.
                            </p>
                        )}
                    </div>
                </article>
            ))}
        </div>
    </section>
);

export default NewsFeed;
