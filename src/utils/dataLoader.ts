// Utility functions to load data from Sanity CMS

import { sanityClient } from '../lib/sanity';

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
  overview?: string;
  approach?: string;
  impact?: string;
  relatedResearchArea?: string;
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

// ─── GROQ Queries ───

const PROJECT_QUERY = `*[_type == "project"] | order(featured desc, title asc) {
  title,
  description,
  image,
  categories,
  team,
  featured,
  status,
  startDate,
  endDate,
  url,
  overview,
  approach,
  impact,
  relatedResearchArea
}`;

const TEAM_QUERY = `*[_type == "teamMemberDetail"] | order(sectionOrder asc, order asc) {
  _id,
  name,
  "role": title,
  bio,
  "photo": image,
  email,
  "interests": researchAreas,
  linkedin,
  scholar,
  website,
  "category": section,
  order
}`;

const PUBLICATION_QUERY = `*[_type == "publication"] | order(year desc, title asc) {
  _id,
  title,
  authors,
  year,
  venue,
  abstract,
  type,
  status,
  links
}`;

const SITE_SETTINGS_QUERY = `*[_type == "siteSettings"][0] {
  siteTitle,
  siteDescription,
  heroTitle,
  heroSubtitle,
  contactEmail,
  contactPhone,
  address
}`;

const ABOUT_SETTINGS_QUERY = `*[_type == "aboutSettings"][0] {
  title,
  content,
  mission,
  vision
}`;

// ─── Loaders ───

export async function loadProjects(): Promise<Project[]> {
  try {
    const data = await sanityClient.fetch<Project[]>(PROJECT_QUERY);
    return data ?? [];
  } catch (error) {
    console.error('Error loading projects from Sanity:', error);
    return [];
  }
}

export async function loadTeamMembers(): Promise<TeamMember[]> {
  try {
    const data = await sanityClient.fetch<TeamMember[]>(TEAM_QUERY);
    return data ?? [];
  } catch (error) {
    console.error('Error loading team members from Sanity:', error);
    return [];
  }
}

export async function loadPublications(): Promise<Publication[]> {
  try {
    const data = await sanityClient.fetch<Publication[]>(PUBLICATION_QUERY);
    return data ?? [];
  } catch (error) {
    console.error('Error loading publications from Sanity:', error);
    return [];
  }
}

export async function loadSiteSettings(): Promise<SiteSettings> {
  try {
    const data = await sanityClient.fetch<SiteSettings | null>(SITE_SETTINGS_QUERY);
    return data ?? getDefaultSettings();
  } catch (error) {
    console.error('Error loading site settings from Sanity:', error);
    return getDefaultSettings();
  }
}

export async function loadAboutSettings(): Promise<AboutSettings> {
  try {
    const data = await sanityClient.fetch<AboutSettings | null>(ABOUT_SETTINGS_QUERY);
    return data ?? getDefaultAboutSettings();
  } catch (error) {
    console.error('Error loading about settings from Sanity:', error);
    return getDefaultAboutSettings();
  }
}

// ─── Defaults (fallback if Sanity is empty or unreachable) ───

function getDefaultSettings(): SiteSettings {
  return {
    siteTitle: 'Research Team',
    siteDescription: 'Research Team Website',
    heroTitle: 'Research Projects',
    heroSubtitle: 'We develop intelligent systems and decision-support tools.',
    contactEmail: 'contact@research-team.edu',
  };
}

function getDefaultAboutSettings(): AboutSettings {
  return {
    title: 'About Us',
    content: 'About our research team.',
    mission: 'Our mission is to advance research.',
  };
}
