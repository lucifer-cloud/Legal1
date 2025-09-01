import { Access } from 'payload'
import { User } from '@/payload-types'

// ✅ Allow both "admin" and "receptionist"
export const isAdminOrdoctor: Access = ({ req }) => {
  const user = req.user as User | undefined
  return Boolean(user?.roles?.some((role) => ['admin', 'doctor'].includes(role)))
}
