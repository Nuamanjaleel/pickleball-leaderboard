export const rankings = [
    // Men's Singles
    { id: 1, rank: 1, name: "Ben Johns", points: 4500, change: "up", gender: "men", type: "singles" },
    { id: 2, rank: 2, name: "Federico Staksrud", points: 4200, change: "down", gender: "men", type: "singles" },
    { id: 3, rank: 3, name: "Connor Garnett", points: 3800, change: "same", gender: "men", type: "singles" },
    { id: 4, rank: 4, name: "JW Johnson", points: 3600, change: "up", gender: "men", type: "singles" },
    { id: 5, rank: 5, name: "Tyson McGuffin", points: 3400, change: "down", gender: "men", type: "singles" },
    { id: 15, rank: 6, name: "Andrei Daescu", points: 3200, change: "up", gender: "men", type: "singles" },
    { id: 16, rank: 7, name: "James Ignatowich", points: 3000, change: "same", gender: "men", type: "singles" },
    { id: 17, rank: 8, name: "Dylan Frazier", points: 2850, change: "down", gender: "men", type: "singles" },
    { id: 18, rank: 9, name: "Christian Alshon", points: 2700, change: "up", gender: "men", type: "singles" },
    { id: 19, rank: 10, name: "Dekel Bar", points: 2550, change: "same", gender: "men", type: "singles" },

    // Women's Singles
    { id: 6, rank: 1, name: "Anna Leigh Waters", points: 4800, change: "up", gender: "women", type: "singles" },
    { id: 7, rank: 2, name: "Catherine Parenteau", points: 4400, change: "same", gender: "women", type: "singles" },
    { id: 8, rank: 3, name: "Salome Devidze", points: 3900, change: "up", gender: "women", type: "singles" },
    { id: 9, rank: 4, name: "Lea Jansen", points: 3700, change: "down", gender: "women", type: "singles" },
    { id: 10, rank: 5, name: "Mary Brascia", points: 3500, change: "same", gender: "women", type: "singles" },
    { id: 20, rank: 6, name: "Brooke Buckner", points: 3300, change: "up", gender: "women", type: "singles" },
    { id: 21, rank: 7, name: "Parris Todd", points: 3100, change: "down", gender: "women", type: "singles" },
    { id: 22, rank: 8, name: "Jessie Irvine", points: 2950, change: "same", gender: "women", type: "singles" },
    { id: 23, rank: 9, name: "Rachel Rohrabacher", points: 2800, change: "up", gender: "women", type: "singles" },
    { id: 24, rank: 10, name: "Tina Pisnik", points: 2650, change: "same", gender: "women", type: "singles" },

    // Men's Doubles
    { id: 11, rank: 1, name: "Johns / Johns", points: 5000, change: "same", gender: "men", type: "doubles" },
    { id: 12, rank: 2, name: "Wright / Newman", points: 4600, change: "up", gender: "men", type: "doubles" },
    { id: 25, rank: 3, name: "Staksrud / Tardio", points: 4100, change: "down", gender: "men", type: "doubles" },
    { id: 26, rank: 4, name: "Johnson / Johnson", points: 3900, change: "same", gender: "men", type: "doubles" },
    { id: 27, rank: 5, name: "McGuffin / Waters", points: 3700, change: "up", gender: "men", type: "doubles" },

    // Women's Doubles
    { id: 13, rank: 1, name: "Waters / Parenteau", points: 5200, change: "same", gender: "women", type: "doubles" },
    { id: 14, rank: 2, name: "Bright / Rohrabacher", points: 4300, change: "up", gender: "women", type: "doubles" },
    { id: 28, rank: 3, name: "Devidze / Jansen", points: 4000, change: "down", gender: "women", type: "doubles" },
    { id: 29, rank: 4, name: "Brascia / Buckner", points: 3750, change: "same", gender: "women", type: "doubles" },
    { id: 30, rank: 5, name: "Todd / Irvine", points: 3500, change: "up", gender: "women", type: "doubles" }
];

export const tournamentWinners = [
    {
        rank: "Winner",
        name: "Ben Johns",
        prize: "₹1,50,000",
        category: "Men's Singles",
        image: "https://images.unsplash.com/photo-1593787467001-e3210c4a400c?auto=format&fit=crop&q=80&w=200"
    },
    {
        rank: "1st Runner Up",
        name: "Federico Staksrud",
        prize: "₹75,000",
        category: "Men's Singles",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
    },
    {
        rank: "2nd Runner Up",
        name: "JW Johnson",
        prize: "₹40,000",
        category: "Men's Singles",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    }
];

export const prizeWinners = tournamentWinners;

export const sponsors = [
    {
        id: 1,
        name: "Red Bull",
        logo: "/redbull.png",
        fallback: "https://cdn.worldvectorlogo.com/logos/red-bull.svg",
        type: "main",
        isMain: true
    },
    {
        id: 2,
        name: "Wilson",
        logo: "/wilson.png",
        fallback: "https://cdn.worldvectorlogo.com/logos/wilson-1.svg",
        type: "partner",
        isMain: false
    },
    {
        id: 3,
        name: "Oakley",
        logo: "/oakley.png",
        fallback: "https://cdn.worldvectorlogo.com/logos/oakley-1.svg",
        type: "partner",
        isMain: false
    },
    {
        id: 4,
        name: "Gatorade",
        logo: "/gatorade.png",
        fallback: "https://cdn.worldvectorlogo.com/logos/gatorade-1.svg",
        type: "partner",
        isMain: false
    },
    {
        id: 5,
        name: "New Balance",
        logo: "/newbalance.png",
        fallback: "https://cdn.worldvectorlogo.com/logos/new-balance-2.svg",
        type: "partner",
        isMain: false
    },
    {
        id: 6,
        name: "DHL",
        logo: "/dhl.png",
        fallback: "https://cdn.worldvectorlogo.com/logos/dhl-1.svg",
        type: "partner",
        isMain: false
    },
    {
        id: 7,
        name: "Babolat",
        logo: "/babalot.png",
        fallback: "https://cdn.worldvectorlogo.com/logos/babolat.svg",
        type: "partner",
        isMain: false
    }
];

export const articles = [
    {
        id: 1,
        title: "CPBL Championship Finals: A Night to Remember",
        excerpt:
            "Packed stands, clutch rallies, and a last-point showdown that had the whole arena on its feet. Relive the points that defined this season's crown.",
        image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&q=80&w=1200",
        category: "Tournament",
        date: "March 10, 2024",
        readTime: "4 min read"
    },
    {
        id: 2,
        title: "New Training Center Opens in Downtown",
        excerpt:
            "Eight pro courts, recovery suites, and a performance lab — the new CPBL Training Center is open to ranked athletes and academy members this month.",
        image: "https://images.unsplash.com/photo-1626224580174-d6093f3098dc?auto=format&fit=crop&q=80&w=1200",
        category: "Academy",
        date: "March 8, 2024",
        readTime: "3 min read"
    },
    {
        id: 3,
        title: "Singles Strategy: Winning the Transition Zone",
        excerpt:
            "Coaches break down how top-ranked CPBL singles players control the mid-court and turn defense into an attack in under two shots.",
        image: "https://images.unsplash.com/photo-1595435934919-5c4b0b1b0b1b?auto=format&fit=crop&q=80&w=1200",
        category: "Insights",
        date: "March 5, 2024",
        readTime: "5 min read"
    }
];

export const news = articles;

export const contributors = [
    {
        id: 1,
        name: "Coach Mike",
        role: "Technical Analyst",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 2,
        name: "Sarah J.",
        role: "Lead Umpire",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
    }
];

export const headlines = [
    { id: 1, text: "Registration for Summer Open now live!", type: "alert" },
    { id: 2, text: "New ranking points system announced.", type: "news" }
];

export const stats = {
    totalPlayers: 1240,
    activeTournaments: 12,
    prizePool: "₹25,00,000",
    cities: 24
};