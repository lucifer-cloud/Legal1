import { isAdmin } from '@/access/isAdmin'
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Images', plural: 'Images' },
  admin: {
    group: 'Controls',
    hidden: ({ user }) => !user?.roles?.includes?.('admin'),
  },
  access: {
    read: () => true,
    delete: isAdmin,
  },
  fields: [],
  upload: true,
}
