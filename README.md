# CPBL Pickleball Dashboard

Responsive React + Vite + Tailwind CSS website concept using warm cream, deep forest, rust and light teal.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Structure
- `src/App.jsx` — page composition
- `src/components/` — hero, ticker/navigation, leaderboards, news, right rail and footer
- `src/data/mockData.js` — editable sample rankings, teams, stories, headlines and contributors
- `src/index.css` and `tailwind.config.js` — design system and Tailwind styles

## Before production (checklist)
- All rankings, players, prizes, stories, contributors and stats in `src/data/mockData.js` are **fictional sample data**. Replace with verified data, then set `demoMode: false` in `src/data/siteConfig.js`.
- Fill every `[FILL IN]` value in `src/data/siteConfig.js` (operator name, address, domain, privacy email, jurisdiction city). Have a lawyer review the Privacy, Terms and Cookie pages, then set `legalDraft: false`.
- Sponsor logos in `public/` are third-party trademarks shown as illustrative placeholders. Remove them or obtain written permission before presenting them as real partners.
- Confirm licences for `public/juan.jpg` (hero photo) and `public/cpbl-logo.png`.
- The site sets no cookies and uses no analytics; fonts are self-hosted. If you add analytics, forms or embeds, update the Privacy and Cookie pages and add a consent control first.
- Legal pages live at `#/privacy`, `#/terms`, `#/cookies` (hash routes, no server config needed).
