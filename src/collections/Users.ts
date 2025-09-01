import { isAdmin } from '@/access/isAdmin'
import { isAdminOrSelf } from '@/access/isAdminOrSelf'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: { singular: 'Member', plural: 'Members' },
  admin: {
    useAsTitle: 'email',
    group: 'Controls',
  },
  access: {
    create: isAdmin,
    read: isAdminOrSelf,
    update: isAdmin,
    delete: isAdmin,
  },

  auth: true,
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'roles',
      label: 'Role',
      type: 'select',
      saveToJWT: true,
      hasMany: true,
      defaultValue: ['receptionist'],
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Doctor',
          value: 'doctor',
        },
        {
          label: 'Receptionist',
          value: 'receptionist',
        },
      ],
      required: true,
    },
  ],
}
