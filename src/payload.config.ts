import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { Users } from './collections/Users'
import { Patients } from './collections/Patients'
import { Media } from './collections/Media'
import { Purpose } from './collections/Purpose'
import { Procedure } from './collections/Procedure'
import { Expense } from './collections/Expense'
import { LabTest } from './collections/LabTest'
import patientReminderMessage from './utilities/patientReminderMessege'
import { Whatsapp } from './collections/Whatsapp'


const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    dateFormat: 'dd/MM/yyyy',
    avatar: { Component: '/components/Avatar' },
    importMap: {
      baseDir: path.resolve(dirname),
    },
    theme: 'light',
    components: {
      beforeDashboard: ['/components/BeforeDashboard'],
      graphics: {
        Icon: '/components/Icon',
        Logo: '/components/Logo',
      },
    },
    meta: {
      titleSuffix: '- ' + process.env.AppName,
      icons: [{ url: '/skineralogo-fav.png' }],
      description: '',
      metadataBase: null,
      openGraph: {
        description: 'Skin Era',
      },
    },
  },
  onInit: async (payload) => {
    try {
      await payload.jobs.queue({
        task: 'sendMessage',
        input: [],
        queue: '8pmqueue',
      })
      console.log("Payload queue started !!");
    } catch (err) {
      console.log('error in creating initial job', err)
    }
  },
  collections: [Users, Media, Purpose, Procedure, LabTest, Expense, Patients, Whatsapp],
  jobs: {
    tasks: [
      {
        retries: 0,
        slug: 'sendMessage',
        label: 'sendMessage',
        handler: async ({ req }) => {
          console.log("job is running *****************************************")
          try {
          
            const formattedTomorrow = new Date(Date.now() + 86400000).toLocaleDateString('en-GB'); // DD/MM/YYYY
          
            const { docs: patients } = await req.payload.find({
              collection: 'patients',
              where: { 'appointments.prescriptionValidity': { equals: formattedTomorrow } },
              limit: 5000,
            });
          
            const patientDetails = patients.map(({ name, primaryNumber }) => ({
              name,
              mobile: primaryNumber,
              date: formattedTomorrow,
            }));
            for (const { name, mobile, date } of patientDetails) {
              console.log(`sending reminder messege to ${name} over ${mobile} for ${date}`)
              await patientReminderMessage(name, mobile, date);
            }
          } catch (error) {
            console.error('Error in the follow-up job:', error);
          } finally {
            // Queue the next job
            await req.payload.jobs.queue({
              task: 'sendMessage',
              input: [],
              queue: '8pmqueue',
            });
          }

          return { output: [] }
        },
      },
    ],
    deleteJobOnComplete: false,
    autoRun: [
      {
       cron: '0 20 * * *', // Runs at 8:00 PM every day
        limit: 1,
        queue: '8pmqueue',
      },
    ],
  },

  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [payloadCloudPlugin()],
})
