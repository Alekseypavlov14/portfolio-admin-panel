import { Id } from '@shared/types/Id'

export function generateId(): Id {
  return Date.now()
}