/**
 * One-time seed script to push all existing content into Sanity.
 *
 * Usage:
 *   SANITY_TOKEN=<write-token> npx tsx sanity/seed.ts
 *
 * Requirements:
 *   - A Sanity write token (create one at https://www.sanity.io/manage → API → Tokens)
 *   - `tsx` installed globally or locally (npm i -g tsx)
 *
 * This script uses createOrReplace() with stable IDs so it can be run
 * multiple times without creating duplicates.
 */

import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'lyz6if75',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// ─── Helper ───

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// ─── Projects (from public/data/projects/*.json) ───

const projects = [
  {
    title: 'Smart Grid Optimization',
    description:
      'AI-powered decision support system for real-time power grid management and load balancing.',
    image:
      'https://images.unsplash.com/photo-1662023027736-0cab9f911b2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3dlciUyMGdyaWQlMjBlbGVjdHJpY2FsfGVufDF8fHx8MTc2NTMzMDcxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['energy', 'ai', 'infrastructure'],
    team: ['Dr. Selva Nadarajah', 'Arman Aminipanah'],
    featured: true,
    status: 'active',
  },
  {
    title: 'Resilient Infrastructure Networks',
    description:
      'Machine learning models for predicting and mitigating infrastructure failures during extreme weather events.',
    image:
      'https://images.unsplash.com/photo-1589898424451-21e24dcb143c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZyYXN0cnVjdHVyZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1NDEwMTEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['infrastructure', 'resilience', 'ai'],
    team: ['Dr. Negar Soheili', 'Mahtab Danaei'],
    featured: true,
    status: 'active',
  },
  {
    title: 'Solar Deployment Accelerator',
    description:
      'Computational tools for optimizing solar panel placement and predicting energy output in urban environments.',
    image:
      'https://images.unsplash.com/photo-1628206554160-63e8c921e398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjBzb2xhcnxlbnwxfHx8fDE3NjUzMTg2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['energy', 'sustainability', 'ai'],
    team: ['Dr. Selva Nadarajah', 'Satender Gunwal'],
    featured: false,
    status: 'active',
  },
  {
    title: 'Urban Energy Dashboard',
    description:
      'Real-time visualization platform for monitoring and analyzing city-wide energy consumption patterns.',
    image:
      'https://images.unsplash.com/photo-1762279388979-6a430989284c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMG5ldHdvcmt8ZW58MXx8fHwxNzY1MzY5NTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['energy', 'ai', 'infrastructure'],
    team: ['Dr. Selva Nadarajah', 'Hrishitaa'],
    featured: false,
    status: 'active',
  },
  {
    title: 'Climate Adaptive Infrastructure',
    description:
      'Decision intelligence framework for designing infrastructure that adapts to changing climate conditions.',
    image:
      'https://images.unsplash.com/photo-1699602050604-698045645108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGNpdHklMjBpbmZyYXN0cnVjdHVyZXxlbnwxfHx8fDE3NjUzMzQ3MjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['infrastructure', 'resilience', 'sustainability'],
    team: ['Dr. Negar Soheili', 'Lisa Bonnett'],
    featured: false,
    status: 'active',
  },
  {
    title: 'Sustainable Building Systems',
    description:
      'IoT-enabled monitoring and optimization of energy usage in commercial and residential buildings.',
    image:
      'https://images.unsplash.com/photo-1521708266372-b3547456cc2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2NTQxMDExNHww&ixlib=rb-4.1.0&q=80&w=1080',
    categories: ['sustainability', 'energy', 'infrastructure'],
    team: ['Dr. Beryl Chen', 'Dr. Ludwig Dierks'],
    featured: false,
    status: 'active',
  },
];

// ─── Team Members (from hardcoded data in Team.tsx) ───

const sectionOrderMap: Record<string, number> = {
  Director: 1,
  Faculty: 2,
  'Policy Advisor': 3,
  'PhD Students': 4,
  'Masters Students': 5,
};

const teamMembers = [
  {
    id: 'selva-nadarajah',
    name: 'Selva Nadarajah',
    title: 'Director & Associate Professor',
    section: 'Director',
    initials: 'SN',
    image: '/images/team/selva-nadarajah.jpg',
    email: 'selvan@uic.edu',
    website: 'https://www.selva-nadarajah.com',
    bio: 'Selva Nadarajah is an Associate Professor (with tenure) of Information and Decision Sciences and Bielinski Family Endowed Scholar at the College of Business Administration, University of Illinois at Chicago. Selva also works with Argonne National Laboratory and previously served as the Decision Intelligence R&D Lead at the Discovery Partners Institute (Innovation hub of the University of Illinois System).',
    idiaterRole:
      "As Director of IDIATER, Selva leads the group's research vision — driving work on self-adapting approximations for large-scale Markov decision processes, energy real options for commodity and energy conversion assets, and the energy-computing nexus exploring how energy demands intensified by computing growth (e.g., data centers) can be met and how advances like LLMs can accelerate the sustainable energy transformation.",
    researchAreas: [
      'Self-Adapting Approximations for large-scale MDPs',
      'Energy Real Options — operations, valuation, and risk management of energy assets',
      'Energy & Computing Nexus — data centers, LLMs, and sustainable transformation',
    ],
    education: [
      'PhD & MS in Operations Research — Tepper School of Business, Carnegie Mellon University',
      'MASc in Operations Research — University of Waterloo',
      'B.Tech — Indian Institute of Technology Madras',
    ],
    awards: [
      '2024 UIC Global Scholar',
      '2024 INFORMS Harvey J. Greenberg Research Award',
      '2021 CEMA Best Paper Award',
      '2020 INFORMS ENRE Young Researcher Prize',
      'Best Overall Paper — 2020 NeurIPS Workshop on Tackling Climate Change with ML',
      '2014 William L. Cooper Dissertation Award',
      '2013 Egon Balas Best Paper Award',
    ],
    order: 0,
  },
  {
    id: 'negar-soheili',
    name: 'Negar Soheili',
    title: 'Associate Professor',
    section: 'Faculty',
    initials: 'NS',
    image: '/images/team/negar-soheili.png',
    email: 'nazad@uic.edu',
    website: 'https://www.negar-soheili.com',
    bio: 'Negar Soheili is an Associate Professor of Business Analytics in the Information and Decision Sciences Department at the College of Business, University of Illinois at Chicago. Negar earned her PhD in Operations Research from the Tepper School of Business at Carnegie Mellon University in 2014 and co-founded the PhD program in Information and Decision Sciences at UIC while serving as Director of Graduate Studies.',
    idiaterRole:
      "Within IDIATER, Negar drives the optimization engine — developing scalable first-order methods that power the group's large-scale sequential decision-making research. Her work on preconditioning techniques and feasibility-guaranteed algorithms is foundational to IDIATER's ability to tackle real-world infrastructure problems at scale.",
    researchAreas: [
      'Problem Geometry & Algorithm Acceleration — preconditioning and rescaling techniques',
      'Constrained Optimization with Feasibility Guarantees — fairness-constrained ML',
      'Large-Scale Sequential Decision Making — first-order methods for MDPs',
    ],
    education: [
      'PhD in Operations Research — Tepper School of Business, Carnegie Mellon University (2014)',
    ],
    order: 0,
  },
  {
    id: 'beryl-chen',
    name: 'Beryl Chen',
    title: 'Faculty',
    section: 'Faculty',
    initials: 'BC',
    email: '[email@institution.edu]',
    bio: '[Bio description highlighting research expertise and academic background]',
    idiaterRole:
      "[Description of role and contributions within IDIATER — research focus, collaboration areas, and impact on the group's mission]",
    researchAreas: ['[Research area 1]', '[Research area 2]'],
    order: 1,
  },
  {
    id: 'ludwig-dierks',
    name: 'Ludwig Dierks',
    title: 'Faculty',
    section: 'Faculty',
    initials: 'LD',
    email: '[email@institution.edu]',
    bio: '[Bio description highlighting research expertise and academic background]',
    idiaterRole:
      "[Description of role and contributions within IDIATER — research focus, collaboration areas, and impact on the group's mission]",
    researchAreas: ['[Research area 1]', '[Research area 2]'],
    order: 2,
  },
  {
    id: 'lisa-bonnett',
    name: 'Lisa Bonnett',
    title: 'Policy Advisor',
    section: 'Policy Advisor',
    initials: 'LB',
    email: '[email@institution.edu]',
    bio: '[Bio description highlighting policy expertise and professional background]',
    idiaterRole:
      '[Description of advisory role within IDIATER — bridging research outputs to real-world policy, stakeholder engagement, and strategic guidance]',
    order: 0,
  },
  {
    id: 'arman-aminipanah',
    name: 'Arman Aminipanah',
    title: 'PhD Student',
    section: 'PhD Students',
    initials: 'AA',
    email: '[email@institution.edu]',
    bio: '[Academic background and research interests]',
    idiaterRole:
      '[Current PhD research within IDIATER — topic, methods, and expected contributions]',
    researchAreas: ['[Research focus area]'],
    order: 0,
  },
  {
    id: 'mahtab-danaei',
    name: 'Mahtab Danaei',
    title: 'PhD Student',
    section: 'PhD Students',
    initials: 'MD',
    email: '[email@institution.edu]',
    bio: '[Academic background and research interests]',
    idiaterRole:
      '[Current PhD research within IDIATER — topic, methods, and expected contributions]',
    researchAreas: ['[Research focus area]'],
    order: 1,
  },
  {
    id: 'satender-gunwal',
    name: 'Satender Gunwal',
    title: 'PhD Student',
    section: 'PhD Students',
    initials: 'SG',
    email: '[email@institution.edu]',
    bio: '[Academic background and research interests]',
    idiaterRole:
      '[Current PhD research within IDIATER — topic, methods, and expected contributions]',
    researchAreas: ['[Research focus area]'],
    order: 2,
  },
  {
    id: 'hrishitaa',
    name: 'Hrishitaa',
    title: 'Masters Student',
    section: 'Masters Students',
    initials: 'H',
    email: '[email@institution.edu]',
    bio: '[Academic background and research interests]',
    idiaterRole:
      '[Current research within IDIATER — project focus and contributions]',
    researchAreas: ['[Research focus area]'],
    order: 0,
  },
];

// ─── Publications (from hardcoded data in Publications.tsx) ───

const publications = [
  // Journal Papers
  {
    id: 'journal-2024-1',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2024,
    venue: '[Journal Name]',
    type: 'journal',
    status: 'Forthcoming',
    links: [
      { label: 'PDF', url: '#', _key: 'pdf' },
      { label: 'arXiv', url: '#', _key: 'arxiv' },
    ],
  },
  {
    id: 'journal-2024-2',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2024,
    venue: '[Journal Name]',
    type: 'journal',
    status: 'Forthcoming',
    links: [{ label: 'PDF', url: '#', _key: 'pdf' }],
  },
  {
    id: 'journal-2023-1',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2023,
    venue: '[Journal Name]',
    type: 'journal',
    links: [
      { label: 'PDF', url: '#', _key: 'pdf' },
      { label: 'DOI', url: '#', _key: 'doi' },
    ],
  },
  {
    id: 'journal-2023-2',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2023,
    venue: '[Journal Name]',
    type: 'journal',
    links: [{ label: 'PDF', url: '#', _key: 'pdf' }],
  },
  {
    id: 'journal-2022-1',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2022,
    venue: '[Journal Name]',
    type: 'journal',
    links: [
      { label: 'PDF', url: '#', _key: 'pdf' },
      { label: 'Code', url: '#', _key: 'code' },
    ],
  },
  {
    id: 'journal-2022-2',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2022,
    venue: '[Journal Name]',
    type: 'journal',
    links: [{ label: 'PDF', url: '#', _key: 'pdf' }],
  },
  // Conference Papers
  {
    id: 'conf-2023-1',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2023,
    venue: '[Conference Name]',
    type: 'conference',
    links: [
      { label: 'PDF', url: '#', _key: 'pdf' },
      { label: 'Poster', url: '#', _key: 'poster' },
    ],
  },
  {
    id: 'conf-2023-2',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2023,
    venue: '[Conference Name]',
    type: 'conference',
    links: [{ label: 'PDF', url: '#', _key: 'pdf' }],
  },
  {
    id: 'conf-2023-3',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2023,
    venue: '[Conference Name]',
    type: 'conference',
    links: [{ label: 'PDF', url: '#', _key: 'pdf' }],
  },
  // Working Papers
  {
    id: 'working-1',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2024,
    venue: 'Under Review',
    type: 'working_paper',
    status: 'Under Review',
    links: [{ label: 'arXiv', url: '#', _key: 'arxiv' }],
  },
  {
    id: 'working-2',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2024,
    venue: 'Under Review',
    type: 'working_paper',
    status: 'Under Review',
    links: [{ label: 'Draft', url: '#', _key: 'draft' }],
  },
  {
    id: 'working-3',
    title: '[Paper Title]: [Brief descriptive subtitle of research contribution]',
    authors: '[Author Names]',
    year: 2024,
    venue: 'Working Paper',
    type: 'working_paper',
    status: 'Working Paper',
    links: [],
  },
];

// ─── Site Settings ───

const siteSettingsDoc = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  siteTitle: 'Research Team',
  siteDescription:
    'A multidisciplinary research team working on artificial intelligence, energy systems, and infrastructure resilience',
  heroTitle: 'Research Projects',
  heroSubtitle:
    'We develop intelligent systems and decision-support tools to enhance infrastructure resilience, accelerate clean energy deployment, and enable sustainable technology transitions.',
  contactEmail: 'contact@research-team.edu',
  contactPhone: '',
  address: '',
};

// ─── About Settings ───

const aboutSettingsDoc = {
  _id: 'aboutSettings',
  _type: 'aboutSettings',
  title: 'About Us',
  content:
    '# About Our Research Team\n\nWe are a multidisciplinary research group focused on developing innovative solutions at the intersection of artificial intelligence, energy systems, and infrastructure resilience.\n\n## Our Mission\n\nTo advance knowledge and create practical tools that help communities build sustainable and resilient infrastructure systems.\n\n## Research Areas\n\n- Decision Intelligence and AI\n- Energy Systems Optimization\n- Infrastructure Resilience\n- Sustainable Technology',
  mission:
    'To advance knowledge and create practical tools that help communities build sustainable and resilient infrastructure systems.',
  vision:
    'A future where intelligent systems enable sustainable and resilient communities worldwide.',
};

// ─── Seed Runner ───

async function seed() {
  console.log('🌱 Starting Sanity seed…\n');

  // 1. Projects
  console.log(`📁 Seeding ${projects.length} projects…`);
  for (const p of projects) {
    const id = `project-${slugify(p.title)}`;
    await client.createOrReplace({
      _id: id,
      _type: 'project',
      title: p.title,
      slug: { _type: 'slug', current: slugify(p.title) },
      description: p.description,
      image: p.image,
      categories: p.categories,
      team: p.team,
      featured: p.featured,
      status: p.status,
    });
    console.log(`  ✓ ${p.title}`);
  }

  // 2. Team Members
  console.log(`\n👥 Seeding ${teamMembers.length} team members…`);
  for (const m of teamMembers) {
    const sectionOrder = sectionOrderMap[m.section] ?? 5;
    const doc: Record<string, unknown> = {
      _id: `team-${m.id}`,
      _type: 'teamMemberDetail',
      name: m.name,
      slug: { _type: 'slug', current: m.id },
      title: m.title,
      section: m.section,
      sectionOrder,
      order: m.order,
      initials: m.initials,
      image: m.image ?? '',
      email: m.email ?? '',
      website: m.website ?? '',
      bio: m.bio,
      idiaterRole: m.idiaterRole,
      researchAreas: m.researchAreas ?? [],
      education: m.education ?? [],
      awards: m.awards ?? [],
    };
    // Only include linkedin/scholar if they have real values
    if (m.linkedin) doc.linkedin = m.linkedin;
    if (m.scholar) doc.scholar = m.scholar;
    await client.createOrReplace(doc as any);
    console.log(`  ✓ ${m.name}`);
  }

  // 3. Publications
  console.log(`\n📄 Seeding ${publications.length} publications…`);
  for (const p of publications) {
    const doc: Record<string, unknown> = {
      _id: `pub-${p.id}`,
      _type: 'publication',
      title: p.title,
      authors: p.authors,
      year: p.year,
      venue: p.venue,
      type: p.type,
    };
    if (p.status) doc.status = p.status;
    if (p.links && p.links.length > 0) doc.links = p.links;
    await client.createOrReplace(doc as any);
    console.log(`  ✓ ${p.id}`);
  }

  // 4. Site Settings (singleton)
  console.log('\n⚙️  Seeding site settings…');
  await client.createOrReplace(siteSettingsDoc);
  console.log('  ✓ siteSettings');

  // 5. About Settings (singleton)
  console.log('\n📝 Seeding about settings…');
  await client.createOrReplace(aboutSettingsDoc);
  console.log('  ✓ aboutSettings');

  console.log('\n✅ Seed complete!');
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
