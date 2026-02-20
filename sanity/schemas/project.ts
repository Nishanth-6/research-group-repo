import { defineType, defineField } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'Research Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image URL',
      type: 'url',
      description: 'External image URL (e.g. Unsplash)',
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Energy', value: 'energy' },
          { title: 'AI', value: 'ai' },
          { title: 'Infrastructure', value: 'infrastructure' },
          { title: 'Resilience', value: 'resilience' },
          { title: 'Sustainability', value: 'sustainability' },
        ],
      },
    }),
    defineField({
      name: 'team',
      title: 'Team Members',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Names of team members working on this project',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active', value: 'active' },
          { title: 'Completed', value: 'completed' },
          { title: 'Upcoming', value: 'upcoming' },
        ],
      },
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
    }),
    defineField({
      name: 'url',
      title: 'Project URL',
      type: 'url',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 6,
      description: 'Detailed project overview section',
    }),
    defineField({
      name: 'approach',
      title: 'Approach',
      type: 'text',
      rows: 6,
      description: 'Technical approach and methodology section',
    }),
    defineField({
      name: 'impact',
      title: 'Impact',
      type: 'text',
      rows: 6,
      description: 'Project impact and results section',
    }),
    defineField({
      name: 'relatedResearchArea',
      title: 'Related Research Area',
      type: 'string',
      description: 'Research area tag for linking related publications',
    }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'status' },
  },
});
