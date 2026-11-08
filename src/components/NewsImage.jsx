import React from 'react';

// Local decorative illustration used in place of remote stock photos (licensing + privacy).
const palettes = [
    ['#0A1A2F', '#1A7AC5'],
    ['#0B4F8C', '#0A1A2F'],
    ['#123A5E', '#1A7AC5'],
];

const NewsImage = ({ tone = 0 }) => {
    const [a, b] = palettes[tone % palettes.length];
    const id = `g${tone}`;
    return (
        <svg viewBox="0 0 800 400" className="w-full h-full" role="img" aria-label="Decorative pickleball court illustration" preserveAspectRatio="xMidYMid slice">
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor={a} />
                    <stop offset="1" stopColor={b} />
                </linearGradient>
            </defs>
            <rect width="800" height="400" fill={`url(#${id})`} />
            <g fill="none" stroke="#ffffff" strokeOpacity=".55" strokeWidth="4">
                <rect x="120" y="60" width="560" height="280" />
                <line x1="400" y1="60" x2="400" y2="340" />
                <line x1="260" y1="60" x2="260" y2="340" />
                <line x1="540" y1="60" x2="540" y2="340" />
                <line x1="260" y1="200" x2="540" y2="200" />
            </g>
            <circle cx="610" cy="120" r="26" fill="#C5FF00" />
            <g fill="#0A1A2F" fillOpacity=".6">
                <circle cx="600" cy="112" r="4" /><circle cx="620" cy="116" r="4" /><circle cx="610" cy="132" r="4" />
            </g>
        </svg>
    );
};

export default NewsImage;
