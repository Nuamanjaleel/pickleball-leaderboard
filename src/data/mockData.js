// ALL DATA IN THIS FILE IS FICTIONAL SAMPLE DATA for design demonstration.
// Names are invented and any resemblance to real people is coincidental.
// Replace with verified league data before presenting it as real.

export const rankings = [
    // Men's Singles
    { id: 1, rank: 1, name: 'Arjun Rao', points: 4500, gender: 'men', type: 'singles' },
    { id: 2, rank: 2, name: 'Vikram Sethi', points: 4200, gender: 'men', type: 'singles' },
    { id: 3, rank: 3, name: 'Rohan Mehta', points: 3800, gender: 'men', type: 'singles' },
    { id: 4, rank: 4, name: 'Kabir Nair', points: 3600, gender: 'men', type: 'singles' },
    { id: 5, rank: 5, name: 'Aditya Bansal', points: 3400, gender: 'men', type: 'singles' },
    { id: 15, rank: 6, name: 'Dev Malhotra', points: 3200, gender: 'men', type: 'singles' },
    { id: 16, rank: 7, name: 'Ishaan Kulkarni', points: 3000, gender: 'men', type: 'singles' },
    { id: 17, rank: 8, name: 'Neel Chandra', points: 2850, gender: 'men', type: 'singles' },
    { id: 18, rank: 9, name: 'Samar Joshi', points: 2700, gender: 'men', type: 'singles' },
    { id: 19, rank: 10, name: 'Yash Iyer', points: 2550, gender: 'men', type: 'singles' },

    // Women's Singles
    { id: 6, rank: 1, name: 'Meera Kapoor', points: 4800, gender: 'women', type: 'singles' },
    { id: 7, rank: 2, name: 'Tara Menon', points: 4400, gender: 'women', type: 'singles' },
    { id: 8, rank: 3, name: 'Ishita Verma', points: 3900, gender: 'women', type: 'singles' },
    { id: 9, rank: 4, name: 'Kavya Reddy', points: 3700, gender: 'women', type: 'singles' },
    { id: 10, rank: 5, name: 'Naina Shah', points: 3500, gender: 'women', type: 'singles' },
    { id: 20, rank: 6, name: 'Riya Bhatt', points: 3300, gender: 'women', type: 'singles' },
    { id: 21, rank: 7, name: 'Diya Pillai', points: 3100, gender: 'women', type: 'singles' },
    { id: 22, rank: 8, name: 'Sanya Gill', points: 2950, gender: 'women', type: 'singles' },
    { id: 23, rank: 9, name: 'Aarohi Das', points: 2800, gender: 'women', type: 'singles' },
    { id: 24, rank: 10, name: 'Pooja Sinha', points: 2650, gender: 'women', type: 'singles' },

    // Men's Doubles
    { id: 11, rank: 1, name: 'Rao / Sethi', points: 5000, gender: 'men', type: 'doubles' },
    { id: 12, rank: 2, name: 'Mehta / Nair', points: 4600, gender: 'men', type: 'doubles' },
    { id: 25, rank: 3, name: 'Bansal / Malhotra', points: 4100, gender: 'men', type: 'doubles' },
    { id: 26, rank: 4, name: 'Kulkarni / Chandra', points: 3900, gender: 'men', type: 'doubles' },
    { id: 27, rank: 5, name: 'Joshi / Iyer', points: 3700, gender: 'men', type: 'doubles' },

    // Women's Doubles
    { id: 13, rank: 1, name: 'Kapoor / Menon', points: 5200, gender: 'women', type: 'doubles' },
    { id: 14, rank: 2, name: 'Verma / Reddy', points: 4300, gender: 'women', type: 'doubles' },
    { id: 28, rank: 3, name: 'Shah / Bhatt', points: 4000, gender: 'women', type: 'doubles' },
    { id: 29, rank: 4, name: 'Pillai / Gill', points: 3750, gender: 'women', type: 'doubles' },
    { id: 30, rank: 5, name: 'Das / Sinha', points: 3500, gender: 'women', type: 'doubles' },
];

export const tournamentWinners = [
    { id: 1, rank: 'Winner', name: 'Arjun Rao', prize: '₹1,50,000', category: "Men's Singles" },
    { id: 2, rank: '1st Runner Up', name: 'Vikram Sethi', prize: '₹75,000', category: "Men's Singles" },
    { id: 3, rank: '2nd Runner Up', name: 'Kabir Nair', prize: '₹40,000', category: "Men's Singles" },
];

export const prizeWinners = tournamentWinners;

// Sponsor logos are ILLUSTRATIVE PLACEHOLDERS only. They are third-party trademarks and
// must not be shown as real partners without written permission from each brand.
export const sponsors = [
    { id: 1, name: 'Red Bull', logo: '/redbull.png', type: 'main', isMain: true },
    { id: 2, name: 'Wilson', logo: '/wilson.png', type: 'partner', isMain: false },
    { id: 3, name: 'Oakley', logo: '/oakely.png', type: 'partner', isMain: false },
    { id: 4, name: 'Gatorade', logo: '/gatorade.png', type: 'partner', isMain: false },
    { id: 5, name: 'New Balance', logo: '/newbalance.png', type: 'partner', isMain: false },
    { id: 6, name: 'DHL', logo: '/dhl.png', type: 'partner', isMain: false },
    { id: 7, name: 'Babolat', logo: '/babolat.png', type: 'partner', isMain: false },
];

export const articles = [
    {
        id: 1,
        title: 'Sample story: A Night to Remember at the Championship Finals',
        excerpt:
            'Placeholder copy showing how a tournament report will look: packed stands, clutch rallies and a last-point showdown.',
        category: 'Tournament',
        readTime: 'Sample',
        tone: 0,
    },
    {
        id: 2,
        title: 'Sample story: New Training Center Opens',
        excerpt:
            'Placeholder copy showing how an academy announcement will look. Replace with a verified announcement before launch.',
        category: 'Academy',
        readTime: 'Sample',
        tone: 1,
    },
    {
        id: 3,
        title: 'Sample story: Winning the Transition Zone',
        excerpt:
            'Placeholder copy showing how a coaching feature will look: controlling the mid-court and turning defense into attack.',
        category: 'Insights',
        readTime: 'Sample',
        tone: 2,
    },
];

export const news = articles;

export const contributors = [
    { id: 1, name: 'Rahul Desai', role: 'Technical Analyst' },
    { id: 2, name: 'Sneha Pandey', role: 'Lead Umpire' },
];

export const headlines = [
    { id: 1, text: 'Sample headline: Summer Open registration announcement' },
    { id: 2, text: 'Sample headline: New ranking points system announcement' },
];

export const stats = [
    { label: 'Players', value: '1,240' },
    { label: 'Tournaments', value: '12' },
    { label: 'Prize Pool', value: '₹25,00,000' },
    { label: 'Cities', value: '24' },
];
