import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'lyz6if75';
const dataset = import.meta.env.VITE_SANITY_DATASET || 'production';

// Detect if we're inside the Sanity Presentation Tool iframe
const isStudioPreview =
  typeof window !== 'undefined' && window.self !== window.top;

// Normal client for public visitors (fast CDN reads)
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: !isStudioPreview,
  // Enable stega encoding when inside the Presentation Tool
  // This embeds invisible metadata so overlays can map text → document fields
  stega: {
    enabled: isStudioPreview,
    studioUrl: 'https://idiater.sanity.studio',
  },
});

export { isStudioPreview };
