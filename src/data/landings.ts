// Search landing pages: one per application and one per area served.
// Each must say something specific and true. Do not add a page for a town or
// an application unless there is real, different content to put on it.
import type { Duty } from './treads';

export interface Landing {
  slug: string;
  eyebrow: string;
  title: string;      // <title>
  h1: string;
  description: string;
  lede: string;
  points: string[];
  body: { heading: string; text: string }[];
  duty?: Duty;
  photo: { slot: string; alt: string; brief: string };
}

export const applications: Landing[] = [
  {
    slug: 'long-haul',
    eyebrow: 'Long haul',
    title: 'Long-haul truck retreads and tyres, Eastern Cape',
    h1: 'Tyres for long-haul fleets',
    description: 'Bandag drive and trailer retreads for long-haul truck tractors and interlinks on the N2 and N6, with weekly collection and a one-week turnaround from East London.',
    lede: 'On line-haul, tyres are one of the largest running costs after fuel and wages. The right drive and trailer treads, on casings that keep coming back, bring the cost per kilometre down.',
    duty: 'Long haul',
    points: ['Highway drive treads for high-torque truck tractors', 'Scrub-resistant and low rolling resistance trailer treads', 'Casings collected and returned on the weekly run', '24-hour breakdown cover along the N2 and N6'],
    body: [
      { heading: 'Drive axles', text: 'Highway drive treads are built for sustained speed and high torque. They wear evenly over long distances, which is where the kilometres come from.' },
      { heading: 'Trailer axles', text: 'Interlink and tri-axle trailers scrub their tyres in every turn. A trailer tread designed for it protects the casing so that it can be retreaded again.' },
      { heading: 'Steer axles', text: 'Most long-haul fleets fit new tyres to the steer axle, then move them back and retread them. We supply the new tyres and manage the casings.' },
    ],
    photo: { slot: 'app-long-haul', alt: 'A long-haul truck tractor and interlink on the N2', brief: 'customer truck tractor and interlink trailer on the highway' },
  },
  {
    slug: 'mining',
    eyebrow: 'Mining and quarrying',
    title: 'Mining and quarry tyre retreads and earthmover repairs',
    h1: 'Tyres for mining and quarry fleets',
    description: 'Severe-service Bandag retreads for haul trucks, and vulcanised repairs for earthmover tyres in every size, from East London Bandag.',
    lede: 'Haul roads destroy tyres by cutting and impact long before they wear out. The answer is treads that resist damage, and repairs that save the casing when damage happens.',
    duty: 'Mining',
    points: ['Cut and chip resistant severe-service treads', 'Vulcanised repairs up to earthmover size, done in our plant', 'Collection from site on the weekly run', 'Technical support on pressures and haul road damage'],
    body: [
      { heading: 'Haul trucks', text: 'A severe-service drive tread gives traction on loose and broken surfaces and stands up to stone damage.' },
      { heading: 'Earthmover tyres', text: 'An earthmover tyre is too valuable to scrap for one injury. We do section and sidewall repairs in every size and tell you honestly when a tyre is beyond saving.' },
      { heading: 'On site', text: 'We collect from the site, and our technicians will look at pressures, loading and haul road conditions with your workshop.' },
    ],
    photo: { slot: 'app-mining', alt: 'A tipper truck working in an Eastern Cape quarry', brief: 'customer tipper or haul truck working in a quarry' },
  },
  {
    slug: 'bus',
    eyebrow: 'Bus and coach',
    title: 'Bus and coach tyre retreads, Eastern Cape',
    h1: 'Tyres for bus and coach fleets',
    description: 'Bandag retreads for city bus and intercity coach drive axles, built for stop-start wear and wet braking, with new tyres for steer axles.',
    lede: 'Buses stop, start and turn all day, scrub their shoulders against kerbs and carry people. They need treads built for exactly that.',
    duty: 'Bus',
    points: ['Drive treads with long wear in stop-start service', 'Strong wet braking traction', 'Solid shoulders that resist kerbing damage', 'New tyres supplied for steer axles'],
    body: [
      { heading: 'City buses', text: 'Urban drive treads are designed for long tread wear under constant braking and pulling away, with shoulders that survive kerbs.' },
      { heading: 'Intercity coaches', text: 'Coaches on regional routes need an all-weather drive tread with reliable wet traction and predictable handling.' },
      { heading: 'Steer axles', text: 'We fit new tyres to bus steer axles and manage those casings into the retread programme for the drive axle afterwards.' },
    ],
    photo: { slot: 'app-bus', alt: 'A passenger bus fitted with Bandag retreads', brief: 'customer bus, three-quarter view showing the rear wheels' },
  },
  {
    slug: 'construction',
    eyebrow: 'Construction',
    title: 'Construction truck tyre retreads and repairs',
    h1: 'Tyres for construction fleets',
    description: 'On and off-road Bandag retreads for tippers, mixers and site vehicles, plus vulcanised repairs, with collection from site across the northern Eastern Cape.',
    lede: 'Tippers and mixers spend half the day on tar and half on site. They need a tread that grips on gravel without being torn apart by it.',
    duty: 'Construction',
    points: ['On and off-road treads for mixed tar and gravel', 'All-position patterns that simplify stock', 'Repairs for cuts and penetrations', 'Collection from site'],
    body: [
      { heading: 'Mixed running', text: 'An on and off-road tread resists cutting and chipping on gravel but still wears evenly on the road between sites.' },
      { heading: 'Site damage', text: 'Nails, rebar and rock cause most construction tyre failures. Most can be repaired if the tyre is pulled promptly.' },
      { heading: 'Short contracts', text: 'When a contract moves, we move the collection point. Tell us the site and we add it to the run.' },
    ],
    photo: { slot: 'app-construction', alt: 'A tipper truck on a construction site', brief: 'customer tipper or concrete mixer on a building site' },
  },
];

export const areas: Landing[] = [
  {
    slug: 'east-london',
    eyebrow: 'East London',
    title: 'Truck tyres and retreads in East London',
    h1: 'Truck tyres and retreads in East London',
    description: 'East London Bandag at 7 Wells Road, Gately: Bandag retreads made on site, new truck and bus tyres, vulcanised repairs and 24-hour roadside tyre assistance.',
    lede: 'Our factory is at 7 Wells Road in Gately. Retreads are made here, new tyres are stocked here and the breakdown vehicles leave from here.',
    points: ['Retread factory on site in Gately', 'New tyres and Rema Tip Top consumables over the counter', 'Drop casings off or have them collected', '24-hour roadside assistance in and around the city'],
    body: [
      { heading: 'Drop in', text: 'Bring casings in for inspection, collect finished tyres, or buy new tyres and repair consumables over the counter during office hours.' },
      { heading: 'Around the clock', text: 'A tyre failure on the N2, in the harbour or in the industrial areas gets a service vehicle from Gately, day or night.' },
      { heading: 'See it made', text: 'Fleet owners are welcome to walk the retread line. Phone ahead and we will show you a casing going through.' },
    ],
    photo: { slot: 'area-east-london', alt: 'The East London Bandag premises at 7 Wells Road, Gately', brief: 'street view of the premises with signage' },
  },
  {
    slug: 'northern-eastern-cape',
    eyebrow: 'Northern Eastern Cape',
    title: 'Truck tyre retreads across the northern Eastern Cape',
    h1: 'Retreads delivered across the northern Eastern Cape',
    description: 'Weekly casing collection and retread delivery from East London to Qonce, Stutterheim, Komani, Butterworth, Mthatha and Aliwal North, with a one-week turnaround.',
    lede: 'You do not need to be in East London to use the factory. Our truck runs through the northern Eastern Cape every week, collecting casings and delivering finished tyres.',
    points: ['Weekly collection and delivery to your depot', 'One week maximum from pickup to delivery', 'Stock of fast-moving sizes for immediate delivery', 'ETA Bandag national breakdown line beyond our own service area'],
    body: [
      { heading: 'How it works', text: 'Book a collection online or by phone. The truck collects on its next run through your area and brings the finished tyres back on the following one.' },
      { heading: 'Between runs', text: 'Fast-moving retread and new sizes are held in stock, so an urgent tyre does not have to wait for your own casing.' },
      { heading: 'Breakdowns', text: 'Our own roadside line covers the region we can reach. Beyond that, the ETA Bandag national line connects you to the nearest Bandag dealer.' },
    ],
    photo: { slot: 'area-eastern-cape', alt: 'The East London Bandag delivery truck on a regional road', brief: 'branded delivery truck on the road in open country' },
  },
];
