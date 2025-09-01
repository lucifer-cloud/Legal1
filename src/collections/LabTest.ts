import { isAdmin } from '@/access/isAdmin'
import { CollectionConfig } from 'payload'

export const LabTest: CollectionConfig = {
  slug: 'labtest',
  labels: { singular: 'Lab Test', plural: 'Lab Test' },
  admin: {
    useAsTitle: 'name',
    group: 'Controls',
    hidden: ({ user }) => !user?.roles?.includes?.('admin'),
  },
  access: {
    delete: isAdmin,
    update: isAdmin,
  },

  fields: [
    {
      name: 'name',
      label: 'Test Name',
      type: 'text',
      required: true,
      unique: true,
    },
  ],
}
