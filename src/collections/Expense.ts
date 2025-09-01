import { isAdmin } from '@/access/isAdmin'
import { CollectionConfig } from 'payload'

export const Expense: CollectionConfig = {
  slug: 'expense',
  admin: {
    useAsTitle: 'name',
    group: 'Controls',
  },
  access: {
    delete: isAdmin,
  },
  fields: [
    {
      type: 'row',
      admin: {
        width: '100%',
      },
      fields: [
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          required: true,
          unique: true,
          admin: {
            width: '33.33%',
          },
        },
        {
          name: 'date',
          label: 'Date',
          type: 'date',
          required: true,
          unique: true,
          admin: {
            width: '33.33%',
          },
        },
        {
          name: 'amount',
          label: 'Amount',
          type: 'number',
          defaultValue: 0,
          required: true,
          admin: {
            width: '33.34%',
          },
        },
        {
          name: 'paymentMode',
          label: 'Mode of Payment',
          type: 'select',
          options: [
            {
              label: 'Cash',
              value: 'cash',
            },
            {
              label: 'Card',
              value: 'card',
            },
            {
              label: 'Online',
              value: 'online',
            },
          ],
          admin: {
            width: '33.33%',
          },
        },
      ],
    },
    {
      type: 'row',
      admin: {
        width: '100%',
      },
      fields: [
        {
          name: 'invoice',
          label: 'Invoice',
          type: 'upload',
          hasMany: true,
          relationTo: 'media',
          admin: {
            description: 'Upload a invoice image',
            width: '66.66%',
          },
        },
      ],
    },
  ],
}
