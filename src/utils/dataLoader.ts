// Utility functions to load data from JSON files

export interface Project {
  title: string;
  description: string;
  image: string;
  categories: string[];
  team: string[];
  featured?: boolean;
  status?: string;
  startDate?: string;
  endDate?: string;
  url?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo?: string;
  email: string;
  office?: string;
  interests: string[];
  linkedin?: string;
  scholar?: string;
  website?: string;
  category?: string;
  order?: number;
}

export interface Publication {
  title: string;
  authors: string;
  year: number;
  venue: string;
  abstract?: string;
  link?: string;
  pdf?: string;
  type: 'journal' | 'conference' | 'workshop' | 'preprint';
  status?: string;
}

export interface SiteSettings {
  siteTitle: string;
  siteDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  contactEmail: string;
  contactPhone?: string;
  address?: string;
}

export interface AboutSettings {
  title: string;
  content: string;
  mission: string;
  vision?: string;
}

// Helper to get correct base path
const getBasePath = () => {
  return import.meta.env.BASE_URL || '/';
};

// Load all projects
export async function loadProjects(): Promise<Project[]> {
  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}data/projects-index.json`);
    if (!response.ok) {
      // Fallback: Try to load individual project files
      return await loadProjectsFromFiles();
    }
    const data = await response.json();
    return data.projects || [];
  } catch (error) {
    console.error('Error loading projects:', error);
    return await loadProjectsFromFiles();
  }
}

async function loadProjectsFromFiles(): Promise<Project[]> {
  const projectFiles = [
    'smart-grid-optimization',
    'resilient-infrastructure',
    'solar-deployment',
    'urban-energy-dashboard',
    'climate-adaptive-infrastructure',
    'sustainable-building-systems'
  ];

  const projects: Project[] = [];
  const basePath = getBasePath();

  for (const file of projectFiles) {
    try {
      const response = await fetch(`${basePath}data/projects/${file}.json`);
      if (response.ok) {
        const project = await response.json();
        projects.push(project);
      }
    } catch (error) {
      console.error(`Error loading project ${file}:`, error);
    }
  }

  return projects;
}

// Load all team members
export async function loadTeamMembers(): Promise<TeamMember[]> {
  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}data/team-index.json`);
    if (!response.ok) {
      return await loadTeamFromFiles();
    }
    const data = await response.json();
    return data.team || [];
  } catch (error) {
    console.error('Error loading team:', error);
    return await loadTeamFromFiles();
  }
}

async function loadTeamFromFiles(): Promise<TeamMember[]> {
  const teamFiles = [
    'faculty-1',
    'researcher-1',
    'phd-student-1'
  ];

  const team: TeamMember[] = [];
  const basePath = getBasePath();

  for (const file of teamFiles) {
    try {
      const response = await fetch(`${basePath}data/team/${file}.json`);
      if (response.ok) {
        const member = await response.json();
        team.push(member);
      }
    } catch (error) {
      console.error(`Error loading team member ${file}:`, error);
    }
  }

  return team;
}

// Load all publications
export async function loadPublications(): Promise<Publication[]> {
  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}data/publications-index.json`);
    if (!response.ok) {
      return await loadPublicationsFromFiles();
    }
    const data = await response.json();
    return data.publications || [];
  } catch (error) {
    console.error('Error loading publications:', error);
    return await loadPublicationsFromFiles();
  }
}

async function loadPublicationsFromFiles(): Promise<Publication[]> {
  const pubFiles = [
    '2024-paper-1',
    '2023-conf-paper-1'
  ];

  const publications: Publication[] = [];
  const basePath = getBasePath();

  for (const file of pubFiles) {
    try {
      const response = await fetch(`${basePath}data/publications/${file}.json`);
      if (response.ok) {
        const pub = await response.json();
        publications.push(pub);
      }
    } catch (error) {
      console.error(`Error loading publication ${file}:`, error);
    }
  }

  return publications.sort((a, b) => b.year - a.year);
}

// Load site settings
export async function loadSiteSettings(): Promise<SiteSettings> {
  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}data/settings/general.json`);
    if (!response.ok) {
      return getDefaultSettings();
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading site settings:', error);
    return getDefaultSettings();
  }
}

function getDefaultSettings(): SiteSettings {
  return {
    siteTitle: 'Research Team',
    siteDescription: 'Research Team Website',
    heroTitle: 'Research Projects',
    heroSubtitle: 'We develop intelligent systems and decision-support tools.',
    contactEmail: 'contact@research-team.edu'
  };
}

// Load about settings
export async function loadAboutSettings(): Promise<AboutSettings> {
  try {
    const basePath = getBasePath();
    const response = await fetch(`${basePath}data/settings/about.json`);
    if (!response.ok) {
      return getDefaultAboutSettings();
    }
    return await response.json();
  } catch (error) {
    console.error('Error loading about settings:', error);
    return getDefaultAboutSettings();
  }
}

function getDefaultAboutSettings(): AboutSettings {
  return {
    title: 'About Us',
    content: 'About our research team.',
    mission: 'Our mission is to advance research.'
  };
}
