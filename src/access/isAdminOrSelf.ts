import { Access } from 'payload'
import { User } from '@/payload-types'

export const isAdminOrSelf: Access = ({ req }) => {
  const user = req.user as User | undefined
  if (user) {
    if (user?.roles?.includes('admin')) {
      return true
    }
    return { id: { equals: user?.id } }
  }
  return false
}
