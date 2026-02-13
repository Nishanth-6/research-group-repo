import { defineType, defineField } from 'sanity';

export const publication = defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(1900).max(2100),
    }),
    defineField({
      name: 'venue',
      title: 'Venue / Journal / Conference',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'abstract',
      title: 'Abstract',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'type',
      title: 'Publication Type',
      type: 'string',
      options: {
        list: [
          { title: 'Journal Paper', value: 'journal' },
          { title: 'Conference Paper', value: 'conference' },
          { title: 'Workshop Paper', value: 'workshop' },
          { title: 'Working Paper', value: 'working_paper' },
          { title: 'Preprint', value: 'preprint' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'researchArea',
      title: 'Research Area',
      type: 'string',
      options: {
        list: [
          { title: 'Self-Adapting Approximations', value: 'self-adapting-approximations' },
          { title: 'Energy Real Options', value: 'energy-real-options' },
          { title: 'Energy & Computing Nexus', value: 'energy-computing-nexus' },
          { title: 'Large-Scale Optimization', value: 'large-scale-optimization' },
        ],
      },
      description: 'The primary research focus area this publication belongs to',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      description: 'e.g. "Forthcoming", "Under Review", "Published"',
    }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'publicationLink',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: { title: 'label', subtitle: 'url' },
          },
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Year (newest first)',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'venue' },
  },
});
