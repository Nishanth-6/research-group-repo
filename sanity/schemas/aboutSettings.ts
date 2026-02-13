import { defineType, defineField } from 'sanity';

export const aboutSettings = defineType({
  name: 'aboutSettings',
  title: 'About Page Settings',
  type: 'document',
  // Singleton — only one instance
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      rows: 10,
      description: 'Main content (supports Markdown)',
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
});
