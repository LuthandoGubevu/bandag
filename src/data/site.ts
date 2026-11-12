// Single source of truth for trading details. Change a value here and every
// page, the emergency bar, the footer and the structured data update together.

export const site = {
  name: 'East London Bandag',
  altName: 'ELB Tyres',
  url: 'https://www.eastlondonbandag.com',
  proposition: 'The lowest cost per kilometre for Eastern Cape fleets, with the tyre back on the truck in a week.',
  address: {
    street: '7 Wells Road, Gately',
    city: 'East London',
    region: 'Eastern Cape',
    postalCode: '5201',
    country: 'South Africa',
    countryCode: 'ZA',
  },
  // Approximate position of Gately, East London. TO CONFIRM: drop a pin on the gate.
  geo: { lat: -33.0146, lng: 27.8736 },
  mapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=7+Wells+Road%2C+Gately%2C+East+London%2C+5201',
  email: 'sales@eastlondonbandag.com',
  tel: { display: '043 731 1109', href: 'tel:+27437311109', intl: '+27437311109' },
  fax: '086 515 9796',
  roadside: { display: '066 190 6725', href: 'tel:+27661906725', intl: '+27661906725' },
  eta: { display: '0800 30 40 50', href: 'tel:0800304050' },
  // TO CONFIRM: which number answers WhatsApp. The roadside cell number is assumed.
  whatsapp: '27661906725',
  // TO CONFIRM: real trading hours. 24-hour roadside assistance is independent of these.
  // Days use JavaScript numbering: 0 = Sunday ... 6 = Saturday. Times are SAST.
  hours: [
    { days: [1, 2, 3, 4, 5], label: 'Monday to Friday', open: '08:00', close: '17:00' },
  ],
  hoursClosedLabel: 'Saturday, Sunday and public holidays: closed. Roadside assistance runs 24 hours.',
  brands: [
    { name: 'Bandag', role: 'Retreads', note: 'Precure retreads made in our own plant under the Bandag manufacturing licence.' },
    { name: 'Apollo', role: 'New tyres', note: 'New truck and bus radials for regional and long-haul work.' },
    { name: 'Dunlop', role: 'New tyres', note: 'New commercial tyres across steer, drive and trailer positions.' },
    { name: 'Sumitomo', role: 'New tyres', note: 'New truck and bus radials with strong casings for later retreading.' },
    { name: 'Rema Tip Top', role: 'Repair materials', note: 'Patches, cements and tools used in our repairs and sold over the counter.' },
  ],
  // Optional process video. Paste a YouTube video ID to embed it on the Retreads page.
  // Leave empty and the video block is not rendered at all.
  videos: { retreadProcess: '' },
};

export const waLink = (text: string) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { key: 'retreads', label: 'Retreads', href: '/retreads/' },
  { key: 'new', label: 'New Tyres & Repairs', href: '/new-tyres-repairs/' },
  { key: 'fleet', label: 'Fleet Solutions', href: '/fleet-solutions/' },
  { key: 'why', label: 'Why Retread', href: '/why-retread/' },
  { key: 'about', label: 'About', href: '/about/' },
];

export const footerLinks = [
  { label: 'Tyre finder', href: '/tools/tyre-finder/' },
  { label: 'Cost per km calculator', href: '/tools/cpk-calculator/' },
  { label: 'Casing check', href: '/tools/casing-check/' },
  { label: 'Request a collection', href: '/collection/' },
  { label: 'Fleet account', href: '/account/' },
  { label: 'Resource library', href: '/resources/' },
  { label: 'Contact', href: '/contact/' },
  { label: 'Privacy notice', href: '/privacy/' },
];

export const proofPoints = [
  { big: '1 week', title: 'Maximum turnaround', text: 'From pickup to delivery, on every retread and repair.' },
  { big: 'Weekly', title: 'Collection and delivery', text: 'Throughout the northern Eastern Cape.' },
  { big: 'SANS 20109', title: 'ECE R109 compliant', text: 'Audited regularly by Bandag SA and the SABS.' },
  { big: 'Full life', title: 'Retread Life Warranty', text: 'Against material failure and faulty workmanship.' },
];

export const certifications = [
  {
    mark: 'SANS',
    title: 'SANS 20109 / SABS ECE R109:1998',
    text: 'The European quality standard for the production of retreaded tyres for commercial vehicles, adopted in South Africa.',
    meaning: 'A retread built to this standard is tested and marked to the same regime that applies across Europe. It is the standard your insurer and the roadworthy inspector look for.',
  },
  {
    mark: 'AUDIT',
    title: 'Audited by Bandag SA and the SABS',
    text: 'Two independent bodies inspect the plant regularly: the franchisor and the national standards bureau.',
    meaning: 'Process, equipment calibration and finished tyres are checked by people who do not work for us.',
  },
  {
    mark: 'LIFE',
    title: 'Full Retread Life Warranty',
    text: 'Every retread we manufacture is covered against material failure and faulty workmanship for the life of the tread.',
    meaning: 'If the retread fails because of how it was made, we carry the cost, not you.',
  },
  {
    mark: 'DPC',
    title: 'Bandag DPC low-temperature curing',
    text: 'Bandag’s patented DPC curing system bonds the tread at 98 to 100°C.',
    meaning: 'A cooler cure puts less heat stress into the casing, which prolongs casing life and makes a further retread more likely.',
  },
];

export const processSteps = [
  { title: 'Casing inspection', text: 'Every casing is examined inside and out. Only sound casings go forward; the rest come back to you with the reason.' },
  { title: 'Buffing', text: 'The worn tread is removed and the casing is shaped to an exact profile for the new tread.' },
  { title: 'Repair', text: 'Injuries are skived out and repaired with Rema Tip Top materials, vulcanised into the casing.' },
  { title: 'Tread building', text: 'A Bandag precure tread, chosen for the job the tyre will do, is applied with patented bonding materials.' },
  { title: 'DPC curing', text: 'The tyre is cured at 98 to 100°C, a low temperature that protects the casing.' },
  { title: 'Final inspection', text: 'Each tyre is checked against SANS 20109 before it is released under the Full Retread Life Warranty.' },
];

// PROVISIONAL: confirm the actual weekly route towns and days with the client.
export const coverage = [
  { name: 'East London', lat: -33.015, lng: 27.911, base: true },
  { name: 'Qonce (King William’s Town)', lat: -32.88, lng: 27.39 },
  { name: 'Stutterheim', lat: -32.57, lng: 27.42 },
  { name: 'Fort Beaufort', lat: -32.78, lng: 26.63 },
  { name: 'Komani (Queenstown)', lat: -31.9, lng: 26.88 },
  { name: 'Butterworth', lat: -32.33, lng: 28.15 },
  { name: 'Mthatha', lat: -31.59, lng: 28.78 },
  { name: 'Aliwal North', lat: -30.69, lng: 26.71 },
];
