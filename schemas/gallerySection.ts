import { defineField, defineType } from 'sanity';
import { MdImage as icon } from 'react-icons/md'; // Import an appropriate icon

export default defineType({
  name: 'gallery',
  title: 'Gallery section',
  type: 'document', // Change to 'document' if 'gallery' should be a top-level document
  icon,
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
    }),
    defineField({
      name: 'subHeading',
      title: 'Section title',
      type: 'string',
    }),
    defineField({
      name: 'galleryUrl',
      title: 'Link to photo album',
      type: 'url',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    defineField({
      name: 'display',
      title: 'Display as',
      type: 'string',
      description: 'How should we display these images?',
      options: {
        list: [
          { title: 'Columns', value: 'columns' },
          { title: 'Rows', value: 'rows' },
          { title: 'Masonry', value: 'masonry' },
        ],
        layout: 'radio', // <-- defaults to 'dropdown'
      },
    }),
    defineField({
      name: 'zoom',
      title: 'Zoom enabled',
      type: 'boolean',
      description: 'Should we enable zooming of images?',
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
      images: 'images',
      image: 'images.0',
    },
    prepare(selection) {
      const { images, image } = selection;
      return {
        title: `Gallery block of ${images ? images.length : 0} images`, // Adjusted to handle potential undefined 'images'
        subtitle: `Alt text: ${image ? image.alt : 'No alt text'}`, // Adjusted to handle potential undefined 'image'
        media: image,
      };
    },
  },
});
