import { defineType, defineField } from 'sanity';

/**
 * Rich team member document used by the Team page.
 * Includes IDIATER-specific role, education, awards, etc.
 */
export const teamMemberDetail = defineType({
  name: 'teamMemberDetail',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: 'Used as the member ID for URL routing',
    }),
    defineField({
      name: 'title',
      title: 'Title / Position',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'section',
      title: 'Section',
      type: 'string',
      options: {
        list: [
          { title: 'Director', value: 'Director' },
          { title: 'Faculty', value: 'Faculty' },
          { title: 'Policy Advisor', value: 'Policy Advisor' },
          { title: 'PhD Students', value: 'PhD Students' },
          { title: 'Masters Students', value: 'Masters Students' },
          { title: 'Alumni', value: 'Alumni' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sectionOrder',
      title: 'Section Display Order',
      type: 'number',
      description: 'Controls section ordering: Director=1, Faculty=2, Policy Advisor=3, PhD=4, Masters=5, Alumni=6',
      initialValue: 5,
    }),
    defineField({
      name: 'order',
      title: 'Order within Section',
      type: 'number',
      description: 'Display order within the section (lower = first)',
      initialValue: 0,
    }),
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
      description: 'Fallback initials shown when no photo is available',
    }),
    defineField({
      name: 'image',
      title: 'Photo URL',
      type: 'string',
      description: 'Path or URL to team member photo',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Personal Website',
      type: 'url',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'scholar',
      title: 'Google Scholar URL',
      type: 'url',
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'idiaterRole',
      title: 'Role at IDIATER',
      type: 'text',
      rows: 4,
      description: 'Description of their specific role and contributions within IDIATER',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'researchAreas',
      title: 'Research Areas',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'education',
      title: 'Education',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'awards',
      title: 'Awards & Recognition',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'section' },
  },
});
