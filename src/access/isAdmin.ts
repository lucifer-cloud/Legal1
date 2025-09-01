import { Access } from 'payload'
import { User } from '@/payload-types'

// Define a type-safe access function
export const isAdmin: Access = ({ req }) => {
  const user = req.user as User | undefined
  return Boolean(user?.roles?.includes('admin'))
}
