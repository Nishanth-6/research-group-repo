import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'Nishanth-6/research-group-repo',
  },

  collections: {
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'public/data/projects/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        image: fields.url({ label: 'Image URL' }),
        categories: fields.multiselect({
          label: 'Categories',
          options: [
            { label: 'Energy', value: 'energy' },
            { label: 'AI', value: 'ai' },
            { label: 'Infrastructure', value: 'infrastructure' },
            { label: 'Resilience', value: 'resilience' },
            { label: 'Sustainability', value: 'sustainability' },
          ],
        }),
        team: fields.array(
          fields.text({ label: 'Team Member' }),
          { label: 'Team Members', itemLabel: (props) => props.value }
        ),
        featured: fields.checkbox({ label: 'Featured', defaultValue: false }),
        status: fields.select({
          label: 'Status',
          options: [
            { label: 'Active', value: 'active' },
            { label: 'Completed', value: 'completed' },
            { label: 'Upcoming', value: 'upcoming' },
          ],
          defaultValue: 'active',
        }),
        startDate: fields.date({ label: 'Start Date' }),
        endDate: fields.date({ label: 'End Date' }),
        url: fields.url({ label: 'Project URL' }),
      },
    }),

    team: collection({
      label: 'Team Members',
      slugField: 'name',
      path: 'public/data/team/*',
      format: { data: 'json' },
      schema: {
        name: fields.slug({ name: { label: 'Name' } }),
        role: fields.text({ label: 'Role' }),
        bio: fields.text({ label: 'Bio', multiline: true }),
        photo: fields.url({ label: 'Photo URL' }),
        email: fields.text({ label: 'Email' }),
        office: fields.text({ label: 'Office' }),
        interests: fields.array(
          fields.text({ label: 'Interest' }),
          { label: 'Research Interests', itemLabel: (props) => props.value }
        ),
        linkedin: fields.url({ label: 'LinkedIn' }),
        scholar: fields.url({ label: 'Google Scholar' }),
        website: fields.url({ label: 'Website' }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Faculty', value: 'faculty' },
            { label: 'Postdoc', value: 'postdoc' },
            { label: 'PhD Student', value: 'phd' },
          ],
          defaultValue: 'faculty',
        }),
        order: fields.integer({ label: 'Display Order', defaultValue: 1 }),
      },
    }),

    publications: collection({
      label: 'Publications',
      slugField: 'title',
      path: 'public/data/publications/*',
      format: { data: 'json' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        authors: fields.text({ label: 'Authors' }),
        year: fields.integer({ label: 'Year' }),
        venue: fields.text({ label: 'Journal/Conference' }),
        abstract: fields.text({ label: 'Abstract', multiline: true }),
        link: fields.url({ label: 'DOI/Link' }),
        pdf: fields.url({ label: 'PDF URL' }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Journal', value: 'journal' },
            { label: 'Conference', value: 'conference' },
            { label: 'Workshop', value: 'workshop' },
            { label: 'Preprint', value: 'preprint' },
          ],
          defaultValue: 'journal',
        }),
      },
    }),
  },

  singletons: {
    settings: {
      label: 'Site Settings',
      path: 'public/data/settings/general',
      format: { data: 'json' },
      schema: {
        siteTitle: fields.text({ label: 'Site Title' }),
        siteDescription: fields.text({ label: 'Site Description', multiline: true }),
        heroTitle: fields.text({ label: 'Hero Title' }),
        heroSubtitle: fields.text({ label: 'Hero Subtitle', multiline: true }),
        contactEmail: fields.text({ label: 'Contact Email' }),
        contactPhone: fields.text({ label: 'Contact Phone' }),
        address: fields.text({ label: 'Address', multiline: true }),
      },
    },
    about: {
      label: 'About Page',
      path: 'public/data/settings/about',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Page Title' }),
        content: fields.text({ label: 'Content', multiline: true }),
        mission: fields.text({ label: 'Mission Statement', multiline: true }),
        vision: fields.text({ label: 'Vision Statement', multiline: true }),
      },
    },
  },
});
