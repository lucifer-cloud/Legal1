import { isAdmin } from '@/access/isAdmin'
import { CollectionConfig } from 'payload'

export const Procedure: CollectionConfig = {
  slug: 'procedure',
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
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'cost',
      label: 'Cost',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
  ],
}
