import {defineField, defineType} from 'sanity'
import {MdVideoLibrary as icon} from 'react-icons/md'

export default defineType({
  name: 'heroSection',
  title: 'Hero section',
  type: 'document',
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Section subtitle',
      type: 'string'
    }),
    defineField({
      name: 'video',
      title: 'Video background',
      type: 'file',
        options: {
            accept: 'video/*',
        },
    }),
    defineField({
      name: 'picture',
      title: 'Optional picture. Will be shown if video is not available.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      image: 'picture',
    },
    prepare(selection) {
      return {
        title: selection.title,
        image: selection.image,
      }
    },
  },
})
