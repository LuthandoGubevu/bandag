// Resource library.
//
// To publish a document: put the file in /public/downloads/ using the exact
// `file` name below. The library then shows a download link with the real file
// type and size, read from the file at build time. Until the file exists, the
// entry offers "Request this document" instead, so nothing is ever a dead link.

import fs from 'node:fs';
import path from 'node:path';

export type ResourceCategory = 'Bandag' | 'Suppliers' | 'Safety' | 'Warranty and certificates';

interface ResourceSource {
  title: string;
  description: string;
  category: ResourceCategory;
  file: string;
}

const sources: ResourceSource[] = [
  { title: 'Bandag product guide', description: 'The full Bandag tread range with applications and sizes.', category: 'Bandag', file: 'bandag-product-guide.pdf' },
  { title: 'Application Specific tread selector', description: 'One-page chart matching each tread to axle and duty.', category: 'Bandag', file: 'bandag-application-specific-treads.pdf' },
  { title: 'Bandag PSI fleet programme overview', description: 'How scheduled inspections and reporting reduce cost per kilometre.', category: 'Bandag', file: 'bandag-psi-overview.pdf' },
  { title: 'Dunlop truck and bus tyre range', description: 'Sizes, load indexes and patterns for new Dunlop commercial tyres.', category: 'Suppliers', file: 'dunlop-truck-bus-range.pdf' },
  { title: 'Sumitomo truck and bus tyre range', description: 'Sizes, load indexes and patterns for new Sumitomo commercial tyres.', category: 'Suppliers', file: 'sumitomo-truck-bus-range.pdf' },
  { title: 'Apollo truck and bus tyre range', description: 'Sizes, load indexes and patterns for new Apollo commercial tyres.', category: 'Suppliers', file: 'apollo-truck-bus-range.pdf' },
  { title: 'Rema Tip Top tyre repair products', description: 'Patches, cements, tools and consumables for workshop repairs.', category: 'Suppliers', file: 'rema-tip-top-repair-products.pdf' },
  { title: 'Fleet owner health and safety guide', description: 'Safe tyre handling, inflation and fitment practice for fleet workshops.', category: 'Safety', file: 'fleet-owner-health-and-safety.pdf' },
  { title: 'Driver daily tyre check card', description: 'A one-page pre-trip tyre inspection checklist to print for the cab.', category: 'Safety', file: 'driver-daily-tyre-check.pdf' },
  { title: 'Full Retread Life Warranty terms', description: 'What the warranty covers, what it excludes and how to claim.', category: 'Warranty and certificates', file: 'full-retread-life-warranty.pdf' },
  { title: 'SANS 20109 / ECE R109 certificate', description: 'Our current certificate of compliance for retreaded commercial tyres.', category: 'Warranty and certificates', file: 'sans-20109-certificate.pdf' },
];

const formatSize = (bytes: number) =>
  bytes >= 1_048_576 ? `${(bytes / 1_048_576).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;

export const resourceCategories: ResourceCategory[] = ['Bandag', 'Suppliers', 'Safety', 'Warranty and certificates'];

export const resources = sources.map((r) => {
  const onDisk = path.join(process.cwd(), 'public', 'downloads', r.file);
  const exists = fs.existsSync(onDisk);
  return {
    ...r,
    available: exists,
    href: exists ? `/downloads/${r.file}` : null,
    type: path.extname(r.file).slice(1).toUpperCase(),
    size: exists ? formatSize(fs.statSync(onDisk).size) : null,
  };
});
