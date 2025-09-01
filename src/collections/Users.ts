import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'name',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    { name: 'name', type: 'text' },
    {
      name: 'authorImage',
      label: 'User Image',
      type: 'upload',
      relationTo: 'media', // media collection can have both images/videos
      required: true,
    },
  ],
}
