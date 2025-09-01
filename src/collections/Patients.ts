import { isAdmin } from '@/access/isAdmin'
import newPatientNotification from '@/utilities/newPatientNotification'
import type { CollectionConfig } from 'payload'

export const Patients: CollectionConfig = {
  slug: 'patients',
  
  admin: {    
    useAsTitle: 'name',
    group: 'Controls',
    defaultColumns: ['name', 'primaryNumber', 'age', 'gender', 'appointments', 'id',"createdAt"],
    listSearchableFields: ['name', 'primaryNumber', 'email'],
    
  },
  defaultSort:"-createdAt",
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
          admin: {
            position: 'sidebar',
            width: '33.33%',
          },
        },
        {
          name: 'primaryNumber',
          label: 'Mobile number',
          type: 'number',
          required: true,
          admin: {
            width: '33.33%',
          },
        },
        {
          name: 'age',
          label: 'Age',
          type: 'number',
          required: true,
          admin: {
            width: '33.34%',
          },
        },
        {
          name: 'gender',
          label: 'Gender',
          type: 'select',
          required: true,
          options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },
          ],
          admin: {
            width: '33.33%',
          },
        },
        {
          name: 'email',
          label: 'Email address',
          type: 'email',
          admin: {
            width: '33.33%',
          },
        },

        {
          name: 'secondaryNumber',
          label: 'Alternative Mobile number (if any)',
          type: 'number',
          admin: {
            width: '33.34%',
          },
        },

        {
          name: 'address',
          label: 'Address',
          type: 'textarea',
          admin: {
            width: '100%',
          },
        },
      ],
    },
    {
      name: 'appointments',
      label: 'Appointments',
      type: 'array',
      admin: {
        width: '100%',
      },
      fields: [
        {
          type: 'row',
          admin: {
            width: '100%',
          },
          fields: [
            {
              name: 'appointmentDate',
              label: 'Appointment Date',
              type: 'date',
              admin: {
                width: '33.33%',
                date: {
                  displayFormat: 'dd/MM/yyyy',
                },
              },
            },
            {
              name: 'followUpDay',
              label: 'Next Follow up (Days)',
              type: 'number',
              admin: {
                width: '33.33%',
              },
            },
            {
              name: 'prescriptionValidity',
              label: 'Follow up Date',
              type: 'text',
              admin: {
                width: '33.34%',
                readOnly: true, // Prevent user from editing manually
                components: {
                  Field: {
                    path: '/components/NextFollowupDate',
                  },
                },
              },
            },

            {
              name: 'purpose',
              label: 'Purpose',
              type: 'relationship',
              relationTo: 'purpose',
              admin: {
                allowCreate: false,
                allowEdit: false,
                width: '33.33%',
              },
            },
            {
              name: 'purposeAmount',
              label: 'Amount received (Rs)',
              type: 'text',
              admin: {
                width: '33.34%',
                components: {
                  Field: {
                    path: '/components/PurposeAmount',
                  },
                },
              },
            },
            {
              name: 'PurposePaymentType',
              label: 'Payment Mode',
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
          name: 'procedures',
          label: 'Procedures',

          labels: {
            singular: 'Procedure',
            plural: 'Procedures',
          },
          type: 'array',
          admin: {
            width: '100%',
          },

          fields: [
            {
              type: 'row',
              admin: {
                width: '100%',
              },
              fields: [
                {
                  name: 'procedure',
                  label: 'Procedure',
                  type: 'relationship',
                  relationTo: 'procedure',
                  admin: {
                    width: '33.33%',
                    allowCreate: false,
                    allowEdit: false,
                  },
                },
                {
                  name: 'procedureAmount',
                  label: 'Amount received (Rs)',
                  type: 'text',
                  admin: {
                    width: '33.34%',
                    components: {
                      Field: {
                        path: '/components/ProcedureAmount',
                      },
                    },
                  },
                },
                {
                  name: 'procedurePaymentType',
                  label: 'Payment Mode',
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
          ],
        },
        {
          name: 'labTest',
          label: 'Lab Test',
          type: 'relationship',
          relationTo: 'labtest',
          hasMany: true,
          admin: {
            width: '100%',
            allowEdit: false,
          },
        },
        {
          type: 'row',
          admin: {
            width: '100%',
          },
          fields: [
            {
              name: 'personImage',
              label: 'Patient Image',
              type: 'upload',
              hasMany: true,
              relationTo: 'media',
              admin: {
                description: 'Upload a profile image',
                width: '50%',
              },
            },
            {
              name: 'invoiceImage',
              label: 'Prescription Image',
              type: 'upload',
              hasMany: true,
              relationTo: 'media',
              admin: {
                description: 'Upload a invoice image',
                width: '50%',
              },
            },
          ],
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
          name: 'compareImages',
          label: 'Compare Images',
          type: 'ui',
          admin: {
            components: {
              Field: {
                path: '/components/CompareImages',
              },
            },
            condition: (_, { id }) => Boolean(id),
          },
        },
        {
          name: 'printInvoice',
          label: 'Print Invoice',
          type: 'ui',
          admin: {
            components: {
              Field: {
                path: '/components/PrintInvoice',
              },
            },
            condition: (_, { id }) => Boolean(id),
          },
        },
      ],
    },
  ],
  hooks: {
    afterChange: [newPatientNotification],
  },
}
