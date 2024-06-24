import {defineField, defineType} from 'sanity'
import {MdList as icon} from 'react-icons/md'

export default defineType({
  name: 'wishListSection',
  title: 'Wish List Section',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'links',
      title: 'Wish List Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
            }),
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
            }),
            defineField({
              name: 'siteName',
              title: 'Site Name',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'displaySection',
      title: 'Display Section',
      type: 'boolean',
      initialValue: true,
      description: 'Should this section be shown on the webpage?',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {
        title: selection.title,
      }
    },
  },
})