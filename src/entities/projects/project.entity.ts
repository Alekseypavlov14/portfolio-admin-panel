import { Id } from '@shared/types/Id'

export interface ProjectEntity {
  id: Id
  name: string
  description: string
  technologies: string[]
  link: string
  repository: string
  date: number
}