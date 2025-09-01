import type { CollectionConfig } from 'payload'

export const Whatsapp: CollectionConfig = {
  slug: 'whatsapp',
  labels: { singular: 'Whatsapp Message', plural: 'Whatsapp Messages' },
  admin: {
    useAsTitle: 'to',
    group: 'Controls',
    hidden: false,
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => false,
    delete: () => false,
  },
  fields: [{
      name: 'userName',
      label: 'Name',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'to',
      label: 'Recipient Phone Number',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'templateName',
      label: 'Template Name',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'status',
      label: 'Delivery Status',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'sentAt',
      label: 'Sent Timestamp',
      type: 'text',
      required: true,
      admin: {
        readOnly: true,
      },
    },
  
  ],
}
