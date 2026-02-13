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

  plugins: [structureTool()],

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
