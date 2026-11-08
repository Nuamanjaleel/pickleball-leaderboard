import React from 'react';
import { SITE } from '../data/siteConfig';

// Shown while SITE.demoMode is true so sample content is never mistaken for real league data.
const DemoNotice = () =>
    SITE.demoMode ? (
        <aside aria-label="Sample content notice" className="bg-[#C5FF00] text-[#0A1A2F] text-center text-xs sm:text-sm font-semibold px-4 py-2">
            Design preview: rankings, results, stories, prizes and sponsor logos on this site are sample content,
            not official league data.
        </aside>
    ) : null;

export default DemoNotice;
