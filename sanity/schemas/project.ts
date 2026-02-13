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
  ],
  preview: {
    select: { title: 'title', subtitle: 'status' },
  },
});
