// The Bandag Application Specific tread range.
//
// PROVISIONAL CONTENT: the application, axle and duty for each tread below must
// be checked against the current Bandag Southern Africa product guide before
// launch. Everything on the Retreads pages, the tyre finder and the "right for
// me?" check is driven from this one file, so correcting an entry here corrects
// it everywhere.

export type Axle = 'Steer' | 'Drive' | 'Trailer';
export type Duty = 'Long haul' | 'Regional' | 'Urban' | 'Mining' | 'Construction' | 'Bus';

export const duties: Duty[] = ['Long haul', 'Regional', 'Urban', 'Mining', 'Construction', 'Bus'];
export const axles: Axle[] = ['Steer', 'Drive', 'Trailer'];

export interface Tread {
  code: string;
  slug: string;
  summary: string;
  application: string;
  axles: Axle[];
  duties: Duty[];
  surface: string;
  strengths: string[];
  notFor: string;
}

export const treads: Tread[] = [
  {
    code: 'B102',
    slug: 'b102',
    summary: 'A hard-wearing all-position tread for mixed on and off-road work.',
    application: 'Tippers, mixers and site vehicles that move between tar and gravel',
    axles: ['Steer', 'Drive', 'Trailer'],
    duties: ['Construction', 'Regional'],
    surface: 'Tar and gravel',
    strengths: ['One pattern across the vehicle simplifies stockholding', 'Resists cutting and chipping on gravel', 'Even wear in any wheel position'],
    notFor: 'Pure highway long haul, where a dedicated drive or trailer tread returns more kilometres.',
  },
  {
    code: 'BDR-AS',
    slug: 'bdr-as',
    summary: 'A deep, all-weather drive tread with reliable traction and mileage.',
    application: 'Drive axles on regional distribution trucks and coaches',
    axles: ['Drive'],
    duties: ['Regional', 'Urban', 'Bus'],
    surface: 'Tar, wet or dry',
    strengths: ['Deep tread for long service life', 'Traction in wet conditions', 'Stable centre for predictable handling'],
    notFor: 'Trailer and steer positions.',
  },
  {
    code: 'BDR-HT2',
    slug: 'bdr-ht2',
    summary: 'A premium highway drive tread for high-torque, high-power truck tractors.',
    application: 'Drive axles on long-haul truck tractors',
    axles: ['Drive'],
    duties: ['Long haul'],
    surface: 'Highway',
    strengths: ['High mileage under heavy torque', 'Built for sustained highway speeds', 'Low cost per kilometre on line-haul routes'],
    notFor: 'Gravel, site work and stop-start urban routes.',
  },
  {
    code: 'BDV',
    slug: 'bdv',
    summary: 'A drive tread for urban fleets that need long wear and strong wet braking.',
    application: 'Drive axles on city buses and urban delivery trucks',
    axles: ['Drive'],
    duties: ['Urban', 'Bus'],
    surface: 'City streets',
    strengths: ['Long tread wear in stop-start running', 'Wet braking traction', 'Solid shoulders that stand up to kerbing and turning'],
    notFor: 'Sustained highway long haul.',
  },
  {
    code: 'BMS',
    slug: 'bms',
    summary: 'A severe-service drive tread for traction on loose and broken surfaces.',
    application: 'Drive axles on mine, quarry and forestry haul vehicles',
    axles: ['Drive'],
    duties: ['Mining', 'Construction'],
    surface: 'Gravel, mud and haul roads',
    strengths: ['Aggressive pattern for off-road traction', 'Resists cuts and stone damage', 'Self-cleaning grooves in mud'],
    notFor: 'Highway running, where it will wear quickly and noisily.',
  },
  {
    code: 'BTR-SA',
    slug: 'btr-sa',
    summary: 'A trailer tread built to resist the scrubbing that multi-axle trailers suffer in turns.',
    application: 'Trailer axles on interlinks, tri-axles and spread-axle trailers',
    axles: ['Trailer'],
    duties: ['Long haul', 'Regional'],
    surface: 'Highway and regional roads',
    strengths: ['Shoulders designed for scrub resistance', 'Protects the casing from twisting damage', 'Free-rolling for even wear'],
    notFor: 'Drive axles.',
  },
  {
    code: 'ECR-T',
    slug: 'ecr-t',
    summary: 'A free-rolling trailer tread aimed at low rolling resistance on line-haul.',
    application: 'Trailer axles on long-haul combinations',
    axles: ['Trailer'],
    duties: ['Long haul'],
    surface: 'Highway',
    strengths: ['Low rolling resistance to help fuel consumption', 'Even wear over long distances', 'Runs cool at sustained speed'],
    notFor: 'Tight urban routes with heavy scrubbing, and off-road work.',
  },
  {
    code: 'UAP',
    slug: 'uap',
    summary: 'An urban all-position tread for distribution and pick-up and delivery work.',
    application: 'Any axle on urban and distribution trucks',
    axles: ['Steer', 'Drive', 'Trailer'],
    duties: ['Urban', 'Regional'],
    surface: 'City and regional tar',
    strengths: ['One tread for every position', 'Handles frequent turning and braking', 'Even wear on mixed routes'],
    notFor: 'Mining and severe off-road service.',
  },
  {
    code: 'UDR',
    slug: 'udr',
    summary: 'An urban drive tread for traction through constant stopping and starting.',
    application: 'Drive axles on urban delivery and refuse trucks',
    axles: ['Drive'],
    duties: ['Urban'],
    surface: 'City streets',
    strengths: ['Traction under stop-start torque', 'Durable in high-scrub turning', 'Suited to short-haul duty cycles'],
    notFor: 'Long-haul highway routes.',
  },
];

export const treadBySlug = (slug: string) => treads.find((t) => t.slug === slug);

/** Treads that suit a duty and axle, best match first. */
export const matchTreads = (duty: Duty, axle: Axle) =>
  treads
    .filter((t) => t.duties.includes(duty) && t.axles.includes(axle))
    .sort((a, b) => a.duties.indexOf(duty) - b.duties.indexOf(duty) || a.axles.length - b.axles.length);

// PROVISIONAL: sizes the client says are fast-moving. Replace with the real stock list.
export const commonSizes = ['315/80R22.5', '12R22.5', '385/65R22.5', '295/80R22.5', '11R22.5', '10R22.5', '275/70R22.5', '12.00R24', '12.00R20', '11.00R20'];
