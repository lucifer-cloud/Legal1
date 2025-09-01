import { isAdmin } from '@/access/isAdmin'
import { CollectionConfig } from 'payload'

export const Purpose: CollectionConfig = {
  slug: 'purpose',
  labels: { singular: 'Purpose', plural: 'Purpose' },
  admin: {
    useAsTitle: 'name',
    group: 'Controls',
    hidden: ({ user }) => !user?.roles?.includes?.('admin'),
  },
  access: {
    delete: isAdmin,
  },

  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'cost',
      label: 'Cost',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
  ],
}
