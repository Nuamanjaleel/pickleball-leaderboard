// Central place for operator details used on the legal pages and footer.
// TODO (before launch): replace every value marked [FILL IN] and set legalDraft to false
// once a qualified lawyer has reviewed the policies.
export const SITE = {
    name: 'CPBL',
    url: 'https://[FILL IN - production domain]',
    operatorName: '[FILL IN - legal name of the entity operating this website]',
    operatorAddress: '[FILL IN - registered postal address, India]',
    contactEmail: 'support@cpblpickleball.com', // [FILL IN - confirm this mailbox exists]
    privacyEmail: 'support@cpblpickleball.com', // [FILL IN - privacy / grievance contact]
    governingCity: '[FILL IN - city for courts, e.g. Mumbai]',
    lastUpdated: '7 November 2026',
    // Shows "sample data" notices across the site. Set to false only when real, verified data is used.
    demoMode: true,
    // Shows a "draft - not legally reviewed" notice on policy pages.
    legalDraft: true,
};
