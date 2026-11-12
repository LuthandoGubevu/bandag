// Team, case studies and testimonials.
//
// These lists are intentionally EMPTY. The About page shows each section only
// when it has real entries, so nothing invented ever reaches the live site.
// Add entries once the client has supplied them and each fleet has agreed in
// writing to be named.

export interface TeamMember { name: string; role: string; tel?: string; photo: string }
export interface CaseStudy {
  fleet: string;      // e.g. 'Example Transport, Komani'
  sector: string;     // e.g. 'Long haul, 40 trucks'
  result: string;     // the headline in CPK terms, e.g. 'Tyre cost down from 38c to 27c per km'
  detail: string;     // what was changed and over what period
  quote?: string;     // testimonial, in the customer's words
  person?: string;    // name and position of the person quoted
}

export const team: TeamMember[] = [
  // { name: 'Full name', role: 'Factory manager', tel: '043 731 1109', photo: 'team-firstname' },
];

export const caseStudies: CaseStudy[] = [];
