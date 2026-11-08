import React from 'react';

// Local initials avatar: no external image service, no personal data leaves the browser.
const initials = (name = '') =>
    name
        .split(/[\s/]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((w) => w[0].toUpperCase())
        .join('');

const Avatar = ({ name, size = 'w-8 h-8', text = 'text-[11px]' }) => (
    <span
        aria-hidden="true"
        className={`${size} ${text} rounded-full bg-[#0A1A2F] text-white font-bold inline-flex items-center justify-center shrink-0`}
    >
        {initials(name)}
    </span>
);

export default Avatar;
