import {defineField, defineType} from 'sanity'
import {MdTextFields as icon} from 'react-icons/md'

export default defineType({
  name: 'ourHistory',
  title: 'Our history section',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
    }),
    defineField({
      name: 'sectionText',
      title: 'Section Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'picture1',
      title: 'Picture 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'picture2',
      title: 'Picture 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'displaySection',
      title: 'Display Section',
      type: 'boolean',
      initialValue: true,
      description: 'Should this section be showed on the webpage?',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'picture1',
    },
    prepare(selection) {
      return {
        title: selection.title,
        image: selection.image,
      }
    },
  },
})
