/**
 * Sanity Studio configuration
 *
 * To run Sanity Studio locally, install the Sanity CLI and run:
 *   npx sanity dev
 *
 * Or deploy Studio to Sanity's hosted dashboard:
 *   npx sanity deploy
 */

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import {
  project,
  teamMemberDetail,
  publication,
  siteSettings,
  aboutSettings,
} from './schemas';

export default defineConfig({
  name: 'idiater',
  title: 'IDIATER CMS',

  projectId: 'lyz6if75',
  dataset: 'production',

  plugins: [
    structureTool(),
    presentationTool({
      previewUrl: {
        // Update this to your deployed site or use localhost for local development
        origin: 'http://localhost:3000',
        draftMode: {
          enable: '/api/draft',
        },
      },
    }),
  ],

  schema: {
    types: [
      project,
      teamMemberDetail,
      publication,
      siteSettings,
      aboutSettings,
    ],
  },
});
