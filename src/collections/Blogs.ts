// payload/collections/Blogs.ts
import { CollectionConfig } from 'payload'

const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'featuredMedia',
      label: 'Featured Media',
      type: 'upload',
      relationTo: 'media', // media collection can have both images/videos
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users', // link to Users collection
      required: true,
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
  ],
}

export default Blogs
