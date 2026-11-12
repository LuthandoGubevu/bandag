// "Why Retread" articles. Evergreen by design: no dates, nothing that goes stale.
// Each section body is plain HTML so the client can edit copy without touching layout.

export interface Article {
  slug: string;
  tag: string;
  title: string;
  description: string;
  summary: string;
  inShort: string;
  sections: { heading: string; html: string }[];
  next: { label: string; href: string }[];
}

export const articles: Article[] = [
  {
    slug: 'is-a-retread-safe',
    tag: 'Safety',
    title: 'Are retreaded truck tyres safe?',
    description: 'What stands behind a Bandag retread from East London: casing inspection, SANS 20109 compliance, independent audits and a Full Retread Life Warranty.',
    summary: 'The standard, the audits and the inspection every casing has to pass.',
    inShort: 'Yes, when the retread is built on an inspected casing, to SANS 20109, in an audited plant. Ours are, and each one carries a Full Retread Life Warranty.',
    sections: [
      {
        heading: 'What a retread is',
        html: '<p>A truck tyre is two things: a casing, which carries the load, and a tread, which wears. The casing is engineered to outlast the tread several times over. Retreading removes what is left of the worn tread and bonds a new one to the casing.</p><p>It is not a repair and it is not a second-hand tyre. It is a manufacturing process, with its own standard.</p>',
      },
      {
        heading: 'It starts with the casing',
        html: '<p>Every casing is inspected inside and out before it is accepted. Casings with exposed cords, sidewall cuts, bead damage or signs of having been run flat are rejected and returned with the reason. We do not retread around a fault.</p><p>You can see the conditions we look for in the <a href="/tools/casing-check/">casing check</a>.</p>',
      },
      {
        heading: 'Cured cool',
        html: '<p>Heat ages a casing. Bandag’s patented DPC curing system bonds the new tread at 98 to 100°C, a low curing temperature, so the casing is put under less heat stress. That prolongs casing life and improves the chance of a further retread.</p>',
      },
      {
        heading: 'Built to a standard and audited',
        html: '<p>Our plant complies with SANS 20109 / SABS ECE R109:1998, the European quality standard for the production of retreaded tyres for commercial vehicles. Compliance is not self-declared: both Bandag SA and the SABS carry out regular quality audits.</p>',
      },
      {
        heading: 'Where the rubber on the roadside comes from',
        html: '<p>Tread fragments at the roadside are often blamed on retreads. Tyres of every kind, new and retreaded, come apart when they are run under-inflated, overloaded or damaged. The remedy is the same for both: correct pressure and regular inspection.</p>',
      },
      {
        heading: 'Backed in writing',
        html: '<p>Every retread we manufacture carries a Full Retread Life Warranty against material failure and faulty workmanship. The terms are in the <a href="/resources/">resource library</a>.</p>',
      },
    ],
    next: [
      { label: 'See the cost per kilometre for your fleet', href: '/tools/cpk-calculator/' },
      { label: 'Check a casing', href: '/tools/casing-check/' },
    ],
  },
  {
    slug: 'new-vs-retread-cost-per-kilometre',
    tag: 'Cost',
    title: 'New versus retread: the cost per kilometre argument',
    description: 'How to compare new tyres and retreads properly: cost per kilometre over the whole life of the casing, with a worked method and a calculator.',
    summary: 'Why purchase price is the wrong number, and how to work out the right one.',
    inShort: 'The price of a tyre tells you little. Divide everything you spend on a casing by every kilometre it runs. Each retread adds a tread’s worth of kilometres for a fraction of the cost of a new tyre, so the cost per kilometre falls.',
    sections: [
      {
        heading: 'The only number that compares tyres fairly',
        html: '<p>Cost per kilometre (CPK) is what you paid divided by how far the tyre ran. A cheap tyre that wears out early can cost more per kilometre than a dear one that lasts.</p>',
      },
      {
        heading: 'How the sum works',
        html: '<p>For a tyre that is never retreaded:</p><p><b>CPK = price of the new tyre ÷ kilometres it ran</b></p><p>For a tyre that is retreaded:</p><p><b>CPK = (new tyre price + cost of each retread) ÷ (kilometres as new + kilometres from each retread)</b></p><p>The casing is the expensive part of a tyre and the retread reuses it. So the second sum adds a full tread life to the bottom line while adding much less to the top.</p>',
      },
      {
        heading: 'What moves the answer',
        html: '<ul><li><b>Casing quality.</b> A premium casing accepts more retreads. This is the real argument for buying good new tyres.</li><li><b>The right tread.</b> A tread matched to the axle and the route runs further. That is what the Application Specific range is for.</li><li><b>Pressure.</b> Under-inflation shortens tread life and destroys casings.</li><li><b>Pulling at the right time.</b> A tyre run to the cords cannot be retreaded.</li></ul>',
      },
      {
        heading: 'Work it out for your own fleet',
        html: '<p>The <a href="/tools/cpk-calculator/">cost per kilometre calculator</a> does this sum with your fleet size, annual kilometres and prices, and gives you a result you can send to whoever signs off the budget.</p>',
      },
    ],
    next: [
      { label: 'Open the cost per km calculator', href: '/tools/cpk-calculator/' },
      { label: 'Find the right tread', href: '/tools/tyre-finder/' },
    ],
  },
  {
    slug: 'premium-vs-budget-tyres',
    tag: 'Value',
    title: 'Premium versus budget new tyres: think about the casing',
    description: 'A budget tyre is cheaper once. A premium casing can be retreaded and keeps earning. How to weigh the two for a retreading fleet.',
    summary: 'The cheapest tyre to buy is rarely the cheapest tyre to run.',
    inShort: 'When you buy a new tyre you are also buying a casing. If that casing can be retreaded, the tyre has further lives ahead of it. If it cannot, you paid for one life only.',
    sections: [
      {
        heading: 'Two purchases in one',
        html: '<p>A new tyre is a tread you will wear out and a casing you will keep. Premium tyres are generally built with casings designed to be retreaded. Many budget tyres are designed to a price, for one life.</p>',
      },
      {
        heading: 'What happens at the end of the first tread',
        html: '<p>When the first tread is worn, the retreadable casing goes to the plant and comes back with a new tread at a fraction of the price of a new tyre. The other goes to scrap and you buy again at full price.</p>',
      },
      {
        heading: 'How to decide',
        html: '<p>Compare on cost per kilometre across the whole expected life of the casing, not on the invoice price. If you send us a casing, our inspection will tell you honestly whether that make is giving you retreadable casings.</p>',
      },
    ],
    next: [
      { label: 'Compare the costs for your fleet', href: '/tools/cpk-calculator/' },
      { label: 'See new tyres we supply', href: '/new-tyres-repairs/' },
    ],
  },
  {
    slug: 'environmental-case',
    tag: 'Environment',
    title: 'The environmental case for retreading',
    description: 'Retreading reuses the casing, the largest part of a truck tyre, which means fewer scrap tyres and less raw material for every kilometre travelled.',
    summary: 'Reusing the casing keeps tyres out of the stockpile.',
    inShort: 'Most of a tyre’s material is in its casing. Retreading keeps that casing working and replaces only the part that wore away.',
    sections: [
      {
        heading: 'Scrap tyres are a South African problem',
        html: '<p>South Africa has a very large stockpile of scrap tyres, and it grows every year. Scrap tyres are difficult to dispose of, they hold water, and stockpiles burn.</p>',
      },
      {
        heading: 'What retreading saves',
        html: '<p>A retread replaces the tread only. The steel and rubber in the casing, which make up most of the tyre, stay in service. Building a tread takes far less oil, rubber and energy than building a whole tyre.</p>',
      },
      {
        heading: 'The same decision, twice over',
        html: '<p>The environmental case and the financial case point the same way. Every casing that is retreaded is one fewer tyre bought and one fewer tyre scrapped.</p>',
      },
    ],
    next: [
      { label: 'How a retread is made', href: '/retreads/#process' },
      { label: 'Book a casing collection', href: '/collection/' },
    ],
  },
];
