import { Id } from "@shared/types/Id"

export interface AdminEntity {
  id: Id
  login: string
  password: string
}